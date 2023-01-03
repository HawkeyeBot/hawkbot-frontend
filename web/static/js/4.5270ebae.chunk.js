(this["webpackJsonphawkbot-frontend"]=this["webpackJsonphawkbot-frontend"]||[]).push([[4],{515:function(e,t,n){"use strict";var i=n(3),c=n(31),r=n(6),a=n.n(r),o=n(233),l=n(0),s=n(443),j=n(1),d=["children","title","meta"],b=Object(l.forwardRef)((function(e,t){var n=e.children,r=e.title,a=void 0===r?"":r,l=e.meta,b=Object(c.a)(e,d);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(o.a,{children:[Object(j.jsx)("title",{children:"".concat(a," | Hawkbot")}),l]}),Object(j.jsx)(s.a,Object(i.a)(Object(i.a)({ref:t},b),{},{children:n}))]})}));b.propTypes={children:a.a.node.isRequired,title:a.a.string,meta:a.a.node},t.a=b},560:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return fe}));var i=n(506),c=n(488),r=n(38),a=n(515),o=n(7),l=n(572),s=n(573),j=n(473),d=n(574),b=n(173),h=n(575),O=n(569),u=n(570),x=n(567),p=n(568),g=n(571),m=n(147),f=n(43),v=n(79),y=n(0),C=n.n(y),_=n(52),w=n(497),k=n(493),L=n(443),S=n(489),T=n(527),A=n.n(T),W=n(526),I=n.n(W),N=n(31),E=n(3),P=n(8),R=n(65),M=n(1),F=["color","variant","children"],G=Object(P.a)("span")((function(e){var t=e.theme,n=e.ownerState,i="light"===t.palette.mode,c=n.color,r=n.variant;return Object(E.a)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold},"default"!==c?Object(E.a)(Object(E.a)(Object(E.a)({},"filled"===r&&Object(E.a)({},function(e){return{color:t.palette[e].contrastText,backgroundColor:t.palette[e].main}}(c))),"outlined"===r&&Object(E.a)({},function(e){return{color:t.palette[e].main,backgroundColor:"transparent",border:"1px solid ".concat(t.palette[e].main)}}(c))),"ghost"===r&&Object(E.a)({},function(e){return{color:t.palette[e][i?"dark":"light"],backgroundColor:Object(R.a)(t.palette[e].main,.16)}}(c))):Object(E.a)(Object(E.a)({},"outlined"===r&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat(t.palette.grey[50032])}),"ghost"===r&&{color:i?t.palette.text.secondary:t.palette.common.white,backgroundColor:t.palette.grey[50016]}))}));function z(e){var t=e.color,n=void 0===t?"default":t,i=e.variant,c=void 0===i?"ghost":i,r=e.children,a=Object(N.a)(e,F);return Object(M.jsx)(G,Object(E.a)(Object(E.a)({ownerState:{color:n,variant:c}},a),{},{children:r}))}var D=n(566),U=n(565),Y=n(558),q={NORMAL:{label:"NORMAL",value:"NORMAL"},GRACEFUL_STOP:{label:"GRACEFUL",value:"GRACEFUL_STOP"},EXIT_ONLY:{label:"EXIT_ONLY",value:"EXIT_ONLY"},MANUAL:{label:"MANUAL",value:"MANUAL"},PANIC:{label:"PANIC",value:"PANIC",requiresValidation:!0},WIGGLE:{label:"WIGGLE",value:"WIGGLE"}},B=n(494),H=n(564),X=n(562),J=n(563),V=n(553),K=n(476),Q=C.a.forwardRef((function(e,t){return Object(M.jsx)(K.a,Object(E.a)({direction:"up",ref:t},e))}));function Z(e){var t=e.open,n=e.onConfirm,i=e.mode,c=e.onClose;return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(B.a,{open:t,onClose:c,TransitionComponent:Q,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[Object(M.jsxs)(V.a,{children:["Warning regarding ",i," mode"]}),Object(M.jsx)(X.a,{children:Object(M.jsx)(J.a,{id:"alert-dialog-slide-description",children:"This mode will sell your position with a MARKET order."})}),Object(M.jsxs)(H.a,{children:[Object(M.jsx)(S.a,{variant:"contained",onClick:n,children:"Confirm"}),Object(M.jsx)(S.a,{variant:"outlined",onClick:c,children:"Cancel"})]})]})})}var $=n(296),ee=n(317),te=function(){var e=Object(y.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object($.b)(),r=c.enqueueSnackbar,a=c.closeSnackbar;return Object(y.useEffect)((function(){if(null!==n&&void 0!==n&&n.msg){var e="info";n.variant&&(e=n.variant),r(n.msg,{variant:e,autoHideDuration:5e3,action:function(e){return Object(M.jsx)(y.Fragment,{children:Object(M.jsx)(w.a,{onClick:function(){a(e)},children:Object(M.jsx)(ee.a,{})})})},anchorOrigin:{vertical:"bottom",horizontal:"center"}})}}),[n,r,a]),[i]},ne=n(286),ie=n.n(ne),ce=function(e,t,n,i,c,r){ie.a.post("http://localhost:6969/setMode",{symbol:n,mode:e,position_side:i}).then((function(t){r({msg:"Your mode was correctly set to ".concat(e," for ").concat(n," ").concat(i),variant:"success"})})).catch((function(a){r({msg:"Something wrong happened when setting ".concat(n," ").concat(i," to ").concat(e),variant:"error"}),c(t)}))};function re(e){var t,n=e.currentMode,i=e.symbol,c=e.position_side,r=Object(y.useState)(n),a=Object(o.a)(r,2),l=a[0],s=a[1],j=Object(y.useState)(n),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(y.useState)(!1),u=Object(o.a)(O,2),x=u[0],p=u[1],g=te(),m=Object(o.a)(g,1)[0];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(U.a,{sx:{minWidth:125},size:"small",children:Object(M.jsx)(Y.a,{value:null===(t=q[l])||void 0===t?void 0:t.value,onChange:function(e){var t,n=e.target.value;h(l),s(n),null!==(t=q[n])&&void 0!==t&&t.requiresValidation?p(!0):ce(n,b,i,c,s,m)},children:Object.values(q).map((function(e){return Object(M.jsx)(D.a,{value:e.value,children:e.label},e.value)}))})}),Object(M.jsx)(Z,{open:x,onConfirm:function(){ce(l,b,i,c,s,m),p(!1)},onClose:function(){p(!1),s(b)},mode:l})]})}var ae=n(118),oe=function(e){var t=e.symbol,n=e.side,i=e.positionSides,c="light"===Object(_.a)().palette.mode,r=te(),a=Object(o.a)(r,1)[0],l=Object(f.c)(v.a).open_orders,s=Object(y.useState)(!1),d=Object(o.a)(s,2),h=d[0],m=d[1],C=i&&i[n],T=C.cost,W=C.entry_price,N=C.position_size,E=C.current_price,P=C.mode,R=C.pnl_abs,F=C.pnl_pct,G=l[t].filter((function(e){return(null===e||void 0===e?void 0:e.position_side)===n})),D=G.filter((function(e){return"DCA"===(null===e||void 0===e?void 0:e.order_type_identifier)})).length,U=G.filter((function(e){return"TP"===(null===e||void 0===e?void 0:e.order_type_identifier)})).length;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(x.a,{children:[Object(M.jsx)(p.a,{children:Object(M.jsx)(w.a,{"aria-label":"expand row",size:"small",onClick:function(){return m(!h)},children:h?Object(M.jsx)(I.a,{}):Object(M.jsx)(A.a,{})})}),Object(M.jsx)(p.a,{children:Object(M.jsx)(j.a,{direction:"row",alignItems:"center",spacing:2,children:Object(M.jsx)(b.a,{color:"LONG"===n?"#54D62C":"error",variant:"subtitle2",children:t})})}),Object(M.jsx)(p.a,{children:T}),Object(M.jsx)(p.a,{children:N}),Object(M.jsx)(p.a,{children:W}),Object(M.jsx)(p.a,{children:E}),Object(M.jsx)(p.a,{children:Object(M.jsxs)(b.a,{color:R<=0?"error":"#54D62C",variant:"inherit",children:[R," ",Object(ae.b)(F)]})}),Object(M.jsx)(p.a,{children:Object(M.jsx)(z,{variant:c?"ghost":"filled",children:U})}),Object(M.jsx)(p.a,{children:Object(M.jsx)(z,{variant:c?"ghost":"filled",color:D>1||N<1?"default":1===D?"warning":"error",children:D})}),Object(M.jsx)(p.a,{children:Object(M.jsx)(re,{currentMode:P,symbol:t,position_side:n})})]}),Object(M.jsx)(x.a,{children:Object(M.jsx)(p.a,{style:{paddingBottom:0,paddingTop:0},colSpan:9,children:Object(M.jsx)(k.a,{in:h,timeout:"auto",unmountOnExit:!0,children:Object(M.jsx)(L.a,{sx:{margin:0},children:Object(M.jsxs)(O.a,{size:"small","aria-label":"purchases",children:[Object(M.jsx)(u.a,{children:Object(M.jsxs)(x.a,{children:[Object(M.jsx)(p.a,{children:"Open Order Type"}),Object(M.jsx)(p.a,{children:"Cost"}),Object(M.jsx)(p.a,{align:"right",children:"Price"}),Object(M.jsx)(p.a,{align:"right",children:"Quantity"}),Object(M.jsx)(p.a,{align:"right",children:"Type"}),Object(M.jsx)(p.a,{align:"right",children:"Side"}),Object(M.jsx)(p.a,{align:"right",children:"Action"})]})}),Object(M.jsx)(g.a,{children:G.sort((function(e,t){return t.price-e.price})).map((function(e){var n=e.id,i=e.order_type_identifier,c=e.quantity,r=e.side,o=e.type,l=e.cost,s=e.price;return Object(M.jsxs)(x.a,{children:[Object(M.jsx)(p.a,{component:"th",scope:"row",children:i}),Object(M.jsx)(p.a,{children:l}),Object(M.jsx)(p.a,{align:"right",children:s}),Object(M.jsx)(p.a,{align:"right",children:c}),Object(M.jsx)(p.a,{align:"right",children:o}),Object(M.jsx)(p.a,{align:"right",children:Object(M.jsx)(b.a,{color:"BUY"===r?"#54D62C":"error",variant:"subtitle2",children:r})}),Object(M.jsx)(p.a,{align:"right",children:Object(M.jsx)(S.a,{variant:"text",onClick:function(){return function(e,t,n){ie.a.post("http://localhost:6969/cancelOrder",{symbol:e,order_id:t}).then((function(i){n({msg:"Your order ".concat(t," for ").concat(e," was cancelled"),variant:"success"})})).catch((function(i){n({msg:"Something wrong happened when cancelling order ".concat(t," for ").concat(e),variant:"error"})}))}(t,n,a)},children:"Cancel"})})]},n)}))})]})})})})})]})},le=n(528);function se(){var e=Object(y.useState)(!0),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(f.c)(v.a).positions;return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(l.a,{children:[Object(M.jsx)(s.a,{title:"Positions",sx:{mb:1},action:Object(M.jsxs)(j.a,{direction:"row",alignItems:"center",children:[Object(M.jsx)(d.a,{size:"small",checked:n,onChange:function(e){return i(e.target.checked)},inputProps:{"aria-label":"controlled"}}),Object(M.jsx)(b.a,{variant:"subtitle2",children:"Show inactive positions"})]})}),Object(M.jsx)(m.a,{children:Object(M.jsx)(h.a,{sx:{minWidth:720},children:Object(M.jsxs)(O.a,{size:"small",children:[Object(M.jsx)(u.a,{children:Object(M.jsxs)(x.a,{children:[Object(M.jsx)(p.a,{}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"Symbol"}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"Cost"}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"Size"}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"Position price"}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"Current price"}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"PnL"}),Object(M.jsx)(p.a,{sx:{minWidth:20},children:"TP"}),Object(M.jsx)(p.a,{sx:{minWidth:20},children:"DCA"}),Object(M.jsx)(p.a,{sx:{minWidth:40},children:"Mode"})]})}),Object(M.jsx)(g.a,{children:Object.keys(c).map((function(e){var t=c[e];return Object.keys(t).map((function(i){return!n&&Object(le.isEmpty)(t[i].position_size)?null:Object(M.jsx)(oe,{symbol:e,side:i,positionSides:t},"".concat(e,"_").concat(i))}))}))})]})})})]})})}var je=n(576),de=n(577),be=n(561),he=n(578),Oe=n(579),ue=n(580),xe=n(556),pe=n(255);function ge(){var e=Object(f.c)(v.a).latest_orders;return Object(M.jsxs)(l.a,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:[Object(M.jsx)(s.a,{title:"Latest orders"}),Object(M.jsx)(je.a,{children:Object(M.jsx)(de.a,{children:e.map((function(t,n){return Object(M.jsx)(me,{order:t,isLast:n===e.length-1},t.id)}))})})]})}function me(e){var t=e.order,n=e.isLast,i=t.event_time,c=t.order_type_identifier,r=t.position_side,a=t.quantity,o=t.symbol;return Object(M.jsxs)(be.a,{children:[Object(M.jsxs)(he.a,{children:[Object(M.jsx)(Oe.a,{color:("TP_REFILL"===c?"warning":"TP"===c&&"success")||"INITIAL_ENTRY"===c&&"info"||"error"}),n?null:Object(M.jsx)(ue.a,{})]}),Object(M.jsxs)(xe.a,{children:[Object(M.jsxs)(j.a,{direction:"row",spacing:.5,children:[Object(M.jsx)(b.a,{display:"inline",variant:"subtitle2",children:c}),Object(M.jsx)(b.a,{display:"inline",variant:"subtitle2",color:"LONG"===r?"#54D62C":"error",children:o}),Object(M.jsx)(b.a,{display:"inline",variant:"subtitle2",children:a})]}),Object(M.jsx)(b.a,{display:"block",variant:"caption",sx:{color:"text.secondary"},children:Object(pe.a)(i)})]})]})}function fe(){var e=Object(r.a)().themeStretch;return Object(M.jsx)(a.a,{title:"Overview",children:Object(M.jsx)(i.a,{maxWidth:!e&&"xl",children:Object(M.jsxs)(c.a,{container:!0,spacing:3,children:[Object(M.jsx)(c.a,{item:!0,xs:9,children:Object(M.jsx)(se,{})}),Object(M.jsx)(c.a,{item:!0,xs:6,md:6,lg:2.8,children:Object(M.jsx)(ge,{})})]})})})}}}]);
//# sourceMappingURL=4.5270ebae.chunk.js.map