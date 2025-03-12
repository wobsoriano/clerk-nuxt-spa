const isProtectedPage = createRouteMatcher(['/profile'])
const isGuestPage = createRouteMatcher(['/sign-(in|up)'])

export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()

  if (userId.value && isGuestPage(to)) {
    return navigateTo('/profile')
  }

  if (!userId.value && isProtectedPage(to)) {
    return navigateTo('/sign-in')
  }
})
