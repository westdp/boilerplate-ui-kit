import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@boilerplate-ui-kit/styles/_variables.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { BoilerplateUiKit } from '@boilerplate-ui-kit';

const vuetify = createVuetify({ components, directives })

const app = createApp(App)
app.use(vuetify);
app.use(BoilerplateUiKit, {
  primary: '#123456',
  secondary: '#03dac6',
  error: '#b00020',
  success: '#00c853',
});

app.mount('#app')