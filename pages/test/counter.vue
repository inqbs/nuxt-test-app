<template>
  <div>
    <p>{{ counter }}</p>
    <b-button @click="increment">add</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('counter', ['counter']),
  },
  methods: {
    ...mapActions('counter', ['increment']),
  },
}
</script>

<style lang="scss" scoped></style>
