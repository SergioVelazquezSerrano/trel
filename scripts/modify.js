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

function filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool){

    for( var i = 0; i<cardsfin.length ; i++){
        
        //convertir el dateStart de las cartas en formato date y asignacion sino tiene
        if(cardsfin[i]["dateStart"].slice(0,10) != ""){
            var ini = new Date(cardsfin[i]["dateStart"].slice(0,10));
        }else{
            var ini =  new Date("1989-09-10");
        }

        //convertir el dateEnd de las cartas en formato date y asignacion sino tiene
        if(cardsfin[i]["dateEnd"] != null){
            var fin = new Date(cardsfin[i]["dateEnd"].slice(0,10));
        }else{
            var fin =  new Date("2140-12-31")
        }

        //comprobamos si quiere solo las finalizadas y sino sacamos todas que coincidan por fechas indicadas
        if(dateEndsBool === true){
            if(ini>=dateIni && fin<=dateEnd && cardsfin[i]["dateEndsBool"]===true){
                cardsfecha.push(cardsfin[i]);
            }
        }else{
            if(ini>=dateIni && fin<=dateEnd){
                cardsfecha.push(cardsfin[i]);
            }
        }

    }

    return cardsfecha;

}

function clean(cardsfecha){
    var text ="";
    for( var i=0; i<cardsfecha.length; i++){
        for (const prop in cardsfecha[i]) {

            var aux = cardsfecha[i][prop];
            if(Array.isArray(aux)){
                text = aux.toLocaleString();
            }else{
                text = String(cardsfecha[i][prop]);
            }
            

            textcoma = text.replaceAll(","," ");
            textsc = textcoma.replaceAll("\n"," ");

            //console.log(`obj.${cardsfecha[i]} = ${cardsfecha[i][prop]}`);
            cardsfecha[i][prop]=textsc;

          }
    }

    //console.log(cardsfecha)
    //return cardsfecha;

}