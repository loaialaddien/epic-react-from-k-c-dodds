(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[19],{179:function(a,n,e){"use strict";e.r(n),e.d(n,"readingTime",(function(){return p})),e.d(n,"default",(function(){return c})),e.d(n,"tableOfContents",(function(){return r})),e.d(n,"frontMatter",(function(){return l}));var t=e(33),s=(e(1),e(210)),p={text:"5 min read",minutes:4.03,time:241800,words:806},o={};function c(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(s.a)("wrapper",Object.assign({},o,e,{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"creating-custom-components"},"Creating custom components"),Object(s.a)("h2",{id:"-your-notes"},"\ud83d\udcdd Your Notes"),Object(s.a)("p",null,"Elaborate on your learnings here in ",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/04.md")),Object(s.a)("h2",{id:"background"},"Background"),Object(s.a)("p",null,"Just like in regular JavaScript, you often want to share code which you do using\nfunctions. If you want to share JSX, you can do that as well. In React we call\nthese functions \u201ccomponents\u201d and they have some special properties."),Object(s.a)("p",null,"Components are basically functions which return something that is \u201crenderable\u201d\n(more React elements, strings, ",Object(s.a)("inlineCode",{parentName:"p"},"null"),", numbers, etc.)"),Object(s.a)("h2",{id:"exercise"},"Exercise"),Object(s.a)("p",null,"Production deploys:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/exercise/04.html"},"Exercise")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/final/04.html"},"Final"))),Object(s.a)("p",null,"Let\u2019s say the DOM we want to generate is like this:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Goodbye World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"In this case, it would be cool if we could reduce the duplication for creating\nthe React elements for this:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"So we need to make a function which accepts the ",Object(s.a)("inlineCode",{parentName:"p"},"children")," as an argument and\nreturns the React element. Then you can interpolate a call to that function in\nyour JSX."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"This is not how we write custom React components, but this is important for you\nto understand them. We\u2019ll get to custom components in the extra credit."),Object(s.a)("p",null,"\ud83d\udcdc Read more"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"https://reactjs.org/docs/jsx-in-depth.html"},"https://reactjs.org/docs/jsx-in-depth.html")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"https://kentcdodds.com/blog/what-is-jsx"},"https://kentcdodds.com/blog/what-is-jsx"))),Object(s.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(s.a)("h3",{id:"1--using-a-custom-component-with-reactcreateelement"},"1. \ud83d\udcaf using a custom component with React.createElement"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/04.extra-1.html"},"Production deploy")),Object(s.a)("p",null,"So far we\u2019ve only used ",Object(s.a)("inlineCode",{parentName:"p"},"React.createElement(someString)"),", but the first argument\nto ",Object(s.a)("inlineCode",{parentName:"p"},"React.createElement")," can also be a function which returns something that\u2019s\nrenderable."),Object(s.a)("p",null,"So instead of calling your ",Object(s.a)("inlineCode",{parentName:"p"},"message")," function, pass it as the first argument to\n",Object(s.a)("inlineCode",{parentName:"p"},"React.createElement")," and pass the ",Object(s.a)("inlineCode",{parentName:"p"},"{children: 'Hello World'}")," object as the\nsecond argument."),Object(s.a)("h3",{id:"2--using-a-custom-component-with-jsx"},"2. \ud83d\udcaf using a custom component with JSX"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/04.extra-2.html"},"Production deploy")),Object(s.a)("p",null,"We\u2019re so close! Just like using JSX for regular ",Object(s.a)("inlineCode",{parentName:"p"},"div"),"s is nicer than using the\nraw ",Object(s.a)("inlineCode",{parentName:"p"},"React.createElement")," API, using JSX for custom components is nicer too.\nRemember that it\u2019s Babel that\u2019s responsible for taking our JSX and compiling it\nto ",Object(s.a)("inlineCode",{parentName:"p"},"React.createElement")," calls so we just need a way to tell Babel how to\ncompile our JSX so it passes the function by its name rather than a string."),Object(s.a)("p",null,"We do this by how the JSX appears. Here are a few examples of Babel output for\nJSX:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'ui <span class="token operator">=</span> <span class="token operator">&lt;</span>Capitalized <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(Capitalized)</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>property<span class="token punctuation">.</span>access <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(property.access)</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>Property<span class="token punctuation">.</span>Access <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(Property.Access)</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>Property<span class="token punctuation">[</span><span class="token string">\'Access\'</span><span class="token punctuation">]</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// SyntaxError</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>lowercase <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(\'lowercase\')</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>kebab<span class="token operator">-</span><span class="token keyword">case</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(\'kebab-case\')</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>Upper<span class="token operator">-</span>Kebab<span class="token operator">-</span>Case <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(\'Upper-Kebab-Case\')</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>Upper_Snake_Case <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(Upper_Snake_Case)</span>\nui <span class="token operator">=</span> <span class="token operator">&lt;</span>lower_snake_case <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">// React.createElement(\'lower_snake_case\')</span>\n'}})),Object(s.a)("p",null,"See if you can change your component function name so people can use it with JSX\nmore easily!"),Object(s.a)("h3",{id:"3--runtime-validation-with-proptypes"},"3. \ud83d\udcaf Runtime validation with PropTypes"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/04.extra-3.html"},"Production deploy")),Object(s.a)("p",null,"Let\u2019s change the Message component a little bit. Make it look like this now:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">Message</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>subject<span class="token punctuation">,</span> greeting<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"message"</span><span class="token operator">></span>\n      <span class="token punctuation">{</span>greeting<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>subject<span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("p",null,"So now we\u2019ll use it like this:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token operator">&lt;</span>Message greeting<span class="token operator">=</span><span class="token string">"Hello"</span> subject<span class="token operator">=</span><span class="token string">"World"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>Message greeting<span class="token operator">=</span><span class="token string">"Goodbye"</span> subject<span class="token operator">=</span><span class="token string">"World"</span> <span class="token operator">/</span><span class="token operator">></span>\n'}})),Object(s.a)("p",null,"What happens if I forget to pass the ",Object(s.a)("inlineCode",{parentName:"p"},"greeting")," or ",Object(s.a)("inlineCode",{parentName:"p"},"subject")," props? It\u2019s not\ngoing to render properly. We\u2019ll end up with a dangling comma somewhere. It would\nbe nice if we got some sort of indication that we passed the wrong value to the\ncomponent. This is what the ",Object(s.a)("inlineCode",{parentName:"p"},"propTypes")," feature is for. Here\u2019s an example of how\nyou use ",Object(s.a)("inlineCode",{parentName:"p"},"propTypes"),":"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">FavoriteNumber</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>favoriteNumber<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>My favorite number is<span class="token operator">:</span> <span class="token punctuation">{</span>favoriteNumber<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> PropTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">number</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Some useful error message here\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\nFavoriteNumber<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  favoriteNumber<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("p",null,"With that, if I do this:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token operator">&lt;</span>FavoriteNumber favoriteNumber<span class="token operator">=</span><span class="token string">"not a number"</span> <span class="token operator">/</span><span class="token operator">></span>\n'}})),Object(s.a)("p",null,"I\u2019ll get an error in the console."),Object(s.a)("p",null,"For this extra credit, add ",Object(s.a)("inlineCode",{parentName:"p"},"propTypes")," support to your updated component\n(remember to update it to have the subject and greeting)."),Object(s.a)("p",null,"\ud83e\udd89 Note that prop types add some runtime overhead resulting in sub-optimal\nperformance, so they are not run in production."),Object(s.a)("p",null,"\ud83d\udcdc Read more about prop-types:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"https://reactjs.org/docs/typechecking-with-proptypes.html"},"https://reactjs.org/docs/typechecking-with-proptypes.html"))),Object(s.a)("h3",{id:"4--use-the-prop-types-package"},"4. \ud83d\udcaf Use the prop-types package"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/04.extra-4.html"},"Production deploy")),Object(s.a)("p",null,"As it turns out, there are some pretty common things you\u2019d want to validate, so\nthe React team maintains a package of these called\n",Object(s.a)("a",{parentName:"p",href:"https://npm.im/prop-types"},Object(s.a)("inlineCode",{parentName:"a"},"prop-types")),". Go ahead and get that added to the\npage by adding a script tag for it:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/prop-types@15.7.2/prop-types.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"Then use that package instead of writing it yourself. Also, make use of the\n",Object(s.a)("inlineCode",{parentName:"p"},"isRequired")," feature!"),Object(s.a)("h3",{id:"5--using-react-fragments"},"5. \ud83d\udcaf using React Fragments"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/04.extra-5.html"},"Production deploy")),Object(s.a)("p",null,"One feature of JSX that you\u2019ll find useful is called\n",Object(s.a)("a",{parentName:"p",href:"https://reactjs.org/docs/fragments.html"},"\u201cReact Fragments\u201d"),". It\u2019s a special\nkind of component from React which allows you to position two elements\nside-by-side rather than just nested."),Object(s.a)("p",null,"The component is available via ",Object(s.a)("inlineCode",{parentName:"p"},"<React.Fragment>"),". Replace the\n",Object(s.a)("inlineCode",{parentName:"p"},'<div className="container">')," with a fragment and inspect the DOM to notice that\nthe elements are both rendered as direct children of ",Object(s.a)("inlineCode",{parentName:"p"},"root"),"."),Object(s.a)("h2",{id:"\ud83e\udd89-feedback"},"\ud83e\udd89 Feedback"),Object(s.a)("p",null,"Fill out\n",Object(s.a)("a",{parentName:"p",href:"https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=04%3A%20Creating%20custom%20components&em="},"the feedback form"),"."))}c.isMDXComponent=!0;var r=function(){return[{id:"-your-notes",level:2,title:"\ud83d\udcdd Your Notes",children:[]},{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"1--using-a-custom-component-with-reactcreateelement",level:3,title:"1. \ud83d\udcaf using a custom component with React.createElement",children:[]},{id:"2--using-a-custom-component-with-jsx",level:3,title:"2. \ud83d\udcaf using a custom component with JSX",children:[]},{id:"3--runtime-validation-with-proptypes",level:3,title:"3. \ud83d\udcaf Runtime validation with PropTypes",children:[]},{id:"4--use-the-prop-types-package",level:3,title:"4. \ud83d\udcaf Use the prop-types package",children:[]},{id:"5--using-react-fragments",level:3,title:"5. \ud83d\udcaf using React Fragments",children:[]}]},{id:"\ud83e\udd89-feedback",level:2,title:"\ud83e\udd89 Feedback",children:[]}]},l={}},210:function(a,n,e){"use strict";e.d(n,"a",(function(){return d}));var t=e(1),s=e.n(t);function p(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function o(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function c(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){p(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function r(a,n){if(null==a)return{};var e,t,s=function(a,n){if(null==a)return{};var e,t,s={},p=Object.keys(a);for(t=0;t<p.length;t++)e=p[t],n.indexOf(e)>=0||(s[e]=a[e]);return s}(a,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(t=0;t<p.length;t++)e=p[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var l=s.a.createContext({}),i=function(a){var n=s.a.useContext(l),e=n;return a&&(e="function"===typeof a?a(n):c(c({},n),a)),e},u={inlineCode:"code",wrapper:function(a){var n=a.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,p=a.originalType,o=a.parentName,l=r(a,["components","mdxType","originalType","parentName"]),m=i(e),d=t,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return e?s.a.createElement(k,c(c({ref:n},l),{},{components:e})):s.a.createElement(k,c({ref:n},l))}));function d(a,n){var e=arguments,t=n&&n.mdxType;if("string"===typeof a||t){var p=e.length,o=new Array(p);o[0]=m;var c={};for(var r in n)hasOwnProperty.call(n,r)&&(c[r]=n[r]);c.originalType=a,c.mdxType="string"===typeof a?a:t,o[1]=c;for(var l=2;l<p;l++)o[l]=e[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,e)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=19.4656fcde.chunk.js.map