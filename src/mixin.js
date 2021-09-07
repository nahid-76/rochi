export default {
  computed: {
    cartLength() {
      return this.cartItems.length;
    },
    selectedAreaWithUnit() {
      let stringValue;
      if (this.selectedArea % 1 === 0) {
        stringValue = `${this.selectedArea}متر`;
      } else {
        let integerPart = Math.floor(this.selectedArea);
        let decimalPart =
          (this.selectedArea - Math.floor(this.selectedArea)).toFixed(1) * 10;

        stringValue = `${integerPart}متر و ${decimalPart}سانتی متر`;
      }
      return stringValue;
    },
  },
  methods: {
    editModalId(i) {
      return "editModal" + i;
    },
    deleteModalId(i) {
      return "deleteModal" + i;
    },
  },
};
