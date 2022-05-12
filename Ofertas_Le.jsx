//Criar Janela principal.
var MyJanela = new Window("palette", "Ofertas Le", undefined);
//var titulo = MyJanela.add("statictext", undefined, "OFERTAS LE");
MyJanela.orientation = "column";

var PegandoMarca = File("imagensLe/ofertasLe.png");
var Marca = MyJanela.add("iconbutton", undefined, PegandoMarca, {style: "toolbutton"});

var SubTituloOne = MyJanela.add("statictext", undefined, "DESCRIÇÃO");


//Escrever nome dos produto 1, produto 2, Marca e referência.
var textGroup = MyJanela.add("group", undefined, "");
textGroup.orientation = "column";
textGroup.size = [300, 600];

var produtoOne = textGroup.add("edittext", undefined,"Produto 1");
var produtoTwo = textGroup.add("edittext", undefined, "Produto 2");
var marca = textGroup.add("edittext", undefined, "Marca");
var referencia = textGroup.add("edittext", undefined, "Referências");

//Definindo o tamanho das caixas de textos.
produtoOne.size = [180, 25];
produtoTwo.size = [180, 25];
marca.size = [180, 25];
referencia.size = [180, 25];

// Criar botão aplicar para cada um.
var grupoBotao = MyJanela.add("group", undefined, "grupoBotao");
grupoBotao.orientation = "row";

var buttonOne = grupoBotao.add("button", undefined, "Aplicar");



//Checkbox se vai ter tags, se tiver abre espaço para adiciona-las.
//Radio button para selecionar o número de tags de 1 a 4
//Escrever nome tag 1, tag 2, tag, 3 e tag 4

//Radiobutton para selecionar o tipo de ofertas:
//Por, De por, De por parcelado, À partir de, À vista parcelado, Parcelado principal de por, Parcelado principal à vista.

//Por:
//Escrever valor Por.

//De por:
//Escrever valor de.
//Escrever valor por.

//De por parcelado:
//Escrever valor de.
//Escrever valor por.
//Escrever parcela.
//Escrever valor parcela.

//À partir de:
//Escrever valor de.

//À vista parcelado:
//Escrever valor à vista.
//Escrever parcela.
//Escrever valor parcela.

//Parcelado principal de por:
//Escrever parcela.
//Escrever valor parcela.
//Escrever valor de.
//Escrever valor por.

//Parcelado principal à vista:
//Escrever parcelado.
//Escrever valor parcela.
//Escrever valor à vista.

//Encerrar
MyJanela.center(); 
MyJanela.show();