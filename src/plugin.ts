import { App } from 'vue'
import type { BoilerplateUiKitOptions } from './types'
import vuetify from './vuetify-plugin';

export default {
  install(app: App, options: BoilerplateUiKitOptions = {}) {
    const root = document.documentElement;

    app.use(vuetify);

    // Hide all warning messages
    app.config.warnHandler = () => null;

    if (options.primary) root.style.setProperty('--ui-primary', options.primary)
    if (options.secondary) root.style.setProperty('--ui-secondary', options.secondary)
    if (options.error) root.style.setProperty('--ui-error', options.error)
    if (options.success) root.style.setProperty('--ui-success', options.success);
  }
}