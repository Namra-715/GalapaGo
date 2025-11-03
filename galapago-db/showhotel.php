/*<script type="text/Javascript">

function confirmation(item) {
  if (window.confirm("Do you really want to delete this item?")) {
    mysql_query("DELETE FROM Galapgo.Hotels WHERE item=" $item);
    /*var urllink = "/delete"
    urllink=urllink.concat(item, 'from', tableName)
    console.log(urllink)
    window.location.href = urllink
    location.reload();
  }
}

</script>*/
<script type="text/Javascript">
function confirmationDelete(anchor)
{
   var conf = confirm('Are you sure want to delete this record?');
   if(conf)
      window.location.assign(`showhotel.php`);
}
</script>
<style type="text/css">
table {
    position: absolute;
    top: 280px;
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

$sql = "SELECT * FROM GalapaGo.Hotels";

$result = $conn->query($sql);

/*function confirmation(item) {
  if (window.confirm("Do you really want to delete this item?")) {
    mysql_query("DELETE FROM Galapago.Hotels WHERE item=" item);
}*/

if ($result->num_rows > 0) {
    // output data of each row
    echo "<table class='table' id='myTable'>
        <thead>
            <tr>
                <th scope='col'>Hotel Name</th>
                <th scope='col'>Hotel Address</th>
                <th scope='col'>Hotel Number</th>
                <th scope='col'>Hotel Email</th>
                <th scope='col'>Hotel Website</th>
               // <th scope='col'>Hotel Picture</th>
                <th scope='col'>Delete Hotel</th>
            </tr>
        </thead>
        <tbody>";
        // row for each hotel
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td scope='col'>" . $row["hotelNameInput"]."</td>
                <td scope='col'>" . $row["hotelAddressInput"]."</td>
                <td scope='col'>" . $row["hotelNumberInput"]."</td>
                <td scope='col'>" . $row["hotelEmailInput"]."</td>
                <td scope='col'>" . $row["hotelWebsiteInput"]."</td>
               // <td scope='col'><img src='" . $row["hotelPictureInput"]."' alt='".$row['hotelNameInput']."' /></td>
                <td><a onclick='javascript:confirmationDelete($(this));return false;' href='delete.php?hotelNameInput=".$row['hotelNameInput']."'>DELETE</a></td>
              </tr>";
              // <img src="http://yoursite.com/images/filename.jpg" alt="description here" /> <-- formatting of what picture should look like, needs to be a link to a website that's on the internet
    }
      echo "</tbody>
    </table>";
} else {
    echo "0 results";
}
$conn->close();
?>
