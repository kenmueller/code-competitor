import { initializeApp } from 'firebase-admin'

initializeApp({
	storageBucket: 'code-competitor.appspot.com'
})

export { default as createStripeSession } from './createStripeSession'
export { default as stripeChargeSucceeded } from './stripeChargeSucceeded'
