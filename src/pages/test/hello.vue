<template>
  <article>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/test/blog">Blog</nuxt-link>
          <nuxt-link to="/test/counter">Counter</nuxt-link>
        </li>
      </ul>
    </nav>
    <h1>{{ page.title }}</h1>
    <hr />
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return { page }
  },
}
</script>

<style lang="scss" scoped></style>
