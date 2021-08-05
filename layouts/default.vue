<template>
  <main>
    <header>
      <b-navbar>
        <b-navbar-nav>
          <b-nav-item to="/">Main </b-nav-item>
          <b-nav-item to="/blog">Blog </b-nav-item>
          <b-nav-item to="/counter">Counter </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </header>
    <Nuxt />
    <footer>footer</footer>
  </main>
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
