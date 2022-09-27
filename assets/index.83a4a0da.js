(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function M(){}function Se(t){return t()}function ue(){return Object.create(null)}function $(t){t.forEach(Se)}function Ce(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let J;function le(t,e){return J||(J=document.createElement("a")),J.href=e,t===J.href}function ye(t){return Object.keys(t).length===0}function ge(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Q(t,e,n){t.$$.on_destroy.push(ge(e,n))}function L(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function S(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function C(){return K(" ")}function v(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e){t.value=e==null?"":e}let ae;function Z(t){ae=t}const W=[],ce=[],X=[],de=[],Ie=Promise.resolve();let re=!1;function we(){re||(re=!0,Ie.then(he))}function oe(t){X.push(t)}const se=new Set;let Y=0;function he(){const t=ae;do{for(;Y<W.length;){const e=W[Y];Y++,Z(e),Ae(e.$$)}for(Z(null),W.length=0,Y=0;ce.length;)ce.pop()();for(let e=0;e<X.length;e+=1){const n=X[e];se.has(n)||(se.add(n),n())}X.length=0}while(W.length);for(;de.length;)de.pop()();re=!1,se.clear(),Z(t)}function Ae(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}const ee=new Set;let R;function ke(){R={r:0,c:[],p:R}}function Te(){R.r||$(R.c),R=R.p}function P(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(ee.has(t))return;ee.add(t),R.c.push(()=>{ee.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function q(t){t&&t.c()}function V(t,e,n,i){const{fragment:s,on_mount:a,on_destroy:l,after_update:d}=t.$$;s&&s.m(e,n),i||oe(()=>{const m=a.map(Se).filter(Ce);l?l.push(...m):$(m),t.$$.on_mount=[]}),d.forEach(oe)}function U(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(W.push(t),we(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,i,s,a,l,d=[-1]){const m=ae;Z(t);const c=t.$$={fragment:null,ctx:null,props:a,update:M,not_equal:s,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:ue(),dirty:d,skip_bound:!1,root:e.target||m.$$.root};l&&l(c.root);let p=!1;if(c.ctx=n?n(t,e.props||{},(o,h,...g)=>{const k=g.length?g[0]:h;return c.ctx&&s(c.ctx[o],c.ctx[o]=k)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](k),p&&Ge(t,o)),h}):[],c.update(),p=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const o=Me(e.target);c.fragment&&c.fragment.l(o),o.forEach(u)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),he()}Z(m)}class z{$destroy(){U(this,1),this.$destroy=M}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const H=[];function ie(t,e=M){let n;const i=new Set;function s(d){if(F(t,d)&&(t=d,n)){const m=!H.length;for(const c of i)c[1](),H.push(c,t);if(m){for(let c=0;c<H.length;c+=2)H[c][0](H[c+1]);H.length=0}}}function a(d){s(d(t))}function l(d,m=M){const c=[d,m];return i.add(c),i.size===1&&(n=e(s)||M),d(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:l}}let B=ie("home");var be;let j=ie((be=localStorage.getItem("highscore"))!=null?be:0);var _e;ie((_e=localStorage.getItem("frenzyhighscore"))!=null?_e:0);let te=ie("");function Ne(t){let e,n,i,s,a,l,d,m,c,p,o,h,g,k,y,T,G,N,I,r,b;return{c(){e=S("h1"),e.textContent="v1.0.1-hotfix",n=C(),i=S("li"),i.textContent="Fixed the Swiss flag being the only flag.",s=C(),a=S("h1"),a.textContent="v1.0.1",l=C(),d=S("h2"),d.textContent="No scrolling needed!",m=C(),c=S("li"),c.textContent="The Swiss flag has been downscaled.",p=C(),o=S("h1"),o.textContent="v1.0",h=C(),g=S("h2"),g.textContent="Welcome to Flagguessr!",k=C(),y=S("li"),y.textContent="No changes from v1.0-release_candidate_3",T=C(),G=S("li"),G.textContent="Changes from v0.0.0; added in core gameplay.",N=C(),I=S("button"),I.textContent="Back"},m(_,A){f(_,e,A),f(_,n,A),f(_,i,A),f(_,s,A),f(_,a,A),f(_,l,A),f(_,d,A),f(_,m,A),f(_,c,A),f(_,p,A),f(_,o,A),f(_,h,A),f(_,g,A),f(_,k,A),f(_,y,A),f(_,T,A),f(_,G,A),f(_,N,A),f(_,I,A),r||(b=v(I,"click",E(t[0])),r=!0)},p:M,i:M,o:M,d(_){_&&u(e),_&&u(n),_&&u(i),_&&u(s),_&&u(a),_&&u(l),_&&u(d),_&&u(m),_&&u(c),_&&u(p),_&&u(o),_&&u(h),_&&u(g),_&&u(k),_&&u(y),_&&u(T),_&&u(G),_&&u(N),_&&u(I),r=!1,b()}}}function Be(t){function e(){B.set("home")}return[e]}class ve extends z{constructor(e){super(),D(this,e,Be,Ne,F,{})}}function Le(t){let e,n,i,s,a;return{c(){e=S("h1"),e.textContent="Wait a sec, I'm not a flag!",n=C(),i=S("p"),i.textContent=`If you're seeing this, something went very wrong.
    Please make an issue on flagguessr's github!`,s=C(),a=S("a"),a.textContent="Report an issue",w(a,"href","https://github.com/TeleKiwi/flagguessr/issues/new")},m(l,d){f(l,e,d),f(l,n,d),f(l,i,d),f(l,s,d),f(l,a,d)},p:M,i:M,o:M,d(l){l&&u(e),l&&u(n),l&&u(i),l&&u(s),l&&u(a)}}}class Ee extends z{constructor(e){super(),D(this,e,null,Le,F,{})}}const O={AF:"Afghanistan",AX:["\xC5land Islands","Aland Islands"],AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:["Antigua and Barbuda","Antigua","Barbuda"],AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:["Bosnia and Herzegovina","Bosnia"],BW:"Botswana",BR:["Brazil","Federative Republic of Brazil"],IO:"British Indian Ocean Territory",BN:["Brunei Darussalam","Brunei"],BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:["Central African Republic","CAR"],TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:["Congo","Congo-Brazzaville"],CD:["The Democratic Republic of the Congo","DRC","DRC","DR Congo","Congo-Kinshasa"],CK:"Cook Islands",CR:"Costa Rica",CI:['Cote D"Ivoire',"Ivory coast"],HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:["Czech Republic","Czechia"],DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:["Falkland Islands","Islas Malvinas","Falklands"],FO:["Faroe Islands"],FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",VA:["Vatican City","Holy See","The Vatican"],HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:["Italy","Italia"],JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:["Libyan Arab Jamahiriya","Libya"],LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:["Macao","Macau"],MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:["Federated States of Micronesia","Micronesia"],MD:["Republic of Moldova","Moldova"],MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:["Myanmar","Burma"],NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:["Netherlands","Holland"],NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:["Papua New Guinea","Papua"],PY:"Paraguay",PE:"Peru",PH:["The Philippines","Philippines"],PN:["Pitcairn","Pitcairn Islands"],PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:["Russian Federation","Russia"],RW:"Rwanda",SH:["Saint Helena","St Helena","St. Helena"],KN:["Saint Kitts and Nevis","Saint Kitts & Nevis","St Kitts and Nevis","St Kitts & Nevis","St. Kitts and Nevis","St. Kitts & Nevis"],LC:["Saint Lucia","St. Lucia","St Lucia"],PM:["Saint Pierre and Miquelon","Saint Pierre & Miquelon","St Pierre and Miquelon","St Pierre & Miquelon","St. Pierre and Miquelon","St. Pierre & Miquelon"],VC:["Saint Vincent and the Grenadines","Saint Vincent & the Grenadines","St Vincent and the Grenadines","St Vincent & the Grenadines","St. Vincent and the Grenadines","St. Vincent & the Grenadines"],WS:"Samoa",SM:"San Marino",ST:["Sao Tome and Principe","S\xE3o Tom\xE9 e Pr\xEDncipe","Sao Tome & Principe"],SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:["South Georgia and the South Sandwich Islands","South Georgia","South Georgia & the South Sandwich Islands"],ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SZ:["Swaziland","Eswatini"],SE:"Sweden",CH:"Switzerland",SY:["Syrian Arab Republic","Syria"],TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:["East Timor","Timor Leste","Timor-Leste"],TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:["Trinidad and Tobago","Trinidad","Trinidad & Tobago"],TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:["Turks and Caicos Islands","Turks & Caicos Islands"],TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:["United Arab Emirates","UAE"],GB:["United Kingdom","UK"],US:["United States","United States of America","America","US","USA"],UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:["Virgin Islands, British","Virgin Islands"],VI:["Virgin Islands, US","Virgin Islands, USA","Virgin Islands"],WF:["Wallis and Futuna","Wallis & Futuna"],EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function me(t){let e,n,i;return{c(){e=S("h2"),n=K("Streak: "),i=K(t[0])},m(s,a){f(s,e,a),L(e,n),L(e,i)},p(s,a){a&1&&ne(i,s[0])},d(s){s&&u(e)}}}function Pe(t){let e,n,i,s,a,l,d,m,c,p,o,h,g,k,y,T,G,N,I=t[0]>0&&me(t);return{c(){e=S("h2"),e.textContent="Using hints will RESET your streak!",n=C(),I&&I.c(),i=C(),s=S("h1"),s.textContent="What country is this?",a=C(),l=S("img"),m=C(),c=S("div"),p=S("form"),o=S("input"),h=C(),g=S("button"),k=K(t[1]),y=C(),T=S("button"),T.textContent="I don't know",w(l,"id","country"),le(l.src,d=t[2])||w(l,"src",d),w(l,"alt","country"),w(l,"class","svelte-1vj0fk2"),w(o,"type","text"),w(o,"class","svelte-1vj0fk2"),w(p,"spellcheck","false"),w(c,"class","userAnswer svelte-1vj0fk2"),w(g,"id","hint"),w(g,"class","svelte-1vj0fk2")},m(r,b){f(r,e,b),f(r,n,b),I&&I.m(r,b),f(r,i,b),f(r,s,b),f(r,a,b),f(r,l,b),f(r,m,b),f(r,c,b),L(c,p),L(p,o),fe(o,t[3]),f(r,h,b),f(r,g,b),L(g,k),f(r,y,b),f(r,T,b),G||(N=[v(o,"input",t[7]),v(p,"submit",E(t[4])),v(g,"click",E(t[5])),v(T,"click",E(t[6]))],G=!0)},p(r,[b]){r[0]>0?I?I.p(r,b):(I=me(r),I.c(),I.m(i.parentNode,i)):I&&(I.d(1),I=null),b&4&&!le(l.src,d=r[2])&&w(l,"src",d),b&8&&o.value!==r[3]&&fe(o,r[3]),b&2&&ne(k,r[1])},i:M,o:M,d(r){r&&u(e),r&&u(n),I&&I.d(r),r&&u(i),r&&u(s),r&&u(a),r&&u(l),r&&u(m),r&&u(c),r&&u(h),r&&u(g),r&&u(y),r&&u(T),G=!1,$(N)}}}function $e(t,e,n){let i;Q(t,j,y=>n(10,i=y));let s=-1,a=!1,l="Hint",d="",m;function c(){a=!1,n(1,l="Hint"),n(0,s++,s),d=Object.keys(O)[Math.floor(Math.random()*Object.keys(O).length)],d==="CH"?n(2,m="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png"):n(2,m=`https://flagpedia.net/data/flags/w580/${d.toLowerCase()}.webp`)}c();let p="";function o(){let y=Object.values(O)[Object.keys(O).indexOf(d)];if(p===null&&(te.set(`The correct answer was ${y}.`),B.set("home"),s>i&&j.set(s),localStorage.setItem("highscore",i.toString()),n(0,s=0)),typeof y=="string")y.toLowerCase()===p.toLowerCase()?c():(te.set(`The correct answer was ${y}.`),B.set("home"),s>i&&j.set(s),localStorage.setItem("highscore",i.toString()),n(0,s=0));else{let T=!1;y.forEach(G=>{G.toLowerCase()===p.toLowerCase()&&(T=!0)}),T?c():(te.set(`The correct answer was ${y[0]}.`),B.set("home"),s>i&&j.set(s),localStorage.setItem("highscore",i.toString()),n(0,s=0))}n(3,p="")}function h(){if(n(0,s=0),a)a=!a,n(1,l="Hint");else{a=!a;let y=Object.values(O)[Object.keys(O).indexOf(d)];typeof y=="string"?n(1,l=y[0]):n(1,l=y[0][0])}}function g(){n(0,s=-1),c(),n(3,p="")}function k(){p=this.value,n(3,p)}return[s,l,m,p,o,h,g,k]}class Re extends z{constructor(e){super(),D(this,e,$e,Pe,F,{})}}function Ke(t){let e,n,i,s,a,l,d,m,c,p;return{c(){e=S("h2"),e.textContent="High-scores will be phased out in v1.1!",n=C(),i=S("img"),a=C(),l=S("button"),l.textContent="Classic Mode",d=C(),m=S("button"),m.textContent="View changelog",w(i,"id","title"),le(i.src,s="flagguessrdark.png")||w(i,"src",s),w(i,"alt","flagguessr"),w(i,"class","svelte-1yf3daf"),w(l,"class","svelte-1yf3daf"),w(m,"class","svelte-1yf3daf")},m(o,h){f(o,e,h),f(o,n,h),f(o,i,h),f(o,a,h),f(o,l,h),f(o,d,h),f(o,m,h),c||(p=[v(l,"click",E(t[0])),v(m,"click",E(t[1]))],c=!0)},p:M,i:M,o:M,d(o){o&&u(e),o&&u(n),o&&u(i),o&&u(a),o&&u(l),o&&u(d),o&&u(m),c=!1,$(p)}}}function xe(t){function e(){B.set("play")}function n(){B.set("changelog")}return[e,n]}class Fe extends z{constructor(e){super(),D(this,e,xe,Ke,F,{})}}function He(t){let e,n,i,s,a,l,d,m,c,p,o,h,g,k,y,T,G,N,I;return{c(){e=S("h1"),e.textContent="WARNING!",n=C(),i=S("h3"),i.textContent="Frenzy mode is *way* harder than Classic Mode.",s=C(),a=S("h3"),a.textContent="Here are the differences;",l=C(),d=S("li"),d.textContent="NO IDK/Hint button",m=C(),c=S("li"),c.textContent="10 second timer",p=C(),o=S("h3"),o.textContent="If you're up to the challenge, be my guest. Otherwise..",h=C(),g=S("h1"),g.textContent="You should probably turn back.",k=C(),y=S("button"),y.textContent="BRING IT ON!",T=C(),G=S("button"),G.textContent="Go back to safety",w(y,"id","imready"),w(y,"class","svelte-1mwa7gi")},m(r,b){f(r,e,b),f(r,n,b),f(r,i,b),f(r,s,b),f(r,a,b),f(r,l,b),f(r,d,b),f(r,m,b),f(r,c,b),f(r,p,b),f(r,o,b),f(r,h,b),f(r,g,b),f(r,k,b),f(r,y,b),f(r,T,b),f(r,G,b),N||(I=[v(y,"click",E(t[0])),v(G,"click",E(t[1]))],N=!0)},p:M,i:M,o:M,d(r){r&&u(e),r&&u(n),r&&u(i),r&&u(s),r&&u(a),r&&u(l),r&&u(d),r&&u(m),r&&u(c),r&&u(p),r&&u(o),r&&u(h),r&&u(g),r&&u(k),r&&u(y),r&&u(T),r&&u(G),N=!1,$(I)}}}function Oe(t){function e(){B.set("frenzy")}function n(){B.set("home")}return[e,n]}class Ve extends z{constructor(e){super(),D(this,e,Oe,He,F,{})}}function Ue(t){let e,n;return e=new Ee({}),{c(){q(e.$$.fragment)},m(i,s){V(e,i,s),n=!0},p:M,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function De(t){let e,n;return e=new ve({}),{c(){q(e.$$.fragment)},m(i,s){V(e,i,s),n=!0},p:M,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function ze(t){let e,n;return e=new Ve({}),{c(){q(e.$$.fragment)},m(i,s){V(e,i,s),n=!0},p:M,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function We(t){let e,n;return e=new Re({}),{c(){q(e.$$.fragment)},m(i,s){V(e,i,s),n=!0},p:M,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function je(t){let e,n,i,s,a;return s=new Fe({}),{c(){e=S("h2"),n=K(t[1]),i=C(),q(s.$$.fragment)},m(l,d){f(l,e,d),L(e,n),f(l,i,d),V(s,l,d),a=!0},p(l,d){(!a||d&2)&&ne(n,l[1])},i(l){a||(P(s.$$.fragment,l),a=!0)},o(l){x(s.$$.fragment,l),a=!1},d(l){l&&u(e),l&&u(i),U(s,l)}}}function pe(t){let e,n,i;return{c(){e=S("h2"),n=K("High score: "),i=K(t[2])},m(s,a){f(s,e,a),L(e,n),L(e,i)},p(s,a){a&4&&ne(i,s[2])},d(s){s&&u(e)}}}function Ze(t){let e,n,i,s,a,l;const d=[je,We,ze,De,Ue],m=[];function c(o,h){return o[0]=="home"?0:o[0]=="play"?1:o[0]=="warn"?2:o[0]=="changelog"?3:4}e=c(t),n=m[e]=d[e](t);let p=t[2]>0&&t[0]=="home"&&pe(t);return{c(){n.c(),i=C(),p&&p.c(),s=C(),a=S("h2"),a.textContent="v1.0.1",w(a,"id","betatag"),w(a,"class","svelte-1rhp8mf")},m(o,h){m[e].m(o,h),f(o,i,h),p&&p.m(o,h),f(o,s,h),f(o,a,h),l=!0},p(o,[h]){let g=e;e=c(o),e===g?m[e].p(o,h):(ke(),x(m[g],1,1,()=>{m[g]=null}),Te(),n=m[e],n?n.p(o,h):(n=m[e]=d[e](o),n.c()),P(n,1),n.m(i.parentNode,i)),o[2]>0&&o[0]=="home"?p?p.p(o,h):(p=pe(o),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(o){l||(P(n),l=!0)},o(o){x(n),l=!1},d(o){m[e].d(o),o&&u(i),p&&p.d(o),o&&u(s),o&&u(a)}}}function qe(t,e,n){let i,s,a;return Q(t,B,l=>n(0,i=l)),Q(t,te,l=>n(1,s=l)),Q(t,j,l=>n(2,a=l)),B.set("home"),[i,s,a]}class Je extends z{constructor(e){super(),D(this,e,qe,Ze,F,{})}}new Je({target:document.getElementById("app")});
