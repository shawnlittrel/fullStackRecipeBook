<script>
	import { goto } from "$app/navigation";
	import { token } from "../../stores";
  const url = "http://localhost:3001"
  let title = "";
  let description = "";
  let directions = "";
  let notes = "";
  let image = "";
  let link = "";

  async function addRecipe() {
    const data = {
      title,
      description,
      directions,
      notes,
      image,
      link
    };

		if (!token) {
			await alert('You need to login first');
			goto('/login');
		} else {
			const response = await fetch(`${url}/api/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
				"Authentication": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    const postData = await response.json();
    console.log(postData);
		}



    // console.log('added')
    // console.log(`${url}/api/recipes`)
    // const title = document.querySelector("#recipeTitle")?.value;
    // const description = document.querySelector("#description")?.textContent;
    // const directions = document.querySelector("#directions")?.textContent;
    // const notes = document.querySelector("#notes")?.textContent;
    // const image = document.querySelector("#imageLink")?.value;
    // const link = document.querySelector("#recipeLink")?.value;


    // const response
  }
</script>

<h1 class="pageHeader">Add A Recipe Here</h1>

<div class="col-span-3" />
<form class="grid grid-cols-12 gap-6">
	<div class="col-span-2" />
	<div class="col-span-2"><label for="recipeTitle">Recipe Title: </label></div>
	<div class="col-span-5">
		<input bind:value={title} type="text" class="formInput" />
	</div>
	<div class="col-span-3" />

	<div class="col-span-2" />
	<div class="col-span-2"><label for="description">Description:</label></div>
	<div class="col-span-5">
		<textarea bind:value={description} id="description" class="formInput" />
	</div>
	<div class="col-span-3" />

	<div class="col-span-2" />
	<div class="col-span-2"><label for="directions">Directions:</label></div>
	<div class="col-span-5">
		<textarea bind:value={directions} id="directions" class="formInput" />
	</div>
	<div class="col-span-3" />

	<div class="col-span-2" />
	<div class="col-span-2"><label for="notes">Notes:</label></div>
	<div class="col-span-5">
		<textarea bind:value={notes} id="notes" class="formInput" />
	</div>
	<div class="col-span-3" />

	<div class="col-span-2" />
	<div class="col-span-2">
		<label for="imageLink">Upload image here: (under construction)</label>
	</div>
	<div class="col-span-5">
		<input type="text" bind:value={image} class="formInput" id="imageLink" />
	</div>
	<div class="col-span-3" />

	<div class="col-span-2" />
	<div class="col-span-2"><label for="recipeLink">Link to recipe:</label></div>
	<div class="col-span-5">
		<input type="text" bind:value={link} class="formInput" id="recipeLink" />
	</div>
	<div class="col-span-3" />

	<div class="col-span-12 text-center">
		<button on:click|preventDefault={addRecipe}>Submit</button>
	</div>
</form>
<div class="col-span-3" />

<style>
	label {
		display: block;
		text-align: right;
	}

	.formInput {
		border: 1px solid black;
		width: 100%;
	}

	.pageHeader {
		text-align: center;
		font-size: 24pt;
		color: red;
	}
</style>
