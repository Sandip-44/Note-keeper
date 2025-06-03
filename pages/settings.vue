<template>
  <a-button @click="signOut">Logout</a-button>
</template>
<script setup>
const supabase = useSupabaseClient();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout failed:", error.message);
  } else {
    navigateTo("/login");
  }
};
</script>
