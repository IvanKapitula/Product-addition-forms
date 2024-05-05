const Counter = {
  data() {
    return {
      title: "",
      price: "",
      count: "",
      orders: [],
    };
  },
  methods: {
    addProduct(e) {
      e.preventDefault();
      this.orders.push({
        id: Date.now(),
        title: this.title,
        price: Number(this.price),
        count: Number(this.count),
      });
      this.title = "";
      this.price = "";
      this.count = "";
    },
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.orders.forEach((element) => {
        totalPrice += element.price * element.count;
        return element;
      });
      return totalPrice;
    },
    sortOrder() {
      return this.orders.sort((a, b) => b.price - a.price);
    },
  },
};

Vue.createApp(Counter).mount("#app");
