import { onRequest } from 'firebase-functions/v2/https'
import { app } from './main'

export const api = onRequest({ region: 'asia-southeast1' }, app)
