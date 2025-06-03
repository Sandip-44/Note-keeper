<template>
  <div class="main-container">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url("https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap");

* {
  font-family: "Satoshi", sans-serif;
}
.main-container {
  width: 100%;
  height: 100%;
}
body,
input,
button,
textarea,
p,
h1,
h2,
h3,
h4,
ul,
li,
a {
  font-family: "Satoshi", sans-serif;
}
body {
  background: linear-gradient(135deg, #0f172a, #1e1b4b);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
::v-deep(.ant-form-item-label > label) {
  font-size: 1.1rem !important;
  font-weight: 400;
}
::v-deep(.ant-input) {
  height: 2.3rem;
  font-size: 1.2em;
}

::v-deep(.ant-input::placeholder) {
  opacity: 0.7;
}
::v-deep(.ant-select-selector) {
  height: 2.3rem !important;
  font-size: 1.2em;
}

::v-deep(.ant-select-selection-placeholder) {
  opacity: 0.7;
}
/* .main-container {
  height: 100vh;
} */
</style>
