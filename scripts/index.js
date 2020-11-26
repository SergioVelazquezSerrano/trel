

function addDates(){
<<<<<<< HEAD
//expresion regular para conexion, host y path
    var re =/^(\w+):\/\/([^\/]+)([^]+)$/;
//separador y limitador para separar el path    
    var sep ="/",limit =4;

=======
    var cartas=[];
    var dates =[];
    var membreslist =[];
    var cardsfin=[];
    var cardsfecha=[];

    
>>>>>>> 5c0bfc8c65c0469364a1dbbc81416f27e549365b
    let dateIni=document.getElementById("fechIni").value;
    let dateEnd=document.getElementById("fechEnd").value;
    let dateEndsBool=document.getElementById("dataEndBool").checked;
    /*let key=document.getElementById("key").value;
    let token=document.getElementById("token").value;
<<<<<<< HEAD
    
    let url=document.getElementById("boardNo").value;
    //extraccion del id
    var answer = re.exec(url);
    var answer=answer[3].split(sep, limit);
    let boardNo=answer[2];
    let dateEndsBool=document.getElementById("dataEndBool").checked;
    
    console.log(dateIni);
    console.log(dateEnd);
    console.log(key);
    console.log(token);
    console.log(boardNo);
    console.log(dateEndsBool);
  
}

=======
    let boardNo=document.getElementById("boardNo").value;
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

    var cardsfin = modify(cartas,dates,membreslist);

    console.log(cardsfin);
>>>>>>> 5c0bfc8c65c0469364a1dbbc81416f27e549365b


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
    

}

