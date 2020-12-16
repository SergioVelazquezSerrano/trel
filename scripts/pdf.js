function pdf(tamaño){
    /*
    if(document.getElementById("gpdf")){
        document.getElementById("gpdf").remove();

    }
    */

    var doc = new jsPDF();

    for(var i=0; i<tamaño;i++){
        var c = "#"+i
        doc.fromHTML($(c).html(),15,15,{"width":150})
        doc.addPage();
    }

    //doc.fromHTML($("#tar").html(),15,15,{"width":150})
    doc.save('pru.pdf');

}

/*
function pdf(cardsfecha){
    var doc = new jsPDF();
    doc.setFontSize(10);
    var text ="";

    for( var i=0; i<cardsfecha.length; i++){
        for (const prop in cardsfecha[i]) {

            var aux = cardsfecha[i][prop];
            if(Array.isArray(aux)){
                text = text+aux.toLocaleString()+"\n";
            }else{
                text = text+String(cardsfecha[i][prop]+"\n");
            }
          }
          console.log("folio"+ i +" "+text.length);
          doc.text(20, 20, text);
          doc.addPage();
          if(text.length>=1000){
              var c = text.substr(1000,text.length);
              console.log(c);
              doc.text(20, 20, c);
              doc.addPage();
          }
          text ="";
    }
    doc.save('documento.pdf');

}*/
