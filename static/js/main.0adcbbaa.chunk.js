(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(178)},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);a(127),a(152);var s=a(0),i=a.n(s),n=a(35),r=a.n(n),c=a(32),l=a.n(c),o=a(15),u=a.n(o),h=a(23),m=a(26),d=a(27),b=a(30),p=a(28),f=a(29),k=a(9),v=a(66),g=a(124),w=a(38),E=(a(160),a(52)),y=a.n(E),S=a(65),j=a(110),O=a(111),_=a(49),x=a(109),C=a(107),T=a.n(C),I=a(108),N=a.n(I),L=a(64),R=a.n(L),z=a(76),D=a.n(z),B=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={rights:e.rights,mode:e.mode,opened:!1,client:e.client},a.toggleContext=a.toggleContext.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){var e=this;return"editor"===this.state.rights||"admin"===this.state.rights?i.a.createElement(_.b,{noShadow:!0},i.a.createElement(x.a,{aside:i.a.createElement(T.a,null),onClick:this.toggleContext},"subscribe"===this.state.mode?"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":null,"statistic_full"===this.state.mode?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430":null,"statistic_cur"===this.state.mode?"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d":null),i.a.createElement(j.a,{opened:this.state.opened,onClose:this.toggleContext},i.a.createElement(O.a,null,i.a.createElement(S.a,{before:i.a.createElement(N.a,null),asideContent:"subscribe"===this.state.mode?i.a.createElement(R.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(t){e.setState({opened:!e.state.opened}),e.props.select(t)},"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),i.a.createElement(S.a,{before:i.a.createElement(D.a,null),asideContent:"statistic_full"===this.state.mode?i.a.createElement(R.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(t){e.setState({opened:!e.state.opened}),e.props.select(t)},"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),i.a.createElement(S.a,{before:i.a.createElement(D.a,null),asideContent:"statistic_cur"===this.state.mode?i.a.createElement(R.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(t){e.setState({opened:!e.state.opened}),e.props.select(t)},"data-mode":"statistic_cur"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):i.a.createElement(_.b,{noShadow:!0},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),t}(i.a.Component),V=a(63),A=a(82),U=a(37),F=a(46),P=a(39),G=a(53),W=a(50),K=a.n(W),M=a(114),q=a.n(M),J=a(61),H=a.n(J),$=a(115),Q=a.n($),X=(a(177),a(106).sprintf),Y="https://vk.com/%s",Z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={animeId:e.anime.anime_id,animeName:e.anime.anime_name,animeNameRus:e.anime.anime_name_rus,shikiId:e.anime.shiki_id,subStatus:e.anime.sub_status,dubStatus:e.anime.dub_status,priority:e.anime.priority,shikiResp:void 0,opened:!1,showed:e.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:"",titleShikimoriLink:"",titleSiteLink:"",translators:e.anime.translator,editors:e.anime.editor,dubbers:e.anime.sounder,timers:e.anime.timer,imageLoading:!0},a.click=a.click.bind(Object(k.a)(Object(k.a)(a))),a.clickButton=a.clickButton.bind(Object(k.a)(Object(k.a)(a))),a.imageFinishLoad=a.imageFinishLoad.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"click",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a,s,i,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){e.next=11;break}return e.next=4,fetch(X("https://shikimori.one/api/animes/%s",this.state.shikiId));case 4:return a=e.sent,e.next=7,a.json();case 7:for(n in s=e.sent,i=[],s.genres)i.push(s.genres[n].russian);this.setState({shikiResp:s,titleImageUrl:X("https://shikimori.one%s",s.image.preview),titleDesc:s.description_html.replace(/<[^>]*>/gm,""),titleGenres:i.join(", "),titleShikimoriLink:X("https://shikimori.one%s",s.url),titleSiteLink:X("https://sovetromantica.com/anime/%s",this.state.animeId)});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"clickButton",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a){var s,i=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.stopPropagation()}catch(n){}if(!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){e.next=33;break}e.t0=a,e.next=0===e.t0?5:1===e.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),e.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),e.abrupt("break",9);case 9:return e.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(s=e.sent).error_code){e.next=32;break}if("current"!=this.props.mode){e.next=23;break}e.t1=a,e.next=0===e.t1?17:1===e.t1?19:21;break;case 17:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),e.abrupt("break",21);case 19:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),e.abrupt("break",21);case 21:e.next=30;break;case 23:e.t2=a,e.next=0===e.t2?26:1===e.t2?28:30;break;case 26:return this.setState({subStatus:-1,subSwitching:!1}),e.abrupt("break",30);case 28:return this.setState({dubStatus:-1,dubSwitching:!1}),e.abrupt("break",30);case 30:e.next=33;break;case 32:7===s.error_code?(l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppAllowMessagesFromGroupResult":e.detail.data.result&&i.clickButton(e,a);break;case"VKWebAppAllowMessagesFromGroupFailed":switch(a){case 0:i.setState({subSwitching:!1});break;case 1:i.setState({dubSwitching:!1})}}}),l.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270})):console.log(s);case 33:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,a){this.props.resize()}},{key:"getButtonStyle",value:function(e,t){if(t)return"secondary";switch(e){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(e,t){if(t)return i.a.createElement(F.a,{size:"small"});switch(e){case 1:return i.a.createElement(K.a,null)}}},{key:"imageFinishLoad",value:function(){this.props.resize(),this.setState({imageLoading:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"subscribeRow",onClick:this.click},i.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?i.a.createElement(q.a,{fill:"var(--accent)"}):i.a.createElement(H.a,{fill:"var(--accent)"})),i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.priority>=1e4?i.a.createElement(Q.a,{fill:"#f93522",className:"fullTextInformationIconFire"}):null," ",this.state.animeName," / ",this.state.animeNameRus),i.a.createElement("div",{className:"subscribeRowButtonContainer"},i.a.createElement(P.a,{stretched:!0,level:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(t){return e.clickButton(t,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),i.a.createElement(P.a,{stretched:!0,level:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(t){return e.clickButton(t,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),i.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},i.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),i.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&i.a.createElement(F.a,{size:"large",className:"fullTitleInformationSpinner"}),i.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},i.a.createElement("div",{className:"fullTitleInformationImage"},this.state.imageLoading&&i.a.createElement(F.a,{size:"large"}),i.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg",onLoad:this.imageFinishLoad})),i.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&i.a.createElement("hr",null),""!==this.state.titleGenres&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&i.a.createElement("hr",null),null!=this.state.translators&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438: "),this.state.translators.map(function(e){return 1===e.show_vk?i.a.createElement(G.a,{href:X(Y,e.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"t_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.editors&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b: "),this.state.editors.map(function(e){return 1===e.show_vk?i.a.createElement(G.a,{href:X(Y,e.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"e_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.dubbers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0414\u0430\u0431\u0431\u0435\u0440\u044b: "),this.state.dubbers.map(function(e){return 1===e.show_vk?i.a.createElement(G.a,{href:X(Y,e.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"d_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),null!=this.state.timers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b: "),this.state.timers.map(function(e){return 1===e.show_vk?i.a.createElement(G.a,{href:X(Y,e.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"tm_"+e.creator_id},e.nickname):e.nickname}).reduce(function(e,t){return[e,", ",t]})),(null!=this.state.translators||null!=this.state.editors||null!=this.state.dubbers||null!=this.state.timers)&&i.a.createElement("hr",null),i.a.createElement("div",{className:"fullTitleInformationContentButton"},i.a.createElement(P.a,{stretched:!0,href:this.state.titleShikimoriLink,component:"a",className:"subscribeRowButton",target:"_blank"},"Shikimori"),i.a.createElement(P.a,{stretched:!0,href:this.state.titleSiteLink,component:"a",className:"subscribeRowButton",target:"_blank"},"\u0421\u0430\u0439\u0442")))))))}}]),t}(i.a.Component),ee=a(62),te=a(47),ae=a(77),se=a.n(ae),ie=a(78),ne=a.n(ie),re=a(79),ce=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={subscribeTitles:[],loading:!0,mode:"current"},a.searchUpdate=a.searchUpdate.bind(Object(k.a)(Object(k.a)(a))),a.switch=a.switch.bind(Object(k.a)(Object(k.a)(a))),a.returnClear=a.returnClear.bind(Object(k.a)(Object(k.a)(a))),a.sendClearRequest=a.sendClearRequest.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.props.subscribe();case 3:e.t1=e.sent,e.t2={subscribeTitles:e.t1,loading:!1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,a){setTimeout(this.props.resize(),100)}},{key:"returnClear",value:function(){var e=Object(h.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.clear();case 2:return this.setState({subscribeTitles:[],loading:!0}),e.t0=this,e.next=6,this.props.subscribe(this.state.mode);case 6:e.t1=e.sent,e.t2={subscribeTitles:e.t1,loading:!1},e.t0.setState.call(e.t0,e.t2);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"searchUpdate",value:function(e){for(var t in this.state.subscribeTitles)-1!==this.state.subscribeTitles[t].anime_name.toLowerCase().indexOf(e.toLowerCase())||-1!==this.state.subscribeTitles[t].anime_name_rus.toLowerCase().indexOf(e.toLowerCase())?this.state.subscribeTitles[t].showed=!0:this.state.subscribeTitles[t].showed=!1,this.setState({subscribeTitles:this.state.subscribeTitles})}},{key:"switch",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,mode:t.currentTarget.dataset.mode,subscribeTitles:[]}),e.next=3,this.props.subscribe(t.currentTarget.dataset.mode);case 3:a=e.sent,this.setState({subscribeTitles:a,loading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendClearRequest",value:function(){this.props.clearDisplay(this.returnClear)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"subscribe_size",style:{paddingTop:"desktop_web"===this.props.client?"50px":"60px",paddingBottom:"desktop_web"===this.props.client?"0px":"60px"}},"desktop_web"===this.props.client?i.a.createElement(U.a,{vertical:"top"},i.a.createElement(ee.a,null,i.a.createElement(te.a,{after:i.a.createElement(se.a,null),selected:"current"===this.state.mode,"data-mode":"current",onClick:this.switch},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"),i.a.createElement(te.a,{after:i.a.createElement(ne.a,null),selected:"old"===this.state.mode,"data-mode":"old",onClick:this.switch},"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439"))):null,"desktop_web"===this.props.client?i.a.createElement(A.a,{className:"Search--web",theme:"default",onChange:this.searchUpdate}):i.a.createElement(U.a,{vertical:"top"},i.a.createElement(A.a,{theme:"default",onChange:this.searchUpdate})),this.state.loading&&i.a.createElement(V.a,{size:"large"}),this.state.subscribeTitles.length>0&&this.state.subscribeTitles.map(function(t){return t.showed?i.a.createElement(Z,{anime:t,switch:e.props.switch,key:"sub_"+t.anime_id,resize:e.props.resize,mode:e.state.mode}):null}),0===this.state.subscribeTitles.length&&!this.state.loading&&i.a.createElement(re.a,{style:{color:"var(--accent)",justifyContent:"space-around",width:"100%",display:"flex"}},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0430\u043d\u0438\u043c\u0435"),!this.state.loading&&i.a.createElement(re.a,{style:{color:"var(--accent)",justifyContent:"space-around",display:"flex",marginTop:"15px"}},i.a.createElement(P.a,{stretched:!0,style:{height:"40px"},onClick:this.sendClearRequest},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0432\u0441\u0435\u0445 \u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a")),"desktop_web"!==this.props.client?i.a.createElement(U.a,{vertical:"bottom"},i.a.createElement(ee.a,null,i.a.createElement(te.a,{after:i.a.createElement(se.a,null),selected:"current"===this.state.mode,"data-mode":"current",onClick:this.switch},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"),i.a.createElement(te.a,{after:i.a.createElement(ne.a,null),selected:"old"===this.state.mode,"data-mode":"old",onClick:this.switch},"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439"))):null)}}]),t}(i.a.Component),le=a(80),oe=a.n(le),ue=a(123),he=a(81),me=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={minimumId:a.props.minimumId,statData:void 0,maxVotes:0},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loader(this.state.minimumId);case 2:t=e.sent,Array.isArray(t)&&(t.sort(function(e,t){return t.total-e.total}),this.setState({statData:t,maxVotes:t[0].total}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,a){setTimeout(this.props.resize,300)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:this.props.mode+"_size"},void 0==this.state.statData&&i.a.createElement(V.a,{size:"large"}),void 0!=this.state.statData&&this.state.statData.map(function(t){return i.a.createElement("div",{className:"subscribeRow",onClick:e.click,key:"sub_"+t.anime_id},i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},t.anime_name),i.a.createElement("div",{className:"statisticRowProgressContainer"},i.a.createElement(ue.a,{value:100*t.total/e.state.maxVotes})))),i.a.createElement("div",null,i.a.createElement(he.a,{type:"primary"},t.sub),i.a.createElement(he.a,null,t.dub)))}))}}]),t}(i.a.Component),de=a(125),be=a(106).sprintf,pe=function(e){function t(e){var a;Object(m.a)(this,t),a=Object(b.a)(this,Object(p.a)(t).call(this,e));var s=y.a.parse(window.location.search),i=new FormData;for(var n in s)i.append(n,s[n]);if(a.state={mode:"subscribe",rights:s.vk_viewer_group_role,userId:s.vk_user_id,clientType:s.vk_platform,urlData:i,popout:null},a.selectScreen=a.selectScreen.bind(Object(k.a)(Object(k.a)(a))),a.resizeVkIframe=a.resizeVkIframe.bind(Object(k.a)(Object(k.a)(a))),a.switchSubscribeStatus=a.switchSubscribeStatus.bind(Object(k.a)(Object(k.a)(a))),a.getSubscribeList=a.getSubscribeList.bind(Object(k.a)(Object(k.a)(a))),a.clearSubscriptions=a.clearSubscriptions.bind(Object(k.a)(Object(k.a)(a))),a.clearSubscriptionsLaunch=a.clearSubscriptionsLaunch.bind(Object(k.a)(Object(k.a)(a))),a.closePopout=a.closePopout.bind(Object(k.a)(Object(k.a)(a))),a.height=0,"editor"===a.state.rights||"admin"===a.state.rights){var r=y.a.parse(window.location.hash);"subscribe"!==r.mode&&"statistic_full"!==r.mode&&"statistic_cur"!==r.mode||(a.state.mode=r.mode)}return a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"selectScreen",value:function(e){if(this.setState({mode:e.currentTarget.dataset.mode}),"editor"===this.state.rights||"admin"===this.state.rights){var t=y.a.parse(window.location.hash);t.mode=e.currentTarget.dataset.mode,oe.a.send("VKWebAppSetLocation",{location:y.a.stringify(t)})}}},{key:"componentDidUpdate",value:function(e,t,a){this.resizeVkIframe()}},{key:"componentDidMount",value:function(){this.resizeVkIframe()}},{key:"resizeVkIframe",value:function(){if("desktop_web"===this.state.clientType){var e=document.getElementById(this.state.mode+"_size").scrollHeight+110;this.height!==e&&(this.height=e,oe.a.send("VKWebAppResizeWindow",{width:730,height:e}))}}},{key:"getSubscribeList",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,a,s,i,n=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"current",e.next=3,fetch("current"===t?"https://api.sovetromantica.com/api/v1/notify/vkapp/get":"https://api.sovetromantica.com/api/v1/notify/vkapp/get/old",{method:"POST",body:this.state.urlData});case 3:return a=e.sent,e.next=6,a.json();case 6:for(i in s=e.sent)s[i].showed=!0;return e.abrupt("return",s);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearSubscriptions",value:function(){var e=Object(h.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sovetromantica.com/api/v1/notify/vkapp/clear",{method:"POST",body:this.state.urlData});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearSubscriptionsLaunch",value:function(e){this.setState({popout:i.a.createElement(de.a,{actions:[{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,style:"destructive",action:e},{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"}],onClose:this.closePopout},i.a.createElement("h2",null,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),i.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f? ",i.a.createElement("br",null),"\u0411\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0432\u0441\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0442\u0430\u0440\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438. ",i.a.createElement("br",null),"\u0412\u044b \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043d\u043e\u0432\u044b\u0445 \u0441\u0435\u0440\u0438\u044f\u0445."))})}},{key:"closePopout",value:function(e){console.log(e),this.setState({popout:null})}},{key:"switchSubscribeStatus",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a){var s,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t||void 0===t||void 0===a){e.next=10;break}return e.next=3,fetch(be("https://api.sovetromantica.com/api/v1/notify/vkapp/switch/%s/%s",t,a),{method:"POST",body:this.state.urlData});case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:console.log("switch parameters are wrong");case 11:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"loadStatistic",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0==t&&(t=0),e.next=3,fetch(be("https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/%s",t),{method:"POST",body:this.state.urlData});case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(g.a,{activeView:"subTitle"},i.a.createElement(w.a,{id:"subTitle",activePanel:this.state.mode,popout:this.state.popout},i.a.createElement(v.a,{id:"subscribe"},i.a.createElement(B,{rights:this.state.rights,mode:"subscribe",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(ce,{switch:this.switchSubscribeStatus,resize:this.resizeVkIframe,subscribe:this.getSubscribeList,client:this.state.clientType,rights:this.state.rights,clearDisplay:this.clearSubscriptionsLaunch,clear:this.clearSubscriptions})),i.a.createElement(v.a,{id:"statistic_full"},i.a.createElement(B,{rights:this.state.rights,mode:"statistic_full",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(me,{minimumId:"0",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe})),i.a.createElement(v.a,{id:"statistic_cur"},i.a.createElement(B,{rights:this.state.rights,mode:"statistic_cur",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(me,{minimumId:"835",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),l.a.send("VKWebAppInit",{}),r.a.render(i.a.createElement(pe,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.0adcbbaa.chunk.js.map