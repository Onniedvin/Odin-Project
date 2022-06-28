// output to console that script works
console.log("Script file succesfully loaded")

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