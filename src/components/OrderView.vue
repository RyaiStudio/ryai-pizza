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
          <div class="column is-4-widescreen is-3-fullhd">
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
              >
            </notification-content>
            <br>
            <router-link v-on:click.native="emitToParentRoute" to="/customize" class="button my-btn"
              v-if="orders.length!=0">Custommize Your Pizza</router-link>
          </div>
          <div class="column">
              <pizza-content v-for="(item, key) in pizzas" 
                v-bind:ref="'pizza'+key"
                v-bind:key="key" 
                v-bind:item="item"
                v-on:placeOrder="placeItem(key)"
              ></pizza-content>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import _ from "underscore";
import ServiceProvider from '../services'

import DataSrc from '../component-data'
import BannerComponent from './partials/Banner'
import PizzaContent from './partials/Pizza'
import NoficationContent from './partials/Notification'

export default {
  data() {
    return {
      banner_height: '',
      imgSrc: DataSrc.front_page.banner_img,
      orders: [],
      pizzas: null,
      toppings: null,
      SerPro: null
    }
  },
  components: {
    'banner-component': BannerComponent,
    'pizza-content': PizzaContent,
    'notification-content': NoficationContent,
  },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    placeItem(key) {
      const item = this.$refs['pizza'+key][0].item
      const NewOrder = {
        pizza_id: item.id,
        image_path: item.image_path,
        label: item.label,
        price: item.price
      }
      this.orders.push( NewOrder )
    },
    removeItem(key) {
      Vue.delete(this.orders, key);
    },
    // on emit to parent
    emitToParentRoute() {
      this.$emit('customize', this.orders);
    }
  },
  mounted() {
    this.SerPro = new ServiceProvider();
    this.baseUrl = this.SerPro.$baseUrl;
    // API toppings
    this.SerPro.toppings(res => {
      this.toppings = res.data;
    })
    // API pizzas
    this.SerPro.pizza( res => {
      this.pizzas = _.map(res.data, item => {
        item.image_path = this.baseUrl+'/'+item.image_path
        return item;
      });
    })
  }
}
</script>
