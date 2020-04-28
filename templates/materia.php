<?php
function materia($nMat, $cMat, $credMat){
	// $nMat='Nombre de la materia';
	// $cMat='Clave de la materia';
	// $credMat='Creditos de la materia';
	$text = "<div class = 'border border-gray-700 rounded p-2 mb-3 w-48'>
				<p id='nombre' class = 'text-center p-1'>$nMat</p>
				<p id='clave' class = 'text-center p-1'>$cMat</p>
				<p id='credito' class = 'text-center p-1'>$credMat</p>
			</div>";
	return $text;
}