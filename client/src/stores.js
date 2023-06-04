import { readable, writable } from "svelte/store";

export const token = writable();
export const url = 'http://localhost:3001/api/';