function Checklist(id,name,checkitem){
    this.id = id;
    this.name = name;
    this.checkitem =checkitem;
}

function getCheckList(checklist,boardNo,key,token){

        var xmlhttpBoardName = new XMLHttpRequest();
        var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/checklists?key=" + key + "&token=" + token ;
    
        xmlhttpBoardName.onreadystatechange = function() {
            if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
                var checklists = JSON.parse(xmlhttpBoardName.responseText);
                for( var i = 0; i<checklists.length; i++){
                    var id = checklists[i]["id"];
                    var name = checklists[i]["name"];
                    var checkitem = [];
                    for(var j =0 ; j<checklists[i]["checkItems"].length; j++){
                        checkitem.push({"name":checklists[i]["checkItems"][j]["name"],"state":checklists[i]["checkItems"][j]["state"]});
                    }
                var check = new Checklist(id,name,checkitem);
                checklist.push(check);
                }
                
            }
        }
        
        xmlhttpBoardName.open("GET", boardNameUrl, false);
        xmlhttpBoardName.send();
        
        return checklist;
    
}