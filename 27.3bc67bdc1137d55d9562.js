(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"3Iwd":function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",function(){return u});var o=n("1vRN");const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?s(e,t,o):c(e,t))},a=e=>e===e.getRootNode().activeElement,s=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},c=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},l="input, textarea, [no-blur], [contenteditable]",d=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},u=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),u=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,f=new WeakMap,w=async e=>{await new Promise(t=>Object(o.c)(e,t));const t=e.shadowRoot||e,c=t.querySelector("input")||t.querySelector("textarea"),l=e.closest("ion-content"),d=l?null:e.closest("ion-footer");if(c){if(l&&s&&!p.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{a(t)&&i(e,t,n)},s=()=>i(e,t,!1),c=()=>r(!0),l=()=>r(!1);return Object(o.a)(n,"ionScrollStart",c),Object(o.a)(n,"ionScrollEnd",l),t.addEventListener("blur",s),()=>{Object(o.b)(n,"ionScrollStart",c),Object(o.b)(n,"ionScrollEnd",l),t.addEventListener("ionBlur",s)}})(e,c,l);p.set(e,t)}if((l||d)&&r&&!f.has(e)){const t=((e,t,n,r,s)=>{let c;const l=e=>{c=Object(o.p)(e)},d=l=>{if(!c)return;const d=Object(o.p)(l);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,c,d)||a(t)||(l.stopPropagation(),(async(e,t,n,r,a)=>{if(!n&&!r)return;const s=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,c=.75*Math.min(t.bottom,o-n)-i,l=s-r,d=Math.round(c<0?-c:l>0?-l:0),u=Math.min(d,r-a),m=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m/.3)),scrollPadding:n,inputSafeY:4-(r-s)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n||r,a);if(n&&Math.abs(s.scrollAmount)<4)t.focus();else if(i(e,t,!0,s.inputSafeY),t.focus(),Object(o.q)(()=>e.click()),"undefined"!=typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",a),window.removeEventListener("ionKeyboardDidShow",r),n&&await n.scrollByPoint(0,s.scrollAmount,s.scrollDuration),i(e,t,!1,s.inputSafeY),t.focus()},a=()=>{window.removeEventListener("ionKeyboardDidShow",a),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await n.getScrollElement();if(s.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",a)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}})(e,t,n,r,s))};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",d,!0)}})(e,c,l,d,n);f.set(e,t)}}};c&&(()=>{let e=!0,t=!1;const n=document;Object(o.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(l))return;const i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),u&&(e=>{const t=document;t.addEventListener("focusin",t=>{d(t.target,e)}),t.addEventListener("focusout",e=>{d(e.target,0)})})(n);for(const o of m)w(o);t.addEventListener("ionInputDidLoad",e=>{w(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(s){const t=p.get(e);t&&t(),p.delete(e)}if(r){const t=f.get(e);t&&t(),f.delete(e)}})(e.detail)})}}}]);