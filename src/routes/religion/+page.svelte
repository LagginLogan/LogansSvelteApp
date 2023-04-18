<script>
  export let data;
  const {theJoke} = data;
  $: refresh = theJoke;

  import RefreshButton from '$lib/components/RefreshButton.svelte';
</script>

<h1>Insightful Chuck Norris Insights on Religion</h1>
<p>{theJoke}</p>

<RefreshButton label="Generate New Joke" />
