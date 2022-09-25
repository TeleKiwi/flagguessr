<script>
    import { status } from "../stores";

    function startGame() {
        status.set("menu");
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
</style>

<img id="title" src="flagguessrdark.png" alt="flagguessr">
<button on:click|preventDefault="{startGame}"> start </button>



