
var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
var boardNo = "sXTJhiXh";
var cartas=[];
var dates =[];
var membreslist =[];
var cardsfin=[];


var cartas = getCards(cartas,boardNo,key,token);
var dates = getdate(dates,boardNo,key,token);
var membreslist = getMembers(membreslist,boardNo,key,token);

var cardsfin = modify(cartas,dates,membreslist);

console.log(cardsfin);
