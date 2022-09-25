<script>
    import Error from "./lib/Error.svelte";
    import Frenzy from "./lib/Frenzy.svelte";
    import Game from "./lib/Game.svelte";
    import Home from "./lib/Home.svelte";
    import Warn from "./lib/Warn.svelte";
    import { frenzyHighScore, highScore, status } from "./stores"

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

    #frenzyh {
        color: red;
    }

</style>

<h2> 25/09/22 - frenzy mode is bugged. trying to fix it will make my brain explode.</h2>
{#if $status == "home"}
<Home></Home>
{:else if $status == "play"}
<Game></Game>
{:else if $status == "frenzy"}
<Frenzy></Frenzy>
{:else if $status == "warn"}
<Warn></Warn>
{:else}
<Error></Error>
{/if}

{#if $highScore > 0 && $status == "home"}
<h2> High score: {$highScore} </h2>
{/if}
{#if $highScore > 0 && $status == "home"}
<h2 id="frenzyh"> Frenzy high score: {$frenzyHighScore} </h2>
{/if}


<h2 id="betatag"> DEVELOPMENT VERSION </h2>