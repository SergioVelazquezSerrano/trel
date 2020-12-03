function search(e){
    //quitamos el evento por defecto del form
    e.preventDefault();

    if(document.getElementById("gcsv")){
        document.getElementById("gcsv").remove();

    }

/*var dateIni = "2020-11-23";
var dateEnd = "2020-12-07";
var dateEndsBool = false;
*/

    //rescatamos las cookis las trabajamos para obtener los valores que necesitamos
    
    //console.log(checklist);
    //console.log("finales")
    //console.log(cardsfin);
    //console.log(cardsfin[16]["idchecklist"]);

    var cardsfecha=[];



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
   console.log("antes de descargar")
   console.log(cardsfecha);

   var tar = document.getElementById("generarcsv");
   var div = document.createElement("div");
   div.innerHTML= "<input id='gcsv'type='submit' value='GenerarCSV'  onclick='downloadcsv()'  class='btn btn-primary'/>";
   tar.appendChild(div);





    
    
}
