(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i="tasks",l=()=>{const s=localStorage.getItem(i);return s?JSON.parse(s):[]},a=({title:s,description:r})=>{const o=document.createElement("li");return o.className="task-list-item",o.innerHTML=`
    <button class="task-list-item-btn">Delete</button>
    <h3>${s}</h3>
    <p>${r}</p>
  `,o},u=document.querySelector("#task-list"),d=(s,r)=>{r.innerHTML="",s.forEach(o=>{const n=a(o);r.appendChild(n)})},f=l();d(f,u);
//# sourceMappingURL=index.js.map
