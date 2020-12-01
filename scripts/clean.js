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
            

            textcoma = text.replaceAll(",","; ");
            textsc = textcoma.replaceAll("\n"," ");

            //console.log(`obj.${cardsfecha[i]} = ${cardsfecha[i][prop]}`);
            cardsfecha[i][prop]=textsc;

          }
    }

    //console.log(cardsfecha)
    //return cardsfecha;

}