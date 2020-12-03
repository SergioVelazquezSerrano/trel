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


var check=0;

var cartas = getCards(cartas,boardNo,key,token);
var dates = getdate(dates,boardNo,key,token);
var membreslist = getMembers(membreslist,boardNo,key,token);
var checklist = getCheckList(checklist,boardNo,key,token);

var cardsfin = modify(cartas,dates,membreslist,checklist);


window.onload = function holi(){
    alert("hola");
}