<?php 
    session_start();

    if(!isset($_SESSION['usersUsername'])){ //if login in session is not set
        header("Location: 404.php ");
    }

    include 'includes/header.php';
?>
    <title>RFM | Dashboard</title>
    <link rel="stylesheet" href="css-dashboard/style.css">
    <link rel="stylesheet" href="css-explore/waves.css"> 
    <link rel="stylesheet" href="css-includes/songs-list-styling.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="​stylesheet">
</head>
<body>
    <?php include 'includes/navbar.php';?>  
    <main>
        <div class="container">
            <div class="profile">
                <div class="profile-picture">
                    <div onclick="profileSettingsFunction()" class="on-hover" title="Change Profile Picture">
                    <span onclick="profileSettingsFunction()" class="material-icons">
                        photo_camera
                        </span>
                    </div>
                    
                    <?php 
                    if(htmlspecialchars($_SESSION["usersProfilePicture"]) === "resources/users/profilePicture/" || htmlspecialchars($_SESSION["usersProfilePicture"]) === "") {
                        
                        echo '<img onclick="profileSettingsFunction()" src="resources/users/profilePicture/defualt_profile_image_large_224px.png" alt="Default Profile Image" style="width:12.25rem"/>';
                    } else {
                        echo '<img onclick="profileSettingsFunction()" src="' . htmlspecialchars($_SESSION["usersProfilePicture"]) . '" alt="Default Profile Image" style="width:100%; height:100%;"/>';                  
                    }
                    ?>
                    
                </div>
                <br>
                <h1 id="artistText"><?php echo htmlspecialchars($_SESSION["usersUsername"]); ?></h1>
                <p><?php echo htmlspecialchars($_SESSION["userEmail"]); ?></p>
                <div class="analytics-header">
                    <h2>Profile Analytics</h2>
                    <p onclick="profileSettingsFunction()">Profile Settings</p>
                </div>
                <div class="profile-settings">
                    <div class="profile-settings-card" id="profile-settings-card">
                        <div class="profile-settings-header">
                            <h2>Profile Settings</h2>
                            <span class="material-icons" onclick="profileSettingsFunctionHide()">
                                close
                            </span>
                        </div>
                        <div class="settings">
                            <div>
                                <h4>Change Profile Picture</h4>
                                <p id="changeProfilePicture"><?php echo htmlspecialchars($_SESSION["usersProfilePicture"]); ?></p>
                                <!--<input type="file" accept="image/*" name="profilePicture"> -->
                                <div class="profile-picture" onclick="editProfilePicture()"></div>
                            </div>
                            <div>
                                <h4>Change Username</h4> 
                                <p id="changeUsername"><?php echo htmlspecialchars($_SESSION["usersUsername"]); ?></p>
                                <span class="material-icons" onclick="editUsername()">
                                    edit
                                </span>
                            </div>
                            <div>
                                <h4>Change Password</h4> 
                                <h2 id="changePassword">.........</h2>
                                <span class="material-icons" onclick="editPassword()">
                                    vpn_key
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-analytics">
                    <div>
                        <h3>Total Listens:</h3>
                        <h2 id="totalListens">0</h2>
                    </div>
                    <div>
                        <h3>Total Downloads:</h3>
                        <h2 id="totalDownloads">0</h2>
                    </div>
                    <div>
                        <h3>Total Uploads:</h3>
                        <h2 id="totalUploads">0</h2>
                    </div>
                </div>
            </div>
                <div class="recent">
                    <h1 id="recentHeader">Recent</h1>
                    <div>
                        <img class="song-cover" id="recentSongCover"></img>
                        <div class="song-details">
                            <h2 id="recentSongName">A New Song</h1>
                            <h4 id="recentSongArtist">By Upwards.</h4>
                            <div class="statistics">
                                <div>
                                    <p id="recentSongListens">0 Listens</p>
                                    <p id="recentSongDownloads">0 Downloads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="playlist">
                    <div class="container">
                        <h1>Upload song:</h1>
                        <div class="form-box">
                            <section class="signup-form">
                                <form action="addSong.inc.php" method="post" id="login" class="input-group" enctype="multipart/form-data">
                                    <input type="text" name="title" class="input-field" placeholder="ENTER TITLE" required>
                                    <input id="artistInput" type="text" name="artist" class="input-field" placeholder="ENTER ARTIST" required readonly>
                                    <label>Songs Audio file:</label>
                                    <input type="file" accept="audio/*" name="audio" class="input-field" required>
                                    <label>Songs Cover file:</label>
                                    <input type="file" accept="image/*" name="cover" class="input-field" required>
                                    <input type="text" name="duration" class="input-field" placeholder="ENTER DURATION" required>
                                    <select name="genre" class="input-field" placeholder="NONE">
                                        <option value="None">ENTER GENRE</option>
                                        <option value="Jazz">Jazz</option>
                                        <option value="Electronic">Electronic</option>
                                        <option value="Hip hop">Hip hop</option>
                                        <option value="Country">Country</option>
                                        <option value="Pop">Pop</option>
                                        <option value="Rock">Rock</option>
                                        <option value="Cinematic">Cinematic</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Future bass">Future bass</option>
                                    </select>
                                    <select name="mood" class="input-field" placeholder="NONE">
                                        <option value="None">ENTER MOOD</option>
                                        <option value="Happy">Happy</option>
                                        <option value="Sad">Sad</option>
                                        <option value="Joyful">Joyful</option>
                                        <option value="Nostalgia">Nostalgia</option>
                                        <option value="Peaceful">Peaceful</option>
                                        <option value="Chill">Chill</option>
                                        <option value="Angry">Angry</option>
                                        <option value="Intense">Intense</option>
                                        <option value="Sleep">Sleep</option>
                                        <option value="Workout">Workout</option>
                                    </select>
                                    <select name="instrument" class="input-field">
                                        <option value="None">ENTER MAIN INSTRUMENT</option>
                                        <option value="Drums">Drums</option>
                                        <option value="Guitar">Guitar</option>
                                        <option value="Piano">Piano</option>
                                        <option value="Woodwind">Woodwind</option>
                                        <option value="String">String</option>
                                        <option value="Brass">Brass</option>
                                        <option value="Precussion">Precussion</option>
                                        <option value="Synth">Synth</option>
                                    </select>
                                    <button type="submit" name="submit" class="submit-btn">Upload</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="songs">
                    <div class="container">
                        <div class="song-header">
                            <h2>All Songs</h2>
                        </div>
                        <div id="AllSongsContainer" class="song-container">
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <p id="username" style="display:none;"><?php echo htmlspecialchars($_SESSION["usersUsername"]); ?></p>

    <?php include 'includes/bottom-nav.php';?>
    <?php include 'includes/songsTable.php';?>

    <!-- Javascript -->
    <script src="javascript/sortingAlgorithms.js"></script>
    <script>
        sortSongs("AllSongsContainer", "musiclist", 2, 100, "false", 0, 1);
    </script>
    <script src="javascript/script-dashboard.js"></script>
    
</body>
</html>