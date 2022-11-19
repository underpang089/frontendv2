import type { PageLoad } from './$types'
import { error, redirect } from '@sveltejs/kit'

export const load: PageLoad = async ({ fetch }) => {
  throw redirect(302, '/dashboard')
}
