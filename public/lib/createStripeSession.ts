import { Stripe } from '@stripe/stripe-js'
import { loadStripe } from '@stripe/stripe-js/pure'

import firebase from './firebase'

import 'firebase/functions'

interface CreateStripeSession {
	(type: 'level', data: { slug: string, instance: string }): Promise<void>
}

const _createStripeSession = firebase.functions().httpsCallable('createStripeSession')

let _stripe: Promise<Stripe> | null = null

const createStripeSession: CreateStripeSession = async (type, data) => {
	const stripe = await (_stripe ??= loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY))
	const { data: sessionId } = await _createStripeSession({ type, ...data })
	
	if (typeof sessionId !== 'string')
		throw new Error('An unknown error occurred')
	
	const { error } = await stripe.redirectToCheckout({ sessionId })
	
	if (error)
		throw error
}

export default createStripeSession
