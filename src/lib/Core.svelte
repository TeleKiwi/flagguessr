<script defer lang="ts">
    import { status, highScore, lastCorrectAnswer } from "../stores";
    import {
        getRandomCountryCode,
        getNameFromCode,
    } from "./typescript/countryListGrabber";
    import fuzzysort from "fuzzysort";
    //* reset & initialise

    let streak = -1;
    let hint = {
        active: false,
        text: "Hint",
        reset: () => {
            hint.active = false;
            hint.text = "Hint";
        },
    };
    let country = {
        code: "",
        imageURL: "",
        previousCode: "",
        codeHistory: new Array(5).fill(""),
        reset: () => {
            [country.code, country.imageURL, country.previousCode] = "";
            country.codeHistory = new Array(5).fill("");
        },
    };
    lastCorrectAnswer.set("");

    function resetAll() {
        country.reset();
        hint.reset();
        lastCorrectAnswer.set("");
        streak = -1;
    }

    // main

    function generate() {
        hint.reset();
        streak++;

        do {
            country.code = getRandomCountryCode();
            if (!country.codeHistory.includes(country.code)) {
                break;
            }
        } while (true);
        country.codeHistory.shift();
        country.codeHistory.push(country.code);
        if (country.codeHistory[2] == country.previousCode) {
            lastCorrectAnswer.set("");
        }

        switch (country.code) {
            // Nepal, Belgium, The Vatican, Switzerland all have non-standard flags that need special cases
            case "NP" || "BE" || "VA" || "CH": {
                country.imageURL = `public/special/${country.code}.png`;
                break;
            }
            default: {
                country.imageURL = `https://flagpedia.net/data/flags/w580/${country.code.toLowerCase()}.webp`;
            }
        }
    }

    generate();
    let userAnswer = "";

    function submitAnswer(globalLoserFlag = false) {
        let correctAnswer = getNameFromCode(country.code)
        function goHome(loserFlag = false) {
            lastCorrectAnswer.set(`The correct answer was ${correctAnswer[0]}.`);
            status.set("home");
            if (streak > $highScore && loserFlag) {
                highScore.set(streak);
                localStorage.setItem("highscore", $highScore.toString());
            }
            streak = -1;
        }
        if(userAnswer === "" || globalLoserFlag) {goHome(true)}

        function weighAnswers(correctAnswers) {
            let finalWeight = 0;
            for(let i = 0; i < correctAnswers.length; i++) {
                const answer = correctAnswers[i]
                const weight = fuzzysort.single(answer.toLowerCase(), userAnswer.toLowerCase());
                switch(weight?.score) {
                    case null:
                        // big big bad
                        finalWeight -= 1000;
                        break;
                    case 0:
                        // perfect godd
                        return 0;
                    default:
                        finalWeight += weight?.score;
                        break;
                }
                
            }
            return finalWeight;
        }


        const strength = weighAnswers(correctAnswer);
        console.log(`strength is ${strength}`)
        userAnswer = "";
        switch(true) {
            case (strength === 0):
                // perfect match
                country.previousCode = country.code;
                generate();
                break;
            case (strength > -1000):
                // weak match
                lastCorrectAnswer.set(`You got the answer, but the correct spelling is "${correctAnswer[0]}".`)
                country.previousCode = country.code;
                generate();
                break;
            default:
                // fail
                goHome();
                break;
        }
        
    }


    function giveHint() {
        streak = -1;
        if(hint.active) {
            hint.active = !hint.active;
            hint.text = "Hint";
        } else {
            hint.active = !hint.active;
            let correct = getNameFromCode(country.code);
            hint.text = correct[0][0]
        }
        
    }

    function skip() {
        let correct = getNameFromCode(country.code);
        lastCorrectAnswer.set(`The correct answer was ${correct[0]}.`)
        country.previousCode = country.code;
        
        streak = -1;
        userAnswer = ""
        generate();
    }

    function giveUp() {
        userAnswer = "";
        submitAnswer(true);
    }
</script>

<h2>Using hints will RESET your streak!</h2>

{#if streak > 0}
    <h2>Streak: {streak}</h2>
{/if}

<h2>{$lastCorrectAnswer}</h2>

<h1>What country is this?</h1>
<img id="country" src={country.imageURL} alt="country" />

<div class="userAnswer">
    <form spellcheck="false" on:submit|preventDefault={submitAnswer}>
        <input type="text" bind:value={userAnswer} />
    </form>
</div>

<button id="hint" on:click|preventDefault={giveHint}> {hint.text} </button>
<button on:click|preventDefault={skip}> I don't know</button>
<button id="loser" on:click|preventDefault={giveUp}>I give up</button>

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
