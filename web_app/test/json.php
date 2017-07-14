<?php
	$arr = array(
		'name' => '希亚',
		'nick' => 'Gonn',
		'contact' => array(
			'email' => 'gonnsai@163.com',
			'website' => 'http://www.nowamagic.net',
		)
	);
	$json_string = json_encode($arr);
	echo "getProfile($json_string)";
?>