// Archivo donde realizarán la generación de carga
// Para obtener todas las materias sin ninguna modificación esta en el archivo bd.json
// Este lo pueden consumir con Fetch, pueden verificar un ejemplo en el archivo main.js 
// en mountend de la instancia Vue

// Seleccionamos el boton que genera la carga
const button = document.querySelector('#gen')

//Funcion recuperar datos materia
function recmat (mate) {
	this.nom = mate.querySelector("#nombre").innerHTML;
	this.cred = mate.querySelector("#credito").innerHTML;
}

//Inserta las materias de una lista a la carga si no sobrepasa los creditos
function insertar (list)
{
	for (i = 0; i < list.length ; i++)
	{
		if(creditos + parseInt(list[i].querySelector("#credito").innerHTML) <= credmax)
		{
			if(!carga.includes(list[i],0))
			{
				creditos = creditos + parseInt(list[i].querySelector("#credito").innerHTML);
				carga.push(list[i]);
			}
		}else
			break;
	}

}

//Comprueba que la materia pueda ser ingresada
function comprueba(list)
{
	lista = [];
	for (i=0;i < list.length; i++)
	{
		//Comprueba si tiene requisitos, si no introduce la materia 
		if ( list[i].childNodes[7] )
		{
			//Comprueba si la materia tiene prerequisitos
			if(list[i].childNodes[7].childNodes[3])
			{
				//Materia->requisitos[7]->prerequisitos[3]->texto[1]
				pre = list[i].childNodes[7].childNodes[3].childNodes[1].innerHTML;
				pre = pre.replace(/\t/g, '');
				pre = pre.replace(/\n/g, '');
				for ( j = 0 ; j < list.length ; j++) 
				{
					//Recorre la lista de materias que no se han cursado, si el prerequisito esta ahi, lo introduce
					if (pre == list[j].childNodes[1].childNodes[0].data)
					{
						lista.push(list[j]);
					}
				
				}
			}
			//Luego de ver los prerequisitos introduce la materia que se estaba viendo
			lista.push(list[i]);
			//Comprueba si esa materia tiene correquisitos
			if(list[i].childNodes[7].childNodes[7])
			{
				//Materia->requisitos[7]->correquisito[7]->texto[1]
				cor = list[i].childNodes[7].childNodes[7].childNodes[1].innerHTML;
				cor = pre.replace(/\t/g, '');
				cor = pre.replace(/\n/g, '');
				for ( j = 0 ; j < list.length ; j++) 
				{
					//Recorre las materias que no se han cursado, si el correquisito esta ahi, lo introduce
					if (pre == list[j].childNodes[1].childNodes[0].data)
					{
						lista.push(list[j]);
					}
				}
			}	
		}else
		{
			//Si no hay requisitos introduce la materia
			lista.push(list[i]);
		}
	}
	insertar(lista);
}
// Le agreamos un evento clic
button.addEventListener('click', async e => {
    e.preventDefault()
	creditos = 0 ;
	credmax = 21;
	carga = [];


    // Seleccionando las materias pasadas, este te selecciona todo el nodo, es decir el div como tal
    // Pueden sacar el id de la materia del atributo data-id
    // Cabe mencionar que si no encuentra ninguna seleccionada en verde (pasada en primera)
    // regresara un arreglo vacío
    const normal = document.querySelectorAll('[data-type="normal"]')
	
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
	
	comprueba(third);
	comprueba(second);
	comprueba(normal);

    // Para que en la consola del navegador vean como esta la estructa
	// for (i=0;i<carga.length;i++)
	// {
	// var asd = new recmat(carga[i]);
	// console.log(asd.nom + ' ' + asd.cred);
	// }
	
	// Este arreglo tiene las materias en un arreglo para que se ha más facil mostrar en pantalla
	const propuesta = await fetchSubjects(carga)

	console.log(propuesta);
    console.log("Generando . . . ");  
})

// Cargar las materias originales
const fetchSubjects = async carga => {

	// Cargamos todas materias 
	const response = await fetch("db.json")
	const { Materias } = await response.json()

	// Sacamos los ids seleeccionados
	const ids = carga.map(subject => subject.getAttribute("data-id"))

	// Propuesta
	const propuesta = []

	ids.forEach( id => {

		const subject = Materias.find( subject => subject.clave === id )

		if(subject) propuesta.push( subject )

	});

	return propuesta;
}