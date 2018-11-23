<template>
  <div class="OrderView">
    <banner-component v-bind:imgSrc="imgSrc" v-bind:height="banner_height" >
      <div class="columns">
        <div class="column is-6-widescreen is-5-fullhd">
          <h1 class="title">Mini pizza Taccos for everyone</h1>
          <h2 class="subtitle">Order pizza by clicking the button below and get a 40% discount</h2>
        </div>
        <div class="column is-6-widescreen is-offset-1-fullhd is-fullhd-6">
          <div class="columns">
            <div class="column">
              no content
            </div>
          </div>
        </div>
      </div>
    </banner-component>
    <section class="section has-background-white">
      <div class="container">
        <div class="columns">
          <div class="column is-5-widescreen is-4-fullhd">
            <div class="notification">
              <i class="fas fa-shopping-cart"></i>
              Number of Orders - <strong>{{ orders.length }}</strong>
            </div>
            <br>
            <notification-content
              v-for="(item, key) in orders"
              v-bind:key="key"
              v-bind:item="item"
              v-on:removeItem="removeItem(key)"
              v-on:addToppings="addToppings(key)"
              >
            </notification-content>
            <br>
            <button v-if="orders.length!=0" class="button my-btn">Submit Order</button>
          </div>
          <div class="column">
              <pizza-content v-for="(item, key) in pizza" 
                v-bind:ref="'pizza'+key"
                v-bind:key="key" 
                v-bind:item="item"
                v-on:placeOrder="placeItem(key)"
              ></pizza-content>
          </div>
        </div>
      </div>
    </section>
    <modal-content v-bind:class="[{ 'is-active': isActiveModal }]" 
      v-bind:toppings="toppings"
      v-on:closeModal="closeModal"
      v-on:saveToppings="saveToppings"
    ></modal-content>
  </div>
</template>

<script>
import Vue from 'vue'
import DataSrc from '../component-data'
import BannerComponent from './partials/Banner'
import PizzaContent from './partials/Pizza'
import NoficationContent from './partials/Notification'
import ModalContent from './partials/ModalTops'

export default {
  data() {
    return {
      banner_height: '',
      imgSrc: DataSrc.front_page.banner_img,
      pizza: DataSrc.pizzas,
      orders: [],
      toppings: DataSrc.toppings,
      isActiveModal: false
    }
  },
  components: {
    'banner-component': BannerComponent,
    'pizza-content': PizzaContent,
    'notification-content': NoficationContent,
    'modal-content': ModalContent
  },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    placeItem(key) {
      this.orders.push(this.$refs['pizza'+key][0].item)
    },
    removeItem(key) {
      Vue.delete(this.orders, key);
    },
    addToppings(key) {
      this.isActiveModal = true
    },
    closeModal() {
      this.isActiveModal = false
    },
    saveToppings(toppings) {
      console.log(toppings)
    }
  }
}
</script>
