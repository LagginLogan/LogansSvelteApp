<script>
    export let label = 'Refresh';
  
    function handleClick() {
      location.reload();
    }
  </script>
  
  <button on:click={handleClick}>{label}</button>
  