<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="post in posts"
        :key="`post-${post.id}`"
        :to="`/test/article/${post.id}`"
      >
        {{ post.title }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: [],
  }),
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>

<style lang="scss" scoped></style>
