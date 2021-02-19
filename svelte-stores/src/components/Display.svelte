<script>
  //   import { onDestroy } from 'svelte'
  import { count, customCount } from '../stores/stores'

  //   let counter

  //   const unsubscribe = count.subscribe(value => {
  //     counter = value
  //   })

  //   onDestroy(unsubscribe)
</script>

<h2>The custom count is {$customCount}</h2>

<button on:click={() => customCount.increment()}>Increment</button>
<button on:click={() => customCount.increment(5)}>Increment 5</button>
<button on:click={() => customCount.decrement()}>Decrement</button>
<button on:click={() => customCount.decrement(5)}>Decrement 5</button>
<button on:click={customCount.reset}>Reset</button>

<hr />
<h2>Current count is {$count}</h2>
