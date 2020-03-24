// JavaScript Document

//array icones de estrelas
var Slide3 = new Array("img/estrelas/1.png", "img/estrelas/2.png", "img/estrelas/3.png", "img/estrelas/4.png", "img/estrelas/5.png", "img/estrelas/6.png", "img/0.png");
var indSlide3 = 0;
var ultSlide3 = Slide3.length -1;


//array estrelas na arvore
var Slide4 = new Array("img/estrelas/1_.png", "img/estrelas/2_.png", "img/estrelas/3_.png", "img/estrelas/4_.png", "img/estrelas/5_.png", "img/estrelas/6_.png", "img/0.png");
var indSlide4 = 0;
var ultSlide4 = Slide4.length -1;

// Função controla a seqüência de slides.
function MostraSlide2(direcao2){
   indSlide3 = indSlide3 + direcao2;
   if(indSlide3 > ultSlide3){indSlide3 = 0};
   if(indSlide3 < 0) {indSlide3 = ultSlide3};
   document.FigSlide3.src = Slide3[indSlide3];
   
   indSlide4 = indSlide4 + direcao2;
   if(indSlide4 > ultSlide4){indSlide4 = 0};
   if(indSlide4 < 0) {indSlide4 = ultSlide4};
   document.FigSlide4.src = Slide4[indSlide4];
}
