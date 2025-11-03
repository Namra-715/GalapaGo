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

$sql = "SELECT * FROM GalapaGo.TouristAttractions";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<table class='table' id='myTable'>
        <thead>
            <tr>
                <th scope='col'>Attraction Name</th>
                <th scope='col'>Attraction Address</th>
                <th scope='col'>Attraction Number</th>
                <th scope='col'>Attraction Email</th>
                <th scope='col'>Attraction Website</th>
                <th scope='col'>Attraction Hours</th>
                <th scope='col'>Attraction Fare</th>
                <th scope='col'>Attraction Picture</th>
                <th scope='col'>Delete Attraction</th>
            </tr>
        </thead>
        <tbody>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td scope='col'>" . $row["attractionsNameInput"]."</td>
                <td scope='col'>" . $row["attractionsAddressInput"]."</td>
                <td scope='col'>" . $row["attractionsNumberInput"]."</td>
                <td scope='col'>" . $row["attractionsEmailInput"]."</td>
                <td scope='col'>" . $row["attractionsWebsiteInput"]."</td>
                <td scope='col'>" . $row["attractionsHoursInput"]."</td>
                <td scope='col'>" . $row["attractionsFareInput"]."</td>
                <td scope='col'>" . $row["attractionsPictureInput"]."' alt='".$row['attractionsNameInput']."' /></td>
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
