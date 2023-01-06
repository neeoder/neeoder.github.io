<?php

header('Content-Type: application/json');

$ipList = file('ip-list.txt', FILE_IGNORE_NEW_LINES);
echo json_encode($ipList);

?>