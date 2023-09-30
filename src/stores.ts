import { writable } from "svelte/store";

export let status = writable<string>("home");
export let highScore = writable<number>(Number.parseInt(localStorage.getItem("highscore")) ?? 0);
export let lastCorrectAnswer = writable<string>("")