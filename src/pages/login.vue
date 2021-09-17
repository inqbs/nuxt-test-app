<template>
  <div>
    <b-form @submit.prevent="tryLogin">
      <b-form-group>
        <b-form-input v-model="user.id" placeholder="아이디" />
      </b-form-group>
      <b-form-group>
        <b-button type="submit">
          로그인
        </b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    user: {
      id: '',
    },
  }),
  methods: {
    ...mapActions('auth', ['login']),
    async tryLogin() {
      await this.login(this.user)
      this.$router.replace('/')
    },
  },
}
</script>

<style lang="scss" scoped></style>
