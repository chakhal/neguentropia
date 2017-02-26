<template>
  <div id="app" class="app layered" v-theme="'simple'">
    <div class="layer--bg"></div>
    <div class="layer--content">
      <main-nav class="app--nav" title="Billy" :routes="topRoutes">toto</main-nav>
      <section class="app--content">
        <router-view >yoyo</router-view>
      </section>
      <aside class="app--aside">
        ASIDE
      </aside>
  <!--     <router-view name="second">DEFAULT</router-view>
   -->  
      
    </div>
    <div class="layer--modal"></div>
    <div ref="theme-cursor"></div>
  </div>
</template>

<script>

import MainNav from './Components/Layout/Nav.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  directives: {
  },
  components: {
    MainNav
  },
  computed: {
    topRoutes: function() {
      return this.$router.options.routes
        .filter( r => r.meta && r.meta.mainModule)
    }
  },
  created: function() {

  }

}
</script>

<style lang="scss">
$color: orange;
$font-size: 20px;
$transition: .5s;
$ease: ease-in;

// reset
html, body, .app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  overflow: hidden;

  background: #000;
  color: #fff;

  font: #{$font-size}/1.5 sans-serif;
  font-family: verdana;
}

* {
  margin: 0;
  padding: 0;
}

p {
  margin: 0 0 1em;
}

// layer strategy
.layered {
  position: relative;
}
[class^='layer--'] {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform $transition $ease;
}

.layer--content {
  display: flex;
  
}
.layer--modal {
  will-change: transform;
  transform-origin: 0 100%;
  transform: rotate(-90deg);
  background: rgba(red, .5);

  @at-root .app_modal & {
    transform: rotate(0);

  }
}

.layer--cursor {
  pointer-events: none;
}

.app {
  background-image: radial-gradient(
    ellipse at center,
    rgba(white, .1) 0%,
    rgba(white, .1) 10%,
    rgba(black, 1) 20%,
    rgba(black, 1) 100%); 
  background-size: .5em .5em;
  background-position: 0 0;
  background-attachment: fixed;
}

.app--nav,
.app--aside {
  width: 4em;
  background-image: radial-gradient(
    ellipse at center,
    rgba(white, .2) 0%,
    rgba(white, .2) 10%,
    rgba(black, 1) 20%,
    rgba(black, 1) 100%); 
  background-size: .25em .25em;
  background-position: 0 0;
  background-attachment: fixed;
}

.app--content {
  flex: 1;
  text-align: left;
  padding: 0 1em 0 4em;
}
</style>
