<template>
  <article>
    <section>
      <h2>{{ page.title }}</h2>
      <p>{{ page.description }}</p>
    </section>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('introduction').fetch()

    return { page }
  },
}
</script>
