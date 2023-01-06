<!--
<?php

if (isset($_GET['ip'])) {
    $ip = $_GET['ip'];
    file_put_contents('ip-list.txt', $ip . "\n", FILE_APPEND);
}

?>
-->

<?php

$ip = $_GET['ip'];
file_put_contents('ip-list.txt', $ip . "\n", FILE_APPEND);

?>