<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <h3 class="toppings-heading">Select Toppings</h3>
          <div class="flex-card" >
            <div class="notification flex-note"
              v-for="(tops, key) in toppings"
              v-bind:key="key"
            >
              <label class="checkbox" >
                <input type="checkbox" ref="selectedTops" v-label:label="tops.label"  v-bind:value="key">
                {{ tops.label }}
              </label>
              <span class="fl-right">{{ ' $'+tops.price }}</span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item pointer" v-on:click="$emit('closeModal')">
            <span>close</span>
          </p>
          <p class="card-footer-item pointer" v-on:click="submitToppings">
            <span>add now</span>
          </p>
        </footer>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  props: ['toppings'],
  data() {
    return {
    }
  },
  methods: {
    submitToppings() {
      const tops = this.$refs.selectedTops,
            selTops = [];
      tops.forEach(item => {
        if(item.checked) {
          selTops.push({
            id: parseInt(item.value)
          });
          console.log(item.label)
        }
      });
      if (selTops.length > 0) {
        this.$emit('saveToppings', selTops);
      } else {
        Swal('Oops...', 'Can\'t proceed without any toppings', 'error')
      }
    }
  }
}
</script>

<style>

</style>
