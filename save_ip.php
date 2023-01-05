<?php
$password = "mein_passwort";

if ($_POST["password"] == $password) {
  // Speichere die IP-Adresse des Benutzers in der Datenbank
  $ip_address = $_SERVER["REMOTE_ADDR"];
  // Hier sollte man die IP-Adresse in einer Datenbank speichern.

  // Zeige alle gespeicherten IP-Adressen an
  $stored_ips = array("123.456.789.012", "987.654.321.098");
  foreach ($stored_ips as $ip) {
    echo "$ip<br>";
  }
} else {
  echo "Falsches Passwort!";
}
?>
