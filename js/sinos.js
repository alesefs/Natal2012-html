// JavaScript Document

//array icones de sinos
var Slide5 = new Array("img/sinos/1.png", "img/sinos/2.png", "img/0.png");
var indSlide5 = 0;
var ultSlide5 = Slide5.length -1;


//array sinos na arvore
var Slide6 = new Array("img/sinos/1_.png", "img/sinos/2_.png", "img/0.png");
var indSlide6 = 0;
var ultSlide6 = Slide6.length -1;

// Função controla a seqüência de slides.
function MostraSlide3(direcao3){
   indSlide5 = indSlide5 + direcao3;
   if(indSlide5 > ultSlide5){indSlide5 = 0};
   if(indSlide5 < 0) {indSlide5 = ultSlide5};
   document.FigSlide5.src = Slide5[indSlide5];
   
   indSlide6 = indSlide6 + direcao3;
   if(indSlide6 > ultSlide6){indSlide6 = 0};
   if(indSlide6 < 0) {indSlide6 = ultSlide6};
   document.FigSlide6.src = Slide6[indSlide6];
}
