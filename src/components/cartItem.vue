<template>
  <section class="mb-3 border-radius-9" id="cart_item_wrapperr">
    <div class="cart_item_img">
      <img class="w-100 h-100 border-radius-7" src="../assets/images/img.png" alt="" />
    </div>
    <h2 class="black_txt cart_item_name">
      {{ name }}
    </h2>
    <div class="d-flex align-items-center cart_item_warranty">
      <div class="d-flex ms-2">
        <svg
          width="24"
          height="24"
          fill="white"
          stroke="#65666a"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 229.5 229.5"
          style="enable-background: new 0 0 229.5 229.5"
          xml:space="preserve"
        >
          <path
            d="M214.419,32.12c-0.412-2.959-2.541-5.393-5.419-6.193L116.76,0.275c-1.315-0.366-2.704-0.366-4.02,0L20.5,25.927
	c-2.878,0.8-5.007,3.233-5.419,6.193c-0.535,3.847-12.74,94.743,18.565,139.961c31.268,45.164,77.395,56.738,79.343,57.209
	c0.579,0.14,1.169,0.209,1.761,0.209s1.182-0.07,1.761-0.209c1.949-0.471,48.076-12.045,79.343-57.209
	C227.159,126.864,214.954,35.968,214.419,32.12z M174.233,85.186l-62.917,62.917c-1.464,1.464-3.384,2.197-5.303,2.197
	s-3.839-0.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s0.791-3.897,2.197-5.303l7.724-7.724
	c2.929-2.928,7.678-2.929,10.606,0l25.874,25.874l49.89-49.891c1.406-1.407,3.314-2.197,5.303-2.197s3.897,0.79,5.303,2.197
	l7.724,7.724C177.162,77.508,177.162,82.257,174.233,85.186z"
          />
        </svg>
      </div>
      <h3 class="gray_txt medium_size_text">گارانتی سلامت فیزیکی کالا</h3>
    </div>
    <div class="d-flex cart_item_inventory mb-4">
      <div class="d-flex ms-2">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM11.7069 6.70739C12.0975 6.31703 12.0978 5.68386 11.7074 5.29318C11.3171 4.9025 10.6839 4.90224 10.2932 5.29261L6.99765 8.58551L5.70767 7.29346C5.31746 6.90262 4.6843 6.90212 4.29346 7.29233C3.90262 7.68254 3.90212 8.3157 4.29233 8.70654L6.28912 10.7065C6.47655 10.8943 6.7309 10.9998 6.99619 11C7.26147 11.0002 7.51595 10.8949 7.70361 10.7074L11.7069 6.70739Z"
            fill="white"
            stroke="#65666a"
          />
        </svg>
      </div>
      <h3 class="gray_txt medium_size_text">موجود در انبار روچی</h3>
    </div>
    <div class="d-flex align-items-center cart_item_quantity_update">
      <div
        class="
          d-flex
          justify-content-center
          align-items-center
          cart_item_quantity
          border-radius-6
        "
      >
        <span class="medium_size_text gray_txt ms-1">مقدار:</span>
        <h4 class="medium_size_text gray_txt">{{ selectedAreaWithUnit }}</h4>
      </div>
      <div class="me-3">
        <b-button class="d-flex align-items-center" v-b-modal="editModalId(id)">
          <div class="d-flex ms-1">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16H4ZM17 3L17.5303 2.46967C17.2374 2.17678 16.7626 2.17678 16.4697 2.46967L17 3ZM21 7L21.5303 7.53033C21.8232 7.23744 21.8232 6.76256 21.5303 6.46967L21 7ZM8 20V20.75C8.19891 20.75 8.38968 20.671 8.53033 20.5303L8 20ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75V19.25ZM20.5 20.75C20.9142 20.75 21.25 20.4142 21.25 20C21.25 19.5858 20.9142 19.25 20.5 19.25V20.75ZM4.53033 16.5303L17.5303 3.53033L16.4697 2.46967L3.46967 15.4697L4.53033 16.5303ZM16.4697 3.53033L20.4697 7.53033L21.5303 6.46967L17.5303 2.46967L16.4697 3.53033ZM20.4697 6.46967L7.46967 19.4697L8.53033 20.5303L21.5303 7.53033L20.4697 6.46967ZM8 19.25H4V20.75H8V19.25ZM4.75 20V16H3.25V20H4.75ZM13.4697 6.53033L17.4697 10.5303L18.5303 9.46967L14.5303 5.46967L13.4697 6.53033ZM12 20.75H20.5V19.25H12V20.75Z"
                fill="#40bfc1"
              />
            </svg>
          </div>
          <span class="blue_txt medium_size_text">ویرایش</span>
        </b-button>
        <b-modal :id="'editModal' + id" hide-header hide-footer>
          <div class="d-flex align-items-baseline">
            <p clas="my-4">مقدار جدید را وارد کنید:</p>
            <div class="flex-grow-1">
              <b-form @submit.prevent="onEditSubmit">
                <div class="d-flex">
                  <b-form-input
                    class="mx-1"
                    id="input-1"
                    v-model="editValue"
                    type="text"
                    required
                  ></b-form-input>
                  <b-button type="submit" variant="primary">ثبت </b-button>
                </div>
              </b-form>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
    <div
      class="
        d-flex
        align-items-center
        cart_item_price
        red_txt
        d-flex
        align-items-center
      "
    >
      <div class="gray_txt text-decoration-line-through ms-2">42000</div>
      <div>
        <span>{{ totalPrice.toLocaleString() }}</span>
        <span class="small_size_text me-1">تومان</span>
      </div>
    </div>

    <div class="d-flex cart_item_delete">
      <b-button v-b-modal="deleteModalId(id)">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20"
            stroke="#a9abaf"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></b-button>
      <b-modal
        :id="'deleteModal' + id"
        hide-header
        :ok-title="'بله'"
        :cancel-title="'خیر'"
        @ok="deleteItem"
      >
        <p clas="my-4">آیا آیتم از سبد خرید حذف شود؟</p>
      </b-modal>
    </div>
  </section>
