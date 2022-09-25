<script>
    import Error from "./lib/Error.svelte";
    import Game from "./lib/Game.svelte";
    import Home from "./lib/Home.svelte";
    import { highScore, status } from "./stores"

    status.set("home");
</script>
<style>
    #betatag {
        font-weight: 700;
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: 40px;
        margin-bottom: 40px;
    }

</style>

{#if $status == "home"}
<Home></Home>
{:else if $status == "play"}
<Game></Game>
{:else}
<Error></Error>
{/if}

{#if $highScore > 0 && $status == "home"}
<h2> High score: {$highScore} </h2>
{/if}


<h2 id="betatag"> DEVELOPMENT VERSION </h2>