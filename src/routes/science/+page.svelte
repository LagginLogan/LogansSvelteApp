<script>
  export let data;
  const {theJoke} = data;
  $: refresh = theJoke;

  import RefreshButton from '$lib/components/RefreshButton.svelte';
</script>

<h1>Chuck Norris - The Inventor of Science - Has Epic Science Jokes</h1>
<p>{theJoke}</p>

<RefreshButton label="Generate New Joke" />
