<script>
    import Changelog from "./lib/Changelog.svelte";
import Error from "./lib/Error.svelte";
    import Game from "./lib/Game.svelte";
    import Home from "./lib/Home.svelte";
    import Warn from "./lib/Warn.svelte";
    import { frenzyHighScore, highScore, lastCorrectAnswer, status } from "./stores"

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

    /* #frenzyh {
        color: red;
    } */

</style>


{#if $status == "home"}
<h2>{$lastCorrectAnswer}</h2>
<Home></Home>
{:else if $status == "play"}
<Game></Game>
{:else if $status == "warn"}
<Warn></Warn>
{:else if $status == "changelog"}
<Changelog></Changelog>
{:else}
<Error></Error>
{/if}



{#if $highScore > 0 && $status == "home"}
<h2> High score: {$highScore} </h2>
{/if}


<!-- {#if $highScore > 0 && $status == "home"}
<h2 id="frenzyh"> Frenzy high score: {$frenzyHighScore} </h2>
{/if} -->



<h2 id="betatag"> v1.0 </h2>