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
                <input type="checkbox" ref="selectedTops" 
                v-bind:label="tops.label"
                v-bind:price="tops.price"
                v-bind:value="key">
                {{ tops.label }}
              </label>
              <span class="fl-right">{{ ' $'+tops.price }}</span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item pointer" 
            v-on:click="$emit('closeModal')"><span>close</span></p>
          <p class="card-footer-item pointer" 
            v-on:click="submitToppings"><span>add now</span></p>
        </footer>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" 
      v-on:click="$emit('closeModal')"></button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  props: ['toppings', 'mKey', 'tType'],
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
            id: parseInt(item.value),
            label: item.getAttribute('label'),
            price: item.getAttribute('price')
          });
        }
      });
      if (selTops.length > 0) {
        this.$emit('saveToppings', { data:selTops, key: this.mKey, tType: this.tType });
        tops.forEach( item => item.checked = false );
      } else {
        Swal('Oops...', 'Can\'t proceed without any toppings', 'error')
      }
    }
  }
}
</script>

<style>

</style>
