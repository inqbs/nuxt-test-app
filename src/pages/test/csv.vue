<template>
  <article>
    <section class="my-4">
      <h2>{{ csv.slug }}</h2>
    </section>
    <section>
      <b-table-simple>
        <b-tr v-for="(csvData, idx) in csv.body" :key="`csv-${idx}`">
          <td>{{ csvData.TYPE }}</td>
          <td>
            {{ csvData.IS_LOGIN }}
          </td>
          <td>{{ csvData.NUM }}</td>
          <td>{{ csvData.REGDATE }}</td>
        </b-tr>
      </b-table-simple>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const csv = await $content('nuxt-contents-test').fetch()

    return {
      csv,
    }
  },
}
</script>

<style lang="scss" scoped></style>
