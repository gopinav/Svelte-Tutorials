<script>
  import { onMount } from 'svelte'
  let inputRef

  onMount(() => {
    inputRef.focus()
  })
</script>

<input type="text" bind:this={inputRef} />
