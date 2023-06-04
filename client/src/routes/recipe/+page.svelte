<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { url } from '../../stores';
	let recipe = {
		title: '',
		description: '',
		directions: '',
		notes: '',
		image: '',
		link: ''
	};

	let edit = false;
	let buttonText = 'Edit this recipe';
	let recipeId = '';

	onMount(async () => {
		recipeId = $page.url.searchParams.get('id');
		const response = await fetch(`${url}recipes/${recipeId}`);
		const data = await response.json();
		recipe = data;
	});

	function editRecipe() {
		const textareas = document.getElementsByTagName('textarea');
		const inputs = document.getElementsByTagName('input');
		const allInputs = [...textareas, ...inputs];

		edit = !edit;
		buttonText = edit ? 'Cancel' : 'Edit this recipe';

		allInputs.forEach((input) => {
			if (edit) {
				input.removeAttribute('readonly');
			} else {
				input.setAttribute('readonly', 'true');
			}
		});
	}

	async function saveRecipe() {
		console.log('info to post', recipe);
		const response = await fetch(`${url}recipes/${recipeId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(recipe)
		});

		const data = await response.json();
		console.log('response', data);
		if (response.ok) {
			edit = false;
      buttonText = 'Edit this recipe';

			const textareas = document.getElementsByTagName('textarea');
			const inputs = document.getElementsByTagName('input');
			const allInputs = [...textareas, ...inputs];
			allInputs.forEach((input) => input.setAttribute('readonly', 'true'));
		}
	};

</script>

<h1 class="text-center">
	{recipe.title}
</h1>

<div class="grid grid-cols-12 gap-6">
	<div class="col-span-7" />
	<div class="col-span-5">
		<button id="editButton" on:click|preventDefault={editRecipe}>{buttonText}</button>
	</div>

	{#if edit}
		<div class="col-span-2" />
		<div class="col-span-2">New title:</div>
		<div class="col-span-6">
			<input bind:value={recipe.title} />
		</div>
		<div class="col-span-2" />
	{/if}

	<div class="col-span-2" />
	<div class="col-span-2">Description:</div>
	<div class="col-span-6">
		<textarea bind:value={recipe.description} id="description" contenteditable="true" readonly />
	</div>
	<div class="col-span-2" />

	<div class="col-span-2" />
	<div class="col-span-2">Directions:</div>
	<div class="col-span-6">
		<textarea bind:value={recipe.directions} id="directions" contenteditable="true" readonly />
	</div>
	<div class="col-span-2" />

	<div class="col-span-2" />
	<div class="col-span-2">Notes:</div>
	<div class="col-span-6">
		<textarea bind:value={recipe.notes} id="notes" contenteditable="true" readonly />
	</div>
  <div class="col-span-2" />

	<div class="col-span-2" />
	<div class="col-span-2">Image:</div>
	<div class="col-span-6">
		<input bind:value={recipe.image} id="image" readonly />
	</div>
	<div class="col-span-2" />

	<div class="col-span-2" />
	<div class="col-span-2">Link to recipe:</div>
	<div class="col-span-6">
		<input bind:value={recipe.link} id="link" readonly />
	</div>
	<div class="col-span-2" />

	{#if edit}
		<div class="col-span-12 text-center">
			<button on:click|preventDefault={saveRecipe}>Save</button>
		</div>
	{/if}
</div>

<style>
	textarea {
		width: 100%;
	}
</style>
