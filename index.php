<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reticula</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/app.css">
</head>
<body>

    <h1 class = "bg-green-600 text-white text-5xl p-6 text-center">
        Genera tu carga academica
    </h1>

    <main id = "app" class = "p-6 w-full sm:w-auto">

            <h2 class="text-2xl text-center text-gray-700 hidden">
                Retícula Ingenieria en Sistemas Computacionales
            </h2>

            <!-- <div class = "w-full sm:flex sm:justify-center">
                <a 
                    class = "w-full lg:w-auto bg-green-600 py-2 px-5 my-3 inline-block text-white rounded text-sm hover:bg-green-800 uppercase font-bold text-center cursor-pointer"
                >
                    Generar carga
                </a>
            </div> -->

            <div class = "flex mt-6 overflow-x-scroll">

                <template v-for = "subjects in subjectsBySemester">

                    <div class="mr-3" >

                        <small class = "text-center text-gray-600 w-full block mb-1">
                            Semestre {{ subjects[0].semestre }}
                        </small>

                        <materia 
                            v-for = "subject in subjects"
                            :subject = "subject.nombre"
                            :uid = "subject.clave"
                            :credits = "subject.creditos"
                            :requirements = "subject.requisitos"
                        />

                    </div>

                </template>

            </div>
            
    </main>

    <script type = "text/template" id = "materia-template">
        <div 
            class = 'border-gray-700 border-2 border-solid rounded mb-3 w-48 materia' 
            data-id = $id 
            data-type ='normal'
        >
            <p id='nombre' class = 'text-center p-1'>{{ subject }}</p>
            <p id='clave' class = 'text-center p-1'>{{ uid }}</p>
            <p id='credito' class = 'text-center mb-1'>{{ credits }}</p>
            
            <div v-if = "isReq" >
                <div id = "req" class="rounded mb-1 p-3 bg-gray-200 text-gray-900">
                    <div v-if = "isPre">

                        <p class="text-left pl-1 mb-1 font-black uppercase text-sm">Pre-requisitos</p>

                        <ul>
                            <li 
                                class="mb-2 border-t border-gray-500 p-1 text-sm"
                                v-for = " mat in requirements.pre"
                            >
                                {{ mat }}
                            </li>
                        </ul>

                    </div>
    
                    <div v-if = "isCo">

                        <p class="text-left pl-1 my-2 font-black uppercase text-sm">co-requisitos</p>

                        <ul>
                            <li 
                                class="mb-2 border-t border-gray-500 p-1 text-sm"
                                v-for = " mat in requirements.co"
                            >
                                {{ mat }}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </script>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="./js/main.js"></script>
    <script src="./js/app.js"></script>
</body>
</html>