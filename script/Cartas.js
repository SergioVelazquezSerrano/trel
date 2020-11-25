function Carta(id,name, description, nComent, linkCart, membres, dateStart, dateEnd,dateEndsBool, tags ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.nComent = nComent;  
    this.linkCart = linkCart; 
    this.membres = membres; 
    this.dateStart = dateStart; 
    this.dateEnd = dateEnd;
    this.dateEndsBool = dateEndsBool;
    this.tags=tags;
}

//var cartas =[];

function getCards(cartas,boardNo,key,token) {

    var xmlhttpBoardName = new XMLHttpRequest();
    var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/cards/?key=" + key + "&token=" + token ;

    xmlhttpBoardName.onreadystatechange = function() {
        if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
            var cards = JSON.parse(xmlhttpBoardName.responseText);
            for(var i = 0 ; i < cards.length ; i++){
                var id = cards[i]["id"];
                var name = cards[i]["name"];
                var description =cards[i]["desc"];
                var nComent =cards[i]["badges"]["comments"];
                var linkCart = cards[i]["url"];
                var membres = [];
                var dateStart = "";
                var dateEnd = cards[i]["due"];
                var dateEndsBool = cards[i]["dueComplete"];
                var tags = [];
        
                //etiquetas
                for(var c=0;c<cards[i]["labels"].length;c++){
                    tags.push(cards[i]["labels"][c]["name"]);
                }
        
                //miembros
                for(var j =0;j<cards[i]["idMembers"].length;j++){
                    membres.push(cards[i]["idMembers"][j]);
                }

                var carta = new Carta(id,name, description, nComent, linkCart, membres, dateStart, dateEnd,dateEndsBool, tags );
                cartas.push(carta);
            }
            return(cartas);

        }
    }

    xmlhttpBoardName.open("GET", boardNameUrl, true);
    xmlhttpBoardName.send();

}



//Ser
//var key ="41768e225598e2bc6430f8ad9fc67059";

//var key ="c42b569af23f3fb74bd843c9fdf476b8";
//Ser
//var token = "2c7a58051244ab195d2e007709434262e22ceeabc7443dd70bb11be0532c44ef"

//var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";

//var boardNo = "sXTJhiXh";

//getCards(boardNo, key,token);

