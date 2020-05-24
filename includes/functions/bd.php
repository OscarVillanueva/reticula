<?php
	$conn = new mysqli("192.168.1.71","dev1","dev1","Horarios");
	$conn->set_charset("utf8");
	if($conn->connect_error){
		echo $error->$conn->connect_error;
	}
