function Links(name,type,link){
    this.name = name;
    this.type = type;
    this.link = link;
}

//hacemos una conexion sincrona con metodo get y recuperamos los links(attach) de cada carta
function getLinks(cartas,key,token){

    //iteramos por todas las cartas para obtener el id de la carta y sacar sus links
    for(var i =0; i<cartas.length; i++){
        var attach =[];
        var id = cartas[i]["id"];
        var xmlhttpAttach = new XMLHttpRequest();
        var cardAttach =  "https://api.trello.com/1/cards/" + id + "/attachments?key=" + key + "&token=" + token ;
    
        xmlhttpAttach.onreadystatechange = function() {
            if (xmlhttpAttach.readyState === 4 && xmlhttpAttach.status === 200) {
                var links = JSON.parse(xmlhttpAttach.responseText);

                //iteramos por los links de una carta para guardarlos todos en un array attach
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
    
        //guardamos en cada carta su array de links
        cartas[i]["attach"].push(attach);
    }

    //retornamos las cartas habiendoles puesto ya sus attach
    return cartas;
}
