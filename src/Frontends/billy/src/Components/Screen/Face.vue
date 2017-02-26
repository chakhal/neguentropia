<template>
<div class="face">
	<div class="face--commands">
		<b>Eyes</b>
		<div>
			<span>Scale:</span>
			<input type="range" v-model="eyes.scale" min="0" max="3" step=".1"/>
			<small>{{ eyes.scale }}</small>
		</div>
		<div>
			<span>Height:</span>
			<input type="range" v-model="eyes.height" min="0" max="60" step=".5">
			<small>{{ eyes.height }}</small>
			
		</div>
		<b>Ears</b>
		<div>
			<span>Scale:</span>
			<input type="range" v-model="ears.scale" min="0" max="3" step=".1"/>
			<small>{{ ears.scale }}</small>
		</div>
		<div>
			<span>Height:</span>
			<input type="range" v-model="ears.height" min="0" max="60" step=".5">
			<small>{{ ears.height }}</small>
			
		</div>
		
	</div>
	<svg viewBox="0 0 100 100" title="billy face!!" v-theme-follow-cursor>
		<g class="face">
			<circle 
				class="face--shape" 
				cx=50 cy=50 r=40 
				:fill="primary"
			></circle>
			<g 
				class="face--ears" 
				:transform="'translate(50, '+ ears.height +')'"
			>
				<ellipse
					cx=-40 cy=0 rx=7 ry=12 
					:fill="primary"
					:transform="'scale('+ ears.scale +')'"
				></ellipse>
				<ellipse
					cx=+40 cy=0 rx=7 ry=12 
					:fill="primary"
					:transform="'scale('+ ears.scale +')'"
				></ellipse>

			</g>
			<g
				class="face--eyes"
				:transform="'translate(50, '+ eyes.height +') scale('+ eyes.scale +')'"
			>
				<circle
					cx=-15 cy=0 r=10 
					:fill="primaryBg"
				></circle>
				<circle
					cx=+15 cy=0 r=10
					:fill="primaryBg"
				></circle>

			</g>
			<ellipse
				class="face--mouth"
				cx=50 cy=75 rx=20 ry=10 :fill="primaryBg"
			>
			</ellipse>
		</g>	
	</svg>
	
</div>
</template>

<script>
	export default {
		name: 'BillyFace',
		data () {
			return {
				eyes: {
					scale: 1,
					height: 40
				},
				ears: {
					scale: 1,
					height: 40
				},
				primary: '#fff',
				primaryBg: '#000'
			}
		}
 	}
</script>

<style lang="scss" scoped>
	.face--commands {
		display: table;
	//	flex-direction: row;
	//	font-size: .7em;

		>* {
			display:table-row;

			>* {
				display:table-cell;

			}
		}

		input {
			width: 20em;
		}
		small {
			width: 3em;
			display: inline-block;
			text-align: right;
			opacity: .6;
		}
	}

	svg * {
		transition: all .5s;
	}
	svg:hover * {
		fill: red;
	}


</style>