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
  
  :global(h1) {
    font-size: 3em;
    font-family: Kondolar Thai, serif;
    text-align: center;
  }

  :global(p.first:first-of-type:first-letter) {
    float: left;
    font-size: 3em;
    font-family: Kondolar Thai, serif;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    padding-left: 0.05em;
    padding-right: 0.15em;
  }

  .sharer {
    width: 250px;
    margin: 20px auto;
  }

  :root {
    --color1: #C3F69D;
    --color2: #F1C9FF;
    --color3: #9FDDFF;
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