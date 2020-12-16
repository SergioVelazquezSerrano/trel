
//rescatamos las cookis las trabajamos para obtener los valores que necesitamos
var res=[];
var cook = document.cookie;

var respuesta= cook.split(";",3);
for(var p = 0 ; p<respuesta.length; p++){
    res.push(respuesta[p].split("=",2));
    //almacenamos nuestras cookies trabajadas
    if(res[p][0]==="key"){
        var key=res[p][1];

    }
    if(res[p][0]===" token"){
        var token=res[p][1];
    }

    if(res[p][0]===" boardNo"){
        var boardNo=res[p][1];

    }
}


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

