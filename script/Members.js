function Members(id,name){
    this.id = id;
    this.name = name;
}

//var memberslist =[];

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

    //console.log(memberslist);
}



//Ser
//var key ="41768e225598e2bc6430f8ad9fc67059";

//var key ="c42b569af23f3fb74bd843c9fdf476b8";
//Ser
//var token = "2c7a58051244ab195d2e007709434262e22ceeabc7443dd70bb11be0532c44ef"

//var token = "40234d81e307fe1d361e1fc1668b72747dd7c23464202c4457c2799f8f836920";

//var boardNo = "sXTJhiXh";
//getMembers(boardNo,key,token);

