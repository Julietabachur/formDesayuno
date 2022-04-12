alert("A continuacion te daremos opciones para armar tu desayuno");

//tortas
const chocotorta = new Tortas ("Chocotorta", 400, 1, "Crema de dulce de leche y queso con chocolinas");
const pastafrola = new Tortas ("Pastafrola", 350, "Masa frola rellena de dulce de membrillo");

//salado
const chipa = new Salado ("Chipa", 250, 3, "Chipa casero de 2 quesos" );
const sandwich = new Salado ("Sandwich", 500, 4, "4 triangulos de miga" );

//bebida
const limonada = new Bebida ("Limonada", 250, 1,"Limonada con menta y jengibre");
const cafe = new Bebida ("Cafe", 300, 1, "Cafe con leche");

//regalo
const taza = new Regalo ("Taza", 700, 1, "Taza de cerámica");
const peluche = new Regalo ("Peluche", 1500, 1, "Peluche con corazon");

//arrays vacios de desayuno y precio el desayuno
const desayuno = []
const totalDesayuno = []

//traigo div lista
let divLista = document.getElementById("div-lista")

//funcion precio del desayuno
let preciofinal = () => {
  const precio = totalDesayuno.reduce( (acc, item) => {return acc += item }, 0 )
    alert("El valor total de su desayuno es: $"+ precio );
}

//funcion armado de desayuno
let armadoDesayuno = () => {

  let opcionTorta = "Seleccione la torta deseada\n";
  opcionTorta += "1. Chocotorta\n";
  opcionTorta += "2. Pastafrola\n";

  let eleccionTorta = 0;

  while (eleccionTorta != 1 && eleccionTorta != 2) {
    eleccionTorta = parseInt(prompt(opcionTorta));
    switch (eleccionTorta) {
      case 1: {
        desayuno.push(chocotorta.nombre)
        totalDesayuno.push(chocotorta.precio)
        const lista = document.createElement("ul")
        lista.innerHTML = '<li>1 porción de: ${chocotorta.nombre}</li> ';
        divLista.appendChild(lista)
        break;
      }

      case 2: {
        desayuno.push(pastafrola.nombre)
        totalDesayuno.push(pastafrola.precio)
        const lista = document.createElement("ul")
        lista.innerHTML = '<li>1 porción de: ${pastafrola.nombre}</li>';
        divLista.appendChild(lista)
        break;
      }

      default: {
          alert("Elija una torta para continuar");
        }
        break;
    }
  }

  let opcionSalado = "Seleccione algo salado\n";
  opcionSalado += "1. Chipa\n";
  opcionSalado += "2. Sandwich de jyq\n";

  let eleccionSalado = 0;

  while (eleccionSalado != 1 && eleccionSalado != 2) {
    eleccionSalado = parseInt(prompt(opcionSalado));
    switch (eleccionSalado) {
      case 1: {
        desayuno.push(chipa.nombre);
        totalDesayuno.push(chipa.precio);
        lista.innerHTML = '<li>1 porción de: ${chipa.nombre}</li>';
        divLista.appendChild(lista)
        break;
      }

      case 2: {
        desayuno.push(sandwich.nombre);
        totalDesayuno.push(sandwich.precio);
        lista.innerHTML = '<li>1 ${sandwich.nombre}</li>';
        divLista.appendChild(lista)
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

  let eleccionBebida = 0;

  while (eleccionBebida != 1 && eleccionBebida != 2) {
    eleccionBebida = parseInt(prompt(opcionBebida));
    switch (eleccionBebida) {
      case 1: {
        desayuno.push(cafe.nombre);
        totalDesayuno.push(cafe.precio);
        lista.innerHTML = '<li>1 taza de ${cafe.nombre}</li>';
        divLista.appendChild(lista)
        break;
      }

      case 2: {
        desayuno.push(limonada.nombre);
        totalDesayuno.push(limonada.precio);
        lista.innerHTML = '<li>1 vaso de ${limonada.nombre}</li>';
        divLista.appendChild(lista)
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
    
      let eleccionRegalo = 0;

      let opcionRegalo = "Seleccione un regalo\n";
      opcionRegalo += "1. Taza\n";
      opcionRegalo += "2. Peluche\n";

      while (eleccionRegalo != 1 && eleccionRegalo != 2) {
        eleccionRegalo = parseInt(prompt(opcionRegalo));

        switch (eleccionRegalo) {
          case 1: {
            desayuno.push(taza.nombre)
            totalDesayuno.push(taza.precio)
            lista.innerHTML = '<li>1 ${taza.nombre}</li>';
            divLista.appendChild(lista)
            alert("Su desayuno contiene: " + desayuno.join(", "));
            break;
          }

          case 2: {
            desayuno.push(peluche.nombre)
            totalDesayuno.push(peluche.precio)
            alert("Su desayuno contiene: " + desayuno.join(", "));
            break;
          }
        }
      }
    } else {
      alert("Si no desea agregar un regalo, su desayuno contiene: " + desayuno.join(", "));
    }

};


armadoDesayuno();
preciofinal();
