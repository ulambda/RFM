<?php
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    $username = $_POST['username'];
    $profilePictureName = $_POST['profilePicture'];
    
    
    //$profilePictureDir = "resources/users/profilePicture/" . basename($profilePictureName);
    $profilePictureDir = "resources/users/profilePicture/" . basename($profilePictureName);

    $sql = "UPDATE users SET usersPictureDirectory = '$profilePictureDir' WHERE usersUsername = '$username'";
    if($connection->query($sql)===TRUE){
        echo "DATA updated";
    }

    session_start();
    $_SESSION["usersProfilePicture"] = $profilePictureDir;
    exit();

    