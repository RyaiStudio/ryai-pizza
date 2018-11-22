<template>
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation"
v-bind:class="[{ 'is-transparent': is_transparent  }]">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" v-bind:href="domain_url">
        <img v-bind:src="logo" >
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="(nav, key) in navlink" 
          v-bind:key="key"  
          v-bind:to="nav.url" class="navbar-item">{{ nav.label }}</router-link>
        <!-- <router-link  to="About" class="navbar-item">About</router-link> -->
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Your Cart</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import DataSrc from '../../component-data'
export default {
  data: () => {
		return {
      is_transparent: true,
      lastScrollTop: 0,
      is_active: false,
      logo: DataSrc.logo,
      navlink: DataSrc.navlink,
      domain_url: DataSrc.domain_url
		}
	},
  methods: {
    handleScroll: function() {
      this.is_transparent = (window.scrollY > 50)?false:true;
    },
    toogle_mobile: function(is_active) {
      this.is_active = is_active
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
