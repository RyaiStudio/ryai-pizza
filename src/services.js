import axios from 'axios'

export default class ServiceProvider {
  
  constructor() {
    this.variables();
  }

  variables() {
    this.$vueAlert = document.getElementById('vue-alert');
    this.$baseUrl = 'http://ryai-pizza.local';
  }

  /* postFirebase(callback) {
    axios({
      method: 'get',
      url: 'https://ryai-pizza.firebaseio.com/pizzas.json',
    }).then(response => {
      callback(response);
    }).catch(error => {
      this.vueAlert(error, "floater-danger");
    });
  } */

  // get Toppings API
  pizza(callback) {
    axios({
      method: 'get',
      url: 'https://ryai-pizza.firebaseio.com/toppings.json',
    }).then(response => {
      callback(response);
    }).catch(error => {
      this.vueAlert(error, "floater-danger");
    });
  }

  // get pizza API
  toppings(callback) {
    axios({
      method: 'get',
      url: 'https://ryai-pizza.firebaseio.com/pizzas.json',
    }).then(response => {
      callback(response);
    }).catch(error => {
      this.vueAlert(error, "floater-danger");
    });
  }

  // show alert
  vueAlert(content, classType) {
    this.$vueAlert.innerHTML = content;
    this.$vueAlert.classList.add(classType)
    this.$vueAlert.classList.add("is-active")
    setTimeout(() => {
      this.$vueAlert.classList.remove(classType)
      this.$vueAlert.classList.remove("is-active")
    }, 5000);
  }

}