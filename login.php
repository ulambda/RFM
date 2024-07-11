<?php 
    session_start();
    include 'includes/header.php';
?>
    <title>RFM - Login/Signup</title>
    <link rel="stylesheet" href="css-login/style.css">
</head>
<body>
    <?php include 'includes/navbar.php';?>
    <div class="hero">
        <div class="form-box">
            <div class="button-box">
                <div id="btn"></div>
                <button type="button" class="toggle-btn" onclick="login()">LOGIN</button>
                <button type="button" class="toggle-btn" onclick="register()">SIGN UP</button>
            </div>                
            <section class="signup-form">
                <form action="includes/login.inc.php" method="post" id="login" class="input-group">
                    <input type="text" name="username-email" class="input-field" placeholder="ENTER USERNAME/EMAIL" required>
                    <input type="password" name="password" class="input-field" placeholder="ENTER PASSWORD" required>
                    <br>
                    <br>
                    <button type="submit" name="submit" class="submit-btn">LOG IN</button>
                </form>
                <form action="signup.inc.php" method="post" id="register" class="input-group" enctype="multipart/form-data">
                    <input type="text" name="username" class="input-field" placeholder="ENTER USERNAME" required>
                    <input type="text" name="email" class="input-field" placeholder="ENTER EMAIL" required>
                    <input type="password" name="password" class="input-field" placeholder="ENTER PASSWORD" required>
                    <input type="password" name="passwordRepeat" class="input-field" placeholder="ENTER REPEATED PASSWORD" required>
                    <br>
                    <br>
                    <p style="color: white">By creating an account you agree to our <a href="documentation.php#TOS" target="_blank" style="color:dodgerblue">Terms & Privacy</a>.</p>
                    <br>
                    <button type="submit" name="submit" class="submit-btn">SIGN UP</button>
                </form>

                <?php
                    if(isset($_GET["error"])) {
                        if($_GET["error"] == "emptyinput") {
                            echo "<p>Fill in all fields!</p>";
                        }
                        else if($_GET["error"] == "invalidUsername") {
                            echo "<p>Invalid username!</p>";
                        }
                        else if($_GET["error"] == "invalidEmail") {
                            echo "<p>Invalid email!</p>";
                        }
                        else if($_GET["error"] == "invalidRepeatPassword") {
                            echo "<p>Password not correctly repeated!</p>";
                        }
                        else if($_GET["error"] == "statementFailed") {
                            echo "<p>Something went wrong, try again!</p>";
                        }
                        else if($_GET["error"] == "usernameTaken") {
                            echo "<p>Username already taken!</p>";
                        }
                        else if($_GET["error"] == "none") {
                            echo "<p>You have successfully signed up!</p>";
                        }
                        else if($_GET["error"] == "wronglogin") {
                            echo "<p>Incorrect login information!</p>;";
                        }
                    }
                ?>
            </section>
        </div>
    </div>

    <script src="javascript/script-login.js"></script>
</body>
</html>