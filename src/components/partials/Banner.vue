<template>
<section class="hero hero-starter">
  <div v-bind:style="styleObject" class="img-banner" ></div>
  <div v-bind:style="heroBody" class="hero-body mt-5">
    <div class="container mb-3">
      <slot></slot>
    </div>
  </div>
</section>
</template>
<script>
export default {
  props: ['imgSrc', 'height'],
  data() {
    return {
      winscroll: 0,
      heroBody: { 'height': `${ this.height }` },
      styleObject: {
        'background': `url(${this.imgSrc})`,
        'transform': 'translate3d(0px, 0px, 0px)'
      }
    }
  },
  methods: {
    handleScroll: function () {
      this.winscroll = window.pageYOffset;
      var $scroll = (this.winscroll / 6).toFixed(4);
      this.styleObject.transform = 'translate3d(0px, '+$scroll+'px, 0px)';
    }
  },
  beforeMount: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
