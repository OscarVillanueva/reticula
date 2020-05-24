<?php
	$conn = new mysqli("127.0.0.1","root","","Horarios");
	$conn->set_charset("utf8");
	if($conn->connect_error){
		echo $error->$conn->connect_error;
	}
