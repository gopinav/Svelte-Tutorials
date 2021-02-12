<script>
  import { setContext } from 'svelte'
  import Greet from './components/Greet.svelte'
  import ComponentC from './components/ComponentC.svelte'
  import Popup from './components/Popup.svelte'
  import Outer from './components/Outer.svelte'
  import Button from './components/Button.svelte'

  const name = 'Vishwas'
  const channel = 'Codevolution'

  const obj = {
    name: 'Barry',
    heroName: 'Flash'
  }

  const userName = 'Vishwas'
  setContext('username-context', userName)

  let showPopup = false

  function closePopup(event) {
    showPopup = false
    console.log(event.detail)
  }

  function handleGreet(event) {
    alert(event.detail)
  }
</script>

<main>
  <Greet name="Bruce" heroName="Batman" />
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder Woman" />
  <Greet {name} heroName={channel} />
  <Greet {...obj} />

  <h2>App component username - {userName}</h2>
  <ComponentC />

  <button on:click={() => (showPopup = true)}>Show Popup</button>
  {#if showPopup}
    <Popup on:close={closePopup} />
  {/if}

  <Outer on:greet={handleGreet} />
  <Button on:click={() => alert('Clicked')}>Click</Button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
