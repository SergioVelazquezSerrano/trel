

function addDates(){
    var cartas=[];
    var dates =[];
    var membreslist =[];
    var cardsfin=[];
    var cardsfecha=[];
    var csv = [];

    //expresion regular para conexion, host y path
    var re =/^(\w+):\/\/([^\/]+)([^]+)$/;
    //separador y limitador para separar el path
    var sep ="/",limit =4;

    let dateIni=document.getElementById("fechIni").value;
    let dateEnd=document.getElementById("fechEnd").value;
    let dateEndsBool=document.getElementById("dataEndBool").checked;
    /*let key=document.getElementById("key").value;
    let token=document.getElementById("token").value;
    */
    let boardNo=document.getElementById("boardNo").value;

    //extraccion del id del tablero
    var answer = re.exec(boardNo);
    answer=answer[3].split(sep, limit);
    boardNo=answer[2];

var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
//var boardNo = "sXTJhiXh";
/*var dateIni = "2020-11-23";
var dateEnd = "2020-12-07";
var dateEndsBool = false;
*/

    var cartas = getCards(cartas,boardNo,key,token);
    var dates = getdate(dates,boardNo,key,token);
    var membreslist = getMembers(membreslist,boardNo,key,token);

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
    console.log(cardsfecha);


    clean(cardsfecha);


    arrayObjToCsv(cardsfecha);
    

}

