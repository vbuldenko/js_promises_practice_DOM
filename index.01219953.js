function e(e,n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.className=n,t.textContent=e,document.body.appendChild(t)}var n=function(n){e(n,"success")},t=new Promise(function(e,n){document.addEventListener("click",function(n){0===n.button&&e("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}),o=new Promise(function(e,n){document.addEventListener("click",function(n){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(){e("Second promise was resolved")})}),i=new Promise(function(e){var n=!1,t=!1;document.addEventListener("click",function(o){n=!0,t&&e("Third promise was resolved")}),document.addEventListener("contextmenu",function(){t=!0,n&&e("Third promise was resolved")})});t.then(n).catch(function(n){e(n.message,"error")}),o.then(n),i.then(n);
//# sourceMappingURL=index.01219953.js.map