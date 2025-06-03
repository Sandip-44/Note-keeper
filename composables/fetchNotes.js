// // composables/useNotes.ts
// const { supabase } = useSupabaseClient();
// import { ref } from "vue";

// export const useNotes = async () => {
//   let notes = ref([]);
//   const error = ref(null);
//   const loading = ref(true);

//   try {
//     let { data: notes, error } = await supabase.from("notes").select("*");
//     if (error) throw error;
//     notes.value = data;
//   } catch (err) {
//     error.value = err;
//     console.error("Error fetching notes:", err.message);
//   } finally {
//     loading.value = false;
//   }

//   return { notes, error, loading };
// };
