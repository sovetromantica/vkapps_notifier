(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);a(73),a(98);var n=a(0),s=a.n(n),i=a(44),r=a.n(i),l=a(18),c=a.n(l),o=a(7),u=a.n(o),m=a(16),h=a(11),d=a(12),b=a(15),p=a(13),f=a(14),k=a(1),v=(a(120),a(69)),w=a.n(v),E=a(6),g=a(70),S=a.n(g),y=a(71),x=a.n(y),C=a(33),I=a.n(C),_=a(45),j=a.n(_),N=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={rights:e.rights,mode:e.mode,opened:!1},a.toggleContext=a.toggleContext.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){return"editor"===this.state.rights||"admin"===this.state.rights?s.a.createElement(k.PanelHeader,null,s.a.createElement(k.PanelHeaderContent,{aside:s.a.createElement(S.a,null),onClick:this.toggleContext},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),s.a.createElement(k.HeaderContext,{opened:this.state.opened,onClose:this.toggleContext},s.a.createElement(k.List,null,s.a.createElement(k.Cell,{before:s.a.createElement(x.a,null),asideContent:"subscribe"===this.state.mode?s.a.createElement(I.a,{fill:"var(--accent)"}):s.a.createElement("div",{style:{width:"24px"}}),"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),s.a.createElement(k.Cell,{before:s.a.createElement(j.a,null),asideContent:"statistic_full"===this.state.mode?s.a.createElement(I.a,{fill:"var(--accent)"}):s.a.createElement("div",{style:{width:"24px"}}),"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),s.a.createElement(k.Cell,{before:s.a.createElement(j.a,null),asideContent:"statistic_cur"===this.state.mode?s.a.createElement(I.a,{fill:"var(--accent)"}):s.a.createElement("div",{style:{width:"24px"}}),"data-mode":"statistic_cur"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):s.a.createElement(k.PanelHeader,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),t}(s.a.Component),O=a(26),B=a.n(O),T=a(27),R=a.n(T),L=a(28),A=a.n(L),D=(a(68),a(43).sprintf),G="https://vk.com/%s",P=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={animeId:e.anime.anime_id,animeName:e.anime.anime_name,animeNameRus:e.anime.anime_name_rus,shikiId:e.anime.shiki_id,subStatus:e.anime.sub_status,dubStatus:e.anime.dub_status,shikiResp:void 0,opened:!1,showed:e.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:"",titleShikimoriLink:"",titleSiteLink:"",translators:e.anime.translator,editors:e.anime.editor,dubbers:e.anime.sounder,timers:e.anime.timer},a.click=a.click.bind(Object(E.a)(Object(E.a)(a))),a.clickButton=a.clickButton.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"click",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n,s,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){e.next=14;break}return e.next=4,fetch(D("https://sh.sovetromantica.com/api/animes/%s",this.state.shikiId));case 4:return a=e.sent,e.next=7,a.json();case 7:for(i in n=e.sent,s=[],n.genres)s.push(n.genres[i].russian);this.setState({shikiResp:n,titleImageUrl:D("https://shikimori.one%s",n.image.preview),titleDesc:n.description_html.replace(/<[^>]*>/gm,""),titleGenres:s.join(", "),titleShikimoriLink:D("https://shikimori.one%s",n.url),titleSiteLink:D("https://sovetromantica/com/anime/%s",this.state.animeId)}),console.log(1),console.log(2),console.log(n);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"clickButton",value:function(){var e=Object(m.a)(u.a.mark(function e(t,a){var n,s=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.stopPropagation()}catch(i){}if(!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){e.next=23;break}e.t0=a,e.next=0===e.t0?5:1===e.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),e.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),e.abrupt("break",9);case 9:return e.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(n=e.sent).error_code){e.next=22;break}e.t1=a,e.next=0===e.t1?16:1===e.t1?18:20;break;case 16:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),e.abrupt("break",20);case 18:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),e.abrupt("break",20);case 20:e.next=23;break;case 22:7===n.error_code?(c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppAllowMessagesFromGroupResult":e.detail.data.result&&s.clickButton(e,a);break;case"VKWebAppAllowMessagesFromGroupFailed":switch(a){case 0:s.setState({subSwitching:!1});break;case 1:s.setState({dubSwitching:!1})}}}),c.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270})):console.log(n);case 23:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getButtonStyle",value:function(e,t){if(t)return"secondary";switch(e){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(e,t){if(t)return s.a.createElement(k.Spinner,{size:"small"});switch(e){case 1:return s.a.createElement(B.a,null)}}},{key:"render",value:function(){var e=this;if(this.state.showed)return s.a.createElement("div",null,s.a.createElement("div",{className:"subscribeRow",onClick:this.click},s.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?s.a.createElement(R.a,{fill:"var(--accent)"}):s.a.createElement(A.a,{fill:"var(--accent)"})),s.a.createElement("div",{className:"subscribeRowFullContent"},s.a.createElement("div",{className:"subscribeRowContent"},s.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.animeName," / ",this.state.animeNameRus),s.a.createElement("div",{className:"subscribeRowButtonContainer"},s.a.createElement(k.Button,{stretched:!0,level:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(t){return e.clickButton(t,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),s.a.createElement(k.Button,{stretched:!0,level:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(t){return e.clickButton(t,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),s.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},s.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),s.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&s.a.createElement(k.Spinner,{size:"large",className:"fullTitleInformationSpinner"}),s.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},s.a.createElement("div",{className:"fullTitleInformationImage"},s.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg"})),s.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&s.a.createElement("div",null,s.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&s.a.createElement("hr",null),""!==this.state.titleGenres&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&s.a.createElement("hr",null),null!=this.state.translators&&s.a.createElement("div",null,s.a.createElement("b",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438: "),this.state.translators.map(function(e){return 1===e.show_vk?s.a.createElement(k.Link,{href:D(G,e.vk_link),className:"fullTextInformationAuthorLink"},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.editors&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b: "),this.state.editors.map(function(e){return 1===e.show_vk?s.a.createElement(k.Link,{href:D(G,e.vk_link),className:"fullTextInformationAuthorLink"},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.dubbers&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0414\u0430\u0431\u0431\u0435\u0440\u044b: "),this.state.dubbers.map(function(e){return 1===e.show_vk?s.a.createElement(k.Link,{href:D(G,e.vk_link),className:"fullTextInformationAuthorLink"},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.timers&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b: "),this.state.timers.map(function(e){return 1===e.show_vk?s.a.createElement(k.Link,{href:D(G,e.vk_link),className:"fullTextInformationAuthorLink"},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),(null!=this.state.translators||null!=this.state.editors||null!=this.state.dubbers||null!=this.state.timers)&&s.a.createElement("hr",null),s.a.createElement("div",{className:"fullTitleInformationContentButton"},s.a.createElement(k.Button,{stretched:!0,href:this.state.titleShikimoriLink,component:"a",className:"subscribeRowButton"},"Shikimori"),s.a.createElement(k.Button,{stretched:!0,href:this.state.titleSiteLink,component:"a",className:"subscribeRowButton"},"\u0421\u0430\u0439\u0442")))))))}}]),t}(s.a.Component),V=a(43).sprintf,F=(s.a.Component,a(43).sprintf),K=function(e){function t(e){var a;Object(h.a)(this,t),a=Object(b.a)(this,Object(p.a)(t).call(this,e));var n=w.a.parse(window.location.search),s=new FormData;for(var i in n)s.append(i,n[i]);return a.state={mode:"subscribe",rights:n.vk_viewer_group_role,userId:n.vk_user_id,clientType:n.vk_platform,subscribeTitles:[],urlData:s,loading:!0},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"selectScreen",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch(F("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/get",this.state.userId),{method:"POST",body:this.state.urlData}).then(function(e){return e.json()}).then(function(t){for(var a in t)t[a].showed=!0;console.log(t),e.setState({subscribeTitles:t,loading:!1})})}},{key:"switchSubscribeStatus",value:function(){var e=Object(m.a)(u.a.mark(function e(t,a){var n,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t||void 0===t||void 0===a){e.next=10;break}return e.next=3,fetch(F("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/switch/%s/%s",this.state.userId,t,a),{method:"POST",body:this.state.urlData});case 3:return n=e.sent,e.next=6,n.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:console.log("switch parameters are wrong");case 11:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement(k.Root,{activeView:"sub-title"},s.a.createElement(k.View,{id:"sub-title",activePanel:this.state.mode},s.a.createElement(k.Panel,{id:"subscribe"},s.a.createElement(N,{rights:this.state.rights,mode:this.state.mode}),s.a.createElement(k.Search,null),this.state.subscribeTitles.map(function(t){return e.state.clientType,s.a.createElement(P,{anime:t,switch:e.switchSubscribeStatus.bind(e)})}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),c.a.send("VKWebAppInit",{}),r.a.render(s.a.createElement(K,null),document.getElementById("root"))},68:function(e,t,a){},72:function(e,t,a){e.exports=a(132)}},[[72,1,2]]]);
//# sourceMappingURL=main.be2d01f5.chunk.js.map