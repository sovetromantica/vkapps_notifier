(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(t,e,a){t.exports=a(184)},178:function(t,e,a){},184:function(t,e,a){"use strict";a.r(e);a(128),a(153);var s=a(0),i=a.n(s),n=a(36),r=a.n(n),c=a(32),o=a.n(c),l=a(15),u=a.n(l),h=a(22),d=a(25),m=a(26),p=a(29),b=a(27),f=a(28),v=a(8),k=a(68),g=a(125),w=a(39),y=(a(161),a(53)),E=a.n(y),S=a(67),j=a(111),x=a(112),O=a(50),_=a(110),C=a(108),T=a.n(C),D=a(109),I=a.n(D),N=a(66),L=a.n(N),R=a(78),z=a.n(R),A=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(p.a)(this,Object(b.a)(e).call(this,t))).state={rights:t.rights,mode:t.mode,opened:!1,client:t.client},a.toggleContext=a.toggleContext.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){var t=this;return"editor"===this.state.rights||"admin"===this.state.rights?i.a.createElement(O.b,{noShadow:!0},i.a.createElement(_.a,{aside:i.a.createElement(T.a,null),onClick:this.toggleContext},"subscribe"===this.state.mode?"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":null,"statistic_full"===this.state.mode?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430":null,"statistic_cur"===this.state.mode?"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d":null),i.a.createElement(j.a,{opened:this.state.opened,onClose:this.toggleContext},i.a.createElement(x.a,null,i.a.createElement(S.a,{before:i.a.createElement(I.a,null),asideContent:"subscribe"===this.state.mode?i.a.createElement(L.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),i.a.createElement(S.a,{before:i.a.createElement(z.a,null),asideContent:"statistic_full"===this.state.mode?i.a.createElement(L.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),i.a.createElement(S.a,{before:i.a.createElement(z.a,null),asideContent:"statistic_cur"===this.state.mode?i.a.createElement(L.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"statistic_cur"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):i.a.createElement(O.b,{noShadow:!0},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),e}(i.a.Component),B=a(65),V=a(84),U=a(38),F=a(35),P=a(40),G=a(54),W=a(51),K=a.n(W),M=a(63),q=a.n(M),J=a(47),H=a.n(J),$=a(115),Q=a.n($),X=(a(178),a(107).sprintf),Y="https://vk.com/%s",Z=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(p.a)(this,Object(b.a)(e).call(this,t))).state={animeId:t.anime.anime_id,animeName:t.anime.anime_name,animeNameRus:t.anime.anime_name_rus,shikiId:t.anime.shiki_id,subStatus:t.anime.sub_status,dubStatus:t.anime.dub_status,priority:t.anime.priority,shikiResp:void 0,opened:!1,showed:t.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:"",titleShikimoriLink:"",titleSiteLink:"",translators:t.anime.translator,editors:t.anime.editor,dubbers:t.anime.sounder,timers:t.anime.timer,imageLoading:!0},a.click=a.click.bind(Object(v.a)(Object(v.a)(a))),a.clickButton=a.clickButton.bind(Object(v.a)(Object(v.a)(a))),a.imageFinishLoad=a.imageFinishLoad.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"click",value:function(){var t=Object(h.a)(u.a.mark(function t(e){var a,s,i,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){t.next=11;break}return t.next=4,fetch(X("https://shikimori.one/api/animes/%s",this.state.shikiId));case 4:return a=t.sent,t.next=7,a.json();case 7:for(n in s=t.sent,i=[],s.genres)i.push(s.genres[n].russian);this.setState({shikiResp:s,titleImageUrl:X("https://shikimori.one%s",s.image.preview),titleDesc:s.description_html.replace(/<[^>]*>/gm,""),titleGenres:i.join(", "),titleShikimoriLink:X("https://shikimori.one%s",s.url),titleSiteLink:X("https://sovetromantica.com/anime/%s",this.state.animeId)});case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"clickButton",value:function(){var t=Object(h.a)(u.a.mark(function t(e,a){var s,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{e.stopPropagation()}catch(n){}if(!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){t.next=33;break}t.t0=a,t.next=0===t.t0?5:1===t.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),t.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),t.abrupt("break",9);case 9:return t.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(s=t.sent).error_code){t.next=32;break}if("current"!=this.props.mode){t.next=23;break}t.t1=a,t.next=0===t.t1?17:1===t.t1?19:21;break;case 17:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),t.abrupt("break",21);case 19:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),t.abrupt("break",21);case 21:t.next=30;break;case 23:t.t2=a,t.next=0===t.t2?26:1===t.t2?28:30;break;case 26:return this.setState({subStatus:-1,subSwitching:!1}),t.abrupt("break",30);case 28:return this.setState({dubStatus:-1,dubSwitching:!1}),t.abrupt("break",30);case 30:t.next=33;break;case 32:7===s.error_code?(o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAllowMessagesFromGroupResult":t.detail.data.result&&i.clickButton(t,a);break;case"VKWebAppAllowMessagesFromGroupFailed":switch(a){case 0:i.setState({subSwitching:!1});break;case 1:i.setState({dubSwitching:!1})}}}),o.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270})):console.log(s);case 33:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){this.props.resize()}},{key:"getButtonStyle",value:function(t,e){if(e)return"secondary";switch(t){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(t,e){if(e)return i.a.createElement(F.a,{size:"small"});switch(t){case 1:return i.a.createElement(K.a,null)}}},{key:"imageFinishLoad",value:function(){this.props.resize(),this.setState({imageLoading:!1})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"subscribeRow",onClick:this.click},i.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?i.a.createElement(q.a,{fill:"var(--accent)"}):i.a.createElement(H.a,{fill:"var(--accent)"})),i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.priority>=1e4?i.a.createElement(Q.a,{fill:"#f93522",className:"fullTextInformationIconFire"}):null," ",this.state.animeName," / ",this.state.animeNameRus),i.a.createElement("div",{className:"subscribeRowButtonContainer"},i.a.createElement(P.a,{stretched:!0,level:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(e){return t.clickButton(e,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),i.a.createElement(P.a,{stretched:!0,level:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(e){return t.clickButton(e,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),i.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},i.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),i.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&i.a.createElement(F.a,{size:"large",className:"fullTitleInformationSpinner"}),i.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},i.a.createElement("div",{className:"fullTitleInformationImage"},this.state.imageLoading&&i.a.createElement(F.a,{size:"large"}),i.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg",onLoad:this.imageFinishLoad})),i.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&i.a.createElement("hr",null),""!==this.state.titleGenres&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&i.a.createElement("hr",null),null!=this.state.translators&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438: "),this.state.translators.map(function(t){return 1===t.show_vk?i.a.createElement(G.a,{href:X(Y,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"t_"+t.creator_id},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),null!=this.state.editors&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b: "),this.state.editors.map(function(t){return 1===t.show_vk?i.a.createElement(G.a,{href:X(Y,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"e_"+t.creator_id},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),null!=this.state.dubbers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0414\u0430\u0431\u0431\u0435\u0440\u044b: "),this.state.dubbers.map(function(t){return 1===t.show_vk?i.a.createElement(G.a,{href:X(Y,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"d_"+t.creator_id},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),null!=this.state.timers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b: "),this.state.timers.map(function(t){return 1===t.show_vk?i.a.createElement(G.a,{href:X(Y,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"tm_"+t.creator_id},t.nickname):t.nickname}).reduce(function(t,e){return[t,", ",e]})),(null!=this.state.translators||null!=this.state.editors||null!=this.state.dubbers||null!=this.state.timers)&&i.a.createElement("hr",null),i.a.createElement("div",{className:"fullTitleInformationContentButton"},i.a.createElement(P.a,{stretched:!0,href:this.state.titleShikimoriLink,component:"a",className:"subscribeRowButton",target:"_blank"},"Shikimori"),i.a.createElement(P.a,{stretched:!0,href:this.state.titleSiteLink,component:"a",className:"subscribeRowButton",target:"_blank"},"\u0421\u0430\u0439\u0442")))))))}}]),e}(i.a.Component),tt=a(64),et=a(48),at=a(79),st=a.n(at),it=a(80),nt=a.n(it),rt=a(81),ct=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(p.a)(this,Object(b.a)(e).call(this,t))).state={subscribeTitles:[],loading:!0,mode:"current"},a.searchUpdate=a.searchUpdate.bind(Object(v.a)(Object(v.a)(a))),a.switch=a.switch.bind(Object(v.a)(Object(v.a)(a))),a.returnClear=a.returnClear.bind(Object(v.a)(Object(v.a)(a))),a.sendClearRequest=a.sendClearRequest.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.props.subscribe();case 3:t.t1=t.sent,t.t2={subscribeTitles:t.t1,loading:!1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){setTimeout(this.props.resize(),100)}},{key:"returnClear",value:function(){var t=Object(h.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.clear();case 2:return this.setState({subscribeTitles:[],loading:!0}),t.t0=this,t.next=6,this.props.subscribe(this.state.mode);case 6:t.t1=t.sent,t.t2={subscribeTitles:t.t1,loading:!1},t.t0.setState.call(t.t0,t.t2);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"searchUpdate",value:function(t){for(var e in this.state.subscribeTitles)-1!==this.state.subscribeTitles[e].anime_name.toLowerCase().indexOf(t.toLowerCase())||-1!==this.state.subscribeTitles[e].anime_name_rus.toLowerCase().indexOf(t.toLowerCase())?this.state.subscribeTitles[e].showed=!0:this.state.subscribeTitles[e].showed=!1,this.setState({subscribeTitles:this.state.subscribeTitles})}},{key:"switch",value:function(){var t=Object(h.a)(u.a.mark(function t(e){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0,mode:e.currentTarget.dataset.mode,subscribeTitles:[]}),t.next=3,this.props.subscribe(e.currentTarget.dataset.mode);case 3:a=t.sent,this.setState({subscribeTitles:a,loading:!1});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"sendClearRequest",value:function(){this.props.clearDisplay(this.returnClear)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"subscribe_size",style:{paddingTop:"desktop_web"===this.props.client?"50px":"60px",paddingBottom:"desktop_web"===this.props.client?"0px":"60px"}},"desktop_web"===this.props.client?i.a.createElement(U.a,{vertical:"top"},i.a.createElement(tt.a,null,i.a.createElement(et.a,{after:i.a.createElement(st.a,null),selected:"current"===this.state.mode,"data-mode":"current",onClick:this.switch},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"),i.a.createElement(et.a,{after:i.a.createElement(nt.a,null),selected:"old"===this.state.mode,"data-mode":"old",onClick:this.switch},"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439"))):null,"desktop_web"===this.props.client?i.a.createElement(V.a,{className:"Search--web",theme:"default",onChange:this.searchUpdate}):i.a.createElement(U.a,{vertical:"top"},i.a.createElement(V.a,{theme:"default",onChange:this.searchUpdate})),this.state.loading&&i.a.createElement(B.a,{size:"large"}),this.state.subscribeTitles.length>0&&this.state.subscribeTitles.map(function(e){return e.showed?i.a.createElement(Z,{anime:e,switch:t.props.switch,key:"sub_"+e.anime_id,resize:t.props.resize,mode:t.state.mode}):null}),0===this.state.subscribeTitles.length&&!this.state.loading&&i.a.createElement(rt.a,{style:{color:"var(--accent)",justifyContent:"space-around",width:"100%",display:"flex"}},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0430\u043d\u0438\u043c\u0435"),!this.state.loading&&i.a.createElement(rt.a,{style:{color:"var(--accent)",justifyContent:"space-around",display:"flex",marginTop:"15px"}},i.a.createElement(P.a,{stretched:!0,style:{height:"40px"},onClick:this.sendClearRequest},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0432\u0441\u0435\u0445 \u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a")),"desktop_web"!==this.props.client?i.a.createElement(U.a,{vertical:"bottom"},i.a.createElement(tt.a,null,i.a.createElement(et.a,{after:i.a.createElement(st.a,null),selected:"current"===this.state.mode,"data-mode":"current",onClick:this.switch},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"),i.a.createElement(et.a,{after:i.a.createElement(nt.a,null),selected:"old"===this.state.mode,"data-mode":"old",onClick:this.switch},"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439"))):null)}}]),e}(i.a.Component),ot=a(82),lt=a.n(ot),ut=a(124),ht=a(83),dt=a(123),mt=a.n(dt),pt=a(183),bt=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(p.a)(this,Object(b.a)(e).call(this,t))).state={opened:!1,statDataAdded:void 0,statDataRemoved:void 0,statDataDate:void 0},a.click=a.click.bind(Object(v.a)(Object(v.a)(a))),a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"click",value:function(){var t=Object(h.a)(u.a.mark(function t(e){var a,s,i,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened){t.next=11;break}return this.setState({statDataAdded:void 0,statDataRemoved:void 0,statDataDate:void 0}),t.next=5,this.props.statistic(this.props.data.anime_id);case 5:a=t.sent,s=[],i=[],n=[],a.forEach(function(t,e,a){s.push(t.added),i.push(t.removed),n.push(pt(Date.parse(t.date),"dd.mm"))}),this.setState({statDataAdded:s,statDataRemoved:i,statDataDate:n});case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){this.props.resize()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"subscribeRow",onClick:this.click,key:"sub_"+this.props.data.anime_id},i.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?i.a.createElement(q.a,{fill:"var(--accent)"}):i.a.createElement(H.a,{fill:"var(--accent)"})),i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.props.data.anime_name),i.a.createElement("div",{className:"statisticRowProgressContainer"},i.a.createElement(ut.a,{value:100*this.props.data.total/this.props.maxVotes})))),i.a.createElement("div",null,i.a.createElement(ht.a,{type:"primary"},this.props.data.sub),i.a.createElement(ht.a,null,this.props.data.dub))),i.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none","min-height":"10px"}},void 0===this.state.statDataAdded&&void 0===this.state.statDataRemoved&&i.a.createElement(F.a,{size:"large",className:"fullTitleInformationSpinner"}),void 0!==this.state.statDataAdded&&void 0!==this.state.statDataRemoved&&i.a.createElement(mt.a,{type:"line",width:"100%",height:"200px",series:[{name:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c",data:this.state.statDataAdded},{name:"\u041e\u0442\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c",data:this.state.statDataRemoved}],options:{chart:{background:"var(--background_light)",foreColor:"var(--accent)",defaultLocale:"en",toolbar:{show:!1},animations:{enabled:!1}},dataLabels:{enabled:!0},tooltip:{enabled:!1,shared:!1,marker:{show:!1}},labels:this.state.statDataDate,stroke:{curve:"smooth",width:"2"},xaxis:{labels:{showDuplicates:!0},tooltip:{enabled:!1}},yaxis:{tooltip:{enabled:!1}}}})))}}]),e}(i.a.Component),ft=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(p.a)(this,Object(b.a)(e).call(this,t))).state={minimumId:a.props.minimumId,statData:void 0,maxVotes:0},a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.loader(this.state.minimumId);case 2:e=t.sent,Array.isArray(e)&&(e.sort(function(t,e){return e.total-t.total}),this.setState({statData:e,maxVotes:e[0].total}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){setTimeout(this.props.resize,300)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:this.props.mode+"_size",key:this.props.mode+"_size"},void 0==this.state.statData&&i.a.createElement(B.a,{size:"large"}),void 0!=this.state.statData&&this.state.statData.map(function(e){return i.a.createElement(bt,{key:"sb_"+e.anime_id,data:e,maxVotes:t.state.maxVotes,resize:t.props.resize,statistic:t.props.statistic})}))}}]),e}(i.a.Component),vt=a(126),kt=a(107).sprintf,gt=function(t){function e(t){var a;Object(d.a)(this,e),a=Object(p.a)(this,Object(b.a)(e).call(this,t));var s=E.a.parse(window.location.search),i=new FormData;for(var n in s)i.append(n,s[n]);if(a.state={mode:"subscribe",rights:s.vk_viewer_group_role,userId:s.vk_user_id,clientType:s.vk_platform,urlData:i,popout:null},a.selectScreen=a.selectScreen.bind(Object(v.a)(Object(v.a)(a))),a.resizeVkIframe=a.resizeVkIframe.bind(Object(v.a)(Object(v.a)(a))),a.switchSubscribeStatus=a.switchSubscribeStatus.bind(Object(v.a)(Object(v.a)(a))),a.getSubscribeList=a.getSubscribeList.bind(Object(v.a)(Object(v.a)(a))),a.clearSubscriptions=a.clearSubscriptions.bind(Object(v.a)(Object(v.a)(a))),a.clearSubscriptionsLaunch=a.clearSubscriptionsLaunch.bind(Object(v.a)(Object(v.a)(a))),a.closePopout=a.closePopout.bind(Object(v.a)(Object(v.a)(a))),a.getStatistic=a.getStatistic.bind(Object(v.a)(Object(v.a)(a))),a.height=0,"editor"===a.state.rights||"admin"===a.state.rights){var r=E.a.parse(window.location.hash);"subscribe"!==r.mode&&"statistic_full"!==r.mode&&"statistic_cur"!==r.mode||(a.state.mode=r.mode)}return a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"selectScreen",value:function(t){if(this.setState({mode:t.currentTarget.dataset.mode}),"editor"===this.state.rights||"admin"===this.state.rights){var e=E.a.parse(window.location.hash);e.mode=t.currentTarget.dataset.mode,lt.a.send("VKWebAppSetLocation",{location:E.a.stringify(e)})}}},{key:"componentDidUpdate",value:function(t,e,a){this.resizeVkIframe()}},{key:"componentDidMount",value:function(){this.resizeVkIframe()}},{key:"resizeVkIframe",value:function(){if("desktop_web"===this.state.clientType){var t=document.getElementById(this.state.mode+"_size").scrollHeight+110;this.height!==t&&(this.height=t,lt.a.send("VKWebAppResizeWindow",{width:730,height:t}))}}},{key:"getSubscribeList",value:function(){var t=Object(h.a)(u.a.mark(function t(){var e,a,s,i,n=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"current",t.next=3,fetch("current"===e?"https://api.sovetromantica.com/api/v1/notify/vkapp/get":"https://api.sovetromantica.com/api/v1/notify/vkapp/get/old",{method:"POST",body:this.state.urlData});case 3:return a=t.sent,t.next=6,a.json();case 6:for(i in s=t.sent)s[i].showed=!0;return t.abrupt("return",s);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getStatistic",value:function(){var t=Object(h.a)(u.a.mark(function t(){var e,a,s=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e=s.length>0&&void 0!==s[0]?s[0]:0)){t.next=3;break}return t.abrupt("return",void 0);case 3:return t.next=5,fetch(kt("https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/title/%s",e),{method:"POST",body:this.state.urlData});case 5:return a=t.sent,t.next=8,a.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"clearSubscriptions",value:function(){var t=Object(h.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.sovetromantica.com/api/v1/notify/vkapp/clear",{method:"POST",body:this.state.urlData});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"clearSubscriptionsLaunch",value:function(t){this.setState({popout:i.a.createElement(vt.a,{actions:[{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,style:"destructive",action:t},{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"}],onClose:this.closePopout},i.a.createElement("h2",null,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),i.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f? ",i.a.createElement("br",null),"\u0411\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0432\u0441\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0442\u0430\u0440\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438. ",i.a.createElement("br",null),"\u0412\u044b \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043d\u043e\u0432\u044b\u0445 \u0441\u0435\u0440\u0438\u044f\u0445."))})}},{key:"closePopout",value:function(t){console.log(t),this.setState({popout:null})}},{key:"switchSubscribeStatus",value:function(){var t=Object(h.a)(u.a.mark(function t(e,a){var s,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e||void 0===e||void 0===a){t.next=10;break}return t.next=3,fetch(kt("https://api.sovetromantica.com/api/v1/notify/vkapp/switch/%s/%s",e,a),{method:"POST",body:this.state.urlData});case 3:return s=t.sent,t.next=6,s.json();case 6:return i=t.sent,t.abrupt("return",i);case 10:console.log("switch parameters are wrong");case 11:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},{key:"loadStatistic",value:function(){var t=Object(h.a)(u.a.mark(function t(e){var a,s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return void 0==e&&(e=0),t.next=3,fetch(kt("https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/%s",e),{method:"POST",body:this.state.urlData});case 3:return a=t.sent,t.next=6,a.json();case 6:return s=t.sent,t.abrupt("return",s);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(g.a,{activeView:"subTitle"},i.a.createElement(w.a,{id:"subTitle",activePanel:this.state.mode,popout:this.state.popout},i.a.createElement(k.a,{id:"subscribe"},i.a.createElement(A,{rights:this.state.rights,mode:"subscribe",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(ct,{switch:this.switchSubscribeStatus,resize:this.resizeVkIframe,subscribe:this.getSubscribeList,client:this.state.clientType,rights:this.state.rights,clearDisplay:this.clearSubscriptionsLaunch,clear:this.clearSubscriptions})),i.a.createElement(k.a,{id:"statistic_full"},i.a.createElement(A,{rights:this.state.rights,mode:"statistic_full",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(ft,{minimumId:"0",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe,statistic:this.getStatistic})),i.a.createElement(k.a,{id:"statistic_cur"},i.a.createElement(A,{rights:this.state.rights,mode:"statistic_cur",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(ft,{minimumId:"885",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe,statistic:this.getStatistic}))))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppUpdateConfig":var e=document.createAttribute("scheme");e.value=t.detail.data.scheme?t.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(e);break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppInit",{}),r.a.render(i.a.createElement(gt,null),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.4f2af8dc.chunk.js.map