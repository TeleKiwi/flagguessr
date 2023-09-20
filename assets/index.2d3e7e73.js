(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function M(){}function Oe(t){return t()}function Be(){return Object.create(null)}function V(t){t.forEach(Oe)}function xe(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ce;function we(t,e){return ce||(ce=document.createElement("a")),ce.href=e,t===ce.href}function Ke(t){return Object.keys(t).length===0}function He(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ne(t,e,n){t.$$.on_destroy.push(He(e,n))}function E(t,e){t.appendChild(e)}function o(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function y(){return x(" ")}function O(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function K(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ue(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ne(t,e){t.value=e==null?"":e}let Te;function ie(t){Te=t}const Z=[],ve=[];let J=[];const Le=[],Ve=Promise.resolve();let ge=!1;function De(){ge||(ge=!0,Ve.then(Fe))}function Ae(t){J.push(t)}const Me=new Set;let j=0;function Fe(){if(j!==0)return;const t=Te;do{try{for(;j<Z.length;){const e=Z[j];j++,ie(e),ze(e.$$)}}catch(e){throw Z.length=0,j=0,e}for(ie(null),Z.length=0,j=0;ve.length;)ve.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];Me.has(n)||(Me.add(n),n())}J.length=0}while(Z.length);for(;Le.length;)Le.pop()();ge=!1,Me.clear(),ie(t)}function ze(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ae)}}function We(t){const e=[],n=[];J.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),J=e}const de=new Set;let H;function je(){H={r:0,c:[],p:H}}function qe(){H.r||V(H.c),H=H.p}function $(t,e){t&&t.i&&(de.delete(t),t.i(e))}function F(t,e,n,i){if(t&&t.o){if(de.has(t))return;de.add(t),H.c.push(()=>{de.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Y(t){t&&t.c()}function z(t,e,n,i){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),i||Ae(()=>{const u=t.$$.on_mount.map(Oe).filter(xe);t.$$.on_destroy?t.$$.on_destroy.push(...u):V(u),t.$$.on_mount=[]}),a.forEach(Ae)}function W(t,e){const n=t.$$;n.fragment!==null&&(We(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(Z.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,i,s,a,u,d=[-1]){const _=Te;ie(t);const f=t.$$={fragment:null,ctx:[],props:a,update:M,not_equal:s,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:Be(),dirty:d,skip_bound:!1,root:e.target||_.$$.root};u&&u(f.root);let S=!1;if(f.ctx=n?n(t,e.props||{},(c,C,...T)=>{const G=T.length?T[0]:C;return f.ctx&&s(f.ctx[c],f.ctx[c]=G)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](G),S&&Ze(t,c)),C}):[],f.update(),S=!0,V(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){const c=Ue(e.target);f.fragment&&f.fragment.l(c),c.forEach(r)}else f.fragment&&f.fragment.c();e.intro&&$(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),Fe()}ie(_)}class X{$destroy(){W(this,1),this.$destroy=M}$on(e,n){if(!xe(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const q=[];function Ie(t,e=M){let n;const i=new Set;function s(d){if(D(t,d)&&(t=d,n)){const _=!q.length;for(const f of i)f[1](),q.push(f,t);if(_){for(let f=0;f<q.length;f+=2)q[f][0](q[f+1]);q.length=0}}}function a(d){s(d(t))}function u(d,_=M){const f=[d,_];return i.add(f),i.size===1&&(n=e(s)||M),d(t),()=>{i.delete(f),i.size===0&&n&&(n(),n=null)}}return{set:s,update:a,subscribe:u}}let U=Ie("home");var Re;let ke=Ie((Re=localStorage.getItem("highscore"))!=null?Re:0),te=Ie("");function Je(t){let e,n,i,s,a,u,d,_,f,S,c,C,T,G,v,P,B,g,I,N,L,A,k,m,h,me,le,pe,re,be,oe,_e,ae,Se,ue,Ce,fe,ye,ee,he,Ge;return{c(){e=p("h1"),e.textContent="v1.0.6",n=y(),i=p("h2"),i.textContent="CRITICAL BUGFIX PATCH",s=y(),a=p("li"),a.textContent="Flagguessr is now no longer playable on mobile devices.",u=y(),d=p("li"),d.textContent='Fixed the "The correct answer was [x]" text displaying all possible answers instead of one.',_=y(),f=p("li"),f.textContent="Added more accepted answers.",S=y(),c=p("h1"),c.textContent="v1.0.5",C=y(),T=p("h2"),T.textContent="Welcome back!",G=y(),v=p("li"),v.textContent="Flagguessr has relaunched, and reset to the more stable v1.0.x",P=y(),B=p("li"),B.textContent="However, some QOL changes and bugfixes from v1.1 have been implemented.",g=y(),I=p("li"),I.textContent="There are currently no plans to maintain this version any further.",N=y(),L=p("h2"),L.textContent="Actual changes",A=y(),k=p("h3"),k.textContent="From v1.1",m=y(),h=p("li"),h.textContent='"The Maldives" is now a valid answer for "The Maldives"',me=y(),le=p("li"),le.textContent="Reduced the size of the Nepali and Belgian flags",pe=y(),re=p("li"),re.textContent="Removed all references to Frenzy Mode",be=y(),oe=p("h3"),oe.textContent="New to 1.0.5",_e=y(),ae=p("li"),ae.textContent="Added a button to let you quit from your session: this does NOT save your streak!",Se=y(),ue=p("li"),ue.textContent="Submitting an empty answer no longer keeps your streak.",Ce=y(),fe=p("li"),fe.textContent="Cleaned up the code.",ye=y(),ee=p("button"),ee.textContent="Back"},m(l,b){o(l,e,b),o(l,n,b),o(l,i,b),o(l,s,b),o(l,a,b),o(l,u,b),o(l,d,b),o(l,_,b),o(l,f,b),o(l,S,b),o(l,c,b),o(l,C,b),o(l,T,b),o(l,G,b),o(l,v,b),o(l,P,b),o(l,B,b),o(l,g,b),o(l,I,b),o(l,N,b),o(l,L,b),o(l,A,b),o(l,k,b),o(l,m,b),o(l,h,b),o(l,me,b),o(l,le,b),o(l,pe,b),o(l,re,b),o(l,be,b),o(l,oe,b),o(l,_e,b),o(l,ae,b),o(l,Se,b),o(l,ue,b),o(l,Ce,b),o(l,fe,b),o(l,ye,b),o(l,ee,b),he||(Ge=O(ee,"click",K(t[0])),he=!0)},p:M,i:M,o:M,d(l){l&&r(e),l&&r(n),l&&r(i),l&&r(s),l&&r(a),l&&r(u),l&&r(d),l&&r(_),l&&r(f),l&&r(S),l&&r(c),l&&r(C),l&&r(T),l&&r(G),l&&r(v),l&&r(P),l&&r(B),l&&r(g),l&&r(I),l&&r(N),l&&r(L),l&&r(A),l&&r(k),l&&r(m),l&&r(h),l&&r(me),l&&r(le),l&&r(pe),l&&r(re),l&&r(be),l&&r(oe),l&&r(_e),l&&r(ae),l&&r(Se),l&&r(ue),l&&r(Ce),l&&r(fe),l&&r(ye),l&&r(ee),he=!1,Ge()}}}function Ye(t){function e(){U.set("home")}return[e]}class Qe extends X{constructor(e){super(),Q(this,e,Ye,Je,D,{})}}function Xe(t){let e,n,i,s,a;return{c(){e=p("h1"),e.textContent="Wait a sec, I'm not a flag!",n=y(),i=p("p"),i.textContent=`If you're seeing this, something went very wrong.
    Please make an issue on flagguessr's github!`,s=y(),a=p("a"),a.textContent="Report an issue",w(a,"href","https://github.com/TeleKiwi/flagguessr/issues/new")},m(u,d){o(u,e,d),o(u,n,d),o(u,i,d),o(u,s,d),o(u,a,d)},p:M,i:M,o:M,d(u){u&&r(e),u&&r(n),u&&r(i),u&&r(s),u&&r(a)}}}class et extends X{constructor(e){super(),Q(this,e,null,Xe,D,{})}}const R={AF:"Afghanistan",AX:["\xC5land Islands","Aland Islands"],AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:["Antigua and Barbuda","Antigua","Barbuda"],AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:["Bosnia and Herzegovina","Bosnia"],BW:"Botswana",BR:["Brazil","Federative Republic of Brazil"],IO:"British Indian Ocean Territory",BN:["Brunei Darussalam","Brunei"],BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:["Central African Republic","CAR"],TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:["Congo","Congo-Brazzaville"],CD:["The Democratic Republic of the Congo","DRC","DRC","DR Congo","Congo-Kinshasa"],CK:"Cook Islands",CR:"Costa Rica",CI:["Cote D'Ivoire","Ivory Coast"],HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:["Czech Republic","Czechia"],DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:["Falkland Islands","Islas Malvinas","Falklands"],FO:["Faroe Islands"],FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:["Germany","Deutschland"],GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",VA:["Vatican City","Holy See","The Vatican"],HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:["Italy","Italia"],JM:"Jamaica",JP:["Japan","Nihon"],JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:["Libyan Arab Jamahiriya","Libya"],LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:["Macao","Macau"],MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:["Maldives","The Maldives"],ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:["Federated States of Micronesia","Micronesia"],MD:["Republic of Moldova","Moldova"],MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:["Myanmar","Burma"],NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:["Netherlands","Holland"],NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:["Papua New Guinea","Papua"],PY:"Paraguay",PE:"Peru",PH:["The Philippines","Philippines"],PN:["Pitcairn","Pitcairn Islands"],PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:["Russian Federation","Russia"],RW:"Rwanda",SH:["Saint Helena","St Helena","St. Helena"],KN:["Saint Kitts and Nevis","Saint Kitts & Nevis","St Kitts and Nevis","St Kitts & Nevis","St. Kitts and Nevis","St. Kitts & Nevis"],LC:["Saint Lucia","St. Lucia","St Lucia"],PM:["Saint Pierre and Miquelon","Saint Pierre & Miquelon","St Pierre and Miquelon","St Pierre & Miquelon","St. Pierre and Miquelon","St. Pierre & Miquelon"],VC:["Saint Vincent and the Grenadines","Saint Vincent & the Grenadines","St Vincent and the Grenadines","St Vincent & the Grenadines","St. Vincent and the Grenadines","St. Vincent & the Grenadines"],WS:"Samoa",SM:"San Marino",ST:["Sao Tome and Principe","S\xE3o Tom\xE9 e Pr\xEDncipe","Sao Tome & Principe"],SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:["South Georgia and the South Sandwich Islands","South Georgia","South Georgia & the South Sandwich Islands"],ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SZ:["Swaziland","Eswatini"],SE:"Sweden",CH:"Switzerland",SY:["Syrian Arab Republic","Syria"],TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:["East Timor","Timor Leste","Timor-Leste"],TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:["Trinidad and Tobago","Trinidad","Trinidad & Tobago"],TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:["Turks and Caicos Islands","Turks & Caicos Islands"],TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:["United Arab Emirates","UAE"],GB:["United Kingdom","UK","Great Britain","GB"],US:["United States","United States of America","America","US","USA"],UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:["Virgin Islands, British","Virgin Islands"],VI:["Virgin Islands, US","Virgin Islands, USA","Virgin Islands"],WF:["Wallis and Futuna","Wallis & Futuna"],EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function Pe(t){let e,n,i;return{c(){e=p("h2"),n=x("Streak: "),i=x(t[0])},m(s,a){o(s,e,a),E(e,n),E(e,i)},p(s,a){a&1&&se(i,s[0])},d(s){s&&r(e)}}}function Ee(t){let e,n;return{c(){e=p("h2"),n=x(t[5])},m(i,s){o(i,e,s),E(e,n)},p(i,s){s&32&&se(n,i[5])},d(i){i&&r(e)}}}function tt(t){let e,n,i,s,a,u,d,_,f,S,c,C,T,G,v,P,B,g,I,N,L,A=t[0]>0&&Pe(t),k=t[3]==!0&&Ee(t);return{c(){e=p("h2"),e.textContent="Using hints will RESET your streak!",n=y(),A&&A.c(),i=y(),k&&k.c(),s=y(),a=p("h1"),a.textContent="What country is this?",u=y(),d=p("img"),f=y(),S=p("div"),c=p("form"),C=p("input"),T=y(),G=p("button"),v=x(t[1]),P=y(),B=p("button"),B.textContent="I don't know",g=y(),I=p("button"),I.textContent="I give up",w(d,"id","country"),we(d.src,_=t[2])||w(d,"src",_),w(d,"alt","country"),w(d,"class","svelte-1pdtedm"),w(C,"type","text"),w(C,"class","svelte-1pdtedm"),w(c,"spellcheck","false"),w(S,"class","userAnswer svelte-1pdtedm"),w(G,"id","hint"),w(G,"class","svelte-1pdtedm"),w(I,"id","loser"),w(I,"class","svelte-1pdtedm")},m(m,h){o(m,e,h),o(m,n,h),A&&A.m(m,h),o(m,i,h),k&&k.m(m,h),o(m,s,h),o(m,a,h),o(m,u,h),o(m,d,h),o(m,f,h),o(m,S,h),E(S,c),E(c,C),Ne(C,t[4]),o(m,T,h),o(m,G,h),E(G,v),o(m,P,h),o(m,B,h),o(m,g,h),o(m,I,h),N||(L=[O(C,"input",t[10]),O(c,"submit",K(t[6])),O(G,"click",K(t[7])),O(B,"click",K(t[8])),O(I,"click",K(t[9]))],N=!0)},p(m,[h]){m[0]>0?A?A.p(m,h):(A=Pe(m),A.c(),A.m(i.parentNode,i)):A&&(A.d(1),A=null),m[3]==!0?k?k.p(m,h):(k=Ee(m),k.c(),k.m(s.parentNode,s)):k&&(k.d(1),k=null),h&4&&!we(d.src,_=m[2])&&w(d,"src",_),h&16&&C.value!==m[4]&&Ne(C,m[4]),h&2&&se(v,m[1])},i:M,o:M,d(m){m&&r(e),m&&r(n),A&&A.d(m),m&&r(i),k&&k.d(m),m&&r(s),m&&r(a),m&&r(u),m&&r(d),m&&r(f),m&&r(S),m&&r(T),m&&r(G),m&&r(P),m&&r(B),m&&r(g),m&&r(I),N=!1,V(L)}}}function nt(t,e,n){let i,s;ne(t,ke,g=>n(13,i=g)),ne(t,te,g=>n(5,s=g));let a=-1,u=!1,d="Hint",_="",f,S=!1;function c(){n(3,S=!1),u=!1,n(1,d="Hint"),n(0,a++,a),_=Object.keys(R)[Math.floor(Math.random()*Object.keys(R).length)],_==="NP"?n(2,f="public/nepal.png"):_==="BE"&&n(2,f="public/belgium.png"),_==="CH"?n(2,f="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png"):n(2,f=`https://flagpedia.net/data/flags/w580/${_.toLowerCase()}.webp`)}c();let C="";function T(g=!1){let I=Object.values(R)[Object.keys(R).indexOf(_)];function N(){te.set(`The correct answer was ${I}.`),U.set("home"),a>i&&!g&&ke.set(a),localStorage.setItem("highscore",i.toString()),n(0,a=0)}if(C===null&&N(),typeof I=="string")I.toLowerCase()===C.toLowerCase()?c():N();else{let L=!1;I.forEach(A=>{A.toLowerCase()===C.toLowerCase()&&(L=!0)}),L?c():N()}n(4,C="")}function G(){if(n(0,a=0),u)u=!u,n(1,d="Hint");else{u=!u;let g=Object.values(R)[Object.keys(R).indexOf(_)];typeof g=="string"?n(1,d=g[0]):n(1,d=g[0][0])}}function v(){let g=Object.values(R)[Object.keys(R).indexOf(_)];typeof g=="string"?te.set(`The correct answer was ${g}.`):te.set(`The correct answer was ${g[0]}.`),n(0,a=-1),c(),n(3,S=!0),n(4,C="")}function P(){n(4,C=""),T(!0)}function B(){C=this.value,n(4,C)}return[a,d,f,S,C,s,T,G,v,P,B]}class it extends X{constructor(e){super(),Q(this,e,nt,tt,D,{})}}function st(t){let e,n,i,s,a,u,d,_;return{c(){e=p("img"),i=y(),s=p("button"),s.textContent="Classic Mode",a=y(),u=p("button"),u.textContent="View changelog",w(e,"id","title"),we(e.src,n="flagguessrdark.png")||w(e,"src",n),w(e,"alt","flagguessr"),w(e,"class","svelte-1yf3daf"),w(s,"class","svelte-1yf3daf"),w(u,"class","svelte-1yf3daf")},m(f,S){o(f,e,S),o(f,i,S),o(f,s,S),o(f,a,S),o(f,u,S),d||(_=[O(s,"click",K(t[0])),O(u,"click",K(t[1]))],d=!0)},p:M,i:M,o:M,d(f){f&&r(e),f&&r(i),f&&r(s),f&&r(a),f&&r(u),d=!1,V(_)}}}function lt(t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&U.set("unsupported");function e(){U.set("play")}function n(){U.set("changelog")}return[e,n]}class rt extends X{constructor(e){super(),Q(this,e,lt,st,D,{})}}function ot(t){let e;return{c(){e=p("div"),e.innerHTML=`<img id="title" src="flagguessrdark.png" alt="flagguessr"/> 
    <h1>is not supported on your device.</h1> 
    <h3>Flagguessr is best played on a desktop.<br/>Come back when you&#39;re on Windows, macOS, Linux, or the like!</h3>`,w(e,"id","mobile"),w(e,"class","svelte-1jjk4y3")},m(n,i){o(n,e,i)},p:M,i:M,o:M,d(n){n&&r(e)}}}class at extends X{constructor(e){super(),Q(this,e,null,ot,D,{})}}function ut(t){let e,n;return e=new et({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){F(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function ft(t){let e,n;return e=new at({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){F(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function ct(t){let e,n;return e=new Qe({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){F(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function dt(t){let e,n;return e=new Warn({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){F(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function mt(t){let e,n;return e=new it({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){F(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function pt(t){let e,n,i,s,a;return s=new rt({}),{c(){e=p("h2"),n=x(t[1]),i=y(),Y(s.$$.fragment)},m(u,d){o(u,e,d),E(e,n),o(u,i,d),z(s,u,d),a=!0},p(u,d){(!a||d&2)&&se(n,u[1])},i(u){a||($(s.$$.fragment,u),a=!0)},o(u){F(s.$$.fragment,u),a=!1},d(u){u&&r(e),u&&r(i),W(s,u)}}}function $e(t){let e,n,i;return{c(){e=p("h2"),n=x("High score: "),i=x(t[2])},m(s,a){o(s,e,a),E(e,n),E(e,i)},p(s,a){a&4&&se(i,s[2])},d(s){s&&r(e)}}}function bt(t){let e,n,i,s,a,u;const d=[pt,mt,dt,ct,ft,ut],_=[];function f(c,C){return c[0]=="home"?0:c[0]=="play"?1:c[0]=="warn"?2:c[0]=="changelog"?3:c[0]=="unsupported"?4:5}e=f(t),n=_[e]=d[e](t);let S=t[2]>0&&t[0]=="home"&&$e(t);return{c(){n.c(),i=y(),S&&S.c(),s=y(),a=p("h2"),a.textContent="v1.0.6",w(a,"id","betatag"),w(a,"class","svelte-1rhp8mf")},m(c,C){_[e].m(c,C),o(c,i,C),S&&S.m(c,C),o(c,s,C),o(c,a,C),u=!0},p(c,[C]){let T=e;e=f(c),e===T?_[e].p(c,C):(je(),F(_[T],1,1,()=>{_[T]=null}),qe(),n=_[e],n?n.p(c,C):(n=_[e]=d[e](c),n.c()),$(n,1),n.m(i.parentNode,i)),c[2]>0&&c[0]=="home"?S?S.p(c,C):(S=$e(c),S.c(),S.m(s.parentNode,s)):S&&(S.d(1),S=null)},i(c){u||($(n),u=!0)},o(c){F(n),u=!1},d(c){_[e].d(c),c&&r(i),S&&S.d(c),c&&r(s),c&&r(a)}}}function _t(t,e,n){let i,s,a;return ne(t,U,u=>n(0,i=u)),ne(t,te,u=>n(1,s=u)),ne(t,ke,u=>n(2,a=u)),U.set("home"),[i,s,a]}class St extends X{constructor(e){super(),Q(this,e,_t,bt,D,{})}}new St({target:document.getElementById("app")});