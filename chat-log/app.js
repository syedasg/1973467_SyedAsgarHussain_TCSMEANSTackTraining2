let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    socket.on("chat", (msg) => {
        mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
            if (!err1) {
                let db = client.db("chatLogs");
                db.collection("chatLogs").insertOne({ name: msg.name, message: msg.message}, (err2, result) => {
                    if (!err2) {
                        console.log(result.insertedCount);
                    } else {
                        console.log(err2.message);
                    }
                    client.close();
                });

            }
        });
    })
})
http.listen(9090, () => console.log('server running on port number 9090'));