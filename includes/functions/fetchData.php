<?php

    function fetchData() {
        require_once("includes/functions/bd.php");
        
        $data = [];

        try{
            $sql = "select ma.clave, ma.nombre, ma.creditos, ma.semestre,ma1.nombre as pre
            from Materias ma inner join preMaterias pr on ma.clave = pr.claveM
                             inner join Materias ma1 on ma1.clave = pr.claveMP
            where ma.clave in (select claveM from preMaterias ) order by ma.semestre, ma.nombre";
            $result = $conn->query($sql);
        }
        catch(Exception $e){
            $error=$e->getMessage();
        }

        while ($asigment = $result->fetch_array(MYSQLI_ASSOC)) {
            $key = $asigment["semestre"];

            if(isset($data[$key][$asigment["clave"]])) {
                array_push($data[$key][$asigment["clave"]]["requisitos"]["pre"], $asigment["pre"]);
            }
            else {
                $data[$key][$asigment["clave"]] = [
                        "nombre" => $asigment["nombre"],
                        "clave" => $asigment["clave"],
                        "semeste" => $key,
                        "creditos" => $asigment["creditos"],
                        "requisitos" => [ 
                            "pre" => [ $asigment["pre"] ],
                            "co" => []
                        ]
                ];
            }
        }

        try{
            $sql = "select ma.semestre, ma.clave,ma1.nombre as co
            from Materias ma inner join coMaterias co on ma.clave =co.claveMa
                             inner join Materias ma1 on ma1.clave = co.claveMC
            where ma.clave in (select claveMa from coMaterias) order by ma.semestre, ma.nombre";
            $result = $conn->query($sql);
        }
        catch(Exception $e){
            $error=$e->getMessage();
        }

        while ($asigment = $result->fetch_array(MYSQLI_ASSOC)) {

            $key = $asigment["semestre"];
            $id = $asigment["clave"];

            if(isset($data[$key][$id])) {
                
                array_push($data[$key][$id]["requisitos"]["co"], $asigment["co"]);

            }

        }

        return $data;
    }