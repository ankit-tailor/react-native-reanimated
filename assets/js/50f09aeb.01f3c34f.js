"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8355],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,f=p["".concat(d,".").concat(c)]||p[c]||u[c]||o;return n?i.createElement(f,r(r({ref:t},m),{},{components:n})):i.createElement(f,r({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var i=n(3117),a=(n(7294),n(3905));const o={id:"layoutTransitions",title:"Layout Transitions",sidebar_label:"Layout Transitions"},r=void 0,l={unversionedId:"api/LayoutAnimations/layoutTransitions",id:"api/LayoutAnimations/layoutTransitions",title:"Layout Transitions",description:"The document explains how can you animate all layout changes for a specific view just by adding a single property to the view.",source:"@site/docs/api/LayoutAnimations/LayoutTransitions.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/layoutTransitions",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/layoutTransitions",draft:!1,tags:[],version:"current",frontMatter:{id:"layoutTransitions",title:"Layout Transitions",sidebar_label:"Layout Transitions"},sidebar:"docs",previous:{title:"Keyframe Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/keyframeAnimations"},next:{title:"measure",permalink:"/react-native-reanimated/docs/next/api/nativeMethods/measure"}},d={},s=[{value:"How to use predefined layout transition?",id:"how-to-use-predefined-layout-transition",level:2},{value:"1. Import chosen transition",id:"1-import-chosen-transition",level:3},{value:"2. Choose Animated Component which layout you want to animate",id:"2-choose-animated-component-which-layout-you-want-to-animate",level:3},{value:"3. Customize the animation",id:"3-customize-the-animation",level:3},{value:"Predefined Transitions",id:"predefined-transitions",level:2},{value:"Layout",id:"layout",level:3},{value:"Modifiers",id:"modifiers",level:4},{value:"Example",id:"example",level:4},{value:"Sequenced Transition",id:"sequenced-transition",level:3},{value:"Modifiers",id:"modifiers-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Fading Transition",id:"fading-transition",level:3},{value:"Modifiers",id:"modifiers-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Jumping Transition",id:"jumping-transition",level:3},{value:"Modifiers",id:"modifiers-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Curved Transition",id:"curved-transition",level:3},{value:"Modifiers",id:"modifiers-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Entry/Exit Transition",id:"entryexit-transition",level:3},{value:"Modifiers",id:"modifiers-5",level:4},{value:"Combine Transition",id:"combine-transition",level:4},{value:"Usage",id:"usage",level:5},{value:"Example",id:"example-5",level:4}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The document explains how can you animate all layout changes for a specific view just by adding a single property to the view.\nTo be precise how to animate positions and dimensions of components. What's important it will all happen entirely on UI thread without any communication through the bridge. There are plenty of ways in which you can animated layout changes however in contrast to entering and exiting animations they are not so regular. We've prepared a few predefined layout transitions, however if you want to create more custom and complex transition you can create your own."),(0,a.kt)("h2",{id:"how-to-use-predefined-layout-transition"},"How to use predefined layout transition?"),(0,a.kt)("h3",{id:"1-import-chosen-transition"},"1. Import chosen transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    // Transition is just an example and should be replaced by real animation. For Instance Layout\n    import { Transition } from 'react-native-reanimated';\n")),(0,a.kt)("h3",{id:"2-choose-animated-component-which-layout-you-want-to-animate"},"2. Choose Animated Component which layout you want to animate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    // AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n    <AnimatedComponent layout={Transition} >\n")),(0,a.kt)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),(0,a.kt)("p",null,"Different type of layout transitions can be customized differently. For the complete list of option please refer to the paragraph specific to the particular animation type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    <AnimatedComponent layout={Transition.duration(3000).otherModifier()} >\n")),(0,a.kt)("h2",{id:"predefined-transitions"},"Predefined Transitions"),(0,a.kt)("p",null,"Below we listed all of the currently available predefined layout transitions. Each transition contains all of its modifiers and a video presenting what it looks like when applied to a waterfall grid."),(0,a.kt)("p",null,"If you cannot find an transition that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request."),(0,a.kt)("h3",{id:"layout"},"Layout"),(0,a.kt)("p",null,"Linear transition, animates both position and dimension in the same way."),(0,a.kt)("h4",{id:"modifiers"},"Modifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,a.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/134476174-f7e2f5d6-4247-4f7e-8b84-7f41fca988b9.mov",controls:"controls",muted:"muted",height:"600"}),(0,a.kt)("h3",{id:"sequenced-transition"},"Sequenced Transition"),(0,a.kt)("p",null,"Sequenced transition, animates firstly x-position and width, then later y-position and height."),(0,a.kt)("h4",{id:"modifiers-1"},"Modifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reverse")," reverse order of the animation ( first animates y-dimension and height)")),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/134477204-168feed8-1846-4d43-8158-cdb16db180e2.mov",controls:"controls",muted:"muted",height:"600"}),(0,a.kt)("h3",{id:"fading-transition"},"Fading Transition"),(0,a.kt)("p",null,"Fading transition, animates the opacity of component, so it will disappear with previous position and dimensions and appear with new ones."),(0,a.kt)("h4",{id:"modifiers-2"},"Modifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/134477879-e697aa03-b94d-4a65-b076-5ec3800310e3.mov",controls:"controls",muted:"muted",height:"600"}),(0,a.kt)("h3",{id:"jumping-transition"},"Jumping Transition"),(0,a.kt)("p",null,'Jumping transition, component "jumps" to the new position.'),(0,a.kt)("h4",{id:"modifiers-3"},"Modifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/134478585-71c601ae-137f-44e4-a58f-4bb6b60f6bdf.mov",controls:"controls",muted:"muted",height:"600"}),(0,a.kt)("h3",{id:"curved-transition"},"Curved Transition"),(0,a.kt)("p",null,"Curved transition, enables to animate each position and dimension with different easing which makes components animation curved."),(0,a.kt)("h4",{id:"modifiers-4"},"Modifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"easingX")," provides Easing for x-position ( default: ",(0,a.kt)("inlineCode",{parentName:"li"},"Easing.in(Easing.ease)"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"easingY")," provides Easing for y-position ( default: ",(0,a.kt)("inlineCode",{parentName:"li"},"Easing.out(Easing.ease)"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"easingWidth")," provides Easing for width ( default: ",(0,a.kt)("inlineCode",{parentName:"li"},"Easing.in(Easing.exp)"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"easingHeight")," provides Easing for height ( default: ",(0,a.kt)("inlineCode",{parentName:"li"},"Easing.out(Easing.exp)"),")")),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/134479266-5c7342f5-7453-4389-a6c5-5070e3673822.mov",controls:"controls",muted:"muted",height:"600"}),(0,a.kt)("h3",{id:"entryexit-transition"},"Entry/Exit Transition"),(0,a.kt)("p",null,"Entry/Exit transition, lets you specify different animations for exiting from the current position and different animations for entering the new position with new dimensions. You can use all available predefined entering/entering animation or create your own one. Its duration equals the duration sum of entering and exiting. Also, be aware that you cannot use spring animations as entering or exiting as they don't have a fixed duration."),(0,a.kt)("h4",{id:"modifiers-5"},"Modifiers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entering")," animation that will be used for component entering ( default: ",(0,a.kt)("inlineCode",{parentName:"li"},"FadeIn"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exiting"),"  animation that will be used for component exiting ( default: ",(0,a.kt)("inlineCode",{parentName:"li"},"FadeOut"),")")),(0,a.kt)("h4",{id:"combine-transition"},"Combine Transition"),(0,a.kt)("p",null,"To make usage of that transition simplier we have prepared function ",(0,a.kt)("inlineCode",{parentName:"p"},"combineTransition")," that will make your code look cleaner and shorter."),(0,a.kt)("h5",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    // you can change ExitingAnimation and EnteringAnimation for any predefined animation you would like\n    // you can apply modifier (i.ex. delay()) on the object that this function returns\n    combineTransition(ExitingAnimation, EnteringAnimation).modifier()\n")),(0,a.kt)("h4",{id:"example-5"},"Example"),(0,a.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/134480769-4be2c194-4392-483f-a9db-f48bac5e546c.mov",controls:"controls",muted:"muted",height:"600"}))}u.isMDXComponent=!0}}]);