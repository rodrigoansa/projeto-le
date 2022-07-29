//Criar Janela principal.
var MyJanela = new Window("palette", "Ofertas Le v 1.0", undefined);
//var titulo = MyJanela.add("statictext", undefined, "OFERTAS LE ");
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

<<<<<<< Updated upstream
checkTag.onclick = function checkboxTag (checkTag){
    if (checkTag = false ){
        groupTagOne == null;
    } else {
        groupTagOne == on;
    }

} 

=======
>>>>>>> Stashed changes

//Escrever nome tag 1, tag 2, tag, 3 e tag 4
var groupTagOne = MyJanela.add("group", undefined, "groupTagOne");
groupTagOne.orientation = "row";

    var tagOne = groupTagOne.add("edittext", [0,0,120, 25], "Tag 1");
    var buttonTagOne = groupTagOne.add("button", [0,0,45,20], "Aplicar");

var groupTagTwo = MyJanela.add("group", undefined, "groupTagTwo");
groupTagTwo.orientation = "row";

    var tagTwo = groupTagTwo.add("edittext", [0,0,120,25], "Tag 2");
    var buttonTagtwo = groupTagTwo.add("button", [0,0,45,20], "Aplicar");

var groupTagThre = MyJanela.add("group", undefined, "groupTagThre");
groupTagThre.orientation = "row";

    var tagThre = groupTagThre.add("edittext", [0,0,120,25], "Tag 3");
    var buttonTagThre = groupTagThre.add("button", [0,0,45,20], "Aplicar");

var groupTagFour = MyJanela.add("group", undefined, "groupTagFour");
groupTagFour.orientation = "row";

    var tagFour = groupTagFour.add("edittext", [0,0,120,25], "Tag 4");
    var buttonTagFour = groupTagFour.add("button", [0,0,45,20], "Aplicar");


//Dropdwun para selecionar o tipo de ofertas:
//Por, De por, De por parcelado, À partir de, À vista parcelado, Parcelado principal de por, Parcelado principal à vista.
var painelOfertas = MyJanela.add("panel", undefined, "Ofertas");
var arrayDropOfertas = ["Por:", "De por:", "De por parcelado", "À partir de", "À vista parcelado", "Parcelado principal de por", "Parcelado principal à vista"];
var dropdowOfertas = painelOfertas.add("dropdownlist", undefined, arrayDropOfertas);
dropdowOfertas.selection = 0;


//Por:
//Escrever valor Por.
var painelPor = MyJanela.add("panel", undefined, "Precificador");
var groupPorOne = painelPor.add("group", undefined, "groupPorOne");
groupPorOne.orientation = "row";

    var nomeporOne = groupPorOne.add("statictext", undefined, "Por: ");
    var valorPorOne = groupPorOne.add("edittext", [0,0,75,25],"Valor");
    var buttonPorOne = groupPorOne.add("button", [0,0,45,20], "Aplicar");

//De por:
//Escrever valor de.
//Escrever valor por.
var painelDePor = MyJanela.add("panel", undefined, "Precificador");
var groupDeOne = painelDePor.add("group", undefined, "groupDeOne");
groupDeOne.orientation = "row";
var groupPorTwo = painelDePor.add("group", undefined, "groupPorTwo");
groupPorTwo.orientation = "row";

    var nomeDeOne = groupDeOne.add("statictext", undefined, "De:");
    var valorDeOne = groupDeOne.add("edittext", [0,0,75,25], "Valor");
    var buttonDeOne = groupDeOne.add("button", [0,0,45,20], "Aplicar");
    var nomePorTwo = groupPorTwo.add("statictext", undefined, "Por: ");
    var valorPorTwo = groupPorTwo.add("edittext", [0,0,75,25], "Valor");
    var buttonPorTwo = groupPorTwo.add("button", [0,0,45,20], "Aplicar");


//De por parcelado:
//Escrever valor de.
//Escrever valor por.
//Escrever parcela.
//Escrever valor parcela.
var painelDePorPar = MyJanela.add("panel", undefined, "Precificador");
var groupDeTwo = painelDePorPar.add("group", undefined, "groupDeTwo");
groupDeTwo.orientation ="row";
var groupPorThre = painelDePorPar.add("group", undefined, "groupPorThre");
groupPorThre.orientation ="row";
var groupParcOne = painelDePorPar.add("group", undefined, "groupParcone");
groupParcOne.orientation ="row";
var groupVaParcOne = painelDePorPar.add("group", undefined, "groupVaParcone");
groupVaParcOne.orientation ="row"

    var nomeDeTwo = groupDeTwo.add("statictext", undefined, "De:");
    var valorDeTwo = groupDeTwo.add("edittext", [0,0,75,25], "Valor");
    var buttonDeTwo = groupDeTwo.add("button", [0,0,45,20], "Aplicar");
    var nomePorThre = groupPorThre.add("statictext", undefined, "Por: ");
    var valorPorThre = groupPorThre.add("edittext", [0,0,75,25], "Valor");
    var buttonporThre = groupPorThre.add("button", [0,0,45,20], "Aplicar");
    var nomeParcOne = groupParcOne.add("statictext", undefined, "Parc: ");
    var valorParcOne = groupParcOne.add("edittext", [0,0,75,25], "Nº");
    var buttonParcOne = groupParcOne.add("button", [0,0,45,20], "Aplicar");
    var nomeVaParcOne = groupVaParcOne.add("statictext", undefined, "R$:");
    var valorVaParcOne = groupVaParcOne.add("edittext", [0,0,75,25], "Valor");
    var buttonVaParcOne = groupVaParcOne.add("button", [0,0,45,20], "Aplicar");

