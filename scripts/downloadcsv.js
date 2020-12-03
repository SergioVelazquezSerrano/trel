function downloadcsv(){
    if(document.getElementById("gcsv")){
        document.getElementById("gcsv").remove();
        cardsfecha=[];

    }




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


    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool);

    //clonamos porque aqui machacaremos cardsfechafilter en clean
    cardsfechafilter = JSON.parse( JSON.stringify( cardsfecha ) );

    check = clean(cardsfechafilter);

    console.log("limpiar")
    console.log(cardsfechafilter);
    console.log(cardsfin);


    arrayObjToCsv(cardsfechafilter,check);
    console.log(cardsfecha);

}