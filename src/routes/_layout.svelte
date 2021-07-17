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
    font-size: 1.5em;
    font-family: Kondolar Thai, serif;
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

  p.title {
    opacity: 0.5;
    font-size: 0.8em;
    padding-top: 0;
  }
  .button {
    background-color: var(--color1);
    border-radius: 5px;
    padding: 0.5em;
    display: inline-block;
    cursor: pointer;
  }
</style>

<!-- <elect-staging-banner></elect-staging-banner> -->

<Popup {is_popup_shown} on:click={toggle_popup}>
  <p class="title">
    คุณได้รับเชิญให้เข้าร่วมกลุ่ม ก่อนจะเป็นรัฐธรรมนูญ 2560
  </p>
  <p>
    มีเหตุการณ์มากมายที่เกี่ยวข้องกับการเกิดขึ้นของรัฐธรรมนูญ 2560 ซึ่งได้ชื่อว่าเป็นรัฐธรรมนูญซึ่งวางเส้นทางการสืบทอดอำนาจให้กับ คสช. อย่างเป็นระบบ ทั้งจากฝั่งสนับสนุนให้เกิดรัฐธรรมนูญ 2560 และฝั่งที่ต่อต้านไม่ให้เกิดรัฐธรรมนูญ 2560 โดยแต่ละฝั่งก็มีบุคคล กลุ่มบุคคล และองค์กรที่เข้ามาเกี่ยวข้องจำนวนมาก ทั้งที่มาจากภาครัฐ ภาคการเมือง และภาคประชาชน
  </p>
  <p>
    ร่วมกันทำความรู้จักเหตุการณ์และผู้ที่เกี่ยวข้องกับรัฐธรรมนูญ 2560 ได้ที่นี่
  </p>
  <div class="button" on:click={toggle_popup}>JOIN CHAT</div>
</Popup>

<elect-navbar dark="True" showSlotInNewRowOnMobile="True">
</elect-navbar>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<div class="sharer">
  <elect-sharer></elect-sharer>
</div>

<elect-footer></elect-footer>