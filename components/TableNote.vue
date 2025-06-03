<template>
  <a-table :columns="columns" :data-source="notes" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>view </a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a>Edit</a>
          <a-divider type="vertical" />
          <a>Update</a>
        </span>
      </template>
    </template>

    <template #title>Your Notes,</template>
    <template #footer>Footer</template>
  </a-table>
</template>
<script setup>
const supabase = useSupabaseClient();
import { onMounted, ref } from "vue";

const columns = [
  {
    title: "Title",
    className: "title",
    dataIndex: "title",
  },
  {
    title: "cat",
    dataIndex: "cat",
  },
  {
    title: "desc",
    dataIndex: "desc",
  },
  // {
  //   title: "Action",
  //   key: "action",
  // },
];
const notes = ref([]);
// const {
//   data: notes,
//   pending,
//   error,
//   refresh,
// } = await useAsyncData(
//   "notes", // Unique cache key
//   async () => {
//     const supabase = useSupabaseClient();
//     const { data, error } = await supabase.from("notes").select("*");
//     if (error) throw error;
//     return data;
//   }
// );
const fetchNotes = async () => {
  const { data, error } = await supabase.from("notes").select("*");
  if (error) throw error;
  notes.value = data; // ✅ Assign to `.value`
  console.log("Fetched notes:", notes.value); // Verify here
};

onMounted(async () => {
  await fetchNotes();
  console.log("onMounted notes:", notes.value); // Should log data
});
</script>
<style scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
