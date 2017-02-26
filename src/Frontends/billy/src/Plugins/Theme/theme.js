import themeDirective from './Directives/main.js'
import followCursorDirective from './Directives/follow-cursor.js'

import Theme from './Features/Theme.js'

export default {
	install (Vue, options) {
		console.log('plugin theme', options)

		//Vue.Theme = options || {}
		let __theme = options
		let Themer = new Theme(options)
		

		Vue.mixin({
		    beforeCreate () {
		      	//debugger
		      	let proto = this.$parent ? this.$parent.__theme : __theme
		      	let theme = {}

		      	Object.defineProperty(this, '$themer', {
		      		get: function() { return Themer }
		      	})

		      	// get proto from parent
		      	theme.__proto__ = proto
		      	Vue.util.defineReactive(this, '__theme', theme)

		      	// set properties regarding component options
		      	if (this.$options.theme) {
		      		Object.assign(theme, this.$options.theme)
		      	}

		     // 	console.log('------')
		      	for (var p in theme) {
		     // 		console.log(p, theme[p])
		      	}
		    },
		    directives: {
		    	'theme': themeDirective,
		    	'theme-follow-cursor': followCursorDirective
		    },
		    computed: {
		    	$theme: function(){
		    		let obj = {}
		    		for (let p in this.__theme) {
		    			obj[p] = this.__theme[p]
		    		}
		    		return obj
		    	}
		    }
	  	})
	}

}