<?php

function emptyInputSignup($username, $email, $password, $passwordRepeat) {
    $result;
    if(empty($username) || empty($email) || empty($password) || empty($passwordRepeat)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function emptyProfilePictureDirectory($profilePictureDirectory) {
    if(empty($profilePictureDirectory)) {
        return true;
    }
}

function invalidUsername($username) {
    $result;
    if (preg_match('/[^A-Za-z0-9_ -]/', $username)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function invalidEmail($email) {
    $result;
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function passwordMatch($password, $passwordRepeat) {
    $result;
    if($password !== $passwordRepeat) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function usernameExists($connection, $username, $email) {
    $sql = "SELECT * FROM users WHERE usersUsername = ? OR usersEmail = ?;";
    $statement = mysqli_stmt_init($connection);
    if(!mysqli_stmt_prepare($statement, $sql)) {
        header("location: ../login.php?error=statementFailed");
        exit();
    }

    mysqli_stmt_bind_param($statement, "ss", $username, $email);
    mysqli_stmt_execute($statement);

    $resultData = mysqli_stmt_get_result($statement);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    }
    else {
        $result = false;
        return $result;
    }

    mysqli_stmt_close($statement);
}

function createUser($connection, $username, $email, $password, $profilePicture) {
    $sql = "INSERT INTO users (usersUsername, usersEmail, usersPassword, usersPictureDirectory, Playlists) VALUES (?, ?, ?, ?, ?);";
    $statement = mysqli_stmt_init($connection);
    if(!mysqli_stmt_prepare($statement, $sql)) {
        header("location: ../login.php?error=statementFailed");
        exit();
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $profilePictureDir = "resources/users/profilePicture/" . $profilePicture;

    $playlists = "Liked Songs;";

    mysqli_stmt_bind_param($statement, "sssss", $username, $email, $hashedPassword, $profilePictureDir, $playlists);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    
    header("location: login.php?error=none");
    exit();
}

function emptyInputLogin($username, $password) {
    $result;
    if(empty($username) || empty($password)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function loginUser($connection, $username, $password) {
    $usernameExists = usernameExists($connection, $username, $username);

    if ($usernameExists === false) {
        header("location: ../login.php?error=wronglogin");
        exit();
    }

    $passwordHashed = $usernameExists["usersPassword"];
    $checkPassword = password_verify($password, $passwordHashed);

    if($checkPassword === false) {
        header("location: ../login.php?error=wronglogin");
        exit();
    }
    else if($checkPassword === true) {
        session_start();
        $_SESSION["userid"] = $usernameExists["usersId"];
        $_SESSION["userEmail"] = $usernameExists["usersEmail"];
        $_SESSION["usersUsername"] = $usernameExists["usersUsername"];
        $_SESSION["usersProfilePicture"] = $usernameExists["usersPictureDirectory"];
        $_SESSION["usersPlaylists"] = $usernameExists["Playlists"];
        $_SESSION["artist"] = $usernameExists["artist"];
        header("location: ../index.php");
        exit();
    }
}

function emptyInputSongUpload($title, $artist) {
    $result;
    if(empty($title) || empty($artist)){
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function uploadSong($connection, $title, $artist, $audio, $cover, $listens, $downloads, $likes, $duration, $genre, $mood, $instrument) {

    $sql = "INSERT INTO songs (directory, title, artist, cover, listens, downloads, likes, duration, genre, mood, instrument) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
    $statement = mysqli_stmt_init($connection);
    if(!mysqli_stmt_prepare($statement, $sql)) {
        header("location: dashboard.php?errorstatementFailed");
        exit();
    }

    $audioDir = "resources/songs/audio/" . $audio;
    $coverDir = "resources/songs/covers/" . $cover;
    echo "<p>", $title, " ", $artist, " ", $audio, " ", $cover, "</p>";
    mysqli_stmt_bind_param($statement, "sssssssssss", $audioDir, $title, $artist, $coverDir, $listens, $downloads, $likes, $duration, $genre, $mood, $instrument);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    header("location: dashboard.php?error=none");
    exit();
}