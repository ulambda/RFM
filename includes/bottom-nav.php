<link rel="stylesheet" href="css-includes/bottom-nav.css">
    <!-- bottom navigation -->
    <section class="btm-nav">
        <div class="col1">
            <div class="subpart">
                <p id="songTitle" class="songTitle"></p>
                <p id="songArtist" class="artist"></p>
            </div>
        </div>
        <div class="col2">
            <div class="part">
                <img id="btm-nav_cover" class="cover">
                <div id="audio-player-container">
                    <audio src=" " preload="metadata" loop></audio>
                    <!-- swaps with pause icon -->
                    <button class="playButton" id="play-icon" onclick="play('current')"><img id="playPauseButton" src="resources/bootstrap_icons/play-fill_white.svg" style="width:1.5625rem;height:1.5625rem;margin-right:0.45625rem;"></img></button>
                    <button class="nextButton" id="skip-icon" onclick="next()"><img id="nextButton" src="resources/bootstrap_icons/skip-end-fill_white.svg" style="width:1.5625rem;height:1.5625rem"></img></button>
                    
                    <span id="current-time" class="timeBottomNav" style="margin-left:7.3px;">0:00</span>
                    <input class="durationScroller" type="range" id="seek-slider" max="100" value="0">

                    <a onclick="downloadSong()" id="btm-nav_downloadButton" class="bottom-btn" download><img class="bottom-nav-icons" title="Download" src="resources/bootstrap_icons/download_white.svg"></img></a>
                    
                    <?php
                        if(isset($_SESSION["userid"])) {
                            echo "<a id=\"openAddToPlaylistPopupButton\" class=\"bottom-btn\"><img class=\"bottom-nav-icons\" title=\"Add to playlist\" style=\"color: white;\" src=\"resources/bootstrap_icons/plus-lg_white.svg\"></a>";
                        }
                    ?>
                    <input class="volumeScroller" type="range" id="volume-slider" max="100" value="100">
                    <button id="mute-icon"></button>
                </div>

                <!-- <div class="subpart">
                    <button class="playButton" onclick="play('current')"><img id="playPauseButton" src="resources/play.png" width="25px" height="25px"></img></button>
                </div>
                <div class="subpart">
                    <button class="nextButton" onclick="next()"><img src="resources/fast-forward.png" width="25px" height="25px"></img></button>
                </div>
                <div class="subpart">
                    <p class="songtime"></p>
                </div> -->
            </div>
        </div>
    </section>