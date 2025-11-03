<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Plan Your Trip</title>
    <link rel="stylesheet" type="text/css" href="tourist-attractions.css">
</head>
<body>
<div class="sidebar">
    <img src="../Assets/animal.png" alt="Image Not Found">
    <h1 class="title">GalapaGo!</h1>
    <h2 class="adminSite">Admin Site</h2>

    <hr>

    <h3 id="addInfo">Add Information</h3>

    <a href="hotel.php" class="links" id="hotelLink">Hotels</a>
    <a href="food-and-drink.php" class ="links" id="fadLink">Food and Drink</a>
    <a href="supermarkets.php" class ="links" id="marketLink">Supermarkets</a>
    <a href="tourist-agencies.php" class ="links" id="agenciesLink">Tourist Agencies</a>
    <a href="tourist-attractions.php" class ="links" id="attractionsLink">Tourist Attractions</a>
    <a href="transportation.php" class ="links" id="transLink">Transportation</a>

    <h3 id="showTables">Show Tables</h3>

    <a href="showhotel.php" class="links" id="showHotels">Hotels</a>
    <a href="showfad.php" class ="links" id="showFAD">Food and Drink</a>
    <a href="showmarkets.php" class ="links" id="showMarkets">Supermarkets</a>
    <a href="showAgencies.php" class ="links" id="showAgencies">Tourist Agencies</a>
    <a href="showAttractions.php" class ="links" id="showAttractions">Tourist Attractions</a>
    <a href="showtrans.php" class ="links" id="showTrans">Transportation</a>

</div>

<div>
    <h1 id="planYourTrip">Plan Your Trip</h1>

    <h7 id="islandHop">Island Hop</h7>
    <h6 id="chooseIsland">Choose an Island</h6>
    <select name="island" required>
        <option selected hidden value="">Select Island</option>
        <option value="isabela">Isabela</option>
        <option value="santacruz">Santa Cruz</option>
        <option value="sancristobal">San Cristobal</option>
        <option value="floreana">Floreana</option>
    </select>

    <h6 id="chooseCategory">Choose a Category</h6>
    <select id="categorySelect" onChange="pageHandler(this.value);">
        <option selected hidden value="">Select Category</option>
        <option value = "hotel">Hotels</option>
        <option value = "food-and-drink">Food and Drink</option>
        <option value = "supermarkets">Supermarkets</option>
        <option value = "transportation">Transportation</option>
        <option value = "tourist-agencies">Tourist Agencies</option>
        <option value = "tourist-attractions">Tourist Attractions</option>
    </select>

    <script>
        function pageHandler(value){
             window.location.assign(`${value}.php`);
        }
    </script>

    <h7 id="attractions">Tourist Attractions</h7>
    <form id="attractionsForm" action="" method="POST">
        <h6 id="attractionsName">Attraction Name</h6>
        <input id="attractionsNameInput" type="text" name="attractionsNameInput" required>
        <h6 id="attractionsAddress">Attractions Address</h6>
        <input id="attractionsAddressInput" type="text" name="attractionsAddressInput" required>
        <h6 id="attractionsNumber" >Phone Number</h6>
        <input id="attractionsNumberInput" type="text" name="attractionsNumberInput" required>
        <h6 id="attractionsPicture">Photo</h6>
        <input id="attractionsPictureInput" type="text" name="attractionsPictureInput">
        <h6 id="attractionsWebsite">Website</h6>
        <input id="attractionsWebsiteInput" type="text" name="attractionsWebsiteInput">
        <h6 id="attractionsHours">Hours of Operation</h6>
        <input id="attractionsHoursInput" type="text" name="attractionsHoursInput" required>
        <h6 id="attractionsFare">Fare</h6>
        <input id="attractionsFareInput" type="text" name="attractionsFareInput" required>
        <button type="submit" id="pushMe" name="SubmitButton">SUBMIT</button>
    </form>
</div>
</body>
</html>

<?php

if(isset($_POST['SubmitButton'])){
    $attractionsNameInput = $_POST['attractionsNameInput'];
    $attractionsAddressInput = $_POST['attractionsAddressInput'];
    $attractionsNumberInput = $_POST['attractionsNumberInput'];
    $attractionsWebsiteInput = $_POST['attractionsWebsiteInput'];
    $attractionsHoursInput = $_POST['attractionsHoursInput'];
    $attractionsFareInput = $_POST['attractionsFareInput'];
    $attractionsPictureInput = $_POST['attractionsPictureInput'];

    if(!empty($attractionsNameInput) || !empty($attractionsAddressInput) || !empty($attractionsNumberInput) || !empty($attractionsHoursInput) || !empty($attractionsFareInput)){

        $host = "galapago-1.cfcw10dspx0r.us-east-1.rds.amazonaws.com";
        $dbUsername = "admin";
        $dbPassword = "Galapagos-20";
        $dbname = "GalapaGo";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

        if(mysqli_connect_error()){

            die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());

        } else {

            $SELECT = "SELECT attractionsNameInput From GalapaGo.TouristAttractions Where attractionsNameInput = ? Limit 1";
            $INSERT = "INSERT Into GalapaGo.TouristAttractions (attractionsNameInput, attractionsAddressInput, attractionsNumberInput, attractionsWebsiteInput, attractionsHoursInput, attractionsFareInput, attractionsPictureInput) values(?, ?, ?, ?, ?, ?, ?)";

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $attractionsNameInput);
            $stmt->execute();
            $stmt->bind_result($attractionsNameInput);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sssssss", $attractionsNameInput, $attractionsAddressInput, $attractionsNumberInput, $attractionsWebsiteInput, $attractionsHoursInput, $attractionsFareInput, attractionsPictureInput);
                $stmt->execute();
                echo "New tourist attraction inserted successfully";

            } else {

                echo "Tourist attraction of that name already in database";

            }

            $stmt->close();
            $conn->close();

        }

    } else{

        echo "Fields are required";
        die();

    }
}
?>
