import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VTextField, VSelect, VBtn, VIcon, VCard, VCardTitle, VImg } from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css' 

export default createVuetify({
  components: {
    VDataTable,
    VTextField,
    VBtn,
    VIcon,
    VCard,
    VSelect,
    VCardTitle,
    VImg
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
})