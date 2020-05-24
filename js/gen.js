// Archivo donde realizarán la generación de carga
// Para obtener todas las materias sin ninguna modificación esta en el archivo bd.json
// Este lo pueden consumir con Fetch, pueden verificar un ejemplo en el archivo main.js 
// en mountend de la instancia Vue

// Seleccionamos el boton que genera la carga
const button = document.querySelector('#gen')

// Le agreamos un evento clic
button.addEventListener('click', (e) => {
    e.preventDefault()
    
    // Seleccionando las materias pasadas, este te selecciona todo el nodo, es decir el div como tal
    // Pueden sacar el id de la materia del atributo data-id
    // Cabe mencionar que si no encuentra ninguna seleccionada en verde (pasada en primera)
    // regresara un arreglo vacío
    const first = document.querySelectorAll('[data-type="first"]')

    // Seleccionando las materias que estan en repe, 
    // este te selecciona todo el nodo, es decir el div como tal
    // Pueden sacar el id de la materia del atributo data-id
    // Cabe mencionar que si no encuentra ninguna seleccionada en amarrillo (en repetición)
    // regresara un arreglo vacío
    const second = document.querySelectorAll('[data-type="second"]')

    // Seleccionando las materias que estan en especial, 
    // este te selecciona todo el nodo, es decir el div como tal
    // Pueden sacar el id de la materia del atributo data-id
    // Cabe mencionar que si no encuentra ninguna seleccionada en rojo (en especial)
    // regresara un arreglo vacío
    const third = document.querySelectorAll('[data-type="third"]')

    // Para que en la consola del navegador vean como esta la estructa
    console.log(first);
    console.log(second);
    console.log(third);
    console.log("Generando . . . ");  
})