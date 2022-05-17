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
stockRegalos.push(new Producto ("Sin regalo", 0,"tu desayuno no incluye ningún regalo"))

//traigo elementos del DOM
let formUsuario = document.getElementById("formUsuario")
let btnguardar = document.getElementById("btnguardar")
let btnComencemos = document.getElementById("btnComencemos")
let formularioDesayuno = document.getElementById("formDesayuno")
let carrito = document.querySelector(".carrito")
let parrafosMain = document.querySelector(".mainP")
let main = document.getElementById("main")
let mainH1 = document.getElementById("mainH1")
let contenedorGral = document.getElementById("contenedorGral")


btnComencemos.addEventListener("click", ()=>{
  mainH1.classList.add("display-4", "m-0")
  main.classList.add("alturaMain")  
  parrafosMain.classList.add("d-none") 
  formUsuario.classList.replace("d-none", "d-flex")
})

//funcion crear usuario y guardarlo en localstorage
function crearUsuario() {
  const nombreCompleto = document.getElementById("nombreCompleto").value 
  const dni = document.getElementById("dni").value
  const email = document.getElementById("email").value
  const celular = document.getElementById("celular").value 
  user = new Usuario (nombreCompleto, dni, email, celular)
  localStorage.setItem (user.dni, JSON.stringify(user))
  mostrarFormDesayuno()
}


function mostrarFormDesayuno() {
  //creo formulario para armar desayuno
  formUsuario.classList.replace("d-flex", "d-none")
  const nombreCompleto = document.getElementById("nombreCompleto").value 
  let formDesayuno= document.getElementById("formDesayuno")
  formDesayuno.innerHTML=   `<h3>Hola ${nombreCompleto}! Ya podés armar tu desayuno</h3>
                            <p>A continuacion verás las opciones disponibles</p>`
  //creo divdulce en donde appendo el select 
  let divDulce = document.createElement("div")
  divDulce.innerHTML = `<p class="form-label fs-3 text">Elige una porcion de torta</p>
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
  divSalado.innerHTML = `<p class="form-label fs-3 text">Elige algo salado!</p>
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
  divBebida.innerHTML = `<p class="form-label fs-3 text">Elige algo para tomar</p>
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
  divRegalo.innerHTML = `<p class="form-label fs-3 text">Te gustaría incluir un regalo?</p>
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

  let confirmar = document.createElement("button")
  confirmar.className= "btn"
  confirmar.innerText= "Confirmar"  
  confirmar.setAttribute("type", "submit")
  formDesayuno.appendChild(confirmar)
}

function validarCampos() {
  let camposCompletos = (document.getElementById("nombreCompleto").value  != "" &&
  document.getElementById("dni").value > 0 && 
  document.getElementById("email").value != "" &&
  document.getElementById("celular").value > 0) ? true : false

  camposCompletos ?  crearUsuario() : swal("ERROR!", "Revise que los campos se hayan completado correctamente y vuelva a intentarlo", "error");
}

//funcion para validar campos
function ejecutarFormulario(e) {
  e.preventDefault()
  validarCampos()
  }

function crearDesayuno(e) {
  e.preventDefault()
  let eleccionDulce = stockDulce[selectDulce.value]
  let eleccionSalado = stockSalado[selectSalado.value]
  let eleccionBebida = stockBebidas[selectBebida.value]
  let eleccionRegalo = stockRegalos[selectRegalo.value]

  desayuno.push(new Item (eleccionDulce, 1))
  desayuno.push(new Item (eleccionSalado, 1))
  desayuno.push(new Item (eleccionBebida, 1))
  desayuno.push(new Item (eleccionRegalo, 1))
  swal("HECHO!", "Tu desayuno está listo!", "success");

  let barraLateral = document.createElement("div")
  barraLateral.innerHTML =  `<h3>Carrito</h3>
                            <p>Tu desayuno contiene:</p>
                            <table>
                              <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                              </tr>
                            </table>`
  contenedorGral.appendChild(barraLateral)



}

//evento para guardar usuario
formUsuario.addEventListener("submit", ejecutarFormulario);
formularioDesayuno.addEventListener("submit", crearDesayuno);

// //funcion precio del desayuno
// let preciofinal = () => {
//   const precio = totalDesayuno.reduce( (acc, item) => {return acc += item }, 0 )  
//   let total = document.createElement("p")
//   total.innerText = "El valor total de su desayuno es: $"+ precio
//   divTotal.appendChild(total)   
  