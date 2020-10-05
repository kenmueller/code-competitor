// import { loadStripe } from '@stripe/stripe-js'

import firebase from './firebase'

import 'firebase/functions'

interface CreateStripeSession {
	(type: 'level', data: { level: number }): Promise<void>
}

// const _stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
const _createStripeSession = firebase.functions().httpsCallable('createStripeSession')

const createStripeSession: CreateStripeSession = async (type, data) => {
	try {
		// const stripe = await _stripe
		const sessionId = await _createStripeSession({ type, ...data })
		console.log(sessionId)
		// if (typeof sessionId !== 'string')
		// 	throw new Error('An unknown error occurred')
		
		// const { error } = await stripe.redirectToCheckout({ sessionId })
		
		// if (error)
		// 	throw error
	} catch (error) {
		console.error(error)
		alert(error.message)
	}
}

export default createStripeSession
