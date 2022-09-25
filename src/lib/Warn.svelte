<script>
    import { status } from "../stores";

    function bringItOn() {
        status.set("frenzy");
    }

    function goBack() {
        status.set("home");
    }
</script>

<style> 
    #imready {
        background-color: red;
        font-weight: 700;
        color: white;
    }
</style>

<h1> WARNING! </h1>
<h3> Frenzy mode is *way* harder than Classic Mode. </h3>
<h3> Here are the differences; </h3>
<li> NO IDK/Hint button </li>
<li> 10 second timer </li>
<h3> If you're up to the challenge, be my guest. Otherwise..</h3>
<h1> You should probably turn back. </h1>

<button on:click|preventDefault="{bringItOn}" id="imready"> BRING IT ON! </button>
<button on:click|preventDefault="{goBack}"> Go back to safety </button>

