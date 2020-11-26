//modificamos los campos de fechacreacion y convertimos los id de los miembros
function modify(cards, dates, membres){

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

    return cards;

}

function filter(cardsfecha,cardsfin,ini,fin){

    for( var i = 0; i<cardsfin.length ; i++){
        if(cardsfin[i]["dateStart"].slice(0,10) != undefined){

        }
        var dateini = cardsfin[i]["dateStart"].slice(0,10);
        var datefin = cardsfin[i]["dateEnd"].slice(0,10);
        if(dateini>=ini && datefin<=fin){
            cardsfin.push(cardsfin[i]);
        }

    }


    return cardsfecha;

}