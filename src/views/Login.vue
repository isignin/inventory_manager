<template>
  <v-container fluid>
    <div class="login">
      <Login />
    </div>
  </v-container>
</template>
<script>
  import Login from '@/components/Login.vue'

  export default {
    name: 'login',
    components: {
      Login
    }
  }
</script>