function pdf(){

    cardsfecha=[];

    var filtros = filtrosbusq();

    dateIni=filtros[0];
    dateEnd=filtros[1];
    dateEndsBool=filtros[2];
    checkmembers=filtros[3];
    ctags=filtros[4];

    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    /*
    console.log(document.getElementById("tar6").textContent);
    var val = htmlToPdfmake(document.getElementById("tar6").textContent);
    var val2 = htmlToPdfmake(document.getElementById("tar0").textContent);
*/
    var doc = {
        pageOrientation: 'landscape',
        pageMargins: [ 60, 60, 60, 60 ],
        content:[
        ],
        footer:function(currentPage){
            return{
                text: currentPage.toString(),
                alignment:"center"
            }
        }
    }

    for(var i = 0 ; i<cardsfecha.length; i++){
        
        if(cardsfecha[i].dateStart!=""){
            var dateI = cardsfecha[i].dateStart.slice(0,10);
        }else{
            var dateI = "No existe";
        }
        if(cardsfecha[i].dateEnd!=null){
            var dateF = cardsfecha[i].dateEnd.slice(0,10);
        }else{
            var dateF = "No existe";
        }
        if(cardsfecha[i].dateEndsBool===true){
            dateB=" Terminada ";
            dateBStyle="green";
        }else{
            dateB=" No Terminada ";
            dateBStyle="red";
        }



        if(cardsfecha[i].description.length>120){
            var textd = cardsfecha[i].description.slice(0,140);
            textd = textd +"..."
        }else{
            var textd =cardsfecha[i].description;
        }

        if(cardsfecha[i].tags.length>0){
            var tas=[];
            for( var t=0; t<cardsfecha[i].tags.length; t++){
                var ntag = cardsfecha[i].tags[t];
                var ctag = cardsfecha[i].tagscolor[t];
                var aux ={ width:"*", text: ntag , style:{background:ctag}}
                tas.push(aux)
            }
        }else{
            var tas=[];
            tas.push({text: ""})
        }

        if( cardsfecha[i].idchecklist.length>0){
            var icstack = [];
            var icstacktotal = [];
            for( var ic=0; ic<cardsfecha[i].idchecklist.length; ic++){
                var ictext = [];
                var ict =[];
                var icname = cardsfecha[i].idchecklist[ic].name;
                var ictexto = { width:"*",text: icname, style:{bold: true} }
                ictext.push(ictexto); 
                if(cardsfecha[i].idchecklist[ic].checkitem.length>0){
                    for( var icc = 0 ; icc<cardsfecha[i].idchecklist[ic].checkitem.length;icc++){
                        var iccname = cardsfecha[i].idchecklist[ic].checkitem[icc].name
                        var iccstate = cardsfecha[i].idchecklist[ic].checkitem[icc].state
                        ictexto = { width:"*",text: iccname + " " + iccstate}
                        ictext.push(ictexto); 
                    }
                }
                ict.push(ictext);
                icstack.push({stack:ict});
            }
            icstacktotal.push({columns:icstack});
        }else{
            var icstacktotal = [];
            icstacktotal.push({text:""})
        }

        var pag=[   
                    {
                        //imagen
                    },
                    {
                        columns: [  {
                                        stack: [    { 
                                                        columns:[   {                                                          
                                                                        //ID
                                                                        text:"ID ",
                                                                        width:"auto",
                                                                        style:{bold: true}
                                                                    },                                                        
                                                                    {
                                                                        text:cardsfecha[i].id,
                                                                        margin:[10,0]
                                                                    },
                                                                ]
                                                    },
                                                    {
                                                        columns:[
                                                                    {
                                                                        text:"NOMBRE ",
                                                                        width:"auto",
                                                                        style:{bold: true}               
                                                                    },
                                                                    {
                                                                        text:cardsfecha[i].name,
                                                                        margin:[10,0]                
                                                                    }
                                                                ]                                
                                                    }
                                                ],
                                                width:"50%",
                                    },
                                    {
                                        stack: [
                                                    {
                                                        //enlace
                                                        text:"Enlace ",
                                                        style:{bold: true}
                                                    },
                                                    {
                                                        //enlace
                                                        text:cardsfecha[i].linkCart,
                                                        style:{color:"blue"}                                
                                                    },
                                                ],
                                                width:"50%",
                                    }
                                 ]
                    },
                    {
                        columns: [  {
                                        columns:[   {
                                                        width:"auto",
                                                        //fecha inicio
                                                        text:"FECHA INICIO ",
                                                        style:{bold: true}
                                                    },
                                                    {
                                                        width:"auto",
                                                        //fecha inicio
                                                        text:dateI,
                                                    }
                                                ],
                                                columnGap:10
                                    },
                                    {
                                        columns:[   {
                                                        width:"auto",
                                                        //fecha fin
                                                        text:"FECHA FIN ",
                                                        style:{bold: true}
                                                    },
                                                    {
                                                        width:"auto",
                                                        //fecha fin
                                                        text:dateF,
                                                    }
                                                ],                        
                                                columnGap:10
                                    }, 
                                    {
                                        columns:[   {
                                                        width:"auto",
                                                        //STATUS
                                                        text:"STATUS ",
                                                        style:{bold: true}
                                                    },
                                                    {
                                                        width:"*",
                                                        //status
                                                        text:dateB,
                                                        style:{background:dateBStyle}
                                                    }
                                                ],
                                                columnGap:10
                                    },                     
                                ],
                                margin:[0,10,0,0]
                    },      
                    {
                        text:"ETIQUETAS"
                    },
                    //tags
                    {
                        columns:tas,
                        columnGap:5,
                        margin:[0,10,0,0]
                    },
                    {
                        //miembros
                        text:"MIEMBROS ",
                        style:{bold: true},
                        margin:[0,10,0,0]
                    },
                    {
                        text:cardsfecha[i].membres,
                        margin:[0,10,0,0]
                    },
                    {
                        columns: [  
                                    {
                                        stack: [
                                                    {
                                                        text:"DESCRIPCION",
                                                        style:{bold: true}
                                                    },
                                                    {
                                                        text:textd
                                                    }
                                               ],
                                               width:"50%",
                                    },
                                    {
                                        columns: [
                                                    {
                                                        stack:  [ 
                                                                    {
                                                                        text:"COMENTARIOS",
                                                                        margin:[100,0],
                                                                        style:{bold: true}
                                                                    },
                                                                    {
                                                                        text:"HORAS",
                                                                        margin:[100,0],
                                                                        style:{bold: true}
                                                                    }
                                                                ],
                                                    },
                                                    {
                                                        stack:  [
                                                                    {
                                                                        text:cardsfecha[i].nComent,
                                                                    },
                                                                    {
                                                                        text:cardsfecha[i].horas,
                                                                    }, 
                                                                ],
                                                    }
                                               ],
                                               width:"50%",
                                    },
                                 ],
                                 margin:[0,10,0,0]
                    },
                    {
                        //check
                        text:"CHECKLIST ",
                        style:{bold: true},
                        margin:[0,10,0,0]
                    },
                    {
                        columns: icstacktotal,
                        margin:[0,10,0,0]
                    },                                       
                    {
                        //salto pagina
                        text:"",
                        pageBreak:"after"
                    }
                ]

        doc.content.push(pag);
    }

    
    
    pdfMake.createPdf(doc).download();
    /*
    const $elementoParaConvertir = document.getElementById("clon1"); // <-- Aquí puedes elegir cualquier elemento del DOM
html2pdf()
    .set({
        margin: 1,
        filename: 'documento.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 3, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
        },
        jsPDF: {
            unit: "in",
            format: "a3",
            orientation: 'portrait' // landscape o portrait
        }
    })
    .from($elementoParaConvertir)
    .save()
    .catch(err => console.log(err));
*/
    /*
    if(document.getElementById("gpdf")){
        document.getElementById("gpdf").remove();

    }
    */
/*
    var doc = new jsPDF();

    for(var i=0; i<25;i++){
        var c = "#"+i+"id";
        var source = window.document.getElementById(c);
        doc.fromHTML(source,15,15,{"width":1200})
        doc.addPage();
    }
    doc.save("prueba.pdf");
*/

    /*doc.fromHTML($("#prueba").html(),15,15,{"width":150},

    setTimeout(function () {
        doc.save('fileName.pdf');
    }, 0))
    doc.save('pru.pdf');
*/



//function pdf(cardsfecha){
/*
    cardsfecha=[];

    var filtros = filtrosbusq();

    dateIni=filtros[0];
    dateEnd=filtros[1];
    dateEndsBool=filtros[2];
    checkmembers=filtros[3];
    ctags=filtros[4];

    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    
console.log(cardsfecha)
    var doc = new jsPDF();
    doc.setFontSize(10);
    var text ="";

    for( var i=0; i<cardsfecha.length; i++){
        for (const prop in cardsfecha[i]) {

            var aux = cardsfecha[i][prop];
            if(Array.isArray(aux)){
                text = text+prop+aux.toLocaleString()+"\n";
            }else{
                text = text+prop+String(cardsfecha[i][prop]+"\n");
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
*/
}












/*
    var quotes = document.getElementById('clon1');

    html2canvas(quotes, {
        onrendered: function(canvas) {

        //! MAKE YOUR PDF
        var pdf = new jsPDF('p', 'pt', 'letter');

        for (var i = 0; i <= quotes.clientHeight/980; i++) {
            //! This is all just html2canvas stuff
            var srcImg  = canvas;
            var sX      = 0;
            var sY      = 980*i; // start 980 pixels down for every new page
            var sWidth  = 900;
            var sHeight = 980;
            var dX      = 0;
            var dY      = 0;
            var dWidth  = 900;
            var dHeight = 980;

            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', 900);
            onePageCanvas.setAttribute('height', 980);
            var ctx = onePageCanvas.getContext('2d');
            // details on this usage of this function: 
            // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
            ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

            // document.body.appendChild(canvas);
            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

            var width         = onePageCanvas.width;
            var height        = onePageCanvas.clientHeight;

            //! If we're on anything other than the first page,
            // add another page
            if (i > 0) {
                pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
            }
            //! now we declare that we're working on that page
            pdf.setPage(i+1);
            //! now we add content to that page!
            pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

        }
        //! after the for loop is finished running, we save the pdf.
        pdf.save('test.pdf');
    }
  });

  */