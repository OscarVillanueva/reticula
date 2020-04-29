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
    <?php include "./templates/materia.php" ?>
   
    <h1 class = "bg-green-600 text-white text-5xl p-6 text-center">
        Genera tu carga academica
    </h1>

    <main class = "p-6 w-full sm:w-auto">
        <div>

            <h2 class="text-2xl text-center text-gray-700">
                Retícula Ingenieria en Sistemas Computacionales
            </h2>

            <div class = "w-full sm:flex sm:justify-center">
                <a 
                    class = "w-full lg:w-auto bg-green-600 py-2 px-5 my-3 inline-block text-white rounded text-sm hover:bg-green-800 uppercase font-bold text-center cursor-pointer"
                >
                    Generar carga
                </a>
            </div>

            <div class = "flex mt-6 overflow-x-scroll">
                <div class = "mr-3">
    
                    <small class = "text-center text-gray-600 w-full block mb-1">
                        1er semestre
                    </small>

                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 1) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 2) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 3) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 4) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 5) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 6) ?>
    
                </div>

                <div class = "mr-3">

                    <small class = "text-center text-gray-600 w-full block mb-1">
                        2do semestre
                    </small>
    
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 7) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 8) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 9) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 10) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 11) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 12) ?>
    
                </div>

                <div class = "mr-3">

                    <small class = "text-center text-gray-600 w-full block mb-1">
                        3er semestre
                    </small>
    
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 13) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 14) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 15) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 16) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 17) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 18) ?>
    
                </div>

                <div class = "mr-3">
    
                    <small class = "text-center text-gray-600 w-full block mb-1">
                        4to semestre
                    </small>

                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 19) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 20) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 21) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 22) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 23) ?>
    
                </div>

                <div class = "mr-3">
    
                    <small class = "text-center text-gray-600 w-full block mb-1">
                        5to semestre
                    </small>

                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 24) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 25) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 26) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 27) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 28) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 29) ?>
    
                </div>

                <div class = "mr-3">

                    <small class = "text-center text-gray-600 w-full block mb-1">
                        6to semestre
                    </small>
    
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 30) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 31) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 32) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 33) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 34) ?>
    
                </div>

                <div class = "mr-3">

                    <small class = "text-center text-gray-600 w-full block mb-1">
                        7mo semestre
                    </small>
    
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 35) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 36) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 37) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 38) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 39) ?>
    
                </div>

                <div class = "mr-3">

                    <small class = "text-center text-gray-600 w-full block mb-1">
                        8vo semestre
                    </small>
    
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 40) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 41) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 42) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 43) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 44) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 45) ?>
    
                </div>

                <div>

                    <small class = "text-center text-gray-600 w-full block mb-1">
                        9no semestre
                    </small>
    
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 46) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 47) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 48) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 49) ?>
                    <?php echo materia("taller de etica", "aasdf", "0-0-4", 50) ?>
    
                </div>

            </div>

        </div>
    </main>

    <script src="./js/app.js"></script>

</body>
</html>