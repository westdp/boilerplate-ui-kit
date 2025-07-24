import { createApp } from 'vue'
import App from './App.vue'

import '@boilerplate-ui-kit/styles/main.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { BoilerplateUiKit } from '@boilerplate-ui-kit';

const app = createApp(App)

app.use(BoilerplateUiKit, {
  primary: '#522E92',
  secondary: '#EFEFF0',
  error: '#FF7A7A',
  success: '#6FC391',
});

app.mount('#app')