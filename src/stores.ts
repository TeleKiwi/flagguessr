import { Writable, writable } from "svelte/store";

export let status = writable("home");
export let highScore = writable(localStorage.getItem("highscore") ?? 0);
export let points: Writable<number> = writable(Number.parseInt(localStorage.getItem("points")));
export let lastCorrectAnswer = writable("")