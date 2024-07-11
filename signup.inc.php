<?php

if (isset($_POST["submit"])) {
    
    require_once 'includes/dbh.inc.php';
    require_once 'includes/functions.inc.php';
    
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordRepeat = $_POST['passwordRepeat'];
    $profilePictureDirectory = $_POST['profilePicture'];
    
    if (emptyInputSignup($username, $email, $password, $passwordRepeat) !== false) {
        header("location: login.php?error=emptyinput");
        exit();
    }
    
    if (invalidUsername($username) !== false) {
        header("location: login.php?error=invalidUsername");
        exit();
    }
    
    if(invalidEmail($email) !== false) {
        header("location: login.php?error=invalidEmail");
        exit();
    }
    
    if(passwordMatch($password, $passwordRepeat) !== false) {
        header("location: login.php?error=invalidRepeatPassword");
        exit();
    }
    
    if(usernameExists($connection, $username, $email) !== false) {
        header("location: login.php?error=usernameTaken");
        exit();
    }

    if(usernameExists($connection, $username, $email) !== false) {
        header("location: login.php?error=usernameTaken");
        exit();
    }

    if(emptyProfilePictureDirectory($profilePictureDirectory) !== false) {
        $profilePictureDirectory = 'defualt_profile_image_large_224px.png';
    }

    $currentDirectory = getcwd();
    $uploadDirectoryProfilePicture = "/resources/users/profilePicture/";

    $profilePictureErrors = []; // Store errors here

    $profilePictureExtensionsAllowed = ['jpeg','jpg','png']; // These will be the only file extensions allowed 

    if($profilePictureDirectory !== 'defualt_profile_image_large_224px.png') {

        $profilePictureName = $_FILES["profilePicture"]["name"];
        $profilePictureSize = $_FILES["profilePicture"]["size"];
        $profilePictureTmpName  = $_FILES["profilePicture"]["tmp_name"];
        $profilePictureType = $_FILES["profilePicture"]["type"];

        $profilePictureExtension = strtolower(end(explode('.',$profilePictureName)));
        
        $uploadPath = $currentDirectory . $uploadDirectoryProfilePicture . basename($profilePictureName); 

        echo $profilePictureName;
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
    }
    createUser($connection, $username, $email, $password, basename($profilePictureName));
}
else {
    header("location: login.php");
    exit();
}