<script>
    import { status } from "../stores";

    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        status.set("unsupported")
    }

    function startGame() {
        status.set("play");
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
<img id="title" src="flagguessrdark.png" alt="flagguessr">
<button on:click|preventDefault="{startGame}"> Classic Mode </button>
<button on:click|preventDefault="{changelog}"> View changelog </button>


<!-- <button id="frenzy" on:click|preventDefault="{warn}"> Frenzy Mode </button> -->




