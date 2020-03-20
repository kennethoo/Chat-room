let messageone=document.getElementById("messageone")
let messagetwo=document.getElementById("messagetwo")
let formOne = document.getElementById("formOne")
let formTwo= document.getElementById("formTwo")
const socket= io("https://text19-me.herokuapp.com/")
let nameNew = document.getElementById("nameNew")
let newg = document.getElementById("newg")
let create = document.getElementById("create")
let nameJoin = document.getElementById("nameJoin")
let roomid = document.getElementById("room")
let join = document.getElementById("join")
let roomnamen = document.getElementById("roomname")
let newName

let newuser
let newromId
let ok

let userJoin = document.getElementById("user-Join")
let ro="ro"

window.addEventListener("load",function(){

socket.emit("create-Room",ro)
socket.on("your-room", room=>{
 
create.addEventListener("click",function(e){
  newName = nameNew.value.trim() ;
  if (newName.length==0) {
e.preventDefault()
messageone.innerText="Username must be fill"

  }
  else{
roomnamen.value=room;

 socket.emit("jointe", room)
 socket.emit("Username", newName)

  }
})
})
})

window.addEventListener("load" ,function(){

join.addEventListener("click", function(e){

   newuser = userJoin.value.trim() ;
   newromId = roomid.value.trim() ;


if (newuser.length==0||newromId.length==0 || ok=="bad") {
  e.preventDefault()
  messagetwo.innerText="Username must be fill or room name invalid"
}
else{
socket.emit("jointe", newromId)
 socket.emit("Username", newuser)
}

})
})
window.addEventListener("load" ,function(){
let dateee="red"
socket.emit("info", function(dateee){

})
})

function checkk(){
 
	socket.emit("typing", roomid.value)
	socket.on("actual", state=>{
		ok=state
		
		if (state!=="good") {
		join.addEventListener("click", function(e){
		
		
		})
		}
		else   {
			
			
		}
	
		})
    
	

	
  
		
}
