function filtrosbusq(){

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


    var filtros = [];
    filtros.push(dateIni);
    filtros.push(dateEnd);
    filtros.push(dateEndsBool);
    filtros.push(checkmembers);
    filtros.push(ctags);


    return filtros;
}