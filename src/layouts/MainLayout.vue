<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          class="q-ma-xs"
          text-color="white"
          color="primary"
          flat
          round
          icon="menu"
          size="lg"
          @click="left = !left"
        />

        <q-toolbar-title class="q-ma-xs text-h5 q-ml-xs" text-color="white">
          Logged in as:
          {{ logStatusFunction() }}
        </q-toolbar-title>
        <q-btn
          v-if="logStatusFunction() !== 'Unknown'"
          class="q-ma-md float-right"
          color="white"
          flat
          label="LOG OUT"
          @click="loggout()"
          to="/"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      ref="drawer"
      elevated
      :width="250"
      :breakpoint="500"
      overlay
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item exact clickable v-ripple to="/" @click="left = false">
            <q-item-section avatar>
              <q-icon name="people" size="lg" />
            </q-item-section>

            <q-item-section class="text-h6"> Users </q-item-section>
          </q-item>

          <q-item
            :disable="logStatusFunction() === 'Unknown'"
            clickable
            v-ripple
            to="/about"
            @click="left = false"
          >
            <q-item-section avatar>
              <q-icon name="info" size="lg" />
            </q-item-section>

            <q-item-section class="text-h6"> About me </q-item-section>
          </q-item>

          <q-item
            v-if="adminOnly()"
            clickable
            v-ripple
            to="/admin"
            @click="left = false"
          >
            <q-item-section avatar>
              <q-icon name="manage_accounts" size="lg" />
            </q-item-section>

            <q-item-section class="text-h6"> Admin only </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import routes from "src/router/routes";
import axios from "axios";

export default {
  data() {
    return {
      left: false,
      trigger: false,
      drawer: false,
      title: null,
      toggle: null,
      logStatus: false,
      disable: false,
    };
  },

  methods: {
    async getAllUsersAxios() {
      await axios(
        "https://run.mocky.io/v3/efcaa20a-6049-4dc0-9d28-6ece8529dac0?mocky-delay=10000ms"
      ).then((response) => {
        this.users;
        this.$store.commit("users/addUsers", response.data);
        console.log("storeLOg", this.$store);
      });
    },
    loggout() {
      this.$store.commit("users/logOut");
    },
    logStatusFunction() {
      return Object.keys(this.$store.getters["users/getLogUser"]).length ===
        0 && this.$store.getters["users/getLogUser"].constructor === Object
        ? "Unknown"
        : this.$store.getters["users/getLogUser"][0].name;
    },
    adminOnly() {
      return Object.keys(this.$store.getters["users/getLogUser"]).length ===
        0 && this.$store.getters["users/getLogUser"].constructor === Object
        ? this.$store.getters["users/getLogUser"].admin
        : this.$store.getters["users/getLogUser"].admin;
    },
  },

  async mounted() {
    await this.getAllUsersAxios();
  },

  async computed() {
    //this.logStatusFunction();
  },
};
</script>
