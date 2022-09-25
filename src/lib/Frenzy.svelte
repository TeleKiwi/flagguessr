<script defer>
    import { status, frenzyHighScore } from "../stores";
    import { JSONList } from "../../public/countryList";

    let streak = -1;

    let country = "";
    let countryImg;

    let seconds = 10;

    function generate() {
        seconds = 10;
        let timer = setInterval(() => {
            if(seconds == 0) {
                status.set("home");
                if(streak > $frenzyHighScore) { frenzyHighScore.set(streak); }
                localStorage.setItem("frenzyhighscore", $frenzyHighScore.toString())
                streak = 0;
                clearInterval(timer);
            } else {
                seconds--;
            }
        }, 1000)
        streak++
        country = Object.keys(JSONList)[Math.floor(Math.random() * Object.keys(JSONList).length)];
        countryImg = `https://flagpedia.net/data/flags/w580/${country.toLowerCase()}.webp`
    }

    generate();
    
    let answer = "";

    function submitAnswer() {
        let correct = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)];
        if(answer === null) { 
            status.set("home");
            if(streak > $frenzyHighScore) { frenzyHighScore.set(streak); }
            localStorage.setItem("frenzyhighscore", $frenzyHighScore.toString())
            streak = 0;
        }
        if(typeof correct === "string") {
            if(correct.toLowerCase() === answer.toLowerCase()) {
                generate();
            } else {
                status.set("home");
                if(streak > $frenzyHighScore) { frenzyHighScore.set(streak); }
                localStorage.setItem("frenzyhighscore", $frenzyHighScore.toString())
                streak = 0;
            }
        } else {
            let check = false;
            correct.forEach((e) => {
                if(e.toLowerCase() === answer.toLowerCase()) {
                    check = true;
                }
            })
            if(!check) {
                status.set("home");
                if(streak > $frenzyHighScore) { frenzyHighScore.set(streak); }
                localStorage.setItem("frenzyhighscore", $frenzyHighScore.toString())
                streak = 0;
            } else {
                generate();
            }
        }
        answer = "";
    }

    

</script>

<style lang="scss">
    #country {
        position: relative;
        bottom: 30px;
    }

    .userAnswer {
        display: block;
    }

    .userAnswer input {
            padding-block: 5px;
            font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
            font-weight: 400;
    }

</style>

{#if seconds == 1}
<h2> 1 second remains! </h2>
{:else}
<h2> {seconds} seconds remain! </h2>
{/if}


{#if streak > 0}
<h2> Streak: {streak} </h2>
{/if}
<h1> What country is this? </h1>
<img id="country" src="{countryImg}" alt="country"/>

<div class="userAnswer">
    <form spellcheck="false" on:submit|preventDefault="{submitAnswer}">
        <input type="text" bind:value="{answer}"> 
    </form>
</div>