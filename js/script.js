// var per vue js
var app = new Vue({
  
  // elemento con id root
  el: "#root",
  
  // data
  data: {

    // titolo in data
    title: {
      text: "Hello!"
    },

    // sottotitolo in data
    subtitle: {
      text: "Welcome to Vue JS",
      img: "img/vue_logo.png"
    },

    // bottone in data
    button: {
      text: "Click me",
      toClick: true,
      clicked: false
    }
  },

  // methods (funzioni)
  methods: {
    changeStatus(){
      this.button.text = this.button.text == "Click me" ? "Clicked" : "Click me";
      this.button.toClick = this.button.toClick == true ? false : true;
      this.button.clicked = this.button.toClick == false ? true : false;
    }
  }

})