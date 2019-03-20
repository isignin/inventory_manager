<template>
  <Depts />
</template>
<script>
import Depts from '@/components/Depts.vue'

export default {
  name: 'depts',
  components: {
    Depts
  },
  data () {
    return {
      pageTitle: 'Depts'
    }
  }
}
</script>
