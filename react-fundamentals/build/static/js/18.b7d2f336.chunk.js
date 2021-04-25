(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[18],{177:function(n,e,a){"use strict";a.r(e),a.d(e,"readingTime",(function(){return o})),a.d(e,"default",(function(){return r})),a.d(e,"tableOfContents",(function(){return c})),a.d(e,"frontMatter",(function(){return l}));var t=a(33),s=(a(1),a(210)),o={text:"3 min read",minutes:2.44,time:146400,words:488},p={};function r(n){var e=n.components,a=Object(t.a)(n,["components"]);return Object(s.a)("wrapper",Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"using-jsx"},"Using JSX"),Object(s.a)("h2",{id:"-your-notes"},"\ud83d\udcdd Your Notes"),Object(s.a)("p",null,"Elaborate on your learnings here in ",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/03.md")),Object(s.a)("h2",{id:"background"},"Background"),Object(s.a)("p",null,"JSX is more intuitive than the raw React API and is easier to understand when\nreading the code. It\u2019s fairly simple HTML-like syntactic sugar on top of the raw\nReact APIs:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> ui <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hey there</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\n<span class="token comment">// \u2193 \u2193 \u2193 \u2193 compiles to \u2193 \u2193 \u2193 \u2193</span>\n\n<span class="token keyword">const</span> ui <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'h1\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token string">\'Hey there\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Because JSX is not actually JavaScript, you have to convert it using something\ncalled a code compiler. ",Object(s.a)("a",{parentName:"p",href:"https://babeljs.io"},"Babel")," is one such tool."),Object(s.a)("p",null,"\ud83e\udd89 Pro tip: If you\u2019d like to see how JSX gets compiled to JavaScript,\n",Object(s.a)("a",{parentName:"p",href:"https://babeljs.io/repl#?builtIns=App&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&presets=react&prettier=true"},"check out the online babel REPL here"),"."),Object(s.a)("p",null,"If you can train your brain to look at JSX and see the compiled version of that\ncode, you\u2019ll be MUCH more effective at reading and using it! I strongly\nrecommend you give this some intentional practice."),Object(s.a)("h2",{id:"exercise"},"Exercise"),Object(s.a)("p",null,"Production deploys:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/exercise/03.html"},"Exercise")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/final/03.html"},"Final"))),Object(s.a)("p",null,"Normally you\u2019ll compile all of your code at build-time before you ship your\napplication to the browser, but because Babel is written in JavaScript we can\nactually run it ",Object(s.a)("em",{parentName:"p"},"in")," the browser to compile our code on the fly and that\u2019s what\nwe\u2019ll do in this exercise."),Object(s.a)("p",null,"So we\u2019ll include a script tag for Babel, then we\u2019ll update our own script tag to\ntell Babel to compile it for us on the fly. When you\u2019re done, you should notice\nthe compiled version of the code appears in the ",Object(s.a)("inlineCode",{parentName:"p"},"<head>")," of the DOM (which you\ncan inspect using DevTools)."),Object(s.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(s.a)("h3",{id:"1--interpolate-classname-and-children"},"1. \ud83d\udcaf interpolate className and children"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/03.extra-1.html"},"Production deploy")),Object(s.a)("p",null,'\u201cInterpolation\u201d is defined as "the insertion of something of a different nature\ninto something else."'),Object(s.a)("p",null,"Let\u2019s take template literals for example:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">\'Sup\'</span>\n<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token string">\'World\'</span>\n<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>greeting<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>subject<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n'}})),Object(s.a)("p",null,"See if you can figure out how to extract the ",Object(s.a)("inlineCode",{parentName:"p"},"className")," (",Object(s.a)("inlineCode",{parentName:"p"},'"container"'),") and\n",Object(s.a)("inlineCode",{parentName:"p"},"children")," (",Object(s.a)("inlineCode",{parentName:"p"},'"Hello World"'),") to variables and interpolate them in the JSX."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> className <span class="token operator">=</span> <span class="token string">\'container\'</span>\n<span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token string">\'Hello World\'</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hmmm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">how do I make this work?</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"\ud83d\udcdc The react docs for JSX are pretty good:\n",Object(s.a)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"https://reactjs.org/docs/introducing-jsx.html")),Object(s.a)("p",null,"Here are a few sections of particular interest for this extra credit:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx"},"https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx"},"https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx"))),Object(s.a)("h3",{id:"2--spread-props"},"2. \ud83d\udcaf spread props"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/03.extra-2.html"},"Production deploy")),Object(s.a)("p",null,"What if I have an object of props that I want applied to the ",Object(s.a)("inlineCode",{parentName:"p"},"div")," like this:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token string">\'Hello World\'</span>\n<span class="token keyword">const</span> className <span class="token operator">=</span> <span class="token string">\'container\'</span>\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>children<span class="token punctuation">,</span> className<span class="token punctuation">}</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span> <span class="token comment">// how do I apply props to this div?</span>\n'}})),Object(s.a)("p",null,"If we were doing raw React APIs it would be:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Or, it could be written like this:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"See if you can figure out how to make that work with JSX."),Object(s.a)("p",null,"\ud83d\udcdc ",Object(s.a)("a",{parentName:"p",href:"https://reactjs.org/docs/jsx-in-depth.html#spread-attributes"},"https://reactjs.org/docs/jsx-in-depth.html#spread-attributes")),Object(s.a)("h2",{id:"\ud83e\udd89-feedback"},"\ud83e\udd89 Feedback"),Object(s.a)("p",null,"Fill out\n",Object(s.a)("a",{parentName:"p",href:"https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=03%3A%20Using%20JSX&em="},"the feedback form"),"."))}r.isMDXComponent=!0;var c=function(){return[{id:"-your-notes",level:2,title:"\ud83d\udcdd Your Notes",children:[]},{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"1--interpolate-classname-and-children",level:3,title:"1. \ud83d\udcaf interpolate className and children",children:[]},{id:"2--spread-props",level:3,title:"2. \ud83d\udcaf spread props",children:[]}]},{id:"\ud83e\udd89-feedback",level:2,title:"\ud83e\udd89 Feedback",children:[]}]},l={}},210:function(n,e,a){"use strict";a.d(e,"a",(function(){return h}));var t=a(1),s=a.n(t);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function p(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function c(n,e){if(null==n)return{};var a,t,s=function(n,e){if(null==n)return{};var a,t,s={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(s[a]=n[a]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}var l=s.a.createContext({}),i=function(n){var e=s.a.useContext(l),a=e;return n&&(a="function"===typeof n?n(e):r(r({},e),n)),a},u={inlineCode:"code",wrapper:function(n){var e=n.children;return s.a.createElement(s.a.Fragment,{},e)}},d=s.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,o=n.originalType,p=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),d=i(a),h=t,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return a?s.a.createElement(m,r(r({ref:e},l),{},{components:a})):s.a.createElement(m,r({ref:e},l))}));function h(n,e){var a=arguments,t=e&&e.mdxType;if("string"===typeof n||t){var o=a.length,p=new Array(o);p[0]=d;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=n,r.mdxType="string"===typeof n?n:t,p[1]=r;for(var l=2;l<o;l++)p[l]=a[l];return s.a.createElement.apply(null,p)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=18.b7d2f336.chunk.js.map