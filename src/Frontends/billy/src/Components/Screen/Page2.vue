<template>
	<main-content>
		<div slot="title">
			TITLE
		</div>
		{{ $theme }}
		<p>{{ msg }}</p>
		<p>{{ msg }}
		<br>{{ msg }}</p>
	</main-content>

</template>

<script>

import MainContent from '../Layout/content.vue'

export default {
  name: 'page2',
  data () {
    return {
      msg: 'PAGE2'
    }
  },
  theme: {
	test: 'tototest'
  },
  components: {
  	MainContent
  }
}
</script>