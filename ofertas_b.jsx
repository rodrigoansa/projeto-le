{

var ofertas = ['OFERTA_01','OFERTA_02','OFERTA_03','OFERTA_04'];

function ofertaLeScript(thisObj) {
    
    function ofertaLeScriptBuild(thisObj) {
              var painelLe = (thisObj instanceof Panel) ?
                thisObj :
                new Window("palette", "Ofertas Le", [0, 0, 300, 300], {resizable: true});

              res = "group{orientation:'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                      descricao: Group{orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                          titulo: StaticText{text:'Descrição'},\
                          ofertas: DropDownList{properties:{items: ['Oferta 01', 'Oferta 02', 'Oferta 03', 'Oferta 04']}},\
                          linha1: EditText{text:'Linha 1'},\
                          linha2: EditText{text:'Linha 2'},\
                          linha3: EditText{text:'Linha 3'},\
                          marca: EditText{text:'| '},\
                          referencia: EditText{text:'Ref: '},\
                          salvarDes: Button{text:'salvar'},\
                      },\
                      tags: Group{orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                          titulo: StaticText{text:'Tags'},\
                          tag: DropDownList{properties:{items: ['1 Tag', '2 Tag', '3 Tag', '4 Tag']}},\
                          tag1: EditText{text:''},\
                          tag2: EditText{text:''},\
                          tag3: EditText{text:''},\
                          tag4: EditText{text:''},\
                          salvarTag: Button{text:'salvar'},\
                          titleName: StaticText{text:'@rodrigoansa'},\
                      },\
              }"

              painelLe.grp = painelLe.add(res);
              painelLe.grp.descricao.ofertas.selection = 0;
              painelLe.grp.tags.tag.selection = 0;

              painelLe.grp.descricao.salvarDes.onClick = function() {
                var dropdownCurrentIndex = painelLe.grp.descricao.ofertas.selection.index;
                var linha1 = painelLe.grp.descricao.linha1.text;
                var linha2 = painelLe.grp.descricao.linha2.text;
                var linha3 = painelLe.grp.descricao.linha3.text;
                var marca = painelLe.grp.descricao.marca.text;
                var referencia = painelLe.grp.descricao.referencia.text;

                var input = {
                    index: dropdownCurrentIndex,
                    linha1: linha1,
                    linha2: linha2,
                    linha3: linha3,
                    marca: marca,
                    referencia: referencia
                };

                salvarDes(input);
              };
              painelLe.grp.descricao.ofertas.onChange = function() {
                var dropdownCurrentIndex = painelLe.grp.descricao.ofertas.selection.index;
                var linha1 = painelLe.grp.descricao.linha1;
                var linha2 = painelLe.grp.descricao.linha2;
                var linha3 = painelLe.grp.descricao.linha3;
                var marca = painelLe.grp.descricao.marca;
                var referencia = painelLe.grp.descricao.referencia;

                var input = {
                    index: dropdownCurrentIndex,
                    linha1: linha1,
                    linha2: linha2,
                    linha3: linha3,
                    marca: marca,
                    referencia: referencia
                };
                
                getOferta(input);
              };

              painelLe.grp.tags.salvarTag.onClick = function() {
                var dropdownCurrentIndex = painelLe.grp.tags.tag.selection.index;
                var tag1 = painelLe.grp.tags.tag1.text;
                var tag2 = painelLe.grp.tags.tag2.text;
                var tag3 = painelLe.grp.tags.tag3.text;
                
                var input = {
                    index: dropdownCurrentIndex,
                    tag1: tag1,
                    tag2: tag2,
                    tag3: tag3,
                    
                };

                salvarTag(input);
              };
              painelLe.grp.tags.tag.onChange = function() {
                var dropdownCurrentIndex = painelLe.grp.tags.ofertas.selection.index;
                var linha1 = painelLe.grp.tags.linha1;
                var linha2 = painelLe.grp.tags.linha2;
                var marca = painelLe.grp.tags.marca;
                var referencia = painelLe.grp.tags.referencia;

                var input = {
                    index: dropdownCurrentIndex,
                    linha1: linha1,
                    linha2: linha2,
                    linha3: linha3,
                    marca: marca,
                    referencia: referencia
                };
                
                gettag(input);
              };



            painelLe.grp.descricao.salvarDes.helpTip = "Salva a comp com o texto inserido.";

            painelLe.layout.layout(true);
            painelLe.grp.minimumSize = painelLe.grp.size;
            painelLe.layout.resize();
            painelLe.onResizing = painelLe.onResize = function () {this.layout.resize();}

            return painelLe;

    }
     // Build script panel
     var myScriptPal = ofertaLeScriptBuild(thisObj);

     if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
         myScriptPal.center();
         myScriptPal.show();
    }
}

var salvar = function(input) {
    for (var it = 1; it <= app.project.numItems; it++){
        var item = app.project.item(it);
        if(item instanceof CompItem && item.name === ofertas[input.index]) {
            item.layer(2).property("Source Text").setValue(input.linha1.length > 0 ? input.linha1 : "");
            item.layer(3).property("Source Text").setValue(input.linha2.length > 0 ? input.linha2 : "");
            item.layer(4).property("Source Text").setValue(input.linha3.length > 0 ? input.linha3 : "");
            item.layer(5).property("Source Text").setValue(input.marca.length > 0 ? input.marca : "");
            item.layer(6).property("Source Text").setValue(input.referencia.length > 0 ? input.referencia : "");
        }
    }
}

var getOferta = function(input) {
    for (var it = 1; it <= app.project.numItems; it++){
        var item = app.project.item(it);
        if(item instanceof CompItem && item.name === ofertas[input.index]) {
            input.linha1.text = item.layer(2).property("Source Text").value;
            input.linha2.text = item.layer(3).property("Source Text").value;
            input.linha3.text = item.layer(4).property("Source Text").value;
            input.marca.text = item.layer(5).property("Source Text").value;
            input.referencia.text = item.layer(6).property("Source Text").value;
        }
    }
}

ofertaLeScript(this);
}