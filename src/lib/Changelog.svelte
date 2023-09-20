<script>
    import { status } from "../stores";


    function goBack() {
        status.set("home");
    }
</script>

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
<h3> From v1.1 </h3>
<li> "The Maldives" is now a valid answer for "The Maldives"</li>
<li> Reduced the size of the Nepali and Belgian flags </li>
<li> Removed all references to Frenzy Mode</li>
<h3> New to 1.0.5 </h3>
<li> Added a button to let you quit from your session: this does NOT save your streak! </li>
<li> Submitting an empty answer no longer keeps your streak. </li>
<li> Cleaned up the code. </li>


<button on:click|preventDefault="{goBack}"> Back </button>