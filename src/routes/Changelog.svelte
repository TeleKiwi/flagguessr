<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

<style>
    #back {
        font-weight: 700;
        position: fixed;
        bottom: 0;
        left: 0;
        margin-left: 1250px;
        margin-bottom: 40px;
    }
</style>

<h1> v1.0.8 </h1>
<h2> I LOVE REFACTORING!! </h2>
<li> The entirety of the main game's source code has been rewritten. </li>
<li> You shouldn't notice a thing, but it'll make my life (as a developer) wayy easier. </li>
<h3> Other </h3>
<li> The "back" button on this page is now sticky to the bottom right. </li>

<h1> v1.0.7.2-hotfix</h1>
<h2> These version numbers are getting ridiculous.</h2>
<li> Fixed the indicator always displaying </li>

<h1> v1.0.7.2 </h1>
<li> [for developers] Added an indicator for when Flagguessr is being hosted locally </li>
<li> Various other minor changes </li>

<h1> v1.0.7.1 </h1>
<li> Various minor changes & fixes</li>

<h1> v1.0.7-hotfix2 </h1>
<li> Fixed the word estimation HUD text not disappearing properly </li>

<h1> v1.0.7-hotfix </h1>
<li> Removed some development artifacts </li>

<h1> v1.0.7 </h1>
<h2> Woah, is this maintainence? </h2>
<h3> You no longer have to get a spelling exactly right! </h3>
<li> Thanks to a new word estimation algorithm, you can spell a country's name sorta wrong and still get the question right!</li>
<li> It even tells you the correct spelling! </li>
<h3> More random, more fun! </h3>
<li> There is no longer a chance to get a flag twice or more in a row. </li>
<li> After a flag shows up, atleast 4 different flags must appear to see that same flag again. </li>
<h3> Misc improvements! </h3>
<li> Cleaned up the codebase</li>

<h1> v1.0.6.2 </h1>
<h2><em> f e a t u r e s</em></h2>
<li> [for developers] Added a option to host Flagguessr locally on mobile</li>
<li> The version number is now sticky to the bottom left corner (like in the old v1.1)</li>

<h1> v1.0.6.1 </h1>
<h2> CRITICAL BUGFIX PATCH FOR THE CRITICAL BUGFIX PATCH </h2>
<li> Fixed the scaling for the "mobile unsupported" page.</li>

<h1> v1.0.6 </h1>
<h2> CRITICAL BUGFIX PATCH </h2>
<li> Flagguessr is now no longer playable on mobile devices.</li>
<li> Fixed the "The correct answer was [x]" text displaying all possible answers instead of one.</li>
<li> Added more accepted answers. </li>

<h1> v1.0.5 </h1>
<h2> Welcome back!</h2>
<li> Flagguessr has relaunched, and reset to the more stable v1.0.x </li>
<li> However, some QOL changes and bugfixes from v1.1 have been implemented. </li>
<li> There are currently no plans to maintain this version any further. </li>
<h2> Actual changes </h2>
<h3> From the old v1.1 </h3>
<li> "The Maldives" is now a valid answer for "The Maldives"</li>
<li> Reduced the size of the Nepali and Belgian flags </li>
<li> Removed all references to Frenzy Mode</li>
<h3> New to 1.0.5 </h3>
<li> Added a button to let you quit from your session: this does NOT save your streak! </li>
<li> Submitting an empty answer no longer keeps your streak. </li>
<li> Cleaned up the code. </li>


<button id="back" on:click|preventDefault="{goBack}"> Back </button>