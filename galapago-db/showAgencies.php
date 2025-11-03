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
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM GalapaGo.TouristAgencies";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<table class='table' id='myTable'>
        <thead>
            <tr>
                <th scope='col'>Agency Name</th>
                <th scope='col'>Agency Address</th>
                <th scope='col'>Agency Number</th>
                <th scope='col'>Agency Email</th>
                <th scope='col'>Agency Website</th>
                <th scope='col'>Agency Picture</th>
                <th scope='col'>Delete Agency</th>
            </tr>
        </thead>
        <tbody>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td scope='col'>" . $row["agencyNameInput"]."</td>
                <td scope='col'>" . $row["agencyAddressInput"]."</td>
                <td scope='col'>" . $row["agencyNumberInput"]."</td>
                <td scope='col'>" . $row["agencyEmailInput"]."</td>
                <td scope='col'>" . $row["agencyWebsiteInput"]."</td>
                <td scope='col'>" . $row["agencyPictureInput"]."' alt='".$row['agencyNameInput']."' /></td>
                <td><a onclick='javascript:confirmationDelete($(this));return false;' href='delete.php?hotelNameInput=".$row['hotelNameInput']."'>DELETE</a></td>
              </tr>";

    }
    echo "</tbody>
  </table>";
} else {
    echo "0 results";
}
$conn->close();
?>
