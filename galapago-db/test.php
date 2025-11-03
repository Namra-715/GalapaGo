<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Plan Your Trip</title>
    <link rel="stylesheet" type="text/css" href="admin.css">
</head>
<body>
<div class="sidebar">
    <img src="../Assets/animal.png" alt="Image Not Found">
    <h1 class="title">GalapaGo!</h1>
    <h2 class="adminSite">Admin Site</h2>

    <hr>

    <h3>Add Information</h3>

    <!-- Add in links when we have them -->
    <h4 id="learnHeader">Learn</h4>
    <a href="#" class="links" id="learnLink">Learn</a>

    <h4 id="explore">Explore</h4>
    <a href="#" class="links" id="knowBefore">Know Before You Go</a>

    <h5 id="plan">Plan Your Trip</h5>
    <a href="plan-your-trip.html" class="links" id="topActivities">Top Activities</a>

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
    <select id="categorySelect">
        <option>Hotels</option>
    </select>

    <h7 id="hotels">Hotels</h7>
    <form id="hotelForm" action="" method="post">
        <h6 id="hotelName">Hotel Name</h6>
        <input id="hotelNameInput" type="text" name="hotelNameInput" required>
        <h6 id="hotelAddress">Hotel Address</h6>
        <input id="hotelAddressInput" type="text" name="hotelAddressInput" required>
        <h6 id="hotelNumber" >Phone Number</h6>
        <input id="hotelNumberInput" type="text" name="hotelNumberInput" required>
        <h6 id="hotelEmail">Email Address</h6>
        <input id="hotelEmailInput" type="text" name="hotelEmailInput" required>
        <h6 id="hotelWebsite">Website</h6>
        <input id="hotelWebsiteInput" type="text" name="hotelWebsiteInput">
        <button type="submit" id="pushMe" name="SubmitButton">SUBMIT</button>
    </form>
</div>
</body>
</html>

<?php

if(isset($_POST['SubmitButton'])){
    $hotelNameInput = $_POST['hotelNameInput'];
    $hotelAddressInput = $_POST['hotelAddressInput'];
    $hotelNumberInput = $_POST['hotelNumberInput'];
    $hotelEmailInput = $_POST['hotelEmailInput'];
    $hotelWebsiteInput = $_POST['hotelWebsiteInput'];

    if(!empty($hotelNameInput) || !empty($hotelAddressInput) || !empty($hotelNumberInput) || !empty($hotelEmailInput)){

        $host = "galapago-1.cfcw10dspx0r.us-east-1.rds.amazonaws.com";
        $dbUsername = "admin";
        $dbPassword = "Galapagos-20";
        $dbname = "GalapaGo";

        $conn = new mysqLi($host, $dbUsername, $dbPassword, $dbname);

        if(mysqli_connect_error()){
            die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
        } else {
            $SELECT = "SELECT hotelNameInput From Hotels Where hotelNameInput = ? Limit 1";
            $INSERT = "INSERT Into Hotels (hotelNameInput, hotelAddressInput, hotelNumberInput, hotelEmailInput, hotelWebsiteInput); values(?, ?, ?, ?, ?)";

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $hotelNameInput);
            $stmt->execute();
            $stmt->bind_result($hotelNameInput);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sssss", $hotelNameInput, $hotelAddressInput, $hotelNumberInput, $hotelEmailInput, $hotelWebsiteInput);
                $stmt->execute();
                echo "New record inserted successfully";
            } else {
                echo "Hotel of that name already in database";
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