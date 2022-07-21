"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4397],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},o=void 0,l={unversionedId:"api/useAnimatedStyle",id:"version-2.1.x/api/useAnimatedStyle",title:"useAnimatedStyle",description:"This hook is one of the main elements of the new Reanimated v2 API.",source:"@site/versioned_docs/version-2.1.x/api/useAnimatedStyle.md",sourceDirName:"api",slug:"/api/useAnimatedStyle",permalink:"/react-native-reanimated/docs/2.1.x/api/useAnimatedStyle",draft:!1,tags:[],version:"2.1.x",frontMatter:{id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},sidebar:"version-2.1.x/docs",previous:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/2.1.x/api/useAnimatedScrollHandler"},next:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/2.1.x/api/useDerivedValue"}},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>updater</code> Function",id:"updater-function",level:4},{value:"<code>dependencies</code> Array",id:"dependencies-array",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This hook is one of the main elements of the new Reanimated v2 API.\nIt allows for creating an association between shared values and View properties."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"updater-function"},(0,r.kt)("inlineCode",{parentName:"h4"},"updater")," ","[Function]"),(0,r.kt)("p",null,"Single worklet which is responsible for returning an object with view style properties."),(0,r.kt)("h4",{id:"dependencies-array"},(0,r.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,r.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9}","{9}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(state);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: sv.value,\n    };\n  }, dependencies);\n  //...\n  return <></>;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in it's body or any values from it's closure(variables from outer scope used in worklet),"),(0,r.kt)("li",{parentName:"ul"},"empty array(",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if it's body changes,"),(0,r.kt)("li",{parentName:"ul"},"array of values(",(0,r.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in it's body or any values from the given array.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Animated style - in order to connect the animated style hook result, you need to pass it as one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," properties to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.View"),").\nIn React Native, View's ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," property can take an array of styles, which gives you a way to mix static and dynamic styles.\nWe recommend that you defined static styles using React Native's ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/stylesheet"},(0,r.kt)("inlineCode",{parentName:"a"},"StyleSheet")," API")," and pass them along the animated styles object returned by this hook.\nIt is more efficient to only keep styles that are actually changed as a result of animation in the animated style hook, and the rest of the styles should be either provided as inline objects or using StyleSheets."),(0,r.kt)("p",null,"If the style worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),(0,r.kt)("p",null,"For the list of available properties you can refer to the React Native core documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view-style-props"},"View Style Props"),". You may also want to check React Native's ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/style"},"guide on styling views"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Animated styles cannot be shared between views."),(0,r.kt)("p",{parentName:"admonition"},"To work around this you can generate multiple useAnimatedStyle in top-level loop (number of iterations must be static, see React's ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level"},"Rules of Hooks")," for more information).")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11-15}","{11-15}":!0},"import { StyleSheet } from 'react-native';\nimport {\n  Animated,\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      width: width.value,\n    };\n  });\n\n  // attach animated style to a View using style property\n  return <Animated.View style={[styles.box, animatedStyle]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 50,\n    backgroundColor: 'blue',\n  },\n});\n")),(0,r.kt)("p",null,"In the above example, the used shared value is not changing, hence there is no real benefit of using an animated style there.\nCheck out the documentation of ",(0,r.kt)("a",{parentName:"p",href:"useSharedValue"},(0,r.kt)("inlineCode",{parentName:"a"},"useSharedValue"))," to learn how shared values can be updated."))}c.isMDXComponent=!0}}]);