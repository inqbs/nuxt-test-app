<template>
  <div>
    <b-navbar
      tag="header"
      class="border-bottom"
    >
      <b-navbar-brand>Nuxt Test App</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">
          Main
        </b-nav-item>
        <b-nav-item to="/calculator">
          calculator
        </b-nav-item>
        <b-nav-item to="/test">
          Test Page
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/test/blog">
            Blog
          </nuxt-link>
          <nuxt-link to="/test/counter">
            Counter
          </nuxt-link>
          <nuxt-link to="/test/csv">
            CsvTest
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <main class="container">
      <Nuxt />
    </main>
    <footer class="bg-secondary py-5">
      <b-container>
        <address class="text-white">
          test
        </address>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {}
</script>
