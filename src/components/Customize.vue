<template>
  <div class="Customizer">
    <banner-component v-bind:imgSrc="imgSrc" v-bind:height="banner_height" >
      <div class="columns">
        <div class="column is-6-widescreen is-5-fullhd">
          <h1 class="title">Pizza Customizer</h1>
          <h2 class="subtitle">Customize your premade pizza</h2>
        </div>
        <div class="column is-6-widescreen is-offset-1-fullhd is-fullhd-6">
          <me-content></me-content>
        </div>
      </div>
    </banner-component>
    <section class="section has-background-white">
      <div class="container">
        <div class="columns">
          <div class="column">
            <box-custom v-for="(item, key) in orders" 
              v-bind:key="key"
              v-bind:item="item"
              v-bind:keyHolder="key"
              v-on:addToppings="addToppings"
              v-on:changeSize="changeSize"
              v-on:changeCrust="changeCrust"
              v-on:changeType="changeType"
              v-bind:ref="'box-'+key"
              >
              <template slot="topping-whole" >
                <ul class="ul-toppings mb-1">
                  <li v-for="(item, innerKey) in item.whole" 
                    :key="innerKey">{{ item.label }}</li>
                </ul>
              </template>
              <template slot="topping-first" >
                <ul class="ul-toppings mb-1">
                  <li v-for="(item, innerKey) in item.first" 
                    :key="innerKey">{{ item.label }}</li>
                </ul>
              </template>
              <template slot="topping-second">
                <ul class="ul-toppings mb-1">
                  <li v-for="(item, innerKey) in item.second" 
                    :key="innerKey">{{ item.label }}</li>
                </ul>
              </template>
            </box-custom>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="fl-right">
              <router-link  to="/" class="button ">CANCEL</router-link>&nbsp;
              <router-link  v-on:click.native="emitToParentRoute" to="/preview" class="button is-primary">SUBMIT TO CART</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal-content v-bind:class="[{ 'is-active': isActiveModal }]" 
      v-bind:toppings="toppings"
      v-on:closeModal="closeModal"
      v-on:saveToppings="saveToppings"
      v-bind:mKey="mKey"
      v-bind:tType="tType"
    ></modal-content>
  </div>
</template>

<script>
import ServiceProvider from '../services'
import _ from "underscore";

import DataSrc from '../component-data'
import BannerComponent from './partials/Banner'
import BoxCustom from './partials/BoxCustom'
import ModalContent from './partials/ModalTops'
import Me from './partials/Me'

export default {
  props: ['orders'],
  components: {
    'banner-component': BannerComponent,
    'box-custom': BoxCustom,
    'modal-content': ModalContent,
    'me-content': Me,
  },
  data() {
    return {
      banner_height: '',
      imgSrc: DataSrc.front_page.banner_img,
      toppings: null,
      // modal data
      isActiveModal: false,
      mKey: null,
      tType: null
    }
  },
  methods: {
    // modal events
    addToppings(top) {
      this.mKey = top.key;
      this.tType = top.type;
      this.isActiveModal = true
    },
    closeModal() { this.isActiveModal = false },
    saveToppings(tops) {
      this.mKey = null
      this.isActiveModal = false
      this.orders[tops.key][tops.tType] = tops.data
      let tPrice = 0;
      _.map(tops.data, item => {
        tPrice += parseFloat(item.price)
      })
      let odrPrice = parseFloat(this.orders[tops.key].price) + tPrice
      this.orders[tops.key].price = odrPrice.toFixed(2);
    },
    // select event
    changeSize(key) {
      const refs = this.$refs['box-'+key][0].$refs['in_size-'+key];
      let subTotal = 0;
      if (refs.value == "medium") {
        subTotal += 0.50;
      } else if (refs.value == "large") {
        subTotal += 1.00;
      }
      let odrPrice = parseFloat(this.orders[key].original_price) + subTotal;
      this.orders[key].price = odrPrice.toFixed(2);
      this.orders[key].size = refs.value
    },
    changeCrust(key) {
      const refs = this.$refs['box-'+key][0].$refs['in_crust-'+key];
      this.orders[key].crust = refs.value
    },
    changeType(key) {
      const refs = this.$refs['box-'+key][0].$refs['in_type-'+key];
      this.orders[key].type = refs.value
    },
    // on emit to parent
    emitToParentRoute() {
      this.$emit('customize', this.orders);
    }
  },
  beforeMount() {
    if(this.orders.length === 0) {
      window.location.href = "/";
    }
  },
  mounted() {

    this.SerPro = new ServiceProvider();
    
    // API pizzas
    this.SerPro.toppings( res => {
      this.toppings = _.map(res.data, item => {
        return { price: item.price, label: item.toppings }
      });
    })
    
    _.map(this.orders, item => {
      item.original_price = parseFloat(item.price)
      item.size   = 'small'
      item.crust  = 'hand-tossed'
      item.type   = 'custom'
      item.whole  = []
      item.first  = []
      item.second = []
      return item;
    })
  }
}
</script>
