function downloadcsv(){
    cardsfecha=[];

    var filtros = filtrosbusq();

    dateIni=filtros[0];
    dateEnd=filtros[1];
    dateEndsBool=filtros[2];
    checkmembers=filtros[3];
    ctags=filtros[4];

    //filtramos nuestras cartas por los campos seleccionados en el formulario
    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    //clonamos porque aqui machacaremos cardsfechafilter en clean
    cardsfechafilter = JSON.parse( JSON.stringify( cardsfecha ) );

    //limpiamos el objetos para evitar "," y "\n"
    check = clean(cardsfechafilter);

    //creamos nuestro csv
    arrayObjToCsv(cardsfechafilter,check);
}