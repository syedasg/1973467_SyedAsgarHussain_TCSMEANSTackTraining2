let express = require("express");
let app = express();
let path = require("path");
let router = express.Router();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";
let port = 9180;
let dir = path.join(__dirname, '');
app.use(express.static(dir));

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
})



app.get("/", (req, res) => {
    res.sendFile(dir + "/main.html");
})

app.get('/add', (req, res) => {
    res.sendfile(dir + '/add.html');
});

app.get('/update', (req, res) => {
    res.sendfile(dir + '/update.html');
});

app.get('/fetch', (req, res) => {
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");
            let cursor = db.collection("courses").find();
            cursor.toArray( (err, docs) => {
                res.send(docs);
            })
        }
    });
});




io.on("connection", (socket) => {
    socket.on("addCourse", (res) => {
        mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
            if (!err1) {
                let db = client.db("meanstack");
                db.collection("courses").insertOne({
                    "courseId": res.courseId,
                    "courseName": res.courseName,
                    "desc": res.desc,
                    "amount": res.amount
                }, (err2, result) => {
                    if (!err2) {
                        console.log("Added Course " + res.courseName);
                        console.log(result.ops);
                    } else {
                        console.log(err2.message);
                    }
                    client.close();
                });

            }
        });
    })
    socket.on("updateCourse", (res) => {
        mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
            if (!err1) {
                let db = client.db("meanstack");
                db.collection('courses').updateOne(
                    { "courseId": res.courseId },
                    { $set: { "amount": res.amount } },
                    (err2, result) => {
                        if (!err2) {
                            console.log("Updated course ID: " + res.courseId);
                            console.log(result.result);
                        } else {
                            console.log(err2.message);
                        }
                        client.close();
                    }
                );



            }
        });
    })
    socket.on("deleteCourse", (res) => {
        mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
            if (!err1) {
                let db = client.db("meanstack");
                db.collection('courses').deleteMany(
                    { "courseId": res.courseId },
                    (err2, result) => {
                        if (!err2) {
                            console.log("Deleted course ID: " + res.courseId);
                            console.log(result.result);
                        } else {
                            console.log(err2.message);
                        }
                        client.close();
                    }
                );



            }
        });
    })
})
http.listen(port, () => console.log('server running on http://localhost:' + port));