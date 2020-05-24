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
    <?php 
        include "./includes/templates/materia.php";
        include "./includes/functions/fetchData.php";
        $data = fetchData();
    ?>

    <h1 class = "bg-green-600 text-white text-5xl p-6 text-center">
        Genera tu carga academica
    </h1>

    <main class = "p-6 w-full sm:w-auto">
        <div>

            <h2 class="text-2xl text-center text-gray-700 hidden">
                Retícula Ingenieria en Sistemas Computacionales
            </h2>

            <div class = "w-full sm:flex sm:justify-center">
                <a 
                   id = 'gen' class = "w-full lg:w-auto bg-green-600 py-2 px-5 my-3 inline-block text-white rounded text-sm hover:bg-green-800 uppercase font-bold text-center cursor-pointer"
                >
                    Generar carga
                </a>
            </div>

            <div class = "flex mt-6 overflow-x-scroll">

                <?php 
                    foreach ($data as $key => $value) {
                ?>
                    <div class = "mr-3">

                        <small class = "text-center text-gray-600 w-full block mb-1">
                            Semestre <?php echo $key ?>
                        </small>

                        <?php foreach ($value as $id => $asigment) { ?>
                            <?php 
                                echo materia(
                                    $asigment["nombre"],
                                    $asigment["clave"], 
                                    $asigment["creditos"], 
                                    $key,
                                    $asigment["requisitos"],
                                );
                            ?>
                        <?php } ?>

                    </div>

                <?php } ?>

            </div>

        </div>
    </main>

    <script src="./js/app.js"></script>
	<script src="./js/gen.js"></script>

</body>
</html>