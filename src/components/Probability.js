function a () { return 0; }
function b () { return 1; }
function c () { return 2; }
function d () { return 3; }
function e () { return 4; }
function f () { return 5; }
function g () { return 6; }

var probas = [ 27.2, 24.3, 20.5, 15, 8.4, 3.8, .8 ];
var funcs = [ a, b, c, d, e, f, g ];

function randexec()
{
  var ar = [];
  var i,sum = 0;


  for (i=0 ; i<probas.length-1 ; i++) 
  {
    sum += (probas[i] / 100.0);
    ar[i] = sum;
  }

  var r = Math.random(); 

  for (i=0 ; i<ar.length && r>=ar[i] ; i++) ;

  return (funcs[i])();
}

export default randexec;
