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
  layout: 'test',
  async asyncData({ $axios }) {
    const posts = await $axios.$get('https://api.nuxtjs.dev/posts')
    return {
      posts,
    }
  },
}
</script>

<style lang="scss" scoped></style>
