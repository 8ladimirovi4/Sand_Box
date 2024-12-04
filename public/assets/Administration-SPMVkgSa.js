import{s as wo,r as c,I as la,C as Ge,O as H,c as Je,P as mt,d as gt,t as qn,e as rn,i as ee,D as K,U as sa,m as ce,w as yr,o as en,p as Eo,n as ue,j as E,v as se,x as ca,q as Gn,y as ua,R as fa,S as Po,z as Oo,A as To,B as Io,E as da}from"./index-BYWN6Svt.js";import{C as pa,D as Jn,I as Ao}from"./DatatableComponent-CjNpm28P.js";import{B as at}from"./ButtonComponent-BgmLcxtz.js";import{T as No}from"./index.esm-DD09of9s.js";var ma={exports:{}},Do="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jo=Do,_o=jo;function ga(){}function ha(){}ha.resetWarningCache=ga;var Mo=function(){function e(a,r,o,s,l,u){if(u!==_o){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ha,resetWarningCache:ga};return n.PropTypes=n,n};ma.exports=Mo();var Ro=ma.exports;const U=wo(Ro);function On(){return On=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},On.apply(this,arguments)}var va=c.memo(c.forwardRef(function(e,t){var n=la.getPTI(e);return c.createElement("svg",On({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"}))}));va.displayName="ChevronLeftIcon";function Tn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Lo(e){if(Array.isArray(e))return Tn(e)}function Fo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ba(e,t){if(e){if(typeof e=="string")return Tn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tn(e,t)}}function $o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uo(e){return Lo(e)||Fo(e)||ba(e)||$o()}function Rt(e){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rt(e)}function Ko(e,t){if(Rt(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(Rt(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bo(e){var t=Ko(e,"string");return Rt(t)==="symbol"?t:String(t)}function ya(e,t,n){return t=Bo(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zo(e){if(Array.isArray(e))return e}function Ho(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,o,s,l=[],u=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(a=o.call(n)).done)&&(l.push(a.value),l.length!==t);u=!0);}catch(m){f=!0,r=m}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return l}}function Wo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(e,t){return zo(e)||Ho(e,t)||ba(e,t)||Wo()}function xr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xr(Object(n),!0).forEach(function(a){ya(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Vo={navcontent:"p-tabview-nav-content",nav:"p-tabview-nav",inkbar:"p-tabview-ink-bar",panelcontainer:function(t){var n=t.props;return ee("p-tabview-panels",n.panelContainerClassName)},prevbutton:"p-tabview-nav-prev p-tabview-nav-btn p-link",nextbutton:"p-tabview-nav-next p-tabview-nav-btn p-link",root:function(t){var n=t.props;return ee("p-tabview p-component",{"p-tabview-scrollable":n.scrollable})},navcontainer:"p-tabview-nav-container",tab:{header:function(t){var n=t.selected,a=t.disabled,r=t.headerClassName,o=t._className;return ee("p-unselectable-text",{"p-tabview-selected p-highlight":n,"p-disabled":a},r,o)},headertitle:"p-tabview-title",headeraction:"p-tabview-nav-link",closeIcon:"p-tabview-close",content:function(t){var n=t.props,a=t.selected,r=t.getTabProp,o=t.tab,s=t.isSelected,l=t.shouldUseTab,u=t.index;return l(o,u)&&(!n.renderActiveOnly||s(u))?ee(r(o,"contentClassName"),r(o,"className"),"p-tabview-panel",{"p-hidden":!a}):void 0}}},Xo={tab:{header:function(t){var n=t.headerStyle,a=t._style;return Vt(Vt({},n||{}),a||{})},content:function(t){var n=t.props,a=t.getTabProp,r=t.tab,o=t.isSelected,s=t.shouldUseTab,l=t.index;return s(r,l)&&(!n.renderActiveOnly||o(l))?Vt(Vt({},a(r,"contentStyle")||{}),a(r,"style")||{}):void 0}}},Xt=Ge.extend({defaultProps:{__TYPE:"TabView",id:null,activeIndex:0,className:null,onBeforeTabChange:null,onBeforeTabClose:null,onTabChange:null,onTabClose:null,panelContainerClassName:null,panelContainerStyle:null,renderActiveOnly:!0,scrollable:!1,style:null,children:void 0},css:{classes:Vo,inlineStyles:Xo}}),ct=Ge.extend({defaultProps:{__TYPE:"TabPanel",children:void 0,className:null,closable:!1,closeIcon:null,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,leftIcon:null,nextButton:null,prevButton:null,rightIcon:null,style:null,visible:!0},getCProp:function(t,n){return H.getComponentProp(t,n,ct.defaultProps)},getCProps:function(t){return H.getComponentProps(t,ct.defaultProps)},getCOtherProps:function(t){return H.getComponentDiffProps(t,ct.defaultProps)}});function Sr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sr(Object(n),!0).forEach(function(a){ya(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var xa=function(){},Sa=c.forwardRef(function(e,t){var n=Je(),a=c.useContext(mt),r=Xt.getProps(e,a),o=c.useState(r.id),s=Ot(o,2),l=s[0],u=s[1],f=c.useState(!0),m=Ot(f,2),b=m[0],S=m[1],j=c.useState(!1),I=Ot(j,2),A=I[0],L=I[1],$=c.useState([]),_=Ot($,2),w=_[0],O=_[1],N=c.useState(r.activeIndex),B=Ot(N,2),V=B[0],re=B[1],W=c.useRef(null),k=c.useRef(null),J=c.useRef(null),te=c.useRef(null),X=c.useRef(null),ve=c.useRef(null),be=c.useRef({}),Ne=r.onTabChange?r.activeIndex:V,Ze=c.Children.count(r.children),ye={props:r,state:{id:l,isPrevButtonDisabled:b,isNextButtonDisabled:A,hiddenTabsState:w,activeIndex:V}},xe=Xt.setMetaData(Yt({},ye)),ne=xe.ptm,De=xe.ptmo,Q=xe.cx,fe=xe.sx,vt=xe.isUnstyled;gt(Xt.css.styles,vt,{name:"tabview"});var ge=function(g,x,C){var D={props:g.props,parent:ye,context:{index:C,count:Ze,first:C===0,last:C===Ze-1,active:C==V,disabled:ae(g,"disabled")}};return n(ne("tab.".concat(x),{tab:D}),ne("tabpanel.".concat(x),{tabpanel:D}),ne("tabpanel.".concat(x),D),De(ae(g,"pt"),x,D))},oe=function(g){return g===Ne},ae=function(g,x){return ct.getCProp(g,x)},ie=function(g){return g&&ae(g,"visible")&&H.isValidChild(g,"TabPanel")&&w.every(function(x){return x!==g.key})},bt=function(g){var x=c.Children.map(r.children,function(C,D){if(ie(C))return{tab:C,index:D}});return x.find(function(C){var D=C.tab,he=C.index;return!ae(D,"disabled")&&he>=g})||x.reverse().find(function(C){var D=C.tab,he=C.index;return!ae(D,"disabled")&&g>he})},yt=function(g,x){g.preventDefault();var C=r.onBeforeTabClose,D=r.onTabClose,he=r.children,ze=he[x].key;C&&C({originalEvent:g,index:x})===!1||(O([].concat(Uo(w),[ze])),D&&D({originalEvent:g,index:x}))},je=function(g,x,C){Qe(g,x,C)},Qe=function(g,x,C){if(g&&g.preventDefault(),!ae(x,"disabled")){if(r.onBeforeTabChange&&r.onBeforeTabChange({originalEvent:g,index:C})===!1)return;r.onTabChange?r.onTabChange({originalEvent:g,index:C}):re(C)}v({index:C})},et=function(g,x,C){switch(g.code){case"ArrowLeft":St(g);break;case"ArrowRight":xt(g);break;case"Home":tt(g);break;case"End":nt(g);break;case"PageDown":Ct(g);break;case"PageUp":kt(g);break;case"Enter":case"NumpadEnter":case"Space":wt(g,x,C);break}},xt=function(g){var x=Ue(g.target.parentElement);x?M(x):tt(g),g.preventDefault()},St=function(g){var x=Ke(g.target.parentElement);x?M(x):nt(g),g.preventDefault()},tt=function(g){var x=Et();M(x),g.preventDefault()},nt=function(g){var x=rt();M(x),g.preventDefault()},Ct=function(g){v({index:c.Children.count(r.children)-1}),g.preventDefault()},kt=function(g){v({index:0}),g.preventDefault()},wt=function(g,x,C){Qe(g,x,C),g.preventDefault()},Ue=function(g){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,C=x?g:g.nextElementSibling;return C?K.getAttribute(C,"data-p-disabled")||K.getAttribute(C,"data-pc-section")==="inkbar"?Ue(C):K.findSingle(C,'[data-pc-section="headeraction"]'):null},Ke=function(g){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,C=x?g:g.previousElementSibling;return C?K.getAttribute(C,"data-p-disabled")||K.getAttribute(C,"data-pc-section")==="inkbar"?Ke(C):K.findSingle(C,'[data-pc-section="headeraction"]'):null},Et=function(){return Ue(J.current.firstElementChild,!0)},rt=function(){return Ke(J.current.lastElementChild,!0)},M=function(g){g&&(K.focus(g),v({element:g}))},p=function(){var g=be.current["tab_".concat(Ne)];te.current.style.width=K.getWidth(g)+"px",te.current.style.left=K.getOffset(g).left-K.getOffset(J.current).left+"px"},v=function(g){var x=g.index,C=g.element,D=C||be.current["tab_".concat(x)];D&&D.scrollIntoView&&D.scrollIntoView({block:"nearest"})},T=function(){var g=k.current,x=g.scrollLeft,C=g.scrollWidth,D=K.getWidth(k.current);S(x===0),L(parseInt(x)===C-D)},z=function(g){r.scrollable&&T(),g.preventDefault()},Y=function(){return[X.current,ve.current].reduce(function(g,x){return x?g+K.getWidth(x):g},0)},y=function(){var g=K.getWidth(k.current)-Y(),x=k.current.scrollLeft-g;k.current.scrollLeft=x<=0?0:x},i=function(){var g=K.getWidth(k.current)-Y(),x=k.current.scrollLeft+g,C=k.current.scrollWidth-g;k.current.scrollLeft=x>=C?C:x},d=function(){S(!0),L(!1),O([]),r.onTabChange?r.onTabChange({index:Ne}):re(r.activeIndex)};c.useEffect(function(){p(),T()}),qn(function(){l||u(sa())}),rn(function(){if(H.isNotEmpty(w)){var F=bt(w[w.length-1]);F&&je(null,F.tab,F.index)}},[w]),rn(function(){r.activeIndex!==V&&v({index:r.activeIndex})},[r.activeIndex]),c.useImperativeHandle(t,function(){return{props:r,reset:d,getElement:function(){return W.current}}});var h=function(g,x){var C=oe(x),D=ct.getCProps(g),he=D.headerStyle,ze=D.headerClassName,hn=D.style,vn=D.className,bn=D.disabled,fr=D.leftIcon,dr=D.rightIcon,po=D.header,pr=D.headerTemplate,mo=D.closable,go=D.closeIcon,ho=l+"_header_"+x,mr=l+x+"_content",vo=bn||!C?-1:0,gr=fr&&ce.getJSXIcon(fr,void 0,{props:r}),bo=n({className:Q("tab.headertitle")},ge(g,"headertitle",x)),hr=c.createElement("span",bo,po),vr=dr&&ce.getJSXIcon(dr,void 0,{props:r}),br=n({className:Q("tab.closeIcon"),onClick:function(Ce){return yt(Ce,x)}},ge(g,"closeIcon",x)),yo=go||c.createElement(Eo,br),xo=mo?ce.getJSXIcon(yo,Yt({},br),{props:r}):null,So=n({id:ho,role:"tab",className:Q("tab.headeraction"),tabIndex:vo,"aria-controls":mr,"aria-selected":C,"aria-disabled":bn,onClick:function(Ce){return je(Ce,g,x)},onKeyDown:function(Ce){return et(Ce,g,x)}},ge(g,"headeraction",x)),yn=c.createElement("a",So,gr,hr,vr,xo,c.createElement(en,null));if(pr){var Co={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(Ce){return je(Ce,g,x)},onKeyDown:function(Ce){return et(Ce,g,x)},leftIconElement:gr,titleElement:hr,rightIconElement:vr,element:yn,props:r,index:x,selected:C,ariaControls:mr};yn=H.getJSXElement(pr,Co)}var ko=n({ref:function(Ce){return be.current["tab_".concat(x)]=Ce},className:Q("tab.header",{selected:C,disabled:bn,headerClassName:ze,_className:vn}),style:fe("tab.header",{headerStyle:he,_style:hn}),role:"presentation"},ge(g,"root",x),ge(g,"header",x));return c.createElement("li",ko,yn)},R=function(){return c.Children.map(r.children,function(g,x){if(ie(g))return h(g,x)})},q=function(){var g=R(),x=n({id:l+"_navcontent",ref:k,className:Q("navcontent"),style:r.style,onScroll:z},ne("navcontent")),C=n({ref:J,className:Q("nav"),role:"tablist"},ne("nav")),D=n({ref:te,"aria-hidden":"true",role:"presentation",className:Q("inkbar")},ne("inkbar"));return c.createElement("div",x,c.createElement("ul",C,g,c.createElement("li",D)))},le=function(){var g=n({className:Q("panelcontainer"),style:r.panelContainerStyle},ne("panelcontainer")),x=c.Children.map(r.children,function(C,D){if(ie(C)&&(!r.renderActiveOnly||oe(D))){var he=oe(D),ze=l+D+"_content",hn=l+"_header_"+D,vn=n({id:ze,className:Q("tab.content",{props:r,selected:he,getTabProp:ae,tab:C,isSelected:oe,shouldUseTab:ie,index:D}),style:fe("tab.content",{props:r,getTabProp:ae,tab:C,isSelected:oe,shouldUseTab:ie,index:D}),role:"tabpanel","aria-labelledby":hn},ct.getCOtherProps(C),ge(C,"root",D),ge(C,"content",D));return c.createElement("div",vn,r.renderActiveOnly?he&&ae(C,"children"):ae(C,"children"))}});return c.createElement("div",g,x)},Se=function(){var g=n({"aria-hidden":"true"},ne("previcon")),x=r.prevButton||c.createElement(va,g),C=ce.getJSXIcon(x,Yt({},g),{props:r}),D=n({ref:X,type:"button",className:Q("prevbutton"),"aria-label":yr("previousPageLabel"),onClick:function(ze){return y()}},ne("prevbutton"));return r.scrollable&&!b?c.createElement("button",D,C,c.createElement(en,null)):null},Be=function(){var g=n({"aria-hidden":"true"},ne("nexticon")),x=r.nextButton||c.createElement(pa,g),C=ce.getJSXIcon(x,Yt({},g),{props:r}),D=n({ref:ve,type:"button",className:Q("nextbutton"),"aria-label":yr("nextPageLabel"),onClick:function(ze){return i()}},ne("nextbutton"));if(r.scrollable&&!A)return c.createElement("button",D,C,c.createElement(en,null))},Ht=n({id:l,ref:W,style:r.style,className:ee(r.className,Q("root"))},Xt.getOtherProps(r),ne("root")),gn=n({className:Q("navcontainer")},ne("navcontainer")),Wt=q(),_e=le(),uo=Se(),fo=Be();return c.createElement("div",Ht,c.createElement("div",gn,uo,Wt,fo),_e)});xa.displayName="TabPanel";Sa.displayName="TabView";const Yo=ue(Sa)`
  width: 100%;

  /* tab header container */
  &.p-tabview .p-tabview-nav {
    display: flex;
    gap: 1px;
  }
  /* tab header */
  &.p-tabview .p-tabview-nav li {
    width: 100%;
  }

  /*tab link not selected */
  &.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    display: flex;
    justify-content: center;
    background: #dcdcdc;
    color: #838383;
    height: 50px;
  }
  /*tab link hover */
  &.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: #d3d3d3;
    color: #838383;
  }

  /*tab link selected */
  &.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #d3d3d3;
    color: #0bc8cc;
    border-bottom: 3px solid #0bc8cc;
  }

  /* tab panel container*/
  &.p-tabview .p-tabview-panels {
  }

  /* tab panel */
  &.p-tabview .p-tabview-panel {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`,qo=({tabs:e,defaultTab:t=1})=>E.jsx(Yo,{activeIndex:t-1,"data-qatype":"tabview",children:e.map(n=>E.jsx(xa,{header:n.header,children:n.content},se()))});var qt=Ge.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
        @layer primereact {
            .p-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            
            .p-toolbar-group-start,
            .p-toolbar-group-center,
            .p-toolbar-group-end {
                display: flex;
                align-items: center;
            }
            
            .p-toolbar-group-left,
            .p-toolbar-group-right {
                display: flex;
                align-items: center;
            }
        }
        `}}),Ca=c.memo(c.forwardRef(function(e,t){var n=Je(),a=c.useContext(mt),r=qt.getProps(e,a),o=c.useRef(null),s=H.getJSXElement(r.left||r.start,r),l=H.getJSXElement(r.center,r),u=H.getJSXElement(r.right||r.end,r),f=qt.setMetaData({props:r}),m=f.ptm,b=f.cx,S=f.isUnstyled;gt(qt.css.styles,S,{name:"toolbar"}),c.useImperativeHandle(t,function(){return{props:r,getElement:function(){return o.current}}});var j=n({className:b("start")},m("start")),I=n({className:b("center")},m("center")),A=n({className:b("end")},m("end")),L=n({id:r.id,ref:o,style:r.style,className:ee(r.className,b("root")),role:"toolbar"},qt.getOtherProps(r),m("root"));return c.createElement("div",L,c.createElement("div",j,s),c.createElement("div",I,l),c.createElement("div",A,u))}));Ca.displayName="Toolbar";const Go=ue.div`
  display: flex;
  flex: 1;
`,Jo=ue.div`
  display: flex;
  width: 100%;
  gap: 50px;
`,an=ue.div`
  height: 25px;
  width: 100%;
`,ot=ue.div`
  width: ${({width:e})=>e?e+"px":"100%"};
  height: ${({height:e})=>e?e+"px":"100%"};
  .fa-plus,
  .fa-minus {
    font-size: 12px;
  }
  .fa-check-square,
  .fa-square {
  }
`,Zo=ue(Ca)`
  &.p-toolbar .p-toolbar-group-start {
    width: 100%;
  }
`,Qo=ue.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
`,ei=ue.div`
  display: flex;
  justify-content: left;
  width: 100%;
`,ti=ue.div`
  display: flex;
  justify-content: right;
  gap: 10px;
  width: 100%;
  padding-left: 10%;
`,on={getTreeNodesData(){return[{key:"0",label:"Авторизация",data:"Documents Folder",icon:"pi pi-fw pi-file",children:[{key:"0-1",label:"Вход",data:"Home Folder",icon:"pi pi-fw pi-file"}]},{key:"1",label:"Пользователи",data:"Events Folder",icon:"pi pi-fw pi-file",children:[{key:"1-0",label:"Просмотр",icon:"pi pi-fw pi-file",data:"Meeting"},{key:"1-1",label:"Редактирование",icon:"pi pi-fw pi-file",data:"Product Launch"}]},{key:"2",label:"Конфигуратор опроса",data:"Movies Folder",icon:"pi pi-fw pi-file",children:[{key:"2-0",label:"Просмотр",icon:"pi pi-fw pi-file",data:"Meeting"},{key:"2-1",label:"Редактирование",icon:"pi pi-fw pi-file",data:"Product Launch"}]},{key:"3",label:"События",data:"Movies Folder",icon:"pi pi-fw pi-file",children:[{key:"3-0",label:"Просмотр",icon:"pi pi-fw pi-file",data:"Meeting"},{key:"3-1",label:"Квитирование",icon:"pi pi-fw pi-file",data:"Product Launch"}]},{key:"4",label:"Оборудование",data:"Movies Folder",icon:"pi pi-fw pi-file",children:[{key:"4-0",label:"Просмотр",icon:"pi pi-fw pi-file",data:"Meeting"},{key:"4-1",label:"Редактирование",icon:"pi pi-fw pi-file",data:"Product Launch"},{key:"4-2",label:"Выполнение команд",icon:"pi pi-fw pi-file",data:"Product Launch"},{key:"4-3",label:"Запись уставок",icon:"pi pi-fw pi-file",data:"Product Launch"}]}]},getRoleTableNodesData(){return[{id:se(),name:"system",permissions:"",trash:""},{id:se(),name:"Инженер",permissions:"",trash:""},{id:se(),name:"HMI",permissions:"",trash:""}]},getUsersTableNodesData(){return[{id:se(),login:"system",roles:["Администрирование"],ip:"",home_page:"select",key:"key",trash:"trash"},{id:se(),login:"Инженер",roles:["Оператор","Инженер"],ip:"",home_page:"select",key:"key",trash:"trash"},{id:se(),login:"HMI",roles:["HMI"],ip:"192.168.0.10",home_page:"select",key:"key",trash:"trash"}]},getAuthSettingsTableNodesData(){return[{id:se(),name:"Стартовая страница",value:"1",type:"1"},{id:se(),name:"Разрешить гостевой доступ по IP",value:"",type:"2"},{id:se(),name:"Таймаут сессии, с",value:"20",type:"3"},{id:se(),name:"Кол-во попыток авторизации",value:"10",type:"3"},{id:se(),name:"Время блокировки пользователя, мин",value:"30",type:"3"}]},getUsersTableNodes(){return Promise.resolve(this.getUsersTableNodesData())},getTreeNodes(){return Promise.resolve(this.getTreeNodesData())},getRoleTableNodes(){return Promise.resolve(this.getRoleTableNodesData())},getAuthSettingsTableNodes(){return Promise.resolve(this.getAuthSettingsTableNodesData())}};function Dt(){return Dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Dt.apply(this,arguments)}function Lt(e){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lt(e)}function ni(e,t){if(Lt(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(Lt(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ri(e){var t=ni(e,"string");return Lt(t)==="symbol"?t:String(t)}function ai(e,t,n){return t=ri(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oi(e){if(Array.isArray(e))return e}function ii(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,o,s,l=[],u=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(a=o.call(n)).done)&&(l.push(a.value),l.length!==t);u=!0);}catch(m){f=!0,r=m}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return l}}function Cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function li(e,t){if(e){if(typeof e=="string")return Cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cr(e,t)}}function si(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ci(e,t){return oi(e)||ii(e,t)||li(e,t)||si()}var ui={box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:function(t){var n=t.props,a=t.checked,r=t.context;return ee("p-checkbox p-component",{"p-highlight":a,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":r&&r.inputStyle==="filled"})}},Gt=Ge.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:ui}});function kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function wr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kr(Object(n),!0).forEach(function(a){ai(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var ka=c.memo(c.forwardRef(function(e,t){var n=Je(),a=c.useContext(mt),r=Gt.getProps(e,a),o=c.useState(!1),s=ci(o,2),l=s[0],u=s[1],f=Gt.setMetaData({props:r,state:{focused:l},context:{checked:r.checked===r.trueValue,disabled:r.disabled}}),m=f.ptm,b=f.cx,S=f.isUnstyled;gt(Gt.css.styles,S,{name:"checkbox"});var j=c.useRef(null),I=c.useRef(r.inputRef),A=function(){return r.checked===r.trueValue},L=function(k){if(!(r.disabled||r.readonly)&&r.onChange){var J,te=A(),X=te?r.falseValue:r.trueValue,ve={originalEvent:k,value:r.value,checked:X,stopPropagation:function(){k==null||k.stopPropagation()},preventDefault:function(){k==null||k.preventDefault()},target:{type:"checkbox",name:r.name,id:r.id,value:r.value,checked:X}};if(r==null||(J=r.onChange)===null||J===void 0||J.call(r,ve),k.defaultPrevented)return;K.focus(I.current)}},$=function(){var k;u(!0),r==null||(k=r.onFocus)===null||k===void 0||k.call(r)},_=function(){var k;u(!1),r==null||(k=r.onBlur)===null||k===void 0||k.call(r)};c.useImperativeHandle(t,function(){return{props:r,focus:function(){return K.focus(I.current)},getElement:function(){return j.current},getInput:function(){return I.current}}}),c.useEffect(function(){H.combinedRefs(I,r.inputRef)},[I,r.inputRef]),rn(function(){I.current.checked=A()},[r.checked,r.trueValue]),qn(function(){r.autoFocus&&K.focus(I.current,r.autoFocus)});var w=A(),O=H.isNotEmpty(r.tooltip),N=Gt.getOtherProps(r),B=n({id:r.id,className:ee(r.className,b("root",{checked:w,context:a})),style:r.style,"data-p-highlight":w,"data-p-disabled":r.disabled,onContextMenu:r.onContextMenu,onMouseDown:r.onMouseDown},N,m("root")),V=function(){var k=H.reduceKeys(N,K.ARIA_PROPS),J=n(wr({id:r.inputId,type:"checkbox",className:b("input"),name:r.name,tabIndex:r.tabIndex,onFocus:function(X){return $()},onBlur:function(X){return _()},onChange:function(X){return L(X)},disabled:r.disabled,readOnly:r.readOnly,required:r.required,"aria-invalid":r.invalid,checked:w},k),m("input"));return c.createElement("input",Dt({ref:I},J))},re=function(){var k=n({className:b("icon")},m("icon")),J=n({className:b("box",{checked:w}),"data-p-highlight":w,"data-p-disabled":r.disabled},m("box")),te=w?r.icon||c.createElement(Gn,k):null,X=ce.getJSXIcon(te,wr({},k),{props:r,checked:w});return c.createElement("div",J,X)};return c.createElement(c.Fragment,null,c.createElement("div",Dt({ref:j},B),V(),re()),O&&c.createElement(ca,Dt({target:j,content:r.tooltip,pt:m("tooltip")},r.tooltipOptions)))}));ka.displayName="Checkbox";const fi=ue(ka)`
`,di=({checked:e,onChange:t=()=>{}})=>E.jsx(fi,{checked:e,onChange:t,"data-qatype":"checkbox"}),pi=()=>{const[e,t]=c.useState([]),[n]=c.useState([{label:"О Системе",value:"1"},{label:"Дашборд2",value:"2"},{label:"Дашборд3",value:"3"}]);c.useEffect(()=>{on.getAuthSettingsTableNodes().then(l=>t(l))},[]);const a=(l,u)=>{if(e){const f=e.map(m=>m.id===l.id?{...m,value:u}:m);t(f)}},r=(l,u)=>{const f=e.map(m=>m.id===l.id?{...m,value:u}:m);t(f)},s=[{field:"name",header:"Наименование"},{field:"value",header:"Значение",style:{width:"300px",minWidth:"300px"},align:"center",body:l=>{switch(l.type){case"1":return E.jsx(ua,{value:l.value,onChange:u=>a(l,u.value),options:n});case"2":return E.jsx(di,{checked:typeof l.value=="boolean"?l.value:!1,onChange:u=>r(l,u.checked)});case"3":return E.jsx("span",{children:l.value});default:return E.jsx("span",{children:l.value})}}}];return E.jsx(Jn,{columns:s,items:e})},Er=()=>{};let Zn={},wa={},Ea=null,Pa={mark:Er,measure:Er};try{typeof window<"u"&&(Zn=window),typeof document<"u"&&(wa=document),typeof MutationObserver<"u"&&(Ea=MutationObserver),typeof performance<"u"&&(Pa=performance)}catch{}const{userAgent:Pr=""}=Zn.navigator||{},Le=Zn,G=wa,Or=Ea,Jt=Pa;Le.document;const Ae=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Oa=~Pr.indexOf("MSIE")||~Pr.indexOf("Trident/");var Z="classic",Ta="duotone",de="sharp",pe="sharp-duotone",mi=[Z,Ta,de,pe],gi={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Tr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hi=["kit"],vi=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,bi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,yi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},xi={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Si={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ci={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ki={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},wi={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ia={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ei=["solid","regular","light","thin","duotone","brands"],Aa=[1,2,3,4,5,6,7,8,9,10],Pi=Aa.concat([11,12,13,14,15,16,17,18,19,20]),At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oi=[...Object.keys(Ci),...Ei,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY].concat(Aa.map(e=>"".concat(e,"x"))).concat(Pi.map(e=>"w-".concat(e))),Ti={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ii={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ai={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ir={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Te="___FONT_AWESOME___",In=16,Na="fa",Da="svg-inline--fa",Ye="data-fa-i2svg",An="data-fa-pseudo-element",Ni="data-fa-pseudo-element-pending",Qn="data-prefix",er="data-icon",Ar="fontawesome-i2svg",Di="async",ji=["HTML","HEAD","STYLE","SCRIPT"],ja=(()=>{try{return!0}catch{return!1}})(),_a=[Z,de,pe];function Bt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Z]}})}const Ma={...Ia};Ma[Z]={...Ia[Z],...Tr.kit,...Tr["kit-duotone"]};const Ve=Bt(Ma),Nn={...wi};Nn[Z]={...Nn[Z],...Ir.kit,...Ir["kit-duotone"]};const Ft=Bt(Nn),Dn={...ki};Dn[Z]={...Dn[Z],...Ai.kit};const Xe=Bt(Dn),jn={...Si};jn[Z]={...jn[Z],...Ii.kit};const _i=Bt(jn),Mi=vi,Ra="fa-layers-text",Ri=bi,Li={...gi};Bt(Li);const Fi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xn=At,dt=new Set;Object.keys(Ft[Z]).map(dt.add.bind(dt));Object.keys(Ft[de]).map(dt.add.bind(dt));Object.keys(Ft[pe]).map(dt.add.bind(dt));const $i=[...hi,...Oi],jt=Le.FontAwesomeConfig||{};function Ui(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ki(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}G&&typeof G.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Ki(Ui(n));r!=null&&(jt[a]=r)});const La={styleDefault:"solid",familyDefault:"classic",cssPrefix:Na,replacementClass:Da,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);const pt={...La,...jt};pt.autoReplaceSvg||(pt.observeMutations=!1);const P={};Object.keys(La).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){pt[e]=t,_t.forEach(n=>n(P))},get:function(){return pt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){pt.cssPrefix=e,_t.forEach(t=>t(P))},get:function(){return pt.cssPrefix}});Le.FontAwesomeConfig=P;const _t=[];function Bi(e){return _t.push(e),()=>{_t.splice(_t.indexOf(e),1)}}const Me=In,Ee={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zi(e){if(!e||!Ae)return;const t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=G.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return G.head.insertBefore(t,a),e}const Hi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $t(){let e=12,t="";for(;e-- >0;)t+=Hi[Math.random()*62|0];return t}function ht(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tr(e){return e.classList?ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Fa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wi(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Fa(e[n]),'" '),"").trim()}function fn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function nr(e){return e.size!==Ee.size||e.x!==Ee.x||e.y!==Ee.y||e.rotate!==Ee.rotate||e.flipX||e.flipY}function Vi(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Xi(e){let{transform:t,width:n=In,height:a=In,startCentered:r=!1}=e,o="";return r&&Oa?o+="translate(".concat(t.x/Me-n/2,"em, ").concat(t.y/Me-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(t.x/Me,"em), calc(-50% + ").concat(t.y/Me,"em)) "):o+="translate(".concat(t.x/Me,"em, ").concat(t.y/Me,"em) "),o+="scale(".concat(t.size/Me*(t.flipX?-1:1),", ").concat(t.size/Me*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Yi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $a(){const e=Na,t=Da,n=P.cssPrefix,a=P.replacementClass;let r=Yi;if(n!==e||a!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let Nr=!1;function Sn(){P.autoAddCss&&!Nr&&(zi($a()),Nr=!0)}var qi={mixout(){return{dom:{css:$a,insertCss:Sn}}},hooks(){return{beforeDOMElementCreation(){Sn()},beforeI2svg(){Sn()}}}};const Ie=Le||{};Ie[Te]||(Ie[Te]={});Ie[Te].styles||(Ie[Te].styles={});Ie[Te].hooks||(Ie[Te].hooks={});Ie[Te].shims||(Ie[Te].shims=[]);var Pe=Ie[Te];const Ua=[],Ka=function(){G.removeEventListener("DOMContentLoaded",Ka),ln=1,Ua.map(e=>e())};let ln=!1;Ae&&(ln=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),ln||G.addEventListener("DOMContentLoaded",Ka));function Gi(e){Ae&&(ln?setTimeout(e,0):Ua.push(e))}function zt(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Fa(e):"<".concat(t," ").concat(Wi(n),">").concat(a.map(zt).join(""),"</").concat(t,">")}function Dr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cn=function(t,n,a,r){var o=Object.keys(t),s=o.length,l=n,u,f,m;for(a===void 0?(u=1,m=t[o[0]]):(u=0,m=a);u<s;u++)f=o[u],m=l(m,t[f],f,t);return m};function Ji(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function _n(e){const t=Ji(e);return t.length===1?t[0].toString(16):null}function Zi(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function jr(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Mn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=jr(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,jr(t)):Pe.styles[e]={...Pe.styles[e]||{},...r},e==="fas"&&Mn("fa",t)}const{styles:He,shims:Qi}=Pe,el={[Z]:Object.values(Xe[Z]),[de]:Object.values(Xe[de]),[pe]:Object.values(Xe[pe])};let rr=null,Ba={},za={},Ha={},Wa={},Va={};const tl={[Z]:Object.keys(Ve[Z]),[de]:Object.keys(Ve[de]),[pe]:Object.keys(Ve[pe])};function nl(e){return~$i.indexOf(e)}function rl(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!nl(r)?r:null}const Xa=()=>{const e=a=>Cn(He,(r,o,s)=>(r[s]=Cn(o,a,{}),r),{});Ba=e((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),za=e((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),Va=e((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(l=>{a[l]=o}),a});const t="far"in He||P.autoFetchSvg,n=Cn(Qi,(a,r)=>{const o=r[0];let s=r[1];const l=r[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ha=n.names,Wa=n.unicodes,rr=dn(P.styleDefault,{family:P.familyDefault})};Bi(e=>{rr=dn(e.styleDefault,{family:P.familyDefault})});Xa();function ar(e,t){return(Ba[e]||{})[t]}function al(e,t){return(za[e]||{})[t]}function Re(e,t){return(Va[e]||{})[t]}function Ya(e){return Ha[e]||{prefix:null,iconName:null}}function ol(e){const t=Wa[e],n=ar("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fe(){return rr}const or=()=>({prefix:null,iconName:null,rest:[]});function dn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Z}=t,a=Ve[n][e],r=Ft[n][e]||Ft[n][a],o=e in Pe.styles?e:null;return r||o||null}const il={[Z]:Object.keys(Xe[Z]),[de]:Object.keys(Xe[de]),[pe]:Object.keys(Xe[pe])};function pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,a={[Z]:"".concat(P.cssPrefix,"-").concat(Z),[de]:"".concat(P.cssPrefix,"-").concat(de),[pe]:"".concat(P.cssPrefix,"-").concat(pe)};let r=null,o=Z;const s=mi.filter(u=>u!==Ta);s.forEach(u=>{(e.includes(a[u])||e.some(f=>il[u].includes(f)))&&(o=u)});const l=e.reduce((u,f)=>{const m=rl(P.cssPrefix,f);if(He[f]?(f=el[o].includes(f)?_i[o][f]:f,r=f,u.prefix=f):tl[o].indexOf(f)>-1?(r=f,u.prefix=dn(f,{family:o})):m?u.iconName=m:f!==P.replacementClass&&!s.some(b=>f===a[b])&&u.rest.push(f),!n&&u.prefix&&u.iconName){const b=r==="fa"?Ya(u.iconName):{},S=Re(u.prefix,u.iconName);b.prefix&&(r=null),u.iconName=b.iconName||S||u.iconName,u.prefix=b.prefix||u.prefix,u.prefix==="far"&&!He.far&&He.fas&&!P.autoFetchSvg&&(u.prefix="fas")}return u},or());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===de&&(He.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=Re(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===pe&&(He.fasds||P.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Re(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=Fe()||"fas"),l}class ll{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...r[o]},Mn(o,r[o]);const s=Xe[Z][o];s&&Mn(s,r[o]),Xa()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:l}=a[r],u=l[2];t[o]||(t[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][s]=l}),t}}let _r=[],lt={};const ut={},sl=Object.keys(ut);function cl(e,t){let{mixoutsTo:n}=t;return _r=e,lt={},Object.keys(ut).forEach(a=>{sl.indexOf(a)===-1&&delete ut[a]}),_r.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{lt[s]||(lt[s]=[]),lt[s].push(o[s])})}a.provides&&a.provides(ut)}),n}function Rn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(lt[e]||[]).forEach(s=>{t=s.apply(null,[t,...a])}),t}function qe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(lt[e]||[]).forEach(o=>{o.apply(null,n)})}function $e(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ut[e]?ut[e].apply(null,t):void 0}function Ln(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Fe();if(t)return t=Re(n,t)||t,Dr(qa.definitions,n,t)||Dr(Pe.styles,n,t)}const qa=new ll,ul=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,qe("noAuto")},fl={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ae?(qe("beforeI2svg",e),$e("pseudoElements2svg",e),$e("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Gi(()=>{pl({autoReplaceSvgRoot:t}),qe("watch",e)})}},dl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Re(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=dn(e[0]);return{prefix:n,iconName:Re(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Mi))){const t=pn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Fe(),iconName:Re(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Fe();return{prefix:t,iconName:Re(t,e)||e}}}},me={noAuto:ul,config:P,dom:fl,parse:dl,library:qa,findIconDefinition:Ln,toHtml:zt},pl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=G}=e;(Object.keys(Pe.styles).length>0||P.autoFetchSvg)&&Ae&&P.autoReplaceSvg&&me.dom.i2svg({node:t})};function mn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>zt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ae)return;const n=G.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ml(e){let{children:t,main:n,mask:a,attributes:r,styles:o,transform:s}=e;if(nr(s)&&n.found&&!a.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};r.style=fn({...o,"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:t}]}function gl(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function ir(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:l,maskId:u,titleId:f,extra:m,watchable:b=!1}=e,{width:S,height:j}=n.found?n:t,I=a==="fak",A=[P.replacementClass,r?"".concat(P.cssPrefix,"-").concat(r):""].filter(N=>m.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(m.classes).join(" ");let L={children:[],attributes:{...m.attributes,"data-prefix":a,"data-icon":r,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(j)}};const $=I&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/j*16*.0625,"em")}:{};b&&(L.attributes[Ye]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(f||$t())},children:[l]}),delete L.attributes.title);const _={...L,prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:o,symbol:s,styles:{...$,...m.styles}},{children:w,attributes:O}=n.found&&t.found?$e("generateAbstractMask",_)||{children:[],attributes:{}}:$e("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=w,_.attributes=O,s?gl(_):ml(_)}function Mr(e){const{content:t,width:n,height:a,transform:r,title:o,extra:s,watchable:l=!1}=e,u={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(u[Ye]="");const f={...s.styles};nr(r)&&(f.transform=Xi({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=fn(f);m.length>0&&(u.style=m);const b=[];return b.push({tag:"span",attributes:u,children:[t]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function hl(e){const{content:t,title:n,extra:a}=e,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},o=fn(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:kn}=Pe;function Fn(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(xn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(xn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(xn.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const vl={found:!1,width:512,height:512};function bl(e,t){!ja&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $n(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=Fe()),new Promise((a,r)=>{if(n==="fa"){const o=Ya(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&kn[t]&&kn[t][e]){const o=kn[t][e];return a(Fn(o))}bl(e,t),a({...vl,icon:P.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}})})}const Rr=()=>{},Un=P.measurePerformance&&Jt&&Jt.mark&&Jt.measure?Jt:{mark:Rr,measure:Rr},Nt='FA "6.6.0"',yl=e=>(Un.mark("".concat(Nt," ").concat(e," begins")),()=>Ga(e)),Ga=e=>{Un.mark("".concat(Nt," ").concat(e," ends")),Un.measure("".concat(Nt," ").concat(e),"".concat(Nt," ").concat(e," begins"),"".concat(Nt," ").concat(e," ends"))};var lr={begin:yl,end:Ga};const tn=()=>{};function Lr(e){return typeof(e.getAttribute?e.getAttribute(Ye):null)=="string"}function xl(e){const t=e.getAttribute?e.getAttribute(Qn):null,n=e.getAttribute?e.getAttribute(er):null;return t&&n}function Sl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Cl(){return P.autoReplaceSvg===!0?nn.replace:nn[P.autoReplaceSvg]||nn.replace}function kl(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function wl(e){return G.createElement(e)}function Ja(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?kl:wl}=t;if(typeof e=="string")return G.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){a.appendChild(Ja(o,{ceFn:n}))}),a}function El(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const nn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ja(n),t)}),t.getAttribute(Ye)===null&&P.keepOriginalSource){let n=G.createComment(El(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~tr(t).indexOf(P.replacementClass))return nn.replace(e);const a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>zt(o)).join(`
`);t.setAttribute(Ye,""),t.innerHTML=r}};function Fr(e){e()}function Za(e,t){const n=typeof t=="function"?t:tn;if(e.length===0)n();else{let a=Fr;P.mutateApproach===Di&&(a=Le.requestAnimationFrame||Fr),a(()=>{const r=Cl(),o=lr.begin("mutate");e.map(r),o(),n()})}}let sr=!1;function Qa(){sr=!0}function Kn(){sr=!1}let sn=null;function $r(e){if(!Or||!P.observeMutations)return;const{treeCallback:t=tn,nodeCallback:n=tn,pseudoElementsCallback:a=tn,observeMutationsRoot:r=G}=e;sn=new Or(o=>{if(sr)return;const s=Fe();ht(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Lr(l.addedNodes[0])&&(P.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Lr(l.target)&&~Fi.indexOf(l.attributeName))if(l.attributeName==="class"&&xl(l.target)){const{prefix:u,iconName:f}=pn(tr(l.target));l.target.setAttribute(Qn,u||s),f&&l.target.setAttribute(er,f)}else Sl(l.target)&&n(l.target)})}),Ae&&sn.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Pl(){sn&&sn.disconnect()}function Ol(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Tl(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=pn(tr(e));return r.prefix||(r.prefix=Fe()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=al(r.prefix,e.innerText)||ar(r.prefix,_n(e.innerText))),!r.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Il(e){const t=ht(e.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(a||$t()):(t["aria-hidden"]="true",t.focusable="false")),t}function Al(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ee,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ur(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Tl(e),o=Il(e),s=Rn("parseNodeAttributes",{},e);let l=t.styleParser?Ol(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ee,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o},...s}}const{styles:Nl}=Pe;function eo(e){const t=P.autoReplaceSvg==="nest"?Ur(e,{styleParser:!1}):Ur(e);return~t.extra.classes.indexOf(Ra)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}let Oe=new Set;_a.map(e=>{Oe.add("fa-".concat(e))});Object.keys(Ve[Z]).map(Oe.add.bind(Oe));Object.keys(Ve[de]).map(Oe.add.bind(Oe));Object.keys(Ve[pe]).map(Oe.add.bind(Oe));Oe=[...Oe];function Kr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ae)return Promise.resolve();const n=G.documentElement.classList,a=m=>n.add("".concat(Ar,"-").concat(m)),r=m=>n.remove("".concat(Ar,"-").concat(m)),o=P.autoFetchSvg?Oe:_a.map(m=>"fa-".concat(m)).concat(Object.keys(Nl));o.includes("fa")||o.push("fa");const s=[".".concat(Ra,":not([").concat(Ye,"])")].concat(o.map(m=>".".concat(m,":not([").concat(Ye,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=ht(e.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=lr.begin("onTree"),f=l.reduce((m,b)=>{try{const S=eo(b);S&&m.push(S)}catch(S){ja||S.name==="MissingIcon"&&console.error(S)}return m},[]);return new Promise((m,b)=>{Promise.all(f).then(S=>{Za(S,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),m()})}).catch(S=>{u(),b(S)})})}function Dl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eo(e).then(n=>{n&&Za([n],t)})}function jl(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Ln(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ln(r||{})),e(a,{...n,mask:r})}}const _l=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ee,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:l=null,classes:u=[],attributes:f={},styles:m={}}=t;if(!e)return;const{prefix:b,iconName:S,icon:j}=e;return mn({type:"icon",...e},()=>(qe("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(s?f["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||$t()):(f["aria-hidden"]="true",f.focusable="false")),ir({icons:{main:Fn(j),mask:r?Fn(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:S,transform:{...Ee,...n},symbol:a,title:s,maskId:o,titleId:l,extra:{attributes:f,styles:m,classes:u}})))};var Ml={mixout(){return{icon:jl(_l)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Kr,e.nodeCallback=Dl,e}}},provides(e){e.i2svg=function(t){const{node:n=G,callback:a=()=>{}}=t;return Kr(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:l,symbol:u,mask:f,maskId:m,extra:b}=n;return new Promise((S,j)=>{Promise.all([$n(a,s),f.iconName?$n(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[A,L]=I;S([t,ir({icons:{main:A,mask:L},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:r,titleId:o,extra:b,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:o,styles:s}=t;const l=fn(s);l.length>0&&(a.style=l);let u;return nr(o)&&(u=$e("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Rl={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return mn({type:"layer"},()=>{qe("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ll={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=t;return mn({type:"counter",content:e},()=>(qe("beforeDOMElementCreation",{content:e,params:t}),hl({content:e.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(P.cssPrefix,"-layers-counter"),...a]}})))}}}},Fl={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ee,title:a=null,classes:r=[],attributes:o={},styles:s={}}=t;return mn({type:"text",content:e},()=>(qe("beforeDOMElementCreation",{content:e,params:t}),Mr({content:e,transform:{...Ee,...n},title:a,extra:{attributes:o,styles:s,classes:["".concat(P.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:o}=n;let s=null,l=null;if(Oa){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();s=f.width/u,l=f.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Mr({content:t.innerHTML,width:s,height:l,transform:r,title:a,extra:o,watchable:!0})])}}};const $l=new RegExp('"',"ug"),Br=[1105920,1112319],zr={FontAwesome:{normal:"fas",400:"fas"},...xi,...yi,...Ti},Bn=Object.keys(zr).reduce((e,t)=>(e[t.toLowerCase()]=zr[t],e),{}),Ul=Object.keys(Bn).reduce((e,t)=>{const n=Bn[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Kl(e){const t=e.replace($l,""),n=Zi(t,0),a=n>=Br[0]&&n<=Br[1],r=t.length===2?t[0]===t[1]:!1;return{value:_n(r?t[0]:t),isSecondary:a||r}}function Bl(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Bn[n]||{})[r]||Ul[n]}function Hr(e,t){const n="".concat(Ni).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const s=ht(e.children).filter(S=>S.getAttribute(An)===t)[0],l=Le.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(Ri),m=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(s&&!f)return e.removeChild(s),a();if(f&&b!=="none"&&b!==""){const S=l.getPropertyValue("content");let j=Bl(u,m);const{value:I,isSecondary:A}=Kl(S),L=f[0].startsWith("FontAwesome");let $=ar(j,I),_=$;if(L){const w=ol(I);w.iconName&&w.prefix&&($=w.iconName,j=w.prefix)}if($&&!A&&(!s||s.getAttribute(Qn)!==j||s.getAttribute(er)!==_)){e.setAttribute(n,_),s&&e.removeChild(s);const w=Al(),{extra:O}=w;O.attributes[An]=t,$n($,j).then(N=>{const B=ir({...w,icons:{main:N,mask:or()},prefix:j,iconName:_,extra:O,watchable:!0}),V=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=B.map(re=>zt(re)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function zl(e){return Promise.all([Hr(e,"::before"),Hr(e,"::after")])}function Hl(e){return e.parentNode!==document.head&&!~ji.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(An)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wr(e){if(Ae)return new Promise((t,n)=>{const a=ht(e.querySelectorAll("*")).filter(Hl).map(zl),r=lr.begin("searchPseudoElements");Qa(),Promise.all(a).then(()=>{r(),Kn(),t()}).catch(()=>{r(),Kn(),n()})})}var Wl={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Wr,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=G}=t;P.searchPseudoElements&&Wr(n)}}};let Vr=!1;var Vl={mixout(){return{dom:{unwatch(){Qa(),Vr=!0}}}},hooks(){return{bootstrap(){$r(Rn("mutationObserverCallbacks",{}))},noAuto(){Pl()},watch(e){const{observeMutationsRoot:t}=e;Vr?Kn():$r(Rn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Xr=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var Xl={mixout(){return{parse:{transform:e=>Xr(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Xr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:o}=t;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},S={outer:s,inner:m,path:b};return{tag:"g",attributes:{...S.outer},children:[{tag:"g",attributes:{...S.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...S.path}}]}]}}}};const wn={x:0,y:0,width:"100%",height:"100%"};function Yr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yl(e){return e.tag==="g"?e.children:[e]}var ql={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?pn(n.split(" ").map(r=>r.trim())):or();return a.prefix||(a.prefix=Fe()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:l}=t;const{width:u,icon:f}=r,{width:m,icon:b}=o,S=Vi({transform:l,containerWidth:m,iconWidth:u}),j={tag:"rect",attributes:{...wn,fill:"white"}},I=f.children?{children:f.children.map(Yr)}:{},A={tag:"g",attributes:{...S.inner},children:[Yr({tag:f.tag,attributes:{...f.attributes,...S.path},...I})]},L={tag:"g",attributes:{...S.outer},children:[A]},$="mask-".concat(s||$t()),_="clip-".concat(s||$t()),w={tag:"mask",attributes:{...wn,id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[j,L]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Yl(b)},w]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat($,")"),...wn}}),{children:n,attributes:a}}}},Gl={provides(e){let t=!1;Le.matchMedia&&(t=Le.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Jl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Zl=[qi,Ml,Rl,Ll,Fl,Wl,Vl,Xl,ql,Gl,Jl];cl(Zl,{mixoutsTo:me});me.noAuto;me.config;me.library;me.dom;const zn=me.parse;me.findIconDefinition;me.toHtml;const Ql=me.icon;me.layer;me.text;me.counter;function qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qr(Object(n),!0).forEach(function(a){st(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function cn(e){"@babel/helpers - typeof";return cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cn(e)}function st(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function es(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function ts(e,t){if(e==null)return{};var n=es(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Hn(e){return ns(e)||rs(e)||as(e)||os()}function ns(e){if(Array.isArray(e))return Wn(e)}function rs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function as(e,t){if(e){if(typeof e=="string")return Wn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wn(e,t)}}function Wn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function os(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function is(e){var t,n=e.beat,a=e.fade,r=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,m=e.spinReverse,b=e.pulse,S=e.fixedWidth,j=e.inverse,I=e.border,A=e.listItem,L=e.flip,$=e.size,_=e.rotation,w=e.pull,O=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":S,"fa-inverse":j,"fa-border":I,"fa-li":A,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},st(t,"fa-".concat($),typeof $<"u"&&$!==null),st(t,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),st(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),st(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map(function(N){return O[N]?N:null}).filter(function(N){return N})}function ls(e){return e=e-0,e===e}function to(e){return ls(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ss=["style"];function cs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function us(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=to(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?t[cs(r)]=o:t[r]=o,t},{})}function no(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return no(e,u)}),r=Object.keys(t.attributes||{}).reduce(function(u,f){var m=t.attributes[f];switch(f){case"class":u.attrs.className=m,delete t.attributes.class;break;case"style":u.attrs.style=us(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[to(f)]=m}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=ts(n,ss);return r.attrs.style=we(we({},r.attrs.style),s),e.apply(void 0,[t.tag,we(we({},r.attrs),l)].concat(Hn(a)))}var ro=!1;try{ro=!0}catch{}function fs(){if(!ro&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gr(e){if(e&&cn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(zn.icon)return zn.icon(e);if(e===null)return null;if(e&&cn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function En(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?st({},e,t):{}}var Jr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},We=fa.forwardRef(function(e,t){var n=we(we({},Jr),e),a=n.icon,r=n.mask,o=n.symbol,s=n.className,l=n.title,u=n.titleId,f=n.maskId,m=Gr(a),b=En("classes",[].concat(Hn(is(n)),Hn((s||"").split(" ")))),S=En("transform",typeof n.transform=="string"?zn.transform(n.transform):n.transform),j=En("mask",Gr(r)),I=Ql(m,we(we(we(we({},b),S),j),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!I)return fs("Could not find icon",m),null;var A=I.abstract,L={ref:t};return Object.keys(n).forEach(function($){Jr.hasOwnProperty($)||(L[$]=n[$])}),ds(A[0],L)});We.displayName="FontAwesomeIcon";We.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};var ds=no.bind(null,fa.createElement);const ps=ue(We)`
  color: ${({color:e})=>e||"grey"};
  width: 100%;
  height: 100%;
`,un=({id:e,icon:t,style:n,onClick:a=()=>{}})=>E.jsx(ps,{id:e,icon:t,style:n,onClick:a,"data-qatype":"iconfield"});function Vn(){return Vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Vn.apply(this,arguments)}var ao=c.memo(c.forwardRef(function(e,t){var n=la.getPTI(e);return c.createElement("svg",Vn({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"}))}));ao.displayName="MinusIcon";function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ft.apply(this,arguments)}function Xn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ms(e){if(Array.isArray(e))return Xn(e)}function gs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oo(e,t){if(e){if(typeof e=="string")return Xn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xn(e,t)}}function hs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(e){return ms(e)||gs(e)||oo(e)||hs()}function Ut(e){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ut(e)}function vs(e,t){if(Ut(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(Ut(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bs(e){var t=vs(e,"string");return Ut(t)==="symbol"?t:String(t)}function cr(e,t,n){return t=bs(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ys(e){if(Array.isArray(e))return e}function xs(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,o,s,l=[],u=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(a=o.call(n)).done)&&(l.push(a.value),l.length!==t);u=!0);}catch(m){f=!0,r=m}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return l}}function Ss(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(e,t){return ys(e)||xs(e,t)||oo(e,t)||Ss()}var Cs=function(t,n){var a=c.useRef(!1);return c.useEffect(function(){if(!a.current){a.current=!0;return}return t&&t()},n)},ks={root:function(t){var n=t.props;return ee("p-tree p-component",{"p-tree-selectable":n.selectionMode,"p-tree-loading":n.loading,"p-disabled":n.disabled})},loadingOverlay:"p-tree-loading-overlay p-component-overlay",loadingIcon:"p-tree-loading-icon",filterContainer:"p-tree-filter-container",input:"p-tree-filter p-inputtext p-component",searchIcon:"p-tree-filter-icon",container:"p-tree-container",node:function(t){var n=t.isLeaf;return ee("p-treenode",{"p-treenode-leaf":n})},content:function(t){var n=t.nodeProps,a=t.checked,r=t.selected,o=t.isCheckboxSelectionMode;return ee("p-treenode-content",{"p-treenode-selectable":n.selectionMode&&n.node.selectable!==!1,"p-highlight":o()?a:r,"p-highlight-contextmenu":n.contextMenuSelectionKey&&n.contextMenuSelectionKey===n.node.key,"p-disabled":n.disabled})},toggler:"p-tree-toggler p-link",togglerIcon:"p-tree-toggler-icon",nodeCheckbox:function(t){var n=t.partialChecked;return ee({"p-indeterminate":n})},nodeIcon:"p-treenode-icon",label:"p-treenode-label",subgroup:"p-treenode-children",checkIcon:"p-checkbox-icon",emptyMessage:"p-treenode p-tree-empty-message",droppoint:"p-treenode-droppoint",header:"p-tree-header",footer:"p-tree-footer"},Tt=Ge.extend({defaultProps:{__TYPE:"Tree",__parentMetadata:null,id:null,value:null,ariaLabel:null,ariaLabelledBy:null,checkboxIcon:null,className:null,collapseIcon:null,contentClassName:null,contentStyle:null,contextMenuSelectionKey:null,disabled:!1,dragdropScope:null,emptyMessage:null,expandIcon:null,expandedKeys:null,filter:!1,filterBy:"label",filterIcon:null,filterLocale:void 0,filterMode:"lenient",filterPlaceholder:null,filterTemplate:null,filterValue:null,footer:null,header:null,level:0,loading:!1,loadingIcon:null,metaKeySelection:!1,nodeTemplate:null,onCollapse:null,onContextMenu:null,onContextMenuSelectionChange:null,onDragDrop:null,onExpand:null,onFilterValueChange:null,onNodeClick:null,onNodeDoubleClick:null,onSelect:null,onSelectionChange:null,onToggle:null,onUnselect:null,propagateSelectionDown:!0,propagateSelectionUp:!0,selectionKeys:null,selectionMode:null,showHeader:!0,style:null,togglerTemplate:null,children:void 0},css:{classes:ks}}),ws={box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:function(t){var n=t.props,a=t.checked,r=t.context;return ee("p-checkbox p-component",{"p-highlight":a,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":r&&r.inputStyle==="filled"})}},Zt=Ge.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:ws}});function Zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Qr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zr(Object(n),!0).forEach(function(a){cr(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var io=c.memo(c.forwardRef(function(e,t){var n=Je(),a=c.useContext(mt),r=Zt.getProps(e,a),o=c.useState(!1),s=Yn(o,2),l=s[0],u=s[1],f=Zt.setMetaData({props:r,state:{focused:l},context:{checked:r.checked===r.trueValue,disabled:r.disabled}}),m=f.ptm,b=f.cx,S=f.isUnstyled;gt(Zt.css.styles,S,{name:"checkbox"});var j=c.useRef(null),I=c.useRef(r.inputRef),A=function(){return r.checked===r.trueValue},L=function(k){if(!(r.disabled||r.readonly)&&r.onChange){var J,te=A(),X=te?r.falseValue:r.trueValue,ve={originalEvent:k,value:r.value,checked:X,stopPropagation:function(){k==null||k.stopPropagation()},preventDefault:function(){k==null||k.preventDefault()},target:{type:"checkbox",name:r.name,id:r.id,value:r.value,checked:X}};if(r==null||(J=r.onChange)===null||J===void 0||J.call(r,ve),k.defaultPrevented)return;K.focus(I.current)}},$=function(){var k;u(!0),r==null||(k=r.onFocus)===null||k===void 0||k.call(r)},_=function(){var k;u(!1),r==null||(k=r.onBlur)===null||k===void 0||k.call(r)};c.useImperativeHandle(t,function(){return{props:r,focus:function(){return K.focus(I.current)},getElement:function(){return j.current},getInput:function(){return I.current}}}),c.useEffect(function(){H.combinedRefs(I,r.inputRef)},[I,r.inputRef]),rn(function(){I.current.checked=A()},[r.checked,r.trueValue]),qn(function(){r.autoFocus&&K.focus(I.current,r.autoFocus)});var w=A(),O=H.isNotEmpty(r.tooltip),N=Zt.getOtherProps(r),B=n({id:r.id,className:ee(r.className,b("root",{checked:w,context:a})),style:r.style,"data-p-highlight":w,"data-p-disabled":r.disabled,onContextMenu:r.onContextMenu,onMouseDown:r.onMouseDown},N,m("root")),V=function(){var k=H.reduceKeys(N,K.ARIA_PROPS),J=n(Qr({id:r.inputId,type:"checkbox",className:b("input"),name:r.name,tabIndex:r.tabIndex,onFocus:function(X){return $()},onBlur:function(X){return _()},onChange:function(X){return L(X)},disabled:r.disabled,readOnly:r.readOnly,required:r.required,"aria-invalid":r.invalid,checked:w},k),m("input"));return c.createElement("input",ft({ref:I},J))},re=function(){var k=n({className:b("icon")},m("icon")),J=n({className:b("box",{checked:w}),"data-p-highlight":w,"data-p-disabled":r.disabled},m("box")),te=w?r.icon||c.createElement(Gn,k):null,X=ce.getJSXIcon(te,Qr({},k),{props:r,checked:w});return c.createElement("div",J,X)};return c.createElement(c.Fragment,null,c.createElement("div",ft({ref:j},B),V(),re()),O&&c.createElement(ca,ft({target:j,content:r.tooltip,pt:m("tooltip")},r.tooltipOptions)))}));io.displayName="Checkbox";function Es(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ps(e))||t){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,l;return{s:function(){n=n.call(e)},n:function(){var f=n.next();return o=f.done,f},e:function(f){s=!0,l=f},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(s)throw l}}}}function Ps(e,t){if(e){if(typeof e=="string")return ea(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ea(e,t)}}function ea(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ta(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ta(Object(n),!0).forEach(function(a){cr(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ta(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var ur=c.memo(function(e){var t=c.useRef(null),n=c.useRef(null),a=c.useRef(!1),r=Je(),o=e.isNodeLeaf(e.node),s=e.node.label,l=(e.expandedKeys?e.expandedKeys[e.node.key]!==void 0:!1)||e.node.expanded,u=e.ptm,f=e.cx,m=function(i){return u(i,{hostName:e.hostName,context:{selected:ie()?!1:Q(),expanded:l||!1,checked:ie()?fe():!1,isLeaf:o}})},b=function(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=e.expandedKeys?ke({},e.expandedKeys):{};h[e.node.key]=!0,e.onToggle({originalEvent:i,value:h,navigateFocusToChild:d}),I(i,!0)},S=function(i){var d=ke({},e.expandedKeys);delete d[e.node.key],e.onToggle({originalEvent:i,value:d}),I(i,!1)},j=function(i){e.disabled||(l?S(i):b(i,!1),i.preventDefault(),i.stopPropagation())},I=function(i,d){d?e.onExpand&&e.onExpand({originalEvent:i,node:e.node}):e.onCollapse&&e.onCollapse({originalEvent:i,node:e.node})},A=function(i){var d=i.nextSibling;if(d){var h=d.getAttribute("data-pc-section")==="droppoint";return h?d.nextElementSibling?d.nextElementSibling:null:d}return null},L=function(i){var d=_(i);return d?A(d)||L(d):null},$=function(i){var d=i.children[1];if(d){var h=e.dragdropScope?2:1,R=d.children[d.children.length-h];return $(R)}return i},_=function(i){var d=i.parentElement.parentElement;return K.hasClass(d,"p-treenode")?d:null},w=function(i){i&&i.focus()},O=function(i){e.onClick&&e.onClick({originalEvent:i,node:e.node});var d=i.target.nodeName;if(!(e.disabled||d==="INPUT"||d==="BUTTON"||d==="A"||K.hasClass(i.target,"p-clickable"))){if(e.selectionMode&&e.node.selectable!==!1){var h;if(ie()){var R=fe();h=e.selectionKeys?ke({},e.selectionKeys):{},R?(e.propagateSelectionDown?De(e.node,!1,h):delete h[e.node.key],e.propagateSelectionUp&&e.onPropagateUp&&e.onPropagateUp({originalEvent:i,check:!1,selectionKeys:h}),e.onUnselect&&e.onUnselect({originalEvent:i,node:e.node})):(e.propagateSelectionDown?De(e.node,!0,h):h[e.node.key]={checked:!0},e.propagateSelectionUp&&e.onPropagateUp&&e.onPropagateUp({originalEvent:i,check:!0,selectionKeys:h}),e.onSelect&&e.onSelect({originalEvent:i,node:e.node}))}else{var q=Q(),le=a.current?!1:e.metaKeySelection;if(le){var Se=i.metaKey||i.ctrlKey;q&&Se?(oe()?h=null:(h=ke({},e.selectionKeys),delete h[e.node.key]),e.onUnselect&&e.onUnselect({originalEvent:i,node:e.node})):(oe()?h=e.node.key:ae()&&(h=Se?e.selectionKeys?ke({},e.selectionKeys):{}:{},h[e.node.key]=!0),e.onSelect&&e.onSelect({originalEvent:i,node:e.node}))}else oe()?q?(h=null,e.onUnselect&&e.onUnselect({originalEvent:i,node:e.node})):(h=e.node.key,e.onSelect&&e.onSelect({originalEvent:i,node:e.node})):q?(h=ke({},e.selectionKeys),delete h[e.node.key],e.onUnselect&&e.onUnselect({originalEvent:i,node:e.node})):(h=e.selectionKeys?ke({},e.selectionKeys):{},h[e.node.key]=!0,e.onSelect&&e.onSelect({originalEvent:i,node:e.node}))}e.onSelectionChange&&e.onSelectionChange({originalEvent:i,value:h})}a.current=!1}},N=function(i){e.onDoubleClick&&e.onDoubleClick({originalEvent:i,node:e.node})},B=function(i){e.disabled||(K.clearSelection(),e.onContextMenuSelectionChange&&e.onContextMenuSelectionChange({originalEvent:i,value:e.node.key}),e.onContextMenu&&e.onContextMenu({originalEvent:i,node:e.node}))},V=function(i){if(vt(i))switch(i.code){case"Tab":be();break;case"ArrowDown":re(i);break;case"ArrowUp":J(i);break;case"ArrowRight":te(i);break;case"ArrowLeft":X(i);break;case"Enter":case"NumpadEnter":ve(i);break;case"Space":["INPUT"].includes(i.target.nodeName)||ve(i);break}},re=function(i){var d=i.target.getAttribute("data-pc-section")==="toggler"?i.target.closest('[role="treeitem"]'):i.target,h=d.children[1],R=k(d);if(h)ye(d,e.dragdropScope?h.children[1]:h.children[0]);else if(R)ye(d,R);else{var q=L(d);q&&ye(d,q)}i.preventDefault()},W=function(i){var d=i.previousElementSibling;return d?e.dragdropScope?d.previousElementSibling:d:null},k=function(i){var d=i.nextElementSibling;return d?e.dragdropScope?d.nextElementSibling:d:null},J=function(i){var d=i.target,h=W(d);if(h)ye(d,h,$(h));else{var R=_(d);R&&ye(d,R)}i.preventDefault()},te=function(i){o||l||(i.currentTarget.tabIndex=-1,b(i,!0))},X=function(i){var d=K.findSingle(i.currentTarget,'[data-pc-section="toggler"]');if(e.level===0&&!l)return!1;if(l&&!o)return d.click(),!1;var h=xe(i.currentTarget);h&&ye(i.currentTarget,h)},ve=function(i){Ze(i,a.current),O(i),i.preventDefault()},be=function(){Ne()},Ne=function(){var i=K.find(t.current.closest('[data-pc-section="container"]'),'[role="treeitem"]'),d=it(i).some(function(R){return R.getAttribute("aria-selected")==="true"||R.getAttribute("aria-checked")==="true"});if(it(i).forEach(function(R){R.tabIndex=-1}),d){var h=it(i).filter(function(R){return R.getAttribute("aria-selected")==="true"||R.getAttribute("aria-checked")==="true"});h[0].tabIndex=0;return}it(i)[0].tabIndex=0},Ze=function(i,d){if(e.selectionMode!==null){var h=it(K.find(n.current.parentElement,'[role="treeitem"]'));i.currentTarget.tabIndex=d===!1?-1:0,h.every(function(R){return R.tabIndex===-1})&&(h[0].tabIndex=0)}},ye=function(i,d,h){i.tabIndex="-1",d.tabIndex="0",w(h||d)},xe=function(i){var d=i.closest("ul").closest("li");if(d){var h=K.findSingle(d,"button");return h&&h.style.visibility!=="hidden"?d:xe(i.previousElementSibling)}return null},ne=function(i){var d=i.check,h=i.selectionKeys,R=0,q=Es(e.node.children),le;try{for(q.s();!(le=q.n()).done;){var Se=le.value;h[Se.key]&&h[Se.key].checked&&R++}}catch(_e){q.e(_e)}finally{q.f()}var Be=e.node.key,Ht=H.findChildrenByKey(e.originalOptions,Be),gn=Ht.some(function(_e){return _e.key in h}),Wt=Ht.every(function(_e){return _e.key in h&&h[_e.key].checked});gn&&!Wt?h[Be]={checked:!1,partialChecked:!0}:Wt?h[Be]={checked:!0,partialChecked:!1}:d?h[Be]={checked:!1,partialChecked:!1}:delete h[Be],e.propagateSelectionUp&&e.onPropagateUp&&e.onPropagateUp(i)},De=function(i,d,h){if(d?h[i.key]={checked:!0,partialChecked:!1}:delete h[i.key],i.children&&i.children.length)for(var R=0;R<i.children.length;R++)De(i.children[R],d,h)},Q=function(){return e.selectionMode&&e.selectionKeys?oe()?e.selectionKeys===e.node.key:e.selectionKeys[e.node.key]!==void 0:!1},fe=function(){return(e.selectionKeys?e.selectionKeys[e.node.key]&&e.selectionKeys[e.node.key].checked:!1)||!1},vt=function(i){return i.currentTarget&&(i.currentTarget.isSameNode(i.target)||i.currentTarget.isSameNode(i.target.closest('[role="treeitem"]')))},ge=function(){return e.selectionKeys?e.selectionKeys[e.node.key]&&e.selectionKeys[e.node.key].partialChecked:!1},oe=function(){return e.selectionMode&&e.selectionMode==="single"},ae=function(){return e.selectionMode&&e.selectionMode==="multiple"},ie=function(){return e.selectionMode&&e.selectionMode==="checkbox"},bt=function(){a.current=!0},yt=function(i,d){if(i.preventDefault(),K.removeClass(i.target,"p-treenode-droppoint-active"),e.onDropPoint){var h=d===-1?e.index:e.index+1;e.onDropPoint({originalEvent:i,path:e.path,index:h,position:d})}},je=function(i){e.dragdropScope&&i.dataTransfer.types[1]===e.dragdropScope.toLocaleLowerCase()&&(i.dataTransfer.dropEffect="move",i.preventDefault())},Qe=function(i){e.dragdropScope&&i.dataTransfer.types[1]===e.dragdropScope.toLocaleLowerCase()&&K.addClass(i.target,"p-treenode-droppoint-active")},et=function(i){e.dragdropScope&&i.dataTransfer.types[1]===e.dragdropScope.toLocaleLowerCase()&&K.removeClass(i.target,"p-treenode-droppoint-active")},xt=function(i){e.dragdropScope&&e.node.droppable!==!1&&(K.removeClass(t.current,"p-treenode-dragover"),i.preventDefault(),i.stopPropagation(),e.onDrop&&e.onDrop({originalEvent:i,path:e.path,index:e.index}))},St=function(i){e.dragdropScope&&i.dataTransfer.types[1]===e.dragdropScope.toLocaleLowerCase()&&e.node.droppable!==!1&&(i.dataTransfer.dropEffect="move",i.preventDefault(),i.stopPropagation())},tt=function(i){e.dragdropScope&&i.dataTransfer.types[1]===e.dragdropScope.toLocaleLowerCase()&&e.node.droppable!==!1&&K.addClass(t.current,"p-treenode-dragover")},nt=function(i){if(e.dragdropScope&&i.dataTransfer.types[1]===e.dragdropScope.toLocaleLowerCase()&&e.node.droppable!==!1){var d=i.currentTarget.getBoundingClientRect();(i.nativeEvent.x>d.left+d.width||i.nativeEvent.x<d.left||i.nativeEvent.y>=Math.floor(d.top+d.height)||i.nativeEvent.y<d.top)&&K.removeClass(t.current,"p-treenode-dragover")}},Ct=function(i){i.dataTransfer.setData("text",e.dragdropScope),i.dataTransfer.setData(e.dragdropScope,e.dragdropScope),e.onDragStart&&e.onDragStart({originalEvent:i,path:e.path,index:e.index})},kt=function(i){e.onDragEnd&&e.onDragEnd({originalEvent:i})},wt=function(){var i=r({className:f("label")},m("label")),d=c.createElement("span",i,s);if(e.nodeTemplate){var h={onTogglerClick:j,className:"p-treenode-label",element:d,props:e,expanded:l};d=H.getJSXElement(e.nodeTemplate,e.node,h)}return d},Ue=function(){if(ie()&&e.node.selectable!==!1){var i,d=fe(),h=ge(),R=r({className:f("checkIcon")}),q=d?e.checkboxIcon||c.createElement(Gn,R):h?e.checkboxIcon||c.createElement(ao,R):null,le=ce.getJSXIcon(q,ke({},R),e),Se=r({className:f("nodeCheckbox",{partialChecked:h}),checked:d||h,icon:le,tabIndex:-1,unstyled:e==null||(i=e.isUnstyled)===null||i===void 0?void 0:i.call(e),"data-p-checked":d,"data-p-partialchecked":h,onChange:O},m("nodeCheckbox"));return c.createElement(io,Se)}return null},Ke=function(){var i=e.node.icon||(l?e.node.expandedIcon:e.node.collapsedIcon);if(i){var d=r({className:ee(i,f("nodeIcon"))},m("nodeIcon"));return ce.getJSXIcon(i,ke({},d),{props:e})}return null},Et=function(){var i=r({className:f("togglerIcon"),"aria-hidden":!0},m("togglerIcon")),d=l?e.collapseIcon||c.createElement(Io,i):e.expandIcon||c.createElement(pa,i),h=ce.getJSXIcon(d,ke({},i),{props:e,expanded:l}),R=r({type:"button",className:f("toggler"),tabIndex:-1,"aria-hidden":!0,onClick:j},m("toggler")),q=c.createElement("button",R,h,c.createElement(en,null));if(e.togglerTemplate){var le={onClick:j,containerClassName:"p-tree-toggler p-link",iconClassName:"p-tree-toggler-icon",element:q,props:e,expanded:l};q=H.getJSXElement(e.togglerTemplate,e.node,le)}return q},rt=function(i){if(e.dragdropScope){var d=r({className:f("droppoint"),role:"treeitem",onDrop:function(R){return yt(R,i)},onDragOver:je,onDragEnter:Qe,onDragLeave:et},m("droppoint"));return c.createElement("li",d)}return null},M=function(){var i=Q(),d=fe(),h=Et(),R=Ue(),q=Ke(),le=wt(),Se=r({ref:t,className:ee(e.node.className,f("content",{checked:d,selected:i,nodeProps:e,isCheckboxSelectionMode:ie})),style:e.node.style,onClick:O,onDoubleClick:N,onContextMenu:B,onTouchEnd:bt,draggable:e.dragdropScope&&e.node.draggable!==!1&&!e.disabled,onDrop:xt,onDragOver:St,onDragEnter:tt,onDragLeave:nt,onDragStart:Ct,onDragEnd:kt,"data-p-highlight":ie()?d:i},m("content"));return c.createElement("div",Se,h,R,q,le)},p=function(){var i=r({className:f("subgroup"),role:"group"},m("subgroup"));return H.isNotEmpty(e.node.children)&&l?c.createElement("ul",i,e.node.children.map(function(d,h){return c.createElement(ur,{key:d.key||d.label,node:d,checkboxIcon:e.checkboxIcon,collapseIcon:e.collapseIcon,contextMenuSelectionKey:e.contextMenuSelectionKey,cx:f,disabled:e.disabled,dragdropScope:e.dragdropScope,expandIcon:e.expandIcon,expandedKeys:e.expandedKeys,index:h,isNodeLeaf:e.isNodeLeaf,last:h===e.node.children.length-1,metaKeySelection:e.metaKeySelection,nodeTemplate:e.nodeTemplate,onClick:e.onClick,onCollapse:e.onCollapse,onContextMenu:e.onContextMenu,onContextMenuSelectionChange:e.onContextMenuSelectionChange,onDoubleClick:e.onDoubleClick,onDragEnd:e.onDragEnd,onDragStart:e.onDragStart,onDrop:e.onDrop,onDropPoint:e.onDropPoint,onExpand:e.onExpand,onPropagateUp:ne,onSelect:e.onSelect,onSelectionChange:e.onSelectionChange,onToggle:e.onToggle,onUnselect:e.onUnselect,originalOptions:e.originalOptions,parent:e.node,path:e.path+"-"+h,propagateSelectionDown:e.propagateSelectionDown,propagateSelectionUp:e.propagateSelectionUp,ptm:u,selectionKeys:e.selectionKeys,selectionMode:e.selectionMode,togglerTemplate:e.togglerTemplate})})):null},v=function(){var i=e.disabled||e.index!==0?-1:0,d=Q(),h=fe(),R=M(),q=p(),le=r({ref:n,className:ee(e.node.className,f("node",{isLeaf:o})),style:e.node.style,tabIndex:i,role:"treeitem","aria-label":s,"aria-level":e.level,"aria-expanded":l,"aria-checked":h,"aria-setsize":e.node.children?e.node.children.length:0,"aria-posinset":e.index+1,onKeyDown:V,"aria-selected":h||d},m("node"));return c.createElement("li",le,R,q)},T=v();if(e.dragdropScope&&!e.disabled&&(!e.parent||e.parent.droppable!==!1)){var z=rt(-1),Y=e.last?rt(1):null;return c.createElement(c.Fragment,null,z,T,Y)}return T});ur.displayName="UITreeNode";function na(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?na(Object(n),!0).forEach(function(a){cr(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):na(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Pn(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Os(e))||t){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,l;return{s:function(){n=n.call(e)},n:function(){var f=n.next();return o=f.done,f},e:function(f){s=!0,l=f},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(s)throw l}}}}function Os(e,t){if(e){if(typeof e=="string")return ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(e,t)}}function ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var lo=c.memo(c.forwardRef(function(e,t){var n=Je(),a=c.useContext(mt),r=Tt.getProps(e,a),o=c.useState(""),s=Yn(o,2),l=s[0],u=s[1],f=c.useState(r.expandedKeys),m=Yn(f,2),b=m[0],S=m[1],j=c.useRef(null),I=c.useRef([]),A=c.useRef(null),L=c.useRef(!1),$=r.onFilterValueChange?r.filterValue:l,_=r.onToggle?r.expandedKeys:b,w=c.useRef(null),O=Tt.setMetaData({props:r,state:{filterValue:$,expandedKeys:_}}),N=O.ptm,B=O.cx,V=O.isUnstyled;gt(Tt.css.styles,V,{name:"tree"});var re={filter:function(p){return fe(p)},reset:function(){return ie()}},W=function(){return r.filter&&I.current?I.current:r.value},k=function(p){var v=p.originalEvent,T=p.value,z=p.navigateFocusToChild;r.onToggle?r.onToggle({originalEvent:v,value:T}):(z&&(w.current=v),S(T))};Cs(function(){if(w.current){var M=w.current,p=M.target.getAttribute("data-pc-section")==="toggler"?M.target.closest('[role="treeitem"]'):M.target,v=p.children[1];if(v){p&&(p.tabIndex="-1");var T=r.dragdropScope?v.children[1]:v.children[0];T&&(T.tabIndex="0",T.focus())}w.current=null}},[_]);var J=function(p){A.current={path:p.path,index:p.index}},te=function(){A.current=null},X=function(p){if(Array.isArray(p))return p.map(X);if(p&&Object.getPrototypeOf(p)===Object.prototype){var v={};for(var T in p)T!=="data"?v[T]=X(p[T]):v[T]=p[T];return v}return p},ve=function(p){var v;if(Ze((v=A.current)===null||v===void 0?void 0:v.path,p.path)){var T=X(r.value),z=A.current.path.split("-");z.pop();var Y=ne(T,z),y=Y?Y.children[A.current.index]:T[A.current.index],i=ne(T,p.path.split("-"));i.children?i.children.push(y):i.children=[y],Y?Y.children.splice(A.current.index,1):T.splice(A.current.index,1),r.onDragDrop&&r.onDragDrop({originalEvent:p.originalEvent,value:T,dragNode:y,dropNode:i,dropIndex:p.index})}},be=function(p){if(ye(p)){var v=X(r.value),T=A.current.path.split("-");T.pop();var z=p.path.split("-");z.pop();var Y=ne(v,T),y=ne(v,z),i=Y?Y.children[A.current.index]:v[A.current.index],d=xe(A.current.path,p.path);if(Y?Y.children.splice(A.current.index,1):v.splice(A.current.index,1),p.position<0){var h=d?A.current.index>p.index?p.index:p.index-1:p.index;y?y.children.splice(h,0,i):v.splice(h,0,i)}else y?y.children.push(i):v.push(i);r.onDragDrop&&r.onDragDrop({originalEvent:p.originalEvent,value:v,dragNode:i,dropNode:y,dropIndex:p.index})}},Ne=function(p,v){return!(!p||p===v||v.indexOf(p)===0)},Ze=function(p,v){var T=Ne(p,v);return T?!(p.indexOf("-")>0&&p.substring(0,p.lastIndexOf("-"))===v):!1},ye=function(p){var v,T=Ne((v=A.current)===null||v===void 0?void 0:v.path,p.path);return T?!(p.position===-1&&xe(A.current.path,p.path)&&A.current.index+1===p.index):!1},xe=function(p,v){return p.length===1&&v.length===1?!0:p.substring(0,p.lastIndexOf("-"))===v.substring(0,v.lastIndexOf("-"))},ne=function(p,v){if(v.length===0)return null;var T=parseInt(v[0],10),z=p.children?p.children[T]:p[T];return v.length===1?z:(v.shift(),ne(z,v))},De=function(p){return p.leaf===!1?!1:!(p.children&&p.children.length)},Q=function(p){p.which===13&&p.preventDefault()},fe=function(p){L.current=!0;var v=p.target.value;r.onFilterValueChange?r.onFilterValueChange({originalEvent:p,value:v}):u(v)},vt=function(p){u(H.isNotEmpty(p)?p:""),ge()},ge=function(){if(L.current){if(H.isEmpty($))I.current=r.value;else{I.current=[];var p=r.filterBy.split(","),v=$.toLocaleLowerCase(r.filterLocale),T=r.filterMode==="strict",z=Pn(r.value),Y;try{for(z.s();!(Y=z.n()).done;){var y=Y.value,i=It({},y),d={searchFields:p,filterText:v,isStrictMode:T};(T&&(oe(i,d)||ae(i,d))||!T&&(ae(i,d)||oe(i,d)))&&I.current.push(i)}}catch(h){z.e(h)}finally{z.f()}}L.current=!1}},oe=function(p,v){if(p){var T=!1;if(p.children){var z=it(p.children);p.children=[];var Y=Pn(z),y;try{for(Y.s();!(y=Y.n()).done;){var i=y.value,d=It({},i);ae(d,v)&&(T=!0,p.children.push(d))}}catch(h){Y.e(h)}finally{Y.f()}}if(T)return p.expanded=!0,!0}},ae=function(p,v){var T=v.searchFields,z=v.filterText,Y=v.isStrictMode,y=!1,i=Pn(T),d;try{for(i.s();!(d=i.n()).done;){var h=d.value,R=String(H.resolveFieldData(p,h)).toLocaleLowerCase(r.filterLocale);R.indexOf(z)>-1&&(y=!0)}}catch(q){i.e(q)}finally{i.f()}return(!y||Y&&!De(p))&&(y=oe(p,{searchFields:T,filterText:z,isStrictMode:Y})||y),y},ie=function(){u("")};c.useImperativeHandle(t,function(){return{props:r,filter:vt,getElement:function(){return j.current}}});var bt=function(p,v,T){return c.createElement(ur,{hostName:"Tree",key:p.key||p.label,node:p,level:r.level+1,originalOptions:r.value,index:v,last:T,path:String(v),checkboxIcon:r.checkboxIcon,collapseIcon:r.collapseIcon,contextMenuSelectionKey:r.contextMenuSelectionKey,cx:B,disabled:r.disabled,dragdropScope:r.dragdropScope,expandIcon:r.expandIcon,expandedKeys:_,isNodeLeaf:De,metaKeySelection:r.metaKeySelection,nodeTemplate:r.nodeTemplate,onClick:r.onNodeClick,onCollapse:r.onCollapse,onContextMenu:r.onContextMenu,onContextMenuSelectionChange:r.onContextMenuSelectionChange,onDoubleClick:r.onNodeDoubleClick,onDragEnd:te,onDragStart:J,onDrop:ve,onDropPoint:be,onExpand:r.onExpand,onSelect:r.onSelect,onSelectionChange:r.onSelectionChange,onToggle:k,onUnselect:r.onUnselect,propagateSelectionDown:r.propagateSelectionDown,propagateSelectionUp:r.propagateSelectionUp,ptm:N,selectionKeys:r.selectionKeys,selectionMode:r.selectionMode,togglerTemplate:r.togglerTemplate,isUnstyled:V})},yt=function(){var p=n({className:ee(r.contentClassName,B("emptyMessage")),role:"treeitem"},N("emptyMessage")),v=H.getJSXElement(r.emptyMessage,r)||Oo("emptyMessage");return c.createElement("li",p,c.createElement("span",{className:"p-treenode-content"},v))},je=function(p){var v=n(It({className:ee(r.contentClassName,B("container")),role:"tree","aria-label":r.ariaLabel,"aria-labelledby":r.ariaLabelledBy,style:r.contentStyle},kt),N("container"));return c.createElement("ul",v,p)},Qe=function(p){return p.map(function(v,T){return bt(v,T,T===p.length-1)})},et=function(){if(r.value){r.filter&&(L.current=!0,ge());var p=W();if(p.length>0){var v=Qe(p);return je(v)}var T=yt();return je(T)}return null},xt=function(){if(r.loading){var p=n({className:B("loadingIcon")},N("loadingIcon")),v=r.loadingIcon||c.createElement(Po,ft({},p,{spin:!0})),T=ce.getJSXIcon(v,It({},p),{props:r}),z=n({className:B("loadingOverlay")},N("loadingOverlay"));return c.createElement("div",z,T)}return null},St=function(){if(r.filter){var p=H.isNotEmpty($)?$:"",v=n({className:B("searchIcon")},N("searchIcon")),T=r.filterIcon||c.createElement(To,v),z=ce.getJSXIcon(T,It({},v),{props:r}),Y=n({className:B("filterContainer")},N("filterContainer")),y=n({type:"text",value:p,autoComplete:"off",className:B("input"),placeholder:r.filterPlaceholder,"aria-label":r.filterPlaceholder,onKeyDown:Q,onChange:fe,disabled:r.disabled},N("input")),i=c.createElement("div",Y,c.createElement("input",y),z);if(r.filterTemplate){var d={className:"p-tree-filter-container",element:i,filterOptions:re,filterInputKeyDown:Q,filterInputChange:fe,filterIconClassName:"p-dropdown-filter-icon",props:r};i=H.getJSXElement(r.filterTemplate,d)}return c.createElement(c.Fragment,null,i)}return null},tt=function(){if(r.showHeader){var p=St(),v=p;if(r.header){var T={filterContainerClassName:"p-tree-filter-container",filterIconClassName:"p-tree-filter-icon",filterInput:{className:"p-tree-filter p-inputtext p-component",onKeyDown:Q,onChange:fe},filterElement:p,element:v,props:r};v=H.getJSXElement(r.header,T)}var z=n({className:B("header")},N("header"));return c.createElement("div",z,v)}return null},nt=function(){var p=H.getJSXElement(r.footer,r),v=n({className:B("footer")},N("footer"));return c.createElement("div",v,p)},Ct=Tt.getOtherProps(r),kt=H.reduceKeys(Ct,K.ARIA_PROPS),wt=xt(),Ue=et(),Ke=tt(),Et=nt(),rt=n({ref:j,className:ee(r.className,B("root")),style:r.style,id:r.id},Tt.getOtherProps(r),N("root"));return c.createElement("div",rt,wt,Ke,Ue,Et)}));lo.displayName="Tree";const Ts=ue(lo)`
  &.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: none;
  }
`,Is=({value:e,metaKeySelection:t,selectionMode:n,selectionKeys:a,expandedKeys:r,onSelectionChange:o,onToggle:s,className:l})=>E.jsx(Ts,{value:e,metaKeySelection:t,selectionMode:n,selectionKeys:a,expandedKeys:r,onSelectionChange:o,onToggle:s,className:l,"data-qatype":"tree"}),As={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Ns=As,Ds={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},js=Ds,_s={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},Ms={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},so={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Rs={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Ls={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Fs=ue(Ao)`
`,$s=({type:e,value:t,onChange:n})=>E.jsx(Fs,{type:e,value:t,onChange:n,"data-qatype":"inputtext"}),Us=()=>{const[e,t]=c.useState([]),[n,a]=c.useState([]),[r,o]=c.useState({}),[s,l]=c.useState({}),[u]=c.useState(!1);c.useEffect(()=>{on.getRoleTableNodes().then(O=>t(O)),on.getTreeNodes().then(O=>a(O))},[]);const f=()=>{if(e){const O={id:se(),name:" ",permissions:"",trash:""};t([...e,O])}},m=O=>{let N=[...e],{newData:B,index:V}=O;N[V]=B,t(N)},b=O=>E.jsx($s,{type:"text",value:O.value,onChange:N=>O.editorCallback(N.target.value)}),S=O=>O.name,j=O=>{},I=O=>E.jsx(an,{children:E.jsx(un,{icon:Ns,style:{color:"#ffa500ab"},onClick:()=>j(O.id)})}),A=O=>{e&&t(e.filter(N=>N.id!==O))},$=[{field:"name",header:"Наименование",style:{borderRight:"none"},editor:b},{align:"center",style:{width:"120px",borderLeft:"none"},rowEditor:S},{field:"permissions",align:"center",style:{width:"80px",minWidth:"80px"},body:I},{field:"trash",align:"center",style:{width:"80px",minWidth:"80px"},body:O=>{const N=`trash-tooltip-${O.id}`;return E.jsxs(an,{children:[E.jsx(un,{id:N,icon:so,style:{cursor:"pointer"},onClick:()=>A(O.id)}),E.jsx(da,{target:`#${N}`,content:"Удалить пользователя",position:"left"})]})}}],_=(O,N)=>{const B=function(V,re,W={}){for(let k=0;k<V.length;k++)W[V[k].key]=re,V[k].children&&V[k].children.length&&B(V[k].children,re,W);return W};switch(N){case"CHECK_ALL":o(B(O,{checked:!0,partialChecked:!1}));break;case"UNCHECK_ALL":o({});break;case"EXPAND_ALL":l(B(O,!0));break;case"COLLAPSE_ALL":l({});break}},w=E.jsxs(Qo,{children:[E.jsxs(ei,{children:[E.jsx("span",{children:"Разрешения"}),E.jsxs(ti,{children:[E.jsx(ot,{width:26,height:26,children:E.jsx(at,{icon:E.jsx(We,{icon:js}),onClick:()=>_(n,"CHECK_ALL")})}),E.jsx(ot,{width:26,height:26,children:E.jsx(at,{icon:E.jsx(We,{icon:Ms}),onClick:()=>_(n,"UNCHECK_ALL")})}),E.jsx(ot,{width:26,height:26,children:E.jsx(at,{icon:E.jsx(We,{icon:Ls}),onClick:()=>_(n,"EXPAND_ALL")})}),E.jsx(ot,{width:26,height:26,children:E.jsx(at,{icon:E.jsx(We,{icon:Rs}),onClick:()=>_(n,"COLLAPSE_ALL")})})]})]}),E.jsx(Is,{value:n,metaKeySelection:u,selectionMode:"checkbox",selectionKeys:r,expandedKeys:s,onSelectionChange:O=>o(O.value?O.value:{}),onToggle:O=>l(O.value),className:"w-full md:w-30rem"})]});return E.jsxs(E.Fragment,{children:[E.jsx(ot,{width:150,children:E.jsx(at,{label:"Добавить",onClick:f})}),E.jsxs(Jo,{children:[E.jsx(Jn,{columns:$,items:e,onRowEditComplete:m,onRowClick:()=>{}}),E.jsx("div",{className:"card",children:E.jsx(Zo,{start:w})})]})]})};function Kt(e){"@babel/helpers - typeof";return Kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kt(e)}function Ks(e,t){if(Kt(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(Kt(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bs(e){var t=Ks(e,"string");return Kt(t)==="symbol"?t:String(t)}function zs(e,t,n){return t=Bs(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mt(){return Mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Mt.apply(this,arguments)}function Hs(e){if(Array.isArray(e))return e}function Ws(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,o,s,l=[],u=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(a=o.call(n)).done)&&(l.push(a.value),l.length!==t);u=!0);}catch(m){f=!0,r=m}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return l}}function aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Vs(e,t){if(e){if(typeof e=="string")return aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return aa(e,t)}}function Xs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ys(e,t){return Hs(e)||Ws(e,t)||Vs(e,t)||Xs()}var qs={root:function(t){var n=t.props;return ee("p-chip p-component",{"p-chip-image":n.image!=null})},removeIcon:"p-chip-remove-icon",icon:"p-chip-icon",label:"p-chip-text"},Gs=`
@layer primereact {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }
    
    .p-chip-text {
        line-height: 1.5;
    }
    
    .p-chip-icon.pi {
        line-height: 1.5;
    }
    
    .p-chip .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }
    
    .p-chip img {
        border-radius: 50%;
    }
}
`,Qt=Ge.extend({defaultProps:{__TYPE:"Chip",label:null,icon:null,image:null,removable:!1,removeIcon:null,className:null,style:null,template:null,imageAlt:"chip",onImageError:null,onRemove:null,children:void 0},css:{classes:qs,styles:Gs}});function oa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ia(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oa(Object(n),!0).forEach(function(a){zs(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oa(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var co=c.memo(c.forwardRef(function(e,t){var n=Je(),a=c.useContext(mt),r=Qt.getProps(e,a),o=c.useRef(null),s=c.useState(!0),l=Ys(s,2),u=l[0],f=l[1],m=Qt.setMetaData({props:r}),b=m.ptm,S=m.cx,j=m.isUnstyled;gt(Qt.css.styles,j,{name:"chip"});var I=function(w){(w.code==="Enter"||w.code==="NumpadEnter"||w.code==="Backspace")&&A(w)},A=function(w){f(!1),r.onRemove&&r.onRemove({originalEvent:w,value:r.label||r.image||r.icon})},L=function(){var w=[],O=n({role:"button",tabIndex:0,className:S("removeIcon"),onClick:A,onKeyDown:I},b("removeIcon")),N=r.removeIcon||c.createElement(No,Mt({},O,{key:sa("removeIcon")}));if(r.image){var B=n({src:r.image,onError:r.onImageError},b("image"));w.push(c.createElement("img",Mt({alt:r.imageAlt},B)))}else if(r.icon){var V=n({className:S("icon")},b("icon"));w.push(ce.getJSXIcon(r.icon,ia({},V),{props:r}))}if(r.label){var re=n({className:S("label")},b("label"));w.push(c.createElement("span",Mt({},re,{key:"label"}),r.label))}return r.removable&&w.push(ce.getJSXIcon(N,ia({},O),{props:r})),w},$=function(){var w=r.template?H.getJSXElement(r.template,r):L(),O=n({ref:o,style:r.style,className:ee(r.className,S("root")),"aria-label":r.label},Qt.getOtherProps(r),b("root"));return c.createElement("div",O,w)};return c.useImperativeHandle(t,function(){return{props:r,getElement:function(){return o.current}}}),u&&$()}));co.displayName="Chip";const Js=ue(co)`
  margin: 3px;
`,Zs=({label:e,removable:t})=>E.jsx(Js,{label:e,removable:t,"data-qatype":"chip"}),Qs=()=>{const[e,t]=c.useState(),[n]=c.useState([{label:"Дашборд для HDMI",value:"1"},{label:"Дашборд2",value:"2"},{label:"Дашборд3",value:"3"}]);c.useEffect(()=>{on.getUsersTableNodes().then(b=>t(b))},[]);const a=()=>{if(e){const b={id:se(),login:"",roles:[],ip:"",home_page:"",key:"",trash:""};t([...e,b])}},r=b=>E.jsx(E.Fragment,{children:b.roles&&b.roles.length?b.roles.map(S=>E.jsx(Zs,{label:S,removable:!0},S)):null}),o=(b,S)=>{if(e){const j=e.map(I=>I.id===b.id?{...I,home_page:S}:I);t(j)}},s=b=>E.jsx(ua,{value:b.home_page,onChange:S=>o(b,S.value),options:n,styles:{width:250},placeholder:"Выберите дашборд"}),l=b=>{e&&t(e.filter(S=>S.id!==b))},m=[{field:"login",header:"Логин"},{field:"roles",header:"Роли",body:r},{field:"ip",header:"IP-адрес"},{field:"home_page",header:"Домашняя страница",style:{width:"300px",minWidth:"300px"},align:"center",body:s},{field:"key",align:"center",style:{width:"80px",minWidth:"80px"},body:b=>E.jsx(an,{children:E.jsx(un,{icon:_s,style:{color:"#756efd"}})})},{field:"trash",align:"center",style:{width:"80px",minWidth:"80px"},body:b=>{const S=`trash-tooltip-${b.id}`;return E.jsxs(an,{children:[E.jsx(un,{id:S,icon:so,style:{cursor:"pointer",color:"grey"},onClick:()=>l(b.id)}),E.jsx(da,{target:`#${S}`,content:"Удалить пользователя",position:"left"})]})}}];return E.jsxs(E.Fragment,{children:[E.jsx(ot,{width:150,children:E.jsx(at,{label:"Добавить",onClick:a})}),E.jsx(Jn,{columns:m,items:e})]})},ac=()=>{const e=[{header:"Пользователи",content:E.jsx(Qs,{})},{header:"Роли",content:E.jsx(Us,{})},{header:"Настройки авторизации",content:E.jsx(pi,{})}];return E.jsx(Go,{children:E.jsx(qo,{tabs:e,defaultTab:1})})};export{ac as default};
