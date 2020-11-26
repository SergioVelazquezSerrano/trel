function Creations(id,date){
    this.id = id;
    this.date = date;
}

function getdate(dates,boardNo,key,token) {

    var xmlhttpBoardName = new XMLHttpRequest();
    var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/?actions=createCard&key=" + key + "&token=" + token;
    
    xmlhttpBoardName.onreadystatechange = function() {
        if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
            var actions = JSON.parse(xmlhttpBoardName.responseText);
            for( var i = 0 ; i<actions["actions"].length; i++){
                var date = actions["actions"][i]["date"];
                var id = actions["actions"][i]["data"]["card"]["id"];
                var datecreation = new Creations(id, date);
                dates.push(datecreation);
            }
        }
    }

    xmlhttpBoardName.open("GET", boardNameUrl, false);
    xmlhttpBoardName.send();
    
    return dates;

}
