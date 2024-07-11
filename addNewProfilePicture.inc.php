<?php

require_once 'includes/dbh.inc.php';
require_once 'includes/functions.inc.php';

$currentDirectory = getcwd();
$uploadDirectoryProfilePicture = "/resources/users/profilePicture/";

$profilePictureErrors = []; // Store errors here

$profilePictureExtensionsAllowed = ['jpeg','jpg','png']; // These will be the only file extensions allowed 

$profilePictureName = $_FILES["file"]["name"];
$profilePictureSize = $_FILES["file"]["size"];
$profilePictureTmpName  = $_FILES["file"]["tmp_name"];
$profilePictureType = $_FILES["file"]["type"];

$profilePictureExtension = strtolower(end(explode('.',$profilePictureName)));

$uploadPath = $currentDirectory . $uploadDirectoryProfilePicture . basename($profilePictureName); 

if (!in_array($profilePictureExtension,$profilePictureExtensionsAllowed)) {
    $profilePictureErrors[] = "This file extension is not allowed. Please upload a JPEG or PNG file." . $profilePictureName;
}

if ($profilePictureSize > 4000000) {
    $profilePictureErrors[] = "File exceeds maximum size (4MB)";
}

if (empty($profilePictureErrors)) {
    $didUpload = move_uploaded_file($profilePictureTmpName, $uploadPath);

    if ($didUpload) {
        echo "The file " . basename($profilePictureName) . " has been uploaded";
    } else {
        echo "An error occurred. Please contact the administrator. " . $profilePictureTmpName . " and " . $uploadPath;
    }
} else {
    foreach ($profilePictureErrors as $error) {
        echo $error . "These are the errors" . "\n";
    }
}