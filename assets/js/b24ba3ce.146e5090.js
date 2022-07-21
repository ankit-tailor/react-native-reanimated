"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3422],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9068:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={id:"installation",title:"Installation",sidebar_label:"Installation"},o=void 0,l={unversionedId:"fundamentals/installation",id:"version-2.3.x/fundamentals/installation",title:"Installation",description:"Installing Reanimated requires a couple of additional steps compared to installing most of the popular React Native packages.",source:"@site/versioned_docs/version-2.3.x/fundamentals/installation.md",sourceDirName:"fundamentals",slug:"/fundamentals/installation",permalink:"/react-native-reanimated/docs/2.3.x/fundamentals/installation",draft:!1,tags:[],version:"2.3.x",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"version-2.3.x/docs",previous:{title:"About",permalink:"/react-native-reanimated/docs/2.3.x/"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/2.3.x/fundamentals/worklets"}},p={},s=[{value:"Installing the package",id:"installing-the-package",level:2},{value:"Babel plugin",id:"babel-plugin",level:2},{value:"Android",id:"android",level:2},{value:"Proguard",id:"proguard",level:3},{value:"iOS",id:"ios",level:2},{value:"Sample React-Native project configured with Reanimated",id:"sample-react-native-project-configured-with-reanimated",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Installing Reanimated requires a couple of additional steps compared to installing most of the popular React Native packages.\nSpecifically on Android the setup consist of adding additional code to the main application class.\nThe steps needed to get Reanimated properly configured are listed in the below paragraphs."),(0,r.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,r.kt)("p",null,"First step is to install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," as a dependency in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated\n")),(0,r.kt)("h2",{id:"babel-plugin"},"Babel plugin"),(0,r.kt)("p",null,"Add Reanimated's babel plugin to your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"  module.exports = {\n      ...\n      plugins: [\n          ...\n          'react-native-reanimated/plugin',\n      ],\n  };\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Reanimated plugin has to be listed last.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated/plugin"),' to your project you may encounter a false-positive "Reanimated 2 failed to create a worklet" error. In most cases, this can be fixed by cleaning the application\'s cache. Depending on your workflow or favourite package manager that could be done by:'),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn start --reset-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm start -- --reset-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expo start -c"))),(0,r.kt)("p",{parentName:"admonition"},"or other.")),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Turn on Hermes engine by editing ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"{2}","{2}":!0},"project.ext.react = [\n  enableHermes: true  // <- here | clean and rebuild if changing\n]\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Plug Reanimated in ",(0,r.kt)("inlineCode",{parentName:"li"},"MainApplication.java"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"{1-2,12-15}","{1-2,12-15}":!0},'  import com.facebook.react.bridge.JSIModulePackage; // <- add\n  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add\n  ...\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n  ...\n\n      @Override\n      protected String getJSMainModuleName() {\n        return "index";\n      }\n\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new ReanimatedJSIModulePackage(); // <- add\n      }\n    };\n  ...\n')),(0,r.kt)("p",null,"You can refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8"},"to this diff")," that presents the set of the above changes made to a fresh React Native project in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Playground repo"),"."),(0,r.kt)("h3",{id:"proguard"},"Proguard"),(0,r.kt)("p",null,"If you're using Proguard, make sure to add rule preventing it from optimizing Turbomodule classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-keep class com.swmansion.reanimated.** { *; }\n-keep class com.facebook.react.turbomodule.** { *; }\n")),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"As Reanimated is setup to configure and install automatically, the only thing you have to do is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," directory. Note that the auto-installation setup works for the standard React Native apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process."),(0,r.kt)("h2",{id:"sample-react-native-project-configured-with-reanimated"},"Sample React-Native project configured with Reanimated"),(0,r.kt)("p",null,"If you are having trouble configuring Reanimated in your project, or just want to try the library without the need of setting it up on a fresh project we recommend checking our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Reanimated Playground")," repo, which is essentially a fresh React Native app with Reanimated library installed and configured properly.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Visit the Playground repo here")," or copy the command below to do a git clone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/software-mansion-labs/reanimated-2-playground.git\n")))}c.isMDXComponent=!0}}]);