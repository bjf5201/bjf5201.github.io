// Looping a Triangle

// Grab element to write code to
let page = document.getElementById("javascript").innerHTML;

// Triangle loop function
// Altered slightly to function properly on the web
let string = "#";
for (let line = "#"; line.length < 8; line += "#") {
  let triangle = line + "<br>";
  document.getElementById("javascript").innerHTML += triangle;
}
