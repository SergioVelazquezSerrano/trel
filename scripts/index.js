

function addDates(){
   
    var cartas=[];
    var dates =[];
    var membreslist =[];
    var cardsfin=[];
    var cardsfecha=[];
    var checklist = [];
    //expresion regular para conexion, host y path
   // var re =/^(\w+):\/\/([^\/]+)([^]+)$/;
    //separador y limitador para separar el path
   // var sep ="/",limit =4;

    let dateIni=document.getElementById("fechIni").value;
    let dateEnd=document.getElementById("fechEnd").value;
    let dateEndsBool=document.getElementById("dataEndBool").checked;
    //let key=document.getElementById("key").value;
   // let token=document.getElementById("token").value;

  //  let boardNo=document.getElementById("boardNo").value;

    //extraccion del id del tablero
  /*
    var answer = re.exec(boardNo);
    answer=answer[3].split(sep, limit);
    boardNo=answer[2];
    */

var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
var boardNo = "sXTJhiXh";
/*var dateIni = "2020-11-23";
var dateEnd = "2020-12-07";
var dateEndsBool = false;
*/

    var cartas = getCards(cartas,boardNo,key,token);
    var dates = getdate(dates,boardNo,key,token);
    var membreslist = getMembers(membreslist,boardNo,key,token);
    var checklist = getCheckList(checklist,boardNo,key,token);

    console.log(checklist);


    var cardsfin = modify(cartas,dates,membreslist);

    //console.log(cardsfin);


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

    
    addHTML(cardsfecha);


   // pdf(cardsfecha.length);


    clean(cardsfecha);


    //arrayObjToCsv(cardsfecha);
    
   // cloneForm();
   
    
}

/*
function addHTML(cardsfecha){
    var tar = document.getElementById("tar");

    var inner = "";

    for( var i = 0; i< cardsfecha.length; i++){
        inner = inner + "<div id="+i+">";
        var cho ="";

        for (const prop in cardsfecha[i]) {

            var aux = cardsfecha[i][prop];
            if(Array.isArray(aux)){
                text = "<b>"+prop + " : </b>" +aux.toLocaleString();
            }else{
                text = "<b>"+prop + " : </b>" +String(cardsfecha[i][prop]);
            }
            cho = cho+"<p>"+text+"</p>";
        }

        inner = inner +cho + "</div>";
    }

    tar.innerHTML = inner;

}
*/
function printTarClone(i){

   
    var div= document.getElementById("tar");
    var cln =div.cloneNode(true);
   
   
    document.getElementById("clon1").appendChild(cln);
    document.getElementById("tar").setAttribute("id", "tar"+i);

    //modificacion de ids 
    document.getElementById("idTar").setAttribute("id", "idTar"+i);   
    document.getElementById("nameTar").setAttribute("id", "nameTar"+i);
    document.getElementById("descTar").setAttribute("id", "descTar"+i);
    document.getElementById("linkTar").setAttribute("id", "linkTar"+i);
    document.getElementById("dateIni").setAttribute("id", "dateIni"+i);
    document.getElementById("dateEnd").setAttribute("id", "dateEnd"+i);
    document.getElementById("numCom").setAttribute("id", "numCom"+i);
    document.getElementById("miemTar").setAttribute("id", "miemTar"+i);
    document.getElementById("stateTar").setAttribute("id", "stateTar"+i);

    document.getElementById("numPag").setAttribute("id", "numPag"+i);
   // document.getElementById("idTar").innerHTML=dates.id;
    //document.getElementById("nameTar").innerHTML=dates.name;
    //document.getElementById("descTar").innerHTML=dates.description;
    //document.getElementById("numCom").innerHTML=dates[3];
    //document.getElementById("linkTar").innerHTML=dates.linkCart;
    
    //document.getElementById("miemTar").innerHTML=dates.membres;
    //document.getElementById("dateIni").innerHTML=dates[6];
    //document.getElementById("dateEnd").innerHTML=dates[7];
    //document.getElementById("stateTar").innerHTML=dates[8];
    //document.getElementById("tagTar").innerHTML=dates.tags;
   // document.getElementById("idTar").innerHTML=id;


}




function addHTML(cardsfecha){
   
   
 for(var i=0; i<cardsfecha.length;i++){
    //crea las tarjetas con un nuevo id para cada una 
    printTarClone(i);
    document.getElementById("numPag"+i).innerHTML=i;
      for (const prop in cardsfecha[i]) {
               //console.log(prop);
            switch(prop){
                case "id":  
                   
                    document.getElementById("idTar"+i).innerHTML=cardsfecha[i].id;
                  
                    break;
                case "name":
                
                    document.getElementById("nameTar"+i).innerHTML=cardsfecha[i].name;
             
                break;
                case "description":   
                  const MAXSIZE = 10;
                  var text=cardsfecha[i].description;
                  

                    if (text.length>MAXSIZE){
                        
                        var resText= text.length-MAXSIZE;
                        var newText= text.slice(0,-resText);
                        
                        document.getElementById("descTar"+i).innerHTML=newText+" ...";  
                    
                        
                    }else{
                        document.getElementById("descTar"+i).innerHTML=cardsfecha[i].description;    
                    }

                break;
                case "linkCart":
                    document.getElementById("linkTar"+i).setAttribute("href", cardsfecha[i].linkCart);
                break;

                case "dateStart":   
                    
                    document.getElementById("dateIni"+i).innerHTML=(cardsfecha[i].dateStart).slice(0,10);  
                 
          
                break;
                case "dateEnd":
                
                    if(cardsfecha[i].dateEnd===null){
                    document.getElementById("dateEnd"+i).innerHTML=" -- ";  
                    }else{
                        document.getElementById("dateEnd"+i).innerHTML=(cardsfecha[i].dateEnd).slice(0,10); 
                    }
                break;
                case "nComent":   
                  
                    document.getElementById("numCom"+i).innerHTML=cardsfecha[i].nComent;
      
                break;
                case "membres":
                    
                    var mem=cardsfecha[i].membres
                   
                    if(mem.length > 0 ){
                        for (const memb in mem) {
                        
                            var li = document.createElement("li");
                            li.innerHTML= mem[memb];
                            document.getElementById("miemTar"+i).appendChild(li);
                        }
                          
                        }else{
                            document.getElementById("miemTar"+i).innerHTML="No existen miembros";
                        }

                    
 
                break;
                case "dateEndsBool":
                        //console.log(cardsfecha[i].dateEndsBool);
                        if(cardsfecha[i].dateEndsBool){
                            document.getElementById("stateTar"+i).innerHTML="Finalizada";
                        }else{
                            document.getElementById("stateTar"+i).innerHTML="Activa";
                        }
                break;
                case "tagscolor":
                    console.log(cardsfecha[i].tags);
                    console.log(cardsfecha[i].tagscolor);

                break;


            
            }
           
          
          
        }
    
       
 }

}   
    
    /*      
     for(var i=0; i<cardsfecha.length; i++){
  
           cloneForm(cardsfecha[i]);
          // console.log(dates1)
           console.log("+++++++++++*********");
       

    }
      */ 




