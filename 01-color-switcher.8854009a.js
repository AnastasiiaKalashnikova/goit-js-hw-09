!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0;var a,d=document.querySelector("body");t.addEventListener("click",(function(n){(a=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))&&(t.disabled=!0,e.disabled=!1)})),e.addEventListener("click",(function(d){clearInterval(a),t.disabled=!1,e.disabled=!0})),flatpickr(dateTable,options)}();
//# sourceMappingURL=01-color-switcher.8854009a.js.map