<script>
  import { getContext } from 'svelte'

  const userName = getContext('username-context')
</script>

<h2>Child F Component</h2>
<h2>Child F userName - {userName}</h2>
