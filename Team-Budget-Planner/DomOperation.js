var budgetObj =[];
var totalBudget=0;
function storeInStorage() {
    localStorage.setItem("budgetInfo",JSON.stringify(budgetObj));
    console.log(budgetObj);
}

function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    //insertNewRecord(data);
    budgetObj.push(data);      //in budgetObj
    resetData();
    storeInStorage();
    
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.clientName = document.getElementById("clntName").value;
    obj.projectName = document.getElementById("projName").value;
    obj.budget = document.getElementById("budgt").value;

    console.log(obj);
    return obj; 
}


function resetData() {
document.getElementById("clntName").value="";
document.getElementById("projName").value="";
document.getElementById("budgt").value="";
}



function retrieveFromStorage() {
    var obj =JSON.parse(localStorage.getItem("budgetInfo"));
    console.log(obj);
    obj.forEach(element => {
        console.log(element);
        insertNewRecord(element);
        
    }  
    );

    document.getElementById("myP").innerHTML="          Total Budget      "+totalBudget;
}


          

function insertNewRecord(data){

    totalBudget=totalBudget+parseInt(data.budget);
   // var table = document.createElement('table');
     //   table.setAttribute('border','1');
        //table.setAttribute('width','100%')
    var table = document.getElementById("budgetList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.clientName;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=data.projectName;                 // value placed
   
    var cell3 = newRow.insertCell(2);          // cell created 
    cell3.innerHTML=data.budget;
    
   }