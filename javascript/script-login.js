var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register()
{
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    y.style.visibility = "visible";
    y.style.opacity = "1"
    z.style.left = "50%";
}

function login()
{
    x.style.visibility = "visible";
    x.style.opacity = "1";
    y.style.visibility = "hidden";
    y.style.opacity = "0"
    z.style.left = "0px";
}