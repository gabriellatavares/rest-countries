<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useList } from '../composables/useList';


const route = useRoute();
const router = useRouter();

const selectedCountry = route.params.country;

const { details, getCountryDetails, borders } = useList();

onMounted(() => {
  getCountryDetails(selectedCountry);
})

function back() {
  router.back();
}

function getTextFormatted(array) {
  let formattedArray = array.join(", ");
  if (array.length > 1) {
    return `Capitals: ${formattedArray}`
  }
  return `Capital: ${formattedArray}`;
}

const bordersFormatted = computed(() => {
  if (borders.countries.length != 0) {
    return `${details.country.name.common} has borders with ${borders.countries.join(", ")}.`
  }
  return `${details.country.name.common} is a country without borders.`
})


</script>

<template>
  <div>
    <v-card class="mx-auto" max-width="800">
      <div v-if="details.country.length != 0">
        <v-img :src="details.country.flags.svg" height="400px" cover :alt="details.country.flags.alt"></v-img>
        <v-card-title>{{ details.country.name.common }}</v-card-title>
        <v-card-subtitle>{{ details.country.subregion + ', '}} {{ details.country.continents.join(", ") }}</v-card-subtitle>
        <v-card-text>
          <span>
            <p v-html="getTextFormatted(details.country.capital)"></p>
          </span>
          <span>
            <p>
              Population: {{ details.country.population }}
            </p>
          </span>
          <span>
            <p>Languages:</p>
            <p v-for="(language, idx) in details.country.languages" :key="idx">
              {{language}}
            </p>
          </span> 
          <span>
            <p>Currencies:</p>
            <p v-for="(currency, idx) in details.country.currencies" :key="idx">
              {{currency.symbol}}: {{currency.name}}
            </p>
          </span> 
          <span>
            <p>Timezones:</p>
            <p v-for="(zone, idx) in details.country.timezones" :key="idx">
              {{zone}}
            </p>
          </span> 
          <span class="borders">
            <p>{{ bordersFormatted }}</p>
          </span>
        </v-card-text>
      </div>
      <div v-else>
        <div class="loading">Loading...</div>
      </div>
      <v-btn class="ma-2" color="blue-grey" @click="back">
        <v-icon start icon="mdi-arrow-left"></v-icon>
        Back
      </v-btn>
    </v-card>
  </div>
</template>
