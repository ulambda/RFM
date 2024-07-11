<?php 
    session_start();
    include 'includes/header.php';
?>
    <title>Documentation</title>
    <link rel="stylesheet" href="css-documentation/aboutstyle.css">
    <link rel="stylesheet" href="css-includes/waves.min.css">
</head>
<body>
    <?php include 'includes/navbar.php';?>
    <div class="body-container">
        <div class="menu-container">
            <h1>Documentation</h1>
            <a href="#">Introduction</a>
            <div class="break"></div>
            <h1>Privacy & Terms</h1>
            <a href="#TOS">Terms of Service</a>
            <div></div>
            <a href="#PP">Privacy Policy</a>
            <div></div>
            <div class="break"></div>
            <h1>FAQ</h1>
            <a href="#WHATISRFM">What is RFM?</a>
            <div></div>
            <a href="#WHATDOESROYALTYFREEMEAN">What does Royalty Free mean?</a>
        </div>
        
        <div class="content-container">
            <div class="textcontent">
                <div id="INTRO">
                    <img src="resources/STRIGHTFRM.png" height="200px">
                    <h2 class="h2">Royalty Free Music</h2>
                    <p class="p">Welcome to RFM, a royalty free music database.</p>
                    <i class="p">This is the documentation page, so make sure you have a read of it before using this site.</i>
                </div>
                
                <div class="devider"></div>

                <div id="TOS">
                    <h2 class="h1">Terms of Service</h2>
                    <p class="p">The Terms of Service outlines the relationship between us and the user and what we expect from you. This documentation will also acts a EULA (end user license agreement) so be sure to read carefully.</p>
                    <h2 class="h2">1. Accepting the terms of service </h2>
                    <p class="p">First things first, you must read and accept all of the terms of service to use our site. This is a part of the process and you must abide by all of our guide lines. Failing to agree to our TOS will result in you not being able to use our site. This is just so there is no missunderstanding in terms of what you are allowed and not allowed to do.</p>
                    <h2 class="h2">2. User Requirements To Use Our Service</h2>
                    <p class="p">You must be atleast the age of 13 years old to use our service. If you are considered a minor in your country you must get permission from your legal guardian or a parent to read and accept our terms.</p>
                </div>

                <div class="devider"></div>

                <div id="PP">
                    <h2 class="h1">Privacy Policy</h2>
                    <p class="p">All of your personal information and login credential are encrypted.</p>
                    <h2 class="h2">What data do we collect?</h2>
                    <p class="p">We collect the interaction the users has with our database to improve user experience. Such as amount of times certain music has been clicked so that we can provide top music rankings.</p>
                    <h2 class="h2">What data don't we collect?</h2>
                    <p class="p">We do not collect your password. When you enter to sign up to our service all of your credentials are completely encrypted.</p>
                    <p class="p">We do not collect or save your ip address, we respect your privacy.</p>
                    <h2 class="h2">Do you sell our data?</h2>
                    <p class="p">We do not sell your data. When you entrust us with your information, no one inside or outside of our organisation can access it.</p>
                </div>

                <div class="devider"></div><br><br>

                <div id="WHATISRFM">
                    <h2 class="h1">FAQ</h2>
                    <h2 class="h2">What Is RFM?</h2>
                    <p class="p">RFM is a royalty free music streaming platfrom that lets you download and listen to license free music from our libarary to use for your personal projects.</p>
                </div>
                <div id="WHATDOESROYALTYFREEMEAN">
                    <h2 class="h2">What does Royalty Free mean?</h2>
                    <p class="p">Royalty Free or RF is the term used for material or resources that can be used without paying royalties or license fees. Royalty free material is made by people who work and give the community stuff for free. </p>
                    <p class="p"> Understand that royalty free dosn't mean copyright free, but you can use all the music on this website for your own personal projects like movies, skits, youtube videos ect.</p>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="javascript/waves.min.js"></script>

<script type="text/javascript">
    Waves.attach('button', ['waves-effect', 'waves-light']);
    Waves.attach('.ripple', ['waves-effect', 'waves-light']);
    Waves.attach('#myUL Li', ['waves-effect', 'waves-light']);
    Waves.attach('.active', ['waves-effect', 'waves-dark']);
    Waves.attach('#sort', ['waves-effect', 'waves-dark']);
    Waves.attach('#sort option', ['waves-effect', 'waves-dark']);

    Waves.init();
</script>
</html>