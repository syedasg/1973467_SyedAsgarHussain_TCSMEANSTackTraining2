let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client.html");
})

io.on("connection", (socket) => {

    socket.on("chat", (msg) => {
        console.log(msg);
    })
})
http.listen(9999, () => console.log('server running on port number 9999'));