<script>
  import { setContext } from 'svelte'
  import Greet from './components/Greet.svelte'
  import ComponentC from './components/ComponentC.svelte'
  import Popup from './components/Popup.svelte'
  import Outer from './components/Outer.svelte'
  import Button from './components/Button.svelte'
  import Card from './components/Card.svelte'
  import NameList from './components/NameList.svelte'
  import ChildStyles from './components/ChildStyles.svelte'
  import PostList from './components/PostList.svelte'
  import AutoFocus from './components/AutoFocus.svelte'
  import TabA from './components/TabA.svelte'
  import TabB from './components/TabB.svelte'
  import TabC from './components/TabC.svelte'
  import Counter, { getTotalCount } from './components/Counter.svelte'

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

  let activeTab = TabA
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

  <!-- <Card>Card Content</Card>
  <Card><h2>Card Content</h2></Card>
  <Card><img src="https://picsum.photos/200" alt /></Card>
  <Card /> -->

  <Card>
    <div slot="header">
      <h3>Header</h3>
    </div>
    <div slot="content">
      <img src="https://picsum.photos/200" alt />
    </div>
    <div slot="footer">
      <button>View Details</button>
    </div>
  </Card>

  <NameList>
    <h3 slot="hero" let:firstName let:lastName>{firstName} {lastName}</h3>
  </NameList>

  <NameList>
    <h3 slot="hero" let:firstName let:lastName>{lastName} {firstName}</h3>
  </NameList>

  <NameList>
    <h3 slot="hero" let:lastName>{lastName}</h3>
  </NameList>

  <h4>App Component Text</h4>
  <ChildStyles />

  <h3>App component global style</h3>

  <!-- <PostList /> -->

  <AutoFocus />

  <div>
    <button on:click={() => (activeTab = TabA)}>Tab A</button>
    <button on:click={() => (activeTab = TabB)}>Tab B</button>
    <button on:click={() => (activeTab = TabC)}>Tab C</button>
  </div>
  <!-- {#if activeTab === 'TabA'}
    <TabA />
  {/if}
  {#if activeTab === 'TabB'}
    <TabB />
  {/if}
  {#if activeTab === 'TabC'}
    <TabC />
  {/if} -->

  <svelte:component this={activeTab} />

  <button on:click={() => alert(getTotalCount())}>Alert total count</button>
  <Counter />
  <Counter />
  <Counter />
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

  h4 {
    color: orange;
  }
</style>
