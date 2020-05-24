
setTimeout(() => {

    const subjects = document.querySelectorAll('.materia');
    
    prepare( subjects )

}, 1000);

// Colores normal
// Sin nada
const normal = {
    type: "normal",
    border: "border-gray-700",
    title:  "bg-transparent",  
    detail:  "bg-transparent", 
    text: "text-black" 
}

// Pasada - first
const first = {
    type: "first",
    border: "border-green-600",
    title:  "bg-green-600",  
    detail:  "bg-green-500", 
    text: "text-white"  
}

// Repe - second
const second = {
    type: "second",
    border: "border-yellow-600",
    title:  "bg-yellow-600",  
    detail:  "bg-yellow-500",  
    text: "text-white" 
}

// Repe - third
const third = {
    type: "third",
    border: "border-red-600",
    title:  "bg-red-600",  
    detail:  "bg-red-500",
    text: "text-white"   
}

// Cambio de clases, segun el click
// nomal -> first -> second -> third -> normal
const prepare = asignatures => {
    
    asignatures.forEach(asignature => {
        asignature.addEventListener('click', (e) => {
            
            // Detectamos el elemento que fue clickeado, subimos hasta el padre (en este caso)
            // Ya que este es el que contiene el id, en el atributo data-id
            let target = e.target
            while(!target.getAttribute("data-id"))
                target = target.parentElement
    
            // Indicamos el cambio desde el previo hasta el nuevo
            const change = {
                previous: normal,
                to: first
            }
    
            // Detecamos el cambio
            switch (target.getAttribute("data-type")) {
                case "first":
                    change.previous = first
                    change.to = second
                    break;
    
                case "second":
                    change.previous = second
                    change.to = third
                    break;
    
                case "third":
                    change.previous = third
                    change.to = normal
                    break;
            }
    
            // Hacemos el cambio
            switchClasses(target, change)
        })
    });

}


const switchClasses = (target, change) => {
    const { previous, to } = change

    // Remplazamos el border
    target.classList.remove(previous.border)
    target.classList.add(to.border)

    // Cambiamos el color de fondo así como el color del texto
    target.querySelector("#nombre").classList.remove(previous.title, previous.text)
    target.querySelector("#nombre").classList.add(to.title, to.text)

    // Cambiamos el color de fondo así como el color del texto
    target.querySelector("#clave").classList.remove(previous.detail, previous.text)
    target.querySelector("#clave").classList.add(to.detail, to.text)

    // Cambiamos el estado actual
    target.setAttribute("data-type", to.type)
}

// funcion para mostrar el tooltip
const hover = (e) => {
    console.log(e.target);
}
