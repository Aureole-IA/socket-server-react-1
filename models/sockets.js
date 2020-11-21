class Sockets{
    constructor(io){
        this.io =io
        this.socketsEvents()
        this.data=[]
    }
    socketsEvents(){
        this.io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('new_msg',(msg)=>{
                console.log(msg)
                this.data.push(msg)
                this.io.emit("msg_history",
                this.data
                )
            })
        });
    }
}

module.exports= Sockets