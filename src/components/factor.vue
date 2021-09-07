<template>
  <div>
    <div class="progressBar">
      <div class="d-flex justify-content-between">
        <span class="medium_size_text gray_txt">مبلغ سفارش:</span>
        <span class="medium_size_text gray_txt">150,000</span>
      </div>
      <b-progress class="my-2" :value="totalOrder" max="1000000"></b-progress>
      <div class="d-flex justify-content-end mb-4">
        <span class="blue_txt medium_size_text">ارسال رایگان</span>
      </div>
    </div>
    <section class="py-4 px-3 border-radius-9" id="factor_wrapper">
      <div class="d-flex justify-content-between mb-3 factor_total_order">
        <span class="medium_size_text gray_txt">مجموع سفارش</span>
        <div class="d-flex align-items-center">
          <span>{{ totalOrder.toLocaleString() }}</span>
          <span class="small_size_text me-1">تومان</span>
        </div>
      </div>
      <div class="d-flex justify-content-between mb-3 factor_total_order">
        <span class="medium_size_text gray_txt">تخفیف کالاها</span>
        <div class="d-flex align-items-center red_txt">
          <span>452000</span>
          <span class="small_size_text me-1">تومان</span>
        </div>
      </div>
      <div
        class="d-flex pb-2 justify-content-between mb-2 factor_delivery_price"
      >
        <span class="medium_size_text gray_txt"> هزینه ارسال</span>
        <div class="d-flex align-items-center">
          <span>0</span>
          <span class="small_size_text me-1">تومان</span>
        </div>
      </div>
      <div class="d-flex justify-content-between factor_total_sum">
        <span class="medium_size_text black_txt bold_txt">جمع کل</span>
        <div class="d-flex align-items-center">
          <span class="large_size_text black_txt">452000</span>
          <span class="small_size_text me-1">تومان</span>
        </div>
      </div>
      <button class="text-center w-100 factor_btn border-radius-6">
        ادامه فرایند خرید
      </button>
    </section>
  </div>
</template>
<script>
export default {
  name: "factor",
  computed: {
    totalOrder() {
      let sum = this.cartItems.reduce((total, currentValue) => {
        return total + currentValue.totalPrice;
      }, 0);
      return sum;
    },
    cartItems() {
      return this.$store.state.cart;
    },
  },
};
</script>
<style scoped>
#factor_wrapper {
  background-color: white;
  border: 1px solid var(--border-color);
}
.progress {
  height: 8px;
}
.factor_delivery_price {
  border-bottom: 1px solid var(--border-color);
}
.factor_total_sum {
  padding-top: 10px;
  padding-bottom: 25px;
}
.factor_btn {
  background-color: var(--primary-button);
  color: white;
  box-shadow: 1px 2px 6px 0 rgba(231, 48, 91, 0.3);
  padding: 10px 0;
}
</style>
<style>
.progress-bar {
  background-color: var(--secondary--button);
}
</style>
