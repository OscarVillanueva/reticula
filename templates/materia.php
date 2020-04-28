<?php
function materia($nMat, $cMat, $credMat){
	$text = "<div class = 'border border-gray-700 rounded p-2 mb-3 w-48'>
				<p id='nombre' class = 'text-center'>$nMat</p>
				<p id='clave' class = 'text-center my-1'>$cMat</p>
				<p id='credito' class = 'text-center'>$credMat</p>
			</div>";
	return $text;
}