function precarga(cardsfecha){


    document.getElementById("generarcsv").style.display = 'none';
    document.getElementById("generarpdf").style.display = 'none';

    var cont ="";
    var pre = document.getElementById("pre");
    var div = document.createElement("div");
    for( var i = 0 ; i< cardsfecha.length; i++ ){
        cont = cont + "<p>"+cardsfecha[i]["name"];
        cont = cont + "<input  id='"+cardsfecha[i]["id"]+"' type='number' value='"+cardsfecha[i]["horas"] + "'/>"+"</p>";
    }

    div.innerHTML= cont + "<br/>"; 
    pre.appendChild(div);


    for( var b = 0 ; b< cardsfecha.length; b++){

        document.getElementById(cardsfecha[b]["id"]).onchange = function(targ) {
            var idtarget = targ.target.id;
            var valuetarget = targ.target.value;
            for( var t= 0; t<cardsfecha.length; t++){
                if(cardsfecha[t]["id"]===idtarget){
                    cardsfecha[t]["horas"]= valuetarget;
                }
            }
        };
    }




    var pre2 = document.getElementById("pre");
    var div2 = document.createElement("div");

    div2.innerHTML=  "<input type='submit' onclick='preca(event)'/>";
    pre2.appendChild(div2);








    return cardsfecha;



}
function preca(ev){
    ev.preventDefault();

    document.getElementById("pr").style.display = 'block';
    document.getElementById("generarcsv").style.display = 'block';
    document.getElementById("generarpdf").style.display = 'block';


    const myNode = document.getElementById("pre");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

}