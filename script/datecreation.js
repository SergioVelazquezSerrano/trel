//Ser
//var key ="41768e225598e2bc6430f8ad9fc67059";

//Isa
var key ="c42b569af23f3fb74bd843c9fdf476b8"

//Diego
//var key ="6f66eed4df1a99fe536cde0ddb06b76f";

//Tokens
//Ser
//var token = "2c7a58051244ab195d2e007709434262e22ceeabc7443dd70bb11be0532c44ef"

//Isa
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920"

//Diego
//var token = "b1fa8b524e293117c8224286ea683ddfa3eb48e322be4169522023f153791e48"


var cartas =[];



function getdate(boardNo) {

var xmlhttpBoardName = new XMLHttpRequest();

var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/?actions=createCard&key=" + key + "&token=" + token;


xmlhttpBoardName.onreadystatechange = function() {
if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
var actions = JSON.parse(xmlhttpBoardName.responseText);

console.log(actions["actions"])
for( var i = 0 ; i<actions["actions"].length; i++){
    console.log(actions["actions"][i]["date"]);
    console.log(actions["actions"][i]["data"]["card"]["name"])
    console.log(actions["actions"][i]["data"]["card"]["id"])
}

}

}

xmlhttpBoardName.open("GET", boardNameUrl, true);
xmlhttpBoardName.send();
}


//cursos
getdate("sXTJhiXh");


//ss
//getCards("Tno1dDE8");
