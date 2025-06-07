(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i="tasks",u=r=>{localStorage.setItem(i,JSON.stringify(r))},a=()=>JSON.parse(localStorage.getItem(i))||[];document.querySelector(".theme-toggle-btn");const d=document.querySelector(".tasks-list"),f=document.querySelector(".header-form"),m=r=>`
    <li class="task-list-item" id="${r.id}">
      <button class="task-list-item-btn">Delete</button>
        <h3>${r.title}</h3>
        <p>${r.description}</p>
     </li>
  `,p=r=>{d.insertAdjacentHTML("beforeend",m(r))};document.querySelector(".header-form-btn");document.querySelector(".header-form");const g=r=>{r.preventDefault(),p({id:Date.now(),title:taskName.value.trim(),description:taskDescription.value.trim()}),taskName.value="",taskDescription.value="",taskName.focus();const o=a();o.push(task),u(o)};f.addEventListener("submit",g);const c=a();c.length&&addTasks(c);
//# sourceMappingURL=index.js.map
