<script defer>
    import { status, highScore, lastCorrectAnswer } from "../stores";
    import { JSONList } from "../../public/countryList";
    import { FuzzySet } from "./js/fuzzyset";

    let streak = -1;

    let hint = false;
    let hintText = "Hint";

    let country = "";
    let countryImg;

    let idk = false;
    lastCorrectAnswer.set("")

    let lastCountryList = new Array(5).fill("");

    function generate() {
        idk = false;
        hint = false;
        hintText = "Hint";
        streak++
        do {
            country = Object.keys(JSONList)[Math.floor(Math.random() * Object.keys(JSONList).length)];
            if(!lastCountryList.includes(country)) {
                break;
            }
        } while(true)
        lastCountryList.shift();
        lastCountryList.push(country);
        if(country === "NP") {
            countryImg = "public/nepal.png";
        } else if (country === "BE") {
            countryImg = "public/belgium.png"
        } {
            country === "CH" ? countryImg = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png` : countryImg = `https://flagpedia.net/data/flags/w580/${country.toLowerCase()}.webp`
        }
    }

    generate();
    
    let answer = "";

    function submitAnswer(loserFlag = false) {

        let temp = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)]
        let correct = typeof temp === "string" ? [temp] : temp;
        
        function goHome(loserFlag = false) {
            lastCorrectAnswer.set(`The correct answer was ${correct[0]}.`)
            status.set("home");
            if(streak > $highScore && !loserFlag) { highScore.set(streak); localStorage.setItem("highscore", $highScore.toString()) }
            streak = 0;
        }

        
        if(answer === null) { 
            goHome(true);
        }

        let earlyReturn = false;
        correct.forEach((valid) => {
            if(answer.toLowerCase() === valid.toLowerCase()) {
                generate();
                earlyReturn = true;
            }
        })
        
        if(earlyReturn) {
            answer = "";
            return;
        }

        let answersAsFuzzySet = FuzzySet(
            correct
        );
        const strength = answersAsFuzzySet.get(answer);
        if(strength) {
            lastCorrectAnswer.set(`You got the answer, but the correct spelling is ${correct[0]}.`)
            generate();
        } else{
            goHome(true);
        }
        answer = "";
    }


    
    function giveHint() {
        streak = 0;
        if(hint) {
            hint = !hint;
            hintText = "Hint";
        } else {
            hint = !hint;
            let correct = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)];
            if(typeof correct === "string") {
                hintText = correct[0];
            } else {
                hintText = correct[0][0];
            }
        }
        
    }

    function skip() {
        let correct = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)];
        if(typeof correct === "string") {
            lastCorrectAnswer.set(`The correct answer was ${correct}.`)
        } else {
            lastCorrectAnswer.set(`The correct answer was ${correct[0]}.`)
        }
        
        streak = -1;
        generate();
        idk = true;
        answer = "";
    }

    function giveUp() {
        answer = "";
        submitAnswer(true);
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

    #hint {
        margin-top: 5px;
    }
    
    #loser {
        background-color: red;
    }
</style>

<h2> Using hints will RESET your streak!</h2>

{#if streak > 0}
<h2> Streak: {streak} </h2>
{/if}

<h2> {$lastCorrectAnswer} </h2>

<h1> What country is this? </h1>
<img id="country" src="{countryImg}" alt="country"/>

<div class="userAnswer">
    <form spellcheck="false" on:submit|preventDefault="{submitAnswer}">
        <input type="text" bind:value="{answer}"> 
    </form>
</div>

<button id="hint" on:click|preventDefault="{giveHint}"> {hintText} </button>
<button on:click|preventDefault="{skip}"> I don't know</button>
<button id="loser" on:click|preventDefault="{giveUp}">I give up</button>