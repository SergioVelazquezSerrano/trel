
var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
var boardNo = "sXTJhiXh";



var cartas=[];

var dates = getdate(boardNo,key,token);
var cards = getCards(cartas,boardNo,key,token);
var members = getMembers(boardNo,key,token);

console.log(cards);
console.log("length del array" + cards.length);

/*for(var i = 0; i < cards.length; i++){
    console.log("entro")
    //var find = dates.find(cards[i]);
    console.log(cards[i]);
    //console.log(find);
}*/
