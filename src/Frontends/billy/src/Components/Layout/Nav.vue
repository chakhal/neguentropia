<template>
	<nav class="nav">
		<toggle :open="open">
			<span class="nav--title" slot="trigger">{{ title }}</span>
		    <ul>
		      <li 
		      	v-for="(r, index) in routes" class="nav--item"
		      	 v-theme-follow-cursor="['navitem', index]"
		      >
		        <router-link  :to="r">
		        	<span v-if="r.meta && r.meta.ico"  class="nav--label">
	        			<ico :name="r.meta.ico" class="nav--ico" ></ico>	
		        	</span>
		        	<span v-else class="nav--label">
		        	{{ r.name.substr(-1) }}</span>
	        	</router-link>
	        	<span ref="navitem">Bl abl bla {{ r.name }}</span>
		      </li>
		    </ul>
		</toggle>
		<slot></slot>
	</nav>
    
</template>
<script>

import toggle from '../UX/toggle.vue'
import ico from '../UX/ico.vue'

export default {
	name: 'nav',
	data: () => {
		return {
			open: null
		}
	},
	props: {
		title: {
			type: String,
			default: 'Menu'
		},
		routes: {
			type: Array,
			default: () => [],
			validator: function(val) {
				return val.filter((item) => item.name).length == val.length
			}
		}
	},
	components: {
		toggle, ico
	},
	watch: {
		$route: function(newVal, old) { 
			console.log('navigate', old, '->', newVal)
			
			this.open = false


			this.$nextTick(() => {
				this.open = null
			})
		}
	}
}

</script>

<style lang="scss">
	
	// main styles and variables
	$transition: .5s;
	$easing : cubic-bezier(.39,1.52,.46,.92);

	.nav {
		display: block;
		position: relative;
		will-change: transform;

		transition: 
			transform $transition $easing,
			font-size $transition $easing;
	//	transform: scale(1);
		transform-origin: 0 0;
	}

	// sizing and positioning elements
	.nav--title,
	.nav--item,
	.nav--item:before,
	.nav--label {
		position: absolute;
		height: 4em;
		width: 4em;
		top: 0;
		left: 0;
		
		border-radius: 50%;
	}

	.nav--title,
	.nav--item {
		$font-size: 1.4;
		top: 1em / $font-size;
		left: 1em / $font-size;
		font-size: $font-size * 1em;
	}

	// pretty parts
	.nav--title,
	.nav--item,
	.nav--label {
		background: rgba(white, .0);
		color: black;
		mix-blend-mode: screen;
		
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.nav--title,
	.nav--label {
		mix-blend-mode: normal;
	}

	.nav--title {
		z-index: 1;
		text-transform: lowercase;
		font-variant: small-caps;
		font-weight: bold;

	}

	.nav--ico {
		height: 50%;
	}

	.opened .nav--title {
		color: white;
	}

	.nav--item {
		will-change: transform;

		&:before {
			content: '';
			box-sizing: border-box;
			border-color: inherit;
			border-style: solid;
			border-width: 2em;
			border-radius: 50%;
			will-change: border-width;

			position: absolute;
			height: 4em;
			width: 4em;
			top: 0;
			left: 0;
		

			transition: 
				border-width $transition/4 linear
				;
		}

		> a {
			text-decoration: none;
		}

		@at-root .opened &:hover:before {
			border-width: 2em !important;
		}
		@at-root .opened :before {
			border-width: 0em !important;
		}
	}

	.closed {
		.nav--item {
			pointer-events: none;
		}
		.nav--label {
			opacity: 0;
		}
	}

	$bgs: deeppink, yellowgreen, cadetblue, purple, red;
	@for $i from 1 through 3 {
		.nav--item:nth-child(#{$i}) {
			transition: 
				transform $transition*$i*.9 $easing,
				;
			background: rgba(nth($bgs,$i), 1);
		}
		.nav--item:nth-child(#{$i}):before {
			transition: 
				transform $transition*$i*.9 $easing,
				border-width $transition/4 linear
				;
			border-color: rgba(nth($bgs,$i), 1);

		}

		.nav:hover,
		.nav:focus {
			.nav--item:nth-child(#{$i}) {
				transform: scale(1.2) rotate(($i * 120deg) + 180 ) translate3D(.2em, 0em, 0em) ;
			}			
		}

		.closed .nav--item:nth-child(#{$i}) {
			transform: scale(1) rotate(($i * 120deg) + 540deg ) translate3D(.05em, 0em, 0em) ;
		}

		.closed .nav:hover,
		.closed .nav:focus {
				.nav--item:nth-child(#{$i}) {
					transform: scale(1) rotate(($i * 120deg) + 180deg ) translate3D(.2em, 0em, 0em) ;
				}

			}
		.nav .opened .nav--item:nth-child(#{$i}) {
			transform: scale(1) rotate(0) translate3D($i* 85%, 0em, 0em);
			border-width: 0;
		}

	}
</style>