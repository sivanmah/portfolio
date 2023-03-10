<script>
  export let navbar;

  function handleToggleNavBar() {
    onToggleNavbar = false;
  }
</script>
{#if !navbar}
<button on:click={handleToggleNavBar} class="flex lg:hidden">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>
{/if}
{#if navbar}
<button on:click={toggleNavBar} class="flex lg:hidden">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>
{/if}
