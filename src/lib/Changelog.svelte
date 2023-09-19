<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

<h1> v1.0.5 </h1>
<li> Flagguessr is so back! We've reverted to the much more stable v1.0. </li>

<h1> v1.0.4 </h1>
<li> The version number now sticks to the bottom left. </li>

<h1> v1.0.3 </h1>
<li> Fixed buttons having black text in dark mode. </li>
<li> You now see the previous correct answer with the IDK button. </li>

<h1> v1.0.2 </h1>
<h2> "I'm blinded by the lights!" - The Weeknd</h2>
<li> Light mode is no longer forced if your desktop colour scheme is light mode. </li>

<h1> v1.0.1-hotfix </h1>
<li> Fixed the Swiss flag being the only flag. </li>

<h1> v1.0.1 </h1>
<h2> No scrolling needed! </h2>
<li> The Swiss flag has been downscaled. </li>

<h1> v1.0 </h1>
<h2> Welcome to Flagguessr! </h2>
<li> No changes from v1.0-release_candidate_3 </li>
<li> Changes from v0.0; added in core gameplay. </li>
<button on:click|preventDefault="{goBack}"> Back </button>