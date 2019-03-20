import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VCard,
  VDataTable,
  VDialog,
  VIcon,
  VGrid,
  VToolbar,
  VForm,
  VTextField,
  VCheckbox,
  VDatePicker,
  VMenu,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VCard,
    VDataTable,
    VDialog,
    VIcon,
    VGrid,
    VToolbar,
    VForm,
    VTextField,
    VCheckbox,
    VDatePicker,
    VMenu,
    transitions
  },
  theme: {
    /* primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107' */
    primary: '#2196F3',
    secondary: '#64B5F6',
    accent: '#FF5722',
    error: '#eb5e28',
    warning: '#f3bb45',
    info: '#68b3c8',
    success: '#41b883'
  },
  customProperties: true,
  iconfont: 'mdi'
})
