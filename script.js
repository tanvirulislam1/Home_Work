for (var i = 0; i < 51; i++) {
  console.log(i);
  document.write(i + "<br>");
}

for (var i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
    document.write(i + "<br>");
  }
}

for (var i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    i++;
    console.log(i);
    document.write(i + "<br>");
  }
}

for (var i = 0; i <= 50; i++) {
  if (i % 2 != 0) {
    console.log(i);
    document.write(i + "<br>");
  }
}

for (var i = 0; i <= 50; i++) {
  if (i % 2 != 0) {
    i++;
    console.log(i); 
    document.write(i + "<br>");
  }
}