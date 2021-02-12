<script>
  import { compute_slots } from 'svelte/internal'
</script>

<div class="card">
  <div id="card-header">
    <slot name="header" />
  </div>
  <div id="card-content">
    <slot name="content">Default Content</slot>
  </div>
  {#if $$slots.footer}
    <hr />
    <div id="card-footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
