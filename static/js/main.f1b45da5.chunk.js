(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);a(66),a(91);var n=a(0),o=a.n(n),i=a(38),l=a.n(i),s=a(22),c=a.n(s),r=a(23),d=a(24),u=a(26),m=a(25),h=a(27),b=a(5),p=(a(114),a(39)),v=a.n(p),f=a(17),E=a(63),g=a.n(E),w=a(64),C=a.n(w),y=a(28),j=a.n(y),k=a(40),O=a.n(k),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={rights:e.rights,mode:e.mode,opened:!1},a.toggleContext=a.toggleContext.bind(Object(f.a)(Object(f.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){return"editor"===this.state.rights||"admin"===this.state.rights?o.a.createElement(b.PanelHeader,null,o.a.createElement(b.PanelHeaderContent,{aside:o.a.createElement(g.a,null),onClick:this.toggleContext},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),o.a.createElement(b.HeaderContext,{opened:this.state.opened,onClose:this.toggleContext},o.a.createElement(b.List,null,o.a.createElement(b.Cell,{before:o.a.createElement(C.a,null),asideContent:"subscribe"===this.state.mode?o.a.createElement(j.a,{fill:"var(--accent)"}):o.a.createElement("div",{style:{width:"24px"}}),"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),o.a.createElement(b.Cell,{before:o.a.createElement(O.a,null),asideContent:"statistic_full"===this.state.mode?o.a.createElement(j.a,{fill:"var(--accent)"}):o.a.createElement("div",{style:{width:"24px"}}),"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),o.a.createElement(b.Cell,{before:o.a.createElement(O.a,null),asideContent:"statistic_cur"===this.state.mode?o.a.createElement(j.a,{fill:"var(--accent)"}):o.a.createElement("div",{style:{width:"24px"}}),"data-mode":"statistic_cur"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):o.a.createElement(b.PanelHeader,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),t}(o.a.Component),_=a(126).sprintf,P=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e));var n=v.a.parse(window.location.search);return a.state={mode:"subscribe",rights:n.vk_viewer_group_role,userId:n.vk_user_id},a.subscribeTitles=void 0,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"selectScreen",value:function(){}},{key:"componentDidMount",value:function(){var e=new FormData,t=v.a.parse(window.location.search);for(var a in t)e.append(a,t[a]),console.log(a);fetch(_("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/get",this.state.userId),{method:"POST",body:e}).then(function(e){e.ok&&console.log(e.json())})}},{key:"render",value:function(){return o.a.createElement(b.Root,{activeView:"sub-title"},o.a.createElement(b.View,{id:"sub-title",activePanel:this.state.mode},o.a.createElement(b.Panel,{id:"subscribe"},o.a.createElement(x,{rights:this.state.rights,mode:this.state.mode}),o.a.createElement(b.Search,null),o.a.createElement(b.Group,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0439\u0442\u043b\u043e\u0432"},o.a.createElement(b.Div,null)))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),c.a.send("VKWebAppInit",{}),l.a.render(o.a.createElement(P,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a(127)}},[[65,1,2]]]);
//# sourceMappingURL=main.f1b45da5.chunk.js.map