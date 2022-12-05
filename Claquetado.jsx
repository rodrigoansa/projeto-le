var MyJanela = new Window("palette", "Ofertas Le v 1.0", undefined);
MyJanela = "column";

var PegandoMarca = File("imagensLe/ofertasLe.png");
var Marca = MyJanela.add("image", undefined, PegandoMarca);

var SubTituloOne = MyJanela.add("statictext", undefined, "DESCRIÇÃO");

//Escrever nome dos produto 1, produto 2, Marca e referência.
// Criar botão aplicar para cada um.
var GroupLinhaOne = MyJanela.add("group", undefined, "GroupLinhaOne");
GroupLinhaOne.orientation = "row";

    var produtoOne = GroupLinhaOne.add("edittext", [0,0,180,25],"Produto 1");
    var buttonOne = GroupLinhaOne.add("button", [0,0,45,20], "Aplicar");