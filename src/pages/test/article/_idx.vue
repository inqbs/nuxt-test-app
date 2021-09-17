<template>
  <div>
    <b-link to="/blog">
      return
    </b-link>
    <b-card no-body>
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img :src="post.image" />
        </b-col>
        <b-col>
          <b-card-body :title="post.title">
            <b-card-text>{{ post.description }}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const idx = params.idx
    return { idx }
  },
  data: () => ({
    post: {},
  }),
  async fetch() {
    this.post = await this.$axios.$get(
      `https://api.nuxtjs.dev/posts/${this.idx}`,
    )
  },
}
</script>

<style lang="scss" scoped></style>
