const overlay=document.querySelector(".popup__overlay"),content=document.querySelector(".popup__content"),btn=document.querySelector(".button"),closebtn=document.querySelector(".popup__close"),resetbtn=document.querySelector(".count__reset");let clickCount=JSON.parse(localStorage.getItem("click"));const popupOpen=()=>{overlay.classList.add("active"),content.classList.add("active"),clickCount+=1,localStorage.setItem("click",JSON.stringify(clickCount)),document.querySelector(".popup__count").textContent=clickCount,document.querySelector(".count__text").textContent=1<clickCount?" times":" time",5<=clickCount&&(resetbtn.style.display="block")},popupClose=()=>{overlay.classList.remove("active"),content.classList.remove("active")};btn.addEventListener("click",popupOpen),content.addEventListener("click",e=>{e.stopPropagation()}),overlay.addEventListener("click",popupClose),closebtn.addEventListener("click",popupClose),resetbtn.addEventListener("click",()=>{localStorage.clear(),window.location.reload(),this.style.display="none"});