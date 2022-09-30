<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

<h1> v1.1-rc3 </h1>
<li> fixed Belgium being the only flag </li>
<li> fixed multipliers not working </li>
<li> lowered the streak threshold from 5 to 4 </li>
<li> fixed the point bonus display not taking the multiplier into account </li>

<h1> v1.1-rc2 </h1>
<li> purged frenzy mode from the files </li>
<li> downscaled Belgium's flag </li>

<h1> v1.1-rc1 </h1>
<h2> Almost ready! </h2>
<li> new logo </li>
<li> cleaned up codebase </li>
<li> fixed Nepal's flag being large & non-transparant </li>

<h1> v1.1-dev4 </h1>
<li> added a point multiplier </li>
<li>     every 5 correct guesses, your multiplier increases by 1 </li>
<li> fixed the point text displaying when idk is pressed </li>
<li> "The Maldives" is now a valid answer for The Maldives</li>

<h1> v1.1-dev3 </h1>
<li> fixed points being implemented completely incorrectly </li>
<li> added a visual indicator of how many points you have gained per answer </li>
<li> actually fixed the bug from dev-2 </li>

<h1> v1.1-dev2 </h1>
<li> fixed you gaining points when you press "idk" on flag 1 </li>

<h1> v1.1-dev1 </h1>
<h2> The first of many. </h2>
<li>  added in the points system </li>
<li>     you gain more/less points depending on how obscure the country is </li>
<li>     currently points are a bit pointless, but i'll probs add functionality soong </li>
<li>  removed "high scores will be phased out in v1.1" flavor text</li>
<button on:click|preventDefault="{goBack}"> Back </button>