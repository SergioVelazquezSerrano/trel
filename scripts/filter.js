function filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags){

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
            //si hay checkeada la fecha
            if(ini>=dateIni && fin<=dateEnd && cardsfin[i]["dateEndsBool"]===true){
                //si hay seleccionados miembros
                if(Object.keys(checkmembers).length != 0){
                    for(var m = 0 ; m< checkmembers.length; m++){
                        if(cardsfin[i]["membres"].find(element => element === checkmembers[m])!=undefined){
                            //si hay tags seleccionados
                            if(Object.keys(ctags).length != 0){
                                for( var t = 0; t<ctags.length;t++){
                                    if(cardsfin[i]["tags"].find(element => element === ctags[t])!=undefined){
                                        cardsfecha.push(cardsfin[i]);
                                    }
                                }
                            }else{
                                //no hay tags seleccionados
                                cardsfecha.push(cardsfin[i]);
                            }
                        }
                    }
                }else{
                    //no hay miembros y si hay tags
                    if(Object.keys(ctags).length != 0){
                        for( var t = 0; t<ctags.length;t++){
                            if(cardsfin[i]["tags"].find(element => element === ctags[t])!=undefined){
                                cardsfecha.push(cardsfin[i]);
                            }
                        }
                    }else{
                        //no hay miembros ni tags
                        cardsfecha.push(cardsfin[i]);
                    }
                }
            }
        }else{
            //no hay checkeada la fecha
            if(ini>=dateIni && fin<=dateEnd){
                //si hay miembros checkeados
                if(Object.keys(checkmembers).length != 0){
                    for(var m = 0 ; m< checkmembers.length; m++){
                        if(cardsfin[i]["membres"].find(element => element === checkmembers[m])!=undefined){
                            //si hay tags seleccionadas
                            if(Object.keys(ctags).length != 0){
                                for( var t = 0; t<ctags.length;t++){
                                    if(cardsfin[i]["tags"].find(element => element === ctags[t])!=undefined){
                                        cardsfecha.push(cardsfin[i]);
                                    }
                                }
                            }else{
                                //hay miembros pero no tags seleccionados
                                cardsfecha.push(cardsfin[i]);
                            }
                        }
                    }
                }else{
                    //no hay miembros pero si tags seleccionados
                    if(Object.keys(ctags).length != 0){
                        for( var t = 0; t<ctags.length;t++){
                            if(cardsfin[i]["tags"].find(element => element === ctags[t])!=undefined){
                                cardsfecha.push(cardsfin[i]);
                            }
                        }
                    }else{
                        //no hay miembros ni tags seleccionados
                        cardsfecha.push(cardsfin[i]);
                    }
                }
            }
        }
    }

    //retornamos las cartas filtradas dependiendo de sus filtros
    return cardsfecha;
}
