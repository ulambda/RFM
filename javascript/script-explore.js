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
//document.getElementById("defaultOpen").click();

// ACCORDION? //

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
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

 $(document).ready(function(){
    $(".showfilter4").click(function(){
    if($(".ddarrow4").hasClass("activeate")){
    $(".ddarrow4").removeClass("activeate")
    }else{
    $(".ddarrow4").addClass("activeate")
    }
    });
    });


    $(document).ready(function(){
        $('#NEWBTN').click(function(){
             $("#NEWBTN").addClass('active');
             $("#POPULARBTN").removeClass('active');
             $("#MOSTDLBTN").removeClass('active');

        });
   });

   $(document).ready(function(){
    $('#NEWBTN2').click(function(){
         $("#NEWBTN2").addClass('active');
         $("#POPULARBTN2").removeClass('active');
         $("#MOSTDLBTN2").removeClass('active');

    });
});

$(document).ready(function(){
    $('#NEWBTN').click(function(){
         $("#NEWBTN2").addClass('active');
         $("#POPULARBTN2").removeClass('active');
         $("#MOSTDLBTN2").removeClass('active');

    });
});

$(document).ready(function(){
    $('#NEWBTN2').click(function(){
         $("#NEWBTN").addClass('active');
         $("#POPULARBTN").removeClass('active');
         $("#MOSTDLBTN").removeClass('active');

    });
});



   $(document).ready(function(){
    $('#POPULARBTN').click(function(){
         $("#POPULARBTN").addClass('active');
         $("#NEWBTN").removeClass('active');
         $("#MOSTDLBTN").removeClass('active');


    });
});

$(document).ready(function(){
    $('#POPULARBTN2').click(function(){
         $("#POPULARBTN2").addClass('active');
         $("#NEWBTN2").removeClass('active');
         $("#MOSTDLBTN2").removeClass('active');


    });
});

$(document).ready(function(){
    $('#POPULARBTN2').click(function(){
         $("#POPULARBTN").addClass('active');
         $("#NEWBTN").removeClass('active');
         $("#MOSTDLBTN").removeClass('active');


    });
});

$(document).ready(function(){
    $('#POPULARBTN').click(function(){
         $("#POPULARBTN2").addClass('active');
         $("#NEWBTN2").removeClass('active');
         $("#MOSTDLBTN2").removeClass('active');


    });
});

$(document).ready(function(){
    $('#MOSTDLBTN').click(function(){
         $("#MOSTDLBTN").addClass('active');
         $("#NEWBTN").removeClass('active');
         $("#POPULARBTN").removeClass('active');


    });
});

$(document).ready(function(){
    $('#MOSTDLBTN2').click(function(){
         $("#MOSTDLBTN2").addClass('active');
         $("#NEWBTN2").removeClass('active');
         $("#POPULARBTN2").removeClass('active');


    });
});


$(document).ready(function(){
    $('#MOSTDLBTN2').click(function(){
         $("#MOSTDLBTN").addClass('active');
         $("#NEWBTN").removeClass('active');
         $("#POPULARBTN").removeClass('active');


    });
});

$(document).ready(function(){
    $('#MOSTDLBTN').click(function(){
         $("#MOSTDLBTN2").addClass('active');
         $("#NEWBTN2").removeClass('active');
         $("#POPULARBTN2").removeClass('active');


    });
});





























