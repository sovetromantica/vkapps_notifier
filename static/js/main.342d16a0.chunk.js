(this.webpackJsonpVkNotifier=this.webpackJsonpVkNotifier||[]).push([[0],{129:function(t,e,a){t.exports=a(215)},205:function(t,e,a){},215:function(t,e,a){"use strict";a.r(e);a(130),a(158),a(160),a(161);var s=a(0),i=a.n(s),n=a(119),r=a.n(n),c=a(31),o=a.n(c),l=a(2),u=a.n(l),h=a(12),d=a(18),m=a(19),p=a(4),b=a(21),f=a(20),v=a(59),k=a.n(v),w=a(128),g=a.n(w),y=a(75),E=a.n(y),S=(a(170),a(49)),x=a.n(S),_=a(57),j=a.n(_),O=a(122),C=a.n(O),D=a(123),T=a.n(D),I=a(77),N=a.n(I),V=a(120),L=a.n(V),R=a(121),z=a.n(R),A=a(124),B=a.n(A),P=a(58),U=a.n(P),F=a(78),G=a.n(F),W=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var s;return Object(d.a)(this,a),(s=e.call(this,t)).state={rights:t.rights,mode:t.mode,opened:!1,client:t.client},s.toggleContext=s.toggleContext.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"toggleContext",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){var t=this;return"editor"===this.state.rights||"admin"===this.state.rights?i.a.createElement(N.a,{noShadow:!0},i.a.createElement(L.a,{aside:i.a.createElement(z.a,null),onClick:this.toggleContext},"subscribe"===this.state.mode?"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":null,"statistic_full"===this.state.mode?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430":null,"statistic_cur"===this.state.mode?"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d":null),i.a.createElement(C.a,{opened:this.state.opened,onClose:this.toggleContext},i.a.createElement(T.a,null,i.a.createElement(j.a,{before:i.a.createElement(B.a,null),asideContent:"subscribe"===this.state.mode?i.a.createElement(U.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"subscribe"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),i.a.createElement(j.a,{before:i.a.createElement(G.a,null),asideContent:"statistic_full"===this.state.mode?i.a.createElement(U.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"statistic_full"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),i.a.createElement(j.a,{before:i.a.createElement(G.a,null),asideContent:"statistic_cur"===this.state.mode?i.a.createElement(U.a,{fill:"var(--accent)"}):i.a.createElement("div",{style:{width:"24px"}}),onClick:function(e){t.setState({opened:!t.state.opened}),t.props.select(e)},"data-mode":"statistic_cur"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d")))):i.a.createElement(N.a,{noShadow:!0},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")}}]),a}(i.a.Component),K=a(56),M=a.n(K),q=a(81),H=a.n(q),J=a(39),$=a.n(J),Q=a(40),X=a.n(Q),Y=a(41),Z=a.n(Y),tt=a(50),et=a.n(tt),at=a(76),st=a.n(at),it=a(54),nt=a.n(it),rt=a(48),ct=a.n(rt),ot=a(125),lt=a.n(ot),ut=(a(205),a(118).sprintf),ht="https://vk.com/%s",dt=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var s;return Object(d.a)(this,a),(s=e.call(this,t)).state={animeId:t.anime.anime_id,animeName:t.anime.anime_name,animeNameRus:t.anime.anime_name_rus,shikiId:t.anime.shiki_id,subStatus:t.anime.sub_status,dubStatus:t.anime.dub_status,priority:t.anime.priority,shikiResp:void 0,opened:!1,showed:t.anime.showed,subSwitching:!1,dubSwitching:!1,titleImageUrl:"",titleDesc:"",titleGenres:"",titleShikimoriLink:"",titleSiteLink:"",translators:t.anime.translator,editors:t.anime.editor,dubbers:t.anime.sounder,timers:t.anime.timer,imageLoading:!0},s.click=s.click.bind(Object(p.a)(s)),s.clickButton=s.clickButton.bind(Object(p.a)(s)),s.imageFinishLoad=s.imageFinishLoad.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"click",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var a,s,i,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened||void 0!==this.state.shikiResp||0===this.state.shikiId){t.next=11;break}return t.next=4,fetch(ut("https://shikimori.one/api/animes/%s",this.state.shikiId));case 4:return a=t.sent,t.next=7,a.json();case 7:for(n in s=t.sent,i=[],s.genres)i.push(s.genres[n].russian);this.setState({shikiResp:s,titleImageUrl:ut("https://shikimori.one%s",s.image.preview),titleDesc:s.description_html.replace(/<[^>]*>/gm,""),titleGenres:i.join(", "),titleShikimoriLink:ut("https://shikimori.one%s",s.url),titleSiteLink:ut("https://sovetromantica.com/anime/%s",this.state.animeId)});case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"clickButton",value:function(){var t=Object(h.a)(u.a.mark((function t(e,a){var s,i=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e.stopPropagation()}catch(n){}if(!(0===a&&-2!==this.state.subStatus&&-1!==this.state.subStatus||1===a&&-2!==this.state.dubStatus&&-1!==this.state.dubStatus)){t.next=33;break}t.t0=a,t.next=0===t.t0?5:1===t.t0?7:9;break;case 5:return this.setState({subSwitching:!0}),t.abrupt("break",9);case 7:return this.setState({dubSwitching:!0}),t.abrupt("break",9);case 9:return t.next=11,this.props.switch(this.state.animeId,a);case 11:if(0!==(s=t.sent).error_code){t.next=32;break}if("current"!=this.props.mode){t.next=23;break}t.t1=a,t.next=0===t.t1?17:1===t.t1?19:21;break;case 17:return 1!==this.state.subStatus&&0!==this.state.subStatus||this.setState({subStatus:1-this.state.subStatus,subSwitching:!1}),t.abrupt("break",21);case 19:return 1!==this.state.dubStatus&&0!==this.state.dubStatus||this.setState({dubStatus:1-this.state.dubStatus,dubSwitching:!1}),t.abrupt("break",21);case 21:t.next=30;break;case 23:t.t2=a,t.next=0===t.t2?26:1===t.t2?28:30;break;case 26:return this.setState({subStatus:-1,subSwitching:!1}),t.abrupt("break",30);case 28:return this.setState({dubStatus:-1,dubSwitching:!1}),t.abrupt("break",30);case 30:t.next=33;break;case 32:7===s.error_code?(o.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppAllowMessagesFromGroupResult":t.detail.data.result&&i.clickButton(t,a);break;case"VKWebAppAllowMessagesFromGroupFailed":switch(a){case 0:i.setState({subSwitching:!1});break;case 1:i.setState({dubSwitching:!1})}}})),o.a.send("VKWebAppAllowMessagesFromGroup",{group_id:33905270})):console.log(s);case 33:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){this.props.resize()}},{key:"getButtonStyle",value:function(t,e){if(e)return"secondary";switch(t){case-1:return"secondary";case 0:return"primary";case 1:return"outline"}}},{key:"getBeforeSymbol",value:function(t,e){if(e)return i.a.createElement(X.a,{size:"small"});switch(t){case 1:return i.a.createElement(st.a,null)}}},{key:"imageFinishLoad",value:function(){this.props.resize(),this.setState({imageLoading:!1})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"subscribeRow",onClick:this.click},i.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?i.a.createElement(nt.a,{fill:"var(--accent)"}):i.a.createElement(ct.a,{fill:"var(--accent)"})),i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.state.priority>=1e4?i.a.createElement(lt.a,{fill:"#f93522",className:"fullTextInformationIconFire"}):null," ",this.state.animeName," / ",this.state.animeNameRus),i.a.createElement("div",{className:"subscribeRowButtonContainer"},i.a.createElement(Z.a,{stretched:!0,mode:this.getButtonStyle(this.state.subStatus,this.state.subSwitching),before:this.getBeforeSymbol(this.state.subStatus,this.state.subSwitching),onClick:function(e){return t.clickButton(e,0)},className:"subscribeRowButton"},"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),i.a.createElement(Z.a,{stretched:!0,mode:this.getButtonStyle(this.state.dubStatus,this.state.dubSwitching),before:this.getBeforeSymbol(this.state.dubStatus,this.state.dubSwitching),onClick:function(e){return t.clickButton(e,1)},className:"subscribeRowButton"},"\u041e\u0437\u0432\u0443\u0447\u043a\u0430"))))),i.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none"}},i.a.createElement("div",{style:{width:"25px",height:"100%",display:"flex"}}),i.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},void 0===this.state.shikiResp&&i.a.createElement(X.a,{size:"large",className:"fullTitleInformationSpinner"}),i.a.createElement("div",{className:"fullTitleInformationContainer",style:{display:void 0===this.state.shikiResp?"none":null}},i.a.createElement("div",{className:"fullTitleInformationImage"},this.state.imageLoading&&i.a.createElement(X.a,{size:"large"}),i.a.createElement("img",{src:this.state.titleImageUrl,className:"fullTitleInformationImageImg",onLoad:this.imageFinishLoad})),i.a.createElement("div",{className:"fullTitleInformationContent"},""!==this.state.titleDesc&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),this.state.titleDesc),""!==this.state.titleDesc&&i.a.createElement("hr",null),""!==this.state.titleGenres&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0416\u0430\u043d\u0440\u044b: "),this.state.titleGenres),""!==this.state.titleGenres&&i.a.createElement("hr",null),null!=this.state.translators&&i.a.createElement("div",null,i.a.createElement("b",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438: "),this.state.translators.map((function(t){return 1===t.show_vk?i.a.createElement(et.a,{href:ut(ht,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"t_"+t.creator_id},t.nickname):t.nickname})).reduce((function(t,e){return[t,", ",e]}))),null!=this.state.editors&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b: "),this.state.editors.map((function(t){return 1===t.show_vk?i.a.createElement(et.a,{href:ut(ht,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"e_"+t.creator_id},t.nickname):t.nickname})).reduce((function(t,e){return[t,", ",e]}))),null!=this.state.dubbers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0414\u0430\u0431\u0431\u0435\u0440\u044b: "),this.state.dubbers.map((function(t){return 1===t.show_vk?i.a.createElement(et.a,{href:ut(ht,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"d_"+t.creator_id},t.nickname):t.nickname})).reduce((function(t,e){return[t,", ",e]}))),null!=this.state.timers&&i.a.createElement("div",null,i.a.createElement("b",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b: "),this.state.timers.map((function(t){return 1===t.show_vk?i.a.createElement(et.a,{href:ut(ht,t.vk_link),className:"fullTextInformationAuthorLink",target:"_blank",key:"tm_"+t.creator_id},t.nickname):t.nickname})).reduce((function(t,e){return[t,", ",e]}))),(null!=this.state.translators||null!=this.state.editors||null!=this.state.dubbers||null!=this.state.timers)&&i.a.createElement("hr",null),i.a.createElement("div",{className:"fullTitleInformationContentButton"},i.a.createElement(Z.a,{stretched:!0,href:this.state.titleShikimoriLink,component:"a",className:"subscribeRowButton",target:"_blank"},"Shikimori"),i.a.createElement(Z.a,{stretched:!0,href:this.state.titleSiteLink,component:"a",className:"subscribeRowButton",target:"_blank"},"\u0421\u0430\u0439\u0442")))))))}}]),a}(i.a.Component),mt=a(55),pt=a.n(mt),bt=a(42),ft=a.n(bt),vt=a(79),kt=a.n(vt),wt=a(80),gt=a.n(wt),yt=a(82),Et=a.n(yt),St=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var s;return Object(d.a)(this,a),(s=e.call(this,t)).state={subscribeTitles:[],loading:!0,mode:"current"},s.searchUpdate=s.searchUpdate.bind(Object(p.a)(s)),s.switch=s.switch.bind(Object(p.a)(s)),s.returnClear=s.returnClear.bind(Object(p.a)(s)),s.sendClearRequest=s.sendClearRequest.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.props.subscribe();case 3:t.t1=t.sent,t.t2={subscribeTitles:t.t1,loading:!1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){setTimeout(this.props.resize(),100)}},{key:"returnClear",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.clear();case 2:return this.setState({subscribeTitles:[],loading:!0}),t.t0=this,t.next=6,this.props.subscribe(this.state.mode);case 6:t.t1=t.sent,t.t2={subscribeTitles:t.t1,loading:!1},t.t0.setState.call(t.t0,t.t2);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"searchUpdate",value:function(t){for(var e in this.state.subscribeTitles)-1!==this.state.subscribeTitles[e].anime_name.toLowerCase().indexOf(t.target.value.toLowerCase())||-1!==this.state.subscribeTitles[e].anime_name_rus.toLowerCase().indexOf(t.target.value.toLowerCase())?this.state.subscribeTitles[e].showed=!0:this.state.subscribeTitles[e].showed=!1,this.setState({subscribeTitles:this.state.subscribeTitles})}},{key:"switch",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0,mode:e.currentTarget.dataset.mode,subscribeTitles:[]}),t.next=3,this.props.subscribe(e.currentTarget.dataset.mode);case 3:a=t.sent,this.setState({subscribeTitles:a,loading:!1});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"sendClearRequest",value:function(){this.props.clearDisplay(this.returnClear)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"subscribe_size",style:{paddingBottom:"desktop_web"===this.props.client?"0px":"60px"}},"desktop_web"===this.props.client?i.a.createElement($.a,{vertical:"top"},i.a.createElement(pt.a,null,i.a.createElement(ft.a,{after:i.a.createElement(kt.a,null),selected:"current"===this.state.mode,"data-mode":"current",onClick:this.switch},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"),i.a.createElement(ft.a,{after:i.a.createElement(gt.a,null),selected:"old"===this.state.mode,"data-mode":"old",onClick:this.switch},"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439"))):null,"desktop_web"===this.props.client?i.a.createElement(H.a,{className:"Search--web",theme:"default",onChange:this.searchUpdate}):i.a.createElement($.a,{vertical:"top"},i.a.createElement(H.a,{theme:"default",onChange:this.searchUpdate})),this.state.loading&&i.a.createElement(M.a,{size:"large"}),this.state.subscribeTitles.length>0&&this.state.subscribeTitles.map((function(e){return e.showed?i.a.createElement(dt,{anime:e,switch:t.props.switch,key:"sub_"+e.anime_id,resize:t.props.resize,mode:t.state.mode}):null})),0===this.state.subscribeTitles.length&&!this.state.loading&&i.a.createElement(Et.a,{style:{color:"var(--accent)",justifyContent:"space-around",width:"100%",display:"flex"}},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0430\u043d\u0438\u043c\u0435"),!this.state.loading&&i.a.createElement(Et.a,{style:{color:"var(--accent)",justifyContent:"space-around",display:"flex",marginTop:"15px"}},i.a.createElement(Z.a,{stretched:!0,style:{height:"40px"},onClick:this.sendClearRequest},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0432\u0441\u0435\u0445 \u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a")),"desktop_web"!==this.props.client?i.a.createElement($.a,{vertical:"bottom"},i.a.createElement(pt.a,null,i.a.createElement(ft.a,{after:i.a.createElement(kt.a,null),selected:"current"===this.state.mode,"data-mode":"current",onClick:this.switch},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"),i.a.createElement(ft.a,{after:i.a.createElement(gt.a,null),selected:"old"===this.state.mode,"data-mode":"old",onClick:this.switch},"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439"))):null)}}]),a}(i.a.Component),xt=a(126),_t=a.n(xt),jt=a(84),Ot=a.n(jt),Ct=a(83),Dt=a.n(Ct),Tt=a(213),It=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var s;return Object(d.a)(this,a),(s=e.call(this,t)).state={opened:!1,statDataAdded:void 0,statDataRemoved:void 0,statDataDate:void 0,statSubViews:void 0,statDubViews:void 0,statViewsPoints:void 0},s.click=s.click.bind(Object(p.a)(s)),s}return Object(m.a)(a,[{key:"click",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var a,s,i,n,r,c,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({opened:!this.state.opened}),this.state.opened){t.next=20;break}return this.setState({statDataAdded:void 0,statDataRemoved:void 0,statDataDate:void 0}),t.next=5,this.props.statistic(this.props.data.anime_id);case 5:a=t.sent,s=[],i=[],n=[],a.stat.forEach((function(t,e,a){s.push(t.added),i.push(t.removed),n.push(Tt(Date.parse(t.date),"dd.mm"))})),r=[],c=[],a.sub_view.forEach((function(t,e,a){c.push([t.num,t.view]),r.includes(t.num)||r.push(t.num)})),c.reverse(),o=[],a.dub_view.forEach((function(t,e,a){o.push([t.num,t.view]),r.includes(t.num)||r.push(t.num)})),o.reverse(),r.sort((function(t,e){return t-e})),console.log(r),this.setState({statDataAdded:s,statDataRemoved:i,statDataDate:n,statSubViews:c,statDubViews:o,statViewsPoints:r});case 20:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){this.props.resize()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"subscribeRow",onClick:this.click,key:"sub_"+this.props.data.anime_id},i.a.createElement("div",{className:"subscribeIconExtender"},this.state.opened?i.a.createElement(nt.a,{fill:"var(--accent)"}):i.a.createElement(ct.a,{fill:"var(--accent)"})),i.a.createElement("div",{className:"subscribeRowFullContent"},i.a.createElement("div",{className:"subscribeRowContent"},i.a.createElement("div",{className:"subscribeRowTitleNameContainer"},this.props.data.anime_name),i.a.createElement("div",{className:"statisticRowProgressContainer"},i.a.createElement(_t.a,{value:100*this.props.data.total/this.props.maxVotes})))),i.a.createElement("div",null,i.a.createElement(Ot.a,{type:"primary"},this.props.data.sub),i.a.createElement(Ot.a,null,this.props.data.dub))),i.a.createElement("div",{className:"fullTitleInformation",style:{display:this.state.opened?"flex":"none",minHeight:"10px",flexDirection:"column"}},void 0===this.state.statDataAdded&&void 0===this.state.statDataRemoved&&i.a.createElement(X.a,{size:"large",className:"fullTitleInformationSpinner"}),void 0!==this.state.statDataAdded&&void 0!==this.state.statDataRemoved&&i.a.createElement(Dt.a,{type:"line",width:"100%",height:"250px",series:[{name:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c",data:this.state.statDataAdded},{name:"\u041e\u0442\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c",data:this.state.statDataRemoved}],options:{chart:{background:"var(--background_light)",foreColor:"var(--accent)",defaultLocale:"en",toolbar:{show:!1},animations:{enabled:!1}},title:{text:"\u0414\u0438\u043d\u0430\u043c\u0438\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a",align:"center",margin:0},dataLabels:{enabled:!0},tooltip:{enabled:!1,shared:!1,marker:{show:!1}},labels:this.state.statDataDate,stroke:{curve:"smooth",width:"2"},xaxis:{labels:{showDuplicates:!0},tooltip:{enabled:!1}},yaxis:{tooltip:{enabled:!1}}}}),(void 0!==this.state.statSubViews&&this.state.statSubViews.length>0||void 0!==this.state.statDubViews&&this.state.statDubViews.length>0)&&i.a.createElement(Dt.a,{type:"line",width:"100%",height:"250px",series:[{name:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",data:this.state.statSubViews},{name:"\u041e\u0437\u0432\u0443\u0447\u043a\u0430",data:this.state.statDubViews}],options:{chart:{background:"var(--background_light)",foreColor:"var(--accent)",defaultLocale:"en",toolbar:{show:!1},animations:{enabled:!1}},title:{text:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0441\u0430\u0439\u0442",align:"center",margin:0},tooltip:{enabled:!1,shared:!1,marker:{show:!1}},stroke:{curve:"smooth",width:"2"},xaxis:{type:"category",tickAmount:this.state.statViewsPoints[this.state.statViewsPoints.length-1]-this.state.statViewsPoints[0],min:this.state.statViewsPoints[0],max:this.state.statViewsPoints[this.state.statViewsPoints.length-1],labels:{show:!0,showDuplicates:!0,hideOverlappingLabels:!1},tooltip:{enabled:!1},forceNiceScale:!0},yaxis:{tooltip:{enabled:!1},min:0,forceNiceScale:!0}}})))}}]),a}(i.a.Component),Nt=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var s;return Object(d.a)(this,a),(s=e.call(this,t)).state={minimumId:s.props.minimumId,statData:void 0,maxVotes:0},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.loader(this.state.minimumId);case 2:e=t.sent,Array.isArray(e)&&(e.sort((function(t,e){return e.total-t.total})),this.setState({statData:e,maxVotes:e[0].total}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){setTimeout(this.props.resize,300)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:this.props.mode+"_size",key:this.props.mode+"_size"},void 0==this.state.statData&&i.a.createElement(M.a,{size:"large"}),void 0!=this.state.statData&&this.state.statData.map((function(e){return i.a.createElement(It,{key:"sb_"+e.anime_id,data:e,maxVotes:t.state.maxVotes,resize:t.props.resize,statistic:t.props.statistic})})))}}]),a}(i.a.Component),Vt=a(127),Lt=a.n(Vt),Rt=a(118).sprintf,zt="https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/title/%s",At="https://api.sovetromantica.com/api/v1/notify/vkapp/get",Bt="https://api.sovetromantica.com/api/v1/notify/vkapp/get/old",Pt=function(t){Object(b.a)(a,t);var e=Object(f.a)(a);function a(t){var s;Object(d.a)(this,a),s=e.call(this,t);var i=x.a.parse(window.location.search),n=new FormData;for(var r in i)n.append(r,i[r]);if(s.state={mode:"subscribe",rights:i.vk_viewer_group_role,userId:i.vk_user_id,clientType:i.vk_platform,urlData:n,popout:null},s.selectScreen=s.selectScreen.bind(Object(p.a)(s)),s.resizeVkIframe=s.resizeVkIframe.bind(Object(p.a)(s)),s.switchSubscribeStatus=s.switchSubscribeStatus.bind(Object(p.a)(s)),s.getSubscribeList=s.getSubscribeList.bind(Object(p.a)(s)),s.clearSubscriptions=s.clearSubscriptions.bind(Object(p.a)(s)),s.clearSubscriptionsLaunch=s.clearSubscriptionsLaunch.bind(Object(p.a)(s)),s.closePopout=s.closePopout.bind(Object(p.a)(s)),s.getStatistic=s.getStatistic.bind(Object(p.a)(s)),s.height=0,"editor"===s.state.rights||"admin"===s.state.rights){var c=x.a.parse(window.location.hash);"subscribe"!==c.mode&&"statistic_full"!==c.mode&&"statistic_cur"!==c.mode||(s.state.mode=c.mode)}return s}return Object(m.a)(a,[{key:"selectScreen",value:function(t){if(this.setState({mode:t.currentTarget.dataset.mode}),"editor"===this.state.rights||"admin"===this.state.rights){var e=x.a.parse(window.location.hash);e.mode=t.currentTarget.dataset.mode,o.a.send("VKWebAppSetLocation",{location:x.a.stringify(e)})}}},{key:"componentDidUpdate",value:function(t,e,a){this.resizeVkIframe()}},{key:"componentDidMount",value:function(){this.resizeVkIframe()}},{key:"resizeVkIframe",value:function(){if("desktop_web"===this.state.clientType&&void 0!=document.getElementById(this.state.mode+"_size")){var t=document.getElementById(this.state.mode+"_size").scrollHeight+110;this.height!==t&&(this.height=t,o.a.send("VKWebAppResizeWindow",{width:730,height:t}))}}},{key:"getSubscribeList",value:function(){var t=Object(h.a)(u.a.mark((function t(){var e,a,s,i,n=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"current",t.next=3,fetch("current"===e?At:Bt,{method:"POST",body:this.state.urlData});case 3:return a=t.sent,t.next=6,a.json();case 6:for(i in s=t.sent)s[i].showed=!0;return t.abrupt("return",s);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getStatistic",value:function(){var t=Object(h.a)(u.a.mark((function t(){var e,a,s=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e=s.length>0&&void 0!==s[0]?s[0]:0)){t.next=3;break}return t.abrupt("return",void 0);case 3:return t.next=5,fetch(Rt(zt,e),{method:"POST",body:this.state.urlData});case 5:return a=t.sent,t.next=8,a.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clearSubscriptions",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.sovetromantica.com/api/v1/notify/vkapp/clear",{method:"POST",body:this.state.urlData});case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clearSubscriptionsLaunch",value:function(t){this.setState({popout:i.a.createElement(Lt.a,{actions:[{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,style:"destructive",action:t},{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"}],onClose:this.closePopout},i.a.createElement("h2",null,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),i.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f? ",i.a.createElement("br",null),"\u0411\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0432\u0441\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0442\u0430\u0440\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438. ",i.a.createElement("br",null),"\u0412\u044b \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043d\u043e\u0432\u044b\u0445 \u0441\u0435\u0440\u0438\u044f\u0445."))})}},{key:"closePopout",value:function(t){console.log(t),this.setState({popout:null})}},{key:"switchSubscribeStatus",value:function(){var t=Object(h.a)(u.a.mark((function t(e,a){var s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e||void 0===e||void 0===a){t.next=10;break}return t.next=3,fetch(Rt("https://api.sovetromantica.com/api/v1/notify/vkapp/switch/%s/%s",e,a),{method:"POST",body:this.state.urlData});case 3:return s=t.sent,t.next=6,s.json();case 6:return i=t.sent,t.abrupt("return",i);case 10:console.log("switch parameters are wrong");case 11:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"loadStatistic",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0==e&&(e=0),t.next=3,fetch(Rt("https://api.sovetromantica.com/api/v1/notify/vkapp/statistic/%s",e),{method:"POST",body:this.state.urlData});case 3:return a=t.sent,t.next=6,a.json();case 6:return s=t.sent,t.abrupt("return",s);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(g.a,{activeView:"subTitle"},i.a.createElement(E.a,{id:"subTitle",activePanel:this.state.mode,popout:this.state.popout},i.a.createElement(k.a,{id:"subscribe"},i.a.createElement(W,{rights:this.state.rights,mode:"subscribe",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(St,{switch:this.switchSubscribeStatus,resize:this.resizeVkIframe,subscribe:this.getSubscribeList,client:this.state.clientType,rights:this.state.rights,clearDisplay:this.clearSubscriptionsLaunch,clear:this.clearSubscriptions})),i.a.createElement(k.a,{id:"statistic_full"},i.a.createElement(W,{rights:this.state.rights,mode:"statistic_full",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(Nt,{minimumId:"0",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe,statistic:this.getStatistic})),i.a.createElement(k.a,{id:"statistic_cur"},i.a.createElement(W,{rights:this.state.rights,mode:"statistic_cur",select:this.selectScreen,client:this.state.clientType}),i.a.createElement(Nt,{minimumId:"1214",loader:this.loadStatistic.bind(this),client:this.state.clientType,mode:this.state.mode,resize:this.resizeVkIframe,statistic:this.getStatistic}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppUpdateConfig":var e=document.createAttribute("scheme");e.value=t.detail.data.scheme?t.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(e);break;default:console.log(t.detail.type)}})),o.a.send("VKWebAppInit",{}),r.a.render(i.a.createElement(Pt,null),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.342d16a0.chunk.js.map