
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.beginPath();
context.arc(250, 200, 100, 0, Math.PI*2);
context.fillStyle = "#CA6F1E";
context.fill();
context.closePath();

context.beginPath();
context.arc(150, 125, 45, 0, Math.PI*2);
context.fillStyle = "#FOB27A";
context.fill();
context.closePath();

context.beginPath();
context.arc(340, 125, 45, 0, Math.PI*2);
context.fillStyle = "#FOB27A";
context.fill();
context.closePath();

context.beginPath();
context.arc(215, 155, 15, 0, Math.PI*2);
context.fillStyle = "#FDFEFE";
context.fill();
context.closePath();

context.beginPath();
context.arc(280, 155, 15, 0, Math.PI*2);
context.fillStyle = "#FDFEFE";
context.fill();
context.closePath();

context.beginPath();
context.arc(280, 155, 8, 0, Math.PI*2);
context.fillStyle = "#17202A";
context.fill();
context.closePath();

context.beginPath();
context.arc(215, 155, 8, 0, Math.PI*2);
context.fillStyle = "#17202A";
context.fill();
context.closePath();

context.beginPath();
context.arc(250, 230, 20, 0, Math.PI*2);
context.fillStyle = "#F5B7B1";
context.fill();
context.closePath();

context.beginPath();
context.arc(250, 230, 10, 0, Math.PI*2);
context.fillStyle = "#E74C3C";
context.fill();
context.closePath();
