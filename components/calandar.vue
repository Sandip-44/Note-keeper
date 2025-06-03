<script setup lang="ts">
import { ref } from "#imports";
const date = ref(new Date());

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);
</script>

<template>
  <div>
    <client-only>
      <!-- <VCalendar v-model="date" /> -->

      <VDatePicker
        v-model="date"
        :attributes="attrs"
        style="height: 80%; width: 80%; min-height: "
      />
    </client-only>
  </div>
</template>
