<?php

    $serverName = "localhost";
    $databaseUsername = "root";
    $databasePassword = "";
    $databaseName = "RFM";

    $connection = mysqli_connect($serverName, $databaseUsername, $databasePassword, $databaseName);
    $songID = $_POST['songID'];
    $statType = $_POST['statType'];

    if($statType === '0') {
        $sql = "UPDATE songs SET listens = listens + 1 WHERE id = '$songID'";
        if($connection->query($sql)===TRUE){
            echo "DATA updated";
        }
    }
    
    if($statType === '1') {
        $sql = "UPDATE songs SET downloads = downloads + 1 WHERE id = '$songID'";
        if($connection->query($sql)===TRUE){
            echo "DATA updated";
        }
    }

    if($statType === '2') {
        $sql = "UPDATE songs SET likes = likes + 1 WHERE id = '$songID'";
        if($connection->query($sql)===TRUE){
            echo "DATA updated";
        }
    }

    