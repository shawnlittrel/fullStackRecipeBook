<script>
  const url = `http://localhost:3001/api/`;
  let recipes = [];

  async function getRecipes(pageSize, page) {
    const response = await fetch(`${url}recipes?pageSize=${pageSize}&page=${page}`);
    const data = await response.json();
    console.log(data);

    recipes = data;
  };

  //lets start by loading 10 recipes and paginate the results
  getRecipes(10, 1);
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