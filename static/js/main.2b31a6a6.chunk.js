(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.737f1a01.png"},28:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(24),i=a.n(s),o=(a(33),a(34),a(6)),u=a(10),m=a(8),l=(a(35),a(25)),h=a.n(l),p=function(e){var t=e.avatarUrl,a=e.userName,n=e.hide;return c.a.createElement("img",{className:"chat-preview-item-avatar ".concat(n?"hidden":""),src:null!==t&&void 0!==t?t:h.a,alt:a})},d=(a(36),function(e){var t=e.avatar,a=e.name,n=e.date,r=e.userName,s=e.message,i=e.isActive;return c.a.createElement("div",{className:"".concat("flex full-width chat-preview-item "," ").concat(i?"chat-preview-item-selected":"")},c.a.createElement(p,{avatarUrl:t,userName:r}),c.a.createElement("div",{className:"flex-space-between margin-left-8px chat-preview-item-text-container"},c.a.createElement("div",{className:"flex-space-between margin-top-8px"},c.a.createElement("span",{className:"chat-preview-item-name"},"".concat(a)),c.a.createElement("span",{className:"chat-preview-item-date"},"".concat(n.toLocaleDateString("ru").replace(/\./g,"/")))),c.a.createElement("div",{className:"chat-preview-item-author-message margin-bottom-8px"},c.a.createElement("span",{className:"chat-preview-item-author"},"".concat(r,": ")),c.a.createElement("span",null,"".concat(s)))))}),f=(a(37),function(e){var t=e.data,a=e.activeItemId;return c.a.createElement("div",{className:"flex chat-preview-list"},t.sort((function(e,t){return t.date.getTime()-e.date.getTime()})).map((function(e){return c.a.createElement(m.b,{key:e.id,className:"ignore-link-style",to:"/chat/".concat(e.id)},c.a.createElement(d,Object.assign({isActive:e.id===a},e)))})))}),v=(a(43),a(13)),g=a(14),w=a(15),b=a(17),E=a(16),x=a(5),M=a.n(x),N=a(11),y=a(18),j=a.n(y),k=function(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))},O=function(e){var t=Math.floor(23*Math.random()),a=Math.floor(59*Math.random()),n=Math.floor(59*Math.random());return new Date(e.setHours(t,a,n))},D=function(){var e=Math.ceil(10*Math.random()),t="https://randomuser.me/api/?results=".concat(e,"&inc=name,picture&noinfo");return fetch(t).then((function(e){return e.json()})).then((function(e){return e.results}))},S=function(){var e=Object(N.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return{id:j.a.generate(),userName:"".concat(e.name.last," ").concat(e.name.first),avatar:e.picture.thumbnail}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(M.a.mark((function e(t,a,n){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a[Math.floor(Math.random()*a.length)],e.abrupt("return",{user:t,message:r,date:O(n)});case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(N.a)(M.a.mark((function e(t,a){var n,r,c,s,i,o,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=Math.ceil(25+5*Math.random()),c=Math.ceil(2+4*Math.random()),s=Object.assign([],t),i=k(new Date(2019,0,0),new Date),o=0;case 6:if(!(o<r)){e.next=18;break}return u=Math.floor(Math.random()*s.length),o%c===0&&(i=k(new Date(2019,0,0),new Date)),e.t0=n,e.next=12,I(s[u],a,i);case 12:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),1===s.length?s=Object.assign([],t):s.splice(u,1);case 15:o++,e.next=6;break;case 18:return e.abrupt("return",{id:j.a.generate(),name:"Group Chat",messages:n.sort((function(e,t){return e.date.getTime()-t.date.getTime()}))});case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(N.a)(M.a.mark((function e(){var t,a,n,r,c,s;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://baconipsum.com/api/?type=all-meat&paras=25&start-with-lorem=1").then((function(e){return e.json()})).then((function(e){return e}));case 2:return t=e.sent,e.next=5,S();case 5:a=e.sent,n=Math.ceil(10+10*Math.random()),r={},c=0;case 9:if(!(c<n)){e.next=17;break}return e.next=12,C(a,t);case 12:s=e.sent,r[s.id]=s;case 14:c++,e.next=9;break;case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U={id:j.a.generate(),userName:"User Name"},A=(a(53),function(e){var t=e.date;return c.a.createElement("div",{className:"screen-msg-date"},t.toDateString())}),K=(a(54),function(e){var t=e.avatar,a=e.user,n=e.message,r=e.date,s=e.isInRow;return c.a.createElement("div",{className:"flex ".concat(s?"screen-message-in-row-item":"screen-message-item")},c.a.createElement(p,{avatarUrl:t,userName:a.userName,hide:s}),c.a.createElement("div",{className:"margin-left-8px full-width flex screen-message-text"},c.a.createElement("span",{className:s?"hidden screen-message-in-row-name":"chat-preview-item-name"},"".concat(a.userName)),c.a.createElement("div",{className:"".concat(s?"":"margin-top-8px"," flex-space-between")},c.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},"".concat(n)),c.a.createElement("span",{className:"margin-left-8px chat-preview-item-date"},r.toLocaleTimeString("ru")))))}),H=(a(55),function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userMessage:""},e.onChange=function(t){e.setState({userMessage:t.target.value})},e.handleKeyDown=function(t){if("Enter"===t.key)return t.preventDefault(),t.shiftKey?(e.setState((function(e){return{userMessage:"".concat(e.userMessage,"\n")}})),void console.log(e.state.userMessage)):e.onSend()},e.onSend=function(){var t=e.state.userMessage;0!==t.length&&(e.props.saveMessage(t),e.setState({userMessage:""}),e.forceUpdate())},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this.props.hide,t=this.state.userMessage;return c.a.createElement("div",{className:"flex chat-screen-input ".concat(e?"hidden":"")},c.a.createElement("textarea",{autoFocus:!0,spellCheck:!0,className:"chat-screen-input-form",placeholder:"Please write a message...",onChange:this.onChange,onKeyDown:this.handleKeyDown,value:t}),c.a.createElement("button",{disabled:0===t.length,className:"margin-left-8px chat-screen-send-buttom",onClick:this.onSend},"SEND"))}}]),a}(c.a.Component)),B=(n=function(e){var t=e.chats,a=e.activeChatId,n=e.saveMessage,s=function(){var e=t.find((function(e){return e.id===a})),n=e?e.messages:[],s="",i=new Date(0).setHours(0,0,0,0);return n.map((function(e){var t=String(s)===e.user.id;s=e.user.id;var a=new Date(e.date).setHours(0,0,0,0),n=i!==a;return i=a,c.a.createElement(r.Fragment,{key:"".concat(e.date.getTime())},n?c.a.createElement(A,{date:e.date}):void 0,c.a.createElement(K,Object.assign({avatar:e.user.avatar,isInRow:!n&&t},e)))}))}();return c.a.createElement("div",{className:"flex chat"},c.a.createElement(f,{data:t.map((function(e){var t=e.messages[e.messages.length-1];return Object(u.a)({id:e.id,avatar:t.user.avatar,name:e.name,userName:t.user.userName},t)})),activeItemId:a}),c.a.createElement("div",{className:"flex chat-screen"},c.a.createElement("div",{className:"flex chat-screen-messages"},s),c.a.createElement(H,{hide:0===s.length,saveMessage:n})))},function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={chats:{}},e.saveMessage=function(t){var a=e.state.chats,n={user:U,message:t,date:new Date},r=e.props.match.params.chatId,c=Object(u.a)({},a[r]);c&&(c.messages.push(n),e.setState({chats:Object(u.a)({},a,Object(v.a)({},r,c))}))},e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.chats;0===Object.keys(t).length&&T().then((function(t){return e.setState({chats:t})}));var a=this.props,n=a.match,r=a.history,c=!!t[n.params.chatId];n.params.chatId&&!c&&r.push("/")}},{key:"render",value:function(){var e,t=null!==(e=this.props.match.params.chatId)&&void 0!==e?e:"",a=this.state.chats;return c.a.createElement(n,{activeChatId:t,chats:Object.values(a),saveMessage:this.saveMessage})}}]),a}(c.a.Component)),F=function(){return c.a.createElement(o.d,null,c.a.createElement(o.a,{exact:!0,from:"/",to:"/chat"}),c.a.createElement(o.a,{from:"/middle.react.praktikum.yandex",to:"/chat"}),c.a.createElement(o.b,{exact:!0,path:"/chat",component:B}),c.a.createElement(o.b,{path:"/chat/:chatId",component:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,null,c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.2b31a6a6.chunk.js.map