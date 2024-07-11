<?php 
    session_start();
    include 'includes/header.php';
?>
    <title>RFM</title>
    <link rel="stylesheet" href="css-home/style.css">
    <link rel="stylesheet" href="css-404/style.css">
    <link rel="stylesheet" href="css-includes/waves.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</head>
<style>
body {
	margin: 0;
	width: 100%;
	height: 100vh;
	font-family: "Exo", sans-serif;
	color: #fff;
    background-size: 100% 90%;
    background-image: url("https://c.tenor.com/CryWjpRLeMYAAAAC/hungry-all-the-carrots.gif");

    background: linear-gradient(transparent);
	animation: gradientBG 0s ease infinite;
}

</style>

<body>
    <?php include 'includes/navbar.php';?>
<div class="fourofour-container">
    <div class="fourofour">
        <p>505</p>
        <a class="tip">You're supposed to be here.</a>
        <a class="backbuttoncontainer">
            <a href="https://www.youtube.com/channel/UCnwypZWcthFZK2pczZmL8Bg" class="backbutton">Go Upwards</a>
        </a>
    </div>

</div>
    <?php include 'includes/bottom-nav.php';?>
    <?php include 'includes/songsTable.php';?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="javascript/waves.js"></script>
    <script src="javascript/script-home.js"></script>
    <script src="javascript/sortingAlgorithms.js"></script>

    
    </body>
</html>


<?php
    mysqli_close($conn);
?>