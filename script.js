// SECTION DEMEL

// create vector tabShow 
var tabShow = new Array(4);

tabShow[0] = ["Iogurte", 335, 470, "IogurteNatMel100", "Natural com Mel", "130g", "8,00"];
tabShow[1] = ["Iogurte", 335, 470, "Iogurtezerolac100", "Zero lactose", "130g", "8,00"];
tabShow[2] = ["Balas", 335, 470, "BalaGengibre100", "de Gengibre e Mel", "60g", "6,00"];
tabShow[3] = ["Balas", 335, 470, "BalaAnis100", "de Mel e Anis", "60g", "6,00"];
tabShow[4] = ["Barra de Cereal", 335, 470, "BarraGranAveiaMel100","de Mel e Granola", "75g", "3,00"];

// create a new tab /- pag html
function Show(tipo) {
  var jan = open("", tabShow[tipo][0], "location=no, status=no, width=" + tabShow[tipo][1] + ",height=" + tabShow[tipo][2] + "");
  with (jan.document) {
      write(`
          <html>
          <head>
            <title>Amigo Urso </title>
            <link rel="stylesheet" type="text/css" href="./style.css">
            <!-- Fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap" rel="stylesheet">
          </head>
          <body>
            <div class="listaComMel" id="itensJan"> 
              <h3> ${tabShow[tipo][0]} </h3>
              <div class=janInfoImg>
                <img src="Imagens/${tabShow[tipo][3]}.jpg"/>
              </div>
              <div class="janInfoDet">
                <p class="pInfoDet">Tipo: ${tabShow[tipo][4]} </p>
                <p class="pInfoDet">Qtd: ${tabShow[tipo][5]} </p>
                <p class="pInfoDet">Preço: R$${tabShow[tipo][6]} </p>
              </div>
              <div class="buttonF">
                <form class="buttonF">
                  <input class="buttonF" type="button" value="Fechar" onClick="window.close();"/>
                </form>
              </div> 
            </div>
          </body>
          </html>
          `); 
      close();
    }
}

// SECTION DABEL 

// Create Arrays and assigning value 
var tabChange = new Array(4);

tabChange[0] = ["Flores Silvestres", "350g", "MelSilvestre100", "20,00"];
tabChange[1] = ["Eucalipto", "450g", "MelEucalipto100", "25,00"];
tabChange[2] = ["Flor de Laranjeira", "750g" , "MelLaranja100", "40,00"];
tabChange[3] = ["Extrato", "30ml", "Propol100", "16,00"];
tabChange[4] = ["Spray", "35ml", "Spray100", "9,00"];

// Create a function who search the tag ids and insert the var inside 
function Change(ind) {
  var titDes = document.getElementById("tipDes");
  var image =  document.getElementById("imgDes");
  var precoDes = document.getElementById("precoDes");
  // select image of folder inside the vector position
  titDes.innerHTML = tabChange[ind][0] + "</br>" + tabChange[ind][1];
  image.src = "./imagens/" + tabChange[ind][2] + ".jpg";
  precoDes.innerHTML = "Preço: R$ " + "<span class='pReal'>" + tabChange[ind][3] + "</span>";  
}

// SECTION PEDIDOS

// Create a function to make a validation of form
function Valida(camp, tam) {
  // take the telef value 
  var i, c; 
  var telef = camp.value;
  // check if telef != tam
  if (telef.length != tam) {
    alert("Telefone " + camp.name + " tem de ter " + tam + " dígitos!");
    telef.focus();
    return false;
  }
  for (i = 0; i < tam; i++) {
    c = telef.charAt(i);
    if ( (c < '0') || (c > '9')) {
      alert("Telefone só pode ter dígitos" + " caracter " + c + " inválido!");
      return false;
    }
  }
  return true; 
}

var tabProd = new Array();

var tabProd = [0,8,8,6,6,3,20,25,40,16,9];

function Compra(sel) {  
  var prod = sel.selectedIndex; 

  if ( prod != 0 ) {
    var src = tabProd[prod];
    
    sel.selectedIndex = 0;
    with ( sel.form ) {
      listaPedidos.value += sel.options[prod].text + '\n';
      TxtTotal.value = src + parseInt(TxtTotal.value);
    }
  }
  else
    alert("Nenhum Produto selecionado!")
}

