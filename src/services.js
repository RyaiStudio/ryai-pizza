import axios from 'axios'

export default class ServiceProvider {
  
  constructor() {
    this.variables();
  }

  variables() {
    this.$vueAlert = document.getElementById('vue-alert');
    this.$baseUrl = 'http://ryai-pizza.local';
  }

  // get Toppings API
  toppings(NewcCallBack) {
    // const Promise;
    axios({
      method: 'get',
      url: this.$baseUrl + '/topping/list'
    }).then(response => {
      NewcCallBack(response);
    }).catch(error => {
      this.vueAlert(error, "floater-danger");
    });
  }

  // get pizza API
  pizza(NewcCallBack) {
    axios({
      method: 'get',
      url: this.$baseUrl + '/pizza/list'
    }).then(response => {
      NewcCallBack(response)
    }).catch( error => {
      this.vueAlert(error, "floater-danger");
    })
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