<?php 
    session_start();
    include 'includes/header.php';
?>
    <title>RFM - Royalty Free Music</title>
    <link rel="stylesheet" href="css-explore/style.css">
    <link rel="stylesheet" href="css-explore/waves.css">
    <link rel="stylesheet" href="css-login/style.css">
</head>
<body>
    <?php include 'includes/navbar.php';?>

    <div class="hero">
        <div class="hero-overlay">
            <div class="form-box">              
                <section class="signup-form">
                    <form action="addSong.inc.php" method="post" id="login" class="input-group" enctype="multipart/form-data">
                        <input type="text" name="title" class="input-field" placeholder="ENTER TITLE" required>
                        <input type="text" name="artist" class="input-field" placeholder="ENTER ARTIST" required>
                        <label>Songs Audio file:</label>
                        <input type="file" accept="audio/*" name="audio" class="input-field" required>
                        <label>Songs Cover file:</label>
                        <input type="file" accept="image/*" name="cover" class="input-field" required>
                        <input type="text" name="duration" class="input-field" placeholder="ENTER DURATION" required>
                        <select name="genre" class="input-field" placeholder="NONE">
                            <option value="None">ENTER GENRE</option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Hip hop">Hip hop</option>
                            <option value="Jazz">Jazz</option>
                        </select>
                        <select name="mood" class="input-field" placeholder="NONE">
                            <option value="None">ENTER MOOD</option>
                            <option value="Cheerful">Cheerful</option>
                            <option value="Happy">Hapyy</option>
                            <option value="Sad">Sad</option>
                            <option value="Angry">Angry</option>
                        </select>
                        <select name="instrument" class="input-field">
                            <option value="None">ENTER MAIN INSTRUMENT</option>
                            <option value="Piano">Piano</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Drum">Drum</option>
                        </select>
                        <button type="submit" name="submit" class="submit-btn">Upload</button>
                    </form>
                </section>
            </div>
        </div>
    </div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="javascript/audioplayer.js"></script>
<script src="javascript/waves.js"></script>
<script src="javascript/script-explore.js"></script>


</html>

<?php
    mysqli_close($conn);
?>