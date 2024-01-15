(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8384],{438746:function(le,B,n){"use strict";n.d(B,{Z:function(){return R}});var w=n(97857),C=n.n(w),s=n(952677),x=n.n(s),z=n(805574),P=n.n(z),_=n(385956),g=n(667294),G=n(302559);function j(L){return L.replace("-cn","").replace(/\/$/,"")}function R(){var L=(0,_.useLocation)(),A=L.search,Z=(0,G.Z)(),S=P()(Z,2),c=S[1],v=g.useCallback(function(f,r){var d=j(f);if(c==="cn"&&(d="".concat(d,"-cn")),A&&(d="".concat(d).concat(A)),r){var l;x()(r)==="object"?l=r[c]:l=r,d="".concat(d,"#").concat(l)}return d},[c,A]);return C()(C()({},L),{},{pathname:j(L.pathname),getLink:v})}},858992:function(le,B,n){"use strict";n.r(B),n.d(B,{default:function(){return et}});var w=n(97857),C=n.n(w),s=n(667294),x=n(385956),z=n(9783),P=n.n(z),_=n(168400),g=n.n(_),G=n(805574),j=n.n(G),R=n(639389),L=n.n(R),A=n(944226),Z=n(11739),S=n(879587),c=n(106750),v=n(707898),f=n(647759),r=n(693967),d=n.n(r),l=n(826961),U=n.n(l),$=n(438746),e=n(785893),y=function(t){var o=t.children;return(0,e.jsx)("div",{className:"browser-mockup with-url",children:o})},O=y,K=function(t){var o=t.children,i=(0,s.useState)(!1),p=j()(i,2),m=p[0],I=p[1];return(0,s.useLayoutEffect)(function(){I(!0)},[]),m?o:null},b=K,ae=function(){return(0,e.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,e.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},ye=function(t){return(0,e.jsx)(L(),C()({component:ae},t))},Ie=ye,Ce=n(941346),de=n(185209),Ne=n(468990),Ae=n(224292),je=n.n(Ae),ue=n(626826),me=n(915660),ee=n.n(me),Be=n(728207),Ze=n(302559),Fe=n(965516),ie=function(t){var o=t.error,i=Fe.Z.useToken(),p=i.token;return o?(0,e.jsx)(Z.Z,{banner:!0,type:"error",message:o.toString(),style:{color:p.colorError}}):null},ve=ie,Le,pe,Se=(0,f.kc)(function(a){var t=a.token,o=a.css,i=t.colorPrimaryBorder,p=t.colorIcon,m=t.colorPrimary;return{editor:o(Le||(Le=g()([`
      .npm__react-simple-code-editor__textarea {
        outline: none;

        &:hover {
          box-shadow: inset 0 0 0 1px `,` !important;
        }

        &:focus {
          box-shadow: inset 0 0 0 1px `,` !important;
        }
      }

      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code > pre,
        .dumi-default-source-code-editor-textarea {
          padding: 12px 16px;
        }

        .dumi-default-source-code > pre {
          font-size: 13px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &-textarea:hover {
          box-shadow: 0 0 0 1px `,` inset;
        }

        &-textarea:focus {
          box-shadow: 0 0 0 1px `,` inset;
        }
      }
    `])),i,m,t.colorPrimaryBorderHover,t.colorPrimary),editableIcon:o(pe||(pe=g()([`
      position: absolute;
      z-index: 2;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: `,`;
    `])),p)}}),ze={cn:{demoEditable:"\u7F16\u8F91 Demo \u53EF\u5B9E\u65F6\u9884\u89C8"},en:{demoEditable:"Edit demo with real-time preview"}},be="hide-live-demo-tip",Ee=function(t){var o=(0,s.useState)(!1),i=j()(o,2),p=i[0],m=i[1],I=(0,s.useState)(),F=j()(I,2),M=F[0],k=F[1],E=Se(),T=E.styles,ne=(0,Ze.Z)(ze),X=j()(ne,1),Y=X[0];(0,s.useEffect)(function(){var V=!localStorage.getItem(be);V&&m(!0)},[]);var Q=function(D){m(D),D||localStorage.setItem(be,"true")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:T.editor,children:[(0,e.jsx)(Be.Z,{lang:t.lang,initialValue:t.initialValue,onTranspile:function(D){var q=D.err,W=D.code;if(q)k(q);else{var J;k(void 0),(J=t.onTranspile)===null||J===void 0||J.call(t,W)}}}),(0,e.jsx)(ve,{error:t.liveError||M})]}),(0,e.jsx)(S.Z,{title:Y.demoEditable,open:p,onOpenChange:Q,children:(0,e.jsx)(R.EditFilled,{className:T.editableIcon})})]})},fe=Ee,Pe,Oe,he,Me=(0,f.kc)(function(a){var t=a.token,o=a.css,i=t.colorIcon,p=t.colorBgTextHover,m=t.antCls;return{code:o(Pe||(Pe=g()([`
      position: relative;
      margin-top: -16px;
    `]))),copyButton:o(Oe||(Oe=g()([`
      color: `,`;
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: 16px;
      width: 32px;
      text-align: center;
      background: `,`;
      padding: 0;
    `])),i,p),copyIcon:o(he||(he=g()([`
      `,`-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: -9px;
          bottom: -5px;
          right: -9px;
        }
      }
      `,"-typography-copy:not(",`-typography-copy-success) {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }
    `])),m,m,m,i,i)}}),Ue={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function Ke(a){return je()(a,[[function(t){return ue.isElement(t)&&ue.getTagName(t)==="pre"},function(t,o){var i=ue.getAttributes(t);return(0,e.jsx)("pre",{className:"language-".concat(i.lang),children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:i.highlighted}})},o)}]])}var He=function(t){var o=t.sourceCode,i=o===void 0?"":o,p=t.jsxCode,m=p===void 0?"":p,I=t.styleCode,F=I===void 0?"":I,M=t.entryName,k=t.onCodeTypeChange,E=t.onSourceTranspile,T={};i&&(T.tsx=""),m&&(T.jsx=""),F&&(T.style="");var ne=s.useState(T),X=j()(ne,2),Y=X[0],Q=X[1],V={tsx:i==null?void 0:i.trim(),jsx:m==null?void 0:m.trim(),style:F==null?void 0:F.trim()};(0,s.useEffect)(function(){var u={tsx:ee().highlight(i,ee().languages.javascript,"jsx"),jsx:ee().highlight(m,ee().languages.javascript,"jsx"),style:ee().highlight(F,ee().languages.css,"css")};Object.keys(u).forEach(function(oe){u[oe]||delete u[oe]}),Q(u)},[m,i,F]);var D=Object.keys(Y),q=Me(),W=q.styles,J=(0,s.useMemo)(function(){return D.map(function(u){return{label:Ue[u],key:u,children:(0,e.jsxs)("div",{className:W.code,children:[u==="tsx"?(0,e.jsx)(fe,{lang:u,initialValue:V[u],onTranspile:function(Te){E==null||E(P()({},M,Te))}}):Ke(["pre",{lang:u,highlighted:Y[u]}]),(0,e.jsx)(Ce.ZP,{type:"text",className:W.copyButton,children:(0,e.jsx)(de.Z.Text,{className:W.copyIcon,copyable:{text:V[u]}})})]})}})},[JSON.stringify(Y)]);return D.length?D.length===1?(0,e.jsx)(fe,{lang:D[0],initialValue:V[D[0]],onTranspile:function(oe){E==null||E(P()({},M,oe))}}):(0,e.jsx)(Ne.Z,{centered:!0,className:"highlight",onChange:k,items:J}):null},Ve=He,En=function(){return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},Pn=function(t){return(0,e.jsx)(L(),C()({component:En},t))},On=Pn,Mn=n(148050),Tn=function(t){var o=t.color,i=o===void 0?"currentColor":o;return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:i,children:[(0,e.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,e.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},Dn=function(t){return(0,e.jsx)(L(),C()({component:Tn},t))},Rn=Dn,In=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,e.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},Nn=function(t){return(0,e.jsx)(L(),C()({component:In},t))},An=Nn,Bn=n(438199),Zn=n(373638),Ye,Fn=Z.Z.ErrorBoundary;function zn(a){return U().compressToBase64(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var xe=function(t){var o=t.type,i=t.demo;window.gtag&&window.gtag("event","demo",{event_category:o,event_label:i})},We;function Un(){var a=(0,s.useState)(!1),t=j()(a,2),o=t[0],i=t[1];return(0,s.useEffect)(function(){var p;(p=We)!==null&&p!==void 0||(We=new Promise(function(m){(0,Zn.qE)(function(I){return m(I!=="timeout"&&I!=="error")})})),We.then(i)},[]),o}var Kn=(0,f.kc)(function(a){var t=a.token,o=t.borderRadius;return{codeHideBtn:(0,f.iv)(Ye||(Ye=g()([`
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all 0.2s ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-right: `,`px;
      }
    `])),o,o,t.colorSplit,t.colorTextSecondary,t.colorBgElevated,t.colorPrimary,t.marginXXS)}}),Hn=function(t){var o=t.asset,i=t.expand,p=t.iframe,m=t.demoUrl,I=t.children,F=t.title,M=t.description,k=t.originDebug,E=t.jsx,T=t.style,ne=t.compact,X=t.background,Y=t.filename,Q=t.version,V=t.clientOnly,D=t.pkgDependencyList,q=(0,x.useSiteData)(),W=q.pkg,J=(0,$.Z)(),u=Kn(),oe=u.styles,Te="index.tsx",cn=o.dependencies[Te].value,nt=Un(),we=(0,s.useRef)(null),Ge=(0,x.useLiveDemo)(o.id),tt=Ge.node,ot=Ge.error,rt=Ge.setSource,ln=(0,s.useRef)(null),dn=(0,s.useRef)(null),un=(0,s.useRef)(null),mn=(0,s.useRef)(null),at=(0,s.useState)(!1),vn=j()(at,2),se=vn[0],$e=vn[1],it=(0,s.useState)("tsx"),pn=j()(it,2),st=pn[0],ct=pn[1],lt=(0,s.useContext)(Bn.Z),re=lt.theme,dt=J.hash,ut=J.pathname,mt=J.search,vt="https://ant.design".concat(ut).concat(mt,"#").concat(o.id),pt=(0,s.useState)(!1),fn=j()(pt,2),ft=fn[0],ht=fn[1];(0,s.useEffect)(function(){var h=/preview-(\d+)-ant-design/;ht(h.test(window.location.hostname))},[]);var hn=function(N){$e(function(ce){return!ce}),xe({type:"expand",demo:N})};(0,s.useEffect)(function(){if(o.id===dt.slice(1)){var h;(h=ln.current)===null||h===void 0||h.click()}},[]),(0,s.useEffect)(function(){$e(i)},[i]);var xt=!p&&V?(0,e.jsx)(b,{children:I}):I;we.current||(we.current=p?(0,e.jsx)(O,{children:(0,e.jsx)("iframe",{src:m,height:p===!0?void 0:p,title:"demo",className:"iframe-demo"})}):xt);var gt=d()("code-box",{expand:se,"code-box-debug":k}),ge=F,yt=d()("highlight-wrapper",{"highlight-wrapper-expand":se}),ke=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,Ct={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},te=st==="tsx"?"tsx":"js",H=E.split(`
`).reduce(function(h,N){var ce=N.match(/import .+? from '(.+)';$/);if(ce!=null&&ce[1]){var Je,_e,Re=ce[1].split("/"),Xe=Re[0].startsWith("@")?"".concat(Re[0],"/").concat(Re[1]):Re[0];(Je=h[Xe])!==null&&Je!==void 0||(h[Xe]=(_e=D[Xe])!==null&&_e!==void 0?_e:"latest")}return h},{antd:W.version});H["@ant-design/icons"]="latest",te==="tsx"&&(H["@types/react"]="^18.0.0",H["@types/react-dom"]="^18.0.0"),H.react="^18.0.0",H["react-dom"]="^18.0.0";var jt={title:"".concat(ge," - antd@").concat(H.antd),html:ke,js:`const { createRoot } = ReactDOM;
`.concat(E.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(W.version,"/dist/antd-with-locales.min.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(h){return"https://unpkg.com/".concat(h)}).join(";"),js_pre_processor:"typescript"},Lt={title:"".concat(ge," - antd@").concat(H.antd),js:"".concat(/import React(\D*)from 'react';/.test(E)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(E.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:H},null,2)},De=te==="tsx"?cn:E,xn="import React from 'react';",gn=/import React(\D*)from 'react';/,yn=De.match(gn);if(yn){var St=j()(yn,1);xn=St[0],De=De.replace(gn,"").trim()}var Cn=`
`.concat(xn,`
import './index.css';
`).concat(De,`
    `).trim(),jn=(T||"").trim().replace(new RegExp("#".concat(o.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),Ln=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,bt={title:"".concat(ge," - antd@").concat(H.antd),main:"index.js",dependencies:C()(C()({},H),{},{"rc-util":D["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Et={files:P()(P()(P()({"package.json":{content:bt},"index.css":{content:jn}},"index.".concat(te),{content:Ln}),"demo.".concat(te),{content:Cn}),"index.html",{content:ke})},Sn={title:"".concat(ge," - antd@").concat(H.antd),template:"create-react-app",dependencies:H,description:"",files:P()(P()(P()({"index.css":jn},"index.".concat(te),Ln),"demo.".concat(te),Cn),"index.html",ke)};te==="tsx"&&(Sn.files["tsconfig.json"]=JSON.stringify(Ct,null,2));var Pt=re.includes("dark")?"#303030":"#f0f2f5",Ot={padding:p||ne?0:void 0,overflow:p||ne?"hidden":void 0,backgroundColor:X==="grey"?Pt:void 0},bn=(0,e.jsxs)("section",{className:gt,id:o.id,children:[(0,e.jsx)("section",{className:"code-box-demo",style:Ot,children:tt||(0,e.jsx)(Fn,{children:(0,e.jsx)(s.StrictMode,{children:we.current})})}),(0,e.jsxs)("section",{className:"code-box-meta markdown",children:[(0,e.jsxs)("div",{className:"code-box-title",children:[(0,e.jsx)(S.Z,{title:k?(0,e.jsx)(x.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,e.jsx)("a",{href:"#".concat(o.id),ref:ln,children:ge})}),(0,e.jsx)(Mn.default,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.content.edit-demo"}),filename:Y})]}),M&&(0,e.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:M}}),(0,e.jsxs)(c.Z,{wrap:"wrap",gap:"middle",className:"code-box-actions",children:[ft&&(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.online"}),children:(0,e.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:vt,children:(0,e.jsx)(R.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),nt?(0,e.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:un,onClick:function(){var N;xe({type:"riddle",demo:o.id}),(N=un.current)===null||N===void 0||N.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(Lt)}),(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.riddle"}),children:(0,e.jsx)(An,{className:"code-box-riddle"})})]}):null,(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:dn,onClick:function(){var N;xe({type:"codesandbox",demo:o.id}),(N=dn.current)===null||N===void 0||N.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"parameters",value:zn(JSON.stringify(Et))}),(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,e.jsx)(On,{className:"code-box-codesandbox"})})]}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:mn,onClick:function(){var N;xe({type:"codepen",demo:o.id}),(N=mn.current)===null||N===void 0||N.submit()},children:[(0,e.jsx)(b,{children:(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(jt)})}),(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.codepen"}),children:(0,e.jsx)(Ie,{className:"code-box-codepen"})})]}),(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,e.jsx)("span",{className:"code-box-code-action",onClick:function(){xe({type:"stackblitz",demo:o.id}),A.Z.openProject(Sn,{openFile:["demo.".concat(te)]})},children:(0,e.jsx)(R.ThunderboltOutlined,{className:"code-box-stackblitz"})})}),(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.separate"}),children:(0,e.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:m,children:(0,e.jsx)(Rn,{className:"code-box-separate"})})}),(0,e.jsx)(S.Z,{title:(0,e.jsx)(x.FormattedMessage,{id:"app.demo.code.".concat(se?"hide":"show")}),children:(0,e.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,e.jsx)("img",{alt:"expand code",src:re!=null&&re.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:se?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return hn(o.id)}}),(0,e.jsx)("img",{alt:"expand code",src:re!=null&&re.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:se?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return hn(o.id)}})]})})]})]}),se&&(0,e.jsxs)("section",{className:yt,children:[(0,e.jsx)(Ve,{sourceCode:cn,jsxCode:E,styleCode:T,liveError:ot,entryName:Te,onCodeTypeChange:ct,onSourceTranspile:rt}),(0,e.jsxs)("div",{tabIndex:0,role:"button",className:oe.codeHideBtn,onClick:function(){return $e(!1)},children:[(0,e.jsx)(R.UpOutlined,{}),(0,e.jsx)(x.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,s.useEffect)(function(){if(T){var h=document.createElement("style");return h.type="text/css",h.innerHTML=T,h["data-demo-url"]=m,document.head.appendChild(h),function(){document.head.removeChild(h)}}},[T,m]),Q?(0,e.jsx)(v.Z.Ribbon,{text:Q,color:Q.includes("<")?"red":void 0,children:bn}):bn},Vn=Hn,Wn=n(15009),Qe=n.n(Wn),wn=n(899289),Gn=n.n(wn),$n=n(124220),kn=n(820640),Jn=n.n(kn),_n=n(471232),qe,en,nn,tn,on,rn,an,sn,Xn=(0,f.kc)(function(a){var t=a.token,o=a.css;return{wrapper:o(qe||(qe=g()([`
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: 20px 24px 40px;
    position: relative;
    margin-bottom: `,`px;
  `])),t.colorBorderSecondary,t.borderRadius,t.marginLG),title:o(en||(en=g()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),t.fontSizeLG,t.fontWeightStrong,t.colorTextHeading,t.colorTextHeading),description:o(nn||(nn=g()([`
    margin-top: `,`px;
  `])),t.margin),demo:o(tn||(tn=g()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),t.marginLG),copy:o(on||(on=g()([`
    position: absolute;
    inset-inline-end: 20px;
    inset-block-start: 20px;
    cursor: pointer;
  `]))),copyTip:o(rn||(rn=g()([`
    color: `,`;
  `])),t.colorTextTertiary),copiedTip:o(an||(an=g()([`
    .anticon {
      color: `,`;
    }
  `])),t.colorSuccess),tip:o(sn||(sn=g()([`
    color: `,`;
    margin-top: 40px;
  `])),t.colorTextTertiary)}}),Yn=function(t){var o=t.children,i=t.title,p=t.description,m=t.tip,I=t.asset,F=Xn(),M=F.styles,k=(0,s.useRef)(null),E=s.useState(!1),T=j()(E,2),ne=T[0],X=T[1],Y=_n.Z.useApp(),Q=Y.message,V=function(){var D=Gn()(Qe()().mark(function q(){var W;return Qe()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,(0,$n.Sg)(k.current);case 3:W=u.sent,Jn()(JSON.stringify(W.toSketchJSON())),X(!0),setTimeout(function(){X(!1)},5e3),u.next=13;break;case 9:u.prev=9,u.t0=u.catch(0),console.error(u.t0),Q.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return u.stop()}},q,null,[[0,9]])}));return function(){return D.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:M.wrapper,id:I.id,children:[(0,e.jsx)("a",{className:M.title,href:"#".concat(I.id),children:i}),(0,e.jsx)("div",{className:M.description,dangerouslySetInnerHTML:{__html:p}}),(0,e.jsx)("div",{className:M.copy,children:ne?(0,e.jsxs)("div",{className:M.copiedTip,children:[(0,e.jsx)(R.CheckOutlined,{}),(0,e.jsx)("span",{style:{marginLeft:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,e.jsxs)("div",{onClick:V,className:M.copyTip,children:[(0,e.jsx)(R.SketchOutlined,{}),(0,e.jsx)("span",{style:{marginLeft:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,e.jsx)("div",{className:M.demo,ref:k,children:o}),(0,e.jsx)("div",{className:M.tip,children:m})]})},Qn=Yn,qn=function(t){var o=(0,x.useTabMeta)();return(o==null?void 0:o.frontmatter.title)==="Design"?(0,e.jsx)(Qn,C()({},t)):(0,e.jsx)(Vn,C()({},t))},et=qn},148050:function(le,B,n){"use strict";n.r(B),n.d(B,{default:function(){return L}});var w=n(168400),C=n.n(w),s=n(667294),x=n(639389),z=n.n(x),P=n(647759),_=n(879587),g=n(785893),G,j="https://github.com/ant-design/ant-design/edit/master/",R=(0,P.kc)(function(A){var Z=A.token,S=A.css,c=Z.colorIcon,v=Z.colorText,f=Z.iconCls;return{editButton:S(G||(G=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),f,c,v)}});function L(A){var Z=A.title,S=A.filename,c=R(),v=c.styles;return(0,g.jsx)(_.Z,{title:Z,children:(0,g.jsx)("a",{className:v.editButton,href:"".concat(j).concat(S),target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(x.EditOutlined,{})})})}},373638:function(le,B,n){"use strict";n.d(B,{J1:function(){return j},Is:function(){return S},Fy:function(){return L},KE:function(){return G},qE:function(){return R}});var w=n(661227),C=n(805574),s=n(97857),x=n(385564),z=n(842348),P=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),_={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":P?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function g(c,v,f,r){var d=c.map(function(e){return e.meta}).filter(function(e){return!e.skip}),l=[],U=function(y,O){return(y.order||0)-(O.order||0)};d.sort(U).forEach(function(e){if(e.category&&(e.category=e.category[v]||e.category),e.type&&(e.type=e.type[v]||e.type),e!=null&&e.title&&(e.title=e.title[v]||e.title),!e.category){l.push(e);return}if(e.category==="Components"&&e.type){var y=l.find(function(b){return(b==null?void 0:b.title)===e.type});y||(y={type:"type",title:e.type,children:[],order:r[e.type]},l.push(y)),y.children=y.children||[],y.children.push(e);return}var O=l.find(function(b){return(b==null?void 0:b.title)===e.category});if(O||(O={type:"category",title:e.category,children:[],order:f[e.category]},l.push(O)),O.children=O.children||[],e.type){var K=O.children.filter(function(b){return(b==null?void 0:b.title)===e.type})[0];K||(K={type:"type",title:e.type,children:[],order:r[e.type]},O.children.push(K)),K.children=K.children||[],K.children.push(e)}else O.children.push(e)});function $(e){return e.sort(U).map(function(y){return y.children?_objectSpread(_objectSpread({},y),{},{children:$(y.children)}):y})}return $(l)}function G(c){return/-cn\/?$/.test(c)}function j(c,v,f,r){var d=c.startsWith("/")?c:"/".concat(c),l;if(v?d==="/"?l="/index-cn":d.endsWith("/")?l=d.replace(/\/$/,"-cn/"):(l="".concat(d,"-cn"),l=l.replace(/(-cn)+/,"-cn")):l=/\/?index-cn/.test(d)?"/":d.replace("-cn",""),r){var U=r[v?"zhCN":"enUS"];l+="#".concat(U)}return{pathname:l,search:f}}function R(c){var v="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",f=new Image,r,d=function(U){r||(r=!0,f.src="",c(U))};return f.onload=function(){return d("responded")},f.onerror=function(){return d("error")},f.src=v,setTimeout(function(){return d("timeout")},1500)}function L(){var c="test",v=window.localStorage;try{return v.setItem(c,"1"),v.removeItem(c),!0}catch(f){return!1}}function A(c){return new Promise(function(v,f){var r=document.createElement("script");r.type="text/javascript",r.src=c,r.onload=v,r.onerror=f,document.head.appendChild(r)})}function Z(c){var v=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(c))return"";var f=flattenDeep(c.filter(function(r){if(Array.isArray(r)){var d=_slicedToArray(r,1),l=d[0];return l==="p"}return!1}).map(function(r){var d=flatten(r),l=_toArray(d),U=l[0],$=l.slice(1),e=$.filter(function(y){return typeof y=="string"&&!v.includes(y)}).join("");return[U,e]})).find(function(r){return r&&typeof r=="string"&&!v.includes(r)});return f}var S=function(){return _}},824422:function(le,B,n){"use strict";n.d(B,{Z:function(){return w.Z}});var w=n(199100)},471232:function(le,B,n){"use strict";n.d(B,{Z:function(){return U}});var w=n(97857),C=n.n(w),s=n(805574),x=n.n(s),z=n(667294),P=n(693967),_=n.n(P),g=n(73287),G=n(215570),j=n(269924),R=n(890887),L=n(414466),A=n(9783),Z=n.n(A),S=n(286665),c=function(e){var y=e.componentCls,O=e.colorText,K=e.fontSize,b=e.lineHeight,ae=e.fontFamily;return Z()({},y,{color:O,fontSize:K,lineHeight:b,fontFamily:ae})},v=function(){return{}},f=(0,S.I$)("App",c,v),r=n(785893),d=function(){return z.useContext(L.Z)},l=function(e){var y=e.prefixCls,O=e.children,K=e.className,b=e.rootClassName,ae=e.message,ye=e.notification,Ie=e.style,Ce=e.component,de=Ce===void 0?"div":Ce,Ne=(0,z.useContext)(g.E_),Ae=Ne.getPrefixCls,je=Ae("app",y),ue=f(je),me=x()(ue,3),ee=me[0],Be=me[1],Ze=me[2],Fe=_()(Be,je,K,b,Ze),ie=(0,z.useContext)(L.J),ve=z.useMemo(function(){return{message:C()(C()({},ie.message),ae),notification:C()(C()({},ie.notification),ye)}},[ae,ye,ie.message,ie.notification]),Le=(0,G.Z)(ve.message),pe=x()(Le,2),Se=pe[0],ze=pe[1],be=(0,R.Z)(ve.notification),Ee=x()(be,2),fe=Ee[0],Pe=Ee[1],Oe=(0,j.Z)(),he=x()(Oe,2),Me=he[0],Ue=he[1],Ke=z.useMemo(function(){return{message:Se,notification:fe,modal:Me}},[Se,fe,Me]),He=de===!1?z.Fragment:de,Ve={className:Fe,style:Ie};return ee((0,r.jsx)(L.Z.Provider,{value:Ke,children:(0,r.jsx)(L.J.Provider,{value:ve,children:(0,r.jsxs)(He,C()(C()({},de===!1?void 0:Ve),{},{children:[Ue,ze,Pe,O]}))})}))};l.useApp=d;var U=l},991343:function(){},824654:function(){}}]);
