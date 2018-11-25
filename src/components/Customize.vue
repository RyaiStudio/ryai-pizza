<template>
  <div class="Customizer">
    <banner-component v-bind:imgSrc="imgSrc" v-bind:height="banner_height" >
      <div class="columns">
        <div class="column is-6-widescreen is-5-fullhd">
          <h1 class="title">Pizza Customizer</h1>
          <h2 class="subtitle">Customize your premade pizza</h2>
        </div>
        <div class="column is-6-widescreen is-offset-1-fullhd is-fullhd-6"></div>
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

import DataSrc from '../component-data'
import BannerComponent from './partials/Banner'
import BoxCustom from './partials/BoxCustom'
import ModalContent from './partials/ModalTops'

export default {
  props: ['orders'],
  components: {
    'banner-component': BannerComponent,
    'box-custom': BoxCustom,
    'modal-content': ModalContent,
    // 'notification-content': NoficationContent,
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
    },
    changeSize(sval) {
      console.log(sval)
    },
    changeCrust(sval) {
      console.log(sval)
    },
    changeType(sval) {
      console.log(sval)
    },
  },
  mounted() {
    if(this.orders.length === 0) {
      window.location.href = "/";
    }

    this.SerPro = new ServiceProvider();
    this.baseUrl = this.SerPro.$baseUrl;
    // API toppings
    this.SerPro.toppings(res => {
      this.toppings = res.data;
    })
  }
}
</script>
