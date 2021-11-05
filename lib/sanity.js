import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
}

export const builder = imageUrlBuilder(config)

export const urlFor = (source) => builder.image(source)

export default sanityClient(config)
