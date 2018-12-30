new Vue({
  el: '#app',
  data: {
    articles: null
  },
  mounted () {
    axios
      .get('https://script.google.com/macros/s/AKfycbzDgsTCLVWDkYatJeZmc9Y81E09_o4wC3Psg75M0tORoCfzyTE/exec')
      .then(response => (this.articles = response.data.reverse()))
  }
})