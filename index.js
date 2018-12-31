Vue.component("global-nav", {
  template: `
    <div class="header-wrapper">
      <div class="header">
        <h2 class="header-title">Oitoku</h2>
        <h5 class="header-subtitle">みんなの「気になる」を置いとく場所</h5>
      </div>
    </div>
  `
});

new Vue({
  el: "#app",
  data: {
    articles: null
  },
  mounted() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbzDgsTCLVWDkYatJeZmc9Y81E09_o4wC3Psg75M0tORoCfzyTE/exec"
      )
      .then(response => (this.articles = response.data.reverse()));
  }
});
