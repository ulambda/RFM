<?php
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    $oldUsername = $_POST['oldUsername'];
    $newUsername = $_POST['newUsername'];

    if(usernameExists($connection, $newUsername, $newUsername) !== false) {
        header("location: login.php?error=usernameTaken");
        exit();
    }
    else {
        $sql = "UPDATE users SET usersUsername = '$newUsername' WHERE usersUsername = '$oldUsername'";
        if($connection->query($sql)===TRUE){
            echo "DATA updated";
        }

        $sqlTwo = "UPDATE songs SET artist = '$newUsername' WHERE artist = '$oldUsername'";
        if($connection->query($sqlTwo)===TRUE){
            echo "DATA updated";
        }

        session_start();
        $_SESSION["usersUsername"] = $newUsername;
        exit();
    }

    