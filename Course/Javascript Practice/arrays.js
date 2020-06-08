//Simple Array
var randomStuff = ["cricket", "basketball", "football", "snooker", "relay", "rugby"]
alert(randomStuff)

//Accesing elements in an array through index
var firstRankedSports = randomStuff[0]
alert(firstRankedSports)

var randomElement = randomStuff[5]
alert(randomElement)

var overshootArray = randomStuff[20]
alert(overshootArray)

//finding Number of elements using length
var lengthOfArray = randomStuff.length
alert(lengthOfArray)

//Array of Objects
var arObj = [{
    "name" : "somename",
    "address" : "someaddress",
    "phoneNo" : "somephone no"
    },{
    "name" : "somename 1",
    "address" : "someaddress 1",
    "phoneNo" : "somephone no 1"
    }]

//Accessing elements
var firstElement = arObj[0]
alert(firstElement)
alert(arObj)
console.log(arObj)

name = arObj[0]["name"]
name_2 = arObj[1].name

alert(name)
alert(name_2)

