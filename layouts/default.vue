<template>
  <main>
    <b-navbar tag="header" class="border-bottom">
      <b-navbar-brand>Nuxt Test App</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Main </b-nav-item>
        <b-nav-item to="/test">Test Page </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="container">
      <Nuxt />
    </div>
    <footer class="bg-secondary py-5">
      <b-container>
        <address class="text-white">test</address>
      </b-container>
    </footer>
  </main>
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
