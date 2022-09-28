<script>
    import { status, lastCorrectAnswer } from "../stores";

    function startGame() {
        status.set("play");
    } 

    function warn() {
        status.set("warn");
    } 

    function changelog() {
        status.set("changelog");
    } 

</script>
<style lang="scss">
    #title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-block-end: 150px;
    }

    button {
        padding: 30px
    }

    /* #frenzy {
        background-color: red;
        color: white;
    } */
</style>
<h2> High-scores will be phased out in v1.1! </h2>
<img id="title" src="flagguessrdark.png" alt="flagguessr">
<button on:click|preventDefault="{startGame}"> Classic Mode </button>
<button on:click|preventDefault="{changelog}"> View changelog </button>


<!-- <button id="frenzy" on:click|preventDefault="{warn}"> Frenzy Mode </button> -->




