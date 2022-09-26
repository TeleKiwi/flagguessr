<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

<h1> v1.0-release_candidate_3</h1>
<h2> It fixes 1 bug. </h2>
<li> Fixed the back button on this screen not saying "back". </li>

<h1> v1.0-release_candidate_2</h1>
<h2> This is a *very* small update. </h2>
<li> You can now see what you got wrong after failing. </li>
<li> Added a back button to this screen. </li>
<li> Added more acceptable spellings, mostly for using & instead of "and".</li>

<h1> v1.0-release_candidate_1</h1>
<h2> Merry release candidate stage! The game is almost ready for release now. </h2>
<li> Frenzy mode is now temporarily unavaliable. It'll come back when I fix it. </li>
<li> Added the changelog. </li>
<li> Updated the text that used to always say "DEVELOPMENT VERSION". It'll now be
    the current version number.
</li>

<button on:click|preventDefault="{goBack}"> Back </button>