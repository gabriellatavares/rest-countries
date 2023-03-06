<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useList } from '../composables/useList';
import TableList from '../components/TableList.vue';
import SearchInput from '../components/SearchInput.vue';
import SelectDropdown from '../components/SelectDropdown.vue';

const router = useRouter();

const { getCountries, filteredCountries, searchCountriesByName, filterCountriesRegion } = useList();

const config = ref({
  search: '',
  filter: '',
  page: 1,
  itemsPerPage: 25,
  headers: [
    {title: 'Name', align: 'start', sortable: true, key: 'name.common'},
    {title: 'Flag', align: 'end', sortable: false, key: 'flag'},
    {title: 'Region', align: 'end', sortable: true, key: 'region'},
    {title: 'Population', align: 'end', sortable: true, key: 'population'}
  ],
  regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  regionLabel: 'Filter by region'
});

onMounted(() => {
  getCountries();
})

function search(value) {
  config.value.search = value;
  if (value) {
   return searchCountriesByName(value);
  }
  getCountries();
}

function filter(value) {
  config.value.filter = value;
  if (value) {
   return filterCountriesRegion(value);
  }
  getCountries();
}

function open(country) {
  let name = country.value.common;
  router.push('details/' + country.value.common, {params: { name: name}})
}
</script>

<template>
  <div class="header">
    <SelectDropdown :options="config.regions" :label="config.regionLabel" :selected="config.filter" @update="filter"></SelectDropdown>
    <SearchInput :search-prop="config.search" @update="search"></SearchInput>
  </div>
  <TableList :config="config" :list="filteredCountries.list" @click="open"></TableList>
</template>
