function Members(id,name){
    this.id = id;
    this.name = name;
}

function getMembers(memberslist,boardNo,key,token) {

    var xmlhttpBoardName = new XMLHttpRequest();
    var boardNameUrl =  "https://api.trello.com/1/boards/" + boardNo + "/members/?key=" + key + "&token=" + token ;

    xmlhttpBoardName.onreadystatechange = function() {
        if (xmlhttpBoardName.readyState === 4 && xmlhttpBoardName.status === 200) {
            var members = JSON.parse(xmlhttpBoardName.responseText);
            for(var i = 0; i<members.length; i++){
                var id = members[i]["id"];
                var name = members[i]["username"];
                var member = new Members(id,name);
                memberslist.push(member);
            }
        }
    }
    xmlhttpBoardName.open("GET", boardNameUrl, false);
    xmlhttpBoardName.send();
    
    return memberslist;

}
