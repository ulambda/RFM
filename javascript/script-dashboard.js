// WAVE EFFECTS //
Waves.attach("button", ["waves-effect", "waves-light"]);
Waves.attach(".bottom-btn", ["waves-effect", "waves-light"]);
Waves.attach(".ripple", ["waves-effect", "waves-light"]);
Waves.attach(".playmusic", ["waves-effect", "waves-light"]);
Waves.attach(".active", ["waves-effect", "waves-dark"]);
Waves.attach("#sort", ["waves-effect", "waves-dark"]);
Waves.attach("#sort option", ["waves-effect", "waves-dark"]);
Waves.attach(".dropdown-content p", ["waves-effect", "waves-dark"]);

Waves.init();

const filterOne = document.querySelector(".filter-button-one");
const filterTwo = document.querySelector(".filter-button-two");
const accordion = document.querySelector(".accordion");

var clickOne = false;
function filterClickOne() {
  if (clickOne == false) {
    filterOne.classList.add("material-icons-clicked");
    clickOne = true;
  } else {
    filterOne.classList.remove("material-icons-clicked");
    clickOne = false;
  }
}
var clickTwo = false;
function filterClickTwo() {
  if (clickTwo == false) {
    filterTwo.classList.add("material-icons-clicked");
    accordion.classList.add("clicked")
    clickTwo = true;
  } else {
    filterTwo.classList.remove("material-icons-clicked");
    accordion.classList.remove("clicked")
    clickTwo = false;
  }
}

const profileSettings = document.querySelector(".profile-settings");
var clickThree = false;
function profileSettingsFunction() {
  if (clickThree == false) {
    profileSettings.classList.add("clicked");
    clickThree = true;
  }
}
function profileSettingsFunctionHide() {
  if (clickThree == true) {
    profileSettings.classList.remove("clicked");
    clickThree = false;
  }
}

window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      profileSettingsFunction();
  }
}

function reloadP() {
  setTimeout(function(){
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
  },1000);
  
}

var recentSongName = myTitles[myTitles.length - 1];
var recentSongCover = myCovers[myCovers.length - 1];
var recentSongArtist = myArtists[myArtists.length - 1];
var recentSongListen = myListens[myListens.length - 1];
var recentSongDownloads = myDownloads[myDownloads.length - 1];

if(recentSongCover != undefined) {
  document.getElementById("recentSongCover").src = recentSongCover;

  document.getElementById("recentSongName").innerHTML = recentSongName;
  document.getElementById("recentSongArtist").innerHTML = recentSongArtist;
  document.getElementById("recentSongListens").innerHTML = recentSongListen + " Listens";
  document.getElementById("recentSongDownloads").innerHTML = recentSongDownloads + " Downloads";
}
else {
  document.getElementById("recentSongCover").parentNode.removeChild(document.getElementById("recentSongCover"));
  document.getElementById("recentSongName").innerHTML = "Upload your first song below...";
  document.getElementById("recentHeader").parentNode.removeChild(document.getElementById("recentHeader"));
  document.getElementById("recentSongArtist").parentNode.removeChild(document.getElementById("recentSongArtist"));
  document.getElementById("recentSongListens").parentNode.removeChild(document.getElementById("recentSongListens"));
  document.getElementById("recentSongDownloads").parentNode.removeChild(document.getElementById("recentSongDownloads"));

}

var totalListens = 0;
for (var i = 0; i < myListens.length; i++) {
  totalListens += myListens[i];
}
document.getElementById("totalListens").innerHTML = totalListens;

var totalDownloads = 0;
for (var i = 0; i < myDownloads.length; i++) {
  totalDownloads += myDownloads[i];
}
document.getElementById("totalDownloads").innerHTML = totalDownloads;

document.getElementById("totalUploads").innerHTML = myDirectories.length;

document.getElementById("artistInput").value = document.getElementById("artistText").innerHTML;


var oldUsername = document.getElementById("changeUsername").innerText;
var newPassword;
var newProfilePicture;
var usernameChanged = false;
var passwordChanged = false;
var profilePictureChanged = false;

