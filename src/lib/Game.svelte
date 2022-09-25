<script defer>
    import { status } from "../stores";
    import { JSONList } from "../../public/countryList";

    let streak = -1;

    let country = "";
    let countryImg;

    function generate() {
        streak++
        country = Object.keys(JSONList)[Math.floor(Math.random() * Object.keys(JSONList).length)];
        countryImg = `https://flagpedia.net/data/flags/w580/${country.toLowerCase()}.webp`
    }

    generate();
    
    let answer = "";

    function submitAnswer() {
        let correct = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)];
        if(typeof correct === "string") {
            if(correct.toLowerCase() === answer.toLowerCase()) {
                generate();
            } else {
                status.set("home");
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

<h2> Streak: {streak} </h2>
<h1> What country is this? </h1>
<img id="country" src="{countryImg}" alt="country"/>

<div class="userAnswer">
    <form spellcheck="false" on:submit|preventDefault="{submitAnswer}">
        <input type="text" bind:value="{answer}"> 
    </form>
</div>
