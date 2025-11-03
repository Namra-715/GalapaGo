<style type="text/css">
table {
    position: absolute;
    top: 300px;
}
</style>
<?php

require 'admin.html';

$host = "galapago-1.cfcw10dspx0r.us-east-1.rds.amazonaws.com";
$dbUsername = "admin";
$dbPassword = "Galapagos-20";
$dbname = "GalapaGo";

// Create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
// Check connection
if(mysqli_connect_error()){
    die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
} else{

$sql = "SELECT * FROM GalapaGo.Supermarkets";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    echo "<table class='table' id='myTable'>
        <thead>
            <tr>
                <th scope='col'>Market Name</th>
                <th scope='col'>Market Address</th>
                <th scope='col'>Market Hours</th>
                <th scope='col'>Market Picture</th>
                <th scope='col'>Delete Market</th>
            </tr>
        </thead>
        <tbody>";
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
                <td scope='col'>" . $row["marketNameInput"]."</td>
                <td scope='col'>" . $row["marketAddressInput"]."</td>
                <td scope='col'>" . $row["marketHoursInput"]."</td>
                <td scope='col'>" . $row["marketPictureInput"]."' alt='".$row['marketNameInput']."' /></td>
                <td><a onclick='javascript:confirmationDelete($(this));return false;' href='delete.php?hotelNameInput=".$row['hotelNameInput']."'>DELETE</a></td>
              </tr>";
    }
    echo "</tbody>
  </table>";
} else {
    echo "0 results";
}
$conn->close();

}
?>
