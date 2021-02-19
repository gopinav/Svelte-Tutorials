<script>
  //   import { onDestroy } from 'svelte'
  import { count } from '../stores/stores'

  //   let counter

  //   const unsubscribe = count.subscribe(value => {
  //     counter = value
  //   })

  //   onDestroy(unsubscribe)
</script>

<h2>Current count is {$count}</h2>
