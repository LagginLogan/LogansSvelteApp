<script>
  export let data;
  const {theJoke} = data;
  $: refresh = theJoke;

  import RefreshButton from '$lib/components/RefreshButton.svelte';
</script>

<h1>Epic Animal-Themed Chuck Norris Jokes that will make you absolutely soil your jeans in terror and laughter</h1>
<p>{theJoke}</p>


<RefreshButton label="Generate New Joke" />
