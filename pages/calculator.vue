<template>
  <b-container class="py-4">
    <b-row class="pb-4">
      <b-col>
        <b-form-input readonly />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="9" />
      </b-col>
      <b-col>
        <CalculatorButton :value="8" />
      </b-col>
      <b-col>
        <CalculatorButton :value="7" />
      </b-col>
      <b-col>
        <CalculatorButton value="+" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="6" />
      </b-col>
      <b-col>
        <CalculatorButton :value="5" />
      </b-col>
      <b-col>
        <CalculatorButton :value="4" />
      </b-col>
      <b-col>
        <CalculatorButton value="-" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="3" />
      </b-col>
      <b-col>
        <CalculatorButton :value="2" />
      </b-col>
      <b-col>
        <CalculatorButton :value="1" />
      </b-col>
      <b-col>
        <CalculatorButton value="*" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="0" />
      </b-col>
      <b-col>
        <CalculatorButton value="00" />
      </b-col>
      <b-col>
        <CalculatorButton value="." />
      </b-col>
      <b-col>
        <CalculatorButton value="=" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CalculatorButton from '@/components/calculator/CalculatorButton.vue'
export default {
  components: {
    CalculatorButton,
  },
  middleware: ['auth'],
  data: () => ({
    text: '',
  }),
}
</script>

<style lang="scss" scoped></style>
