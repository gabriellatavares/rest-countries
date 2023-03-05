import axios from "axios";
import { reactive } from "vue";

export function useList() {

  let countries = reactive({list: []});

  function getCountries() {
    axios.get('https://restcountries.com/v3.1/all')
    .then(function (response) {
      countries.list = response.data;
      return;
    })
    .catch(function (error) {
      return error;
    })

  }

  return {
    getCountries,
    countries
  }
}