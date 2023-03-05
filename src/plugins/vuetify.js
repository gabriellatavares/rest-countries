import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VDataTable } from 'vuetify/labs/VDataTable'
import '@mdi/font/css/materialdesignicons.css' 

export default createVuetify({
  components: {
    VDataTable
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
})