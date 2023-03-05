<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useList } from '../composables/useList';


const route = useRoute();
const router = useRouter();

const selectedCountry = route.params.country;

const { details, getCountryDetails } = useList();

onMounted(() => {
  getCountryDetails(selectedCountry);
})

function back() {
  router.back();
}


</script>

<template>
  <div>
    <v-btn class="ma-2"  @click="back">
      <v-icon start icon="mdi-arrow-left" ></v-icon>
      Back
    </v-btn>
  </div>
  <div v-if="details.country.length != 0">
    <v-card class="mx-auto" max-width="800">
      <v-img :src="details.country[0].flags.svg" height="300px" cover></v-img>
      <v-card-title>{{ details.country[0].name.common }}</v-card-title>
    </v-card>
  </div>
  <div v-else>
    <div class="loading">Loading...</div>
  </div>
  {{details}}
</template>

<style>

</style>