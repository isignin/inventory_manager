<template>
  <v-container fluid>
    <div class="hardware">
      <h2 class='page_title'> <v-icon medium color=primary>mdi-desktop-classic</v-icon> {{pageTitle}}</h2>
      <Hardware />
    </div>
  </v-container>
</template>
<script>
import Hardware from '@/components/Hardware.vue'

export default {
  name: 'hardware',
  components: {
    Hardware
  },
  data () {
    return {
      pageTitle: 'Hardware Inventory'
    }
  }
}
</script>
