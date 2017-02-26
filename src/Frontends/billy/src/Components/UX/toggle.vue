<template>
	<div class="ux-toggle" :class="{opened: opened, closed: !opened}">
		<div @click="opened = !opened">
			<slot name="trigger">TOGGLE</slot>
		</div>
		<div>
			<slot name="content"><slot>CONTENT</slot></slot>
		</div>
	</div>
</template>
<script>
export default {
  name: 'ux-toggle',
  props: {
  	open: {
  		type: Boolean,
  		default: false
  	}
  },
  data: function() {
  	return { opened: false }
  },
  created: function() {
  	this.opened = this.open

  },
  watch: {
    open: function(val)  {
      console.log('toggle open watch')
      this.opened = val
    }
  }
}
</script>