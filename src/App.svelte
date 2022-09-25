<script>
    import Home from "./lib/Home.svelte";
    import { status } from "./stores"

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
{:else}
<h1> Wait a sec, I'm not a flag!</h1>
<p> If you're seeing this, something went very wrong.
    Please make an issue on flagguessr's github!
</p>
<a href="https://github.com/TeleKiwi/flagguessr/issues/new"> Report an issue</a>
{/if}


<h2 id="betatag"> DEVELOPMENT VERSION </h2>