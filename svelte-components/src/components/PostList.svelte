<script>
  import { onMount } from 'svelte'

  let posts = []

  onMount(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    posts = await response.json()
    console.log(posts)
  })
</script>

{#each posts as post (post.id)}
  <h3>{post.id}. {post.title}</h3>
  <p>{post.body}</p>
  <hr />
{:else}
  <!-- this block renders when photos.length === 0 -->
  <p>loading...</p>
{/each}
