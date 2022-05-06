//arrays vacios de opcionesDesayuno, desayunoElegido y precio el desayunoElegidoPrecio
let stockDulce = []
let stockSalado = []
let stockBebidas = []
let stockRegalos = []
let desayuno = []

//tortas y lo pusheo a su array correspondiente
stockDulce.push(new Producto ("Chocotorta",400,"Crema de dulce de leche y queso con chocolinas"))
stockDulce.push(new Producto ("Pastafrola",350,"Masa frola rellena de dulce de membrillo"))

//salado y lo pusheo a su array correspondiente
stockSalado.push(new Producto ("Chipa", 250,"Chipa casero de 2 quesos"))
stockSalado.push(new Producto ("Tostado",500,"4 triangulos de miga" ))

//bebida y lo pusheo a su array correspondiente
stockBebidas.push(new Producto ("Limonada",250,"Limonada con menta y jengibre"))
stockBebidas.push(new Producto ("Cafe",300,"Cafe con leche"))

//regalo y lo pusheo a su array correspondiente
stockRegalos.push(new Producto ("Taza",700,"Taza de cerámica"))
stockRegalos.push(new Producto ("Peluche", 1500,"Peluche con corazon"))
stockRegalos.push(new Producto ("Sin regalo", 0,"sin regalo"))

//traigo el fieldset y boton
let formUsuario = document.getElementById("formUsuario")
let btnguardar = document.getElementById("btnguardar")

//funcion guardar info contacto
function crearUsuario() {
  const nombreCompleto = document.getElementById("nombreCompleto").value 
  const dni = document.getElementById("dni").value
  const email = document.getElementById("email").value
  const celular = document.getElementById("celular").value 
  user = new Usuario (nombreCompleto, dni, email, celular)
  localStorage.setItem (user.dni, JSON.stringify(user))
}

function vaciarInputs(){  
  document.getElementById("nombres").value  = ""
  document.getElementById("dni").value = ""
  document.getElementById("email").value = ""
  document.getElementById("celular").value = ""
}

function formDesayuno() {
  //creo formulario para armar desayuno
  const nombreCompleto = document.getElementById("nombreCompleto").value 
  let formDesayuno= document.getElementById("formDesayuno")
  formDesayuno.innerHTML=   `<h3>Hola ${nombreCompleto}! Ya podes armar tu desayuno.</h3>
                            <p>A continuacion veras las opciones disponibles</p>`
  //creo divdulce en donde appendo el select 
  let divDulce = document.createElement("div")
  divDulce.innerHTML = `<p>Elige una porcion de torta</p>
                        <select id="selectDulce" name="dulce"></select>`
  formDesayuno.appendChild(divDulce)

  //uso un forEach para crear un option por cada producto dentro del array stockDulce y las appendo al selectDulce de arriba
  stockDulce.forEach( (opcion) => {
    const opcionDulce = document.createElement("option");
    opcionDulce.innerText = `${opcion.nombre}: ${opcion.descripcion} a $${opcion.precio}`
    let selectDulce = document.getElementById("selectDulce")
    selectDulce.appendChild(opcionDulce)
    opcionDulce.value = stockDulce.indexOf(opcion)
  })

  //creo divSalado en donde appendo el select 
  let divSalado = document.createElement("div")
  divSalado.innerHTML = `<p>Elige algo salado!</p>
                        <select id="selectSalado" name="salado"></select>`
  formDesayuno.appendChild(divSalado)

  //uso un forEach para crear un option por cada producto dentro del array stockSalado y las appendo al selectDulce de arriba
  stockSalado.forEach( (opcion) => {
    const opcionSalada = document.createElement("option");
    opcionSalada.innerText = `${opcion.nombre}: ${opcion.descripcion} a $${opcion.precio}`
    let selectSalado = document.getElementById("selectSalado")
    selectSalado.appendChild(opcionSalada)
    opcionSalada.value = stockSalado.indexOf(opcion)
  })

  //creo divBebida en donde appendo el select 
  let divBebida = document.createElement("div")
  divBebida.innerHTML = `<p>Elige algo para tomar</p>
                        <select id="selectBebida" name="bebida"></select>`
  formDesayuno.appendChild(divBebida)

   //uso un forEach para crear un option por cada producto dentro del array stockBebidas y las appendo al selectDulce de arriba
   stockBebidas.forEach( (opcion) => {
    const opcionBebida = document.createElement("option");
    opcionBebida.innerText = `${opcion.nombre}: ${opcion.descripcion} a $${opcion.precio}`
    let selectSalado = document.getElementById("selectBebida")
    selectSalado.appendChild(opcionBebida)
    opcionBebida.value = stockBebidas.indexOf(opcion)
  })

  //creo divRegalo en donde appendo el select 
  let divRegalo = document.createElement("div")
  divRegalo.innerHTML = `<p>Te gustaría incluir un regalo?</p>
                        <select id="selectRegalo" name="regalo"></select>`
  formDesayuno.appendChild(divRegalo)

   //uso un forEach para crear un option por cada producto dentro del array stockBebidas y las appendo al selectDulce de arriba
   stockRegalos.forEach( (opcion) => {
    const opcionRegalo = document.createElement("option");
    opcionRegalo.innerText = `${opcion.nombre}: ${opcion.descripcion} a $${opcion.precio}`
    let selectSalado = document.getElementById("selectRegalo")
    selectSalado.appendChild(opcionRegalo)
    opcionRegalo.value = stockRegalos.indexOf(opcion)
  })
}

