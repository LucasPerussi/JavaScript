var listAFazer = [];
var listFeito = [];
var c;

function desenha_lista(listAFazer) {
  var n = listAFazer.length;
  //****************************************************************************************** */
  //adiciona conteudo à lista de tasks a fazer
  $("#list").html("");
  for (var i = 0; i < n; i++)
    if (listAFazer[i] == "") {
    } else {
      $("#list").append($("<li></li>").html(listAFazer[i]));
    }
  //monta o array da lista

  return listAFazer;
}

//****************************************************************************************** */
//monta o array para a lista de tasks feitas
function listaFeito(listFeito) {
  var n = listFeito.length;

  //adiciona conteudo à lista pending
  $("#listConcluidos").html("");
  for (var cont = 0; cont < n; cont++)
    $("#listConcluidos").append($("<li></li>").html(listFeito[cont]));

  //monta o array da lista

  return listFeito;
}

//****************************************************************************************** */
$(document).ready(function (ev) {
  //depois que a pagina carregou, executa o codigo js abaixo
  //conteudo do formn:

  $("#list-form").on("submit", function (ev) {
    ev.preventDefault();
    var item;

    preparaArray(c);
    console.log(c);

    listAFazer[c] = $("#item").val();
    $("#item").val("");

    /*listAFazer.push($("#item").val());
    $("#item").val("");*/

    desenha_lista(listAFazer);
    //finaliza a parte do form.
  });

  //****************************************************************************************** */
  //evento de click, que transfere para o grupo de feito

  $("#list").on("click", "li", function (event) {
    var posicao = $(this).index();
    $(this).hide();

    listAFazer[posicao] = "";

    var ta = $(this).html();
    listFeito.push(ta);
    //$("#item").val();

    listaFeito(listFeito);
  });
  return false;
});

//****************************************************************************************** */
//prepara o array, garantindo que os novos dados serão salvos no primeiro espaço livre do array

function preparaArray() {
  var tamanhoArray = listAFazer.length;
  for (c = 0; c < tamanhoArray; c++) {
    if (listAFazer[c] != "") {
    }
    if (listAFazer[c] == "") {
      return c;
    }
  }

  return listAFazer;
}
