function login(){

    //expresion regular para conexion, host y path
    var re =/^(\w+):\/\/([^\/]+)([^]+)$/;
    //separador y limitador para separar el path
    var sep ="/",limit =4;

    /*let key=document.getElementById("key").value;
    let token=document.getElementById("token").value;
    */
    //let boardNo=document.getElementById("boardNo").value;

    //extraccion del id del tablero
    /*var answer = re.exec(boardNo);
    answer=answer[3].split(sep, limit);
    boardNo=answer[2];
    */

    /*
var key ="c42b569af23f3fb74bd843c9fdf476b8";
var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
var boardNo = "sXTJhiXh";
*/

    document.cookie="key="+"c42b569af23f3fb74bd843c9fdf476b8";
    document.cookie="token="+"40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";
    document.cookie="boardNo="+"sXTJhiXh";



    window.location.href="filters.html";

}