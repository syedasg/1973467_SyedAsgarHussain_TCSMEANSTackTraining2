
var cartObj =[];
var cartItemCount=0;
var cartTotal=0;


 function onFormSubmit1():void {
    var obj = {}    // empty object
    
    var item = (document.getElementById("item1") as HTMLInputElement).value;
    var price =  (document.getElementById("price1") as HTMLInputElement).value;
   // obj.image = document.getElementById("imageId").files[0].name;;
   addItem(item,price);
 }
 

 function addItem(item:string,price:string):void{
    
    
 
    let cartItem=new cartitem(item,parseInt(price));
    cartObj.push(cartItem); 

    localStorage.setItem("cartInfo",JSON.stringify(cartObj));
    cartTotal=cartTotal+1;
    (document.getElementById("cartSize") as HTMLInputElement).value=cartTotal.toString();
    resetData();
    console.log(cartObj);
   

    //console.log(obj);
    //return obj; 
}

function resetData():void {
    (document.getElementById("item1")as HTMLInputElement).value="";
    (document.getElementById("price1")as HTMLInputElement).value="";
    //document.getElementById("imageId").value="";
    }


class cartitem{

    itemName:string;
    itemPrice:number;
    constructor(itemName:string,itemPrice:number){
        this.itemName=itemName;
        this.itemPrice=itemPrice;
    }

}


function retrieveFromStorage() {
    var obj =JSON.parse(localStorage.getItem("cartInfo"));
    //console.log(obj);
    obj.forEach(element => {
        console.log(element);
        insertNewRecord(element);
        
    }

    );

    //document.getElementById("myP").innerHTML="cartTotal"+cartTotal; 
    (document.getElementById("tot")as HTMLInputElement).value=cartTotal.toString(); 


  
    
}


          

function insertNewRecord(data:any):void{
if(data.itemPrice!=null){
    cartTotal=cartTotal+parseInt(data.itemPrice);
    var table = document.getElementById("cartList");
    var body = table.getElementsByTagName("tbody")[0];
    //var rowCount=table.rows.length
    var newRow = body.insertRow(-1);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.itemName;                 // value placed 
    
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=data.itemPrice;                 // value placed
   console.log(data.itemName,data.itemPrice);
   
   }
}
   function onFormSubmit2():void {
    var obj = {}    // empty object
    
    var item = (document.getElementById("item2") as HTMLInputElement).value;
    var price =  (document.getElementById("price2") as HTMLInputElement).value;
   // obj.image = document.getElementById("imageId").files[0].name;;
   addItem(item,price);
 }
 function onFormSubmit3():void {
    var obj = {}    // empty object
    
    var item = (document.getElementById("item3") as HTMLInputElement).value;
    var price =  (document.getElementById("price3") as HTMLInputElement).value;
   // obj.image = document.getElementById("imageId").files[0].name;;
   addItem(item,price);
 }
 function onFormSubmit4():void {
    var obj = {}    // empty object
    
    var item = (document.getElementById("item4") as HTMLInputElement).value;
    var price =  (document.getElementById("price4") as HTMLInputElement).value;
   // obj.image = document.getElementById("imageId").files[0].name;;
   addItem(item,price);
 }
 function onFormSubmit5():void {
    var obj = {}    // empty object
    
    var item = (document.getElementById("item5") as HTMLInputElement).value;
    var price =  (document.getElementById("price5") as HTMLInputElement).value;
   // obj.image = document.getElementById("imageId").files[0].name;;
   addItem(item,price);
 }
 function onFormSubmit6():void {
    var obj = {}    // empty object
    
    var item = (document.getElementById("item6") as HTMLInputElement).value;
    var price =  (document.getElementById("price6") as HTMLInputElement).value;
   // obj.image = document.getElementById("imageId").files[0].name;;
   addItem(item,price);
 }