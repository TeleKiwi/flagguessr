<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

<h1> v1.0.1 </h1>
<h2> No scrolling needed! </h2>
<li> The Swiss flag has been downscaled. </li>

<h1> v1.0 </h1>
<h2> Welcome to Flagguessr! </h2>
<li> No changes from v1.0-release_candidate_3 </li>
<li> Changes from v0.0.0; added in core gameplay. </li>
<button on:click|preventDefault="{goBack}"> Back </button>