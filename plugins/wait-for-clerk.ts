export default defineNuxtPlugin(async () => {
  const { isLoaded } = useAuth()

  // Block rendering of the page until Clerk is loaded
  await new Promise((resolve) => {
    watch(isLoaded, (loaded) => {
      if (loaded) {
        resolve(true)
      }
    })
  })

  console.log('Clerk is loaded. Middleware protection can proceed.')
})
