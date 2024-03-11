import { createClient, type SanityClient } from 'next-sanity'

const projectId = '8pp6c2ao'
const dataset = 'production'
const apiVersion = '2024-03-11'


export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
