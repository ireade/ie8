/*! (C) WebReflection Mit Style License */
(function(e){function g(e,t,n,r){for(var i=n.slice(),s=y(t,e),o=0,u=i.length;o<u;o++){handler=i[o],typeof handler=="object"&&typeof handler.handleEvent=="function"?handler.handleEvent(s):handler.call(e,s);if(s.stoppedImmediatePropagation)break}return r&&!s.stoppedPropagation&&e.parentNode?e.parentNode.dispatchEvent(s):!s.defaultPrevented}function y(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function b(e,t){var n=e.length;while(n--&&e[n]!==t);return n}function w(e){!n&&v.test(document.readyState)&&(n=!n,document.detachEvent(r,w),e=document.createEvent("Event"),e.initEvent(i,!0,!0),document.dispatchEvent(e))}function E(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(document.createEvent)return;var t=!0,n=!1,r="onreadystatechange",i="DOMContentLoaded",s="__IE8__"+Math.random(),o=e.Object,u=o.defineProperty||function(e,t,n){e[t]=n.value},a=o.defineProperties||function(e,t){for(var n in t)f.call(t,n)&&u(e,n,t[n])},f=o.prototype.hasOwnProperty,l=e.Element.prototype,c=e.Event.prototype,h=e.HTMLDocument.prototype,p=e.Window.prototype,d=/^[a-zA-Z]+$/,v=/loaded|complete/,m={};a(l,{addEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s]||u(r,s,{value:{}})[s],a=o[i]||(o[i]={}),l=a.h||(a.h=[]),c;if(!f.call(a,"w")){a.w=function(e){return e[s]||g(r,E(r,e),l,!1)};if(!f.call(m,i))if(d.test(e))try{c=document.createEventObject(),c[s]=!0,r.fireEvent(i,c),m[i]=!0,r.attachEvent(i,a.w)}catch(c){m[i]=!1}else m[i]=!1;a.n=m[i]}b(l,t)<0&&l[n?"unshift":"push"](t)}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i,u;return e.target||(e.target=t),o?i.n?t.fireEvent(n,e):g(t,e,i.h,!0):!!((u=t.parentNode)&&t.nodeType!==9&&document.documentElement.contains(t)&&u.dispatchEvent(e))}},removeEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s],u=o&&o[i],a=u&&u.h,f=a?b(a,t):-1;-1<f&&a.splice(f,1)}}}),a(c,{preventDefault:{value:function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}},stopPropagation:{value:function(){this.stoppedPropagation=!0,this.cancelBubble=!0}},stopImmediatePropagation:{value:function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}},initEvent:{value:function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}}}),a(h,{addEventListener:{value:function(n,s,o){var u=this;l.addEventListener.call(u,n,s,o),t&&n===i&&!v.test(u.readyState)&&(t=!1,u.attachEvent(r,w),e==top&&function a(e){try{u.documentElement.doScroll("left"),w()}catch(t){setTimeout(a,50)}}())}},dispatchEvent:{value:l.dispatchEvent},removeEventListener:{value:l.removeEventListener},createEvent:{value:function(e){var t;if(e!=="Event")throw new Error("unsupported "+e);return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t}}}),a(p,{addEventListener:{value:function(t,n,r){var i=e,o="on"+t,u;i[o]||(i[o]=function(e){return g(i,E(i,e),u,!1)}),u=i[o][s]||(i[o][s]=[]),b(u,n)<0&&u[r?"unshift":"push"](n)}},dispatchEvent:{value:function(t){var n=e["on"+t.type];return n?n.call(e,t):!1}},removeEventListener:{value:function(t,n,r){var i="on"+t,u=(e[i]||o)[s],a=u?b(u,n):-1;-1<a&&u.splice(a,1)}}})})(this);