<template>
  <div>
    <!-- <div>
      <img src="/logo.png" height="130px" width="130px" alt="loading failed" />

      <h1 class="text-3xl poppins-medium">Welcome Back</h1>
      <p class="text-sm poppins-semibold">
        Don't have an account?Create today!
      </p>
    </div> -->

    <a-form
      style="padding: 10px 30px"
      :model="formState"
      name="normal_login"
      class="form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      :layout="formStates.layout"
    >
      <h2 style="color: #179d60">Welcome Back</h2>
      <a> Don't have an account ? Create today! </a>
      <h1></h1>
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>
        <a class="login-form-forgot" href="">Forgot password</a>
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
          Log in
        </a-button>
        Or
        <a href="">register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";

const supabase = useSupabaseClient();

const router = useRouter();

const formStates = reactive({
  layout: "vertical",
});
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = async (values) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.username,
      password: values.password,
    });

    if (error) {
      throw error;
    }

    notification["success"]({
      message: "Welcome back!",
    });
    router.push("/dashboard");
  } catch (error) {
    console.log("🚀 ~ onFinish ~ error:", error);
    notification["error"]({
      message: "Something went wrong",
      description: "Please check your username and password.",
    });
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
// anywhere in your code
console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log("Supabase Key:", process.env.SUPABASE_KEY);
</script>
