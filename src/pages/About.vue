<template>
  <div class="flex" style="display: flex">
    <div class="q-mb-none" style="margin-left: 5%">
      <div class="q-mt-lg text-h5">Basic info:</div>

      <q-card-section class="q-mb-xl q-pl-none">
        <div class="q-pt-xs" style="max-width: 350px">
          <q-item>
            <q-item-section>
              <q-item-label overline>Name</q-item-label>
              <q-item-label>{{ userData.name }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label overline>Username</q-item-label>
              <q-item-label>{{ userData.username }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label overline>Email</q-item-label>
              <q-item-label>{{ userData.email }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label overline>Phone</q-item-label>
              <q-item-label>{{ userData.phone }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label overline>Website</q-item-label>
              <q-item-label>{{ userData.website }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
    </div>

    <div class="q-mb-none" style="margin-left: 5%">
      <div class="q-mt-lg text-h5">Company:</div>

      <q-card-section class="q-mb-xl q-pl-none">
        <div class="q-pt-xs" style="max-width: 350px">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Name</q-item-label>
                <q-item-label>{{ company.name }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Catch phrase</q-item-label>
                <q-item-label>{{ company.catchPhrase }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Bs</q-item-label>
                <q-item-label>{{ company.bs }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </div>

    <div class="q-mb-none" style="margin-left: 5%">
      <div class="q-mt-lg text-h5">Address:</div>

      <q-card-section class="q-mb-xl q-pl-none">
        <div class="q-pt-xs" style="max-width: 350px">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>City</q-item-label>
                <q-item-label>{{ address.city }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Zipcode</q-item-label>
                <q-item-label>{{ address.zipcode }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Street</q-item-label>
                <q-item-label>{{ address.street }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Suite</q-item-label>
                <q-item-label>{{ address.suite }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-btn
                  class="q-ma-md"
                  color="primary"
                  label="GOOGLE MAPS"
                  :href="
                    'https://www.google.com/maps/place/' +
                    this.lat +
                    ',' +
                    this.lng +
                    ''
                  "
                  target="_blank"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {},
  data() {
    return {
      userData: [],
      address: [],
      company: [],
      lat: "",
      lng: "",
    };
  },
  methods: {
    aboutBasic() {
      return this.$store.getters["users/getLogUser"];
    },
  },
  async mounted() {
    this.userData = await this.aboutBasic()[0];
    this.company = this.userData.company;
    this.address = this.userData.address;
    this.lat = this.address.geo.lat;
    this.lng = this.address.geo.lng;
  },
});
</script>
