<?php 
    session_start();
    include 'includes/header.php';
?>
    
    <title>RFM - Royalty Free Music</title>
    <link rel="stylesheet" href="css-explore/style.css">
    <link rel="stylesheet" href="css-includes/explore-library_base.css">
    <link rel="stylesheet" href="css-explore/waves.css"> 
</head>
<body>
    <?php include 'includes/navbar.php';?>

    <div class="sortingNavigation">
        <div class="exploretextcontainer">
            <p class="exploretext">Explore</p>
            <button class="hamburger" onclick="filterhamburger()"><i class="material-icons">menu</i></button>
        </div>

        <div class="sortresult">
            
            <div class="sortresultbtn topsrb">    
                <button class="sortbutton active" onclick="sortSongs('main-container', 'musicList', 2, 15, 'false', 0, 0)" id="NEWBTN" >NEW</button>
                <button class="sortbutton" onclick="sortSongs('main-container', 'musicList', 1, 15, 'false', 0, 0)" id="POPULARBTN" >POPULAR</button>
                <button class="sortbutton" onclick="sortSongs('main-container', 'musicList', 3, 15, 'false', 0, 0)" id="MOSTDLBTN" >MOST DOWNLOADED</button>
            </div>
        </div>
    </div>

    <!-- content -->
    <div class="main-container" id="main-container"> 
        <ul class="filters" id="filters">

            <div class="filtercontainer">

            <div class="sortresult sidesrb">
                <div class="exploretextcontainer">
                    <p class="sideetext">Explore</p>
                </div>
                    <div class="sortresultbtn">    
                        <button class="sortbutton active topsb" onclick="sortSongs('main-container', 'musicList', 2, 15, 'false', 0, 0)" id="NEWBTN2">NEW</button>
                        <button class="sortbutton" onclick="sortSongs('main-container', 'musicList', 1, 15, 'false', 0, 0)" id="POPULARBTN2" >POPULAR</button>
                        <button class="sortbutton" onclick="sortSongs('main-container', 'musicList', 3, 15, 'false', 0, 0)" id="MOSTDLBTN2" >MOST DOWNLOADED</button>
                    </div>
                </div>
                <button class="accordion showfilter1">Genres <i class="material-icons ddarrow1 arrowicon">chevron_right</i></button>
                <div class="panel">
                    <button onclick="filter('JAZZ', 'genre')" id="JAZZ" >JAZZ</button>
                    <button onclick="filter('ELECTRONIC', 'genre')" id="ELECTRONIC" >ELECTRONIC</button>
                    <button onclick="filter('HIP HOP', 'genre')" id="HIPHOP" >HIP HOP</button>
                    <button onclick="filter('COUNTRY', 'genre')" id="COUNTRY" >COUNTRY</button>
                    <button onclick="filter('POP', 'genre')" id="POP" >POP</button>
                    <button onclick="filter('ROCK', 'genre')" id="ROCK" >ROCK</button>
                    <button onclick="filter('CINEMATIC', 'genre')" id="CINEMATIC" >CINEMATIC</button>    
                    <button onclick="filter('CLASSICAL', 'genre')" id="CLASSICAL" >CLASSICAL</button>
                    <button onclick="filter('FUTURE BASS', 'genre')" id="FUTUREBASS" >FUTURE BASS</button>    
                </div>

                <button class="accordion showfilter2">Mood <i class="material-icons ddarrow2 arrowicon">chevron_right</i></button>
                <div class="panel">
                    <button onclick="filter('HAPPY', 'mood')" id="HAPPY" >HAPPY</button>
                    <button onclick="filter('SAD', 'mood')" id="SAD" >SAD</button>
                    <button onclick="filter('JOYFUL', 'mood')" id="JOYFUL" >JOYFUL</button>
                    <button onclick="filter('NOSTALGIA', 'mood')" id="NOSTALGIA" >NOSTALGIA</button>
                    <button onclick="filter('PEACEFUL', 'mood')" id="PEACEFUL" >PEACEFUL</button>
                    <button onclick="filter('CHILL', 'mood')" id="CHILL">CHILL</button>
                    <button onclick="filter('ANGRY', 'mood')" id="ANGRY" >ANGRY</button>
                    <button onclick="filter('INTENSE', 'mood')" id="INTENSE" >INTENSE</button>
                    <button onclick="filter('SLEEP', 'mood')" id="SLEEP" >SLEEP</button>
                    <button onclick="filter('WORKOUT', 'mood')" id="WORKOUT" >WORKOUT</button>
                </div>

                <!--
                <button class="accordion showfilter3">Theme <i class="material-icons ddarrow3 arrowicon">chevron_right</i>
                </button>
                <div class="panel">
                    <button>UNKNOWN</button>
                </div>
