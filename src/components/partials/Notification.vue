<template>
    <div class="notification has-background-white-bis pizza-orders">
      <button class="delete" v-on:click="$emit('removeItem')" ></button>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img v-bind:src="item.image_path" v-bind:alt="item.label">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>{{ item.label }}</p>
            ${{ item.price }}
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
