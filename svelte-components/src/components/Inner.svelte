<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function greet() {
    dispatch('greet', 'Hello')
  }
</script>

<button on:click={greet}>Greet</button>
