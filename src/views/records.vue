<template lang="pug">
  div
    b-row
      b-col(v-for="record in records", :key="record.id", lg="4")
        b-card.mb-2(:title="`${record.full_name} (${record.abbreviation})`")
          b-card-text Name: {{ record.name }}
          b-card-text Conference: {{ record.conference }}
          b-card-text Division: {{ record.division }}
          b-card-text City: {{ record.city }}
</template>

<script>
import { NBA } from '@/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'records',
  data () {
    return {
      records: []
    }
  },
  computed: {
    ...mapGetters({
      teams: 'getTeams'
    })
  },
  methods: {
    ...mapActions([
      'setTeams'
    ]),
    async init () {
      try {
        if (this.teams) {
          this.records = this.teams
          this.showDialogNotification('success', 'Vuex', 'Data from VueX has been loaded.')
        } else {
          let res = await NBA.getAllTeams()
          this.setTeams(res.data)
          this.records = res.data
          this.showDialogNotification('success', 'API', 'Data from API has been loaded.')
        }
      } catch (e) {
        console.log(`ERROR`, e)
        this.showDialogNotification('error', 'Oops!', 'Something went wrong when loading NBA Teams')
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="css" scoped>
</style>
