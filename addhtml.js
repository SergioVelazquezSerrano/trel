
/*
function addHTML(cardsfecha){
    var tar = document.getElementById("tar");

    var inner = "";

    for( var i = 0; i< cardsfecha.length; i++){
        inner = inner + "<div id="+i+">";
        var cho ="";

        for (const prop in cardsfecha[i]) {

            var aux = cardsfecha[i][prop];
            if(Array.isArray(aux)){
                text = "<b>"+prop + " : </b>" +aux.toLocaleString();
            }else{
                text = "<b>"+prop + " : </b>" +String(cardsfecha[i][prop]);
            }
            cho = cho+"<p>"+text+"</p>";
        }

        inner = inner +cho + "</div>";
    }

    tar.innerHTML = inner;

}
*/

function addHTML(cardsfecha){
    var tar = document.getElementById("tar");
    var copy = tar.cloneNode();

    var inner = "";
    var props =[];
        for (const prop in cardsfecha[0]) {
            props.push(prop);
            var div = document.createElement("div");
            div.innerHTML= prop;
            copy.appendChild(div);
        }
        tar.appendChild(copy);
    console.log(props)


/*
    for( var i = 0; i< cardsfecha.length; i++){
        inner = inner + "<div id="+i+">";
        var cho ="";

        for (const prop in cardsfecha[i]) {

            var aux = cardsfecha[i][prop];
            if(Array.isArray(aux)){
                text = "<b>"+prop + " : </b>" +aux.toLocaleString();
            }else{
                text = "<b>"+prop + " : </b>" +String(cardsfecha[i][prop]);
            }
            cho = cho+"<p>"+text+"</p>";
        }

        inner = inner +cho + "</div>";
    }

    tar.innerHTML = inner;
*/
}
