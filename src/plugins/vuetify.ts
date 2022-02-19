import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from '../../node_modules/vuetify/lib/components'
import * as directives from '../../node_modules/vuetify/lib/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: 'black',
          secondary: '#d63031',
          surface: '#000000',
          background: '#ffffff',
          error: '#d63031',
          info: '#0984e3',
          success: '#00cec9',
          warning: '#2d3436',
        },
        dark: false,
        variables: {},
      },
    },
  },
})
