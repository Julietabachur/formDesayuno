let opcionTorta = "Seleccione la torta deseada\n";
opcionTorta += "1. Chocotorta\n"
opcionTorta += "2. Pastafrola\n"

eleccionTorta = parseInt(prompt(opcionTorta))

let opcionSalado = "Seleccione algo salado\n";
opcionSalado += "1. Chipa\n"
opcionSalado += "2. Sandwich de jyq\n"

eleccionSalado = parseInt(prompt(opcionSalado))

let opcionBebida = "Seleccione la bebida deseada\n";
opcionBebida += "1. Cafe\n"
opcionBebida += "2. Limonada\n"

eleccionBebida = parseInt(prompt(opcionBebida))

let opcionRegalo = "Seleccione un regalo\n";
opcionRegalo += "1. Taza\n"
opcionRegalo += "2. Peluche\n"

eleccionRegalo = parseInt(prompt(opcionRegalo))

if (eleccionTorta != 1 && eleccionTorta != 2 && eleccionSalado != 1 && eleccionSalado != 2 && eleccionBebida != 1 && eleccionBebida != 2 && eleccionRegalo != 1 && eleccionRegalo != 2) {

    alert("Por favor seleccione una opcion")
} else{
    alert("Su desayuno incluye:\n"+eleccionTorta+"\n"+eleccionSalado+"\n"+eleccionBebida+"\n"+eleccionRegalo)
}