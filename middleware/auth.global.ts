// // // middleware/auth.global.ts
// export default defineNuxtRouteMiddleware((to) => {
//   const user = useSupabaseUser();
//   // If not authenticated and not already on /, redirect to login
//   if (!user.value && to.path !== "/login") {
//     return navigateTo("/");
//   }
// });
export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser(); // reactive user ref
  const publicPages = ["/login", "/register", "/"]; // tweak as needed
  const isPublic = publicPages.includes(to.path);

  // 1) If user is not logged in and is trying to visit a protected page → send to login
  if (!user.value && !isPublic) {
    return navigateTo("/login");
  }

  // 2) If user *is* logged in and tries to go to a public page → send to dashboard
  if (user.value && isPublic) {
    return navigateTo("/dashboard");
  }

  // else allow navigation
});
