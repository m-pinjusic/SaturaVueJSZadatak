<template>
  <q-item>
    <q-item-section>
      <q-item-label overline> {{ title }}</q-item-label>
      <q-item-label>{{ description }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoList",
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },
  },
});
</script>
