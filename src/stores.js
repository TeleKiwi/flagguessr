import { writable } from "svelte/store";

export let status = writable("home");
export let highScore = writable(localStorage.getItem("highscore") ?? 0);