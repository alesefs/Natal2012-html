// JavaScript Document

//array icones de bolas
var Slide = new Array("img/bolas/1.png", "img/bolas/2.png", "img/bolas/3.png", "img/bolas/4.png", "img/bolas/5.png", "img/bolas/6.png", "img/0.png");
var indSlide = 0;
var ultSlide = Slide.length -1;


//array bolas na arvore
var Slide2 = new Array("img/bolas/1_.png", "img/bolas/2_.png", "img/bolas/3_.png", "img/bolas/4_.png", "img/bolas/5_.png", "img/bolas/6_.png", "img/0.png");
var indSlide2 = 0;
var ultSlide2 = Slide2.length -1;

// Função controla a seqüência de slides.
function MostraSlide(direcao){
   indSlide = indSlide + direcao;
   if(indSlide > ultSlide){indSlide = 0};
   if(indSlide < 0) {indSlide = ultSlide};
   document.FigSlide.src = Slide[indSlide];
   
   indSlide2 = indSlide2 + direcao;
   if(indSlide2 > ultSlide2){indSlide2 = 0};
   if(indSlide2 < 0) {indSlide2 = ultSlide2};
   document.FigSlide2.src = Slide2[indSlide2];
}
