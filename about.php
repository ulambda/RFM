<?php 
    session_start();
    include 'includes/header.php';
?>
    
    <title>RFM - Royalty Free Music</title>
    <link rel="stylesheet" href="css-about/style.css">
    <link rel="stylesheet" href="css-explore/waves.css"> 
</head>
<body>
    <?php include 'includes/navbar.php';?>


    <!-- content -->
<div class="main-container" id="main-container"> 
    <div class="head">
        <div class="head-container">
            <div class="head-content"> 
                <p class="head-text">Who are we?</p>
                <p class="subtext">The Biggest and Bestiest Royalty Free Music Libary In The World - That's Free!</p>
                <?php
                    if (!isset($_SESSION["userid"])) {
                        echo "<a href=\"login.php\"><button class=\"head-btn\">Sign up now!</button></a>";
                    }
                    else {
                        echo "<a href=\"explore.php\"><button class=\"head-btn\">Explore now!</button></a>";
                        
                    }
                ?>
            </div>            
        </div>
    </div>
    <div class="features">
        <p class="featureheadtext"></p>

        <div class="features-container">
            <div class="features-content">
                <img class="imagepannel border1" src="resources/AlbumCover4.png" alt="">
                <div class="textpannel tp1">
                    <h1>Never worry about licencing again!</p>
                    <p>RFM has you covered. All the music found on our website is 100% royalty free. Whether it be a youtube video or short film, RFM's large and free music libery will enhance your personal projects.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="features2">
    <p class="featureheadtext"></p>

        <div class="features-container">
            <div class="features-content">
                <div class="textpannel tp2">
                <h1>RFM is the best source for carefully curated Royalty Free Music</p>
                    <p>With unlimited downloads, talented artists and a wide collection of genres, RFM is your one stop shop for royalty free music</p>                
                </div>
                <img class="imagepannel border2" src="resources/about-page-img-1.png" alt="">

            </div>
        </div>
    </div>


    <div class="features3">
    <p class="featureheadtext"></p>
        <div class="features-container">
            <div class="features-content fc32">
                <div class="textpannel fc3 tp3">
                <h1 class="whitetext">Well what are you waiting for?</p>
                <div class="search2">
                    <form action="explore.php" method="POST">
                        <input type="text" name="search" placeholder="What mood are you looking for?...">
                        <button type="submit" name="submit-search" class="material-icons search-icon"></button> 
                    </form>
                </div>               
            </div>
            <!--
            <div class="search">
                <form action="explore.php" method="POST">
                    <input type="text" name="search" placeholder="What mood are you looking for?...">
                    <button type="submit" name="submit-search" class="material-icons search-icon">search</button> 
                </form>
            </div>
-->
            </div>
                <img class="coolerhero" src="resources/coolerhero.png" alt="">

        </div>
    </div>



</div>


    <?php include 'includes/bottom-nav.php';?>
    <?php include 'includes/songsTable.php';?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="javascript/waves.js"></script>
    <script src="javascript/script-library.js"></script>
    <script src="javascript/sortingAlgorithms.js"></script>
</body>
</html>

<?php
    mysqli_close($conn);
?>