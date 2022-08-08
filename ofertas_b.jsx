{

var ofertas = ['OFERTA_01','OFERTA_02','OFERTA_03','OFERTA_04'];

function ofertaLeScript(thisObj) {
    
    function ofertaLeScriptBuild(thisObj) {
              var painelLe = (thisObj instanceof Panel) ?
                thisObj :
                new Window("palette", "Ofertas Le", [0, 0, 300, 300], {resizable: true});

              res = "group{orientation:'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                      grupoPrincipal: Group{orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                          titulo: StaticText{text:'Ofertas Le Biscuit'},\
                          ofertas: DropDownList{properties:{items: ['Oferta 01', 'Oferta 02', 'Oferta 03', 'Oferta 04']}},\
                          linha1: EditText{text:'Linha 1'},\
                          linha2: EditText{text:'Linha 2'},\
                          marca: EditText{text:'| Marca'},\
                          referencia: EditText{text:'referencias'},\
                          salvar: Button{text:'salvar'},\
                          titleName: StaticText{text:'@rodrigoansa'},\
                      },\
              }"

              painelLe.grp = painelLe.add(res);
              painelLe.grp.grupoPrincipal.ofertas.selection = 0;

              painelLe.grp.grupoPrincipal.salvar.onClick = function() {
                var dropdownCurrentIndex = painelLe.grp.grupoPrincipal.ofertas.selection.index;
                var linha1 = painelLe.grp.grupoPrincipal.linha1.text;
                var linha2 = painelLe.grp.grupoPrincipal.linha2.text;
                var marca = painelLe.grp.grupoPrincipal.marca.text;
                var referencia = painelLe.grp.grupoPrincipal.referencia.text;

                var input = {
                    index: dropdownCurrentIndex,
                    linha1: linha1,
                    linha2: linha2,
                    marca: marca,
                    referencia: referencia
                };

                salvar(input);
              };
              painelLe.grp.grupoPrincipal.ofertas.onChange = function() {
                var dropdownCurrentIndex = painelLe.grp.grupoPrincipal.ofertas.selection.index;
                var linha1 = painelLe.grp.grupoPrincipal.linha1;
                var linha2 = painelLe.grp.grupoPrincipal.linha2;
                var marca = painelLe.grp.grupoPrincipal.marca;
                var referencia = painelLe.grp.grupoPrincipal.referencia;

                var input = {
                    index: dropdownCurrentIndex,
                    linha1: linha1,
                    linha2: linha2,
                    marca: marca,
                    referencia: referencia
                };
                
                getOferta(input);
              };



            painelLe.grp.grupoPrincipal.salvar.helpTip = "Salva a comp com o texto inserido.";

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
            item.layer(4).property("Source Text").setValue(input.marca.length > 0 ? input.marca : "");
            item.layer(5).property("Source Text").setValue(input.referencia.length > 0 ? input.referencia : "");
        }
    }
}

var getOferta = function(input) {
    for (var it = 1; it <= app.project.numItems; it++){
        var item = app.project.item(it);
        if(item instanceof CompItem && item.name === ofertas[input.index]) {
            input.linha1.text = item.layer(2).property("Source Text").value;
            input.linha2.text = item.layer(3).property("Source Text").value;
            input.marca.text = item.layer(4).property("Source Text").value;
            input.referencia.text = item.layer(5).property("Source Text").value;
        }
    }
}

ofertaLeScript(this);
}