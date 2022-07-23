<template>
	<h1>Pokemon <span>#{{ id }}</span></h1>
	<div v-if="pokemon">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name">
	</div>

</template>

<script>
export default {

	props: {
		id:{
			type: Number,
			required: true,
		}
	},
	data() {
		return{
			pokemon: null
		}

	},

	created() {
		this.getPokemon()
	},

	methods: {
		async getPokemon() {
			try {
				this.pokemon = await fetch( `https://pokeapi.co/api/v2/pokemon/${ this.id }` ).then( r => r.json() )
				// console.log(this.pokemon)
			} catch ( e ) {
				this.$router.push('/')
			}
			// console.log(this.pokemon)
		},
	},

	watch: {
		id() {
			this.getPokemon()
		},
	}
}
</script>

<style scoped>

</style>