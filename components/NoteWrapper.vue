<template>
  <a-row span="24" class="wrap">
    <a-col span="12">
      <img
        src="/undraw_personal-notebook_blje.svg"
        height="100%"
        width="100%"
        alt=""
      />
    </a-col>
    <a-col span="12" class="form-wrapper">
      <slot />
    </a-col>
  </a-row>
</template>

<style>
.form-wrapper {
  padding: 0px;
  box-sizing: border-box;
}

.form {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  width: 100% !important;
}
.wrap {
  margin: 0px 100px;
  display: flex;
  height: 100vh;
  align-items: center;
}
/* .onboard-bg-img {
  background: url(/undraw_personal-notebook_blje.svg) !important;
  background-repeat: no-repeat !important;
} */
</style>
