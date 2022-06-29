// output to console that script works
console.log("Script file succesfully loaded")


// Create popup with greeting
/*
let introTextToSite = "and welcome to my testing ground";
let phrase = `Hello ${introTextToSite}`
alert(phrase)
*/


// let hero say good morning, day or evening based on user's time
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("welcome").innerHTML = greeting;


// Check user age
/*
const AGE = prompt("How old are you")
let checkAGE;
if (AGE >= 18) {
    allowAccess = "Access granted";
}
else if (AGE == null){
    allowAccess = "Please refresh site and enter valid age"
}
else{
    allowAccess = "Access denied. You have to be an adult!";
}
alert(allowAccess)
*/


// Greet user with my name and how old I am.
const fName = "Onni"
const lName = "Roivas"
let curYear = new Date().getFullYear()
const birYear = 2000
let greet = "Hey! My name is" + " " + fName + " " + lName 
+ " " + "and I am" + " " + (curYear - birYear) + " " + "years old."
 console.log(greet)