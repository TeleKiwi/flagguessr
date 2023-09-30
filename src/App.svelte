<script>
    import Changelog from "./routes/Changelog.svelte";
    import Error from "./routes/Error.svelte";
    import Game from "./routes/Game.svelte";
    import Home from "./routes/Home.svelte";
    import Mobile from "./routes/Mobile.svelte";
    import { highScore, lastCorrectAnswer, status } from "./stores"

    status.set("home");

    const buildStatus = import.meta.env.DEV
    const verNumber = import.meta.env.VITE_FLAGGUESSR_VERSION;
    
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

    #developer {
        color:aquamarine
    }

    /* #frenzyh {
        color: red;
    } */

</style>


{#if $status == "home"}
<h2>{$lastCorrectAnswer}</h2>
{#if buildStatus}
<h2 id="developer"> Hey there, developer! </h2>
{/if}
<Home></Home>
{:else if $status == "play"}
<Game></Game>
{:else if $status == "changelog"}
<Changelog></Changelog>
{:else if $status == "unsupported"}
<Mobile></Mobile>
{:else}
<Error></Error>
{/if}



{#if $highScore > 0 && $status == "home"}
<h2> High score: {$highScore} </h2>
{/if}


{#if buildStatus}
<h2 id="betatag"> {`${verNumber} (localhost)`} </h2>
{:else}
<h2 id="betatag"> {verNumber} </h2>
{/if}