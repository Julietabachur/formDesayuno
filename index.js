
let desayuno = []

//traigo elementos del DOM
let formUsuario = document.getElementById("formUsuario")
let btnguardar = document.getElementById("btnguardar")
let btnListo = document.getElementById("desayunoListo")
let btnComencemos = document.getElementById("btnComencemos")
let formularioDesayuno = document.getElementById("formDesayuno")
let parrafosMain = document.querySelector(".mainP")
let main = document.getElementById("main")
let mainH1 = document.getElementById("mainH1")
let contenedorGral = document.getElementById("contenedorGral")
let opcionalRegalo = document.getElementById("opcionalRegalo")
let divOpciones;
let regaloSi;
let regaloNo;
let productos;

function mostrarFormDesayuno() {
  //creo formulario para armar desayuno
  formUsuario.classList.replace("d-flex", "d-none")
  const nombreCompleto = document.getElementById("nombreCompleto").value 
  let formDesayuno= document.getElementById("formDesayuno")
  formDesayuno.innerHTML=   `<h3>Hola ${nombreCompleto}!</h3> 
                            <h3>Ya podés armar tu desayuno</h3>
                            <p>A continuacion verás las opciones disponibles</p>`
  //creo divOpciones en donde appendo los select 
  divOpciones = document.createElement("div")
  divOpciones.innerHTML = `<p class="form-label fs-3 text">Elige una porcion de torta</p>
                          <select id="selectDulce" name="dulce"></select>
                          <p class="form-label fs-3 text">Elige algo salado!</p>
                          <select id="selectSalado" name="salado"></select>
                          <p class="form-label fs-3 text">Elige algo para tomar</p>
                          <select id="selectBebida" name="bebida"></select>
                          <p class="form-label fs-3 text">¿Te gustaría incluir un regalo?</p>
                          <button id="regaloSi" class="btn" type="button" value="Si" >Si</button>
                          <button id="regaloNo" class="btn" type="button" value="No" >No</button>`
  formDesayuno.appendChild(divOpciones)
  regaloSi = document.getElementById("regaloSi")
  regaloNo = document.getElementById("regaloNo")
  //evento para mostrar opciones de regalo y btnguardar desayuno
regaloSi.addEventListener("click", mostrarOpcionesRegalo)

//evento para mostrar btnguardar desayuno
regaloNo.addEventListener("click", sinRegalo)

  //hago fetch de productos.json
fetch('productos.json')
.then((res) => res.json())
.then(data => {
  productos = data ;

    //uso un forEach para crear un option por cada producto dentro del array y las appendo a los select de arriba
    productos.forEach(producto => {
    let option = document.createElement("option");
    option.innerText = `${producto.nombre}: ${producto.descripcion} a $${producto.precio}`;
    option.value = productos.indexOf(producto)
    for (value in producto) {
      producto[value] === 'dulce' ? selectDulce.appendChild(option) : null;
      producto[value] === 'salado' ? selectSalado.appendChild(option) : null;
      producto[value] === 'bebida' ? selectBebida.appendChild(option) : null;
    }
  })
})  
}

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




function crearDesayuno(e) {
  e.preventDefault() 
  let eleccionDulce = productos[selectDulce.value]
  let eleccionSalado = productos[selectSalado.value]
  let eleccionBebida = productos[selectBebida.value]
  let eleccionRegalo = productos[selectRegalo.value]
  desayuno.push(new Item (eleccionDulce, 1))
  desayuno.push(new Item (eleccionSalado, 1))
  desayuno.push(new Item (eleccionBebida, 1))
  desayuno.push(new Item (eleccionRegalo, 1))
  localStorage.setItem (user.nombreCompleto, JSON.stringify(desayuno))
  swal("HECHO!", "Tu desayuno está listo!", "success");

  let barraLateral = document.createElement("div")
  contenedorGral.classList.add("row")
  formularioDesayuno.classList.add("col-8")
  barraLateral.classList.add("col-4")
  barraLateral.innerHTML =  `<h3>Tu desayuno contiene:</h3>
                            <table class="table table-dark table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">Producto</th>
                                  <th scope="col">Cantidad</th>
                                  <th scope="col">Precio</th>
                                </tr>
                              </thead>
                              <tbody class="tbody">                                
                              </tbody>
                            </table>`
  contenedorGral.appendChild(barraLateral)

  desayuno.forEach(item =>{
    let row = document.createElement('tr')
    row.innerHTML=   `<td>${item.producto.nombre}</td>
                      <td>${item.cantidad}</td>                      
                      <td>$${item.producto.precio}</td>`                       
    let tbody = document.querySelector(".tbody")   
    tbody.appendChild(row)                      
  })

  let rowTotal = document.createElement('tr')  
  let tbody = document.querySelector(".tbody")
  let total = desayuno.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  rowTotal.innerHTML = `<td>TOTAL:</td>
                        <td></td>                      
                        <td>$${total}</td>`
  tbody.appendChild(rowTotal)
}

function mostrarOpcionesRegalo(e) {
  e.preventDefault() 
  let selectRegalo= document.createElement("select");
  let desayunoListo= document.createElement("btn"); 
  desayunoListo.innerText = "¡Desayuno listo!" 
  desayunoListo.setAttribute("type", "submit")
  desayunoListo.classList.add("btn")
  console.log(productos);
  regaloSi.classList.add("d-none")
  regaloNo.classList.add("d-none")
    productos.forEach(producto => {
      let option = document.createElement("option");
      option.innerText = `${producto.nombre}: ${producto.descripcion} a $${producto.precio}`;
      option.value = productos.indexOf(producto)
      for (value in producto) {
        producto[value] === 'regalo' ? selectRegalo.appendChild(option) : null;
      }  
    })

    divOpciones.appendChild(selectRegalo)
    formularioDesayuno.appendChild(desayunoListo)
}

function sinRegalo(e) {
  e.preventDefault() 
  let pSinRegalo = document.createElement("p")
  pSinRegalo.innerText="No agregaste ningun regalo. presiona '¡Desayuno listo!' para finalizar o 'BORRAR TODO' para comenzar de nuevo"
  let divBtnGuardar = document.createElement("div")
  let desayunoListo= document.createElement("btn");
  desayunoListo.innerText = "¡Desayuno listo!"
  desayunoListo.setAttribute("type", "submit")
  let resetear = document.createElement("btn");
  resetear.innerText="BORRAR TODO"
  resetear.setAttribute("type", "reset")
  divOpciones.appendChild(divBtnGuardar)
  divBtnGuardar.appendChild(desayunoListo)
  divBtnGuardar.appendChild(resetear)
}

//EVENTOS


//evento para ver formulario de usuario
btnComencemos.addEventListener("click", ()=>{
  mainH1.classList.add("display-4", "m-0")
  main.classList.add("alturaMain")  
  parrafosMain.classList.add("d-none") 
  formUsuario.classList.replace("d-none", "d-flex")
})

//evento para guardar usuario y ver formulario de desayuno
formUsuario.addEventListener("submit", ejecutarFormulario);


//evento para confirmar desayuno armado
formularioDesayuno.addEventListener("submit", crearDesayuno);



formularioDesayuno.addEventListener("reset", ()=>{
  document.getElementById("nombreCompleto").value  = ""
  document.getElementById("dni").value = 0  
  document.getElementById("email").value = "" 
  document.getElementById("celular").value = 0
});
