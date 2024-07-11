<?php
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    $username = $_POST['username'];
    $newPassword = $_POST['newPassword'];

    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    $sql = "UPDATE users SET usersPassword = '$hashedPassword' WHERE usersUsername = '$username'";
    if($connection->query($sql)===TRUE){
        echo "DATA updated";
    }
    exit();

    