//À partir de:
//Escrever valor de.
var painelApartir = MyJanela.add("panel", undefined, "Precificador");
var groupApartir = painelApartir.add("group", undefined, "groupApartir");
groupApartir.orientation = "row";

    var nomeApartit = groupApartir.add("statictext", undefined, "À partir:");
    var valorApartit = groupApartir.add("edittext", [0,0,75,25],"Valor");
    var buttonApartir = groupApartir.add("button", [0,0,45,20], "Aplicar");

//À vista parcelado:
//Escrever valor à vista.
//Escrever parcela.
//Escrever valor parcela.
var painelAvista = MyJanela.add("panel", undefined, "Precificador");
var groupAvista = painelAvista.add("group", undefined, "groupAvista");
groupAvista.orientation ="row";
var groupParcTwo = painelAvista.add("group", undefined, "groupAvista");
groupParcTwo.orientation ="row";
var groupVaParcTwo = painelAvista.add("group", undefined, "groupVaParcTwo");
groupVaParcTwo.orientation ="row";

    var nomeAvista = groupAvista.add("statictext", undefined, "À vista:");
    var valorAvista = groupAvista.add("edittext", [0,0,75,25], "Valor");
    var buttonAvista = groupAvista.add("button", [0,0,45,20], "Aplicar");
    var nomeParcTwo = groupParcTwo.add("statictext", undefined, "Parc: ");
    var valorParcTwo = groupParcTwo.add("edittext", [0,0,75,25], "Nº");
    var buttonParcTwo = groupParcTwo.add("button", [0,0,45,20], "Aplicar");
    var nomeVaParcTwo = groupVaParcTwo.add("statictext", undefined, "R$: ");
    var valorVaParcTwo = groupVaParcTwo.add("edittext", [0,0,75,25], "Valor");
    var buttonVaParcTwo = groupVaParcTwo.add("button", [0,0,45,20], "Aplicar");

//Parcelado principal de por:
//Escrever parcela.
//Escrever valor parcela.
//Escrever valor de.
//Escrever valor por.
var painelParcDePor = MyJanela.add("panel", undefined, "Precificador");
var groupParcThre = painelParcDePor.add("group", undefined, "groupParcThre");
groupParcThre.orientation ="row";
var groupVaParcThre = painelParcDePor.add("group", undefined, "groupVaParcThre");
groupVaParcThre.orientation ="row";
var groupDeThre = painelParcDePor.add("group", undefined, "groupDeThre");
groupDeThre.orientation ="row";
var groupPorFour = painelParcDePor.add("group", undefined, "groupPorFour");
groupPorFour.orientation ="row"

    var nomeParcThre = groupParcThre.add("statictext", undefined, "Parc:");
    var valorParcThre = groupParcThre.add("edittext", [0,0,75,25], "Nº:");
    var buttonParcThre = groupParcThre.add("button", [0,0,45,20], "Aplicar");
    var nomeVaParcThre = groupVaParcThre.add("statictext", undefined, "R$:");
    var valorVaParcThre = groupVaParcThre.add("edittext", [0,0,75,25], "Valor");
    var buttonVaParcThre = groupVaParcThre.add("button", [0,0,45,20], "Aplicar");
    var nomeDeThre = groupDeThre.add("statictext", undefined, "De:");
    var valorDeThre = groupDeThre.add("edittext", [0,0,75,25], "Valor:");
    var buttonDeThre = groupDeThre.add("button", [0,0,45,20], "Aplicar");
    var nomePorFour = groupPorFour.add("statictext", undefined, "Por:");
    var valorPorFour = groupPorFour.add("edittext", [0,0,75,25], "Valor");
    var buttonPorFour = groupPorFour.add("button", [0,0,45,20], "Aplicar");

//Parcelado principal à vista:
//Escrever parcela.
//Escrever valor parcela.
//Escrever valor à vista.
var painelParcAvista = MyJanela.add("panel", undefined, "Precificador");
var groupParcFour = painelParcAvista.add("group", undefined, "groupParcFour");
groupParcFour.orientation ="row";
var groupVaParcFour = painelParcAvista.add("group", undefined, "groupVaParcFour");
groupVaParcFour.orientation ="row";
var groupAvistaTwo = painelParcAvista.add("group", undefined, "groupAvistaTwo");
groupAvistaTwo.orientation ="row";

    var nomeParcFour = groupParcFour.add("statictext", undefined, "Parc:");
    var valorParcFoure = groupParcFour.add("edittext", [0,0,75,25], "Nº:");
    var buttonParcFour = groupParcFour.add("button", [0,0,45,20], "Aplicar");
    var nomeVaParcFour = groupVaParcFour.add("statictext", undefined, "R$:");
    var valorVaParcFour = groupVaParcFour.add("edittext", [0,0,75,25], "Valor");
    var buttonVaParcFour = groupVaParcFour.add("button", [0,0,45,20], "Aplicar");
    var nomeAvistaTwoe = groupAvistaTwo.add("statictext", undefined, "À vista:");
    var valorAvistaTwo = groupAvistaTwo.add("edittext", [0,0,75,25], "Valor:");
    var buttonAvistaTwo = groupAvistaTwo.add("button", [0,0,45,20], "Aplicar");

//Encerrar
var assinatura = MyJanela.add("statictext", undefined, "@RodrigoAnsa");
MyJanela.center(); 
MyJanela.show();