exports.recordsdata = function () {

    let obj = require("readline-sync");
    let fs = require("fs");
    let fName = obj.question("Enter the First Name ");
    let lName = obj.question("Enter the Last Name ");
    let gender = obj.question("Enter the Gender ");
    let email = obj.question("Enter the email ");

    //Getting Date and Time

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    let rec = new Array();
    let rec1 = {
        "firstName": fName,
        "lastName": lName,
        "gender": gender,
        "email": email,
        "dateAndTime": year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    };


    let file = 'records.json';

    fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if (err) {
            rec.push(rec1);
            let jsonData = JSON.stringify(rec);
            fs.writeFileSync("records.json", jsonData);
            console.log('file written');
        } else {
            let data = fs.readFileSync(file);
            var json = JSON.parse(data);
            rec.push(json);
            json.push(rec1);
            let jsonData = JSON.stringify(json);
            fs.writeFileSync(file, jsonData);
            console.log('file appended');
        }
    });

}