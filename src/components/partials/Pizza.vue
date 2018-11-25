<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img v-bind:src="item.image_path" alt="Image">
        </figure>
        <button v-on:click="$emit('placeOrder')" class="button my-btn mt-1">Place To Cart</button>
      </div>
      <div class="media-content">
        <div class="content">
          <h3><strong>{{ item.label }}</strong></h3>
          {{ item.description }}
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
  .media-left .image img {
    display: block;
    height: 100%;
    width: auto;
    position: absolute;
  }
</style>
