import axios from "axios";
import { reactive, ref } from "vue";

export function useList() {

  let countries = reactive({list: []});
  let details = reactive({country: []});
  let filteredCountries = ref(JSON.parse(JSON.stringify(countries)));

  function getCountries() {
    axios.get('https://restcountries.com/v3.1/all')
    .then(function (response) {
      countries.list = response.data;
      filteredCountries.value.list = response.data;
      return;
    })
    .catch(function (error) {
      return error;
    })

  }

  function getCountryDetails(country) {
    axios.get('https://restcountries.com/v3.1/name/' + country + '?fullText=true')
    .then(function (response) {
      details.country = response.data;
      return;
    })
    .catch(function (error) {
      return error;
    })

  }

  function searchCountriesByName(country) {
    let name = country.toLowerCase();
    let filtered = countries.list.filter(countryName => countryName.name.common.toLowerCase().includes(name));
    filteredCountries.value.list = filtered;
    return;
  }

  function filterCountriesRegion(region) {
    let filtered = countries.list.filter(countryName => countryName.region.includes(region));
    filteredCountries.value.list = filtered;
    return
  }

  return {
    getCountries,
    searchCountriesByName,
    filterCountriesRegion,
    getCountryDetails,
    filteredCountries,
    details
  }
}