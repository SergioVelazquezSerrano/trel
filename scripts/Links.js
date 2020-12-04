
function Links(name,type,link){
    this.name = name;
    this.type = type;
    this.link = link;
}


function getLinks(cartas,key,token){


    for(var i =0; i<cartas.length; i++){
        var attach =[];
        var id = cartas[i]["id"];
        var xmlhttpAttach = new XMLHttpRequest();
        var cardAttach =  "https://api.trello.com/1/cards/" + id + "/attachments?key=" + key + "&token=" + token ;
    
        xmlhttpAttach.onreadystatechange = function() {
            if (xmlhttpAttach.readyState === 4 && xmlhttpAttach.status === 200) {
                var links = JSON.parse(xmlhttpAttach.responseText);
                //console.log(links);
    
                for( var i = 0; i<links.length; i++){
                    var name = links[i]["name"];
                    var type = links[i]["mimeType"];
                    var link = links[i]["url"];
                    var obj= new Links(name,type,link);
                    attach.push(obj);
                }
                
            }
        }
        
        xmlhttpAttach.open("GET", cardAttach, false);
        xmlhttpAttach.send();
    
        cartas[i]["attach"].push(attach);


    }



    return cartas;
    
}
