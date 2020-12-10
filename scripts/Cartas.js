function Carta(id,name, description, nComent, linkCart, membres, dateStart, dateEnd,dateEndsBool, tags, tagscolor, idchecklist ,attach){
    this.id = id;
    this.name = name;
    this.description = description;
    this.nComent = nComent;  
    this.linkCart = linkCart; 
    this.membres = membres; 
    this.attach = attach;
    this.dateStart = dateStart; 
    this.dateEnd = dateEnd;
    this.dateEndsBool = dateEndsBool;
    this.tags=tags;
    this.tagscolor=tagscolor;
    this.idchecklist=idchecklist;
    this.horas =0;
}

//hacemos una conexion sincrona con metodo get y recuperamos las tarjetas del tablero 
function getCards(cartas,boardNo,key,token) {

    var xmlhttpBoardName = new XMLHttpRequest();
    var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/cards/?key=" + key + "&token=" + token ;

    xmlhttpBoardName.onreadystatechange = function() {
        if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
            var cards = JSON.parse(xmlhttpBoardName.responseText);
            console.log(cards);
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
                var tagscolor =[];
                var idchecklist =[];
                var attach =[];
        
                //etiquetas
                for(var c=0;c<cards[i]["labels"].length;c++){
                    tags.push(cards[i]["labels"][c]["name"]);
                    tagscolor.push(cards[i]["labels"][c]["color"]);
                }
        
                //miembros
                for(var j =0;j<cards[i]["idMembers"].length;j++){
                    membres.push(cards[i]["idMembers"][j]);
                }

                //idchecklist
                for(var x = 0 ; x< cards[i]["idChecklists"].length; x++){
                    idchecklist.push(cards[i]["idChecklists"][x]);
                }

                var carta = new Carta(id,name, description, nComent, linkCart, membres, dateStart, dateEnd,dateEndsBool, tags ,tagscolor,idchecklist, attach);
                cartas.push(carta);
            }
        }
    }

    xmlhttpBoardName.open("GET", boardNameUrl, false);
    xmlhttpBoardName.send();
    
    //retornamos todas las cartas de un tablero
    return cartas;
}
