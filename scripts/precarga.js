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
    document.getElementById("preload").style.display = 'inline';    

    //mostramos el nombre de las cartas resultantes con un input tipo number que rellenara usuario si quiere
    var cont ="";
    var pre = document.getElementById("pre");
    var div = document.createElement("div");
    for( var i = 0 ; i< cardsfecha.length; i++ ){
<<<<<<< HEAD
        cont = cont + "<div class='col'>";
        cont = cont + "<div class='row  row-cols-sm-2 row-cols-md-2'><div class='col'>";
        cont = cont + "<p>"+cardsfecha[i]["name"]+"</p>";
        cont = cont + "</div><div class='col'>";
        cont = cont + "<input  id='"+cardsfecha[i]["id"]+"' type='number' value='"+cardsfecha[i]["horas"] + "'/>";
        cont = cont + "</div></div>"
        cont = cont + " </div>";
=======
        cont = cont + "<p>"+cardsfecha[i]["name"].slice(0,120);
        cont = cont + "<input  id='"+cardsfecha[i]["id"]+"' type='number' value='"+cardsfecha[i]["horas"] + "'/>"+"</p>";
>>>>>>> 0a36fdbed7b04789cb4ffecbe02d2fea4b572c29
    }

    div.innerHTML= cont ;
    div.id="preCont";
    div.className="row row-cols-1 row-cols-sm-2 row-cols-md-2 d-flex justify-content-center p-3"; 
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

    div2.innerHTML=  "<input type='submit' id='btnpre' onclick='preca(event)'/>";
    div2.className="row d-flex justify-content-center p-4"
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
    document.getElementById("preload").style.display = 'none';    

    //eliminamos nuestra pagina precarga
    const myNode = document.getElementById("pre");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
}