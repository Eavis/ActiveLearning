<?php
	header('Content-Type: text/html; charset=utf-8');
	$json_string = $_POST["txt_json"];
	//echo $json_string;
	if(ini_get("magic_quotes_gpc")=="1")
	{
		$json_string=stripslashes($json_string);
	}
	$user = json_decode($json_string);
 
	echo var_dump($user);
 
	echo '<br /><br /><br /><br />';
	echo $user->name.'<br />';
	echo $user->email.'<br />';
	echo $user->password.'<br />';
?>