<script>
  const names = [
    {
      firstName: 'Bruce',
      lastName: 'Wayne'
    },
    {
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      firstName: 'Princess',
      lastName: 'Diana'
    }
  ]
</script>

{#each names as name (name)}
  <slot name="hero" firstName={name.firstName} lastName={name.lastName} />
{/each}
