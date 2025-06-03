// server/api/notes.get.ts
export default defineEventHandler(async (event) => {
  const { supabase } = event.context;

  const { data, error } = await supabase.from("notes").select("*");

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data;
});
