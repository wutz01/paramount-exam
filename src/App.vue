<template lang="pug">
  div#app
    b-container(fluid="lg")
      b-navbar(type='light' variant='faded')
        b-navbar-nav
          b-nav-item(to="record") Record
          b-nav-item(to="user") User
      router-view
    b-modal.test(id="notifDialog", ref="notifDialog", class="modal-long", hide-footer, hide-header, centered, no-close-on-esc, no-close-on-backdrop)
      h5.modal-title.text-center.font-weight-normal(v-if="dialogHandler.msg") {{ dialogHandler.msg }}
      p.text-muted.text-center.px-4.mt-1(v-if="dialogHandler.description") {{ dialogHandler.description }}
      div.mt-3.mb-3
      .d-flex.justify-content-between.align-items-center
        b-button.btn-shadow.w-100(type="button", :variant="dialogHandler.mode === 'error' ? 'danger default' : 'success default'", size="sm", @click.stop="closeDialog") Okay
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { bus } from '@/main'
export default {
  name: 'App',
  data () {
    return {
      dialogHandler: {
        mode: null,
        msg: null,
        description: null
      }
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    closeDialog () {
      this.hideDialogNotification()
    }
  },
  mounted () {
    let vm = this
    bus.$on('show-notif-dialog', (obj) => {
      this.dialogHandler = {
        mode: obj.mode,
        msg: obj.msg,
        description: obj.description
      }

      vm.$refs['notifDialog'].show()
    })

    bus.$on('hide-notif-dialog', () => {
      if (!vm.$refs['notifDialog']) return

      vm.$refs['notifDialog'].hide()
      this.dialogHandler = {
        mode: null,
        msg: null,
        description: null
      }
    })
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
