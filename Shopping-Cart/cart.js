var cartObj = [];
var cartItemCount = 0;
var cartTotal = 0;
function onFormSubmit1() {
    var obj = {}; // empty object
    var item = document.getElementById("item1").value;
    var price = document.getElementById("price1").value;
    // obj.image = document.getElementById("imageId").files[0].name;;
    addItem(item, price);
}
function addItem(item, price) {
    var cartItem = new cartitem(item, parseInt(price));
    cartObj.push(cartItem);
    localStorage.setItem("cartInfo", JSON.stringify(cartObj));
    cartTotal = cartTotal + 1;
    document.getElementById("cartSize").value = cartTotal.toString();
    resetData();
    console.log(cartObj);
    //console.log(obj);
    //return obj; 
}
function resetData() {
    document.getElementById("item1").value = "";
    document.getElementById("price1").value = "";
    //document.getElementById("imageId").value="";
}
var cartitem = /** @class */ (function () {
    function cartitem(itemName, itemPrice) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
    }
    return cartitem;
}());
function retrieveFromStorage() {
    var obj = JSON.parse(localStorage.getItem("cartInfo"));
    //console.log(obj);
    obj.forEach(function (element) {
        console.log(element);
        insertNewRecord(element);
    });
    //document.getElementById("myP").innerHTML="cartTotal"+cartTotal; 
    document.getElementById("tot").value = cartTotal.toString();
}
function insertNewRecord(data) {
    if (data.itemPrice != null) {
        cartTotal = cartTotal + parseInt(data.itemPrice);
        var table = document.getElementById("cartList");
        var body = table.getElementsByTagName("tbody")[0];
        //var rowCount=table.rows.length
        var newRow = body.insertRow(-1); // row created 
        var cell1 = newRow.insertCell(0); // cell created 
        cell1.innerHTML = data.itemName; // value placed 
        var cell2 = newRow.insertCell(1); // cell created 
        cell2.innerHTML = data.itemPrice; // value placed
        console.log(data.itemName, data.itemPrice);
    }
}
function onFormSubmit2() {
    var obj = {}; // empty object
    var item = document.getElementById("item2").value;
    var price = document.getElementById("price2").value;
    // obj.image = document.getElementById("imageId").files[0].name;;
    addItem(item, price);
}
function onFormSubmit3() {
    var obj = {}; // empty object
    var item = document.getElementById("item3").value;
    var price = document.getElementById("price3").value;
    // obj.image = document.getElementById("imageId").files[0].name;;
    addItem(item, price);
}
function onFormSubmit4() {
    var obj = {}; // empty object
    var item = document.getElementById("item4").value;
    var price = document.getElementById("price4").value;
    // obj.image = document.getElementById("imageId").files[0].name;;
    addItem(item, price);
}
function onFormSubmit5() {
    var obj = {}; // empty object
    var item = document.getElementById("item5").value;
    var price = document.getElementById("price5").value;
    // obj.image = document.getElementById("imageId").files[0].name;;
    addItem(item, price);
}
function onFormSubmit6() {
    var obj = {}; // empty object
    var item = document.getElementById("item6").value;
    var price = document.getElementById("price6").value;
    // obj.image = document.getElementById("imageId").files[0].name;;
    addItem(item, price);
}
