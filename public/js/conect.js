const express = require('express')
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)


let users={}
let rooms =["baby","red", "green", "blue"]
let myroom
let roominfo
let chat
let stateone = "good"
let statetwo = "bad"
let cuurentroom
    let roomName
	function ChooseRoom() {
	 roomName=""
	let  mixName=["0","1","2","3","4","5","6","A",
"a","B","b","C","c","D","d",
"E","e","F","f","G","g","H","h","I",
"i","J","j","K","k","L","l","M","m",
"N","n","O","o","P","p","Q","q","R"
,"r","T","t","U","u","W","w","X","x",
"Y","y","Z","z"]
for(var i= 0; i<8; i++){
roomName = roomName + mixName[Math.floor(Math.random()*mixName.length)]

}
}


let usenn
 let test="red"
//let referer

io.on("connection", socket=>{
	 //referer = socket.request.headers.referer;
 //console.log(referer)
	socket.on("create-Room", function(room){

		ChooseRoom()
		room=roomName
		socket.emit("your-room",room)
		})

     socket.on("jointe", data=>{
	  roominfo=data
	  rooms.push(room)
      })

    socket.emit("this-room", roominfo)
    socket.on("new-room", room=>{
    	
    	socket.join(room)
   
    socket.on("go-room", function(rown){	
     myroom=rown
    })
socket.emit("that-info", myroom)
socket.on("aller", infoo=>{
	
	socket.join(infoo)
	chat=infoo

socket.on("message", function(msg){
socket.broadcast.to(infoo).emit("message", msg)
})

})




})
socket.on("go",function(data){
	
})

	//socket.on("typing", function(data){
       
     	//if (rooms.includes(data)) {
     	//	socket.emit("actual", stateone)

     	//}else{
     	//	socket.emit("actual", statetwo)
     	//}
	//})


 //io.to(params.room).emit('updateUsersList', users.getUserList(params.room));

socket.on("new-user", name=>{
users[socket.id]=name
usenn=name
 socket.emit("new-user", name)
	})
socket.emit("name-user", usenn)

	

	socket.on("disconnect", ()=>{
  console.log("disconnection")

})

})
const path = require("path")
app.use(express.static("public"))
app.get("/",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"index.html"))
})

app.get("/:room",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"room.html"))
})


server.listen(3000)