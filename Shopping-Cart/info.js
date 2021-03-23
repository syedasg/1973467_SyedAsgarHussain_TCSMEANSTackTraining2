/*function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    console.log(title)
    console.log(desc);
    console.log(imageInfo);
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=desc;
    document.getElementById("imageInfo").src=imageInfo;
}*/




var blogObj =[];
var totalBudget=0;
function storeInStorage() {
    localStorage.setItem("blogInfo",JSON.stringify(blogObj));
    console.log(blogObj);
    retrieveFromStorage();
}

function onFormSubmit(){
    
    var data = readFormData();
    //insertNewRecord(data);
    blogObj.push(data);      //in blogObj
    resetData();
    storeInStorage();
    
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.title = document.getElementById("title").value;
    obj.desc =  document.getElementById("desc").value;
    obj.image = document.getElementById("imageId").files[0].name;;

   

    //console.log(obj);
    return obj; 
}


function resetData() {
document.getElementById("title").value="";
document.getElementById("desc").value="";
document.getElementById("imageId").value="";
}



function retrieveFromStorage() {
    var obj =JSON.parse(localStorage.getItem("blogInfo"));
    //console.log(obj);
    /*obj.forEach(element => {
        console.log(element);
        insertNewRecord(element);
        
    }  
    );*/

    insertNewRecord(obj[obj.length-1]);
    
}


          

function insertNewRecord(data){

 
    var table = document.getElementById("blogList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.title;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=data.desc;                 // value placed
   
    var cell3 = newRow.insertCell(2);          // cell created 
    cell3.innerHTML="<img src="+data.image+" />";
    //cell3.innerHTML="<a href='#' onclick='deleteRec(this)'>X</a>";
    

    
   }