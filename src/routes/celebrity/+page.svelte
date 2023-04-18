<script>
  export let data;
  const {theJoke} = data;
  $: refresh = theJoke;

  import RefreshButton from '$lib/components/RefreshButton.svelte';
</script>

<h1>SICK Celebrity BURNS from Chuck Norris Himself</h1>
<p>{theJoke}</p>

<RefreshButton label="Generate New Joke" />

