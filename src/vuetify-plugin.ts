import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      size: 'large',
      color: 'primary',
      elevation: 0,
    },
    VSelect: {
      variant: 'outlined',
    },
    VCombobox: {
      variant: 'outlined',
    },
    VTextField: {
      variant: 'outlined',
    },
    VTextarea: {
      variant: 'outlined',
    },
    VDateInput: {
      variant: 'outlined',
    },
    VNumberInput: {
      variant: 'outlined',
    },
    VAutocomplete: {
      variant: 'outlined',
    },
    VSwitch: {
      inset: true,
      color: 'primary',
    }
  }
});

export default vuetify;