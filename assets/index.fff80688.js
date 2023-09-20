(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function M(){}function Ve(t){return t()}function $e(){return Object.create(null)}function V(t){t.forEach(Ve)}function De(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let pe;function ge(t,e){return pe||(pe=document.createElement("a")),pe.href=e,t===pe.href}function We(t){return Object.keys(t).length===0}function je(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ne(t,e,n){t.$$.on_destroy.push(je(e,n))}function E(t,e){t.appendChild(e)}function o(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function S(){return F(" ")}function x(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function H(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qe(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function Re(t,e){t.value=e==null?"":e}let Le;function ie(t){Le=t}const Z=[],xe=[];let J=[];const Fe=[],Ze=Promise.resolve();let Be=!1;function Je(){Be||(Be=!0,Ze.then(ze))}function ve(t){J.push(t)}const Ge=new Set;let j=0;function ze(){if(j!==0)return;const t=Le;do{try{for(;j<Z.length;){const e=Z[j];j++,ie(e),Ye(e.$$)}}catch(e){throw Z.length=0,j=0,e}for(ie(null),Z.length=0,j=0;xe.length;)xe.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];Ge.has(n)||(Ge.add(n),n())}J.length=0}while(Z.length);for(;Fe.length;)Fe.pop()();Be=!1,Ge.clear(),ie(t)}function Ye(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ve)}}function Qe(t){const e=[],n=[];J.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),J=e}const be=new Set;let K;function Xe(){K={r:0,c:[],p:K}}function et(){K.r||V(K.c),K=K.p}function $(t,e){t&&t.i&&(be.delete(t),t.i(e))}function O(t,e,n,i){if(t&&t.o){if(be.has(t))return;be.add(t),K.c.push(()=>{be.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Y(t){t&&t.c()}function z(t,e,n,i){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),i||ve(()=>{const u=t.$$.on_mount.map(Ve).filter(De);t.$$.on_destroy?t.$$.on_destroy.push(...u):V(u),t.$$.on_mount=[]}),a.forEach(ve)}function W(t,e){const n=t.$$;n.fragment!==null&&(Qe(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(Z.push(t),Je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,i,s,a,u,d=[-1]){const _=Le;ie(t);const f=t.$$={fragment:null,ctx:[],props:a,update:M,not_equal:s,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:$e(),dirty:d,skip_bound:!1,root:e.target||_.$$.root};u&&u(f.root);let C=!1;if(f.ctx=n?n(t,e.props||{},(c,y,...I)=>{const g=I.length?I[0]:y;return f.ctx&&s(f.ctx[c],f.ctx[c]=g)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](g),C&&tt(t,c)),y}):[],f.update(),C=!0,V(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){const c=qe(e.target);f.fragment&&f.fragment.l(c),c.forEach(r)}else f.fragment&&f.fragment.c();e.intro&&$(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),ze()}ie(_)}class X{$destroy(){W(this,1),this.$destroy=M}$on(e,n){if(!De(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!We(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const q=[];function Pe(t,e=M){let n;const i=new Set;function s(d){if(D(t,d)&&(t=d,n)){const _=!q.length;for(const f of i)f[1](),q.push(f,t);if(_){for(let f=0;f<q.length;f+=2)q[f][0](q[f+1]);q.length=0}}}function a(d){s(d(t))}function u(d,_=M){const f=[d,_];return i.add(f),i.size===1&&(n=e(s)||M),d(t),()=>{i.delete(f),i.size===0&&n&&(n(),n=null)}}return{set:s,update:a,subscribe:u}}let U=Pe("home");var Ue;let Ne=Pe((Ue=localStorage.getItem("highscore"))!=null?Ue:0),te=Pe("");function nt(t){let e,n,i,s,a,u,d,_,f,C,c,y,I,g,N,P,B,w,G,v,L,T,k,m,h,_e,le,Ce,re,Se,oe,ye,ae,he,ue,Me,fe,Ae,ce,we,de,Te,me,ke,ee,Ie,Ee;return{c(){e=b("h1"),e.textContent="v1.0.6.1",n=S(),i=b("h2"),i.textContent="CRITICAL BUGFIX PATCH FOR THE CRITICAL BUGFIX PATCH",s=S(),a=b("li"),a.textContent='Fixed the scaling for the "mobile unsupported" page.',u=S(),d=b("h1"),d.textContent="v1.0.6",_=S(),f=b("h2"),f.textContent="CRITICAL BUGFIX PATCH",C=S(),c=b("li"),c.textContent="Flagguessr is now no longer playable on mobile devices.",y=S(),I=b("li"),I.textContent='Fixed the "The correct answer was [x]" text displaying all possible answers instead of one.',g=S(),N=b("li"),N.textContent="Added more accepted answers.",P=S(),B=b("h1"),B.textContent="v1.0.5",w=S(),G=b("h2"),G.textContent="Welcome back!",v=S(),L=b("li"),L.textContent="Flagguessr has relaunched, and reset to the more stable v1.0.x",T=S(),k=b("li"),k.textContent="However, some QOL changes and bugfixes from v1.1 have been implemented.",m=S(),h=b("li"),h.textContent="There are currently no plans to maintain this version any further.",_e=S(),le=b("h2"),le.textContent="Actual changes",Ce=S(),re=b("h3"),re.textContent="From v1.1",Se=S(),oe=b("li"),oe.textContent='"The Maldives" is now a valid answer for "The Maldives"',ye=S(),ae=b("li"),ae.textContent="Reduced the size of the Nepali and Belgian flags",he=S(),ue=b("li"),ue.textContent="Removed all references to Frenzy Mode",Me=S(),fe=b("h3"),fe.textContent="New to 1.0.5",Ae=S(),ce=b("li"),ce.textContent="Added a button to let you quit from your session: this does NOT save your streak!",we=S(),de=b("li"),de.textContent="Submitting an empty answer no longer keeps your streak.",Te=S(),me=b("li"),me.textContent="Cleaned up the code.",ke=S(),ee=b("button"),ee.textContent="Back"},m(l,p){o(l,e,p),o(l,n,p),o(l,i,p),o(l,s,p),o(l,a,p),o(l,u,p),o(l,d,p),o(l,_,p),o(l,f,p),o(l,C,p),o(l,c,p),o(l,y,p),o(l,I,p),o(l,g,p),o(l,N,p),o(l,P,p),o(l,B,p),o(l,w,p),o(l,G,p),o(l,v,p),o(l,L,p),o(l,T,p),o(l,k,p),o(l,m,p),o(l,h,p),o(l,_e,p),o(l,le,p),o(l,Ce,p),o(l,re,p),o(l,Se,p),o(l,oe,p),o(l,ye,p),o(l,ae,p),o(l,he,p),o(l,ue,p),o(l,Me,p),o(l,fe,p),o(l,Ae,p),o(l,ce,p),o(l,we,p),o(l,de,p),o(l,Te,p),o(l,me,p),o(l,ke,p),o(l,ee,p),Ie||(Ee=x(ee,"click",H(t[0])),Ie=!0)},p:M,i:M,o:M,d(l){l&&r(e),l&&r(n),l&&r(i),l&&r(s),l&&r(a),l&&r(u),l&&r(d),l&&r(_),l&&r(f),l&&r(C),l&&r(c),l&&r(y),l&&r(I),l&&r(g),l&&r(N),l&&r(P),l&&r(B),l&&r(w),l&&r(G),l&&r(v),l&&r(L),l&&r(T),l&&r(k),l&&r(m),l&&r(h),l&&r(_e),l&&r(le),l&&r(Ce),l&&r(re),l&&r(Se),l&&r(oe),l&&r(ye),l&&r(ae),l&&r(he),l&&r(ue),l&&r(Me),l&&r(fe),l&&r(Ae),l&&r(ce),l&&r(we),l&&r(de),l&&r(Te),l&&r(me),l&&r(ke),l&&r(ee),Ie=!1,Ee()}}}function it(t){function e(){U.set("home")}return[e]}class st extends X{constructor(e){super(),Q(this,e,it,nt,D,{})}}function lt(t){let e,n,i,s,a;return{c(){e=b("h1"),e.textContent="Wait a sec, I'm not a flag!",n=S(),i=b("p"),i.textContent=`If you're seeing this, something went very wrong.
    Please make an issue on flagguessr's github!`,s=S(),a=b("a"),a.textContent="Report an issue",A(a,"href","https://github.com/TeleKiwi/flagguessr/issues/new")},m(u,d){o(u,e,d),o(u,n,d),o(u,i,d),o(u,s,d),o(u,a,d)},p:M,i:M,o:M,d(u){u&&r(e),u&&r(n),u&&r(i),u&&r(s),u&&r(a)}}}class rt extends X{constructor(e){super(),Q(this,e,null,lt,D,{})}}const R={AF:"Afghanistan",AX:["\xC5land Islands","Aland Islands"],AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:["Antigua and Barbuda","Antigua","Barbuda"],AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:["Bosnia and Herzegovina","Bosnia"],BW:"Botswana",BR:["Brazil","Federative Republic of Brazil"],IO:"British Indian Ocean Territory",BN:["Brunei Darussalam","Brunei"],BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:["Central African Republic","CAR"],TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:["Congo","Congo-Brazzaville"],CD:["The Democratic Republic of the Congo","DRC","DRC","DR Congo","Congo-Kinshasa"],CK:"Cook Islands",CR:"Costa Rica",CI:["Cote D'Ivoire","Ivory Coast"],HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:["Czech Republic","Czechia"],DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:["Falkland Islands","Islas Malvinas","Falklands"],FO:["Faroe Islands"],FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:["Germany","Deutschland"],GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",VA:["Vatican City","Holy See","The Vatican"],HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:["Italy","Italia"],JM:"Jamaica",JP:["Japan","Nihon"],JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:["Libyan Arab Jamahiriya","Libya"],LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:["Macao","Macau"],MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:["Maldives","The Maldives"],ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:["Federated States of Micronesia","Micronesia"],MD:["Republic of Moldova","Moldova"],MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:["Myanmar","Burma"],NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:["Netherlands","Holland"],NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:["Papua New Guinea","Papua"],PY:"Paraguay",PE:"Peru",PH:["The Philippines","Philippines"],PN:["Pitcairn","Pitcairn Islands"],PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:["Russian Federation","Russia"],RW:"Rwanda",SH:["Saint Helena","St Helena","St. Helena"],KN:["Saint Kitts and Nevis","Saint Kitts & Nevis","St Kitts and Nevis","St Kitts & Nevis","St. Kitts and Nevis","St. Kitts & Nevis"],LC:["Saint Lucia","St. Lucia","St Lucia"],PM:["Saint Pierre and Miquelon","Saint Pierre & Miquelon","St Pierre and Miquelon","St Pierre & Miquelon","St. Pierre and Miquelon","St. Pierre & Miquelon"],VC:["Saint Vincent and the Grenadines","Saint Vincent & the Grenadines","St Vincent and the Grenadines","St Vincent & the Grenadines","St. Vincent and the Grenadines","St. Vincent & the Grenadines"],WS:"Samoa",SM:"San Marino",ST:["Sao Tome and Principe","S\xE3o Tom\xE9 e Pr\xEDncipe","Sao Tome & Principe"],SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:["South Georgia and the South Sandwich Islands","South Georgia","South Georgia & the South Sandwich Islands"],ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SZ:["Swaziland","Eswatini"],SE:"Sweden",CH:"Switzerland",SY:["Syrian Arab Republic","Syria"],TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:["East Timor","Timor Leste","Timor-Leste"],TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:["Trinidad and Tobago","Trinidad","Trinidad & Tobago"],TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:["Turks and Caicos Islands","Turks & Caicos Islands"],TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:["United Arab Emirates","UAE"],GB:["United Kingdom","UK","Great Britain","GB"],US:["United States","United States of America","America","US","USA"],UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:["Virgin Islands, British","Virgin Islands"],VI:["Virgin Islands, US","Virgin Islands, USA","Virgin Islands"],WF:["Wallis and Futuna","Wallis & Futuna"],EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function Oe(t){let e,n,i;return{c(){e=b("h2"),n=F("Streak: "),i=F(t[0])},m(s,a){o(s,e,a),E(e,n),E(e,i)},p(s,a){a&1&&se(i,s[0])},d(s){s&&r(e)}}}function He(t){let e,n;return{c(){e=b("h2"),n=F(t[5])},m(i,s){o(i,e,s),E(e,n)},p(i,s){s&32&&se(n,i[5])},d(i){i&&r(e)}}}function ot(t){let e,n,i,s,a,u,d,_,f,C,c,y,I,g,N,P,B,w,G,v,L,T=t[0]>0&&Oe(t),k=t[3]==!0&&He(t);return{c(){e=b("h2"),e.textContent="Using hints will RESET your streak!",n=S(),T&&T.c(),i=S(),k&&k.c(),s=S(),a=b("h1"),a.textContent="What country is this?",u=S(),d=b("img"),f=S(),C=b("div"),c=b("form"),y=b("input"),I=S(),g=b("button"),N=F(t[1]),P=S(),B=b("button"),B.textContent="I don't know",w=S(),G=b("button"),G.textContent="I give up",A(d,"id","country"),ge(d.src,_=t[2])||A(d,"src",_),A(d,"alt","country"),A(d,"class","svelte-1pdtedm"),A(y,"type","text"),A(y,"class","svelte-1pdtedm"),A(c,"spellcheck","false"),A(C,"class","userAnswer svelte-1pdtedm"),A(g,"id","hint"),A(g,"class","svelte-1pdtedm"),A(G,"id","loser"),A(G,"class","svelte-1pdtedm")},m(m,h){o(m,e,h),o(m,n,h),T&&T.m(m,h),o(m,i,h),k&&k.m(m,h),o(m,s,h),o(m,a,h),o(m,u,h),o(m,d,h),o(m,f,h),o(m,C,h),E(C,c),E(c,y),Re(y,t[4]),o(m,I,h),o(m,g,h),E(g,N),o(m,P,h),o(m,B,h),o(m,w,h),o(m,G,h),v||(L=[x(y,"input",t[10]),x(c,"submit",H(t[6])),x(g,"click",H(t[7])),x(B,"click",H(t[8])),x(G,"click",H(t[9]))],v=!0)},p(m,[h]){m[0]>0?T?T.p(m,h):(T=Oe(m),T.c(),T.m(i.parentNode,i)):T&&(T.d(1),T=null),m[3]==!0?k?k.p(m,h):(k=He(m),k.c(),k.m(s.parentNode,s)):k&&(k.d(1),k=null),h&4&&!ge(d.src,_=m[2])&&A(d,"src",_),h&16&&y.value!==m[4]&&Re(y,m[4]),h&2&&se(N,m[1])},i:M,o:M,d(m){m&&r(e),m&&r(n),T&&T.d(m),m&&r(i),k&&k.d(m),m&&r(s),m&&r(a),m&&r(u),m&&r(d),m&&r(f),m&&r(C),m&&r(I),m&&r(g),m&&r(P),m&&r(B),m&&r(w),m&&r(G),v=!1,V(L)}}}function at(t,e,n){let i,s;ne(t,Ne,w=>n(13,i=w)),ne(t,te,w=>n(5,s=w));let a=-1,u=!1,d="Hint",_="",f,C=!1;function c(){n(3,C=!1),u=!1,n(1,d="Hint"),n(0,a++,a),_=Object.keys(R)[Math.floor(Math.random()*Object.keys(R).length)],_==="NP"?n(2,f="public/nepal.png"):_==="BE"&&n(2,f="public/belgium.png"),_==="CH"?n(2,f="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png"):n(2,f=`https://flagpedia.net/data/flags/w580/${_.toLowerCase()}.webp`)}c();let y="";function I(w=!1){let G=Object.values(R)[Object.keys(R).indexOf(_)];function v(){te.set(`The correct answer was ${G}.`),U.set("home"),a>i&&!w&&Ne.set(a),localStorage.setItem("highscore",i.toString()),n(0,a=0)}if(y===null&&v(),typeof G=="string")G.toLowerCase()===y.toLowerCase()?c():v();else{let L=!1;G.forEach(T=>{T.toLowerCase()===y.toLowerCase()&&(L=!0)}),L?c():v()}n(4,y="")}function g(){if(n(0,a=0),u)u=!u,n(1,d="Hint");else{u=!u;let w=Object.values(R)[Object.keys(R).indexOf(_)];typeof w=="string"?n(1,d=w[0]):n(1,d=w[0][0])}}function N(){let w=Object.values(R)[Object.keys(R).indexOf(_)];typeof w=="string"?te.set(`The correct answer was ${w}.`):te.set(`The correct answer was ${w[0]}.`),n(0,a=-1),c(),n(3,C=!0),n(4,y="")}function P(){n(4,y=""),I(!0)}function B(){y=this.value,n(4,y)}return[a,d,f,C,y,s,I,g,N,P,B]}class ut extends X{constructor(e){super(),Q(this,e,at,ot,D,{})}}function ft(t){let e,n,i,s,a,u,d,_;return{c(){e=b("img"),i=S(),s=b("button"),s.textContent="Classic Mode",a=S(),u=b("button"),u.textContent="View changelog",A(e,"id","title"),ge(e.src,n="flagguessrdark.png")||A(e,"src",n),A(e,"alt","flagguessr"),A(e,"class","svelte-1yf3daf"),A(s,"class","svelte-1yf3daf"),A(u,"class","svelte-1yf3daf")},m(f,C){o(f,e,C),o(f,i,C),o(f,s,C),o(f,a,C),o(f,u,C),d||(_=[x(s,"click",H(t[0])),x(u,"click",H(t[1]))],d=!0)},p:M,i:M,o:M,d(f){f&&r(e),f&&r(i),f&&r(s),f&&r(a),f&&r(u),d=!1,V(_)}}}function ct(t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&U.set("unsupported");function e(){U.set("play")}function n(){U.set("changelog")}return[e,n]}class dt extends X{constructor(e){super(),Q(this,e,ct,ft,D,{})}}function mt(t){let e;return{c(){e=b("div"),e.innerHTML=`<img id="title" src="flagguessrdark.png" alt="flagguessr"/> 
    <h1>is not supported on your device.</h1> 
    <h3>Flagguessr is best played on a desktop.<br/>Come back when you&#39;re on Windows, macOS, Linux, or the like!</h3>`,A(e,"id","mobile"),A(e,"class","svelte-1jjk4y3")},m(n,i){o(n,e,i)},p:M,i:M,o:M,d(n){n&&r(e)}}}class pt extends X{constructor(e){super(),Q(this,e,null,mt,D,{})}}function bt(t){let e,n;return e=new rt({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){O(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function _t(t){let e,n;return e=new pt({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){O(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function Ct(t){let e,n;return e=new st({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){O(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function St(t){let e,n;return e=new Warn({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){O(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function yt(t){let e,n;return e=new ut({}),{c(){Y(e.$$.fragment)},m(i,s){z(e,i,s),n=!0},p:M,i(i){n||($(e.$$.fragment,i),n=!0)},o(i){O(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function ht(t){let e,n,i,s,a;return s=new dt({}),{c(){e=b("h2"),n=F(t[1]),i=S(),Y(s.$$.fragment)},m(u,d){o(u,e,d),E(e,n),o(u,i,d),z(s,u,d),a=!0},p(u,d){(!a||d&2)&&se(n,u[1])},i(u){a||($(s.$$.fragment,u),a=!0)},o(u){O(s.$$.fragment,u),a=!1},d(u){u&&r(e),u&&r(i),W(s,u)}}}function Ke(t){let e,n,i;return{c(){e=b("h2"),n=F("High score: "),i=F(t[2])},m(s,a){o(s,e,a),E(e,n),E(e,i)},p(s,a){a&4&&se(i,s[2])},d(s){s&&r(e)}}}function Mt(t){let e,n,i,s,a,u;const d=[ht,yt,St,Ct,_t,bt],_=[];function f(c,y){return c[0]=="home"?0:c[0]=="play"?1:c[0]=="warn"?2:c[0]=="changelog"?3:c[0]=="unsupported"?4:5}e=f(t),n=_[e]=d[e](t);let C=t[2]>0&&t[0]=="home"&&Ke(t);return{c(){n.c(),i=S(),C&&C.c(),s=S(),a=b("h2"),a.textContent="v1.0.6",A(a,"id","betatag"),A(a,"class","svelte-1rhp8mf")},m(c,y){_[e].m(c,y),o(c,i,y),C&&C.m(c,y),o(c,s,y),o(c,a,y),u=!0},p(c,[y]){let I=e;e=f(c),e===I?_[e].p(c,y):(Xe(),O(_[I],1,1,()=>{_[I]=null}),et(),n=_[e],n?n.p(c,y):(n=_[e]=d[e](c),n.c()),$(n,1),n.m(i.parentNode,i)),c[2]>0&&c[0]=="home"?C?C.p(c,y):(C=Ke(c),C.c(),C.m(s.parentNode,s)):C&&(C.d(1),C=null)},i(c){u||($(n),u=!0)},o(c){O(n),u=!1},d(c){_[e].d(c),c&&r(i),C&&C.d(c),c&&r(s),c&&r(a)}}}function At(t,e,n){let i,s,a;return ne(t,U,u=>n(0,i=u)),ne(t,te,u=>n(1,s=u)),ne(t,Ne,u=>n(2,a=u)),U.set("home"),[i,s,a]}class wt extends X{constructor(e){super(),Q(this,e,At,Mt,D,{})}}new wt({target:document.getElementById("app")});
