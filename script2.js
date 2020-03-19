let containermessage = document.getElementById("container-message")
let box =document.getElementById("box-send")
let sendmessage = document.getElementById("send-message")
let modal =document.getElementById("modal")
let info = document.getElementById("info")
 let information = document.getElementById("information")
 let closes = document.querySelector(".closes")
 let wapper =document.getElementById("wapper")
info.onclick=function(){
information.style.display="flex"
modal.style.display="inline-block"
}
closes.onclick=function(){
	information.style.display="none"
	modal.style.display="none"
}

modal.onclick=function(){
	information.style.display="none"
	modal.style.display="none"
}

function myFunction(x) {
  if (x.matches) { 
   sendmessage.addEventListener("focus", function(){
box.style.marginBottom="0%"
  }) }
   else {

sendmessage.addEventListener("focus", function(){
   box.style.marginBottom="80%"
   containermessage.style.marginBottom="80%"
})
  	sendmessage.addEventListener("focusout", function(){
box.style.marginBottom="0%"
   containermessage.style.marginBottom="0%"
})
   

}
}
var x = window.matchMedia("(min-width: 1250px)")
myFunction(x) 
x.addListener(myFunction) 
