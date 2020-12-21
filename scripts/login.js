function login(ev){
    //quitamos evento submit
    ev.preventDefault();

    var tableros= [];

    //almacenamos las variables key,token y username
    let key=document.getElementById("key").value;
    let token=document.getElementById("token").value;
    let username=document.getElementById("username").value;

    //guardamos en cookie el key y el token
    document.cookie="key="+key;
    document.cookie="token="+token;

    //ocultamos contenido de la pagina para realizar una precarga
    document.getElementById("log").style.display = 'none';
    document.getElementById("selectCheck").style.display = 'inline';

    //guardamos en tableros los tableros de un usuario
    tableros = getTableros(tableros,username,key,token);

    //mostramos los tableros del usuario
    var bor ="";
    var tabl = document.getElementById("tabl");
    const div = document.createElement("div");
            

    for(var i = 0 ; i < tableros.length ; i++){
            var id = tableros[i]["id"];
            var name = tableros[i]["name"];
            bor = bor + "<div class='col '><input type='checkbox' id="+id+" value="+id+"/>";
            bor = bor + "<label for="+id+">"+ name+"</label> </div>"    
        }
    
    div.innerHTML = bor;
    div.className="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-center";
    tabl.appendChild(div);

    //asignamos evento onchange a cada input checkbox para que seleccione dicho input para trabajar con el
    for( var b = 0 ; b< tableros.length; b++){
        document.getElementById(tableros[b]["id"]).onchange = function(targ) {
            var idtarget = targ.target.id;
            for( var t= 0; t<tableros.length; t++){
                if(tableros[t]["id"]===idtarget){
                    //guardamos en cookis el id del tablero
                    document.cookie="boardNo="+idtarget;
                    //redirecionamos a la pagina de filtrados
                    window.location.href="filters.html";
                }
            }
        };
    }
}