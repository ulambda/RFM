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

<body>
    <?php include 'includes/navbar.php';?>
<div class="fourofour-container">
    <div class="fourofour">
        <p>404</p>
        <a class="plus101container">
            <a href="505.php" class="plus101button">+101=</a>
        </a>
        <a class="tip">You're not supposed to be here.</a>
        <a class="backbuttoncontainer">
            <a href="index.php" class="backbutton">Go Back</a>
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