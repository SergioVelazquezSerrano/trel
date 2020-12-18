function precarga(cardsfecha){

    //ocultamos botones
    document.getElementById("generarcsv").style.display = 'none';
    document.getElementById("generarpdf").style.display = 'none';

    //borramos contenido clon1
    const myNo = document.getElementById("clon1");
    while (myNo.firstChild) {
        myNo.removeChild(myNo.lastChild);
    }
    const myNod = document.getElementById("generarcsv");
        while (myNod.firstChild) {
            myNod.removeChild(myNod.lastChild);
        }
    const myNod1 = document.getElementById("generarpdf");
        while (myNod1.firstChild) {
            myNod1.removeChild(myNod1.lastChild);
    }



    document.getElementById("pre").style.display = 'block';


    //mostramos el nombre de las cartas resultantes con un input tipo number que rellenara usuario si quiere
    var cont ="";
    var pre = document.getElementById("pre");
    var div = document.createElement("div");
    for( var i = 0 ; i< cardsfecha.length; i++ ){
        cont = cont + "<p>"+cardsfecha[i]["name"];
        cont = cont + "<input  id='"+cardsfecha[i]["id"]+"' type='number' value='"+cardsfecha[i]["horas"] + "'/>"+"</p>";
    }

    div.innerHTML= cont + "<br/>"; 
    pre.appendChild(div);

    //iteramos por cada valor del objeto resultante para añadirle a los input number un evento onchange que hara
    //que cuando se modifique dicho valor se guarde en nuestro objeto
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

    //creamos boton submit para nuestro formulario de precarga
    var pre2 = document.getElementById("pre");
    var div2 = document.createElement("div");

    div2.innerHTML=  "<input type='submit' onclick='preca(event)'/>";
    pre2.appendChild(div2);

    //retornamos nuestro objeto final que pudo ser modificado
    return cardsfecha;
}


function preca(ev){
    //quitamos evento del submit
    ev.preventDefault();

    //mostramos nuestra pagina
    document.getElementById("pr").style.display = 'block';
    document.getElementById("generarcsv").style.display = 'block';
    document.getElementById("generarpdf").style.display = 'block';
    addHTML();

    //eliminamos nuestra pagina precarga
    const myNode = document.getElementById("pre");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
}