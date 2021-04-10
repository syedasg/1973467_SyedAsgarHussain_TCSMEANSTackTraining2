

let http = require("http");
let url = require("url");
let port = 9990;
let fs = require("fs");
let task = new Array();
let file = 'task.json';
//let background='<body style="background-color:grey;">'
let taskPlanner = `
    <h1 style="text-align:center">Task Planner</h1>
    <hr>
    <h4>Add Task</h4>
    <table>
    <form action="/addTask" method="get">
    <tr>
        <td><label>Emp Id: </label>
        <input type="text" name="empId"/></td>
    </tr>
    <tr>
        <td><label>Task Id: </label>
        <input type="text" name="taskId"/></td>
    </tr>
    <tr>
        <td><label>Task:    </label>&nbsp;&nbsp;&nbsp;
        <input type="text" name="task"/></td>
    </tr>
    <tr>
       <td> <label>Deadline:</label>
        <input type="date" name="endDate"/></td>
    </tr>
    <tr>
        <input type="submit" value="Add Task"/>
    </tr>
    </form>
    </table>
    <hr>
    <h4>Delete Task</h4>
    <form action="/deletTask" method="get">
        <label>Task Id: </label>
        <input type="text" name="taskId"/><br/>
        <input type="submit" value="Delete Task"/>
    </form>
    <hr>
    <h4>List Task</h4>
    
    <form action="/listTask" method="get">
        <input type="submit" value="Task List"/>
    </form>
`
let server = http.createServer((req, res) => {
    var pathInfo = url.parse(req.url, true).pathname;
    if (req.url == "/") {
        res.setHeader("content-type", "text/html");
        
        res.end(taskPlanner);
    } 
    else if (pathInfo == "/addTask") {
        var data = url.parse(req.url, true).query;
       

        

        let task1 = {
            "id": data.taskId,
            "empId": data.empId,
            "task": data.task,
            "deadLine": data.endDate
        };

       

        fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            if (err) {
                task.push(task1);
                let jsonData = JSON.stringify(task);
                fs.writeFileSync(file, jsonData);
                console.log('written to file');
            } else {
                let data = fs.readFileSync(file);
                var json = JSON.parse(data);
                task.push(json);
                json.push(task1);
                let jsonData = JSON.stringify(json);
                fs.writeFileSync(file, jsonData);
                console.log('Appended to file');
            }
        });
        res.end(taskPlanner);

    } else if (pathInfo == "/deletTask") {

        var data1 = url.parse(req.url, true).query;
        
        let tasks = fs.readFileSync(file);
        var json = JSON.parse(tasks);

        for (var i in json) {
            if (json[i].id != data1.taskId) {
                task.push(json[i]);
            }
        }

        let jsonData = JSON.stringify(task);
        fs.writeFileSync(file, jsonData);
        console.log("sucessfully deleted");
        res.end(taskPlanner);

    } else if (pathInfo == "/listTask") {

        
        
        let tasks = fs.readFileSync(file);
        var data = JSON.parse(tasks);  
        let taskTable = `
        
        <table style="border:5px solid black;width:400px;color:brown;">
                <tr>
                    <th>Employee Id</th>
                    <th>Task Id</th>
                    <th>Task</th>
                    <th>Deadline</th>
                </tr>
           `
        buildTable(data)
        function buildTable(data){
		for (var i = 0; i < data.length; i++){
            var row = `<tr>
            <td>${data[i].empId}</td>
            <td>${data[i].id}</td>
            <td>${data[i].task}</td>
            <td>${data[i].deadLine}</td>
					  </tr>`
            taskTable += row

            }
		}
        console.log("listed successfully");
        res.end(taskPlanner + taskTable + '</table >');

    }
})
server.listen(port, () => console.log(`running on port num ${port}`));