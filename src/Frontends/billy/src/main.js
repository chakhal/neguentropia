import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTheme from './Plugins/Theme/theme.js'
import App from './App.vue'

import Home from './Components/Screen/Home.vue'
import Page from './Components/Screen/Page.vue'
import Page2 from './Components/Screen/Page2.vue'
import Face from './Components/Screen/Face.vue'

const router = new VueRouter({
	mode: 'history',
  	routes: [
    	// dynamic segments start with a colon
    	{ path: '/' , component: Home },

    	{ 
    		path: '/page1',
    		name: 'page1' ,
    		component: Page,
    		meta: {
    			mainModule: true,
                ico: 'recycle'
            }
        },
        { 
            path: '/page2',
            name: 'page2' ,
            component: Page2,
            meta: {
                mainModule: true,
                ico: 'chessboard'
            }
        },
        { 
    		path: '/page3',
    		name: 'page3' ,
    		component: Face,
    		meta: {
    			mainModule: true
    		}
    	},
 	]
})

const themeOptions = {
    paths: {

        css: '/static/themes/'
    } 
}

Vue.use(VueRouter)
Vue.use(VueTheme, themeOptions)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

