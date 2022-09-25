<script>
    import { status } from "../stores";

    function startGame() {
        status.set("play");
    } 

    function warn() {
        status.set("warn");
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

    #frenzy {
        background-color: red;
        color: white;
    }
</style>

<img id="title" src="flagguessrdark.png" alt="flagguessr">
<button on:click|preventDefault="{startGame}"> Classic Mode </button>
<button id="frenzy" on:click|preventDefault="{warn}"> Frenzy Mode </button>



