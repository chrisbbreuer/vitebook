<script>
  export let ref = undefined;
  export let href = undefined;
  export let active = false;
  export let external = false;
</script>

{#if href}
  <a
    {href}
    {...$$restProps}
    class:active
    class:external
    on:pointerenter
    on:pointerdown
    on:pointerleave
    on:keydown
    bind:this={ref}
  >
    <slot />
  </a>
{:else}
  <button
    {...$$restProps}
    on:pointerenter
    on:pointerdown
    on:pointerleave
    on:keydown
    bind:this={ref}
  >
    <slot />
  </button>
{/if}

<style>
  a,
  button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--vbk--sidebar-item-padding);
    border: 0;
    font-size: var(--vbk--sidebar-item-font-size);
    margin-top: var(--vbk--sidebar-item-spacing);
    font-weight: var(--vbk--sidebar-item-font-weight);
    border-radius: var(--vbk--sidebar-item-border-radius);
    color: var(--vbk--sidebar-item-color);
    white-space: nowrap;
    text-decoration: none;
    background-color: var(--vbk--sidebar-item-bg-color);
    text-align: left;
    cursor: pointer;
    line-height: var(--vbk--sidebar-item-line-height);
  }

  a.active {
    color: var(--vbk--sidebar-item-active-color);
    background-color: var(--vbk--sidebar-item-active-bg-color);
  }

  @media (min-width: 992px) {
    a,
    button {
      color: var(--vbk--nav-item-color);
      background-color: var(--vbk--nav-item-bg-color);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      text-decoration: none;
    }

    a:hover,
    button:hover {
      color: var(--vbk--sidebar-item-hover-color);
      background-color: var(--vbk--sidebar-item-hover-bg-color);
    }
  }
</style>
