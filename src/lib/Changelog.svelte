<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

<h1> v1.1 </h1>
<h2> The Points Update! </h2>
<li> No changes from v1.1-rc3. </li>
<h2> Changes from v1.0.4: </h2>
<li>  added in the points system </li>
<li>     you gain more/less points depending on how obscure the country is </li>
<li>     there are also point multipliers; it increases every 4 flags in a row you guess correctly </li>
<li> purged frenzy mode from the files </li>
<li> downscaled Belgium's flag </li>
<li> "The Maldives" is now a valid answer for The Maldives </li>
<li> cleaned up codebase </li>
<li> fixed Nepal's flag being large & non-transparant </li>
<li> new logo </li>
<li> removed flavor text </li>

<button on:click|preventDefault="{goBack}"> Back </button>