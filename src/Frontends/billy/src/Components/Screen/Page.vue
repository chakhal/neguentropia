<template>
	<div>{{ msg }}
		<router-link to="page2">page2</router-link>

	</div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      msg: 'PAGE'
    }
  }
}
</script>