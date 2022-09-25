(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();function h(){}function q(t){return t()}function Z(){return Object.create(null)}function C(t){t.forEach(q)}function ee(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function O(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function te(t){return Object.keys(t).length===0}function ne(t,...e){if(t==null)return h;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ae(t,e,n){t.$$.on_destroy.push(ne(e,n))}function W(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function re(t){return document.createTextNode(t)}function S(){return re(" ")}function F(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function Q(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t){return Array.from(t.childNodes)}function J(t,e){t.value=e==null?"":e}let U;function G(t){U=t}const A=[],j=[],w=[],Y=[],se=Promise.resolve();let x=!1;function oe(){x||(x=!0,se.then(X))}function D(t){w.push(t)}const K=new Set;let B=0;function X(){const t=U;do{for(;B<A.length;){const e=A[B];B++,G(e),ue(e.$$)}for(G(null),A.length=0,B=0;j.length;)j.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];K.has(n)||(K.add(n),n())}w.length=0}while(A.length);for(;Y.length;)Y.pop()();x=!1,K.clear(),G(t)}function ue(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const L=new Set;let b;function le(){b={r:0,c:[],p:b}}function ce(){b.r||C(b.c),b=b.p}function M(t,e){t&&t.i&&(L.delete(t),t.i(e))}function I(t,e,n,a){if(t&&t.o){if(L.has(t))return;L.add(t),b.c.push(()=>{L.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function H(t){t&&t.c()}function v(t,e,n,a){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),a||D(()=>{const c=u.map(q).filter(ee);s?s.push(...c):C(c),t.$$.on_mount=[]}),o.forEach(D)}function P(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(t,e){t.$$.dirty[0]===-1&&(A.push(t),oe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,a,r,u,s,o=[-1]){const c=U;G(t);const i=t.$$={fragment:null,ctx:null,props:u,update:h,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(i.root);let m=!1;if(i.ctx=n?n(t,e.props||{},(l,g,...V)=>{const z=V.length?V[0]:g;return i.ctx&&r(i.ctx[l],i.ctx[l]=z)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](z),m&&fe(t,l)),g}):[],i.update(),m=!0,C(i.before_update),i.fragment=a?a(i.ctx):!1,e.target){if(e.hydrate){const l=ie(e.target);i.fragment&&i.fragment.l(l),l.forEach(d)}else i.fragment&&i.fragment.c();e.intro&&M(t.$$.fragment),v(t,e.target,e.anchor,e.customElement),X()}G(c)}class k{$destroy(){P(this,1),this.$destroy=h}$on(e,n){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function de(t){let e,n,a,r,u;return{c(){e=_("h1"),e.textContent="Wait a sec, I'm not a flag!",n=S(),a=_("p"),a.textContent=`If you're seeing this, something went very wrong.
    Please make an issue on flagguessr's github!`,r=S(),u=_("a"),u.textContent="Report an issue",f(u,"href","https://github.com/TeleKiwi/flagguessr/issues/new")},m(s,o){p(s,e,o),p(s,n,o),p(s,a,o),p(s,r,o),p(s,u,o)},p:h,i:h,o:h,d(s){s&&d(e),s&&d(n),s&&d(a),s&&d(r),s&&d(u)}}}class me extends k{constructor(e){super(),R(this,e,null,de,T,{})}}const y=[];function pe(t,e=h){let n;const a=new Set;function r(o){if(T(t,o)&&(t=o,n)){const c=!y.length;for(const i of a)i[1](),y.push(i,t);if(c){for(let i=0;i<y.length;i+=2)y[i][0](y[i+1]);y.length=0}}}function u(o){r(o(t))}function s(o,c=h){const i=[o,c];return a.add(i),a.size===1&&(n=e(r)||h),o(t),()=>{a.delete(i),a.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:s}}let $=pe("home");const E={AF:"Afghanistan",AX:"\xC5land Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BR:["Brazil","Federative Republic of Brazil"],IO:"British Indian Ocean Territory",BN:["Brunei Darussalam","Brunei"],BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:["The Democratic Republic of the Congo","DRC","DRC","DR Congo"],CK:"Cook Islands",CR:"Costa Rica",CI:['Cote D"Ivoire',"Ivory coast"],HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:["Falkland Islands","Islas Malvinas","Falkland"],FO:["Faroe Islands"],FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",VA:["Vatican City","Holy See"],HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:["Italy","Italia"],JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:["Federated States of Micronesia","Micronesia"],MD:["Republic of Moldova","Moldova"],MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:["Philippines","Philippines"],PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:["Russian Federation","Russia"],RW:"Rwanda",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:["Sao Tome and Principe","S\xE3o Tom\xE9 e Pr\xEDncipe"],SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:["South Georgia and the South Sandwich Islands","South Georgia"],ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:["East Timor","Timor Leste"],TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:["United States","United States of America"],UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:["Virgin Islands, British"],VI:["Virgin Islands, US","Virgin Islands, USA"],WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function he(t){let e,n,a,r,u,s,o,c,i,m;return{c(){e=_("h1"),e.textContent="What country is this?",n=S(),a=_("img"),u=S(),s=_("div"),o=_("form"),c=_("input"),f(a,"id","country"),O(a.src,r=t[0])||f(a,"src",r),f(a,"alt","country"),f(a,"class","svelte-zmils0"),f(c,"type","text"),f(c,"class","svelte-zmils0"),f(o,"spellcheck","false"),f(s,"class","userAnswer svelte-zmils0")},m(l,g){p(l,e,g),p(l,n,g),p(l,a,g),p(l,u,g),p(l,s,g),W(s,o),W(o,c),J(c,t[1]),i||(m=[F(c,"input",t[3]),F(o,"submit",Q(t[2]))],i=!0)},p(l,[g]){g&1&&!O(a.src,r=l[0])&&f(a,"src",r),g&2&&c.value!==l[1]&&J(c,l[1])},i:h,o:h,d(l){l&&d(e),l&&d(n),l&&d(a),l&&d(u),l&&d(s),i=!1,C(m)}}}function ge(t,e,n){let a="",r;function u(){a=Object.keys(E)[Math.floor(Math.random()*Object.keys(E).length)],n(0,r=`https://flagpedia.net/data/flags/w580/${a.toLowerCase()}.webp`)}u();let s="";function o(){let i=Object.values(E)[Object.keys(E).indexOf(a)];if(typeof i=="string")i.toLowerCase()===s?u():$.set("home");else{let m="";i.forEach(l=>{l.toLowerCase()===s?m+="1":m+="0",m.match(/1/)?u():$.set("home")})}n(1,s="")}function c(){s=this.value,n(1,s)}return[r,s,o,c]}class _e extends k{constructor(e){super(),R(this,e,ge,he,T,{})}}function be(t){let e,n,a,r,u,s;return{c(){e=_("img"),a=S(),r=_("button"),r.textContent="start",f(e,"id","title"),O(e.src,n="flagguessrdark.png")||f(e,"src",n),f(e,"alt","flagguessr"),f(e,"class","svelte-4dww01"),f(r,"class","svelte-4dww01")},m(o,c){p(o,e,c),p(o,a,c),p(o,r,c),u||(s=F(r,"click",Q(t[0])),u=!0)},p:h,i:h,o:h,d(o){o&&d(e),o&&d(a),o&&d(r),u=!1,s()}}}function ye(t){function e(){$.set("play")}return[e]}class Se extends k{constructor(e){super(),R(this,e,ye,be,T,{})}}function Me(t){let e,n;return e=new me({}),{c(){H(e.$$.fragment)},m(a,r){v(e,a,r),n=!0},i(a){n||(M(e.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),n=!1},d(a){P(e,a)}}}function Ce(t){let e,n;return e=new _e({}),{c(){H(e.$$.fragment)},m(a,r){v(e,a,r),n=!0},i(a){n||(M(e.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),n=!1},d(a){P(e,a)}}}function Ae(t){let e,n;return e=new Se({}),{c(){H(e.$$.fragment)},m(a,r){v(e,a,r),n=!0},i(a){n||(M(e.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),n=!1},d(a){P(e,a)}}}function Ge(t){let e,n,a,r,u;const s=[Ae,Ce,Me],o=[];function c(i,m){return i[0]=="home"?0:i[0]=="play"?1:2}return e=c(t),n=o[e]=s[e](t),{c(){n.c(),a=S(),r=_("h2"),r.textContent="DEVELOPMENT VERSION",f(r,"id","betatag"),f(r,"class","svelte-3vwd9n")},m(i,m){o[e].m(i,m),p(i,a,m),p(i,r,m),u=!0},p(i,[m]){let l=e;e=c(i),e!==l&&(le(),I(o[l],1,1,()=>{o[l]=null}),ce(),n=o[e],n||(n=o[e]=s[e](i),n.c()),M(n,1),n.m(a.parentNode,a))},i(i){u||(M(n),u=!0)},o(i){I(n),u=!1},d(i){o[e].d(i),i&&d(a),i&&d(r)}}}function Ie(t,e,n){let a;return ae(t,$,r=>n(0,a=r)),$.set("home"),[a]}class $e extends k{constructor(e){super(),R(this,e,Ie,Ge,T,{})}}new $e({target:document.getElementById("app")});