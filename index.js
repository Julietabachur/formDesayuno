alert("A continuacion te daremos opciones para armar tu desayuno");
let eleccionTorta = 0;
let eleccionSalado = 0;
let eleccionBebida = 0;
let eleccionRegalo = 0;

let precioChocotorta = 400;
let precioPastafrola = 350;
let precioChipa = 250;
let precioSandwich = 500;
let precioCafe = 300;
let precioLimonada = 250;
let precioTaza = 700;
let precioPeluche = 1500;

let armadoDesayuno = () => {

  let opcionTorta = "Seleccione la torta deseada\n";
  opcionTorta += "1. Chocotorta\n";
  opcionTorta += "2. Pastafrola\n";

  while (eleccionTorta != 1 && eleccionTorta != 2) {
    eleccionTorta = parseInt(prompt(opcionTorta));
    switch (eleccionTorta) {
      case 1: {
        alert("El valor de la chocotorta es: $" + precioChocotorta);
        break;
      }

      case 2: {
        alert("El valor de la pastafrola es de: $" + precioPastafrola);
        break;
      }

      default:
        {
          alert("Elija una torta para continuar");
        }
        break;
    }
  }

  let opcionSalado = "Seleccione algo salado\n";
  opcionSalado += "1. Chipa\n";
  opcionSalado += "2. Sandwich de jyq\n";

  while (eleccionSalado != 1 && eleccionSalado != 2) {
    eleccionSalado = parseInt(prompt(opcionSalado));
    switch (eleccionSalado) {
      case 1: {
        alert("Son 3 chipas grandes y el valor es: $" + precioChipa);
        break;
      }

      case 2: {
        alert("El valor del sandwich es de: $" + precioSandwich);
        break;
      }

      default:
        {
          alert("Elija algo salado para continuar");
        }
        break;
    }
  }

  let opcionBebida = "Seleccione la bebida deseada\n";
  opcionBebida += "1. Cafe\n";
  opcionBebida += "2. Limonada\n";

  while (eleccionBebida != 1 && eleccionBebida != 2) {
    eleccionBebida = parseInt(prompt(opcionBebida));
    switch (eleccionBebida) {
      case 1: {
        alert("El valor del cafe con leche es de: $" + precioCafe);
        break;
      }

      case 2: {
        alert("El valor de la limonada es de: $" + precioLimonada);
        break;
      }

      default:
        {
          alert("Elija algo de beber para continuar");
        }
        break;
    }
  }


  if (confirm("Le gustaria agregar un regalo?"))  {
    
      eleccionRegalo = 0;

      let opcionRegalo = "Seleccione un regalo\n";
      opcionRegalo += "1. Taza\n";
      opcionRegalo += "2. Peluche\n";

      while (eleccionRegalo != 1 && eleccionRegalo != 2) {
        eleccionRegalo = parseInt(prompt(opcionRegalo));

        switch (eleccionRegalo) {
          case 1: {
            alert("El valor de la taza es de: $" + precioTaza+" y su desayuno incluye: \n"+eleccionTorta+"\n"+eleccionSalado+"\n"+eleccionBebida+"\n"+eleccionRegalo);
            break;
          }

          case 2: {
            alert("El valor del peluche es de: $" + precioPeluche+" y su desayuno incluye: \n"+eleccionTorta+"\n"+eleccionSalado+"\n"+eleccionBebida+"\n"+eleccionRegalo);
            break;
          }
        }
      }
    } else {
      alert("Si no desea agregar un regalo, su desayuno contiene: \n" + eleccionTorta +"\n" + eleccionSalado +"\n" + eleccionBebida );
    }

};


armadoDesayuno();
