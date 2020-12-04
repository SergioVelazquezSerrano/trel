function downloadcsv(){
    /*
    if(document.getElementById("gcsv")){
        document.getElementById("gcsv").remove();
        cardsfecha=[];

    }
*/
    cardsfecha=[];



    let dateIni=document.getElementById("fechIni").value;
    let dateEnd=document.getElementById("fechEnd").value;
    let dateEndsBool=document.getElementById("dataEndBool").checked;

    //parseo fechas o les doy fecha limite parseada
    if(dateIni === ""){
        dateIni=new Date("1989-09-10")
    }else{
        dateIni = new Date(dateIni);
    }

    if(dateEnd === ""){
        dateEnd=new Date("2140-12-31")
    }else{
        dateEnd=new Date(dateEnd);
    }
    var cmem =[];
    var checkmembers = JSON.parse( JSON.stringify( cmem ) );
    //guardar miembros checkeados
    for(var i = 0 ; i < membreslist.length ; i++){
        if(document.getElementById(membreslist[i]["name"]).checked){
            checkmembers.push(membreslist[i]["name"]);
        }
    }

    var ctag = [];
    var ctags = JSON.parse( JSON.stringify( ctag ) );
    //guardar tags checkeados
    for(var i = 0 ; i < labels.length ; i++){
        if(labels[i]["name"].length>0){
            var id = labels[i]["name"].replaceAll(" ","");
            if(document.getElementById(id).checked){
                ctags.push(labels[i]["name"]);
            }
        }
    }


    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    //clonamos porque aqui machacaremos cardsfechafilter en clean
    cardsfechafilter = JSON.parse( JSON.stringify( cardsfecha ) );

    check = clean(cardsfechafilter);



    arrayObjToCsv(cardsfechafilter,check);

}