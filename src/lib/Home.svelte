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
    @media (min-width: 15.9rem) {
        #title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-block-end: 150px;
        }

        
    } 

    @media (max-width: 15.9rem ){
        .mobile {
            display: inline;
        }
    }
    
    

    button {
        padding: 30px
    }

    /* #frenzy {
        background-color: red;
        color: white;
    } */
</style>

<div class="mobile">
    <img id="title" src="flagguessrdark.png" alt="flagguessr">
    <button on:click|preventDefault="{startGame}"> Classic Mode </button>
    <button on:click|preventDefault="{changelog}"> View changelog </button>
</div>



<!-- <button id="frenzy" on:click|preventDefault="{warn}"> Frenzy Mode </button> -->




