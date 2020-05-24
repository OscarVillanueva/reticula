<?php
function materia($nMat, $cMat, $credMat, $id, $requirements){

	$template = builToolTip($requirements);

	$text = "<div 
		class = 'border-gray-700 border-2 border-solid rounded mb-3 w-48 materia' data-id = $id data-type ='normal'>
				<p id='nombre' class = 'text-center p-1'>$nMat</p>
				<p id='clave' class = 'text-center p-1'>$cMat</p>
				<p id='credito' class = 'text-center mb-1'>$credMat</p>
				$template
			</div>";
	return $text;
}

function builToolTip($requirements)
{
	$template = "";
	
	if(sizeof($requirements) !== 0) {

		if(isset($requirements["pre"]) || isset($requirements["co"])) {
			if (isset($requirements["pre"])) {

				$template = "<div id = 'req' class = 'rounded mb-1 p-3 bg-gray-200 text-gray-900 '>";

				if(sizeof($requirements["pre"]) > 0){
		
					$pre = $requirements["pre"];
					$preTemplate = "
						<p class = 'text-left pl-1 mb-1 font-black uppercase text-sm'>Pre-requisitos</p>
						<ul>
					";
		
					foreach ($pre as $value) {
						$preTemplate = $preTemplate . "
							<li 
								class = 'mb-2 border-t border-gray-500 p-1 text-sm'
							>
								$value
							</li>
						";
					}
				
					$template = $template . $preTemplate ."</ul>";
				}
			}
		
			if(isset($requirements["co"])) {
				if(sizeof($requirements["co"]) > 0) {
		
					$co = $requirements["co"];
					$coTemplate = "
						<p class = 'text-left pl-1 my-2 font-black uppercase text-sm'>co-requisitos</p>
						<ul>
					";
		
					foreach ($co as $value) {
						$coTemplate = $coTemplate . "
							<li 
								class = 'mb-2 border-t border-gray-500 p-1 text-sm'
							>
								$value
							</li>
						";
					};

					$template = $template . $coTemplate ."</ul>";
				}

			}

			$template = $template . "</div>";
		}

	}

	return $template;

}