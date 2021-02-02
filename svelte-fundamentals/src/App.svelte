<script>
  const name = 'Vishwas'
  const channel = '<b>Codevolution</b>'
  const hack = `<a href="#" onclick="alert('You have been hacked!')">Win a prize!<a/>`
  const id = 'heading'
  const disabled = false
</script>

<main>
  <h1>Hello {name}</h1>

  <div>{@html channel}</div>
  <div>{@html hack}</div>

  <h2 {id}>This is a heading</h2>
  <button {disabled}>Bind</button>
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
</style>
