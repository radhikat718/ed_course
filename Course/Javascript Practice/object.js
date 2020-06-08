//Object declaration and usage

var foodItem = {
    "itemName" : "Onion Pakoda",
    "itemType" : "Fried Snack",
    "itemQuantity" : "100g",
    "itemPrice" : 50,
    "isAvailable" : true,
    "quantityAvailable": 25
    }

//Ways to access Object
var price = foodItem.itemPrice
var type  = foodItem["itemType"]

//Display as an alert
alert(price)
alert(type)