<template>
  <div class="sidebar-wrapper">
    <div style="height: 0px; margin-left: 22px">
      <a
        href="
            "
      >
        <img src="/logo.png" alt="img logo" height="200px" width="80%" />
      </a>
    </div>
    <ul>
      <li>
        <NuxtLink to="/dashboard">
          <a href="#">
            <HomeOutlined />
            Home</a
          >
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/onboarding">
          <a href="#">
            <FileAddOutlined />
            Add Note</a
          >
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/viewnote">
          <a href="#">
            <UnorderedListOutlined />
            View Note</a
          >
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/addcategory">
          <a href="#">
            <PlusCircleOutlined />
            Add Category</a
          >
        </NuxtLink>
      </li>
      <li>
        <a href="#">
          <PlusSquareOutlined />
          Add Reminder</a
        >
      </li>
      <li>
        <NuxtLink to="/settings">
          <a href="#">
            <SettingOutlined />
            Settings</a
          >
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// const router = useRouter();

import {
  SettingOutlined,
  PlusSquareOutlined,
  PlusCircleOutlined,
  HomeOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons-vue";
</script>
<style scoped>
.sidebar-wrapper {
  height: 100vh;
  background: #179d60;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.sidebar-wrapper ul {
  display: flex;
  flex-direction: column;
  gap: 46px;
  height: 100%;
  /* align-items: center; */
  justify-content: center;
}
.sidebar-wrapper ul li {
  list-style: none;
}
.sidebar-wrapper ul li a {
  text-decoration: none;
  color: #ffff;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
