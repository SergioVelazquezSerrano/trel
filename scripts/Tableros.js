function Tableros(id,name){
    this.id = id;
    this.name = name;
}

//hacemos una conexion sincrona con metodo get y recuperamos los tableros del usuario 
function getTableros(tableros,username,key,token) {

    var idBoards = [];
    
    //conexion para conseguir los ids de los tableros del usuario
    var xmlhttpBoardId = new XMLHttpRequest();
    var boardIDUrl =  "https://api.trello.com/1/members/"+username+"?key="+key+"&token="+token;
    xmlhttpBoardId.onreadystatechange = function() {
        if (xmlhttpBoardId.readyState === 4 && xmlhttpBoardId.status === 200) {
            var idboards = JSON.parse(xmlhttpBoardId.responseText);
            for( var i=0; i< idboards["idBoards"].length; i++){
                var ids = idboards["idBoards"][i];
                idBoards.push(ids);
            }
        }
    }
    xmlhttpBoardId.open("GET", boardIDUrl, false);
    xmlhttpBoardId.send();

    //iteramos en nuestros ids de los tableros para sacar su nombre
    for(var b = 0 ; b < idBoards.length;b++){
        var xmlhttpBoardName = new XMLHttpRequest();
        var boardNameUrl =  "https://api.trello.com/1/boards/"+idBoards[b]+"?key="+key+"&token="+token;
        xmlhttpBoardName.onreadystatechange = function() {
            if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
                var boards = JSON.parse(xmlhttpBoardName.responseText);
                var id = boards["id"];
                var name = boards["name"];
                var board = new Tableros(id,name);
                tableros.push(board);     
            }
        }
        xmlhttpBoardName.open("GET", boardNameUrl, false);
        xmlhttpBoardName.send();
    }
    
    //devolvemos array objetos con id y nombre de los tableros del usuario
    return tableros;
}
