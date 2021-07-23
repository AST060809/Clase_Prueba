window.addEventListener("load", function() {
  //   Declaración de constantes
  // 1 bolivar = 0.000053 USD
  const BOLIVAR_USD = 0.000053;
  // 1 euro = 1,1032 USD
  const EURO_USD = 1.1032;
  // 1 peso cubano = 0.04 USD
  const PESOCUBANO_USD = 0.04;
  // 1 Rublo = 0.0156
  const RUBLO_USD = 0.0156;
  // 1 Peso Dominicano = 0.0190
  const PESODOMINICANO_USD = 0.019;

  //Valores de Input de Monedas.
  var ven = document.getElementById("Venezolana");
  var cub = document.getElementById("Cubana");
  var eur = document.getElementById("Euro");
  var rus = document.getElementById("Ruso");
  var dom = document.getElementById("Dominicana");

  // Valores de Input de Dolares Americanos
  var usd_v = document.getElementById("venez");
  var usd_c = document.getElementById("cub");
  var usd_e = document.getElementById("eur");
  var usd_r = document.getElementById("rus");
  var usd_d = document.getElementById("domi");

  // Captura de boton convertir
  var convertir = document.getElementById("btn-conv");
  // Cactura de boton Borrar
  var borrar = document.getElementById("btn-borr");

  // Evento click del boton convertir
  convertir.addEventListener("click", function() {
    // Invoco la funcion convertir
    Convertir();
  });
  // Evento click del boton borrar
  borrar.addEventListener("click", function() {
    Borrar();
  });

  function Convertir() {
    let ven_usd, cub_usd, eur_usd, rus_usd, dom_usd;

    if (ven.value <= 0 || isNaN(ven.value) == true) {
      ven.style.border = "0.1rem solid red";
    }
    else if (cub.value <= 0 || isNaN(cub.value) == true) {
      cub.style.border = "0.1rem solid red";
    }
    else if (eur.value <= 0 || isNaN(eur.value) == true) {
      eur.style.border = "0.1rem solid red";
    }
    else if (rus.value <= 0 || isNaN(rus.value) == true) {
      rus.style.border = "0.1rem solid red";
    }
    else if (dom.value <= 0 || isNaN(dom.value) == true) {
      dom.style.border = "0.1rem solid red";
    } else {
      ven.style.border = "none";
      cub.style.border = "none";
      eur.style.border = "none";
      rus.style.border = "none";
      dom.style.border = "none";
      ven_usd = parseFloat(ven.value) * BOLIVAR_USD;
      cub_usd = parseFloat(cub.value) * PESOCUBANO_USD;
      eur_usd = parseFloat(eur.value) * EURO_USD;
      rus_usd = parseFloat(rus.value) * RUBLO_USD;
      dom_usd = parseFloat(dom.value) * PESODOMINICANO_USD;

      usd_v.value = ven_usd.toPrecision(5);
      usd_c.value = cub_usd.toPrecision(5);
      usd_e.value = eur_usd.toPrecision(5);
      usd_r.value = rus_usd.toPrecision(5);
      usd_d.value = dom_usd.toPrecision(5);
    }
  }

  function Borrar() {
    ven.value = " ";
    cub.value = " ";
    eur.value = " ";
    rus.value = " ";
    dom.value = " ";
    usd_v.value = " ";
    usd_c.value = " ";
    usd_e.value = " ";
    usd_r.value = " ";
    usd_d.value = " ";
  }
});
