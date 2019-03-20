<template>
  <v-container fluid>
    <div class="software">
      <h2 class='page_title'><v-icon medium color=primary>mdi-apps</v-icon> {{pageTitle}}</h2>
      <Software />
    </div>
  </v-container>
</template>
<script>
import Software from '@/components/Software.vue'

export default {
  name: 'software',
  components: {
    Software
  },
  data () {
    return {
      pageTitle: 'Software Inventory'
    }
  }
}
</script>
