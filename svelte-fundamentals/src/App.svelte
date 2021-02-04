<script>
  const name = 'Vishwas'
  const channel = '<b>Codevolution</b>'
  const hack = `<a href="#" onclick="alert('You have been hacked!')">Win a prize!<a/>`
  const id = 'heading'
  const disabled = false
  const status = 'danger'
  const promoted = true
  const num = 'Hi'
  const names = ['Bruce', 'Clark', 'Diana']
  const fullNames = [
    { first: 'Bruce', last: 'Wayne' },
    { first: 'Clark', last: 'Kent' },
    { first: 'Princess', last: 'Diana' }
  ]

  let count = 0

  function handleClick(event, stepSize) {
    console.log(event)
    count += stepSize
  }

  const formValues = {
    name: '',
    profileSummary: '',
    country: '',
    jobLocation: [],
    remoteWork: false,
    skillSet: [],
    yearsOfExperience: ''
  }
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

  {#each names as name, index (name)}
    <h2>{index + 1} {name}</h2>
  {/each}

  {#each fullNames as name, index (name.first)}
    <h2>{index + 1} {name.first} {name.last}</h2>
  {/each}

  <button on:click={e => handleClick(e, 5)}> Count {count} </button>
  <button on:click={e => handleClick(e, 10)}> Count {count} </button>

  <div>
    <pre>
      { JSON.stringify(formValues, null, 2) }
    </pre>
  </div>

  <form>
    <div>
      <label for="name">Name</label>
      <input type="number" id="name" bind:value={formValues.name} />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" bind:value={formValues.profileSummary} />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" bind:value={formValues.country}>
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job location</label>
      <select id="job-location" bind:value={formValues.jobLocation} multiple>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        bind:checked={formValues.remoteWork}
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        bind:group={formValues.skillSet}
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        bind:group={formValues.skillSet}
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        bind:group={formValues.skillSet}
      />
      <label for="javascript">JavaScript</label>
    </div>
    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="6-10">5-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="10+">10+</label>
    </div>
  </form>
</main>

<style>
  main {
    /* text-align: center; */
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

  input + label {
    display: inline-flex;
  }
</style>
