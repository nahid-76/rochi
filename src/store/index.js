import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [
      {
        id: 1,
        name: "پارچه شانتون طرح دار سامینا,طرح دار سامینا",
        price: 20000,
        selectedArea: 1.5,
        totalPrice: 30000,
      },
      {
        id: 2,
        name: "پارچه  طرح دار دلتا",
        price: 35000,
        selectedArea: 1.6,
        totalPrice: 56000,
      },
      {
        id: 3,
        name: "پارچه حریر طرح دار سامینا,طرح دار سامینا",
        price: 65000,
        selectedArea: 5,
        totalPrice: 325000,
      },
      {
        id: 4,
        name: "پارچه حریر طرح دار سامینا طرح دار سامینا,طرح دار سامینا",
        price: 10000,
        selectedArea: 1.3,
        totalPrice: 325000,
      },
    ],
  },
  mutations: {
    DELETE_ITEM(state, id) {
      let cart = state.cart.filter((item) => item.id !== id);
      state.cart = cart;
    },
    EDIT_ITEM(state, { id, value }) {
      let item = state.cart.find((item) => item.id === id);
      item.selectedArea = value;
      item.totalPrice = value * item.price;
    },
  },
});

export default store;
