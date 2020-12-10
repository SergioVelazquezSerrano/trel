function search(e){
    //quitamos el evento por defecto del form
    e.preventDefault();

    //borramos contenido de los divs si ya estan creados
    if(document.getElementById("gcsv")){
        document.getElementById("gcsv").remove();
    }
    if(document.getElementById("gpdf")){
        document.getElementById("gpdf").remove();
    }

    var cardsfecha=[];

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

    //PRECARGA AQUI!!!!!
    //ocultamos el div de toda la pagina para saltar a precarga
    document.getElementById("pr").style.display = 'none';

    cardsfecha = precarga(cardsfecha);


    /*
    addHTML(cardsfecha);


    pdf(cardsfecha.length);
    */

    //creamos boton de generarcsv 
    var tar = document.getElementById("generarcsv");
    var div = document.createElement("div");
    div.innerHTML= "<input id='gcsv'type='submit' value='GenerarCSV'  onclick='downloadcsv()'  class='btn btn-primary'/>";
    tar.appendChild(div);

    //creamos boton de generarpdf 
    var tar2 = document.getElementById("generarpdf");
    var div2 = document.createElement("div");
    div2.innerHTML= "<input id='gpdf'type='submit' value='Generarpdf'  onclick='pdf()'  class='btn btn-primary'/>";
    tar2.appendChild(div2);

}
