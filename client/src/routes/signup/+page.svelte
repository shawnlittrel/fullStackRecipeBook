<script>
	import { goto } from "$app/navigation";
	import { token } from "../../stores";

  const url = "localhost:3001"
  let email = "";
  let username = "";
  let password = "";

  function updateUsername() {
    username = email;
  };
  
  async function formSubmitHandler() {
    const postData = {
      "email": email,
      "username": username,
      "password": password
    };

    //create the user
    const response = await fetch("http://localhost:3001/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    const data = await response.json();
    
    //set the token to the global store
    if (data.token) {
      token.update(t => t = data.token);
      console.log(token);
    }

    //redirect to dashboard
    goto('/addRecipe');

  };

</script>

<style>

</style>

<h1>Signup</h1>


<form class="grid grid-cols-12 gap-6">
  <div class="col-span-2">
  </div>
  <div class="col-span-2">
    <label for="email">Email:</label>
  </div>
  <div class="col-span-5">
    <input bind:value={email} on:change={updateUsername} id="email" />
  </div>
  <div class="col-span-3">
  </div>

  <div class="col-span-2">
  </div>
  <div class="col-span-2">
    <label for="username">Username:</label>
  </div>
  <div class="col-span-5">
    <input bind:value={username} id="username" />
  </div>
  <div class="col-span-3">
  </div>

  <div class="col-span-2">
  </div>
  <div class="col-span-2">
    <label for="password">Password:</label>
   </div>
  <div class="col-span-5">
    <input type="password" bind:value={password} id="password" />
  </div>
  <div class="col-span-3">
  </div>
</form>

<div class="text-center">
  <button on:click|preventDefault|once={formSubmitHandler}>Sign up!</button>
</div>










