<?php

if (isset($_POST["submit"])) {
    
    $title = $_POST["title"];
    $artist = $_POST["artist"];
    $audio = $_POST["audio"];
    $cover = $_POST["cover"];
    $duration = $_POST["duration"];
    $genre = $_POST["genre"];
    $mood = $_POST["mood"];
    $instrument = $_POST["instrument"];
    $listens = 0;
    $downloads = 0;
    $likes = 0;

    require_once 'includes/dbh.inc.php';
    require_once 'includes/functions.inc.php';

    if (emptyInputSongUpload($title, $artist) !== false) {
        header("location: dashboard.php?error=emptyinput");
        exit();
    }

    $currentDirectory = getcwd();
    $uploadDirectoryCovers = "/resources/songs/covers/";
    $uploadDirectoryAudio = "/resources/songs/audio/";

    $coverErrors = []; // Store errors here

    $coverExtensionsAllowed = ['jpeg','jpg','png']; // These will be the only file extensions allowed 

    $coverName = $_FILES["cover"]["name"];
    $coverSize = $_FILES["cover"]["size"];
    $coverTmpName  = $_FILES["cover"]["tmp_name"];
    $coverType = $_FILES["cover"]["type"];

    $coverExtension = strtolower(end(explode('.',$coverName)));
    
    $uploadPath = $currentDirectory . $uploadDirectoryCovers . basename($coverName); 

    if (!in_array($coverExtension,$coverExtensionsAllowed)) {
        $coverErrors[] = "This file extension is not allowed. Please upload a JPEG or PNG file." . $coverName;
    }

    if ($coverSize > 4000000) {
        $coverErrors[] = "File exceeds maximum size (4MB)";
    }

    if (empty($coverErrors)) {
        $didUpload = move_uploaded_file($coverTmpName, $uploadPath);

        if ($didUpload) {
            echo "The file " . basename($coverName) . " has been uploaded";
        } else {
            echo "An error occurred. Please contact the administrator. " . $coverTmpName . " and " . $uploadPath;
        }
    } else {
        foreach ($coverErrors as $error) {
            echo $error . "These are the errors" . "\n";
        }
    }

    $audioErrors = []; // Store errors here

    $audioExtensionsAllowed = ['mp3','aac','wav', 'm4a', 'FLAC', 'wma']; // These will be the only file extensions allowed 

    $audioName = $_FILES["audio"]["name"];
    $audioSize = $_FILES["audio"]["size"];
    $audioTmpName  = $_FILES["audio"]["tmp_name"];
    $audioType = $_FILES["audio"]["type"];

    $audioExtension = strtolower(end(explode('.',$audioName)));
    
    $uploadPath = $currentDirectory . $uploadDirectoryAudio . basename($audioName); 

    if (!in_array($audioExtension,$audioExtensionsAllowed)) {
        $audioErrors[] = "This file extension is not allowed. Please upload a JPEG or PNG file." . $audioName;
    }

    if (empty($audioErrors)) {
        $didUpload = move_uploaded_file($audioTmpName, $uploadPath);

        if ($didUpload) {
            echo "The file " . basename($audioName) . " has been uploaded";
        } else {
            echo "An error occurred. Please contact the administrator. " . $audioTmpName . " and " . $uploadPath;
        }
    } else {
        foreach ($audioErrors as $error) {
            echo $error . "These are the errors" . "\n";
        }
    }
    uploadSong($connection, $title, $artist, basename($audioName), basename($coverName), $listens, $downloads, $likes, $duration, $genre, $mood, $instrument);
}
else {
    header("location: dashboard.php");
    exit();
}