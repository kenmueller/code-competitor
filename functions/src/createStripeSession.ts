import { https } from 'firebase-functions'
import * as admin from 'firebase-admin'

import stripe from './stripe'
import { getNumberFromLevelSlug } from './utils'
import { BASE_URL, LEVEL_PRICE } from './constants'

const { onCall, HttpsError } = https
const firestore = admin.firestore()

export default onCall(async data => {
	switch (data.type) {
		case 'level':
			const { slug, instance } = data
			
			if (typeof slug !== 'string')
				throw new HttpsError('invalid-argument', 'Invalid slug')
			
			if (!(typeof instance === 'string' && instance))
				throw new HttpsError('invalid-argument', 'Invalid instance')
			
			const number = getNumberFromLevelSlug(slug)
			
			if (number === null)
				throw new HttpsError('invalid-argument', 'Invalid slug')
			
			const snapshot = await firestore
				.doc(`levels/${slug}/instances/${instance}`)
				.get()
			
			if (!snapshot.exists)
				throw new HttpsError('not-found', 'Instance not found')
			
			if (snapshot.get('spots') <= 0)
				throw new HttpsError('failed-precondition', 'There are no spots remaining')
			
			const url = `${BASE_URL}/levels/${slug}`
			
			try {
				const { id } = await stripe.checkout.sessions.create({
					payment_method_types: ['card'],
					line_items: [
						{
							price_data: {
								currency: 'usd',
								product_data: {
									name: `Level ${number}`
								},
								unit_amount: LEVEL_PRICE
							},
							quantity: 1
						}
					],
					mode: 'payment',
					success_url: `${url}/success`,
					cancel_url: url
				})
				
				return id
			} catch (error) {
				throw new HttpsError('internal', error.message)
			}
		default:
			throw new HttpsError('invalid-argument', 'Invalid type')
	}
})
