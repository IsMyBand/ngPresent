$(document).ready(function() {
    impress().init();

    // Entering State 
    window.addEventListener('impress:stepenter', function() {
        // #Ready starts animation
        $('#ready.active').parents("body").find(".slide.oneColm").animate({
            top: "-50px",
            opacity: .5
        }, 250);
        $('#ready.active').parents("body").find(".slide.twoColm").animate({
            top: "-500px",
            opacity: 1
        }, 250);
        $('#ready.active').animate({
            top: "-700px"
        }, 450)
            .find(".fa-comments-o").addClass("animated bounceIn");


        // #Compare start animation 
        $('#compare.active').parents('body').find("#twoWay").css({
            opacity: 1
            // "border-bottom": "16px double black"
        });

        $('#twoWay.active').find(".fa-arrows-h").css("position", "relative")
            .show()
            .animate({
                left: "626px"
            }, 900)
            .animate({left: "0"}, 900);


    });

    //Leaving state
    window.addEventListener('impress:stepleave', function() {

        //Ready Animation returns back 
        $('#ready:not(.active)').parents("body").find(".slide")
            .animate({
                top: "0"
            }, 1300).css("opacity", "");

        $('#ready:not(.active)').animate({
            top: "0"
        }, 1000);
        $('#ready:not(.active)').find(".fa-comments-o").removeClass("animated bounceIn");


        // #Compare ends animation 
        $('#compare:not(.active)').parents('body').find("#twoWay").css({
            "opacity": "",
            "border-bottom": ""
        });





    });

});