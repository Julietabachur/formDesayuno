//tortas
const chocotorta = new Producto ("Chocotorta", 400, 1, "Crema de dulce de leche y queso con chocolinas");
const pastafrola = new Producto ("Pastafrola", 350, "Masa frola rellena de dulce de membrillo");

//salado
const chipa = new Producto ("Chipa", 250, 3, "Chipa casero de 2 quesos" );
const sandwich = new Producto ("Sandwich", 500, 4, "4 triangulos de miga" );

//bebida
const limonada = new Producto ("Limonada", 250, 1,"Limonada con menta y jengibre");
const cafe = new Producto ("Cafe", 300, 1, "Cafe con leche");

//regalo
const taza = new Producto ("Taza", 700, 1, "Taza de cerámica");
const peluche = new Producto ("Peluche", 1500, 1, "Peluche con corazon");

//arrays vacios de desayuno y precio el desayuno
let desayuno = []
let totalDesayuno = []

//traigo el fieldset y boton
let fieldset = document.getElementById("fieldset")
let btnguardar = document.getElementById("btnguardar")

//funcion guardar info contacto
function crearUsuario() {
  const nombre = document.getElementById("nombres").value 
  const apellido = document.getElementById("apellidos").value 
  const dni = document.getElementById("dni").value
  const email = document.getElementById("email").value
  const celular = document.getElementById("celular").value 
  new Usuario (nombre, apellido, dni, email, celular)
  localStorage.setItem (Usuario.dni, JSON.stringify(Usuario))
}

function vaciarInputs(){  
  document.getElementById("nombres").value  = ""
  document.getElementById("apellidos").value = ""
  document.getElementById("dni").value = ""
  document.getElementById("email").value = ""
  document.getElementById("celular").value = ""
}

function crearDesayuno() {
  fieldset.innerHTML = `<h3>Hola usuario.nombre ! Ya podes armar tu desayuno.</h3>
                        <p>A continuacion veras las opciones disponibles</p>
                        <p>Elige una porcion de torta</p>                        
                        <input type="radio" name="chocotorta" id="chocotorta">
                        <label for=""></label>
                        <input type="radio" name="pastafrola" id="pastafrola">                       
                        <label for="">Elige una bebida</label>

                        <p>Elige una porcion de torta</p>                        
                        <input type="radio" name="chocotorta" id="chocotorta">
                        <label for=""></label>
                        <input type="radio" name="pastafrola" id="pastafrola">                       
                        <label for="">Elige una bebida</label>
                        <p>Elige una porcion de torta</p>                        
                        <input type="radio" name="chocotorta" id="chocotorta">
                        <label for=""></label>
                        <input type="radio" name="pastafrola" id="pastafrola">                        
                        <label for="">Elige una bebida</label>
                        <p>Elige una porcion de torta</p>                        
                        <input type="radio" name="chocotorta" id="chocotorta">
                        <label for=""></label>
                        <input type="radio" name="pastafrola" id="pastafrola">                        
                        <label for="">Elige una bebida</label>

  
}

//funcion para validar campos
function ejecutarFormulario(e) {
  e.preventDefault()
  if (
    document.getElementById("nombres").value  != "" &&
     document.getElementById("apellidos").value != "" && 
     document.getElementById("dni").value > 0 && 
     document.getElementById("email").value != "" &&
     document.getElementById("celular").value > 0) {
  crearUsuario()
  vaciarInputs()
  }
  else{
    alert("Revise que los campos se hayan completado correctamente y vuelva a intentarlo")
  }

}

//evento para guardar usuario
btnguardar.addEventListener("click", ejecutarFormulario);

// //funcion precio del desayuno
// let preciofinal = () => {
//   const precio = totalDesayuno.reduce( (acc, item) => {return acc += item }, 0 )  
//   let total = document.createElement("p")
//   total.innerText = "El valor total de su desayuno es: $"+ precio
//   divTotal.appendChild(total)   
  

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
            divTotal.appendChild(botonReiniciar)
            break;
          }

          case 2: {
            desayuno.push(peluche.nombre)
            totalDesayuno.push(peluche.precio)
            let prodLista = document.createElement("li")
            prodLista.innerText  = `1 regalo: ${peluche.nombre}`;
            lista.appendChild(prodLista)
            preciofinal();
            divTotal.appendChild(botonReiniciar)
            break;
          }
        }
      }
    } else {
      let prodLista = document.createElement("li")
            prodLista.innerText  = `SIN REGALO`;
            lista.appendChild(prodLista)
            preciofinal();
            divTotal.appendChild(botonReiniciar)
            
    }

};


