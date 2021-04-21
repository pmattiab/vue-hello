// var per vue js
var app = new Vue({
  
  // elemento con id root
  el: "#root",
  
  // data
  data: {

    // indice lingua visualizzata
    currentLanIndex: 2,

    // array lingue
    languagesArray: [
      {
        name: "english",
        title: "Hello!",
        subtitle: "Welcome to Vue JS"
      },

      {
        name: "italian",
        title: "Ciao!",
        subtitle: "Benvenuto in Vue JS"
      },

      {
        name: "español",
        title: "Hola!",
        subtitle: "Bienvenido a Vue JS"
      },

      {
        name: "français",
        title: "Bonjour!",
        subtitle: "Bienvenue à Vue JS"
      },

      {
        name: "deutsche",
        title: "Hallo!",
        subtitle: "Willkommen zu Vue JS"
      },

      {
        name: "中国人",
        title: "你好!",
        subtitle: "欢迎客栈 Vue JS"
      }
    ],

    // bottone in data
    button: {
      active: false
    }
  },

  // methods (funzioni)
  methods: {
    changeLan(index){
      this.currentLanIndex = index;
    }
  }

})