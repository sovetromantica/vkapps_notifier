(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(161)},157:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);a(102),a(127);var s=a(0),i=a.n(s),n=a(37),r=a.n(n),c=a(12),l=a.n(c),o=a(9),u=a.n(o),m=a(13),h=a(16),d=a(17),b=a(20),p=a(18),f=a(19),v=a(2),k=a(39),w=a.n(k),E=a(94),g=a.n(E),y=a(52),S=a.n(y),_=a(38),x=a.n(_),j=(a(141),a(95)),C=a.n(j),I=a(14),O=a(96),T=a.n(O),N=a(97),L=a.n(N),R=a(40),z=a.n(R),B=a(56),D=a.n(B),V=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={rights:e.rights,mode:e.mode,opened:!1,client:e.client},a.toggleContext=a.toggleContext.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){var e=this;return"editor"===this.state.rights||"admin"===this.state.rights?i.a.createElement(I.PanelHeader,{noShadow:!0},i.a.createElement(I.PanelHeaderContent,{aside:i.a.createElement(T.a,null),onClick:this.toggleContext},"subscribe"===this.state.mode?"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":null,"statistic_full"===this.state.mode?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430":null,"statistic_cur"===this.state.mode?"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d":null),i.a.createElement(I.HeaderContext,{opened:this.state.opened,onClose:this.toggleContext},i.a.createElement(I.List,null,i.a.createElement(I.Cell,{before:i.a.createElement(L.a,null),asideContent:"subscribe"===this.state.mode?i.a.createElement(z.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(t){e.setState({opened:!e.state.opened}),e.props.select(t)},"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),i.a.createElement(I.Cell,{before:i.a.createElement(D.a,null),asideContent:"statistic_full"===this.state.mode?i.a.createElement(z.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(t){e.setState({opened:!e.state.opened}),e.props.select(t)},"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),i.a.createElement(I.Cell,{before:i.a.createElement(D.a,null),asideContent:"statistic_cur"===this.state.mode?i.a.createElement(z.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(t){e.setState({opened:!e.state.opened}),e.props.select(t)},"data-mode":"statistic_cur"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):i.a.createElement(I.PanelHeader,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),t}(i.a.Component),A=a(30),F=a.n(A),U=a(31),P=a.n(U),G=a(32),W=a.n(G),K=a(53),H=a.n(K),M=a(54),J=a.n(M),$=a(55),q=a.n($),Q=a(98),X=a.n(Q),Y=(a(157),a(93).sprintf),Z="https://vk.com/%s",ee=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={animeId:e.anime.anime_id,animeName:e.anime.anime_name,animeNameRus:e.anime.anime_name_rus,shikiId:e.anime.shiki_id,subStatus:e.anime.sub_status,dubStatus:e.anime.dub_status,priority:e.anime.priority,shikiResp:void 0,opened:!1,showed:e.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:"",titleShikimoriLink:"",titleSiteLink:"",translators:e.anime.translator,editors:e.anime.editor,dubbers:e.anime.sounder,timers:e.anime.timer,imageLoading:!0},a.click=a.click.bind(Object(v.a)(Object(v.a)(a))),a.clickButton=a.clickButton.bind(Object(v.a)(Object(v.a)(a))),a.imageFinishLoad=a.imageFinishLoad.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"click",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,s,i,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){e.next=11;break}return e.next=4,fetch(Y("https://sh.sovetromantica.com/api/animes/%s",this.state.shikiId));case 4:return a=e.sent,e.next=7,a.json();case 7:for(n in s=e.sent,i=[],s.genres)i.push(s.genres[n].russian);this.setState({shikiResp:s,titleImageUrl:Y("https://shikimori.one%s",s.image.preview),titleDesc:s.description_html.replace(/<[^>]*>/gm,""),titleGenres:i.join(", "),titleShikimoriLink:Y("https://shikimori.one%s",s.url),titleSiteLink:Y("https://sovetromantica/com/anime/%s",this.state.animeId)});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"clickButton",value:function(){var e=Object(m.a)(u.a.mark(function e(t,a){var s,i=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.stopPropagation()}catch(n){}if(!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){e.next=23;break}e.t0=a,e.next=0===e.t0?5:1===e.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),e.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),e.abrupt("break",9);case 9:return e.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(s=e.sent).error_code){e.next=22;break}e.t1=a,e.next=0===e.t1?16:1===e.t1?18:20;break;case 16:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),e.abrupt("break",20);case 18:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),e.abrupt("break",20);case 20:e.next=23;break;case 22:7===s.error_code?(l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppAllowMessagesFromGroupResult":e.detail.data.result&&i.clickButton(e,a);break;case"VKWebAppAllowMessagesFromGroupFailed":switch(a){case 0:i.setState({subSwitching:!1});break;case 1:i.setState({dubSwitching:!1})}}}),l.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270})):console.log(s);case 23:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,a){this.props.resize()}},{key:"getButtonStyle",value:function(e,t){if(t)return"secondary";switch(e){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(e,t){if(t)return i.a.createElement(F.a,{size:"small"});switch(e){case 1:return i.a.createElement(H.a,null)}}},{key:"imageFinishLoad",value:function(){this.props.resize(),this.setState({imageLoading:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"subscribeRow",onClick:this.click},i.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?i.a.createElement(J.a,{fill:"var(--accent)"}):i.a.createElement(q.a,{fill:"var(--accent)"})),i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.priority>=1e4?i.a.createElement(X.a,{fill:"#f93522",className:"fullTextInformationIconFire"}):null," ",this.state.animeName," / ",this.state.animeNameRus),i.a.createElement("div",{className:"subscribeRowButtonContainer"},i.a.createElement(P.a,{stretched:!0,level:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(t){return e.clickButton(t,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),i.a.createElement(P.a,{stretched:!0,level:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(t){return e.clickButton(t,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),i.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},i.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),i.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&i.a.createElement(F.a,{size:"large",className:"fullTitleInformationSpinner"}),i.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},i.a.createElement("div",{className:"fullTitleInformationImage"},this.state.imageLoading&&i.a.createElement(F.a,{size:"large"}),i.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg",onLoad:this.imageFinishLoad})),i.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&i.a.createElement("hr",null),""!==this.state.titleGenres&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&i.a.createElement("hr",null),null!=this.state.translators&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438: "),this.state.translators.map(function(e){return 1===e.show_vk?i.a.createElement(W.a,{href:Y(Z,e.vk_link),className:"fullTextInformationAuthorLink",key:"t_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.editors&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b: "),this.state.editors.map(function(e){return 1===e.show_vk?i.a.createElement(W.a,{href:Y(Z,e.vk_link),className:"fullTextInformationAuthorLink",key:"e_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.dubbers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0414\u0430\u0431\u0431\u0435\u0440\u044b: "),this.state.dubbers.map(function(e){return 1===e.show_vk?i.a.createElement(W.a,{href:Y(Z,e.vk_link),className:"fullTextInformationAuthorLink",key:"d_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.timers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b: "),this.state.timers.map(function(e){return 1===e.show_vk?i.a.createElement(W.a,{href:Y(Z,e.vk_link),className:"fullTextInformationAuthorLink",key:"tm_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),(null!=this.state.translators||null!=this.state.editors||null!=this.state.dubbers||null!=this.state.timers)&&i.a.createElement("hr",null),i.a.createElement("div",{className:"fullTitleInformationContentButton"},i.a.createElement(P.a,{stretched:!0,href:this.state.titleShikimoriLink,component:"a",className:"subscribeRowButton"},"Shikimori"),i.a.createElement(P.a,{stretched:!0,href:this.state.titleSiteLink,component:"a",className:"subscribeRowButton"},"\u0421\u0430\u0439\u0442")))))))}}]),t}(i.a.Component),te=a(99),ae=a.n(te),se=a(57),ie=a.n(se),ne=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={minimumId:a.props.minimumId,statData:void 0,maxVotes:0},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loader(this.state.minimumId);case 2:t=e.sent,Array.isArray(t)&&(t.sort(function(e,t){return t.total-e.total}),this.setState({statData:t,maxVotes:t[0].total})),this.props.resize();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:this.props.mode+"_size"},void 0==this.state.statData&&i.a.createElement(x.a,{size:"large"}),void 0!=this.state.statData&&this.state.statData.map(function(t){return i.a.createElement("div",{className:"subscribeRow",onClick:e.click,key:"sub_"+t.anime_id},i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},t.anime_name),i.a.createElement("div",{className:"statisticRowProgressContainer"},i.a.createElement(ae.a,{value:100*t.total/e.state.maxVotes})))),i.a.createElement("div",null,i.a.createElement(ie.a,{type:"primary"},t.sub),i.a.createElement(ie.a,null,t.dub)))}))}}]),t}(i.a.Component),re=a(58),ce=a.n(re),le=a(100),oe=a.n(le),ue=a(93).sprintf,me=function(e){function t(e){var a;Object(h.a)(this,t),a=Object(b.a)(this,Object(p.a)(t).call(this,e));var s=C.a.parse(window.location.search),i=new FormData;for(var n in s)i.append(n,s[n]);return a.state={mode:"subscribe",rights:s.vk_viewer_group_role,userId:s.vk_user_id,clientType:s.vk_platform,subscribeTitles:[],urlData:i,loading:!0},a.selectScreen=a.selectScreen.bind(Object(v.a)(Object(v.a)(a))),a.resizeVkIframe=a.resizeVkIframe.bind(Object(v.a)(Object(v.a)(a))),a.searchUpdate=a.searchUpdate.bind(Object(v.a)(Object(v.a)(a))),a.height=0,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"selectScreen",value:function(e){this.setState({mode:e.currentTarget.dataset.mode})}},{key:"componentDidUpdate",value:function(e,t,a){this.resizeVkIframe()}},{key:"resizeVkIframe",value:function(){if("desktop_web"===this.state.clientType){var e=document.getElementById(this.state.mode+"_size").scrollHeight+110;this.height!==e&&(this.height=e,l.a.send("VKWebAppResizeWindow",{width:730,height:e}))}}},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ue("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/get",this.state.userId),{method:"POST",body:this.state.urlData});case 2:return t=e.sent,e.next=5,t.json();case 5:for(s in a=e.sent)a[s].showed=!0;this.setState({subscribeTitles:a,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"switchSubscribeStatus",value:function(){var e=Object(m.a)(u.a.mark(function e(t,a){var s,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t||void 0===t||void 0===a){e.next=10;break}return e.next=3,fetch(ue("https://api.sovetromantica.com/api/v1/notify/vkapp/%s/switch/%s/%s",this.state.userId,t,a),{method:"POST",body:this.state.urlData});case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:console.log("switch parameters are wrong");case 11:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"loadStatistic",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0==t&&(t=0),e.next=3,fetch(ue("https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/%s",t),{method:"POST",body:this.state.urlData});case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"searchUpdate",value:function(e){for(var t in this.state.subscribeTitles)-1!==this.state.subscribeTitles[t].anime_name.toLowerCase().indexOf(e.toLowerCase())||-1!==this.state.subscribeTitles[t].anime_name_rus.toLowerCase().indexOf(e.toLowerCase())?this.state.subscribeTitles[t].showed=!0:this.state.subscribeTitles[t].showed=!1,this.setState({subscribeTitles:this.state.subscribeTitles})}},{key:"render",value:function(){var e=this;return i.a.createElement(g.a,{activeView:"subTitle"},i.a.createElement(S.a,{id:"subTitle",activePanel:this.state.mode},i.a.createElement(w.a,{id:"subscribe"},i.a.createElement(V,{rights:this.state.rights,mode:this.state.mode,select:this.selectScreen,client:this.state.clientType}),"desktop_web"===this.state.clientType?i.a.createElement(ce.a,{onChange:this.searchUpdate}):i.a.createElement(oe.a,{vertical:"top"},i.a.createElement(ce.a,{onChange:this.searchUpdate})),i.a.createElement("div",{id:"subscribe_size",style:{paddingTop:"desktop_web"===this.state.clientType?"0px":"60px"}},this.state.loading&&i.a.createElement(x.a,{size:"large"}),this.state.subscribeTitles.map(function(t){return t.showed?i.a.createElement(ee,{anime:t,switch:e.switchSubscribeStatus.bind(e),key:"sub_"+t.anime_id,resize:e.resizeVkIframe}):null}))),i.a.createElement(w.a,{id:"statistic_full"},i.a.createElement(V,{rights:this.state.rights,mode:this.state.mode,select:this.selectScreen}),i.a.createElement(ne,{minimumId:"0",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe})),i.a.createElement(w.a,{id:"statistic_cur"},i.a.createElement(V,{rights:this.state.rights,mode:this.state.mode,select:this.selectScreen}),i.a.createElement(ne,{minimumId:"835",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),l.a.send("VKWebAppInit",{}),r.a.render(i.a.createElement(me,null),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.16515b44.chunk.js.map