//funcion para validar campos
function ejecutarFormulario(e) {
  e.preventDefault()
  if (
     document.getElementById("nombreCompleto").value  != "" &&
     document.getElementById("dni").value > 0 && 
     document.getElementById("email").value != "" &&
     document.getElementById("celular").value > 0) {
  crearUsuario()
  formDesayuno()
  }
  else{
    swal("Revise que los campos se hayan completado correctamente y vuelva a intentarlo");
  }

}

// if (document.getElementById("chocotorta").checked){

// }

//evento para guardar usuario
btnguardar.addEventListener("click", ejecutarFormulario);

// //funcion precio del desayuno
// let preciofinal = () => {
//   const precio = totalDesayuno.reduce( (acc, item) => {return acc += item }, 0 )  
//   let total = document.createElement("p")
//   total.innerText = "El valor total de su desayuno es: $"+ precio
//   divTotal.appendChild(total)   
  

//funcion armado de desayuno
//   let armadoDesayuno = () => { 
//   let opcionTorta = "Seleccione la torta deseada\n";
//   opcionTorta += "1. Chocotorta\n";
//   opcionTorta += "2. Pastafrola\n";

//   let eleccionTorta = 0;

//   while (eleccionTorta != 1 && eleccionTorta != 2) {
//     eleccionTorta = parseInt(prompt(opcionTorta));
//     switch (eleccionTorta) {
//       case 1: {
//         desayuno.push(chocotorta.nombre)
//         totalDesayuno.push(chocotorta.precio)        
//         let prodLista = document.createElement("li")
//         prodLista.innerText  = `1 porción de: ${chocotorta.nombre}`;
//         lista.appendChild(prodLista)
//         break;
//       }

//       case 2: {
//         desayuno.push(pastafrola.nombre)
//         totalDesayuno.push(pastafrola.precio)
//         let prodLista = document.createElement("li")
//         prodLista.innerText  = `1 porción de: ${pastafrola.nombre}`; 
//         lista.appendChild(prodLista)
//         break;
//       }

//       default: {
//           alert("Elija una torta para continuar");
//         }
//         break;
//     }
//   }

//   let opcionSalado = "Seleccione algo salado\n";
//   opcionSalado += "1. Chipa\n";
//   opcionSalado += "2. Sandwich de jyq\n";

//   let eleccionSalado = 0;

//   while (eleccionSalado != 1 && eleccionSalado != 2) {
//     eleccionSalado = parseInt(prompt(opcionSalado));
//     switch (eleccionSalado) {
//       case 1: {
//         desayuno.push(chipa.nombre);
//         totalDesayuno.push(chipa.precio);
//         let prodLista = document.createElement("li")
//         prodLista.innerText  = `1 porción de: ${chipa.nombre}`;
//         lista.appendChild(prodLista)
//         break;
//       }

//       case 2: {
//         desayuno.push(sandwich.nombre);
//         totalDesayuno.push(sandwich.precio);
//         let prodLista = document.createElement("li")
//         prodLista.innerText  = `1 porción de: ${sandwich.nombre}`;
//         break;
//       }

