<template>
  <NoteWrapper>
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      class="form"
      layout="vertical"
      labelAlign="left"
      noStyle="true"
    >
      <HeadingTitle />
      <h2 style="font-size: 1.5rem">Create your first Note</h2>
      <a-form-item
        ref="Title"
        label="Name your note and start writing"
        name="title"
      >
        <a-input v-model:value="formState.title" placeholder="Title" />
      </a-form-item>
      <a-form-item label="Organize your note with category" name="cat">
        <a-select
          v-model:value="formState.cat"
          placeholder="please select your categroy"
        >
          <a-select-option value="work">Work</a-select-option>
          <a-select-option value="personal">Personal</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Your Note">
        <a-textarea
          v-model:value="formState.desc"
          aria-placeholder="type here your note"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18 }">
        <a-button
          style="width: 100%; background: #179d60"
          type="primary"
          @click="submitNote"
          >Save</a-button
        >
      </a-form-item>
    </a-form>
  </NoteWrapper>
</template>
<script setup>
import { reactive, ref, toRaw } from "vue";
import { notification } from "ant-design-vue";
import NoteWrapper from "~/components/NoteWrapper.vue";

const supabase = useSupabaseClient();
const formRef = ref();
const labelCol = {
  span: 24,
};
const wrapperCol = {
  span: 18,
};
const formState = reactive({
  title: "",
  cat: undefined,
  desc: "",
  user_id: 1,
});
const rules = {
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
};
const submitNote = async () => {
  try {
    const payload = toRaw(formState);
    const { data, error } = await supabase
      .from("notes")
      .insert(toRaw(formState));

    if (error) throw error;
    notification.success({
      message: "Note saved successfully!",
    });
    resetForm();
  } catch {
    notification.error({
      message: "Failed to save note",
      description: err.message || "Something went wrong.",
    });
  }
};

const resetForm = () => {
  formRef.value.resetFields();
  formState.desc = "";
};
</script>
