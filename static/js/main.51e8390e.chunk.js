(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,e,a){"use strict";a.r(e);a(73),a(98);var n=a(0),s=a.n(n),i=a(44),r=a.n(i),c=a(17),l=a.n(c),o=a(3),u=a.n(o),m=a(9),h=a(10),d=a(11),b=a(14),p=a(12),f=a(13),v=a(2),k=a(1),w=(a(120),a(69)),E=a.n(w),S=a(70),g=a.n(S),y=a(71),x=a.n(y),C=a(33),j=a.n(C),O=a(45),I=a.n(O),_=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(b.a)(this,Object(p.a)(e).call(this,t))).state={rights:t.rights,mode:t.mode,opened:!1,client:t.client},a.toggleContext=a.toggleContext.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(d.a)(e,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){var t=this;return"editor"===this.state.rights||"admin"===this.state.rights?s.a.createElement(k.PanelHeader,null,s.a.createElement(k.PanelHeaderContent,{aside:s.a.createElement(g.a,null),onClick:this.toggleContext},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),s.a.createElement(k.HeaderContext,{opened:this.state.opened,onClose:this.toggleContext},s.a.createElement(k.List,null,s.a.createElement(k.Cell,{before:s.a.createElement(x.a,null),asideContent:"subscribe"===this.state.mode?s.a.createElement(j.a,{fill:"var(--accent)"}):s.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),s.a.createElement(k.Cell,{before:s.a.createElement(I.a,null),asideContent:"statistic_full"===this.state.mode?s.a.createElement(j.a,{fill:"var(--accent)"}):s.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),s.a.createElement(k.Cell,{before:s.a.createElement(I.a,null),asideContent:"statistic_cur"===this.state.mode?s.a.createElement(j.a,{fill:"var(--accent)"}):s.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"statistic_cur"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):s.a.createElement(k.PanelHeader,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),e}(s.a.Component),N=a(26),B=a.n(N),R=a(27),T=a.n(R),A=a(28),D=a.n(A),L=(a(68),a(43).sprintf),P="https://vk.com/%s",V=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(b.a)(this,Object(p.a)(e).call(this,t))).state={animeId:t.anime.anime_id,animeName:t.anime.anime_name,animeNameRus:t.anime.anime_name_rus,shikiId:t.anime.shiki_id,subStatus:t.anime.sub_status,dubStatus:t.anime.dub_status,shikiResp:void 0,opened:!1,showed:t.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:"",titleShikimoriLink:"",titleSiteLink:"",translators:t.anime.translator,editors:t.anime.editor,dubbers:t.anime.sounder,timers:t.anime.timer},a.click=a.click.bind(Object(v.a)(Object(v.a)(a))),a.clickButton=a.clickButton.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(d.a)(e,[{key:"click",value:function(){var t=Object(m.a)(u.a.mark(function t(e){var a,n,s,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){t.next=11;break}return t.next=4,fetch(L("https://sh.sovetromantica.com/api/animes/%s",this.state.shikiId));case 4:return a=t.sent,t.next=7,a.json();case 7:for(i in n=t.sent,s=[],n.genres)s.push(n.genres[i].russian);this.setState({shikiResp:n,titleImageUrl:L("https://shikimori.one%s",n.image.preview),titleDesc:n.description_html.replace(/<[^>]*>/gm,""),titleGenres:s.join(", "),titleShikimoriLink:L("https://shikimori.one%s",n.url),titleSiteLink:L("https://sovetromantica/com/anime/%s",this.state.animeId)});case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"clickButton",value:function(){var t=Object(m.a)(u.a.mark(function t(e,a){var n,s=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{e.stopPropagation()}catch(i){}if(!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){t.next=23;break}t.t0=a,t.next=0===t.t0?5:1===t.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),t.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),t.abrupt("break",9);case 9:return t.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(n=t.sent).error_code){t.next=22;break}t.t1=a,t.next=0===t.t1?16:1===t.t1?18:20;break;case 16:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),t.abrupt("break",20);case 18:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),t.abrupt("break",20);case 20:t.next=23;break;case 22:7===n.error_code?(l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAllowMessagesFromGroupResult":t.detail.data.result&&s.clickButton(t,a);break;case"VKWebAppAllowMessagesFromGroupFailed":switch(a){case 0:s.setState({subSwitching:!1});break;case 1:s.setState({dubSwitching:!1})}}}),l.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270})):console.log(n);case 23:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},{key:"getButtonStyle",value:function(t,e){if(e)return"secondary";switch(t){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(t,e){if(e)return s.a.createElement(k.Spinner,{size:"small"});switch(t){case 1:return s.a.createElement(B.a,null)}}},{key:"render",value:function(){var t=this;if(this.state.showed)return s.a.createElement("div",null,s.a.createElement("div",{className:"subscribeRow",onClick:this.click},s.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?s.a.createElement(T.a,{fill:"var(--accent)"}):s.a.createElement(D.a,{fill:"var(--accent)"})),s.a.createElement("div",{className:"subscribeRowFullContent"},s.a.createElement("div",{className:"subscribeRowContent"},s.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.animeName," / ",this.state.animeNameRus),s.a.createElement("div",{className:"subscribeRowButtonContainer"},s.a.createElement(k.Button,{stretched:!0,level:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(e){return t.clickButton(e,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),s.a.createElement(k.Button,{stretched:!0,level:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(e){return t.clickButton(e,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),s.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},s.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),s.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&s.a.createElement(k.Spinner,{size:"large",className:"fullTitleInformationSpinner"}),s.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},s.a.createElement("div",{className:"fullTitleInformationImage"},s.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg"})),s.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&s.a.createElement("div",null,s.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&s.a.createElement("hr",null),""!==this.state.titleGenres&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&s.a.createElement("hr",null),null!=this.state.translators&&s.a.createElement("div",null,s.a.createElement("b",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438: "),this.state.translators.map(function(t){return 1===t.show_vk?s.a.createElement(k.Link,{href:L(P,t.vk_link),className:"fullTextInformationAuthorLink"},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),null!=this.state.editors&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b: "),this.state.editors.map(function(t){return 1===t.show_vk?s.a.createElement(k.Link,{href:L(P,t.vk_link),className:"fullTextInformationAuthorLink"},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),null!=this.state.dubbers&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0414\u0430\u0431\u0431\u0435\u0440\u044b: "),this.state.dubbers.map(function(t){return 1===t.show_vk?s.a.createElement(k.Link,{href:L(P,t.vk_link),className:"fullTextInformationAuthorLink"},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),null!=this.state.timers&&s.a.createElement("div",null,s.a.createElement("b",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b: "),this.state.timers.map(function(t){return 1===t.show_vk?s.a.createElement(k.Link,{href:L(P,t.vk_link),className:"fullTextInformationAuthorLink"},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),(null!=this.state.translators||null!=this.state.editors||null!=this.state.dubbers||null!=this.state.timers)&&s.a.createElement("hr",null),s.a.createElement("div",{className:"fullTitleInformationContentButton"},s.a.createElement(k.Button,{stretched:!0,href:this.state.titleShikimoriLink,component:"a",className:"subscribeRowButton"},"Shikimori"),s.a.createElement(k.Button,{stretched:!0,href:this.state.titleSiteLink,component:"a",className:"subscribeRowButton"},"\u0421\u0430\u0439\u0442")))))))}}]),e}(s.a.Component),G=a(43).sprintf,F=(s.a.Component,function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(b.a)(this,Object(p.a)(e).call(this,t))).state={minimumId:a.props.minimumId,statData:void 0,maxVotes:0},a}return Object(f.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.loader(this.state.minimumId);case 2:e=t.sent,Array.isArray(e)&&(e.sort(function(t,e){return e.total-t.total}),this.setState({statData:e,maxVotes:e[0].total}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return void 0!=this.state.statData&&this.state.statData.map(function(e){return s.a.createElement("div",{className:"subscribeRow",onClick:t.click},s.a.createElement("div",{className:"subscribeRowFullContent"},s.a.createElement("div",{className:"subscribeRowContent"},s.a.createElement("div",{className:"subscribeRowTitleNameContainer"},e.anime_name),s.a.createElement("div",{className:"statisticRowProgressContainer"},s.a.createElement(k.Progress,{value:100*e.total/t.state.maxVotes})))))})}}]),e}(s.a.Component)),W=a(43).sprintf,K=function(t){function e(t){var a;Object(h.a)(this,e),a=Object(b.a)(this,Object(p.a)(e).call(this,t));var n=E.a.parse(window.location.search),s=new FormData;for(var i in n)s.append(i,n[i]);return a.state={mode:"subscribe",rights:n.vk_viewer_group_role,userId:n.vk_user_id,clientType:n.vk_platform,subscribeTitles:[],urlData:s,loading:!0},a.selectScreen=a.selectScreen.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(d.a)(e,[{key:"selectScreen",value:function(t){this.setState({mode:t.currentTarget.dataset.mode}),"desktop_web"===this.state.clientType&&l.a.send("VKWebAppResizeWindow",{width:607,height:window.innerHeight})}},{key:"componentDidMount",value:function(){var t=this;fetch(W("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/get",this.state.userId),{method:"POST",body:this.state.urlData}).then(function(t){return t.json()}).then(function(e){for(var a in e)e[a].showed=!0;t.setState({subscribeTitles:e,loading:!1})})}},{key:"switchSubscribeStatus",value:function(){var t=Object(m.a)(u.a.mark(function t(e,a){var n,s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e||void 0===e||void 0===a){t.next=10;break}return t.next=3,fetch(W("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/switch/%s/%s",this.state.userId,e,a),{method:"POST",body:this.state.urlData});case 3:return n=t.sent,t.next=6,n.json();case 6:return s=t.sent,t.abrupt("return",s);case 10:console.log("switch parameters are wrong");case 11:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},{key:"loadStatistic",value:function(){var t=Object(m.a)(u.a.mark(function t(e){var a,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return void 0==e&&(e=0),t.next=3,fetch(W("https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/%s",e),{method:"POST",body:this.state.urlData});case 3:return a=t.sent,t.next=6,a.json();case 6:return n=t.sent,t.abrupt("return",n);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return s.a.createElement(k.Root,{activeView:"sub-title"},s.a.createElement(k.View,{id:"sub-title",activePanel:this.state.mode},s.a.createElement(k.Panel,{id:"subscribe"},s.a.createElement(_,{rights:this.state.rights,mode:this.state.mode,select:this.selectScreen,client:this.state.clientType}),this.state.subscribeTitles.map(function(e){return t.state.clientType,s.a.createElement(V,{anime:e,switch:t.switchSubscribeStatus.bind(t)})})),s.a.createElement(k.Panel,{id:"statistic_full"},s.a.createElement(_,{rights:this.state.rights,mode:this.state.mode,select:this.selectScreen}),s.a.createElement(F,{minimumId:"0",loader:this.loadStatistic.bind(this)})),s.a.createElement(k.Panel,{id:"statistic_cur"},s.a.createElement(_,{rights:this.state.rights,mode:this.state.mode,select:this.selectScreen}),s.a.createElement(F,{minimumId:"797",loader:this.loadStatistic.bind(this)}))))}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppUpdateConfig":var e=document.createAttribute("scheme");e.value=t.detail.data.scheme?t.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(e);break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppInit",{}),r.a.render(s.a.createElement(K,null),document.getElementById("root"))},68:function(t,e,a){},72:function(t,e,a){t.exports=a(132)}},[[72,1,2]]]);
//# sourceMappingURL=main.51e8390e.chunk.js.map