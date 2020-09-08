(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),i=(n(0),n(74)),r=n(77),c={id:"command_full_power",title:"Command in Full Power Mode",sidebar_label:"Command Full Power mode"},l={unversionedId:"command_details/command_full_power",id:"command_details/command_full_power",isDocsHomePage:!1,title:"Command in Full Power Mode",description:"So far the command did not do more than what you could do with BLoC, besides that you could call it like a function and didn't need a Stream. But Command can do more than that. It allows us to:",source:"@site/docs\\command_details\\command_full_power.md",permalink:"/flutter_command/docs/command_details/command_full_power",editUrl:"https://github.com/escamoteur/flutter_command/docs/command_details/command_full_power.md",sidebar_label:"Command Full Power mode",sidebar:"someSidebar",previous:{title:"A first careful en'Counter'",permalink:"/flutter_command/docs/command_details/command_encounter"},next:{title:"Command - Under the hood",permalink:"/flutter_command/docs/command_details/command"}},d=[{value:"Updating the ListView",id:"updating-the-listview",children:[]},{value:"Reacting on changes of the function execution state",id:"reacting-on-changes-of-the-function-execution-state",children:[]},{value:"Update the UI on change of the search field",id:"update-the-ui-on-change-of-the-search-field",children:[]},{value:"Restricting command execution",id:"restricting-command-execution",children:[]},{value:"Disabling the update button while another update is in progress",id:"disabling-the-update-button-while-another-update-is-in-progress",children:[]}],u={rightToc:d};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"So far the command did not do more than what you could do with BLoC, besides that you could call it like a function and didn't need a Stream. But ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," can do more than that. It allows us to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Update the UI based on if the ",Object(i.b)("inlineCode",{parentName:"li"},"Command")," is executing "),Object(i.b)("li",{parentName:"ul"},"React on Exceptions in the wrapped functions"),Object(i.b)("li",{parentName:"ul"},"Control when a ",Object(i.b)("inlineCode",{parentName:"li"},"Command")," can be executed")),Object(i.b)("p",null,"Let's explore this features by examining the included ",Object(i.b)("inlineCode",{parentName:"p"},"example")," app which queries an open weather service and displays a list of cities with the current weather. "),Object(i.b)("img",{alt:"Screen Shot",src:Object(r.a)("img/screen_shot_example.png")}),Object(i.b)("p",null,"The app uses a ",Object(i.b)("inlineCode",{parentName:"p"},"WeatherViewModel")," which contains the ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," to update the ",Object(i.b)("inlineCode",{parentName:"p"},"ListView")," by making a REST call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"Command<String, List<WeatherEntry>> updateWeatherCommand;\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"updateWeatherCommand")," expects a search term and will return a list of ",Object(i.b)("inlineCode",{parentName:"p"},"WeatherEntry"),".\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," gets initialized in the constructor of the ",Object(i.b)("inlineCode",{parentName:"p"},"WeatherViewModel"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"updateWeatherCommand = Command.createAsync<String, List<WeatherEntry>>(\n    update, // Wrapped function\n    [],     // Initial value\n    restriction: setExecutionStateCommand, //please ignore for the moment\n)   \n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"update")," is the asynchronous function that queries the weather service, therefore we create an async version of ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"createAsync")," constructor."),Object(i.b)("h3",{id:"updating-the-listview"},"Updating the ListView"),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"listview.dart"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"class WeatherListView extends StatelessWidget {\n  WeatherListView();\n  @override\n  Widget build(BuildContext context) {\n    return ValueListenableBuilder<List<WeatherEntry>>(\n      valueListenable: TheViewModel.of(context).updateWeatherCommand,\n      builder: (BuildContext context, List<WeatherEntry> data, _) {\n        // only if we get data\n        return ListView.builder(\n          itemCount: data.length,\n    ....\n")),Object(i.b)("h3",{id:"reacting-on-changes-of-the-function-execution-state"},"Reacting on changes of the function execution state"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Command")," has a property "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"ValueListenable<bool> isExecuting;\n")),Object(i.b)("p",null,"that has the value of ",Object(i.b)("inlineCode",{parentName:"p"},"false")," while the wrapped function isn't executed and ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when it is.\nSo we use this in the UI in ",Object(i.b)("inlineCode",{parentName:"p"},"homepage.dart")," to display a progress indicator while the app waits for the result of the REST call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"child: ValueListenableBuilder<bool>(\n    valueListenable:\n        TheViewModel.of(context).updateWeatherCommand.isExecuting,\n    builder: (BuildContext context, bool isRunning, _) {\n    // if true we show a buys Spinner otherwise the ListView\n    if (isRunning == true) {\n        return Center(\n        child: SizedBox(\n            width: 50.0,\n            height: 50.0,\n            child: CircularProgressIndicator(),\n          ),\n        );\n    } else {\n        return WeatherListView();\n    }\n  },\n),\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udea9 As it's not possible to update the UI while a synchronous function is being executed ",Object(i.b)("inlineCode",{parentName:"p"},"Commands")," that wrap a synchronous function don't support ",Object(i.b)("inlineCode",{parentName:"p"},"isExecuting")," and will throw an assertion if you try to access it.")),Object(i.b)("h3",{id:"update-the-ui-on-change-of-the-search-field"},"Update the UI on change of the search field"),Object(i.b)("p",null,"As we don't want to send a new HTTP request on every keypress in the search field we don't directly wire the ",Object(i.b)("inlineCode",{parentName:"p"},"onChanged")," event to the ",Object(i.b)("inlineCode",{parentName:"p"},"updateWeatherCommand"),". Instead we use a second ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," to convert the ",Object(i.b)("inlineCode",{parentName:"p"},"onChanged")," event to a ",Object(i.b)("inlineCode",{parentName:"p"},"ValueListenable")," so that we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"debounce")," and ",Object(i.b)("inlineCode",{parentName:"p"},"listen")," function of my extension function package ",Object(i.b)("inlineCode",{parentName:"p"},"functional_listener"),":"),Object(i.b)("p",null,"For this a synchronous ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," is sufficient:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"// in weather_viewmodel.dart:\nCommand<String, String> textChangedCommand;\n// and in the constructor:\n\n// Will be called on every change of the searchfield\ntextChangedCommand = Command.createSync((s) => s, '');\n\n// \n// make sure we start processing only if the user make a short pause typing\ntextChangedCommand.debounce(Duration(milliseconds: 500)).listen(\n    (filterText, _) {\n    // I could omit the execute because Command is a callable\n    // class  but here it makes the intention clearer\n    updateWeatherCommand.execute(filterText);\n    },\n);\n")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"homepage.dart"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"child: TextField(\n    /// I omitted some properties from the example here\n    onChanged: TheViewModel.of(context).textChangedCommand,\n),\n")),Object(i.b)("h3",{id:"restricting-command-execution"},"Restricting command execution"),Object(i.b)("p",null,"Sometimes it is desirable to make the execution of a ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," depending on some other state. For this you can pass a ",Object(i.b)("inlineCode",{parentName:"p"},"ValueListenable<bool>")," as ",Object(i.b)("inlineCode",{parentName:"p"},"restriction")," parameter, when you create a command. If you do so the command will only be executed if the value of the passed listenable is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),".\nIn the example app we can restrict the execution by changing the state of a ",Object(i.b)("inlineCode",{parentName:"p"},"Switch"),". To handle changes of the ",Object(i.b)("inlineCode",{parentName:"p"},"Switch")," we use..., you guessed it, another command in the ",Object(i.b)("inlineCode",{parentName:"p"},"WeatherViewModel"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"WeatherViewModel() {\n    // Command expects a bool value when executed and sets it as its own value\n    setExecutionStateCommand = Command.createSync<bool, bool>((b) => b, true);\n\n    // We pass the result of switchChangedCommand as restriction to the updateWeatherCommand\n    updateWeatherCommand = Command.createAsync<String, List<WeatherEntry>>(\n    update, // Wrapped function\n    [], // Initial value\n    restriction: setExecutionStateCommand,\n  );\n...\n")),Object(i.b)("p",null,"To update the ",Object(i.b)("inlineCode",{parentName:"p"},"Switch")," we use again a ",Object(i.b)("inlineCode",{parentName:"p"},"ValueListenableBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"ValueListenableBuilder<bool>(\n    valueListenable:\n        TheViewModel.of(context).setExecutionStateCommand,\n    builder: (context, value, _) {\n        return Switch(\n        value: value,\n        onChanged:\n            TheViewModel.of(context).setExecutionStateCommand,\n        );\n    })\n")),Object(i.b)("h3",{id:"disabling-the-update-button-while-another-update-is-in-progress"},"Disabling the update button while another update is in progress"),Object(i.b)("p",null,"The update button should not be active while an update is running or when the\n",Object(i.b)("inlineCode",{parentName:"p"},"Switch")," deactivates it. We could achieve this, again by using the ",Object(i.b)("inlineCode",{parentName:"p"},"isExecuting")," property of ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," but we would have to somehow combine it with the value of ",Object(i.b)("inlineCode",{parentName:"p"},"setExecutionStateCommand")," which is cumbersome. Luckily ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," has another property ",Object(i.b)("inlineCode",{parentName:"p"},"canExecute")," which reflects a combined value of ",Object(i.b)("inlineCode",{parentName:"p"},"!isExecuting && restriction"),"."),Object(i.b)("p",null,"So we can easily solve this requirement with another....wait for it...",Object(i.b)("inlineCode",{parentName:"p"},"ValueListenableBuilder")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),'child: ValueListenableBuilder<bool>(\n  valueListenable: TheViewModel.of(context)\n      .updateWeatherCommand\n      .canExecute,\n  builder: (BuildContext context, bool canExecute, _) {\n    // Depending on the value of canExecute we set or clear the handler\n    final handler = canExecute\n        ? TheViewModel.of(context).updateWeatherCommand\n        : null;\n    return RaisedButton(\n      child: Text("Update"),\n      color: Color.fromARGB(255, 33, 150, 243),\n      textColor: Color.fromARGB(255, 255, 255, 255),\n      onPressed: handler,\n    );\n  },\n),\n')))}s.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,m=s["".concat(r,".").concat(p)]||s[p]||b[p]||i;return n?o.a.createElement(m,c(c({ref:t},d),{},{components:n})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(75),o=n(78);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=!n.startsWith(t)?t+n.replace(/^\//,""):n;return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},78:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);