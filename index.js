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

//traigo el div de la lista y la lista
let divLista = document.getElementById("divLista")
let lista = document.getElementById("lista")
let divTotal = document.getElementById("divTotal")

//funcion precio del desayuno
let preciofinal = () => {
  let totaltexto = document.createElement("p")
  totaltexto.innerText = "El valor total de su desayuno es:"
  divTotal.appendChild(totaltexto)
  const precio = totalDesayuno.reduce( (acc, item) => {return acc += item }, 0 )  
  let totalPrecio = document.createElement("button")
  totalPrecio.innerText = "$"+precio  
  divTotal.appendChild(totalPrecio)  

}

//funcion boton reinicio
let btnReiniciar = () => {
  let botonReiniciar = document.createElement("button")
  botonReiniciar.setAttribute("style")
  divTotal.appendChild(botonReiniciar)
  botonReiniciar.onclick = () =>{
    lista.innerText = ""
    divTotal.innerText = ""
    armadoDesayuno()
  }

}

//funcion armado de desayuno
let armadoDesayuno = () => { 
  lista.innerText = ""
  divTotal.innerText=""
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
        let prodLista = document.createElement("li")
        prodLista.innerText  = `1 porción de: ${chocotorta.nombre}`;
        lista.appendChild(prodLista)
        break;
      }

      case 2: {
        desayuno.push(pastafrola.nombre)
        totalDesayuno.push(pastafrola.precio)
        let prodLista = document.createElement("li")
        prodLista.innerText  = `1 porción de: ${pastafrola.nombre}`; 
        lista.appendChild(prodLista)
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
        let prodLista = document.createElement("li")
        prodLista.innerText  = `1 porción de: ${chipa.nombre}`;
        lista.appendChild(prodLista)
        break;
      }

      case 2: {
        desayuno.push(sandwich.nombre);
        totalDesayuno.push(sandwich.precio);
        let prodLista = document.createElement("li")
        prodLista.innerText  = `1 porción de: ${sandwich.nombre}`;
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
        let prodLista = document.createElement("li")
        prodLista.innerText  = `1 taza de: ${cafe.nombre}`;
        lista.appendChild(prodLista)
        break;
      }

      case 2: {
        desayuno.push(limonada.nombre);
        totalDesayuno.push(limonada.precio);
        let prodLista = document.createElement("li")
        prodLista.innerText  = `1 vaso de: ${limonada.nombre}`;
        lista.appendChild(prodLista)
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
            let prodLista = document.createElement("li")
            prodLista.innerText  = `1 regalo: ${taza.nombre}`;
            lista.appendChild(prodLista)
            preciofinal();
            break;
          }

          case 2: {
            desayuno.push(peluche.nombre)
            totalDesayuno.push(peluche.precio)
            let prodLista = document.createElement("li")
            prodLista.innerText  = `1 regalo: ${peluche.nombre}`;
            lista.appendChild(prodLista)
            preciofinal();
            break;
          }
        }
      }
    } else {
      let prodLista = document.createElement("li")
            prodLista.innerText  = `SIN REGALO`;
            lista.appendChild(prodLista)
            preciofinal();
            btnReiniciar()
            
    }

};

let botonComenzar = document.getElementById("btncomenzar")
botonComenzar.innerText = "¡COMENZAR!"
botonComenzar.onclick = armadoDesayuno

