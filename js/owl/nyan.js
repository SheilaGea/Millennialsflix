var posX = 100, posY = 100, px = 0, py = 0, an = false;
var nyan = $('.nyan');
var rainbow = null;
var altura = 800;
var largura = parseInt($('body').width());
var tamanhoTela = parseInt(largura/9);
var pilha = [];

function getRandomInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

$(document).on('mousemove', function( event ) {
  posX = event.pageX - 20;
  posY = event.pageY + 50;
})

for(var i = 0; i < tamanhoTela; i++)
{
  var rain = $('<div class="rainbow"/>').css('left', i*9+'px');
  $('body').append(rain);
}
rainbow = $('.rainbow');

function moveNyan()
{
    var tamX = nyan.width()/2,
      tamY = nyan.height()/2;
    px += (posX - px - tamX) / 10;
    py += (posY - py - tamY) / 10;
 
    nyan.css({
      left: px + 'px',
      top: py + 'px'
    });
}
function peidaArcoIris()
{
  var qnt = Math.floor(nyan.position().left/9)+2;

  if(pilha.length >= qnt) pilha.pop();
  
  pilha.unshift(py);
  
  rainbow.hide();
  for(var i = 0; i < qnt; i++)
  {
    var am = (i%2);
    if(an) am = (i%2) ? 0 : 1 ;
    
    rainbow.eq(qnt-i).css({top: pilha[i]+am}).show();
  }
}

window.setInterval(function(){
  moveNyan();
  peidaArcoIris();
}, 10);

window.setInterval(function(){ an = !an; }, 500);

var frame = 0;
window.setInterval(function(){   
  nyan.css({'background-position': 34*frame+'px'});
  frame++;
}, 100);