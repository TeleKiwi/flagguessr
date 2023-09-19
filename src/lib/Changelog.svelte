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

<button on:click|preventDefault="{goBack}"> Back </button>