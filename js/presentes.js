// JavaScript Document

//array icones de presentes
var Slide13 = new Array("img/presentes/1.png", "img/presentes/2.png", "img/presentes/3.png", "img/presentes/4.png", "img/presentes/5.png", "img/presentes/6.png", "img/0.png");
var indSlide13 = 0;
var ultSlide13 = Slide13.length -1;

//array presentes na arvore
var Slide14 = new Array("img/presentes/1_.png", "img/presentes/2_.png", "img/presentes/3_.png", "img/presentes/4_.png", "img/presentes/5_.png", "img/presentes/6_.png", "img/0.png");
var indSlide14 = 0;
var ultSlide14 = Slide14.length -1;

// Função controla a seqüência de slides.
function MostraSlide7(direcao7){
   indSlide13 = indSlide13 + direcao7;
   if(indSlide13 > ultSlide13){indSlide13 = 0};
   if(indSlide13 < 0) {indSlide13 = ultSlide13};
   document.FigSlide13.src = Slide13[indSlide13];
   
   indSlide14 = indSlide14 + direcao7;
   if(indSlide14 > ultSlide14){indSlide14 = 0};
   if(indSlide14 < 0) {indSlide14 = ultSlide14};
   document.FigSlide14.src = Slide14[indSlide14];
}
