<script>
    import Changelog from "./lib/Changelog.svelte";
    import Error from "./lib/Error.svelte";
    import Game from "./lib/Game.svelte";
    import Home from "./lib/Home.svelte";
    import { highScore, lastCorrectAnswer, status, points } from "./stores"

    if(localStorage.getItem("points") == null) { localStorage.setItem("points", "0"); }
    status.set("home");
</script>
<style>
    #betatag {
        font-weight: 700;
        position: fixed;
        bottom: 0;
        left: 0;
        margin-left: 40px;
        margin-bottom: 40px;
    }

</style>


{#if $status == "home"}
<h2>{$lastCorrectAnswer}</h2>
<Home></Home>
{:else if $status == "play"}
<Game></Game>
{:else if $status == "changelog"}
<Changelog></Changelog>
{:else}
<Error></Error>
{/if}



{#if $highScore > 0 && $status == "home"}
<h2> High score: {$highScore} </h2>
{/if}

{#if $status == "home"}
<h2> Points: {$points}</h2>
{/if}



<h2 id="betatag"> v1.1-rc3 </h2>