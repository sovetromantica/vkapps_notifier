(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);a(73),a(98);var s=a(0),n=a.n(s),i=a(44),r=a.n(i),c=a(24),l=a.n(c),o=a(7),u=a.n(o),h=a(16),m=a(11),d=a(12),b=a(15),p=a(13),f=a(14),v=a(1),g=(a(120),a(69)),w=a.n(g),k=a(6),E=a(70),S=a.n(E),y=a(71),x=a.n(y),C=a(33),j=a.n(C),O=a(45),I=a.n(O),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={rights:e.rights,mode:e.mode,opened:!1},a.toggleContext=a.toggleContext.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){return"editor"===this.state.rights||"admin"===this.state.rights?n.a.createElement(v.PanelHeader,null,n.a.createElement(v.PanelHeaderContent,{aside:n.a.createElement(S.a,null),onClick:this.toggleContext},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),n.a.createElement(v.HeaderContext,{opened:this.state.opened,onClose:this.toggleContext},n.a.createElement(v.List,null,n.a.createElement(v.Cell,{before:n.a.createElement(x.a,null),asideContent:"subscribe"===this.state.mode?n.a.createElement(j.a,{fill:"var(--accent)"}):n.a.createElement("div",{style:{width:"24px"}}),"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),n.a.createElement(v.Cell,{before:n.a.createElement(I.a,null),asideContent:"statistic_full"===this.state.mode?n.a.createElement(j.a,{fill:"var(--accent)"}):n.a.createElement("div",{style:{width:"24px"}}),"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),n.a.createElement(v.Cell,{before:n.a.createElement(I.a,null),asideContent:"statistic_cur"===this.state.mode?n.a.createElement(j.a,{fill:"var(--accent)"}):n.a.createElement("div",{style:{width:"24px"}}),"data-mode":"statistic_cur"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):n.a.createElement(v.PanelHeader,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),t}(n.a.Component),N=a(26),B=a.n(N),R=a(27),T=a.n(R),D=a(28),P=a.n(D),G=(a(68),a(43).sprintf),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={animeId:e.anime.anime_id,animeName:e.anime.anime_name,animeNameRus:e.anime.anime_name_rus,shikiId:e.anime.shiki_id,subStatus:e.anime.sub_status,dubStatus:e.anime.dub_status,shikiResp:void 0,opened:!1,showed:e.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:""},a.click=a.click.bind(Object(k.a)(Object(k.a)(a))),a.clickButton=a.clickButton.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"click",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a,s,n,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){e.next=14;break}return e.next=4,fetch(G("https://sh.sovetromantica.com/api/animes/%s",this.state.shikiId));case 4:return a=e.sent,e.next=7,a.json();case 7:for(i in s=e.sent,n=[],s.genres)n.push(s.genres[i].russian);this.setState({shikiResp:s,titleImageUrl:G("https://shikimori.one%s",s.image.preview),titleDesc:s.description_html.replace(/<[^>]*>/gm,""),titleGenres:n.join(", ")}),console.log(1),console.log(2),console.log(s);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"clickButton",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a){var s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){e.next=23;break}e.t0=a,e.next=0===e.t0?5:1===e.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),e.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),e.abrupt("break",9);case 9:return e.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(s=e.sent).error_code){e.next=22;break}e.t1=a,e.next=0===e.t1?16:1===e.t1?18:20;break;case 16:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),e.abrupt("break",20);case 18:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),e.abrupt("break",20);case 20:e.next=23;break;case 22:7===s.error_code?l.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270}).data.result&&this.clickButton(t,a):console.log(s);case 23:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getButtonStyle",value:function(e,t){if(t)return"secondary";switch(e){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(e,t){if(t)return n.a.createElement(v.Spinner,{size:"small"});switch(e){case 1:return n.a.createElement(B.a,null)}}},{key:"render",value:function(){var e=this;if(this.state.showed)return n.a.createElement("div",null,n.a.createElement("div",{className:"subscribeRow",onClick:this.click},n.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?n.a.createElement(T.a,{fill:"var(--accent)"}):n.a.createElement(P.a,{fill:"var(--accent)"})),n.a.createElement("div",{className:"subscribeRowFullContent"},n.a.createElement("div",{className:"subscribeRowContent"},n.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.animeName," / ",this.state.animeNameRus),n.a.createElement("div",{className:"subscribeRowButtonContainer"},n.a.createElement(v.Button,{stretched:!0,level:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(t){return e.clickButton(t,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),n.a.createElement(v.Button,{stretched:!0,level:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(t){return e.clickButton(t,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),n.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},n.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),n.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&n.a.createElement(v.Spinner,{size:"large",className:"fullTitleInformationSpinner"}),n.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},n.a.createElement("div",{className:"fullTitleInformationImage"},n.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg"})),n.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&n.a.createElement("div",null,n.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&n.a.createElement("hr",null),""!==this.state.titleGenres&&n.a.createElement("div",null,n.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&n.a.createElement("hr",null))))))}}]),t}(n.a.Component),V=a(43).sprintf,H=(n.a.Component,a(43).sprintf),U=function(e){function t(e){var a;Object(m.a)(this,t),a=Object(b.a)(this,Object(p.a)(t).call(this,e));var s=w.a.parse(window.location.search),n=new FormData;for(var i in s)n.append(i,s[i]);return a.state={mode:"subscribe",rights:s.vk_viewer_group_role,userId:s.vk_user_id,clientType:s.vk_platform,subscribeTitles:[],urlData:n,loading:!0},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"selectScreen",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch(H("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/get",this.state.userId),{method:"POST",body:this.state.urlData}).then(function(e){return e.json()}).then(function(t){for(var a in t)t[a].showed=!0;e.setState({subscribeTitles:t,loading:!1})})}},{key:"switchSubscribeStatus",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a){var s,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t||void 0===t||void 0===a){e.next=10;break}return e.next=3,fetch(H("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/switch/%s/%s",this.state.userId,t,a),{method:"POST",body:this.state.urlData});case 3:return s=e.sent,e.next=6,s.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:console.log("switch parameters are wrong");case 11:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement(v.Root,{activeView:"sub-title"},n.a.createElement(v.View,{id:"sub-title",activePanel:this.state.mode},n.a.createElement(v.Panel,{id:"subscribe"},n.a.createElement(_,{rights:this.state.rights,mode:this.state.mode}),n.a.createElement(v.Search,null),this.state.subscribeTitles.map(function(t){return e.state.clientType,n.a.createElement(A,{anime:t,switch:e.switchSubscribeStatus.bind(e)})}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),l.a.send("VKWebAppInit",{}),r.a.render(n.a.createElement(U,null),document.getElementById("root"))},68:function(e,t,a){},72:function(e,t,a){e.exports=a(132)}},[[72,1,2]]]);
//# sourceMappingURL=main.e976a5bb.chunk.js.map