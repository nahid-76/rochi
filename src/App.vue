<template>
  <div id="app">
    <cart></cart>
  </div>
</template>

<script>
import cart from "./pages/cart.vue";
export default {
  name: "App",
  components: {
    cart,
  },
};
</script>

<style>
  #app{
    background-color:#f7f8f8
  }
</style>
