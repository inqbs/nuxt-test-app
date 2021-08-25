<template>
  <b-button block :variant="variant">{{ value }}</b-button>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    variant() {
      return 'outline-secondary'
    },
  },
}
</script>
