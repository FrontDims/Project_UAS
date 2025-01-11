<?php
$host = "localhost";  // IP atau hostname server database
$user = "root";       // Username MySQL
$password = "";       // Password MySQL (kosong jika default pada XAMPP)
$dbname = "yummyapp"; // Nama database

$conn = new mysqli($host, $user, $password, $dbname);
// Periksa apakah koneksi berhasil
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
