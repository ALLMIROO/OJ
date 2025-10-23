<?php
$conn = mysqli_connect('localhost', 'root', '', 'baza');
if (!$conn) {
    die("Błąd połączenia z bazą danych");
}

$data = $_POST['data_rez'];
$osoby = $_POST['liczba_osob'];
$telefon = $_POST['telefon'];

$sql = "INSERT INTO rezerwacje (data_rez, liczba_osob, telefon)
        VALUES ('$data', '$osoby', '$telefon')";

mysqli_query($conn, $sql);
echo "Dodano rezerwację do bazy";
mysqli_close($conn);
?>


Dziękujemy za rezerwacje!!!