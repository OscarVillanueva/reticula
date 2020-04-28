<?php
function materia($nMat, $cMat, $credMat, $id){
	$text = "<div 
		class = 'border-gray-700 border-2 border-solid rounded mb-3 w-48 materia' data-id = $id data-type ='normal'>
				<p id='nombre' class = 'text-center py-1'>$nMat</p>
				<p id='clave' class = 'text-center py-1'>$cMat</p>
				<p id='credito' class = 'text-center mb-1'>$credMat</p>
			</div>";
	return $text;
}