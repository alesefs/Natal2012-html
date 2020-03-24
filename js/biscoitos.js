// JavaScript Document

//array icones de biscoitos
var Slide9 = new Array("img/biscoitos/1.png", "img/0.png");
var indSlide9 = 0;
var ultSlide9 = Slide9.length -1;

//array biscoitos na arvore
var Slide10 = new Array("img/biscoitos/1_.png", "img/0.png");
var indSlide10 = 0;
var ultSlide10 = Slide10.length -1;

// Função controla a seqüência de slides.
function MostraSlide5(direcao5){
   indSlide9 = indSlide9 + direcao5;
   if(indSlide9 > ultSlide9){indSlide9 = 0};
   if(indSlide9 < 0) {indSlide9 = ultSlide9};
   document.FigSlide9.src = Slide9[indSlide9];
   
   indSlide10 = indSlide10 + direcao5;
   if(indSlide10 > ultSlide10){indSlide10 = 0};
   if(indSlide10 < 0) {indSlide10 = ultSlide10};
   document.FigSlide10.src = Slide10[indSlide10];
}
