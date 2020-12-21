function pdf(){

    cardsfecha=[];

    var filtros = filtrosbusq();

    dateIni=filtros[0];
    dateEnd=filtros[1];
    dateEndsBool=filtros[2];
    checkmembers=filtros[3];
    ctags=filtros[4];

    var cardsfecha = filter(cardsfecha,cardsfin,dateIni,dateEnd,dateEndsBool,checkmembers,ctags);

    
    var c = document.createElement('canvas');
    var img = document.getElementById('Img1');
    c.height = 80;
    c.width = 200;
    var ctx = c.getContext('2d');

    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();
    

    var doc = {
        pageOrientation: 'landscape',
        pageMargins: [ 60, 40, 60, 40 ],
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
                //var hctag = colorToHex(ctag);
                if(ctag==="black" || ctag==="red" || ctag==="purple" || ctag==="green" || ctag==="blue"){
                    letracolor = "white";
                }else{
                    letracolor="black"
                }
                if(ctag==="sky"){
                    letracolor="black"
                    ctag="aqua";
                }
                var aux ={ width:"*", text: ntag , style:{background:ctag, color:letracolor}}
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
                        ictexto = { width:"*", style:{fontSize:10},text: iccname + " " + iccstate}
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
                        image:base64String
                    },
                    {
                        columns: [  {
                                        stack: [    { 
                                                        columns:[                                                           
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
                                                        style:{background:dateBStyle, color:"white"}
                                                    }
                                                ],
                                                columnGap:10
                                    },                     
                                ],
                                margin:[0,10,0,0]
                    },      
                    {
                        text:"ETIQUETAS",
                        margin:[0,10,0,0]
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
                        text:cardsfecha[i].membres.toLocaleString().replaceAll(","," , "),
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
                                                        text:textd,
                                                        style:{fontSize:10}
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
}
