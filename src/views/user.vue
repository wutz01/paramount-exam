<template lang="pug">
  div
    h1 {{ username }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'user',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      username: 'getUsername'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
