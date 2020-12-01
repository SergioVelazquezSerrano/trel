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
