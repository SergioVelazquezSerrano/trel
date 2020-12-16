<<<<<<< HEAD


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
=======
//rescatamos las cookis las trabajamos para obtener los valores que necesitamos
var res=[];
var cook = document.cookie;

var respuesta= cook.split(";",3);
for(var p = 0 ; p<respuesta.length; p++){
    res.push(respuesta[p].split("=",2));
    //almacenamos nuestras cookies trabajadas
    if(res[p][0]==="key"){
        var key=res[p][1];
>>>>>>> 00c41be111fe9dd1f104db3e534016f8aa3fd387
    }
    if(res[p][0]===" token"){
        var token=res[p][1];
    }
<<<<<<< HEAD

    
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
=======
    if(res[p][0]===" boardNo"){
        var boardNo=res[p][1];
>>>>>>> 00c41be111fe9dd1f104db3e534016f8aa3fd387
    }
}
<<<<<<< HEAD
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




=======

//creamos arrays que necesitaremos a futuro
var cartas=[];
var dates =[];
var membreslist =[];
var cardsfin=[];
var checklist = [];
var labels = [];
var check=0;
var links =[];

//cogemos todas las cartas del tablero
var cartas = getCards(cartas,boardNo,key,token);

//introducimos en dichas cartas sus links
cartas= getLinks(cartas,key,token);

//obtenemos las fechas de creacion de las cartas del tablero
var dates = getdate(dates,boardNo,key,token);

//obtenemos los miembros del tablero
var membreslist = getMembers(membreslist,boardNo,key,token);

//obtenemos los cheklist del tablero
var checklist = getCheckList(checklist,boardNo,key,token);

//obtenemos los labels del tablero
var labels = getLabels(labels,boardNo,key,token);

//modificamos el contenido de nuestras cartas con las fechas, miembros y checklist
var cardsfin = modify(cartas,dates,membreslist,checklist);

//cuando se carga el html de la pagina cremos dinamicamente el form de busqueda por miembros y por labels
window.onload = function dinamic(){
    var mem ="";
    for(var i = 0 ; i < membreslist.length ; i++){
        var memb = document.getElementById("member");
        var div = document.createElement("div");
        mem = mem + "<input type='checkbox' id="+membreslist[i]["name"]+" name="+membreslist[i]["name"]+" value="+membreslist[i]["name"]+"/>";
        mem = mem + "<label for="+membreslist[i]["name"]+">"+ membreslist[i]["name"]+"</label><br>"
    }
    div.innerHTML = mem;
    memb.appendChild(div);

    var tag ="";
    for(var i = 0 ; i < labels.length ; i++){
        if(labels[i]["name"].length>0){
            var id = labels[i]["name"].replaceAll(" ","");
            var tags = document.getElementById("tags");
            var div = document.createElement("div");
            tag = tag + "<input type='checkbox' id="+id+" name="+id+" value="+id+"/>";
            tag = tag + "<label for="+id+">"+ labels[i]["name"]+"</label><br>"    
        }
    }
    div.innerHTML = tag;
    tags.appendChild(div);

}
>>>>>>> 00c41be111fe9dd1f104db3e534016f8aa3fd387
