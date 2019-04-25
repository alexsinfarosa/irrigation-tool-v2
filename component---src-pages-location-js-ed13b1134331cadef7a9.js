(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{323:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a),o=(n(110),n(78)),i=n.n(o),s=(n(191),n(60),n(0)),c=n.n(s),l=n(358),d=n(366),u=n(852),p=n(362),m=n(361),f=n(832),g=n(823),b=n(840),h=n(305),y=n(856),w=n(380),v=n(382),E=n(417),x=n(374),k=n(827),C=n.n(k),N=n(831),S=n.n(N),L=n(84),O=n(136),j={address:"",lat:null,lng:null,streetNumber:null,isStreetNumberRequired:!1};function R(e,t){switch(t.type){case"setAddress":return Object.assign({},e,{address:t.address});case"setLatLng":return Object.assign({},e,{lat:t.lat,lng:t.lng});case"setStreetNumber":return Object.assign({},e,{streetNumber:t.streetNumber});case"toggleIsStreetNumberRequired":return{address:"",lat:null,lng:null,streetNumber:null,isStreetNumberRequired:!e.isStreetNumberRequired};case"reset":return{address:"",lat:null,lng:null,streetNumber:null,isStreetNumberRequired:!1};default:throw new Error}}t.default=function(){var e=Object(l.a)(),t=c.a.useContext(O.b),n=t.loading,a=t.setLoading,o=t.globalDispatch,s=c.a.useReducer(R,j),N=s[0],I=s[1],_=c.a.useState(""),q=_[0],A=_[1],T=(M=i()(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:A(t),n();case 2:case"end":return e.stop()}},e)})),function(e,t){return M.apply(this,arguments)});var M;return c.a.createElement(w.a,null,c.a.createElement(v.a,{title:"Location"}),c.a.createElement(x.a,null,c.a.createElement(E.a,{icon:"chevron-left",title:"Create Location - (step 1/3)"}),c.a.createElement(y.a,{my:2},c.a.createElement(y.a,{mb:4,align:"center"},c.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Enter Your Location")),c.a.createElement(y.a,{mb:2},c.a.createElement(f.a,{row:!0},c.a.createElement(g.a,{control:c.a.createElement(b.a,{checked:N.isStreetNumberRequired,color:"primary",onChange:function(){return I({type:"toggleIsStreetNumberRequired"})}}),label:"My street number follows the odd/even irrigation ordinance"}))),c.a.createElement(y.a,null,c.a.createElement(C.a,{value:N.address,onChange:function(e){I({type:"setAddress",address:e}),A("")},onSelect:function(e){I({type:"setAddress",address:e}),Object(k.geocodeByAddress)(e).then(function(e){var t,n=e[0].formatted_address;return N.isStreetNumberRequired&&(t=+n.split(" ")[0],isNaN(t)||I({type:"setStreetNumber",streetNumber:t})),Object(k.getLatLng)(e[0])}).then(function(e){var t=e.lat,n=e.lng;t>=37.2&&t<=47.6&&n>=-82.7&&n<=-66.1?(I({type:"setLatLng",lat:t,lng:n}),S()()):A("ZERO_RESULTS")}).catch(function(e){return console.error("Error",e)})},shouldFetchSuggestions:N.address.length>2,onError:T},function(t){var n=t.getInputProps,a=t.suggestions,r=t.getSuggestionItemProps,o=t.loading;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{noValidate:!0,autoComplete:"off"},c.a.createElement(d.a,Object.assign({autoComplete:"off",id:"address",label:"Address",placeholder:"Type your address",fullWidth:!0,margin:"normal",variant:"outlined",color:"secondary",SelectProps:{native:!0},InputProps:{endAdornment:c.a.createElement(p.a,{position:"end"},c.a.createElement(m.a,{"aria-label":"delete typed address",onClick:function(){return I({type:"reset"})}},c.a.createElement("small",null,"✕")))}},n({className:"location-search-input"})))),c.a.createElement("div",null,o&&c.a.createElement(y.a,{align:"center"},c.a.createElement(h.a,{variant:"caption"},"Loading...")),!o&&N.address.length>0&&"ZERO_RESULTS"===q&&c.a.createElement(y.a,{align:"center"},c.a.createElement(h.a,{variant:"caption",color:"error"},"Address is not valid")),a.map(function(t){var n=t.active?"suggestion-item--active":"suggestion-item",a=t.active?{backgroundColor:e.palette.primary.main,borderRadius:4,color:"#fff",padding:16,cursor:"pointer"}:{backgroundColor:"#fff",padding:16,cursor:"pointer"};return c.a.createElement("div",r(t),c.a.createElement("div",r(t,{className:n,style:a}),c.a.createElement(h.a,{variant:"caption",color:"inherit"},t.description)),c.a.createElement(u.a,null))})))}))),c.a.createElement(x.d,{to:!n&&N.lat?"/irrigation/":"/location/",disabled:!(!n&&N.lat),onClick:i()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,Object(L.c)(N.lat,N.lng);case 3:t=e.sent,o(Object.assign({type:"setLocation"},N)),o({type:"setForecast",forecast:t}),a(!1);case 7:case"end":return e.stop()}},e)}))},"Continue")))}},374:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"d",function(){return u});var a=n(384),r=n(135),o=n(81),i=n.n(o),s=a.b.div.withConfig({displayName:"sharedComponents__GridContainer",componentId:"sc-1xmki40-0"})(["display:grid;height:100vh;grid-template-rows:60px auto 80px;padding-left:16px;padding-right:16px;"]),c=a.b.div.withConfig({displayName:"sharedComponents__MainContainer",componentId:"sc-1xmki40-1"})(["display:flex;flex-direction:column;height:calc(100vh - 80px);overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{width:0;height:0;}padding-top:16px;"]),l=a.b.div.withConfig({displayName:"sharedComponents__InfoContainer",componentId:"sc-1xmki40-2"})(["display:flex;flex-direction:column;height:calc(100vh - 160px);overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{width:0;height:0;}padding-top:16px;"]),d=Object(a.b)(r.a).withConfig({displayName:"sharedComponents__StyledLink",componentId:"sc-1xmki40-3"})(["text-decoration:none;padding:24px 80px;border:1px solid ",";border-radius:50px;text-transform:uppercase;background:#ffffff;display:inline-block;font-size:1.1rem;font-family:roboto;color:",';::after{content:" →";}:hover{color:#fff;background:',";transition:all 0.2s ease 0s;}"],i.a[300],i.a[300],i.a[300]),u=Object(a.b)(r.a).withConfig({displayName:"sharedComponents__StyledButton",componentId:"sc-1xmki40-4"})(["height:80px;text-decoration:none;padding:24px 80px;text-transform:uppercase;background:",";color:#fff;text-align:center;width:100%;display:block;font-size:1.1rem;font-family:roboto;",'::after{content:" →";}:hover{color:#fff;background:',";transition:all 0.3s ease 0s;","}"],i.a[300],function(e){return e.disabled&&Object(a.a)(["background:#fafafa;color:rgba(0,0,0,0.47);"])},i.a[500],function(e){return e.disabled&&Object(a.a)(["cursor:default;background:#fafafa;color:rgba(0,0,0,0.47);"])})},380:function(e,t,n){"use strict";var a=n(381),r=n(0),o=n.n(r),i=n(5),s=n.n(i),c=n(135),l=n(568),d=(n(396),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(l.a,{maxWidth:"sm",style:{padding:0}},t)},data:a})});d.propTypes={children:s.a.node.isRequired},t.a=d},381:function(e){e.exports={data:{site:{siteMetadata:{title:"Lawn Irrigation Tool"}}}}},382:function(e,t,n){"use strict";var a=n(383),r=n(0),o=n.n(r),i=n(5),s=n.n(i),c=n(137),l=n.n(c);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=e.title,c=a.data.site,d=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},383:function(e){e.exports={data:{site:{siteMetadata:{title:"Lawn Irrigation Tool",description:"Lawn irrigation tool",author:"Alex Sinfarosa - @alexsinfarosa"}}}}},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(305),i=n(856),s=n(375);t.a=function(e){var t=e.icon,n=e.title,a=e.right;return r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",alignItems:"center",height:"60px",mb:1},r.a.createElement(i.a,{component:"span"},r.a.createElement(s.a,{icon:t,size:"lg",onClick:function(){return window.history.back()}})),r.a.createElement(i.a,{component:"span"},r.a.createElement(o.a,{variant:"h6"},n)),r.a.createElement(i.a,{component:"span"},a))}}}]);
//# sourceMappingURL=component---src-pages-location-js-ed13b1134331cadef7a9.js.map