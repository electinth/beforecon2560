<script>
  export let is_popup_shown = true
</script>

<style>
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.5);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup {
    padding: 1em;
    border-radius: 1em;
    max-width: 500px;
    margin: 0 30px;
    text-align: center;
    background: white;
    box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.25);
  }
</style>

{#if is_popup_shown}
  <div class="background" on:click|self>
    <div class="popup">
      <slot></slot>
    </div>
  </div>
{/if}