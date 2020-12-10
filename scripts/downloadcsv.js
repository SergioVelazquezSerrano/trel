function downloadcsv(){
    cardsfecha=[];

    //cogemos los valores de las fechas del formulario
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

    //aseguramos que checkmembers sera una copia vacia
    var cmem =[];
    var checkmembers = JSON.parse( JSON.stringify( cmem ) );
    //guardar miembros checkeados
    for(var i = 0 ; i < membreslist.length ; i++){
        if(document.getElementById(membreslist[i]["name"]).checked){
            checkmembers.push(membreslist[i]["name"]);
        }
    }

    //aseguramos que ctag sera una copia vacia
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

    //filtramos nuestras cartas por los campos seleccionados en el formulario
    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    //clonamos porque aqui machacaremos cardsfechafilter en clean
    cardsfechafilter = JSON.parse( JSON.stringify( cardsfecha ) );

    //limpiamos el objetos para evitar "," y "\n"
    check = clean(cardsfechafilter);

    //creamos nuestro csv
    arrayObjToCsv(cardsfechafilter,check);
}