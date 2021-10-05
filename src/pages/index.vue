<template>
  <main class="py-4">
    <b-form @submit.prevent="send">
      <b-form-group>
        <b-input-group>
          <b-form-input v-model="msg" />
          <template #append>
            <b-button
              type="submit"
              variant="primary"
            >
              send
            </b-button>
          </template>
        </b-input-group>
      </b-form-group>
    </b-form>
    <section>
      <b-list-group>
        <SNSPost
          v-for="msgObj in timeline"
          :key="msgObj.id"
          :msg-obj="msgObj"
          :is-mine="msgObj.author === userId"
          @delete="deleteMsg"
        />
      </b-list-group>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    msg: '',
    list: [],
  }),
  fetch() {
    this.refresh()
  },
  computed: {
    ...mapGetters('auth', ['userId']),
    timeline() {
      return (this.list ?? [])?.reverse()
    },
  },
  errorCaptured(error, component, info) {
    console.debug(`error captured on ${component?._name}'s ${info}.`, error)
    this.isErrorOccured = true
    return false
  },
  methods: {
    async refresh() {
      this.list = await this.$axios.$get('//localhost:5000/posts')
    },
    async send() {
      const msg = this.msg
      await this.$axios.$post('//localhost:5000/posts', {
        msg,
        author: this.userId,
        date: this.$moment(),
      })
      this.msg = ''
      this.refresh()
    },
    async deleteMsg({ id, author }) {
      console.log(`deleteMsg is fired. id:${id}, author: ${author}`)
      if (!id) return
      if (author !== this.userId) return
      await this.$axios.$delete(`//localhost:5000/posts/${id}`)
      this.refresh()
    },
  },
}
</script>
