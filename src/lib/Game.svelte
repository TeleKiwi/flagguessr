<script defer>
    import { status } from "../stores";
    import { JSONList } from "../../public/countryList";

    let country = "";
    let countryImg;

    function generate() {
        country = Object.keys(JSONList)[Math.floor(Math.random() * Object.keys(JSONList).length)];
        countryImg = `https://flagpedia.net/data/flags/w580/${country.toLowerCase()}.webp`
    }

    generate();
    
    let answer = "";

    function submitAnswer() {
        let correct = Object.values(JSONList)[Object.keys(JSONList).indexOf(country)];
        if(typeof correct === "string") {
            if(correct.toLowerCase() === answer) {
                generate();
            } else {
                status.set("home");
            }
        } else {
            let bits = "";
            correct.forEach((e) => {
                if(e.toLowerCase() === answer) {
                    bits += "1"
                } else {
                    bits += "0";
                }

                if(bits.match(/1/)) {
                    generate();
                } else {
                    status.set("home");
                }
            })
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

<h1> What country is this? </h1>
<img id="country" src="{countryImg}" alt="country"/>

<div class="userAnswer">
    <form spellcheck="false" on:submit|preventDefault="{submitAnswer}">
        <input type="text" bind:value="{answer}"> 
    </form>
</div>
