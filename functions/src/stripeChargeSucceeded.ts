import { config, https } from 'firebase-functions'
import Stripe from 'stripe'

import stripe from './stripe'

const SIGNING_SECRET = config().webhooks.stripe_charge_succeeded

export default https.onRequest((req, res) => {
	const signature = req.header('Stripe-Signature')
	
	if (!signature) {
		res.status(400).send('Signature not found')
		return
	}
	
	let event: Stripe.Event
	
	try {
		event = stripe.webhooks.constructEvent(req.body, signature, SIGNING_SECRET)
	} catch (error) {
		res.status(400).send(error.message)
		return
	}
	
	if (event.type !== 'charge.succeeded') {
		res.status(400).send(`Unhandled event type "${event.type}"`)
		return
	}
	
	console.log('EVENT DATA:', JSON.stringify(event.data))
	
	res.json({ received: true })
})
