// WAVE EFFECTS //
Waves.attach('button', ['waves-effect', 'waves-light']);
Waves.attach('.bottom-btn', ['waves-effect', 'waves-light']);
Waves.attach('.ripple', ['waves-effect', 'waves-light']);
Waves.attach('.playmusic', ['waves-effect', 'waves-light']);
Waves.attach('.active', ['waves-effect', 'waves-dark']);
Waves.attach('#sort', ['waves-effect', 'waves-dark']);
Waves.attach('#sort option', ['waves-effect', 'waves-dark']);
Waves.attach(".dropdown-content p", ["waves-effect", "waves-dark"]);


Waves.init();


// Get the element with id="defaultOpen" and click on it
if(document.getElementById("defaultOpen")) {
  document.getElementById("defaultOpen").click();
}

// ACCORDION? //

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      console.log("YAY");
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
}


$(document).ready(function(){
    $(".showfilter1").click(function(){
    if($(".ddarrow1").hasClass("activeate")){
    $(".ddarrow1").removeClass("activeate")
    }else{
    $(".ddarrow1").addClass("activeate")
    }
    });
    });
    

$(document).ready(function(){
    $(".showfilter2").click(function(){
    if($(".ddarrow2").hasClass("activeate")){
    $(".ddarrow2").removeClass("activeate")
    }else{
    $(".ddarrow2").addClass("activeate")
    }
    });
    });

$(document).ready(function(){
    $(".showfilter3").click(function(){
    if($(".ddarrow3").hasClass("activeate")){
    $(".ddarrow3").removeClass("activeate")
    }else{
    $(".ddarrow3").addClass("activeate")
    }
    });
    });
        
$(document).ready(function(){
    $(".showfilter4").click(function(){
    if($(".ddarrow4").hasClass("activeate")){
    $(".ddarrow4").removeClass("activeate")
    }else{
    $(".ddarrow4").addClass("activeate")
    }
    });
    });




function filterhamburger() {
   var element = document.getElementById("filters");
   element.classList.toggle("showsidenav");

}




$(".musiclist").click(function(){
    $(".filters").removeClass('showsidenav');
 });






//$(document).ready(function(){
$(document).ready(function(){
    $(".playlistbtn").click(function(){
    if($(".main-container").hasClass("colorchange")){
    $(".main-container").removeClass("colorchange")
    }else{
    $(".main-container").addClass("colorchange")
    }
    });
    });

    $(document).ready(function(){
        $(".playlistbtn").click(function(){
        if($(".sortingNavigation").hasClass("colorchangeheader")){
        $(".sortingNavigation").removeClass("colorchangeheader")
        }else{
        $(".sortingNavigation").addClass("colorchangeheader+")
        }
        });
        });
    
    
 $(document).ready(function(){
    $(".playlistbtn").click(function(){
    if($("#playlistText").hasClass("colorchangeheader")){
    }else{
    $("#playlistText").addClass("colorchangeheader")
    }
    });
    });
//$(docgiment).ready(function(){
//    $(".playlistbtn").click(function(){
//    if($(".main-container").hasClass("colorchange")){
//    $(".main-container").removeClass("colorchange")
//    }else{
//    $(".main-container").addClass("colorchange")
//    }
//    });
//    });

//    $(document).ready(function(){
//        $(".playlistbtn").click(function(){
//        if($(".sortingNavigation").hasClass("colorchange")){
//        $(".sortingNavigation").removeClass("colorchange")
//        }else{
//        $(".sortingNavigation").addClass("colorchange")
//        }
//        });
//        });
      
 //$(document).ready(function(){
   // $(".playlistbtn").click(function(){
 //   if($("#playlistText").hasClass("colorchangeheader")){
//    }else{
//    $("#playlistText").addClass("colorchangeheader")
//    }
//    });
//    });
 
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
if(btn2) {
  btn2.onclick = function() {
    modal2.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if(span2) {
  span2.onclick = function() {
    modal2.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}