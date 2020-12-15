function search(e){
    //quitamos el evento por defecto del form
    e.preventDefault();

    //cogemos filtros
    var filtros = filtrosbusq();

    dateIni=filtros[0];
    dateEnd=filtros[1];
    dateEndsBool=filtros[2];
    checkmembers=filtros[3];
    ctags=filtros[4];
    
    //filtramos nuestras cartas por los campos seleccionados en el formulario
    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    //PRECARGA AQUI!!!!!
    //ocultamos el div de toda la pagina para saltar a precarga
    document.getElementById("pr").style.display = 'none';

    cardsfecha = precarga(cardsfecha);

    /*
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
