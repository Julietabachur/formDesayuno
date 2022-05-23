
let desayuno = []

//traigo elementos del DOM
let formUsuario = document.getElementById("formUsuario")
let btnguardar = document.getElementById("btnguardar")
let btnListo = document.getElementById("desayunoListo")
let btnComencemos = document.getElementById("btnComencemos")
let formularioDesayuno = document.getElementById("formDesayuno")
let carrito = document.querySelector(".carrito")
let parrafosMain = document.querySelector(".mainP")
let main = document.getElementById("main")
let mainH1 = document.getElementById("mainH1")
let contenedorGral = document.getElementById("contenedorGral")



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
  formDesayuno.innerHTML=   `<h3>Hola ${nombreCompleto}!</h3> 
                            <h3>Ya podés armar tu desayuno</h3>
                            <p>A continuacion verás las opciones disponibles</p>`
  //creo divdulce en donde appendo el select 
  let divOpciones = document.createElement("div")
  divOpciones.innerHTML = `<p class="form-label fs-3 text">Elige una porcion de torta</p>
                          <select id="selectDulce" name="dulce"></select>
                          <p class="form-label fs-3 text">Elige algo salado!</p>
                          <select id="selectSalado" name="salado"></select>
                          <p class="form-label fs-3 text">Elige algo para tomar</p>
                          <select id="selectBebida" name="bebida"></select>
                          <p class="form-label fs-3 text">Te gustaría incluir un regalo?</p>
                          <select id="selectRegalo" name="regalo"></select>
                          <div class="d-flex flex-wrap row align-content-center row justify-content-center">
                          <input class="btn" type="submit" value="Guardar" id="desayunoListo">
                          </div>`
  formDesayuno.appendChild(divOpciones)

  //hago fetch de productos.json
fetch('productos.json')
.then((res) => res.json())
.then(data => {
   //uso un forEach para crear un option por cada producto dentro del array y las appendo a los select de arriba
  let productos = data ;
  console.log(productos);
  productos.forEach(item => {
    let option = document.createElement("option");
    option.innerText = `${item.nombre}: ${item.descripcion} a $${item.precio}`;
    option.value = productos.indexOf(item)
    for (value in item) {
      item[value] === 'dulce' ? selectDulce.appendChild(option) : null;
      item[value] === 'salado' ? selectSalado.appendChild(option) : null;
      item[value] === 'bebida' ? selectBebida.appendChild(option) : null;
      item[value] === 'regalo' ? selectRegalo.appendChild(option) : null;
    }
  })
})
}
 


function validarCampos() {
  let camposCompletos = (document.getElementById("nombreCompleto").value  != "" &&
  document.getElementById("dni").value > 0 && 
  document.getElementById("email").value != "" &&
  document.getElementById("celular").value > 0) ? true : false

  camposCompletos ?  crearUsuario() : swal("ERROR!", "Revise que los campos se hayan completado correctamente y vuelva a intentarlo", "error");
}

//funcion para validar datos de usuario
function ejecutarFormulario(e) {
  e.preventDefault()
  validarCampos()
  }

function crearDesayuno(e, productos) {
  e.preventDefault() 
  let eleccionDulce = productos[selectDulce.value]
  let eleccionSalado = productos[selectSalado.value]
  let eleccionBebida = productos[selectBebida.value]
  let eleccionRegalo = productos[selectRegalo.value]
  desayuno.push(new Item (eleccionDulce, 1))
  desayuno.push(new Item (eleccionSalado, 1))
  desayuno.push(new Item (eleccionBebida, 1))
  desayuno.push(new Item (eleccionRegalo, 1))
  swal("HECHO!", "Tu desayuno está listo!", "success");
  console.log(desayuno)

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

//evento para ver formulario de usuario
btnComencemos.addEventListener("click", ()=>{
  mainH1.classList.add("display-4", "m-0")
  main.classList.add("alturaMain")  
  parrafosMain.classList.add("d-none") 
  formUsuario.classList.replace("d-none", "d-flex")
})
//evento para guardar usuario y ver formulario de desayuno
formUsuario.addEventListener("submit", ejecutarFormulario);
formularioDesayuno.addEventListener("submit", crearDesayuno);

// funcion precio del desayuno
// let preciofinal = () => {
//   const precio = totalDesayuno.reduce( (acc, item) => {return acc += item }, 0 )  
//   let total = document.createElement("p")
//   total.innerText = "El valor total de su desayuno es: $"+ precio
//   divTotal.appendChild(total)}