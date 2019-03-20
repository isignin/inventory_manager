<template>
  <v-container fluid>
    <div class="sys_settings">
      <h1 class='page_title'>{{pageTitle}}</h1>
      <SysSettings />
    </div>
  </v-container>
</template>
<script>
  import SysSettings from '@/components/SysSettings.vue'

  export default {
    name: 'sys_settings',
    components: {
      SysSettings
    },
    data () {
      return {
        pageTitle: "System Settings"
      }
    }
  }
</script>
