import { App } from 'vue';

import { createVuetify } from 'vuetify/framework';

import BadgeLabel from './components/BadgeLabel.vue';
import useDateFormat from './composables/useDateFormat';

import './styles/index.scss';

const BoilerplateUiKit = {
  install(app: App) {
    const vuetify = createVuetify();
    app.use(vuetify);
    app.component('BadgeLabel', BadgeLabel);
  }
}

export default BoilerplateUiKit;
export { BadgeLabel, useDateFormat };
