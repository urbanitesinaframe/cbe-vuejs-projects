Vue.createApp({
  data() {
    return {
      name: "Jimmy Ng",
      regionCode: "en-en",
    };
  },
  computed: {
    currentDate() {
      return new Date().toLocaleString(this.regionCode);
    },
  },
}).mount("#app");
