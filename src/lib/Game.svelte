<script defer>
    import { status, highScore, lastCorrectAnswer, points} from "../stores";
    import { JSONList, countryPointValues } from "../../public/countryList";

    let streak = -1;

    let hint = false;
    let hintText = "Hint";

    let country = "";
    let countryImg;

    let idk = true;
    let bonus = "";

    let multiplier = 1;
    
    function reset(correct) {
        lastCorrectAnswer.set(`The correct answer was ${correct}.`)
        status.set("home");
        if(streak > $highScore) { highScore.set(streak); }
        localStorage.setItem("highscore", $highScore.toString())
        streak = 0;
    }

    function generate() {
        let pointBonus = Object.values(countryPointValues)[Object.keys(countryPointValues).indexOf(country)];
        if(!idk) {
            if(streak % 4 == 0 && streak != 0) { multiplier++;  }
            if(!hint) { 
                localStorage.setItem("points", (Number.parseInt(localStorage.getItem("points")) + ((pointBonus) * multiplier)).toString())
            } else {
                // only give half the points
                localStorage.setItem("points", (Number.parseInt(localStorage.getItem("points")) + ((pointBonus / 2) * multiplier)).toString())
            }
        }   
        pointBonus == undefined ? bonus = "" : bonus = `+${pointBonus}`

        points.set(Number.parseInt(localStorage.getItem("points")))
        idk = false;
        hint = false;
        hintText = "Hint";
        streak++
        country = Object.keys(JSONList)[Math.floor(Math.random() * Object.keys(JSONList).length)];
        if(country === "NP") {
            countryImg = "public/nepal.png";
        } else if(country === "BE") {
            countryImg = "public/belgium.png";
        } else {
            country === "CH" ? countryImg = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png` : countryImg = `https://flagpedia.net/data/flags/w580/${country.toLowerCase()}.webp`
        }
    }

    generate();
    
    let answer = "";

    function submitAnswer() {
        let correct = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)];
        if(answer === null) { 
            reset(correct)
        }
        if(typeof correct === "string") {
            if(correct.toLowerCase() === answer.toLowerCase()) {
                generate();
            } else {
                reset(correct)
            }
        } else {
            let check = false;
            correct.forEach((e) => {
                if(e.toLowerCase() === answer.toLowerCase()) {
                    check = true;
                }
            })
            if(!check) {
                reset(correct)
            } else {
                generate();
            }
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

    #bonus {
        color: lightgreen;
    }
</style>

<h2> Using hints will RESET your streak!</h2>

<h2> Points: {$points}</h2>

{#if bonus !== "" && !idk}
    <h2 id="bonus">{bonus}</h2>
{/if}


{#if streak > 0}
<h2> Streak: {streak} </h2>
{/if}

{#if idk == true}
<h2> {$lastCorrectAnswer} </h2>
{/if}

<h1> What country is this? </h1>
<img id="country" src="{countryImg}" alt="country"/>

<div class="userAnswer">
    <form spellcheck="false" on:submit|preventDefault="{submitAnswer}">
        <input type="text" bind:value="{answer}"> 
    </form>
</div>

<button id="hint" on:click|preventDefault="{giveHint}"> {hintText} </button>
<button on:click|preventDefault="{skip}"> I don't know</button>