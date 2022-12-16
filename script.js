// Numbers from 1 to 50
for (var i = 0; i < 50; i++) {
  console.log(i);
  document.write(i + "<br>");
}


// Even numbers from 1 to 50
for (var i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
    document.write(i + "<br>");
  }
}


// Adds 1 to even numbers from 1 to 50
for (var i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    i++;
    console.log(i);
    document.write(i + "<br>");
  }
}


// Odd numbers from 1 to 50
for (var i = 0; i <= 50; i++) {
  if (i % 2 != 0) {
    console.log(i);
    document.write(i + "<br>");
  }
}


//Adds 1 to odd numbers from 1 to 50
for (var i = 0; i <= 50; i++) {
  if (i % 2 != 0) {
    i++;
    console.log(i); 
    document.write(i + "<br>");
  }
}