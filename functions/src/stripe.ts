import Stripe from 'stripe'

import { STRIPE_KEY } from './constants'

// @ts-ignore
export default new Stripe(STRIPE_KEY)
