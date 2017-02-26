<template>
	<section class="content">
		<div class="content--title">
			<slot name="title"></slot>
		</div>
		<div class="content--body">
			<slot></slot>
		</div>
	</section>
</template>

<script >
	
	export default {
		
	}
</script>

<style lang="scss">
	.content {
	  	background-image: radial-gradient(
			ellipse at center,
		    rgba(yellowgreen, .3) 0%,
		    rgba(yellowgreen, .1) 40%,
		    rgba(black, 0) 30%,
		    rgba(black, 0) 100%); 
		background-size: .5em .5em;
		//background-position:  .25em .25em;
		background-attachment: fixed;
		
	}
	.content--title {
		font-size: 2em;
		margin: .5em 0;
		padding: .25em;
	  	background-image: radial-gradient(
			ellipse at center,
		    rgba(yellowgreen, .3) 0%,
		    rgba(yellowgreen, .1) 40%,
		    rgba(black, 0) 30%,
		    rgba(black, 0) 100%); 
		background-size: .25em .25em;
		//background-position:  .125em .125em;
		background-attachment: fixed;
	}

	.content--body {
		padding: .5em;
	}

</style>