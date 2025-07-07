import { App } from 'vue';

import { createVuetify } from 'vuetify/framework';

export * from './components';

import './styles/index.scss';

const BoilerplateUiKit = {
  install(app: App) {
    const vuetify = createVuetify();
    app.use(vuetify);
  }
}

export default BoilerplateUiKit;
