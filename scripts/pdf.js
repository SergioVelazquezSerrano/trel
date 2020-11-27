function pdf(cardsfecha){
    var doc = new jsPDF();
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









}