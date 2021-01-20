let editDiv=document.querySelector('.clickable');

editDiv.addEventListener("click", function () {
   editDiv.setAttribute("contenteditable", "true")
});

editDiv.addEventListener("blur", function () {
    localStorage.setItem('text', editDiv.innerText);
});
