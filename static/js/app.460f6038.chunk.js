(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(49),o=n(7),a=n.n(o),i=n(14),l=n.n(i),c=n(0),u=n(44),s=n(2),d=n(18),f=n(8),p=n(54),y=n(1);function g(e){var t=e.text,n=e.style,r=e.onPress;return Object(y.jsx)(p.default,{onPress:r,children:Object(y.jsx)(f.default,{style:[b.button,n],children:Object(y.jsx)(f.default,{children:Object(y.jsx)(d.default,{style:b.buttonText,children:t})})})})}var b=s.default.create({button:{minWidth:200,backgroundColor:"#01786E",borderRadius:8,paddingHorizontal:16,paddingVertical:16,elevation:8},buttonText:{color:"#FFF",alignSelf:"center"}}),h=n(43);function m(e){var t=e.placeholder,n=e.keyboardType,r=e.style,o=e.onChangeText,a=e.value,i=(e.onBlur,e.multiline),u=void 0!==i&&i,s=e.maxLength,d=Object(c.useState)(j.textInput),f=l()(d,2),p=f[0],g=f[1];return Object(y.jsx)(h.default,{style:[p,r],placeholder:t,placeholderTextColor:"grey",keyboardType:n,autoFocus:!1,maxLength:s,onBlur:function(){g(j.textInput)},onFocus:function(e){g(j.textInputFocus)},onChangeText:function(e){return o(e)},multiline:u,value:a})}var j=s.default.create({label:{marginTop:16,textAlign:"left",marginStart:20,marginBottom:4,fontSize:16,alignSelf:"flex-start"},textInput:{minWidth:300,borderColor:"#A0A0A0",paddingHorizontal:16,borderWidth:2,height:55,fontSize:16,color:"#000000",fontWeight:"600",borderRadius:4,outlineStyle:"none"},textInputFocus:{minWidth:300,borderWidth:2,height:55,fontSize:16,color:"#000000",fontWeight:"600",borderColor:"#01786E",paddingHorizontal:16,borderRadius:4,outlineStyle:"none"}});n(76);s.default.create({icon:{paddingHorizontal:16},container:{minWidth:300,flexDirection:"row",alignItems:"center",borderWidth:2,height:55,borderColor:"#A0A0A0",borderRadius:4},textInput:{paddingHorizontal:16,paddingVertical:16,fontSize:16,flex:1,outlineStyle:"none"},textInputFocus:{minWidth:300,flexDirection:"row",borderWidth:2,alignItems:"center",borderRadius:4,height:55,borderColor:"#01786E"}});var O="https://api.cloudpayments-staging.com/",x={"Content-Type":"application/json","API-KEY":"613a606b20808900019edcd6e0d540ed0f9243e89a7393fd0b46ae92",tenantName:"IBANERA",DEVICE_OS:"",DEVICE_ID:"",TIMEZONE:"",IP_ADDRESS:""},S=function(){var e=a()((function*(e,t){var n={username:e,password:t,grant_type:"password"},r=[];for(var o in n){var a=encodeURIComponent(o),i=encodeURIComponent(n[o]);r.push(a+"="+i)}return r=r.join("&"),yield fetch(O+"auth/oauth/token",{method:"POST",headers:Object.assign({},x,{"Content-Type":"application/x-www-form-urlencoded"}),body:r}).then((function(e){return e.json()}))}));return function(t,n){return e.apply(this,arguments)}}(),C=n(5),v=n.n(C),T=n(77),_=function(){var e=a()((function*(e,t){var n={contextRequest:{},details:{name:"NONACCOUNT",details:{name:"CVT",field:[{key:"SP_accountNumberClear",value:t.cardConnectToken},{key:"IS_CARD_TOKENIZED",value:void 0===t.cvv?"YES":"NO"},{key:"RSP_AC_CARD_TYPE",value:(t.cardConnectToken,"VISA")},{key:"STORE_CUSTOMER_PROFILE",value:"NO"},{key:"RSP_AC_CARD_HOLDER_FULL_NAME",value:t.name},{key:"AMOUNT",value:t.amount},{key:"CURRENCY_CODE",value:"840"},{key:"RSP_AC_EXPIRE_MONTH",value:t.month},{key:"RSP_AC_EXPIRE_YEAR",value:t.year},{key:"RSP_AC_CARD_HOLDER_ADDRESS_LINE1",value:t.billingAddress},{key:"RSP_AC_CARD_HOLDER_ADDRESS_CITY",value:t.city},{key:"RSP_AC_CARD_HOLDER_ADDRESS_STATE",value:t.state},{key:"RSP_AC_CARD_HOLDER_ADDRESS_COUNTRY",value:"US"},{key:"RSP_AC_CARD_HOLDER_ADDRESS_POSTALCODE",value:t.zip},{key:"RSP_AC_CARD_HOLDER_EMAIL",value:t.email}]}}};return void 0!==t.cvv&&n.details.details.field.push({key:"SP_AC_CREDIT_CARD_CVV",value:t.cvv}),console.log(JSON.stringify(n)),yield fetch(O+"fundz-ms/user/executeTrx",{method:"POST",headers:Object.assign({},x,{"Content-Type":"application/json",Authorization:"Bearer "+e.access_token}),body:JSON.stringify(n)}).then((function(e){return e.text()})).catch((function(e){return"Please try it again."}))}));return function(t,n){return e.apply(this,arguments)}}();function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.token,n=e.type,r=Object(c.useState)({name:"",billingAddress:"",city:"",state:"",zip:"12345",email:"",phoneNumber:"8106883711",amount:"",expirationDate:"",month:"01",year:"2023",cardConnectToken:"4111111111111111",cvv:"123"}),o=l()(r,2),i=o[0],s=o[1],p=Object(c.useState)(!0),b=l()(p,2),h=b[0],j=b[1],O=function(){var e=a()((function*(){j(!0);var e=yield _(t,i);console.log(JSON.parse(e)),"SUCCESS"===JSON.parse(e).contextResponse.statusCode?alert("Payment Processed Successfully "):alert(e),j(!1)}));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){"FIS"===n&&j(!1)}),[]),Object(y.jsx)(T.default,{style:k.container,children:Object(y.jsxs)(f.default,{style:k.subContaier,children:[Object(y.jsx)(d.default,{style:k.title,children:"All fields are required"}),Object(y.jsx)(m,{placeholder:"Name on card",keyboardType:"default",style:k.margin,onChangeText:function(e){s((function(t){return R(R({},t),{},{name:e})}))}}),Object(y.jsx)(m,{placeholder:"Billing Address",keyboardType:"default",style:k.margin,onChangeText:function(e){s((function(t){return R(R({},t),{},{billingAddress:e})}))},value:i.billingAddress}),Object(y.jsx)(m,{placeholder:"City",keyboardType:"default",style:k.margin,onChangeText:function(e){s((function(t){return R(R({},t),{},{city:e})}))},value:i.city}),Object(y.jsx)(m,{placeholder:"State",keyboardType:"default",style:k.margin,onChangeText:function(e){s((function(t){return R(R({},t),{},{state:e})}))},value:i.state}),Object(y.jsx)(m,{placeholder:"Zip / Postal Code",keyboardType:"default",style:k.margin,onChangeText:function(e){s((function(t){return R(R({},t),{},{zip:e})}))},value:i.zip}),Object(y.jsx)(m,{placeholder:"Email Address",keyboardType:"email-address",style:k.margin,onChangeText:function(e){s((function(t){return R(R({},t),{},{email:e})}))},value:i.email}),Object(y.jsx)(m,{placeholder:"Phone Number",keyboardType:"numeric",style:k.margin,onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return R(R({},t),{},{phoneNumber:e})}))},value:i.phoneNumber}),Object(y.jsx)(m,{placeholder:"Card Number",keyboardType:"numeric",style:k.margin,maxLength:16,onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return R(R({},t),{},{cardConnectToken:e})}))},value:i.cardConnectToken}),Object(y.jsx)(m,{maxLength:3,placeholder:"CVV",keyboardType:"numeric",style:k.margin,onChangeText:function(e){console.log(/^\d+$/.test(e.toString())),/^\d+$/.test(e.toString())&&s((function(t){return R(R({},t),{},{cvv:e})}))},value:i.cvv}),Object(y.jsxs)(f.default,{style:{flexDirection:"row",marginHorizontal:20,marginTop:8},children:[Object(y.jsx)(m,{style:{width:146,minWidth:146,marginEnd:4},maxLength:2,keyboardType:"numeric",onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return R(R({},t),{},{month:e})}))},value:i.month}),Object(y.jsx)(m,{style:{width:146,minWidth:146,marginStart:4},maxLength:4,keyboardType:"numeric",onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return R(R({},t),{},{year:e})}))},value:i.year})]}),Object(y.jsx)(m,{placeholder:"Amount USD",keyboardType:"numeric",style:k.margin,onChangeText:function(e){/^\d+$/.test(e.toString())&&s((function(t){return R(R({},t),{},{amount:e})}))},value:i.amount}),h?Object(y.jsx)(u.default,{size:"large",style:k.buttonMargin}):Object(y.jsx)(g,{text:"Process Transaction",style:k.buttonMargin,onPress:O})]})})},k=s.default.create({title:{fontSize:18,color:"red"},margin:{marginTop:8},buttonMargin:{margin:16,marginTop:32},label:{marginTop:16,textAlign:"left",marginStart:20,marginBottom:4,fontSize:16,alignSelf:"flex-start"},subContaier:{justifyContent:"center",alignItems:"center",marginTop:50},container:{flex:1,width:"100%"}});function D(){var e=Object(c.useState)("merchantfismg"),t=l()(e,2),n=t[0],r=(t[1],Object(c.useState)("Newc12345!")),o=l()(r,2),i=o[0],s=(o[1],Object(c.useState)(!1)),p=l()(s,2),b=p[0],h=p[1],m=Object(c.useState)(),j=l()(m,2),O=j[0],x=j[1],C=Object(c.useState)(),v=l()(C,2),T=(v[0],v[1],function(){var e=a()((function*(){if(0!==n.trim().length&&0!==i.trim().length){h(!0);var e=yield S(n,i);console.log(e),h(!1),e.access_token&&x(e)}}));return function(){return e.apply(this,arguments)}}());return Object(y.jsx)(f.default,{style:P.container,children:void 0===O?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(d.default,{style:P.passwordMargin,children:"Initiate payment"}),b?Object(y.jsx)(u.default,{size:"large",style:P.buttonMargin}):Object(y.jsx)(g,{text:"Start",style:P.buttonMargin,onPress:T})]}):Object(y.jsx)(E,{token:O,type:"FIS"})})}var P=s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},buttonMargin:{marginTop:32},passwordMargin:{marginTop:8}});r.default.registerComponent("App",(function(){return D})),r.default.runApplication("App",{rootTag:document.getElementById("root")})},78:function(e,t,n){e.exports=n(108)}},[[78,1,2]]]);
//# sourceMappingURL=app.460f6038.chunk.js.map