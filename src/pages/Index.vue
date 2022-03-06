<template>
  <div class="q-pa-md" style="max-width: 600px; margin: 0 auto">
    <div
      class="q-ma-md"
      style="width: 200px; margin-right: 0px; margin-left: auto"
    >
      <q-input dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <q-table
      :table-style="{ height: '370px' }"
      :pagination="{ rowsPerPage: '10' }"
      dense
      title="Users"
      :rows="getRows()"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="this.selected"
      :filter="filter"
      :loading="loading()"
    />

    <q-btn
      :disable="this.selected.length < 1"
      class="q-mt-md float-right"
      color="primary"
      label="LOGIN"
      @click="logIn()"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { ref } from "vue";

const columns = [
  { name: "user", label: "User", field: "user", sortable: true },
  { name: "name", label: "Name", field: "name", sortable: true },
  { name: "email", label: "Email", field: "email" },
];
/*
  rows = [
    { name: "name", user: "User", email: "email", id: 1 },
    { name: "name", user: "User", email: "email", id: 2 },
  ];
*/

export default defineComponent({
  name: "PageIndex",
  methods: {},
  setup() {
    return {
      columns,
      filter: ref(""),
    };
  },
  data() {
    return {
      selected: [],
    };
  },

  methods: {
    getRows() {
      return this.$store.getters["users/rows"];
    },
    loading() {
      return this.$store.getters["users/rows"].length === 0 ? true : false;
    },
    logIn() {
      let loggedUser = [];
      loggedUser = {
        ...this.$store.getters["users/getUsers"].filter(
          (x) => x.id == this.selected[0].id
        ),
      };

      if (this.selected[0].email.slice(this.selected.length - 4) == "net") {
        Object.assign(loggedUser, { admin: true });
      } else {
        Object.assign(loggedUser, { admin: false });
      }

      this.$store.commit("users/loggedUser", loggedUser);
      //this.$store.commit("users/logStatus", true);
    },
  },

  computed() {},

  /*
  computed: {
    ...mapGetters("users", [rows]),
  },*/
});
</script>
