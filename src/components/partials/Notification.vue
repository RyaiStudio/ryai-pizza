<template>
    <div class="notification">
      <button class="delete" v-on:click="$emit('removeItem')" ></button>
      <div class="media">
        <div class="media-left">
          <figure class="image is-32x32">
            <img v-bind:src="item.img" v-bind:alt="item.label">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>{{ item.label }}</p>
            <span v-on:click="$emit('addToppings')" class="tag is-white fl-right"><i class="fas fa-plus"></i>&nbsp;toppings</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>
