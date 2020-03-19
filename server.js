const express = require('express')
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
let users={}
let rooms =["baby","red", "green", "blue"]
let roominfo
let useer
let stateone = "good"
let statetwo = "bad"
let Port  = process.env.PORT || 3000
    let roomName
	function ChooseRoom() {
	 roomName=""
	let  mixName=["0","1","2","3","4","5","6","A",
"a","B","b","C","c","D","d",
"E","e","F","f","G","g","H","h","I",
"i","J","j","K","k","L","l","M","m",
"N","n","O","o","P","p","Q","q","R"
,"r","T","t","U","u","W","w","X","x",
"Y","y","Z","z","#","@","!","$","&"]
for(var i= 0; i<8; i++){
roomName = roomName + mixName[Math.floor(Math.random()*mixName.length)]

}
}


io.on("connection", socket=>{
	



	socket.on("create-Room", function(room){
  
		ChooseRoom()


		if(rooms.includes(roomName)){
      ChooseRoom()
	    }
	    room=roomName
		socket.emit("your-room",room)
		})

     socket.on("jointe", data=>{
	   roominfo=data
	
	  

	   if(rooms.indexOf(data)==-1){
       rooms.push(data)
	    }
      })
      socket.emit("this-room", roominfo)
     

    socket.on("new-room", (room)=>{


        socket.join(room)


socket.on("persone", names=>{

       	users[socket.id]=names
        io.to(room).emit("new-user", names )
      })

    	socket.on("message", function(msg){
        socket.broadcast.to(room).emit("message", {msg:msg, name:users[socket.id]})

       })

    socket.on("disconnect", ()=>{
	io.to(room).emit("users-diconnected", users[socket.id])
delete users[socket.id]

	})

  
       })

      

         socket.on("Username", usernam=>{
         	
         	useer=usernam

         })
         socket.emit("new-persone", useer)

 


 socket.on("go",function(data){
	
 })

	socket.on("typing", function(data){
       
     	if (rooms.includes(data)) {
     		socket.emit("actual", stateone)

     	}else{
     		socket.emit("actual", statetwo)
     	}
	})





	socket.on("disconnect", ()=>{
  

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


server.listen(Port)