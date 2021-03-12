import { bus } from '@/main'
export default {
  methods: {
    showDialogNotification (mode = `success`, message, description = '') {
      bus.$emit('show-notif-dialog', { mode: mode, msg: message, description: description })
    },
    hideDialogNotification () {
      bus.$emit('hide-notif-dialog')
    },
    addNotification (type = '', title = '', message = '', permanent = false) {
      // type = 'success',
      // title = 'This is Notify Title',
      // message = 'This is Notify Message,<br>with html.'
      console.log(`test`)
      this.$notify(type, title, message, { duration: 3000, permanent: permanent })
    }
  }
}
