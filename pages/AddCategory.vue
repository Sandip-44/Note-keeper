<template>
  <note-wrapper>
    <a-form
      style="padding: 10px 30px"
      :model="formState"
      name="normal_login"
      class="form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      :layout="formStates.layout"
    >
      <a-form-item
        label="Category Title"
        name="title"
        :rules="[{ required: true, message: 'Please input your title!' }]"
      >
        <a-input v-model:value="formState.title">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="Description" name="desc">
        <a-input-password v-model:value="formState.desc">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item label="Color" name="color">
        <a-select
          v-model:value="formState.color"
          placeholder="please select your categroy"
        >
          <a-select-option value="work">red</a-select-option>
          <a-select-option value="white">white</a-select-option>
          <a-select-option value="green">green</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
          label="Error"
          severity="danger"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </note-wrapper>
</template>
<script setup>
import { reactive, computed } from "vue";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";

const supabase = useSupabaseClient();

const formStates = reactive({
  layout: "vertical",
});
const formState = reactive({
  title: "",
  desc: "",
});
const onFinish = async (values) => {};
</script>

<style>
.ant-form-item label {
  color: #000 !important;
  font-size: 1rem !important;
  font-weight: 500;
}
</style>
