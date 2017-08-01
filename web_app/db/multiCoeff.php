<?php
  // if(isset($_POST['categories'])) {
  //   $json = $_POST['categories'];
  //   $results = json_decode($json);
  //   print_r($results->key);
  //   $fpath = 'tmp.csv';
  //   $fp = fopen($fpath, 'w');
  //   $list = array(
  //     "Peter,Griffin,Oslo,Norway",
  //     "Glenn,Quagmire,Oslo,Norway",
  //     );
  //   foreach ($list as $line)
  //     {
  //     fputcsv($fp,explode(',',$line));
  //     }
  //    fclose($fp);
  //
  //   // $header = array();
  //   // $firstLineKeys = false;
  //   // foreach ($results as $result) {
  //   //   array_push($header, $result->key);
  //   //   if (empty($firstLineKeys)){
  //   //     $firstLineKeys = $result->key;
  //   //     fputcsv($fp, $firstLineKeys);
	// 	//     $firstLineKeys = array_flip($firstLineKeys);
  //   //   }
  //   //   fputcsv($fp, array_merge($firstLineKeys, $result->value));
  //   // }
  //   // fclose($fp);
  //   // print_r($header);
  // } else {
  //   echo "Error: Data has not received by the server";
  // }
  $list = array(
  "Peter,Griffin,Oslo,Norway",
  "Glenn,Quagmire,Oslo,Norway",
  );
  $file = fopen("contacts.csv","w");
  foreach ($list as $line)
    {
    fputcsv($file,explode(',',$line));
    }
  fclose($file);
?>
