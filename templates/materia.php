<?php
function materia($nMat, $cMat, $credMat, $id){
	$text = "<div 
		class = 'border-gray-700 border-2 border-solid rounded mb-3 w-48 materia' data-id = $id data-type ='normal'>
				<p id='nombre' class = 'text-center py-1'>$nMat</p>
				<p id='clave' class = 'text-center py-1'>$cMat</p>
				<p id='credito' class = 'text-center mb-1'>$credMat</p>
				<div id = 'req' class = 'rounded mb-1 p-3 bg-gray-200 text-gray-900 '>
					<p class = 'text-left pl-1'>Pre</p>
					<ul>
						<li>fundamentos de programación</li>
						<li>qw</li>
						<li>qw</li>
					</ul>
					<p class = 'text-left pl-1'>co</p>
					<ul>
						<li>qw</li>
					</ul>
				</div>
			</div>";
	return $text;
}