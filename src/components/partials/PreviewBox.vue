<template>
  <div class="box bg-transparent no-box-shadow">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img v-bind:src="item.image_path" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content tops-tbl">
          <p><strong>{{ item.label }}</strong>&nbsp;
            <small>{{ item.size }}</small>,
            <small>{{ item.crust }}</small>,
            <small>{{ item.type }}</small>
          </p>
          <div class="columns no-margin-mobile">
            <div class="column">
              <p><strong>Primary Toppings</strong></p>
              <ul class="ul-toppings">
                <li v-for="(topping, key) in item.whole" v-bind:key="key">{{ topping.label }}</li>
              </ul>
            </div>
            <div class="column">
              <p><strong>First Toppings</strong></p>
              <ul class="ul-toppings">
                <li v-for="(topping, key) in item.first" v-bind:key="key">{{ topping.label }}</li>
              </ul>
            </div>
            <div class="column">
              <p><strong>Second Toppings</strong></p>
              <ul class="ul-toppings">
                <li v-for="(topping, key) in item.second" v-bind:key="key">{{ topping.label }}</li>
              </ul>
            </div>
          </div>
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

</style>
