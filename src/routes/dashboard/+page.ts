import type { PageLoad } from './$types'
import { error, redirect } from '@sveltejs/kit'

export const load: PageLoad = async ({ fetch }) => {
  // Get the authenticated user from the current session
  // redirect the user to home page incase the user is not authenticated
  return {}
}
