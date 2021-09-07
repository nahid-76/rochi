<template>
  <section class="container pt-5" id="cart_wrapper">
    <header class="mb-4 pb-3">
      <div class="d-flex align-items-center">
        <h1 class="gray_txt">سبد خرید شما</h1>
        <span
          class="
            d-flex
            me-2
            justify-content-center
            align-items-center
            p-2
            cart_items_qty
            border-radius-3
          "
          >{{ cartLength }}</span
        >
      </div>
    </header>
    <main>
      <section id="cart_items">
        <div v-for="item in cartItems" :key="item.id">
          <div>
            <cart-item
              :name="item.name"
              :selectedArea="item.selectedArea"
              :totalPrice="item.totalPrice"
              :id="item.id"
            ></cart-item>
          </div>
        </div>
      </section>
    </main>
    <aside>
      <factor></factor>
    </aside>
  </section>
</template>
<script>
import cartItem from "../components/cartItem.vue";
import factor from "../components/factor.vue";
import myMixin from "../mixin";
export default {
  name: "cart",
  components: {
    cartItem,
    factor,
  },

  mixins: [myMixin],
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
  },
};
</script>
<style scoped>
#cart_wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2.5%;
}
header {
  border-bottom: 1px solid var(--border-color);
  grid-column: 1/3;
}
header h1 {
  font-size: 22px;
}
header .cart_items_qty {
  background-color: var(--primary-button);
  color: white;
  width: 15px;
  height: 15px;
  font-size: 13px;
}
#cart_wrapper main {
  grid-column: 1/2;
}
#cart_wrapper aside {
  grid-column: 2/3;
}
</style>
