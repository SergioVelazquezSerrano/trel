//modificamos los campos de fechacreacion y convertimos los id de los miembros
function modify(cards, dates, membres,checklist){

    for(var i = 0 ; i<cards.length ; i++){
        var id = cards[i]["id"];
        var busq = dates.find(element => element["id"] === id);
        if(busq != undefined){
            var da = busq["date"];
            cards[i]["dateStart"] = da;
        }
    }

    for(var j = 0; j<cards.length; j++){
        var id = cards[j]["id"];
        if(cards[j]["membres"].length != 0){
            for( c=0 ; c<cards[j]["membres"].length ; c++){
                var busq = membres.find(element => element["id"] === cards[j]["membres"][c]);
                var da = busq["name"];
                cards[j]["membres"][c]= da;
            }
        }
    }

    for(var c = 0 ; c<cards.length; c++){
        var id = cards[c]["id"];
        if(cards[c]["idchecklist"].length !=0){
            for( x= 0; x<cards[c]["idchecklist"].length; x++){
                var busq = checklist.find(element=>element["id"]===cards[c]["idchecklist"][x]);
                var che = {"name":busq["name"],"checkitem":busq["checkitem"]};
                cards[c]["idchecklist"][x]=che;
            }
        }

    }

    return cards;

}


