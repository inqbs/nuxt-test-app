<template>
  <main class="py-4">
    <b-form @submit.prevent="send">
      <b-form-group>
        <b-input-group>
          <b-form-input v-model="msg" />
          <template #append>
            <b-button type="submit" variant="primary">send</b-button>
          </template>
        </b-input-group>
      </b-form-group>
    </b-form>
    <section>
      <b-list-group>
        <b-list-group-item v-for="msgObj in timeline" :key="msgObj.idx">
          <p>{{ msgObj.msg }}</p>
          <p class="d-flex justify-content-between">
            <time
              :datetime="$moment(msgObj.date).format('YYYY-MM-DD HH:mm:ss')"
            >
              {{ $moment(msgObj.date).format('YYYY-MM-DD HH:mm:ss') }}
            </time>
            <b-button variant="danger" @click="deleteMsg(msgObj.id)">
              <b-icon-trash2-fill />
            </b-button>
          </p>
        </b-list-group-item>
      </b-list-group>
    </section>
  </main>
</template>

<script>
export default {
  data: () => ({
    msg: '',
    list: [],
  }),
  fetch() {
    this.refresh()
  },
  computed: {
    timeline() {
      return (this.list ?? []).reverse()
    },
  },
  methods: {
    async refresh() {
      this.list = await fetch('//localhost:5000/posts').then((res) =>
        res.json()
      )
    },
    async send() {
      const msg = this.msg
      await this.$axios.post('//localhost:5000/posts', {
        msg,
        date: this.$moment(),
      })
      this.msg = ''
      this.refresh()
    },
    async deleteMsg(idx) {
      if (!idx) return
      await this.$axios.delete(`//localhost:5000/posts/${idx}`)
      this.refresh()
    },
  },
}
</script>
