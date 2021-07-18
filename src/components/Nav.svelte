<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(0,0,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	.links {
		margin: 0 auto;
		padding: 0;
    text-align: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: 56em;

    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  .links::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

	.link {
		display: inline-block;
    white-space: normal;
	}
  a {
    cursor: default;
    text-decoration: none;
		padding: 1em 0.5em;
		display: block;
    font-size: 0.8em;
    opacity: 0.5;
  }
  .link:hover :not([aria-current]) {
    cursor: pointer;
		text-decoration: underline;
  }
  [aria-current] {
		font-size: 1em;
    opacity: 1;
	}
  .link:nth-of-type(1) :not([aria-current])::before {
    content: '< ';
  }
  .link:nth-of-type(2) :not([aria-current])::after {
    content: ' >';
  }
	/* [aria-current] {
		position: relative;
		display: inline-block;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: black;
		display: block;
		bottom: -1px;
	} */
</style>

<nav>
	<div class="links">
		<div class="link"><a rel="prefetch" aria-current="{segment === undefined ? 'page' : undefined}" href=".">ก่อนจะเป็นรัฐธรรมนูญ 2560</a></div>
    <div class="link"><a rel="prefetch" aria-current="{segment === 'member' ? 'page' : undefined}" href="member">ดูสมาชิก (13)</a></div>
	</div>
</nav>
