<script>
  function runButton() {
    event?.preventDefault();
    console.log('button click');
  }
</script>

<div>
  Here's some additional content that was imported
  <button on:click={runButton}>Click Me</button>
</div>

<style>

</style>