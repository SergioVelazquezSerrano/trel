function addDates(e){
    //quitamos el evento por defecto del form
    e.preventDefault();
/*var dateIni = "2020-11-23";
var dateEnd = "2020-12-07";
var dateEndsBool = false;
*/

    //rescatamos las cookis las trabajamos para obtener los valores que necesitamos
    var res=[];
    var cook = document.cookie;
    
    var respuesta= cook.split(";",3);
    for(var p = 0 ; p<respuesta.length; p++){
        res.push(respuesta[p].split("=",2));
    }

    //almacenamos nuestras cookies trabajadas
    var key =res[0][1];
    var token=res[1][1];
    var boardNo=res[2][1];

    var cartas=[];
    var dates =[];
    var membreslist =[];
    var cardsfin=[];
    var checklist = [];

    var cardsfecha=[];

    var check=0;

    var cartas = getCards(cartas,boardNo,key,token);
    var dates = getdate(dates,boardNo,key,token);
    var membreslist = getMembers(membreslist,boardNo,key,token);
    var checklist = getCheckList(checklist,boardNo,key,token);

    var cardsfin = modify(cartas,dates,membreslist,checklist);
    
    //console.log(checklist);
    //console.log("finales")
    //console.log(cardsfin);
    //console.log(cardsfin[16]["idchecklist"]);



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

    //console.log("filtadas")
    //console.log(cardsfecha);

    /*
    addHTML(cardsfecha);


    pdf(cardsfecha.length);
    */

    check = clean(cardsfecha);

    console.log("limpiar")
    console.log(cardsfecha);


    arrayObjToCsv(cardsfecha,check);
    
    
}