</template>
<script>
import myMixin from '../mixin'
export default {
  name: "cartItem",
  props: ["name", "selectedArea", "totalPrice", "id"],
  data() {
    return {
      editValue: null,
    };
  },
  mixins:[myMixin],
  methods: {
    deleteItem() {
      this.$store.commit("DELETE_ITEM", this.id);
    },
    onEditSubmit() {
      this.$store.commit("EDIT_ITEM", { id: this.id, value: this.editValue });
      this.editValue = null;
      this.$root.$emit("bv::hide::modal", `editModal${this.id}`);
    },
  },

};
</script>
<style scoped>
#cart_item_wrapperr {
  background-color: white;
  padding: 12px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr;
  row-gap: 15px;
  column-gap: 3%;
}
.cart_item_img {
  grid-column: 1/2;
  grid-row: 1/5;
}

.cart_item_name {
  grid-column: 2/4;
  grid-row: 1/2;
  font-size: 16px;
  font-family: "iran-sans";
}
.cart_item_warranty {
  grid-column: 2/4;
  grid-row: 2/3;
}
.cart_item_warranty h3 {
  font-size: 15px;
}
.cart_item_inventory {
  grid-column: 2/4;
  grid-row: 3/4;
}
.cart_item_inventory h3 {
  font-size: 15px;
}
.cart_item_quantity_update {
  grid-column: 2/4;
  grid-row: 4/5;
  align-self: end;
}
.cart_item_quantity {
  background-color: #f9fbfe;
  padding: 10px 15px;
}
.cart_item_price {
  grid-column: 4/5;
  grid-row: 4/5;
  align-self: end;
}
.cart_item_delete {
  grid-column: 4/5;
  grid-row: 1/2;
  justify-self: end;
}
.cart_item_delete .btn {
  padding: unset;
}
.cart_item_delete .btn-secondary,
.cart_item_quantity_update .btn-secondary {
  background-color: transparent;
  border-color: unset;
}
.cart_item_delete .btn-secondary:focus,
.cart_item_quantity_update .btn-secondary:focus {
  box-shadow: unset;
}
</style>