//       default:
//         {
//           alert("Elija algo salado para continuar");
//         }
//         break;
//     }
//   }

//   let opcionBebida = "Seleccione la bebida deseada\n";
//   opcionBebida += "1. Cafe\n";
//   opcionBebida += "2. Limonada\n";

//   let eleccionBebida = 0;

//   while (eleccionBebida != 1 && eleccionBebida != 2) {
//     eleccionBebida = parseInt(prompt(opcionBebida));
//     switch (eleccionBebida) {
//       case 1: {
//         desayuno.push(cafe.nombre);
//         totalDesayuno.push(cafe.precio);
//         let prodLista = document.createElement("li")
//         prodLista.innerText  = `1 taza de: ${cafe.nombre}`;
//         lista.appendChild(prodLista)
//         break;
//       }

//       case 2: {
//         desayuno.push(limonada.nombre);
//         totalDesayuno.push(limonada.precio);
//         let prodLista = document.createElement("li")
//         prodLista.innerText  = `1 vaso de: ${limonada.nombre}`;
//         lista.appendChild(prodLista)
//         break;
//       }

//       default:
//         {
//           alert("Elija algo de beber para continuar");
//         }
//         break;
//     }
//   }


//   if (confirm("Le gustaria agregar un regalo?"))  {
    
//       let eleccionRegalo = 0;

//       let opcionRegalo = "Seleccione un regalo\n";
//       opcionRegalo += "1. Taza\n";
//       opcionRegalo += "2. Peluche\n";

//       while (eleccionRegalo != 1 && eleccionRegalo != 2) {
//         eleccionRegalo = parseInt(prompt(opcionRegalo));

//         switch (eleccionRegalo) {
//           case 1: {
//             desayuno.push(taza.nombre)
//             totalDesayuno.push(taza.precio)
//             let prodLista = document.createElement("li")
//             prodLista.innerText  = `1 regalo: ${taza.nombre}`;
//             lista.appendChild(prodLista)
//             preciofinal();
//             divTotal.appendChild(botonReiniciar)
//             break;
//           }

//           case 2: {
//             desayuno.push(peluche.nombre)
//             totalDesayuno.push(peluche.precio)
//             let prodLista = document.createElement("li")
//             prodLista.innerText  = `1 regalo: ${peluche.nombre}`;
//             lista.appendChild(prodLista)
//             preciofinal();
//             divTotal.appendChild(botonReiniciar)
//             break;
//           }
//         }
//       }
//     } else {
//       let prodLista = document.createElement("li")
//             prodLista.innerText  = `SIN REGALO`;
//             lista.appendChild(prodLista)
//             preciofinal();
//             divTotal.appendChild(botonReiniciar)
            
//     }

// };


// `<h3>Hola {nombre}! Ya podes armar tu desayuno.</h3>
//                             <p>A continuacion veras las opciones disponibles</p>
//                             <p>Elige una porcion de torta</p>                        
//                             <select name="tortas">
//                               <option value="vacio" id="vacio"></option>
//                               <option value="chocotorta" id="chocotorta"> ${chocotorta.nombre} </option>
//                               <option value="pastafrola" id="pastafrola">pastafrola</option>
//                             </select>
//                             <p>Elige una bebida</p>  
//                             <select name="bebidas">
//                               <option value="vacio" id="vacio"></option>
//                               <option value="limonada" id="limonada">Un vaso de limonada</option>
//                               <option value="cafe" id="cafe">Una taza de cafe con leche</option>
//                             </select> 
//                             <p>Elige algo salado para cortar con tanto dulce!</p>
//                             <select name="salado">
//                               <option value="vacio" id="vacio"></option>
//                               <option value="chipa" id="chipa">3 chipas grandes</option>
//                               <option value="cafe" id="cafe">Una taza de cafe con leche</option>
//                             </select>      
//                             <p>Te gustaria sumar un regalo?</p>   
//                             <select name="regalo">
//                               <option value="vacio" id="vacio"></option>
//                               <option value="peluche" id="peluche">1 peluche</option>
//                               <option value="taza" id="taza">1 taza</option>
//                               <option value="negativo" id="negativo">No, gracias.</option>
//                             </select> `