-->
                <button class="accordion showfilter3">Instruments <i class="material-icons ddarrow3 arrowicon">chevron_right</i>
                </button>
                <div class="panel">
                    <button onclick="filter('DRUMS', 'instrument')" id="DRUMS" >DRUMS</button>
                    <button onclick="filter('GUITAR', 'instrument')" id="GUITAR" >GUITAR</button>
                    <button onclick="filter('PIANO', 'instrument')" id="PIANO" >PIANO</button>
                    <button onclick="filter('WOODWIND', 'instrument')" id="WOODWIND" >WOODWIND</button>
                    <button onclick="filter('STRING', 'instrument')" id="STRING" >STRING</button>
                    <button onclick="filter('BRASS', 'instrument')" id="BRASS" >BRASS</button>
                    <button onclick="filter('PRECUSSION', 'instrument')" id="PRECUSSION" >PRECUSSION</button>
                    <button onclick="filter('SYNTH', 'instrument')" id="SYNTH" >SYNTH</button>
                </div>
               

            </div>
        </ul>
        <div id="ONE" class="tabcontent"></div><div id="TWO" class="tabcontent"></div><div id="THREE" class="tabcontent"></div><div id="FOUR" class="tabcontent"></div><div id="FIVE" class="tabcontent"></div><div id="SIX" class="tabcontent"></div><div id="SEVEN" class="tabcontent"></div>

        <ul id="musicList" class="musiclist">
            <!--
            <li onclick="play()">    
                <div class="details" onclick="openCity(event, 'London')" id="defaultOpen">
                    <button class="playmusic" ><i class=" material-icons" title="Play">play_arrow</i></button>
                    <img class="cover" src="http://s2.hulkshare.com/song_images/original/8/c/d/8cd78bb2fce2651b759f3586853f1885.jpg" alt="">
                    <div class="info">
                        <div>
                            <p class="title">Comptine d'un autre été</p>
                            <p class="composer">Upwards</p>
                        </div>
                        <div class="tagcont">
                            <p class="tags">EDM</p>
                            <p class="tags">Future</p>
                            <p class="time">3:59 </p>
                        </div>
                    </div>
                </div>         
                <div class="rightIcons">
                    <div class="dropdown">
                        <span>
                            <button class="more"><i class="material-icons" title="Add to playlist">more_vert</i></button>
                        </span>
                        <div class="dropdown-content">
                            <p>Download</p>
                            <p>Like</p>
                            <p>Save</p>
                            <p>Notifications</p>
                            <p>Notify Me</p>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </li>
            -->
        </ul> 


<!--<button class="addtoplaylistbuttontest" id="myBtn2">ADD TO PLAYLIST</button>-->

<div id="myModal2" class="modal2">
    <div class="modal-content2">
        <button class="close2"><i class="material-icons">close</i></button>
        <h1>Add to...</h1>

        <div class="plb-container">
                <div class="addToPlaylistPanel" id="addToPlaylistPanel">     

                </div>
        </div>
    </div>
</div>

<div id="content">
  <input type="file" id="thefile" accept="audio/*" />
  <canvas id="canvas" width="876" height="722"></canvas>
  <audio id="audio" controls="" src="../rfm/resources/songs/audio/Monster (Future Bass Remix).mp3"></audio>
</div>


    </div>
    <?php include 'includes/bottom-nav.php';?>
    <?php include 'includes/songsTable.php';?>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="javascript/waves.js"></script>
    <script src="javascript/script-explore.js"></script>
    <script src="javascript/sortingAlgorithms.js"></script>
    <script>
        sortSongs("main-container", "musicList", 2, 30, "false", 0, 0);
    </script>
</body>
</html>

<?php
    mysqli_close($conn);
?>