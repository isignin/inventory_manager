<template>
  <Users />
</template>
<script>
import Users from '@/components/Users.vue'

export default {
  name: 'users',
  components: {
    Users
  },
  data () {
    return {
      pageTitle: 'Users Manager'
    }
  }
}
</script>
