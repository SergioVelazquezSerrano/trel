function clean(cardsfechafilter){
    var text ="";
    var maxcheck = 0;
    
    //iteramos por las cartas filtradas
    for( var i=0; i<cardsfechafilter.length; i++){
        for (const prop in cardsfechafilter[i]) {
            var aux = cardsfechafilter[i][prop];

            //si estamos en attach, trabajamos el objeto y reemplazamos lo que nos interesa
            if(prop==="attach"){
                for(var a = 0 ; a<aux.length; a++){
                    textsca="";
                    for( const prop2 in aux[a]){
                        for( const prop3 in aux[a][prop2]){
                        if(prop3==="link"){
                        text = aux[a][prop2][prop3].toLocaleString();
                        textcoma = text.replaceAll(",","; ");
                        textsc = textcoma.replaceAll("\n"," ");
                        textsca = textsca +" ~~ " +textsc;
                        }}
                    }
                    cardsfechafilter[i][prop]=textsca;        
                }
            }else if(prop==="idchecklist"){
                //si estamos en idchecklist, trabajamos el objeto y reemplazamos lo que nos interesa
                var checks = aux.length;
                if(checks!=0){
                    for(var c=0 ; c<checks; c++){
                        text = text +" + "+ aux[c]["name"] + " = ";
                        var intro ="";
                        for(var cc=0; cc<aux[c]["checkitem"].length;cc++){
                            intro = intro+" * "+aux[c]["checkitem"][cc]["name"] + " : " + aux[c]["checkitem"][cc]["state"]+ " ; ";
                        }
                        textsc = textsc+ text + intro + ",";
                        text="";
                    }
                    cardsfechafilter[i][prop]=textsc;
                    textsc="";
                }
            }else if(Array.isArray(aux)){
                //si es un array trabajamos el objeo y remplazamos lo que nos interesa
                text = aux.toLocaleString();
                textcoma = text.replaceAll(",","; ");
                textsc = textcoma.replaceAll("\n"," ");
                cardsfechafilter[i][prop]=textsc;
            }else{
                //sino es ninguna de las anteriores casteamos a String y remplazamos lo que nos interesa
                text = String(cardsfechafilter[i][prop]);
                textcoma = text.replaceAll(",","; ");
                textsc = textcoma.replaceAll("\n"," ");
                cardsfechafilter[i][prop]=textsc;
            }

            //vaciamos variables de trabajo de texto
            text="";
            textsc=""

            //guardamos el numero maximo de checks para en futuro saber cuantas celdas adicionales hay que crear de dicho
            if(checks>maxcheck){
                maxcheck=checks;
            }
            
          }
    }

    //retornamos el numero maximo de checks, ya que hemos modificado y repicado nuestro objeto dejandolo ya limpio para csv
    return maxcheck;
}