(function(){var i=document.getElementById("mail-messages");new SimpleBar(i,{autoHide:!0});var n=document.getElementById("mail-info-body");new SimpleBar(n,{autoHide:!0});var a=document.getElementById("mail-recepients");new SimpleBar(a,{autoHide:!0});var t=[[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],[{align:[]}],["image","video"],["clean"]];new Quill("#mail-reply-editor",{modules:{toolbar:t},theme:"snow"}),new Quill("#mail-compose-editor",{modules:{toolbar:t},theme:"snow"}),new Choices("#toMail",{allowHTML:!0,removeItemButton:!0});let r=document.querySelectorAll(".mail-messages-container >li"),e=!0;r.forEach(l=>{l.onclick=()=>{window.screen.width<1399&&(document.querySelector(".mails-information").style.display="block",document.querySelector(".total-mails").classList.add("!hidden"),e=!1)}}),document.querySelectorAll(".mail-info-container >li").forEach(l=>{l.onclick=()=>{window.screen.width<1399&&(document.querySelector(".mails-information").style.display="block",document.querySelector(".total-mails").classList.add("!hidden"),e=!1)}});let o=document.querySelectorAll(".responsive-mail-action-icons > button")[0];o&&(o.onclick=()=>{document.querySelector(".total-mails").classList.remove("!hidden"),document.querySelector(".mails-information").style.display="none",e=!0}),window.addEventListener("resize",()=>{window.screen.width>1399?(document.querySelector(".mails-information").style.display="block",document.querySelector(".total-mails").classList.remove("!hidden")):e&&(document.querySelector(".mails-information").style.display="none"),window.screen.width<1399&&e==!1?document.querySelector(".total-mails").classList.add("!hidden"):document.querySelector(".total-mails").classList.remove("!hidden"),window.screen.width>991?(document.querySelector(".mail-navigation").style.display="block",document.querySelector(".total-mails").style.display="block"):(document.querySelector(".total-mails").style.display=="block"&&e==!1&&(document.querySelector(".mail-navigation").style.display="none"),document.querySelector(".mail-navigation").style.display="none")}),document.querySelectorAll(".mail-type").forEach(l=>{l.onclick=()=>{window.screen.width<=991&&(document.querySelector(".total-mails").style.display="block",document.querySelector(".total-mails").classList.remove("!hidden"),document.querySelector(".mail-navigation").style.display="none",e=!0)}}),document.querySelector(".total-mails-close").onclick=()=>{window.screen.width<992&&(document.querySelector(".mail-navigation").style.display="block",document.querySelector(".total-mails").classList.add("!hidden"),e=!0)},window.screen.width<992&&(document.querySelector(".mails-information").style.display="none",document.querySelector(".mail-navigation").style.display="none")})();