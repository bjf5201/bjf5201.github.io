// FizzBuzz.

// Altered slightly from my original code in order to publish on the web

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.getElementById('game').innerHTML += "FizzBuzz" + "\n";
  } else if (i % 3 == 0) {
    document.getElementById('game').innerHTML += "Fizz" + "\n";
  } else if (i % 5 == 0) {
    document.getElementById('game').innerHTML += "Buzz" + "\n";
  } else {
    document.getElementById("game").innerHTML += i + "\n";
  }
}
