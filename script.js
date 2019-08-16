function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
  }
  var toque
  function draw() {
    background(100);
    toque = touches.length;
    let display = toque + ' touches';
    text(display, 5, 10);

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(60,60,60);
  }
  