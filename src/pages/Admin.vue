<template>
  <div class="flex" style="display: flex">
    <div class="q-mb-none" style="margin-left: 5%">
      <div class="q-mt-lg text-h5">List of admin tasks:</div>

      <q-card-section class="q-mb-xl q-pl-none">
        <div class="q-pt-xs" style="max-width: 350px">
          <InfoList
            v-for="data in this.adminTest"
            :key="data.title"
            v-bind="data"
          />
        </div>
      </q-card-section>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import InfoList from "components/InfoList.vue";
import axios from "axios";

export default defineComponent({
  name: "About",
  components: {
    InfoList,
  },
  data() {
    return {
      adminTest: [
        {
          title: "Clean the kitchen",
          description:
            "Mop the floor, wipe the countertop and don't forget to take out the trash!",
        },
        { title: "Call Mom", description: "It's her birthday!" },
        {
          title: "Water flowers",
          description: "They need water, or they will die.",
        },
      ],
    };
  },
  methods: {
    async getAdminDataAxios() {
      await axios(
        "https://run.mocky.io/v3/9571eb2c-56a7-46cc-80bf-9c1e341f1270"
      ).then((response) => {
        this.$store.commit("users/addAdminData", response.data);
        console.log(JSON.stringify(response.data));
        return response.data;
      });
    },
    async getAdminData() {
      return this.getAdminDataAxios();
    },
  },
});
</script>
