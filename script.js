function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  var toque
  function draw() {
    background(100);
    circle(mouseX, 30, 20);
    toque = touches.length;
    let display = toque + ' touches';
    text(display, 5, 10);
  }
  