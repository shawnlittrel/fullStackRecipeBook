<script>
  import { onMount } from 'svelte';


  const url = `http://localhost:3001/api/`;
  let recipes = [];
  let page = 1;

  function prevRecipes() {
    page++;
    getRecipes(10, page);
  };

  function nextRecipes() {
    page--;
    getRecipes(10, page);
  };

  async function getRecipes(pageSize, page) {
    const response = await fetch(`${url}recipes?pageSize=${pageSize}&page=${page}`);

    const data = await response.json();
    console.log(data);

    recipes = data;
  };

  
  //only fetch when dom is loaded
  onMount(() => {
    getRecipes(10, page);
  })
  //lets start by loading 10 recipes and paginate the results
  
</script>

<style>

</style>

<h1 class="text-center">All Recipes</h1>

<div id="recipeContainer">
  <ul>
    {#each recipes as recipe}
      <li><a href="/recipe?id={recipe._id}">{recipe.title}</a></li>
    {/each}
  </ul>
</div>

<div class="grid grid-cols-12 gap-6">
  <div class="col-span-6 text-right" on:click={prevRecipes}> &larr; Previous </div>
  <div class="col-span-6" on:click={nextRecipes}>Next &rarr;</div>
</div>


<!-- 0: Object { _id: "6476b435fce73b2e34343833", title: "Updated Test Recipe v3", description: "Tastier test recipe v3", … }
​​
__v: 0
​​
_id: "6476b435fce73b2e34343833"
​​
description: "Tastier test recipe v3"
​​
directions: "1. Test the recipe \n2.Update the recipe"
​​
image: null
​​
link: null
​​
notes: null
​​
title: "Updated Test Recipe v3" -->