function clean(cardsfecha){
    var text ="";
    var maxcheck = 0;
    for( var i=0; i<cardsfecha.length; i++){
        for (const prop in cardsfecha[i]) {
            var aux = cardsfecha[i][prop];
            if(prop==="idchecklist"){
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
                    cardsfecha[i][prop]=textsc;
                    textsc="";
                }
            }else if(Array.isArray(aux)){
                text = aux.toLocaleString();
                textcoma = text.replaceAll(",","; ");
                textsc = textcoma.replaceAll("\n"," ");
                cardsfecha[i][prop]=textsc;

    
            }else{
                text = String(cardsfecha[i][prop]);
                textcoma = text.replaceAll(",","; ");
                textsc = textcoma.replaceAll("\n"," ");
                cardsfecha[i][prop]=textsc;

    
            }

            text="";
            textsc=""


            if(checks>maxcheck){
                maxcheck=checks;
            }
          }
    }
    console.log(maxcheck);
    return maxcheck;
    //console.log(cardsfecha)
    //return cardsfecha;

}