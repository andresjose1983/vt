(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var r=n(49),o=n(8),a=n.n(o),i=n(14),u=n.n(i),l=n(0),c=n(44),s=n(2),d=n(5),f=n(18),b=n(54),y=n(1);function p(e){var t=e.text,n=e.style,r=e.onPress;return Object(y.jsx)(b.default,{onPress:r,children:Object(y.jsx)(d.default,{style:[g.button,n],children:Object(y.jsx)(d.default,{children:Object(y.jsx)(f.default,{style:g.buttonText,children:t})})})})}var g=s.default.create({button:{minWidth:200,backgroundColor:"#01786E",borderRadius:8,paddingHorizontal:16,paddingVertical:16,elevation:8},buttonText:{color:"#FFF",alignSelf:"center"}}),h=n(43);function m(e){var t=e.placeholder,n=e.keyboardType,r=e.style,o=e.onChangeText,a=e.value,i=(e.onBlur,e.multiline),c=void 0!==i&&i,s=e.maxLength,d=Object(l.useState)(j.textInput),f=u()(d,2),b=f[0],p=f[1];return Object(y.jsx)(h.default,{style:[b,r],placeholder:t,keyboardType:n,autoFocus:!1,maxLength:s,onBlur:function(){p(j.textInput)},onFocus:function(e){p(j.textInputFocus)},onChangeText:function(e){return o(e)},multiline:c,value:a})}var j=s.default.create({label:{marginTop:16,textAlign:"left",marginStart:20,marginBottom:4,fontSize:16,alignSelf:"flex-start"},textInput:{minWidth:300,borderColor:"#A0A0A0",paddingHorizontal:16,borderWidth:2,height:55,fontSize:16,borderRadius:4,outlineStyle:"none"},textInputFocus:{minWidth:300,borderWidth:2,height:55,fontSize:16,borderColor:"#01786E",paddingHorizontal:16,borderRadius:4,outlineStyle:"none"}}),O=n(76);function x(e){var t=e.placeholder,n=e.style,r=e.onChangeText,o=(e.onBlur,Object(l.useState)(!0)),a=u()(o,2),i=a[0],c=a[1],s=Object(l.useState)("visibility"),f=u()(s,2),b=f[0],p=f[1],g=Object(l.useState)(C.container),m=u()(g,2),j=m[0],x=m[1];return Object(y.jsxs)(d.default,{style:[j,n],children:[Object(y.jsx)(h.default,{style:C.textInput,placeholder:t,secureTextEntry:i,autoFocus:!1,onBlur:function(){x(C.container)},onFocus:function(e){x(C.textInputFocus)},onChangeText:function(e){return r(e)}}),Object(y.jsx)(O.default,{name:b,size:24,color:"#CECECE",style:C.icon,onPress:function(){c(!i),p("visibility"===b?"visibility-off":"visibility")}})]})}var C=s.default.create({icon:{paddingHorizontal:16},container:{minWidth:300,flexDirection:"row",alignItems:"center",borderWidth:2,height:55,borderColor:"#A0A0A0",borderRadius:4},textInput:{paddingHorizontal:16,paddingVertical:16,fontSize:16,flex:1,outlineStyle:"none"},textInputFocus:{minWidth:300,flexDirection:"row",borderWidth:2,alignItems:"center",borderRadius:4,height:55,borderColor:"#01786E"}}),v="https://api.cloudpayments-staging.com/",S={"Content-Type":"application/json","API-KEY":"613a606b20808900019edcd6e0d540ed0f9243e89a7393fd0b46ae92",tenantName:"FUNDZ",DEVICE_OS:"Android",DEVICE_ID:"",TIMEZONE:"America/Caracas",IP_ADDRESS:""},T=function(){var e=a()((function*(e,t){var n={username:e,password:t,grant_type:"password"},r=[];for(var o in n){var a=encodeURIComponent(o),i=encodeURIComponent(n[o]);r.push(a+"="+i)}return r=r.join("&"),yield fetch(v+"auth/oauth/token",{method:"POST",headers:Object.assign({},S,{"Content-Type":"application/x-www-form-urlencoded"}),body:r}).then((function(e){return e.json()}))}));return function(t,n){return e.apply(this,arguments)}}(),_=n(6),A=n.n(_),E=n(77);n(78);s.default.create({backgroundColor:{},webViewContainer:{width:"98%",height:185,backgroundColor:"red",overflow:"hidden"}});var R=function(){var e=a()((function*(e,t){var n={contextRequest:{},details:{name:"NONACCOUNT",details:{name:"CVT",field:[{key:"SP_accountNumberClear",value:t.cardConnectToken},{key:"IS_CARD_TOKENIZED",value:void 0===t.cvv?"YES":"NO"},{key:"RSP_AC_CARD_TYPE",value:(t.cardConnectToken,"VISA")},{key:"STORE_CUSTOMER_PROFILE",value:"NO"},{key:"RSP_AC_CARD_HOLDER_FULL_NAME",value:t.name},{key:"AMOUNT",value:t.amount},{key:"CURRENCY_CODE",value:"840"},{key:"RSP_AC_EXPIRE_MONTH",value:t.month},{key:"RSP_AC_EXPIRE_YEAR",value:t.year},{key:"RSP_AC_CARD_HOLDER_ADDRESS_LINE1",value:t.billingAddress},{key:"RSP_AC_CARD_HOLDER_ADDRESS_CITY",value:t.city},{key:"RSP_AC_CARD_HOLDER_ADDRESS_STATE",value:t.state},{key:"RSP_AC_CARD_HOLDER_ADDRESS_COUNTRY",value:"US"},{key:"RSP_AC_CARD_HOLDER_ADDRESS_POSTALCODE",value:t.zip},{key:"RSP_AC_CARD_HOLDER_EMAIL",value:t.email}]}}};return void 0!==t.cvv&&n.details.details.field.push({key:"SP_AC_CREDIT_CARD_CVV",value:t.cvv}),yield fetch(v+"fundz-ms/user/executeTrx",{method:"POST",headers:Object.assign({},S,{"Content-Type":"application/json",Authorization:"Bearer "+e.access_token}),body:JSON.stringify(n)}).then((function(e){return e.text()})).catch((function(e){return"Please try it again."}))}));return function(t,n){return e.apply(this,arguments)}}();function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.token,n=e.type,r=Object(l.useState)({name:"",billingAddress:"",city:"",state:"",zip:"",email:"",phoneNumber:"",amount:0,expirationDate:"",month:"01",year:"2023",cardConnectToken:"",cvv:""}),o=u()(r,2),i=o[0],s=o[1],f=Object(l.useState)(!0),b=u()(f,2),g=b[0],h=b[1],j=function(){var e=a()((function*(){h(!0);var e=yield R(t,i);alert(e),h(!1)}));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){"FIS"===n&&h(!1)}),[]),Object(y.jsx)(E.default,{style:I.container,children:Object(y.jsxs)(d.default,{style:I.subContaier,children:[Object(y.jsx)(m,{placeholder:"Name on card",keyboardType:"default",style:I.margin,onChangeText:function(e){s((function(t){return D(D({},t),{},{name:e})}))}}),Object(y.jsx)(m,{placeholder:"Billing Address",keyboardType:"default",style:I.margin,onChangeText:function(e){s((function(t){return D(D({},t),{},{billingAddress:e})}))},value:i.billingAddress}),Object(y.jsx)(m,{placeholder:"City",keyboardType:"default",style:I.margin,onChangeText:function(e){s((function(t){return D(D({},t),{},{city:e})}))},value:i.city}),Object(y.jsx)(m,{placeholder:"State",keyboardType:"default",style:I.margin,onChangeText:function(e){s((function(t){return D(D({},t),{},{state:e})}))},value:i.state}),Object(y.jsx)(m,{placeholder:"Zip / Postal Code",keyboardType:"default",style:I.margin,onChangeText:function(e){s((function(t){return D(D({},t),{},{zip:e})}))},value:i.zip}),Object(y.jsx)(m,{placeholder:"Email Address",keyboardType:"email-address",style:I.margin,onChangeText:function(e){s((function(t){return D(D({},t),{},{email:e})}))},value:i.email}),Object(y.jsx)(m,{placeholder:"Phone Number",keyboardType:"numeric",style:I.margin,onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return D(D({},t),{},{phoneNumber:e})}))},value:i.phoneNumber}),Object(y.jsx)(m,{placeholder:"Card Number",keyboardType:"numeric",style:I.margin,maxLength:16,onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return D(D({},t),{},{cardConnectToken:e})}))},value:i.cardConnectToken}),Object(y.jsx)(m,{maxLength:3,placeholder:"CVV",keyboardType:"numeric",style:I.margin,onChangeText:function(e){console.log(/^\d+$/.test(e.toString())),/^\d+$/.test(e.toString())&&s((function(t){return D(D({},t),{},{cvv:e})}))},value:i.cvv}),Object(y.jsxs)(d.default,{style:{flexDirection:"row",marginHorizontal:20,marginTop:8},children:[Object(y.jsx)(m,{style:{width:146,minWidth:146,marginEnd:4},maxLength:2,keyboardType:"numeric",onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return D(D({},t),{},{month:e})}))},value:i.month}),Object(y.jsx)(m,{style:{width:146,minWidth:146,marginStart:4},maxLength:4,keyboardType:"numeric",onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return D(D({},t),{},{year:e})}))},value:i.year})]}),Object(y.jsx)(m,{placeholder:"Amount USD",keyboardType:"numeric",style:I.margin,onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return D(D({},t),{},{amount:e})}))},value:i.amount}),g?Object(y.jsx)(c.default,{size:"large",style:I.buttonMargin}):Object(y.jsx)(p,{text:"Process Transaction",style:I.buttonMargin,onPress:j})]})})},I=s.default.create({margin:{marginTop:8},buttonMargin:{margin:16,marginTop:32},label:{marginTop:16,textAlign:"left",marginStart:20,marginBottom:4,fontSize:16,alignSelf:"flex-start"},subContaier:{justifyContent:"center",alignItems:"center",marginTop:50},container:{flex:1,width:"100%"}});function w(){var e=Object(l.useState)(""),t=u()(e,2),n=t[0],r=t[1],o=Object(l.useState)(""),i=u()(o,2),s=i[0],f=i[1],b=Object(l.useState)(!1),g=u()(b,2),h=g[0],j=g[1],O=Object(l.useState)(),C=u()(O,2),v=C[0],S=C[1],_=Object(l.useState)(),A=u()(_,2),E=(A[0],A[1],function(){var e=a()((function*(){if(0!==n.trim().length&&0!==s.trim().length){j(!0);var e=yield T(n,s);console.log(e),j(!1),e.access_token&&S(e)}}));return function(){return e.apply(this,arguments)}}());return Object(y.jsx)(d.default,{style:N.container,children:void 0===v?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m,{placeholder:"Username",keyboardType:"email-address",style:N.passwordMargin,onChangeText:r,value:n}),Object(y.jsx)(x,{placeholder:"Password",style:N.passwordMargin,onChangeText:f,value:s}),h?Object(y.jsx)(c.default,{size:"large",style:N.buttonMargin}):Object(y.jsx)(p,{text:"Sign in",style:N.buttonMargin,onPress:E})]}):Object(y.jsx)(P,{token:v,type:"FIS"})})}var N=s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},buttonMargin:{marginTop:32},passwordMargin:{marginTop:8}});r.default.registerComponent("App",(function(){return w})),r.default.runApplication("App",{rootTag:document.getElementById("root")})},79:function(e,t,n){e.exports=n(109)}},[[79,1,2]]]);
//# sourceMappingURL=app.f2d59cc2.chunk.js.map