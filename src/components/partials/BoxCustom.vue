<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img v-bind:src="item.image_path" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
              <strong>{{ item.label }}</strong>&nbsp; - <span>${{ item.price }}</span>
          <div class="columns no-bottom-imp mt-1">
            <div class="column">
              <div class="control">
                <label for="pizza-size">SIZE</label> &nbsp;
                <div class="select is-small">
                  <select v-on:change="$emit('changeSize', { $this: this, key: keyHolder })" v-bind:ref="`in_size-`+keyHolder">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="control">
                <label for="pizza-size">CRUST</label> &nbsp;
                <div class="select is-small">
                  <select v-on:change="$emit('changeCrust', { $this: this, key: keyHolder })" v-bind:ref="`in_crust-`+keyHolder">
                    <option value="hand tossed">Hard-Tossed</option>
                    <option value="deep dish">Deep Dish</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="control">
                <label for="pizza-size">TYPE</label> &nbsp;
                <div class="select is-small">
                  <select v-on:change="$emit('changeType', { $this: this, key: keyHolder })" v-bind:ref="`in_type-`+keyHolder">
                    <option value="custom">Custom</option>
                    <option value="pepperoni feast">Pepperoni Feast</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <table class="tops-tbl table is-bordered  bg-transparent">
            <tr>
              <td class="pos-relative">
                <span v-on:click="$emit('addToppings', { key: keyHolder, type: 'whole' })"  class="btn-tops">
                whole toppings &nbsp;<i class="fas fa-plus"></i></span>
                <slot name="topping-whole"></slot>
              </td>
              <td class="pos-relative">
                <span v-on:click="$emit('addToppings', { key: keyHolder, type: 'first' })" class="btn-tops">
                first toppings &nbsp;<i class="fas fa-plus"></i></span>
                <slot name="topping-first"></slot>
              </td>
              <td class="pos-relative">
                <span v-on:click="$emit('addToppings', { key: keyHolder, type: 'second' })" class="btn-tops">
                second toppings &nbsp;<i class="fas fa-plus"></i></span>
                <slot name="topping-second"></slot>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  props: ['item', 'keyHolder'],
  components: {},
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style>

</style>
