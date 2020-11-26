
var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
var boardNo = "sXTJhiXh";
var ini = "2020-11-23";
var fin = "2020-12-07";
var cartas=[];
var dates =[];
var membreslist =[];
var cardsfin=[];
var cardsfecha=[];

function addDates(){
    let dateIni=document.getElementById("fechIni").value;
    let dateEnd=document.getElementById("fechEnd").value;
    let key=document.getElementById("key").value;
    let token=document.getElementById("token").value;
    let boardNo=document.getElementById("boardNo").value;
    let dateEndsBool=document.getElementById("dataEndBool").checked;
    //expresion regular para extraer el id de la url
    
    let id=new RegExp("a a");
    console.log(dateIni);
    console.log(dateEnd);
    console.log(key);
    console.log(token);
    console.log(boardNo);
    console.log(dateEndsBool);
}

function expres(){
    var URL = "https://www.midominio.com/b/document/indice1.txt";
    console.log(URL);
    var re =/^(\w+):\/\/([^\/]+)([^]+)$/;
    var resultado = re.exec(URL);
    console.log(resultado[3]);
    var exp=/^(\w+)([^\/]+)([^]+)$/;
    var resp=re.exec(resultado[3]);
    console.log(resp);

    
}

var cartas = getCards(cartas,boardNo,key,token);
var dates = getdate(dates,boardNo,key,token);
var membreslist = getMembers(membreslist,boardNo,key,token);

var cardsfin = modify(cartas,dates,membreslist);
console.log(cardsfin);

/*var cardsfecha = filter(cardsfecha,cardsfin,ini,fin);
console.log(cardsfecha);*/