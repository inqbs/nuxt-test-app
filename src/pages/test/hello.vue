<template>
  <article>
    <h1>{{ page.title }}</h1>
    <hr>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'test',
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return { page }
  },
}
</script>
