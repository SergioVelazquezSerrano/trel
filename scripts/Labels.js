function Labels(name){
    this.name = name;
}

//hacemos una conexion sincrona con metodo get y recuperamos los labels del tablero 
function getLabels(labels,boardNo,key,token){

        var xmlhttpBoardName = new XMLHttpRequest();
        var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/labels?key=" + key + "&token=" + token ;
    
        xmlhttpBoardName.onreadystatechange = function() {
            if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
                var labelslist = JSON.parse(xmlhttpBoardName.responseText);
                for( var i = 0; i<labelslist.length; i++){
                    var name = labelslist[i]["name"];
                var label = new Labels(name);
                labels.push(label);
                }
            }
        }
        
        xmlhttpBoardName.open("GET", boardNameUrl, false);
        xmlhttpBoardName.send();
        
        //retornamos los labels
        return labels;
}