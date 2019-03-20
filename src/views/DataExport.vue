<template>
  <v-container fluid>
    <div class="export">
        <h2 class='page_title'><v-icon medium color=primary>mdi-file-export</v-icon> {{pageTitle}}</h2>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'export',
  data () {
    return {
      pageTitle: 'Data Export'
    }
  }
}
</script>
