import * as functions from 'firebase-functions'

const config = functions.config()

export const DEBUG = config.env.debug === '1'

export const STRIPE_KEY = config.stripe[`${DEBUG ? 'test' : 'live'}_key`]

export const BASE_URL = 'https://codecompetitor.com'

export const FIRST_LEVEL = 0
export const LAST_LEVEL = 11
