var _e=Object.defineProperty;var be=(t,e,n)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>be(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function S(){}function pe(t,e){for(const n in e)t[n]=e[n];return t}function de(t){return t()}function le(){return Object.create(null)}function X(t){t.forEach(de)}function me(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function we(t){return Object.keys(t).length===0}function ve(t,e,n,l){if(t){const i=he(t,e,n,l);return t[0](i)}}function he(t,e,n,l){return t[1]&&l?pe(n.ctx.slice(),t[1](l(e))):n.ctx}function ye(t,e,n,l){if(t[2]&&l){const i=t[2](l(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function xe(t,e,n,l,i,r){if(i){const o=he(e,n,l,r);t.p(o,i)}}function Pe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function s(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ne(t){return Array.from(t.childNodes)}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}let te;function K(t){te=t}const V=[],ie=[];let F=[];const re=[],Ee=Promise.resolve();let $=!1;function ke(){$||($=!0,Ee.then(ge))}function ee(t){F.push(t)}const Z=new Set;let U=0;function ge(){if(U!==0)return;const t=te;do{try{for(;U<V.length;){const e=V[U];U++,K(e),Se(e.$$)}}catch(e){throw V.length=0,U=0,e}for(K(null),V.length=0,U=0;ie.length;)ie.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];Z.has(n)||(Z.add(n),n())}F.length=0}while(V.length);for(;re.length;)re.pop()();$=!1,Z.clear(),K(t)}function Se(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}function Ae(t){const e=[],n=[];F.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),F=e}const Q=new Set;let Ie;function L(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function R(t,e,n,l){if(t&&t.o){if(Q.has(t))return;Q.add(t),Ie.c.push(()=>{Q.delete(t)}),t.o(e)}}function se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function T(t){t&&t.c()}function z(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),ee(()=>{const r=t.$$.on_mount.map(de).filter(me);t.$$.on_destroy?t.$$.on_destroy.push(...r):X(r),t.$$.on_mount=[]}),i.forEach(ee)}function D(t,e){const n=t.$$;n.fragment!==null&&(Ae(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(t,e){t.$$.dirty[0]===-1&&(V.push(t),ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,l,i,r,o=null,a=[-1]){const c=te;K(t);const f=t.$$={fragment:null,ctx:[],props:r,update:S,not_equal:i,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:le(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(f.root);let _=!1;if(f.ctx=n?n(t,e.props||{},(h,m,...b)=>{const C=b.length?b[0]:m;return f.ctx&&i(f.ctx[h],f.ctx[h]=C)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](C),_&&Oe(t,h)),m}):[],f.update(),_=!0,X(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){const h=Ne(e.target);f.fragment&&f.fragment.l(h),h.forEach(A)}else f.fragment&&f.fragment.c();e.intro&&L(t.$$.fragment),z(t,e.target,e.anchor),ge()}K(c)}class q{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){D(this,1),this.$destroy=S}$on(e,n){if(!me(n))return S;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const He="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(He);function Le(t){let e,n,l,i,r,o,a,c,f,_,h,m,b,C,x,B,N,I;return{c(){e=d("div"),n=d("h1"),l=y(t[0]),i=v(),r=d("div"),o=d("a"),a=y(t[1]),f=v(),_=d("span"),_.textContent="|",h=v(),m=d("a"),b=y("website"),C=v(),x=d("span"),x.textContent="|",B=v(),N=d("a"),I=y("github"),u(n,"class","text-5xl font-light text-purple-400 tracking-wide mb-4"),u(o,"href",c="mailto:"+t[1]),u(o,"class","hover:text-purple-400"),u(m,"href",t[2]),u(m,"class","hover:text-purple-400"),u(N,"href",t[3]),u(N,"class","hover:text-purple-400"),u(r,"class","text-gray-600 flex justify-center gap-4"),u(e,"class","text-center mb-12")},m(g,p){j(g,e,p),s(e,n),s(n,l),s(e,i),s(e,r),s(r,o),s(o,a),s(r,f),s(r,_),s(r,h),s(r,m),s(m,b),s(r,C),s(r,x),s(r,B),s(r,N),s(N,I)},p(g,[p]){p&1&&k(l,g[0]),p&2&&k(a,g[1]),p&2&&c!==(c="mailto:"+g[1])&&u(o,"href",c),p&4&&u(m,"href",g[2]),p&8&&u(N,"href",g[3])},i:S,o:S,d(g){g&&A(e)}}}function je(t,e,n){let{name:l}=e,{email:i}=e,{website:r}=e,{github:o}=e;return t.$$set=a=>{"name"in a&&n(0,l=a.name),"email"in a&&n(1,i=a.email),"website"in a&&n(2,r=a.website),"github"in a&&n(3,o=a.github)},[l,i,r,o]}class Be extends q{constructor(e){super(),M(this,e,je,Le,J,{name:0,email:1,website:2,github:3})}}function Re(t){let e,n,l,i,r;const o=t[2].default,a=ve(o,t,t[1],null);return{c(){e=d("div"),n=d("h2"),l=y(t[0]),i=v(),a&&a.c(),u(n,"class","text-xl font-bold border-b border-gray-300 mb-4 uppercase"),u(e,"class","mb-8")},m(c,f){j(c,e,f),s(e,n),s(n,l),s(e,i),a&&a.m(e,null),r=!0},p(c,[f]){(!r||f&1)&&k(l,c[0]),a&&a.p&&(!r||f&2)&&xe(a,o,c,c[1],r?ye(o,c[1],f,null):Pe(c[1]),null)},i(c){r||(L(a,c),r=!0)},o(c){R(a,c),r=!1},d(c){c&&A(e),a&&a.d(c)}}}function ze(t,e,n){let{$$slots:l={},$$scope:i}=e,{title:r}=e;return t.$$set=o=>{"title"in o&&n(0,r=o.title),"$$scope"in o&&n(1,i=o.$$scope)},[r,i,l]}class oe extends q{constructor(e){super(),M(this,e,ze,Re,J,{title:0})}}function ae(t){let e,n,l;return{c(){e=d("p"),n=y("Committee: "),l=y(t[4]),u(e,"class","mt-1 text-sm text-black")},m(i,r){j(i,e,r),s(e,n),s(e,l)},p(i,r){r&16&&k(l,i[4])},d(i){i&&A(e)}}}function De(t){let e,n,l,i,r,o,a,c,f,_,h,m,b,C,x,B,N,I,g=t[4]&&ae(t);return{c(){e=d("div"),n=d("div"),l=d("div"),i=d("h3"),r=y(t[0]),o=v(),a=d("p"),c=y(t[1]),f=v(),g&&g.c(),_=v(),h=d("div"),m=d("p"),b=y(t[3]),C=v(),x=d("p"),B=d("i"),N=v(),I=y(t[2]),u(i,"class","text-lg font-bold"),u(a,"class","text-gray-700"),u(m,"class","text-black"),u(B,"class","mr-1 fas fa-map-marker-alt"),u(x,"class","text-black"),u(h,"class","text-right"),u(n,"class","flex items-start justify-between"),u(e,"class","mb-6")},m(p,O){j(p,e,O),s(e,n),s(n,l),s(l,i),s(i,r),s(l,o),s(l,a),s(a,c),s(l,f),g&&g.m(l,null),s(n,_),s(n,h),s(h,m),s(m,b),s(h,C),s(h,x),s(x,B),s(x,N),s(x,I)},p(p,[O]){O&1&&k(r,p[0]),O&2&&k(c,p[1]),p[4]?g?g.p(p,O):(g=ae(p),g.c(),g.m(l,null)):g&&(g.d(1),g=null),O&8&&k(b,p[3]),O&4&&k(I,p[2])},i:S,o:S,d(p){p&&A(e),g&&g.d()}}}function Te(t,e,n){let{school:l}=e,{degree:i}=e,{location:r}=e,{date:o}=e,{committee:a}=e;return t.$$set=c=>{"school"in c&&n(0,l=c.school),"degree"in c&&n(1,i=c.degree),"location"in c&&n(2,r=c.location),"date"in c&&n(3,o=c.date),"committee"in c&&n(4,a=c.committee)},[l,i,r,o,a]}class ce extends q{constructor(e){super(),M(this,e,Te,De,J,{school:0,degree:1,location:2,date:3,committee:4})}}function fe(t,e,n){const l=t.slice();return l[6]=e[n],l}function ue(t){let e,n=t[6]+"",l;return{c(){e=d("li"),l=y(n)},m(i,r){j(i,e,r),s(e,l)},p(i,r){r&32&&n!==(n=i[6]+"")&&k(l,n)},d(i){i&&A(e)}}}function Je(t){let e,n,l,i,r,o,a,c,f,_,h,m,b,C,x,B,N,I,g,p,O,G,W=se(t[5]),E=[];for(let w=0;w<W.length;w+=1)E[w]=ue(fe(t,W,w));return{c(){e=d("div"),n=d("div"),l=d("div"),i=d("h3"),r=y(t[0]),o=v(),a=d("p"),c=y(t[1]),f=y(` |
        `),_=d("a"),h=y(t[4]),m=v(),b=d("div"),C=d("p"),x=y(t[3]),B=v(),N=d("p"),I=d("i"),g=v(),p=y(t[2]),O=v(),G=d("ul");for(let w=0;w<E.length;w+=1)E[w].c();u(i,"class","font-bold"),u(_,"href",t[4]),u(_,"class","text-purple-400 hover:text-purple-500"),u(a,"class","text-gray-700"),u(C,"class","text-black"),u(I,"class","mr-1 fas fa-map-marker-alt"),u(N,"class","text-black"),u(b,"class","text-right"),u(n,"class","flex items-start justify-between"),u(G,"class","mt-2 ml-5 text-sm text-gray-700 list-disc"),u(e,"class","mb-6")},m(w,H){j(w,e,H),s(e,n),s(n,l),s(l,i),s(i,r),s(l,o),s(l,a),s(a,c),s(a,f),s(a,_),s(_,h),s(n,m),s(n,b),s(b,C),s(C,x),s(b,B),s(b,N),s(N,I),s(N,g),s(N,p),s(e,O),s(e,G);for(let P=0;P<E.length;P+=1)E[P]&&E[P].m(G,null)},p(w,[H]){if(H&1&&k(r,w[0]),H&2&&k(c,w[1]),H&16&&k(h,w[4]),H&16&&u(_,"href",w[4]),H&8&&k(x,w[3]),H&4&&k(p,w[2]),H&32){W=se(w[5]);let P;for(P=0;P<W.length;P+=1){const ne=fe(w,W,P);E[P]?E[P].p(ne,H):(E[P]=ue(ne),E[P].c(),E[P].m(G,null))}for(;P<E.length;P+=1)E[P].d(1);E.length=W.length}},i:S,o:S,d(w){w&&A(e),Ce(E,w)}}}function Me(t,e,n){let{title:l}=e,{organization:i}=e,{location:r}=e,{date:o}=e,{website:a}=e,{details:c}=e;return t.$$set=f=>{"title"in f&&n(0,l=f.title),"organization"in f&&n(1,i=f.organization),"location"in f&&n(2,r=f.location),"date"in f&&n(3,o=f.date),"website"in f&&n(4,a=f.website),"details"in f&&n(5,c=f.details)},[l,i,r,o,a,c]}class qe extends q{constructor(e){super(),M(this,e,Me,Je,J,{title:0,organization:1,location:2,date:3,website:4,details:5})}}function We(t){let e,n,l,i,r;return{c(){e=d("div"),n=d("h2"),n.textContent="Research Interests",l=v(),i=d("p"),r=y(t[0]),u(n,"class","text-xl font-bold border-b border-gray-300 mb-4 uppercase"),u(i,"class","text-gray-700 leading-relaxed"),u(e,"class","mb-8")},m(o,a){j(o,e,a),s(e,n),s(e,l),s(e,i),s(i,r)},p(o,[a]){a&1&&k(r,o[0])},i:S,o:S,d(o){o&&A(e)}}}function Ue(t,e,n){let{description:l}=e;return t.$$set=i=>{"description"in i&&n(0,l=i.description)},[l]}class Ve extends q{constructor(e){super(),M(this,e,Ue,We,J,{description:0})}}function Fe(t){let e,n,l,i;return e=new ce({props:{school:"Dartmouth College",degree:"Ph.D. Candidate in Cognitive Neuroscience",location:"Hanover, NH",date:"Jan 2021 — Present",committee:"Luke J. Chang, Jonathan S. Phillips, Thalia Wheatley, & Robert D. Hawkins"}}),l=new ce({props:{school:"Brown University",degree:"B.S., Cognitive Neuroscience (Honors)",location:"Providence, RI",date:"2014 — 2018"}}),{c(){T(e.$$.fragment),n=v(),T(l.$$.fragment)},m(r,o){z(e,r,o),j(r,n,o),z(l,r,o),i=!0},p:S,i(r){i||(L(e.$$.fragment,r),L(l.$$.fragment,r),i=!0)},o(r){R(e.$$.fragment,r),R(l.$$.fragment,r),i=!1},d(r){r&&A(n),D(e,r),D(l,r)}}}function Ge(t){let e,n;return e=new qe({props:{title:"Graduate Student Researcher",organization:"Dartmouth College | Dept. of Psychological & Brain Sciences (PBS)",location:"Hanover, NH",date:"Jan 2021 — Present",website:"cosanlab.com",details:["Research focuses: shared reality/experience, collaboration, communication, theory of mind, dyadic & group social interactions, NLP, Bayesian inference"]}}),{c(){T(e.$$.fragment)},m(l,i){z(e,l,i),n=!0},p:S,i(l){n||(L(e.$$.fragment,l),n=!0)},o(l){R(e.$$.fragment,l),n=!1},d(l){D(e,l)}}}function Ke(t){let e,n,l,i,r,o,a,c,f,_,h;return i=new Be({props:{name:"WASITA MAHAPHANIT",email:"wasita.gr@dartmouth.edu",website:"website",github:"github"}}),o=new Ve({props:{description:"How can we effectively collaborate with others and enhance our understanding of the world, given our unique viewpoints and incomplete access to information? In other words, how do we adaptively interact with others and improve our mental models of the world in the face of uncertainty? What role does communication and other types of interaction play in this collaborative effort, and how are these processes computationally supported? To investigate these questions, I primarily use large-scale real-time online behavioral experiments, natural language processing (NLP), and computational modeling."}}),c=new oe({props:{title:"Education",$$slots:{default:[Fe]},$$scope:{ctx:t}}}),_=new oe({props:{title:"Research Experience",$$slots:{default:[Ge]},$$scope:{ctx:t}}}),{c(){e=d("div"),n=d("div"),l=d("div"),T(i.$$.fragment),r=v(),T(o.$$.fragment),a=v(),T(c.$$.fragment),f=v(),T(_.$$.fragment),u(l,"id","cv-content"),u(l,"class","p-12"),u(n,"class","max-w-[21cm] mx-auto bg-white shadow-lg"),u(e,"class","min-h-screen px-4 py-8 bg-gray-100")},m(m,b){j(m,e,b),s(e,n),s(n,l),z(i,l,null),s(l,r),z(o,l,null),s(l,a),z(c,l,null),s(l,f),z(_,l,null),h=!0},p(m,[b]){const C={};b&1&&(C.$$scope={dirty:b,ctx:m}),c.$set(C);const x={};b&1&&(x.$$scope={dirty:b,ctx:m}),_.$set(x)},i(m){h||(L(i.$$.fragment,m),L(o.$$.fragment,m),L(c.$$.fragment,m),L(_.$$.fragment,m),h=!0)},o(m){R(i.$$.fragment,m),R(o.$$.fragment,m),R(c.$$.fragment,m),R(_.$$.fragment,m),h=!1},d(m){m&&A(e),D(i),D(o),D(c),D(_)}}}class Qe extends q{constructor(e){super(),M(this,e,null,Ke,J,{})}}function Xe(t){let e,n,l;return n=new Qe({}),{c(){e=d("main"),T(n.$$.fragment)},m(i,r){j(i,e,r),z(n,e,null),l=!0},p:S,i(i){l||(L(n.$$.fragment,i),l=!0)},o(i){R(n.$$.fragment,i),l=!1},d(i){i&&A(e),D(n)}}}class Ye extends q{constructor(e){super(),M(this,e,null,Xe,J,{})}}new Ye({target:document.getElementById("app")});
