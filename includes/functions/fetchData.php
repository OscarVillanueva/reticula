<?php
    function fetchData() {
        $result = [];
        
        for ($j=0; $j < 9; $j++) { 

            $tmp = [];

            for ($i=0; $i < 6; $i++) { 
                array_push($tmp, [
                    "nombre" => "taller de etica $i", 
                    "clave" => "98782",
                    "creditos" => "1-2-3",
                    "requisitos" => [
                        "pre" => [
                            "Fundamentos de programación",
                            "Taller de investigación I",
                            "Física"
                        ],
                        "co" => [
                            "Química",
                        ]
                    ]
                ]);
            }

            array_push($result, $tmp);
        }



        return $result;
    }