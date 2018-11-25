<template>
  <div class="OrderView">
    <banner-component v-bind:imgSrc="imgSrc" v-bind:height="banner_height" >
      <div class="columns">
        <div class="column is-6-widescreen is-5-fullhd">
          <h1 class="title">Mini pizza Taccos for everyone</h1>
          <h2 class="subtitle">A dummy project fortpolio by Ryai</h2>
        </div>
        <div class="column is-6-widescreen is-offset-1-fullhd is-fullhd-6">
          <me-content></me-content>
        </div>
      </div>
    </banner-component>
    <section class="section has-background-white">
      <div class="container">
        <div class="columns" v-show="service_loaded">
          <div class="column">
            <div class="notification">
              <i class="fas fa-spinner fa-spin"></i> featching data 
            </div>
          </div>
        </div>
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
import Me from './partials/Me'

export default {
  data() {
    return {
      banner_height: '',
      imgSrc: DataSrc.front_page.banner_img,
      orders: [],
      pizzas: [],
      toppings: [],
      SerPro: null,
      service_loaded: true
    }
  },
  components: {
    'banner-component': BannerComponent,
    'pizza-content': PizzaContent,
    'notification-content': NoficationContent,
    'me-content': Me,
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
  beforeMount() {
    this.SerPro = new ServiceProvider();
    // API toppings
    this.SerPro.pizza(pizza => {
      this.pizzas = _.map(pizza.data, item => {
        item.description = item.dsecription
        return item;
      })
    })
  },
  mounted() {
    setTimeout(() => {
      this.service_loaded = false
    }, 1000);
  }
}
</script>
