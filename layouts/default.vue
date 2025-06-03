<template>
  <a-row span="24">
    <a-col span="4">
      <left-sidebar />
    </a-col>
    <a-col span="20" class="wrapper-note-layout">
      <!-- <bread-crum /> -->
      <slot />
    </a-col>
  </a-row>
</template>
<script setup></script>
<style>
.wrapper-note-layout {
  padding: 0px;
}
</style>
