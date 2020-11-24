var key ="41768e225598e2bc6430f8ad9fc67059";
var token = "2c7a58051244ab195d2e007709434262e22ceeabc7443dd70bb11be0532c44ef"
var cartas =[];



function getCards(boardNo) {

var xmlhttpBoardName = new XMLHttpRequest();
var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/cards/?key=" + key + "&token=" + token;

xmlhttpBoardName.onreadystatechange = function() {
if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
var cards = JSON.parse(xmlhttpBoardName.responseText);

//console.log(cards)
for(var i = 0 ; i < cards.length ; i++){

    //name
    console.log("nombre");
    console.log(cards[i]["name"]);
    //descripcion
    console.log("descr");
    console.log(cards[i]["desc"]);
    //nº comentarios
    console.log("comen");
    console.log(cards[i]["badges"]["comments"]);
    //url
    console.log("url");
    console.log(cards[i]["url"]);
    //fecha finalizacion
    console.log("fecha");
    console.log(cards[i]["due"]);

    //etiquetas
    console.log("etiqueta");
    for(var c=0;c<cards[i]["labels"].length;c++){
        console.log(cards[i]["labels"][c]["name"]);
    }
    
    //miembros
    console.log("miembros");
    for(var j =0;j<cards[i]["idMembers"].length;j++){
        console.log(cards[i]["idMembers"][j]);
    }
    
}

}

}

xmlhttpBoardName.open("GET", boardNameUrl, true);
xmlhttpBoardName.send();
}

getCards("sXTJhiXh");
