<template>
	<div class="hello">
		<button @click="get()">get</button>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				num: '13317641134',
			}
		},
		methods: {
			get() {
				this.$http.get('https://818ps.com/site-api/send-tel-login-code?num=' + this.num).then(res => {
					this.tableData = res.data;
				})

			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
