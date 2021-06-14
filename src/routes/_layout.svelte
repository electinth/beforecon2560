<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

  .sharer {
    width: 250px;
    margin: 20px auto;
  }
</style>

<elect-staging-banner></elect-staging-banner>

<elect-navbar title-text="ก่อนจะเป็นรัฐธรรมนูญ 2560"></elect-navbar>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<div class="sharer">
  <elect-sharer></elect-sharer>
</div>

<elect-footer></elect-footer>