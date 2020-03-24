// JavaScript Document

//array icones de gorros_meias
var Slide11 = new Array("img/gorros_meias/1.png", "img/gorros_meias/2.png", "img/gorros_meias/3.png", "img/gorros_meias/4.png", "img/gorros_meias/5.png", "img/gorros_meias/6.png", "img/0.png");
var indSlide11 = 0;
var ultSlide11 = Slide11.length -1;


//array gorros_meias na arvore
var Slide12 = new Array("img/gorros_meias/1_.png", "img/gorros_meias/2_.png", "img/gorros_meias/3_.png", "img/gorros_meias/4_.png", "img/gorros_meias/5_.png", "img/gorros_meias/6_.png", "img/0.png");
var indSlide12 = 0;
var ultSlide12 = Slide12.length -1;

// Função controla a seqüência de slides.
function MostraSlide6(direcao6){
   indSlide11 = indSlide11 + direcao6;
   if(indSlide11 > ultSlide11){indSlide11 = 0};
   if(indSlide11 < 0) {indSlide11 = ultSlide11};
   document.FigSlide11.src = Slide11[indSlide11];
   
   indSlide12 = indSlide12 + direcao6;
   if(indSlide12 > ultSlide12){indSlide12 = 0};
   if(indSlide12 < 0) {indSlide12 = ultSlide12};
   document.FigSlide12.src = Slide12[indSlide12];
}
