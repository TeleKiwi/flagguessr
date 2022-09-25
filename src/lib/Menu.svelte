<style lang="scss">
    .flexcontainer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    #main {
        padding: 20px;
        margin: 5px;
    }
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>

<div class="flexcontainer">
    <button id="main"> Classic </button>
    <button id="main"> Frenzy </button> 
</div>


