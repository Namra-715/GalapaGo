<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Plan Your Trip</title>
    <link rel="stylesheet" type="text/css" href="transportation.css">
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

    <h7 id="trans">Transportation</h7>
    <form id="transForm" action="" method="POST">
        <h6 id="transName">Service Name</h6>
        <input id="transNameInput" type="text" name="transNameInput" required>
        <h6 id="transAddress">Service Address</h6>
        <input id="transAddressInput" type="text" name="transAddressInput" required>
        <h6 id="transNumber" >Phone Number</h6>
        <input id="transNumberInput" type="text" name="transNumberInput" required>
        <h6 id="transEmail">Email Address</h6>
        <input id="transEmailInput" type="text" name="transEmailInput" required>
        <h6 id="transWebsite">Website</h6>
        <input id="transWebsiteInput" type="text" name="transWebsiteInput">
        <h6 id="transPicture">Photo</h6>
        <input id="transPictureInput" type="text" name="transPictureInput">
        <button type="submit" id="pushMe" name="SubmitButton">SUBMIT</button>
    </form>
</div>
</body>
</html>

<?php

if(isset($_POST['SubmitButton'])){
    $transNameInput = $_POST['transNameInput'];
    $transAddressInput = $_POST['transAddressInput'];
    $transNumberInput = $_POST['transNumberInput'];
    $transEmailInput = $_POST['transEmailInput'];
    $transWebsiteInput = $_POST['transWebsiteInput'];
    $$transPictureInput = $_POST['$transPictureInput'];

    if(!empty($transNameInput) || !empty($transAddressInput) || !empty($transNumberInput) || !empty($transEmailInput) || !empty($transWebsiteInput) || !empty($transPictureInput)){

        $host = "galapago-1.cfcw10dspx0r.us-east-1.rds.amazonaws.com";
        $dbUsername = "admin";
        $dbPassword = "Galapagos-20";
        $dbname = "GalapaGo";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

        if(mysqli_connect_error()){

            die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());

        } else {

            if(!empty($transPictureInput)){
                  $file = addslashes(file_get_contents($_FILES["transPictureInput"]["tmp_name"]));
                  echo "FILE VARIABLE CREATED";
            }

            $SELECT = "SELECT transNameInput From GalapaGo.Transportation Where transNameInput = ? Limit 1";
            $INSERT = "INSERT Into GalapaGo.Transportation (transNameInput, transAddressInput, transNumberInput, transEmailInput, transWebsiteInput, transPictureInput) values(?, ?, ?, ?, ?, ?)";

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $transNameInput);
            $stmt->execute();
            $stmt->bind_result($transNameInput);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("ssssss", $transNameInput, $transAddressInput, $transNumberInput, $transEmailInput, $transWebsiteInput, $transPictureInput);
                $stmt->execute();
                echo "New transportation service inserted successfully";

            } else {

                echo "Transportation Service of that name already in database";

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
