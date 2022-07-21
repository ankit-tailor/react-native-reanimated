"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4202],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||s[p]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},o=void 0,l={unversionedId:"api/animations/withDelay",id:"api/animations/withDelay",title:"withDelay",description:"Allows for the provided animation to start with a specified delay.",source:"@site/docs/api/animations/withDelay.md",sourceDirName:"api/animations",slug:"/api/animations/withDelay",permalink:"/react-native-reanimated/docs/next/api/animations/withDelay",draft:!1,tags:[],version:"current",frontMatter:{id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},sidebar:"docs",previous:{title:"withDecay",permalink:"/react-native-reanimated/docs/next/api/animations/withDecay"},next:{title:"withRepeat",permalink:"/react-native-reanimated/docs/next/api/animations/withRepeat"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>delayMS</code> number",id:"delayms-number",level:4},{value:"<code>delayedAnimation</code> animation",id:"delayedanimation-animation",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows for the provided animation to start with a specified delay."),(0,r.kt)("p",null,"In case the value for which we are starting the delayed animation is running a previous animation, that animation won't be cancelled until the new animation starts after the delay.\nIf you want the animation to cancel immediately, use ",(0,r.kt)("a",{parentName:"p",href:"cancelAnimation"},(0,r.kt)("inlineCode",{parentName:"a"},"cancelAnimation"))," method."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"delayms-number"},(0,r.kt)("inlineCode",{parentName:"h4"},"delayMS")," ","[number]"),(0,r.kt)("p",null,"Delay in milliseconds after which we want the provided animation to start."),(0,r.kt)("h4",{id:"delayedanimation-animation"},(0,r.kt)("inlineCode",{parentName:"h4"},"delayedAnimation")," ","[animation]"),(0,r.kt)("p",null,"The animation that will be started after the delay."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"../hooks/useAnimatedStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Timing animation will start on the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedValue")," after one second."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withDelay(1000, withTiming(70));\n")))}s.isMDXComponent=!0}}]);