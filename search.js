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
    


    //console.log(checkmembers);
    
    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    //console.log("filtadas")
    //console.log(cardsfecha);

    /*
    addHTML(cardsfecha);


    pdf(cardsfecha.length);
    */

   var tar = document.getElementById("generarcsv");
   var div = document.createElement("div");
   div.innerHTML= "<input id='gcsv'type='submit' value='GenerarCSV'  onclick='downloadcsv()'  class='btn btn-primary'/>";
   tar.appendChild(div);

    
    
}
