<template>
  <b-container class="py-4">
    <b-row class="pb-4">
      <b-col>
        <b-input-group>
          <b-form-input :value="numValue" readonly class="text-right" />
          <b-input-group-append>
            <CalculatorButton value="←" />
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton value="C" />
      </b-col>
      <b-col>
        <CalculatorButton value="^2" />
      </b-col>
      <b-col>
        <CalculatorButton value="√" />
      </b-col>
      <b-col>
        <CalculatorButton value="+" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="9" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton :value="8" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton :value="7" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton value="-" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="6" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton :value="5" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton :value="4" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton value="*" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="3" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton :value="2" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton :value="1" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton value="/" />
      </b-col>
    </b-row>
    <b-row class="pb-2">
      <b-col>
        <CalculatorButton :value="0" @click="onNumberClick" />
      </b-col>
      <b-col>
        <CalculatorButton value="00" @click="onNumberClick" />
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

const COMMANDS = Object.freeze({
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
  RESULT: 'ENTER',
})

export default {
  components: {
    CalculatorButton,
  },
  middleware: ['auth'],
  data: () => ({
    history: [],
    tempResult: 0,
    value: 0,
  }),
  computed: {
    numValue: {
      get() {
        return Number(this.value).toLocaleString()
      },
      set(value) {
        this.value = Number(`${this.value}${value}`)
      },
    },
  },
  methods: {
    onNumberClick(value) {
      console.log(`onNumberClick is fired. ${value}`)
      this.numValue = value
    },
    addHistory(value) {
      this.history.push(value)
    },

    plus() {
      this.addHistory(COMMANDS.PLUS)
    },
    minus() {
      this.addHistory(COMMANDS.MINUS)
    },
    multiply() {
      this.addHistory(COMMANDS.MULTIPLY)
    },
    divide() {
      this.addHistory(COMMANDS.DIVIDE)
    },
    calculate() {},
  },
}
</script>

<style lang="scss" scoped></style>
