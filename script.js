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
    troca.innerHTML = "Conte como se conheceram";
  }
  if (valor < 95) {
    troca.innerHTML = "Descreva a pessoa com um personagem fictício";
  }
  if (valor < 90) {
    troca.innerHTML = "Fale o que mais gosta nelx (personalidade)";
  }
  if (valor < 85) {
    troca.innerHTML = "Diga o que o namoro te fez melhorar";
  }
  if (valor < 80) {
    troca.innerHTML = "Escolham (juntos) 10 adjetivos para o relacionamento";
  }
  if (valor < 75) {
    troca.innerHTML = "façam cafune um no outro por 45s";
  }
  if (valor < 70) {
    troca.innerHTML = "Descreva a primeira vez que se viram";
  }
  if (valor < 65) {
    troca.innerHTML = "Beije a pessoa no lugar que escolher";
  }
  if (valor < 60) {
    troca.innerHTML = "Diga qual a parte do corpo você acha mais bonito nelx";
  }
  if (valor < 55) {
    troca.innerHTML = "Reencenem a cena de um filme de romance";
  }
  if (valor < 50) {
    troca.innerHTML = "Se abracem em silencio por 30seg";
  }
  if (valor < 45) {
    troca.innerHTML = "façam carinho na barriga um do outro por 30 seg";
  }
  if (valor < 40) {
    troca.innerHTML = "Olhem no olho um do outro, o primeiro a rir/piscar, perde.";
  }
  if (valor < 35) {
    troca.innerHTML = "Deem um beijinho de esquimo";
  }
  if (valor < 30) {
    troca.innerHTML = "Diga (ou cante) a música que mais descreve seu amor";
  }
  if (valor < 25) {
    troca.innerHTML = "Cantem a musica do casal (todo casal tem uma música)";
  }
  if (valor < 20) {
    troca.innerHTML = "Diga exatamente como se apaixonaram";
  }
  if (valor < 15) {
    troca.innerHTML = "Deem uma volta com o outro no colo.";
  }
  if (valor < 10) {
    troca.innerHTML = "façam cócegas um no outro por 30seg.";
  }
  if (valor < 5) {
    troca.innerHTML = "Fiquem de conchinha por 3min.";
  }
}