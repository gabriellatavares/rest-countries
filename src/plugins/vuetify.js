import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VTextField, VSelect, VBtn, VIcon, VCard, VCardTitle, VImg, VCardSubtitle, VCardText } from 'vuetify/components'
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
    VCardSubtitle,
    VCardText,
    VImg
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
})