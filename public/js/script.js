

let socket = io()
let list = document.getElementById("list")
let closelist= document.querySelector(".closeslist")
let people= document.getElementById("people")
let leave= document.getElementById("leave")
   let username = document.getElementById("Userroom")
let newroom = document.getElementById("newroom")
   let createroom= document.getElementById("createroom")
   let imgbefore = document.getElementById("imgbefore")
 let bigbox =document.getElementById("bigbox")
 let one =document.getElementById("one")
 let text= document.getElementById("text")
const send = document.getElementById("send")
let containermessage = document.getElementById("container-message")
let box = document.getElementById("box-send")
let sendmessage = document.getElementById("send-message")
let modal =document.getElementById("modal")
let info = document.getElementById("info")
 let information = document.getElementById("information")
 let closes = document.querySelector(".closes")
 let wapper =document.getElementById("wapper")
 let personename

leave.addEventListener("click",function(){
location.replace("/")
})

socket.on("users-diconnected", name=>{

let boxMessageone  = document.createElement("div")
boxMessageone.setAttribute("id", "three");
boxMessageone.innerHTML=`<p id="text3">${name}: left</p>`
document.getElementById("container-message").append(boxMessageone)

let template= document.createElement("div")
  template.setAttribute("id","client")

  template.innerHTML=`<p id="clientname">${name} left</p>` 
  document.getElementById("list").append(template)


  let elms = document.querySelector('#container-message').lastElementChild;
  elms.scrollIntoView();
  containermessage.style.paddingBottom="100px"




})

socket.on("this-room", roominfo=>{

  document.getElementById("roomId").innerText=roominfo
  socket.emit("new-room",roominfo )
})

socket.on("new-persone", useer=>{
  personename=useer

socket.emit("persone", useer)

 })
socket.on("new-user", name=>{


let boxMessageone  = document.createElement("div")
boxMessageone.setAttribute("id", "three");
boxMessageone.innerHTML=`<p id="text3">${name} : join</p>`
document.getElementById("container-message").append(boxMessageone)


let template= document.createElement("div")
  template.setAttribute("id","client")
  

  template.innerHTML=`<p id="clientname">${name}</p>` 
  document.getElementById("list").append(template)
  
   let elm = document.querySelector('#container-message').lastElementChild;
  elm.scrollIntoView();



})
 
info.onclick=function(){
information.style.display="flex"
modal.style.display="inline-block"
}
closes.onclick=function(){
	information.style.display="none"
	modal.style.display="none"
}


 
 

 bigbox.onclick=function(){
  box.style.bottom="0%"
  containermessage.style.paddingBottom="100px"
   bigbox.style.display="none"
 }

 people.onclick=function(){
  list.style.width="100%"
  
 }

 closelist.onclick=function(){
  list.style.width="0%"

 }

 
 



let take
 socket.on("name-user", usenn=>{
 take = usenn

    })


 function Mymessage(messageContent){
let boxMessage   = document.createElement("div")
boxMessage.setAttribute("id", "two");
boxMessage.setAttribute("class", "last-box")
boxMessage.innerHTML= `<div id="text2">${messageContent}</div><div id="initial2">${personename.charAt(0)}</div>`  
document.getElementById("container-message").append(boxMessage);
 
let elms = document.querySelector('#container-message').lastElementChild;
  elms.scrollIntoView();
  containermessage.style.paddingBottom="100px"


 }


socket.on("message",data=>{

let boxMessageone  = document.createElement("div")
boxMessageone.setAttribute("id", "one");
boxMessageone.setAttribute("class", "last-box")
boxMessageone.innerHTML=`<div id="initial1">${data.name.charAt(0)}</div><div id="text">${data.msg}</div>`
document.getElementById("container-message").append(boxMessageone)


let elms = document.querySelector('#container-message').lastElementChild;
  elms.scrollIntoView();
  containermessage.style.paddingBottom="100px"

 
})



send.addEventListener("click", function(){
 
   bigbox.style.display="none"
const messageContent = sendmessage.value;
  Mymessage(messageContent,personename)
sendmessage.value=""

box.style.bottom="0%"
   containermessage.style.bottom="0%"

  socket.emit("message", messageContent)

})






function myFunction(x) {
  if (x.matches) { 
   sendmessage.addEventListener("focus", function(){
box.style.bottom="0%";

  }) }
   else {

sendmessage.addEventListener("focus", function(){
  bigbox.style.display="flex"
   box.style.bottom="42%"
   containermessage.style.paddingBottom="370px"
   
})
  	

}
}
let x = window.matchMedia("(min-width:1100px)")

myFunction(x)

  




