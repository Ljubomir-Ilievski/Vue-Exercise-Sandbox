<template>
  <div>
    <h1>Returning Methods</h1>

    <div>Cart({{ totalItems }}) {{ formatCurrency(totalCost) }}</div>

    <ul>
      <li v-for="n in 6" :key="n">
        <button @click="addToCart(n)">Add {{ formatCurrency(n) }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 0,
      totalCost: 0,
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1
      this.totalCost = this.totalCost + n
    },
    formatCurrency(val) {
      return `$${val.toFixed(2)}`
    },
  },
}
</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;
  margin-block-start: 10px;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
</style>
