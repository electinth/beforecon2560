<script>
	import Nav from '../components/Nav.svelte'

	export let segment

  import Popup from '../components/Popup.svelte'

  let is_popup_shown = true
  let toggle_popup = () => {
    is_popup_shown = !is_popup_shown
  }
</script>

<style>
  :global(h1) {
    font-size: 2em;
    font-family: Kondolar Thai, serif;
    text-align: center;
  }
  :global(h2) {
    font-size: 1.2em;
    font-family: Kondolar Thai, serif;
    display: inline-block;
    background-color: var(--color0);
    color: black;
    border-radius: 1em;
    padding: 0.5em 1em;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    box-sizing: border-box;
  }
  :global(h2.left) {
    border-top-left-radius: 2px;
  }
  :global(h2.right) {
    border-top-right-radius: 2px;
  }

  /* :global(p.first:first-of-type:first-letter) {
    float: left;
    font-size: 3em;
    font-family: Kondolar Thai, serif;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    padding-left: 0.05em;
    padding-right: 0.15em;
  } */

  .sharer {
    width: 250px;
    margin: 20px auto;
  }

  :root {
    --color0: gainsboro;
    --color1: #C3F69D;
    --color2: #F1C9FF;
    --color3: #9FDDFF;
  }

  main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

  img.logo {
    width: 45px;
    height: 45px;
    margin: 1em auto 0;
  }
  p.subtitle {
    opacity: 0.5;
    font-size: 0.9em;
    margin-bottom: 0.5em;
  }
  p.title {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 0.2em;
  }
  .button {
    color: white;
    background-color: rgba(60, 231, 0, 1);
    border-radius: 5px;
    padding: 0.5em 0.75em;
    margin: 0.5em auto 1em;
    display: inline-block;
    cursor: pointer;
  }
  .button:hover {
    text-decoration: underline;
  }

  .link a {
    cursor: default;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
    font-family: Kondolar Thai, serif;
    color: white;
  }
  .link:hover :not([aria-current]) {
    cursor: pointer;
		text-decoration: underline;
  }
  .link a[aria-current] {
		text-decoration: underline;
	}
</style>

<!-- <elect-staging-banner></elect-staging-banner> -->

<Popup {is_popup_shown} on:click={toggle_popup}>
  <img class="logo" src="images/line_logo.png" alt="logo" />
  <p class="subtitle">
    คุณได้รับเชิญให้เข้าร่วมกลุ่ม
  </p>
  <p class="title">
    ก่อนจะเป็นรัฐธรรมนูญ 2560
  </p>
  <p>
    มีเหตุการณ์มากมายที่เกี่ยวข้องกับการเกิดขึ้นของรัฐธรรมนูญ 2560 ซึ่งได้ชื่อว่าเป็นรัฐธรรมนูญซึ่งวางเส้นทางการสืบทอดอำนาจให้กับ คสช. อย่างเป็นระบบ ทั้งจากฝั่งที่สนับสนุนและฝั่งที่ต่อต้าน
  </p>
  <p>
    ร่วมกันทำความรู้จักเหตุการณ์และผู้ที่เกี่ยวข้องกับรัฐธรรมนูญ 2560 ได้ที่นี่
  </p>
  <div class="button" on:click={toggle_popup}>เข้าร่วม</div>
</Popup>

<elect-navbar dark="True" showSlotInNewRowOnMobile="True">
  <div class="link"><a rel="prefetch" aria-current="{(segment === undefined || segment === 'member') ? 'page' : undefined}" href=".">Chat</a></div>
  <div class="link"><a rel="prefetch" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></div>
</elect-navbar>

{#if segment === undefined || segment === 'member'}
  <Nav {segment}/>
{/if}

{#if !is_popup_shown}
  <main>
    <slot></slot>
  </main>

  <div class="sharer">
    <elect-sharer></elect-sharer>
  </div>

  <elect-footer></elect-footer>
{/if}