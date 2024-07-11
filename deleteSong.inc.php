<?php

if(isset($_POST["submit"])) {
    
    $id = $_POST['id'];
    
    require_once 'includes/dbh.inc.php';
    require_once 'includes/functions.inc.php';

    $sql = "DELETE FROM songs WHERE id = $id;";
    $statement = mysqli_stmt_init($connection);
    if(!mysqli_stmt_prepare($statement, $sql)) {
        header("location: dashboard.php?songDeletionFailed");
        exit();
    }

    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    echo $id;
    header("location: dashboard.php?error=none");
    exit();
    
}