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
var labels = [];

var check=0;
var links =[];
//var links=getLinks(links,key,token)

var cartas = getCards(cartas,boardNo,key,token);
cartas= getLinks(cartas,key,token);
var dates = getdate(dates,boardNo,key,token);
var membreslist = getMembers(membreslist,boardNo,key,token);
var checklist = getCheckList(checklist,boardNo,key,token);
var labels = getLabels(labels,boardNo,key,token);

var cardsfin = modify(cartas,dates,membreslist,checklist);

//console.log(cardsfin);
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