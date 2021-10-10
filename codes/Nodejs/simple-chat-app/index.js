const app = require('express')()
const http = require('http')
const {Server} = require('socket.io')

const server = http.createServer(app)
const io = new Server(server)

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})


io.on('connection', function(socket){

	const otherNickname = socket.handshake.query.nickname
	const userCredential = {
		otherNickname,
		id: socket.id
	}

	socket.broadcast.emit('other user connected', {...userCredential})

	socket.on('disconnect', function(){
		socket.broadcast.emit('other user disconnected', {...userCredential})
	})

	socket.on('chat message', function(msg){
		socket.broadcast.emit('chat message', `[ ${otherNickname} ]: ${msg}`)
	})

	socket.on('someone is typing', function(){
		socket.broadcast.emit('someone is typing', {...userCredential})
	})

	socket.on('someone finish typing', function(){
		socket.broadcast.emit('someone finish typing', {...userCredential})
	})
})

server.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000')
})