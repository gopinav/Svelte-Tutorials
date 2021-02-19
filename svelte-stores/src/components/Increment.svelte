<script>
  import { count } from '../stores/stores'

  function increment() {
    count.update(value => {
      return value + 1
    })
  }
</script>

<button on:click={increment}>Increment</button>
