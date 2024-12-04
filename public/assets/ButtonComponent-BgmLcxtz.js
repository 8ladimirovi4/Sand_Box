import{C as N,r as o,c as S,P as _,d as B,O,i,o as A,x as J,S as W,m as X,n as Q,W as w,j as V}from"./index-BYWN6Svt.js";function m(){return m=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}return a},m.apply(this,arguments)}function f(a){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(a)}function Z(a,t){if(f(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var r=e.call(a,t||"default");if(f(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function ee(a){var t=Z(a,"string");return f(t)==="symbol"?t:String(t)}function s(a,t,e){return t=ee(t),t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var te={root:function(t){var e=t.props;return i("p-badge p-component",s({"p-badge-no-gutter":O.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":O.isEmpty(e.value),"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge"},"p-badge-".concat(e.severity),e.severity!==null))}},ne=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,v=N.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:te,styles:ne}});function x(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),e.push.apply(e,r)}return e}function ae(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?x(Object(e),!0).forEach(function(r){s(a,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))})}return a}var D=o.memo(o.forwardRef(function(a,t){var e=S(),r=o.useContext(_),n=v.getProps(a,r),l=v.setMetaData(ae({props:n},n.__parentMetadata)),c=l.ptm,b=l.cx,p=l.isUnstyled;B(v.css.styles,p,{name:"badge"});var d=o.useRef(null);o.useImperativeHandle(t,function(){return{props:n,getElement:function(){return d.current}}});var P=e({ref:d,style:n.style,className:i(n.className,b("root"))},v.getOtherProps(n),c("root"));return o.createElement("span",P,n.value)}));D.displayName="Badge";var re={icon:function(t){var e=t.props;return i("p-button-icon p-c",s({},"p-button-icon-".concat(e.iconPos),e.label))},loadingIcon:function(t){var e=t.props,r=t.className;return i(r,{"p-button-loading-icon":e.loading})},label:"p-button-label p-c",root:function(t){var e=t.props,r=t.size,n=t.disabled;return i("p-button p-component",s(s(s(s({"p-button-icon-only":(e.icon||e.loading)&&!e.label&&!e.children,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-disabled":n,"p-button-loading":e.loading,"p-button-outlined":e.outlined,"p-button-raised":e.raised,"p-button-link":e.link,"p-button-text":e.text,"p-button-rounded":e.rounded,"p-button-loading-label-only":e.loading&&!e.icon&&e.label},"p-button-loading-".concat(e.iconPos),e.loading&&e.label),"p-button-".concat(r),r),"p-button-".concat(e.severity),e.severity),"p-button-plain",e.plain))}},y=N.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:re}});function E(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),e.push.apply(e,r)}return e}function h(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?E(Object(e),!0).forEach(function(r){s(a,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))})}return a}var I=o.memo(o.forwardRef(function(a,t){var e=S(),r=o.useContext(_),n=y.getProps(a,r),l=n.disabled||n.loading,c=h(h({props:n},n.__parentMetadata),{},{context:{disabled:l}}),b=y.setMetaData(c),p=b.ptm,d=b.cx,P=b.isUnstyled;B(y.css.styles,P,{name:"button",styled:!0});var g=o.useRef(t);if(o.useEffect(function(){O.combinedRefs(g,t)},[g,t]),n.visible===!1)return null;var M=function(){var u=i("p-button-icon p-c",s({},"p-button-icon-".concat(n.iconPos),n.label)),G=e({className:d("icon")},p("icon"));u=i(u,{"p-button-loading-icon":n.loading});var Y=e({className:d("loadingIcon",{className:u})},p("loadingIcon")),q=n.loading?n.loadingIcon||o.createElement(W,m({},Y,{spin:!0})):n.icon;return X.getJSXIcon(q,h({},G),{props:n})},z=function(){var u=e({className:d("label")},p("label"));return n.label?o.createElement("span",u,n.label):!n.children&&!n.label&&o.createElement("span",m({},u,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},C=function(){if(n.badge){var u=e({className:i(n.badgeClassName),value:n.badge,unstyled:n.unstyled,__parentMetadata:{parent:c}},p("badge"));return o.createElement(D,u,n.badge)}return null},R=!l||n.tooltipOptions&&n.tooltipOptions.showOnDisabled,T=O.isNotEmpty(n.tooltip)&&R,$={large:"lg",small:"sm"},U=$[n.size],k=M(),L=z(),H=C(),K=n.label?n.label+(n.badge?" "+n.badge:""):n["aria-label"],F=e({ref:g,"aria-label":K,"data-pc-autofocus":n.autoFocus,className:i(n.className,d("root",{size:U,disabled:l})),disabled:l},y.getOtherProps(n),p("root"));return o.createElement(o.Fragment,null,o.createElement("button",F,k,L,n.children,H,o.createElement(A,null)),T&&o.createElement(J,m({target:g,content:n.tooltip,pt:p("tooltip")},n.tooltipOptions)))}));I.displayName="Button";const oe=Q(I)`
  width: 100%;
  height: 100%;
  background-color: ${w.technoGreen};
  border-color: ${w.technoGreen};
`,se=({icon:a,label:t,className:e,disabled:r,onClick:n=()=>{}})=>{const l=c=>{c.currentTarget.blur()};return V.jsx(oe,{icon:a,label:t,className:e,disabled:r,onClick:c=>{n(),l(c)},"data-qatype":"button"})};export{se as B,I as a};
