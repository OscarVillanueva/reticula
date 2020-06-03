// Archivo donde realizarán la generación de carga
// Para obtener todas las materias sin ninguna modificación esta en el archivo bd.json
// Este lo pueden consumir con Fetch, pueden verificar un ejemplo en el archivo main.js 
// en mountend de la instancia Vue

// Seleccionamos el boton que genera la carga
const button = document.querySelector('#gen')

// Seleccionamos el boton para cerrar el modal
const close = document.querySelector('span.close')

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
	loadDataToModal(propuesta)
	showModal()

	// console.log(propuesta);
    // console.log("Generando . . . ");  
})

// Cargar las materias originales
const fetchSubjects = async carga => {

	// Cargamos todas materias 
	const response = await fetch("db.json")
	const { Materias } = await response.json()

	// Sacamos los ids seleeccionados
	const ids = carga.map(subject => {
		return {
			id: subject.getAttribute("data-id"),
			chance: subject.getAttribute("data-type")
		}
	})

	// Propuesta
	const propuesta = []

	ids.forEach( id => {

		// Buscamos la materia entre todas las materias
		const subject = Materias.find( subject => subject.clave === id.id )

		// Si la encuentra la agrega al arreglo de propuesta
		if(subject) propuesta.push({ ...subject, chance: id.chance })

	});

	return propuesta;
}

// Mostrar el modal
const showModal = () => {
	
	const modal = document.querySelector('.modal')
	modal.style.display = "block"

}

// Cerrar el modal
close.addEventListener('click', () => {
	
	const modal = document.querySelector('.modal')
	modal.style.display = "none"
	
})

// Cargar la información al modal
const loadDataToModal = subjects => {

	// Seleccionamos el modal 
	const modal = document.querySelector('.modal')

	// Seleccionamos el contenedor de la información
	const content = modal.querySelector(".modal-info")

	// Construimos lo que se va a mostrar
	const totalCredits = subjects.reduce( (total, subject) => total + Number(subject.creditos), 0 )

	// Creamos las filas de las materias
	let rows = ""
	subjects.forEach(subject => {
		
		rows = `${rows} <tr>
				<td class = "border px-4 py-2">
					${subject.nombre}
				</td>
				<td class = "border px-4 py-2">
					${subject.creditos}
				</td>
				<td class = "border px-4 py-2">
					${subject.semestre}
				</td>
				<td class = "border px-4 py-2">
					${ translate( subject.chance ) }
				</td>
			</tr>
		`

	});

	// Template para mostrar las materias
	const template = `
		<h1 class = "uppercase font-bold text-2xl text-center">Propuesta de carga Académica</h1>
		<h3 class = "uppercase font-bold text-lg text-center">Creditos totales: ${totalCredits}</h3>
		<div>
			<table class="table-auto w-full my-6">
				<thead>
					<tr>
						<th class="px-4 py-2">Materia</th>
						<th class="px-4 py-2">Creditos</th>
						<th class="px-4 py-2">Semestre</th>
						<th class="px-4 py-2">Oportunidad</th>
					</tr>
				</thead>
				<tbody>
					${rows}
				</tbody>
			</table>
		</div>
	`

	content.innerHTML = template
}

// Pasar de la clave de oportunidad 
// normal -> primera oportunidad
// second -> Repeticion
// third -> Especial
const translate = chance => {
	
	switch ( chance ) {
		case "normal":
			return "Primera oportunidad"

		case "second":
			return "Segunda oportunidad"

		case "third":
			return "Especial"
	
		default:
			break;
	}

}