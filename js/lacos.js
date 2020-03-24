// JavaScript Document

//array icones de lacos
var Slide7 = new Array("img/lacos/1.png", "img/lacos/2.png", "img/lacos/3.png", "img/lacos/4.png", "img/0.png");
var indSlide7 = 0;
var ultSlide7 = Slide7.length -1;

//array lacos na arvore
var Slide8 = new Array("img/lacos/1_.png", "img/lacos/2_.png", "img/lacos/3_.png", "img/lacos/4_.png", "img/0.png");
var indSlide8 = 0;
var ultSlide8 = Slide8.length -1;

// Função controla a seqüência de slides.
function MostraSlide4(direcao4){
   indSlide7 = indSlide7 + direcao4;
   if(indSlide7 > ultSlide7){indSlide7 = 0};
   if(indSlide7 < 0) {indSlide7 = ultSlide7};
   document.FigSlide7.src = Slide7[indSlide7];
   
   indSlide8 = indSlide8 + direcao4;
   if(indSlide8 > ultSlide8){indSlide8 = 0};
   if(indSlide8 < 0) {indSlide8 = ultSlide8};
   document.FigSlide8.src = Slide8[indSlide8];
}
