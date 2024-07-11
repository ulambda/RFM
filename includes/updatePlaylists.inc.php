<?php

    session_start();
    
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    $userID = $_SESSION["userid"];
    $newPlaylistString = $_POST['newPlaylistString'];

    $sql = "UPDATE users SET Playlists = '$newPlaylistString' WHERE usersId = '$userID'";
    if($connection->query($sql)===TRUE){
        echo "DATA updated";
    }

    $_SESSION["usersPlaylists"] = $newPlaylistString;
    exit();

    