function editUsername() {

  var changeUsernamePreElement = document.getElementById("changeUsername");
  var inputUsernameElement = document.getElementById("inputUsernameElement");

  if(changeUsernamePreElement) {
    changeUsernamePreElement.style.display = "none";
    inputUsernameElement = document.createElement("input");
    inputUsernameElement.id = "inputUsernameElement";
    changeUsernamePreElement.parentNode.replaceChild(inputUsernameElement, changeUsernamePreElement);
    inputUsernameElement.value = changeUsernamePreElement.innerHTML;
  }
  else {
    usernameChanged = true;
    changeUsernamePreElement = document.createElement("p");
    changeUsernamePreElement.id = "changeUsername";

    changeUsernamePreElement.innerHTML = inputUsernameElement.value;

    inputUsernameElement.parentNode.replaceChild(changeUsernamePreElement, inputUsernameElement);

    $.ajax({
      url: "includes/changeUsername.inc.php",
      type: 'post',
      data: 'oldUsername='+oldUsername+'&newUsername='+document.getElementById("changeUsername").innerText
    })
    reloadP();
  }
}

function editPassword() {

  var changePasswordPreElement = document.getElementById("changePassword");
  var inputPasswordElement = document.getElementById("inputPasswordElement");

  if(changePasswordPreElement) {
    changePasswordPreElement.style.display = "none";
    inputPasswordElement = document.createElement("input");
    inputPasswordElement.id = "inputPasswordElement";
    inputPasswordElement.type = "password";
    changePasswordPreElement.parentNode.replaceChild(inputPasswordElement, changePasswordPreElement);
    inputPasswordElement.value = changePasswordPreElement.innerHTML;
  }
  else {
    passwordChanged = true;
    newPassword = inputPasswordElement.value;
    changePasswordPreElement = document.createElement("p");
    changePasswordPreElement.id = "changePassword";

    changePasswordPreElement.innerHTML = ".........";

    inputPasswordElement.parentNode.replaceChild(changePasswordPreElement, inputPasswordElement);

    $.ajax({
      url: "includes/changePassword.inc.php",
      type: 'post',
      data: 'username='+oldUsername+'&newPassword='+newPassword
    })
    reloadP();
  }
}

var fullPath = document.getElementById("changeProfilePicture").innerText;
if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    newProfilePicture = filename;
    document.getElementById("changeProfilePicture").innerText = filename;
}
  
function editProfilePicture() {

  var changeProfilePicturePreElement = document.getElementById("changeProfilePicture");
  var inputProfilePictureElement = document.getElementById("inputProfilePictureElement");

  if(changeProfilePicturePreElement) {
    changeProfilePicturePreElement.style.display = "none";
    inputProfilePictureElement = document.createElement("input");
    inputProfilePictureElement.id = "inputProfilePictureElement";
    inputProfilePictureElement.type = "file";
    inputProfilePictureElement.setAttribute("accept", "image/*");
    changeProfilePicturePreElement.parentNode.replaceChild(inputProfilePictureElement, changeProfilePicturePreElement);
  }
  else {
    profilePictureChanged = true;

    changeProfilePicturePreElement = document.createElement("p");
    changeProfilePicturePreElement.id = "changeProfilePicture";

    var fullPath = inputProfilePictureElement.value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        newProfilePicture = filename;
        changeProfilePicturePreElement.innerHTML = filename;
    }

    var inputClone = inputProfilePictureElement.cloneNode(true);
    inputClone.style.display = "none";
    inputProfilePictureElement.parentNode.appendChild(inputClone);

    inputProfilePictureElement.parentNode.replaceChild(changeProfilePicturePreElement, inputProfilePictureElement);

    var fd = new FormData();
    var files = $('#inputProfilePictureElement')[0].files;
    console.log($('#inputProfilePictureElement')[0].files);
    // Check file selected or not
    if(files.length > 0 ){
      fd.append('file',files[0]);
      $.ajax({
        url: 'addNewProfilePicture.inc.php',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(response){
           if(response != 0){
              $("#img").attr("src",response); 
              $(".preview img").show(); // Display image element
           }else{
              alert('file not uploaded');
           }
        },
      });
    }

    $.ajax({
      url: "includes/changeProfilePicture.inc.php",
      type: 'post',
      data: 'profilePicture='+newProfilePicture+'&username='+oldUsername
    })

    reloadP();
  }
}
