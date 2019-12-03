var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "red"
c.fillRect(100, 100, 300, 100);
c.fillStyle = "blue"
c.fillRect(400, 100, 300, 100);
c.fillStyle = "green"
c.fillRect(700, 100, 300, 100);
c.fillStyle = "brown"
c.fillRect(125, 200, 50, 125);
c.fillStyle = "brown"
c.fillRect(325, 200, 50, 125);
c.fillStyle = "brown"
c.fillRect(425, 200, 50, 125);
c.fillStyle = "brown"
c.fillRect(625, 200, 50, 125);
c.fillStyle = "brown"
c.fillRect(725, 200, 50, 125);
c.fillStyle = "brown"
c.fillRect(925, 200, 50, 125);
c.fillStyle = "black"
c.fillRect(1000, 50, 150, 150);
c.fillStyle = "white"
c.fillRect(1025, 75, 20, 20);
c.fillStyle = "white"
c.fillRect(1100, 75, 20, 20);
console.log(canvas);