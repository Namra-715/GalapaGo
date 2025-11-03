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

$sql = "SELECT * FROM GalapaGo.FoodandDrink";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    echo "<table class='table' id='myTable'>
        <thead>
            <tr>
                <th scope='col'>Restaurant Name</th>
                <th scope='col'>Address</th>
                <th scope='col'>Number</th>
                <th scope='col'>Email</th>
                <th scope='col'>Website</th>
                <th scope='col'>Cuisine</th>
                <th scope='col'>Hours</th>
                <th scope='col'>Wifi Availability</th>
                //<th scope='col'>Restaurant Picture</th>
                <th scope='col'>Delete Restaurant</th>
            </tr>
        </thead>
        <tbody>";
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
                <td scope='col'>" . $row["foodNameInput"]."</td>
                <td scope='col'>" . $row["foodAddressInput"]."</td>
                <td scope='col'>" . $row["foodNumberInput"]."</td>
                <td scope='col'>" . $row["foodEmailInput"]."</td>
                <td scope='col'>" . $row["foodWebsiteInput"]."</td>
                <td scope='col'>" . $row["foodCuisineInput"]."</td>
                <td scope='col'>" . $row["foodHoursInput"]."</td>
                <td scope='col'>" . $row["foodWifiInput"]."</td>
                //<td scope='col'>" . $row["foodPictureInput"]."' alt='".$row['foodNameInput']."' /></td>
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
