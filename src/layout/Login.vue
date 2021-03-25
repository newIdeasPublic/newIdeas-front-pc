<template>
	<div class="container">
		<Header></Header>
		<router-view/>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  components: {
    Footer,
		Header
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
	// display: flex;
	// flex-direction: column;
	// height: 100vh;
	// justify-content: space-between;
}
</style>
