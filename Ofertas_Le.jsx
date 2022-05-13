//Criar Janela principal.
var MyJanela = new Window("palette", "Ofertas Le", undefined);
//var titulo = MyJanela.add("statictext", undefined, "OFERTAS LE");
MyJanela.orientation = "column";

var PegandoMarca = File("imagensLe/ofertasLe.png");
var Marca = MyJanela.add("image", undefined, PegandoMarca);

var SubTituloOne = MyJanela.add("statictext", undefined, "DESCRIÇÃO");

//Escrever nome dos produto 1, produto 2, Marca e referência.
// Criar botão aplicar para cada um.

var GroupLinhaOne = MyJanela.add("group", undefined, "GroupLinhaOne");
GroupLinhaOne.orientation = "row";

    var produtoOne = GroupLinhaOne.add("edittext", [0,0,180,25],"Produto 1");
    var buttonOne = GroupLinhaOne.add("button", [0,0,45,20], "Aplicar");

var GroupLinhaTwo = MyJanela.add("group", undefined, "GroupLinhaTwo");
GroupLinhaTwo.orientation = "row";

    var produtoTwo = GroupLinhaTwo.add("edittext", [0,0,180,25], "Produto 2");
    var buttonTwo = GroupLinhaTwo.add("button", [0,0,45,20], "Aplicar");

var GroupLinhaThre = MyJanela.add("group", undefined, "GroupLinhaThre");
GroupLinhaThre.orientation = "row";    

    var marca = GroupLinhaThre.add("edittext", [0,0,180,25], "Marca");
    var buttonMarca = GroupLinhaThre.add("button", [0,0,45,20], "Aplicar");

var GroupLinhaFour = MyJanela.add("group", undefined, "GroupLinhaFour");
GroupLinhaFour.orientation = "row";

    var referencia = GroupLinhaFour.add("edittext", [0,0,180,25], "Referências");
    var buttonRef = GroupLinhaFour.add("button", [0,0,45,20], "Aplicar");

//Checkbox se vai ter tags, se tiver abre espaço para adiciona-las.
//Dropdown para selecionar o número de tags de 1 a 4
var painelTags = MyJanela.add("panel", undefined, "Tags");
painelTags.orientation = "row"

var checkTag = painelTags.add("checkbox", undefined, "Habilitar Tags");
var arrayDropTag = ["1 Tag", "2 Tags", "3 Tags", "4 Tags"];
var dropdowTag = painelTags.add("dropdownlist", undefined, arrayDropTag);
dropdowTag.selection = 0;

//Escrever nome tag 1, tag 2, tag, 3 e tag 4

var groupTagOne = MyJanela.add("group", undefined, "groupTagOne");
groupTagOne.orientation = "row";

    var tagOne = groupTagOne.add("edittext", [0,0,120, 25], "Tag 1");
    var buttonTagOne = groupTagOne.add("button", [0,0,40,20], "Aplicar");

var groupTagTwo = MyJanela.add("group", undefined, "groupTagTwo");
groupTagTwo.orientation = "row";

    var tagTwo = groupTagTwo.add("edittext", [0,0,120,25], "Tag 2");
    var buttonTagtwo = groupTagTwo.add("button", [0,0,40,20], "Aplicar");

var groupTagThre = MyJanela.add("group", undefined, "groupTagThre");
groupTagThre.orientation = "row";

    var tagThre = groupTagThre.add("edittext", [0,0,120,25], "Tag 3");
    var buttonTagThre = groupTagThre.add("button", [0,0,40,20], "Aplicar");

var groupTagFour = MyJanela.add("group", undefined, "groupTagFour");
groupTagFour.orientation = "row";

    var tagFour = groupTagFour.add("edittext", [0,0,120,25], "Tag 4");
    var buttonTagFour = groupTagFour.add("button", [0,0,40,20], "Aplicar");


//Dropdwun para selecionar o tipo de ofertas:
//Por, De por, De por parcelado, À partir de, À vista parcelado, Parcelado principal de por, Parcelado principal à vista.
var painelOfertas = MyJanela.add("panel", undefined, "Ofertas");
var arrayDropOfertas = ["Por:", "De por:", "De por parcelado", "À partir de", "À vista parcelado", "Parcelado principal de por", "Parcelado principal à vista"];
var dropdowOfertas = painelOfertas.add("dropdownlist", undefined, arrayDropOfertas);
dropdowOfertas.selection = 0;


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