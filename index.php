<?php 
    session_start();
    include 'includes/header.php';
?>
    <title>RFM</title>
    <link rel="stylesheet" href="css-home/style.css">
    <link rel="stylesheet" href="css-includes/waves.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</head>
<body>
    <?php include 'includes/navbar.php';?>
    <div id="myModal2" class="modal2">
        <div class="modal-content2">
            <button class="close2"><i class="material-icons">close</i></button>
            <h1>Add to...</h1>
            <div class="addToPlaylistPanel" id="addToPlaylistPanel">     

            </div>
        </div>
    </div>
    <section class="herocontainerHome">
        <div class="heroHome">
        <div class="container">
            <div class="header-container">
                <h1>
                The World's Largest 
                Royalty Free Music Library
                </h1>
                <p> – that's free!</p>
            </div>
            <div class="search">
                <form action="explore.php" method="POST">
                    <input type="text" name="search" placeholder="What mood are you looking for?...">
                    <button type="submit" name="submit-search" class="material-icons search-icon">search</button> 
                </form>
            </div>
            <a class="arrow" href="#content">
                <span class="material-icons">
                    keyboard_arrow_down
                </span>
            </a>
        </div>
        </div>
    </section>
    <section class="content" id="content">
        <?php
            if (!isset($_SESSION["userid"])) {
                echo "<link rel=\"stylesheet\" href=\"css-about/style.css\">
                <div class=\"features\">
                            <p class=\"featureheadtext\"></p>
                    
                            <div class=\"features-container\">
                                <div class=\"features-content\">
                                    <img class=\"imagepannel border1\" src=\"resources/AlbumCover4.png\" alt=\"\">
                                    <div class=\"textpannel tp1\">
                                        <h1>Never worry about licencing again!</p>
                                        <p>RFM has you covered. All the music found on our website is 100% royalty free. Whether it be a youtube video or short film, RFM's large and free music libery will enhance your personal projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class=\"features2\">
                        <p class=\"featureheadtext\"></p>
                    
                            <div class=\"features-container\">
                                <div class=\"features-content\">
                                    <div class=\"textpannel tp2\">
                                    <h1>RFM is the best source for carefully curated Royalty Free Music</p>
                                        <p>With unlimited downloads, talented artists and a wide collection of genres, RFM is your one stop shop for royalty free music</p>                
                                    </div>
                                    <img class=\"imagepannel border2\" src=\"resources/about-page-img-1.png\" alt=\"\">
                    
                                </div>
                            </div>
                        </div>";
            }
        ?>
        <div id="listensSection">
            <div class="top-songs">
                <h1>most listened to songs</h1>
            </div>  
        </div>
        <div id="downloadsSection">
            <div class="top-songs">
                <h1>most downloaded songs</h1>
            </div>
        </div>
        <div id="newestSongs">
            <div class="top-songs">
                <h1>most recent songs</h1>
            </div>
        </div>
    </section>
    <?php include 'includes/bottom-nav.php';?>
    <?php include 'includes/songsTable.php';?>

    <style>
        #colored-button .btn { color: #fff; }
        #colored-button a, 
        #colored-button a:hover { background: #01BCFF; }
        #colored-button button,
        #colored-button button:hover { background: #1bb556; }
        #colored-button input,
        #colored-button input:hover { background: #ff4f0f; }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="javascript/waves.js"></script>
    <script src="javascript/script-home.js"></script>
    <script src="javascript/sortingAlgorithms.js"></script>
    <script>
        sortSongs("listensSection", "musiclist", 4, 10, "false", 0, 0, "upwards");
        //sortSongs("listensSection", "musiclist", 1, 10, "true", 0, 0);
        sortSongs("downloadsSection", "musiclist1", 3, 10, "true", 1, 0);
        sortSongs("newestSongs", "musiclist2", 2, 13, "false", 2, 0);
    </script>


    
</body>
</html>

<?php
    mysqli_close($conn);
?>