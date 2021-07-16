<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(0,0,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	.ul {
		margin: 0;
		padding: 0;
    text-align: center;
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  .ul::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

	.li {
		display: inline-block;
    white-space: normal;
	}

	[aria-current] {
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
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<div class="ul">
		<div class="li"><a rel="prefetch" aria-current="{segment === undefined ? 'page' : undefined}" href=".">ก่อนจะเป็นรัฐธรรมนูญ 2560</a></div>
    <div class="li"><a rel="prefetch" aria-current="{segment === 'article' ? 'page' : undefined}" href="article">ดูสมาชิก (13)</a></div>
		<div class="li"><a rel="prefetch" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">เกี่ยวกับโครงการ</a></div>
	</div>
</nav>
