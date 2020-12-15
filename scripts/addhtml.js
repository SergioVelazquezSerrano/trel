function addHTML(){
    cardsfecha=[];

    var filtros = filtrosbusq();

    console.log(filtros)
    dateIni=filtros[0];
    dateEnd=filtros[1];
    dateEndsBool=filtros[2];
    checkmembers=filtros[3];
    ctags=filtros[4];

    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);


    var div = document.getElementById("tar");
    for(var i=0; i<cardsfecha.length; i++){
        var copy = div.cloneNode(true);
        copy.removeAttribute("hidden");
        var copy2 = document.getElementById("clon1");

        var di = document.createElement("div");
        di.innerHTML="<div id='"+i+"id'>";
        copy2.appendChild(di);
        var jo = document.getElementById(""+i+"id");
        jo.appendChild(copy);
        document.getElementById("tar").setAttribute("id", "tar"+i);
        document.getElementById("idTar").setAttribute("id", "idTar"+i);
        document.getElementById("linkTar").setAttribute("id", "linkTar"+i);
        document.getElementById("nameTar").setAttribute("id", "nameTar"+i);
        document.getElementById("dateIni").setAttribute("id", "dateIni"+i);
        document.getElementById("dateEnd").setAttribute("id", "dateEnd"+i);
        document.getElementById("stateTar").setAttribute("id", "stateTar"+i);
        document.getElementById("tagTar").setAttribute("id", "tagTar"+i);
        document.getElementById("descTar").setAttribute("id", "descTar"+i);
        document.getElementById("miemTar").setAttribute("id", "miemTar"+i);
        document.getElementById("numCom").setAttribute("id", "numCom"+i);
        document.getElementById("horasTag").setAttribute("id", "horasTag"+i);
        document.getElementById("numPag").setAttribute("id", "numPag"+i);



        var pag = document.createElement("p");
        pag.innerHTML=" "+(i+1)+" ";
        pag2=document.getElementById("numPag"+i);
        pag2.appendChild(pag);                 


        for (const prop in cardsfecha[i]) {
                switch(prop){
                    case"id":
                        var p = document.createElement("p");
                        p.innerHTML=" "+cardsfecha[i].id+" ";
                        po2=document.getElementById("idTar"+i);
                        po2.appendChild(p);                 
                    break;
                    case "linkCart":
                        var a = document.createElement("div");
                        a.innerHTML="<a href='"+cardsfecha[i].linkCart+"' >'"+cardsfecha[i].linkCart+"'</a>";
                        a2=document.getElementById("linkTar"+i);
                        a2.appendChild(a);
                    break;
                    case "name":
                        var n = document.createElement("p");
                        n.innerHTML=" "+cardsfecha[i].name+" ";
                        p2 = document.getElementById("nameTar"+i);
                        p2.appendChild(n);
                    break;
                    case "dateStart":
                        var d = document.createElement("p");
                        if(cardsfecha[i].dateStart!=""){
                            var date = cardsfecha[i].dateStart.slice(0,10);
                            d.innerHTML=" "+date+" ";
                        }else{
                            d.innerHTML=" No Existe ";
                        }
                        d2 = document.getElementById("dateIni"+i);
                        d2.appendChild(d);
                    break;
                    case "dateEnd":
                        var d = document.createElement("p");
                        if(cardsfecha[i].dateEnd!=null){
                            var date = cardsfecha[i].dateEnd.slice(0,10);
                            d.innerHTML=" "+date+" ";
                        }else{
                            d.innerHTML=" No Existe ";
                        }
                        d2 = document.getElementById("dateEnd"+i);
                        d2.appendChild(d);    
                    break;
                    case "dateEndsBool":
                        var d = document.createElement("p");
                        if(cardsfecha[i].dateEndsBool===true){
                            d.innerHTML=" Terminada ";
                        }else{
                            d.innerHTML=" No Terminada ";
                        }
                        d2 = document.getElementById("stateTar"+i);
                        d2.appendChild(d);    
                    break;
                    case "tags":
                        if(cardsfecha[i].tags.length>0){
                            for( var t = 0 ; t<cardsfecha[i].tags.length ; t++){
                                var nt = document.createElement("div");
                                nt.innerHTML=""+cardsfecha[i].tags[t]+"";
                                nt.style.background=cardsfecha[i].tagscolor[t];
                                if(cardsfecha[i].tagscolor[t]==="black"){
                                    nt.style.color="white";
                                }
                                nt.style.borderRadius="50px"
                                nt2 = document.getElementById("tagTar"+i);
                                nt2.appendChild(nt);
                            }
                        }
                    break;
                    case "description":
                        var de = document.createElement("p");
                        if(cardsfecha[i].description.length>120){
                            var text = cardsfecha[i].description.slice(0,117);
                            text = text +"..."
                        }else{
                            var text=cardsfecha[i].description;
                        }
                        de.innerHTML=" "+text+" ";
                        de2 = document.getElementById("descTar"+i);
                        de2.appendChild(de);
                    break;
                    case "membres":
                        if(cardsfecha[i].membres.length>0){
                            for( var t = 0 ; t<cardsfecha[i].membres.length ; t++){
                                var m = document.createElement("li");
                                m.innerHTML=""+cardsfecha[i].membres[t]+"";
                                m2 = document.getElementById("miemTar"+i);
                                m2.appendChild(m);
                            }
                        }
                    break;
                    case "nComent":
                        var nc = document.createElement("p");
                        nc.innerHTML=" "+cardsfecha[i].nComent+" ";
                        ncp2 = document.getElementById("numCom"+i);
                        ncp2.appendChild(nc);
                    break;
                    case"horas":
                        var h = document.createElement("p");
                        h.innerHTML=" "+cardsfecha[i].horas+" ";
                        h2=document.getElementById("horasTag"+i);
                        h2.appendChild(h);                 
                    break;


                    


                }
            }
            
        }
}

