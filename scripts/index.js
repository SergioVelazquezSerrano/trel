
var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
var boardNo = "sXTJhiXh";
var cartas=[];
var dates =[];
var memberslist =[];

//recogida de datos procedentes de index.html
function addDates(){
    let dateIni=document.getElementById("fechIni").value;
    let dateEnd=document.getElementById("fechEnd").value;
    let key=document.getElementById("key").value;
    let token=document.getElementById("token").value;
    let url=document.getElementById("url").value;

    console.log(dateIni);
    console.log(dateEnd);
    console.log(key);
    console.log(token);
    console.log(url);
}

var c = getCards(cartas,boardNo,key,token);
console.log(c);
var d = getdate(dates,boardNo,key,token);
console.log(d);
var m = getMembers(memberslist,boardNo,key,token);
console.log(m);

//console.log(c);
//var dates = getdate(boardNo,key,token);
//getCards(cartas,boardNo,key,token);
//console.log(c);
//var members = getMembers(boardNo,key,token);

//console.log(cartas);
//console.log("length del array" + cartas.length);

/*for(var i = 0; i < cards.length; i++){
    console.log("entro")
    //var find = dates.find(cards[i]);
    console.log(cards[i]);
    //console.log(find);
}*/

/*
function mandarcartas(){

    getMembers(boardNo,key,token);

}

function mandarmembers(){

    console.log(cartas);
    console.log(cartas.length);
    console.log(cartas[0]);

    console.log(memberslist);
    console.log(memberslist.length);
    console.log(memberslist[0]);

}
*/