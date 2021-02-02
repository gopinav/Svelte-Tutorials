<script>
  const name = 'Vishwas'
  const channel = '<b>Codevolution</b>'
  const hack = `<a href="#" onclick="alert('You have been hacked!')">Win a prize!<a/>`
  const id = 'heading'
  const disabled = false
  const status = 'danger'
  const promoted = true
  const num = 'Hi'
</script>

<main>
  <h1>Hello {name}</h1>

  <div>{@html channel}</div>
  <div>{@html hack}</div>

  <h2 {id}>This is a heading</h2>
  <button {disabled}>Bind</button>

  <h2 class="underline">Underlined Text</h2>
  <h2 class={status}>Status</h2>
  <h2 class={promoted ? 'promoted' : ''}>Movie Title</h2>
  <h2 class:promoted>Movie Title</h2>

  {#if num === 0}
    <h2>The number is zero</h2>
  {:else if num < 0}
    <h2>The number is negative</h2>
  {:else if num > 0}
    <h2>The number is positive</h2>
  {:else}
    <h2>Not a number</h2>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .underline {
    text-decoration: underline;
  }

  .danger {
    color: red;
  }

  .success {
    color: olivedrab;
  }

  .promoted {
    font-style: italic;
  }
</style>