$(document).ready(function(){
    $("#JAZZ").click(function(){
        if($("#JAZZ").hasClass("activetag")){
    $("#JAZZ").removeClass("activetag")}
        else{
    $("#JAZZ").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#ELECTRONIC").click(function(){
        if($("#ELECTRONIC").hasClass("activetag")){
    $("#ELECTRONIC").removeClass("activetag")}
        else{
    $("#ELECTRONIC").addClass("activetag")}
    });
});

$(document).ready(function(){
    $("#HIPHOP").click(function(){
        if($("#HIPHOP").hasClass("activetag")){
    $("#HIPHOP").removeClass("activetag")}
        else{
    $("#HIPHOP").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#COUNTRY").click(function(){
        if($("#COUNTRY").hasClass("activetag")){
    $("#COUNTRY").removeClass("activetag")}
        else{
    $("#COUNTRY").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#POP").click(function(){
        if($("#POP").hasClass("activetag")){
    $("#POP").removeClass("activetag")}
        else{
    $("#POP").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#ROCK").click(function(){
        if($("#ROCK").hasClass("activetag")){
    $("#ROCK").removeClass("activetag")}
        else{
    $("#ROCK").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#CINEMATIC").click(function(){
        if($("#CINEMATIC").hasClass("activetag")){
    $("#CINEMATIC").removeClass("activetag")}
        else{
    $("#CINEMATIC").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#CLASSICAL").click(function(){
        if($("#CLASSICAL").hasClass("activetag")){
    $("#CLASSICAL").removeClass("activetag")}
        else{
    $("#CLASSICAL").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#FUTUREBASS").click(function(){
        if($("#FUTUREBASS").hasClass("activetag")){
    $("#FUTUREBASS").removeClass("activetag")}
        else{
    $("#FUTUREBASS").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#HAPPY").click(function(){
        if($("#HAPPY").hasClass("activetag")){
    $("#HAPPY").removeClass("activetag")}
        else{
    $("#HAPPY").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#SAD").click(function(){
        if($("#SAD").hasClass("activetag")){
    $("#SAD").removeClass("activetag")}
        else{
    $("#SAD").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#JOYFUL").click(function(){
        if($("#JOYFUL").hasClass("activetag")){
    $("#JOYFUL").removeClass("activetag")}
        else{
    $("#JOYFUL").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#NOSTALGIA").click(function(){
        if($("#NOSTALGIA").hasClass("activetag")){
    $("#NOSTALGIA").removeClass("activetag")}
        else{
    $("#NOSTALGIA").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#PEACEFUL").click(function(){
        if($("#PEACEFUL").hasClass("activetag")){
    $("#PEACEFUL").removeClass("activetag")}
        else{
    $("#PEACEFUL").addClass("activetag")}
    });
});

$(document).ready(function(){
    $("#CHILL").click(function(){
        if($("#CHILL").hasClass("activetag")){
    $("#CHILL").removeClass("activetag")}
        else{
    $("#CHILL").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#ANGRY").click(function(){
        if($("#ANGRY").hasClass("activetag")){
    $("#ANGRY").removeClass("activetag")}
        else{
    $("#ANGRY").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#INTENSE").click(function(){
        if($("#INTENSE").hasClass("activetag")){
    $("#INTENSE").removeClass("activetag")}
        else{
    $("#INTENSE").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#SLEEP").click(function(){
        if($("#SLEEP").hasClass("activetag")){
    $("#SLEEP").removeClass("activetag")}
        else{
    $("#SLEEP").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#WORKOUT").click(function(){
        if($("#WORKOUT").hasClass("activetag")){
    $("#WORKOUT").removeClass("activetag")}
        else{
    $("#WORKOUT").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#DRUMS").click(function(){
        if($("#DRUMS").hasClass("activetag")){
    $("#DRUMS").removeClass("activetag")}
        else{
    $("#DRUMS").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#GUITAR").click(function(){
        if($("#GUITAR").hasClass("activetag")){
    $("#GUITAR").removeClass("activetag")}
        else{
    $("#GUITAR").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#PIANO").click(function(){
        if($("#PIANO").hasClass("activetag")){
    $("#PIANO").removeClass("activetag")}
        else{
    $("#PIANO").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#WOODWIND").click(function(){
        if($("#WOODWIND").hasClass("activetag")){
    $("#WOODWIND").removeClass("activetag")}
        else{
    $("#WOODWIND").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#STRING").click(function(){
        if($("#STRING").hasClass("activetag")){
    $("#STRING").removeClass("activetag")}
        else{
    $("#STRING").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#BRASS").click(function(){
        if($("#BRASS").hasClass("activetag")){
    $("#BRASS").removeClass("activetag")}
        else{
    $("#BRASS").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#PRECUSSION").click(function(){
        if($("#PRECUSSION").hasClass("activetag")){
    $("#PRECUSSION").removeClass("activetag")}
        else{
    $("#PRECUSSION").addClass("activetag")}
    });
});


$(document).ready(function(){
    $("#SYNTH").click(function(){
        if($("#SYNTH").hasClass("activetag")){
    $("#SYNTH").removeClass("activetag")}
        else{
    $("#SYNTH").addClass("activetag")}
    });
});
