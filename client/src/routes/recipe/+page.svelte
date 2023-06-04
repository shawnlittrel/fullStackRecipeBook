<script>
	import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { url } from "../../stores";
  let recipe = {
    title: "",
    description: "",
    directions: "",
    notes: "",
    image: "",
    link: ""
  };
  let edit = false;
  let buttonText = "Edit this recipe"

  onMount(async () => {
    const id = $page.url.searchParams.get('id');
    console.log(id);
   
    const response = await fetch(`${url}recipes/${id}`);
    const data = await response.json();
    console.log(data);
    recipe = data;
  });

  function editRecipe() {
    edit = !edit
    console.log('edit is now ', edit);
    const textareas = document.getElementsByTagName('textarea');
    const inputs = document.getElementsByTagName('input');
    const allInputs = [...textareas, ...inputs];

    buttonText = edit ? "Cancel" : "Edit this recipe";

      allInputs.forEach((input) => {
        if (edit) {
          input.removeAttribute("readonly");
        } else {
          input.setAttribute("readonly", 'true');
        }
    });
  }

</script>

<h1>
{recipe.title}
</h1>

<div class="grid grid-cols-12 gap-6">
  <div class="col-span-7" />
  <div class="col-span-5">
    <button id="editButton" on:click|preventDefault={editRecipe}>{buttonText}</button>
  </div>

  {#if edit}
  <div class="col-span-2" />
  <div class="col-span-2">
    New title:
  </div>
  <div class="col-span-6">
    <input bind:value={recipe.title} />
  </div>
  <div class="col-span-2" />
  {/if}

  <div class="col-span-2" />
  <div class="col-span-2">
    Description:
  </div>
  <div class="col-span-6">
    <textarea bind:textContent={recipe.description} id="description" contenteditable="true" readonly></textarea>
  </div>
  <div class="col-span-2" />

  <div class="col-span-2" />
  <div class="col-span-2">
    Directions:
  </div>
  <div class="col-span-6">
    <textarea bind:textContent={recipe.directions} id="directions" contenteditable="true" readonly></textarea>
  </div>
  <div class="col-span-2" />

  <div class="col-span-2" />
  <div class="col-span-2">
    Notes:
  </div>
  <div class="col-span-6">
    <textarea bind:textContent={recipe.notes} id="notes" contenteditable="true" readonly></textarea>
  </div>
  <div class="col-span-2" />

  <div class="col-span-2" />
  <div class="col-span-2">
    Image:
  </div>
  <div class="col-span-6">
    <input bind:value={recipe.image} id="image" contenteditable="true" readonly />
  </div>
  <div class="col-span-2" />

  <div class="col-span-2" />
  <div class="col-span-2">
    Link to recipe:
  </div>
  <div class="col-span-6">
    <input bind:value={recipe.link} id="link" contenteditable="true" readonly />
  </div>
  <div class="col-span-2" />
</div>