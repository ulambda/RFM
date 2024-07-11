<link rel="stylesheet" href="css-includes/navbar.css"> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<header>
    <button class="mobile-nav-btn"><i class="material-icons">menu</i></button>
    <div class="logo">
        <a href="index.php">
            <img id="navBar-logo" src="resources/STRIGHTFRM.png"></img>
        </a>
    </div>
    <div class="navlinks">
        <button onclick="window.location.href='index.php';" id="homeLink" class="navbtn"><p>Home</p></button>
        <button onclick="window.location.href='explore.php';" id="exploreLink" class="navbtn"><p>Explore</p></button>
        <?php
            if(isset($_SESSION["userid"])) {
                echo "<button onclick=\"window.location.href='library.php';\" id=\"libraryLink\" class=\"navbtn\"><p>Library</p></button>";
            }
        ?>
        <button onclick="window.location.href='about.php';" id="aboutLink" class="navbtn"><p>About</p></button>
        <button title="Search" id="searchIcon" class="searchbartoggle searchbartoggleorigin material-icons">search</button>


        <div class="navsearch">
            <div class="navsearchbar">
                <form class="topnavform" action="explore.php" method="POST">
                    <input type="text" name="search" placeholder="Search">
                    <button title="Search" type="submit" name="submit-search" class="material-icons searchbutton">search</button>
                </form>
                <button title="Close" id="closesearch" class="material-icons searchbartoggle">clear</button> 
            </div>
        </div>


        <?php
            if(isset($_POST['submit-search'])) {
                echo "
                <div class=\"navsearch\">
                    <div class=\"navsearchbar\">
                        <form class=\"topnavform\" action=\"explore.php\" method=\"POST\">
                            <input type=\"text\" name=\"search\" placeholder=\"Search\" value=\"" . $_POST['search'] . "\">
                            <button title=\"Search\" type=\"submit\" name=\"submit-search\" class=\"material-icons searchbutton\">search</button>
                        </form>
                        <button title=\"Close\" id=\"closesearch\" class=\"material-icons searchbartoggle\">clear</button> 
                    </div>
                </div>";
            }
        ?>


    </div>
    <div class="rightlinks">
    <?php
        if (!isset($_SESSION["userid"])) {
            echo "<button onclick=\"window.location.href='login.php'\" class='flat-buttons logIn' id=\"loggedOutButton\"><p>Login / Sign Up</p></button>";
        }
        else {
            echo "<div class='accountDropdown'>
                    <button onclick=\"accountDropDown()\" class='waves-disable dropbtn'>";
            if(htmlspecialchars($_SESSION["usersProfilePicture"]) === "" || htmlspecialchars($_SESSION["usersProfilePicture"]) === "resources/users/profilePicture/") {
                    
                echo '<img src="resources/users/profilePicture/defualt_profile_image_large_224px.png" alt="Default Profile Image" width="150px" height="auto" class="profilePicture clickOff" id="profilePicture"/>';
            } else {
                echo '<img src="' . htmlspecialchars($_SESSION["usersProfilePicture"]) . '" alt="Default Profile Image" width="150px" height="auto" class="profilePicture clickedOff" id="profilePicture"/>';                  
            }
            echo "</button>
            <div id='myDropdown' class='dropdown-content-nav'>
                <a href='dashboard.php'>Account</a>
                <a href='documentation.php'>Documentation</a>
                <a href='includes/logout.inc.php'>Logout</a>
            </div>
            </div>";
            
        }
    ?>
    </div>

    <div class="mobile-sidenav">
        <button onclick="window.location.href='index.php';" id="homeLink" class="sidebtn"><p>Home</p></button>
        <button onclick="window.location.href='explore.php';" id="exploreLink" class="sidebtn"><p>Explore</p></button>
        
        <?php
            if(isset($_SESSION["userid"])) {
                echo "<button onclick=\"window.location.href='library.php';\" id=\"libraryLink\" class=\"sidebtn\"><p>Library</p></button>";
            }
        ?>
        <button onclick="window.location.href='about.php';" id="documentationLink" class="sidebtn"><p>About</p></button>
    </div>

</header>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="javascript/waves.js"></script>
<script src="javascript/script-home.js"></script>
<script type="text/javascript">
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function accountDropDown() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("profilePicture").classList.toggle("clickedOn");
        document.getElementById("profilePicture").classList.toggle("clickedOff");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.profilePicture')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var dropdownButton = document.getElementById("profilePicture");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            if(dropdownButton.classList.contains("clickedOn")) {
                dropdownButton.classList.remove("clickedOn")
            }
            if(!dropdownButton.classList.contains("clickedOff")) {
                dropdownButton.classList.toggle("clickedOff");
            }
        }
    }
    }

    Waves.attach('button', ['waves-effect', 'waves-light']);
    Waves.attach('.navlinks a', ['waves-effect', 'waves-light']);
    Waves.attach('.flat-buttons', ['waves-effect', 'waves-light']);
    Waves.attach('.dropbtn', ['waves-effect', 'waves-light']);
    Waves.init();
</script>
<script>
    $(".searchbartoggle").click(function(){
        $( ".navbtn" ).toggleClass("blind");
        $( ".navsearchbar" ).toggleClass("show")
        $( ".navsearch" ).toggleClass("expand")
        $( ".navlinks" ).toggleClass("expand2")
        $( ".searchbartoggleorigin" ).toggleClass("smol")
    });  
</script>
<script>
    $(".searchbartoggle").click(function(){
        $(".logo").toggleClass("gtfo")
        $(".mobile-nav-btn").toggleClass("gtfo")
        $(".rightlinks").toggleClass("gtfo")
        $(".accountDropdown").toggleClass("gtfo")
        $(".mobilesearchtoggle").toggleClass("gtfo")
        $(".navlinks").toggleClass("fillnav")
        $(".mobile-sidenav").toggleClass("gtfo")

    });
</script>
<?php
    if(isset($_POST['submit-search'])) {
        echo "
            <script>
            jQuery(function(){
                    $( \".navbtn\" ).toggleClass(\"blind\");
                    $( \".navsearchbar\" ).toggleClass(\"show\")
                    $( \".navsearch\" ).toggleClass(\"expand\")
                    $( \".navlinks\" ).toggleClass(\"expand2\")
                    $( \".searchbartoggleorigin\" ).toggleClass(\"smol\")
            });
            </script>
            <script>
            jQuery(function(){
                    $(\".logo\").toggleClass(\"gtfo\")
                    $(\".mobile-nav-btn\").toggleClass(\"gtfo\")
                    $(\".rightlinks\").toggleClass(\"gtfo\")
                    $(\".accountDropdown\").toggleClass(\"gtfo\")
                    $(\".mobilesearchtoggle\").toggleClass(\"gtfo\")
                    $(\".navlinks\").toggleClass(\"fillnav\")
                    $(\".mobile-sidenav\").toggleClass(\"gtfo\")

                });
            </script>";
    }
?>

<script>
    $(".mobile-nav-btn").click(function(){
        $(".mobile-sidenav").toggleClass("show-mobile-sidenav")

    });
</script>

<script>
/* 
$(document).ready(function(){
    $(".searchbartoggle").click(function(){
        $(this).text($(this).text() == 'search' ? 'clear' : 'search');
    });
});
*/
</script>
