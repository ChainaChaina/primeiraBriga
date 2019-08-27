function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
var foi = false;
var toque
function draw() {
  background(0);
  textSize(12);
  textFont('Georgia');
  toque = touches.length;
  let display = toque + ' touches';
  text(display, 5, 10);

  noFill();
  stroke(100, 100, 240);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(45, 45, 45);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  var troca = document.getElementById("frase");
  var valor = Math.floor((Math.random() * 100) + 1);
  console.log(valor);

  if (valor < 100) {
    troca.innerHTML = "deu tudo certo até então1";
  }
  if (valor < 90) {
    troca.innerHTML = "deu tudo certo até então2";
  }
  if (valor < 80) {
    troca.innerHTML = "deu tudo certo até então3";
  }
  if (valor < 70) {
    troca.innerHTML = "deu tudo certo até então4";
  }
  if (valor < 60) {
    troca.innerHTML = "deu tudo certo até então5";
  }
  if (valor < 50) {
    troca.innerHTML = "deu tudo certo até então6";
  }
  if (valor < 40) {
    troca.innerHTML = "deu tudo certo até então7";
  }
  if (valor < 30) {
    troca.innerHTML = "deu tudo certo até então8";
  }
  if (valor < 20) {
    troca.innerHTML = "deu tudo certo até então9";
  }
  if (valor < 10) {
    troca.innerHTML = "deu tudo certo até então10";
  }
}