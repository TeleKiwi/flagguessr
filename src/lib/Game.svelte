<script>
    import { status } from "../stores";
    function goBack() {
        status.set("home")
    }
</script>

<style lang="scss">
    button {
        padding: 30px
    }
</style>

<p> wip </p>
<button on:click|preventDefault="{goBack}"> back </button>