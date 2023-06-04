<script>
	import { goto } from "$app/navigation";
  import { token } from "../../stores";
  const url = "http://localhost:3001/api"
  let email = "";
  let password = "";
  let tokenValue= "";
  token.subscribe(value => tokenValue = value);

  async function login() {
    let username = email;

    const emailObj = {
      email,
      password
    };

    const usernameObj = {
      username,
      password
    };

    const response = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email.includes("@") ? emailObj : usernameObj)
    });

    const data = await response.json();
    console.log(data);
    token.update(t => t = data.token);
    console.log('token', tokenValue);

    if (response.ok) {
      goto("/addRecipe")
    } else {
      console.log('login failed');
      //TODO: add modal for login fail status
    }

  }
</script>

<style>

</style>

<h1>Login</h1>

<form class="grid grid-cols-12 gap-6">
  <div class="col-span-2" />
  <div class="col-span-2">
    <label for="email">Email/Username:</label>
  </div>
  <div class="col-span-5">
    <input type="text" bind:value={email} required />
  </div>
  <div class="col-span-3" />
  <div class="col-span-2" />
  <div class="col-span-2">
    <label for="password">Password:</label>
  </div>
  <div class="col-span-5">
    <input type="password" bind:value={password} required />
  </div>
  <div class="col-span-3" />

  <div class="col-span-12 text-center">
    <button on:click|preventDefault={login}>Login!</button>
  </div>
</form>