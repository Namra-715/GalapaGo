<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Plan Your Trip</title>
    <link rel="stylesheet" type="text/css" href="tourist-agencies.css">
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

    <h7 id="agencies">Tourist Agencies</h7>
    <form id="agencyForm" action="" method="POST">
        <h6 id="agencyName">Agency Name</h6>
        <input id="agencyNameInput" type="text" name="agencyNameInput" required>
        <h6 id="agencyAddress">Agency Address</h6>
        <input id="agencyAddressInput" type="text" name="agencyAddressInput" required>
        <h6 id="agencyNumber" >Phone Number</h6>
        <input id="agencyNumberInput" type="text" name="agencyNumberInput" required>
        <h6 id="agencyEmail">Email Address</h6>
        <input id="agencyEmailInput" type="text" name="agencyEmailInput" required>
        <h6 id="agencyWebsite">Website</h6>
        <input id="agencyWebsiteInput" type="text" name="agencyWebsiteInput">
        <h6 id="agencyPicture">Photo</h6>
        <input id="agencyPictureInput" type="text" name="agencyPictureInput">
        <button type="submit" id="pushMe" name="SubmitButton">SUBMIT</button>
    </form>
</div>
</body>
</html>

<?php

if(isset($_POST['SubmitButton'])){
    $agencyNameInput = $_POST['agencyNameInput'];
    $agencyAddressInput = $_POST['agencyAddressInput'];
    $agencyNumberInput = $_POST['agencyNumberInput'];
    $agencyEmailInput = $_POST['agencyEmailInput'];
    $agencyWebsiteInput = $_POST['agencyWebsiteInput'];
    $agencyPictureInput = $_POST['agencyPictureInput'];

    if(!empty($agencyNameInput) || !empty($agencyAddressInput) || !empty($agencyNumberInput) || !empty($agencyEmailInput) || !empty($agencyPictureInput)){

        $host = "galapago-1.cfcw10dspx0r.us-east-1.rds.amazonaws.com";
        $dbUsername = "admin";
        $dbPassword = "Galapagos-20";
        $dbname = "GalapaGo";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

        if(mysqli_connect_error()){

            die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());

        } else {/*
          if(!empty($agencyPictureInput)){
              $file = addslashes(file_get_contents($_FILES["agencyPictureInput"]["tmp_name"]));
              echo "FILE VARIABLE CREATED";
          }*/

            $SELECT = "SELECT agencyNameInput From GalapaGo.TouristAgencies Where agencyNameInput = ? Limit 1";
            $INSERT = "INSERT Into GalapaGo.TouristAgencies (agencyNameInput, agencyAddressInput, agencyNumberInput, agencyEmailInput, agencyWebsiteInput, agencyPictureInput) values(?, ?, ?, ?, ?, ?)";

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $agencyNameInput);
            $stmt->execute();
            $stmt->bind_result($agencyNameInput);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sssss", $agencyNameInput, $agencyAddressInput, $agencyNumberInput, $agencyEmailInput, $agencyWebsiteInput);
                $stmt->execute();
                echo "New tourist agency inserted successfully";

            } else {

                echo "Tourist agency of that name already in database";

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
