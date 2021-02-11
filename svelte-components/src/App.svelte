<script>
  import { setContext } from 'svelte'
  import Greet from './components/Greet.svelte'
  import ComponentC from './components/ComponentC.svelte'

  const name = 'Vishwas'
  const channel = 'Codevolution'

  const obj = {
    name: 'Barry',
    heroName: 'Flash'
  }

  const userName = 'Vishwas'

  setContext('username-context', userName)
</script>

<main>
  <Greet name="Bruce" heroName="Batman" />
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder Woman" />
  <Greet {name} heroName={channel} />
  <Greet {...obj} />

  <h2>App component username - {userName}</h2>
  <ComponentC />
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
