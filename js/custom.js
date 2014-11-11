$(document).ready(function() {
    impress().init(); //initialize impress.js 

    // Entering State 
    window.addEventListener('impress:stepenter', function() {
        // #Ready starts animation
        $('#ready.active').parents().find(".oneColm").animate({
            top: "-50px",
            opacity: .7
        }, 250);
        $('#ready.active').parents().find(".twoColm").animate({
            top: "-500px",
            opacity: 1
        }, 250);
        $('#ready.active').animate({
            top: "-700px"
        }, 450).find(".fa-comments-o").show().addClass("animated bounceInRight");


        // #Compare start animation 
        $('#compare.active').parents('body').find("#twoWay").css({
            opacity: 1
        });

        // template 
        $('#detailTempDirec.active').parents('body').find("#templateDirectives").css({
            "opacity": 1,
            "border-bottom": ""
        });
        $('#twoWay.active .fa-exchange').css("position", "relative")
            .show()
            .animate({
                left: "626px"
            }, 900)
            .animate({
                left: "0"
            }, 900);
        $("#compare.active .vsDivider").addClass("animated rotateIn");

        //how? 
        $("#how.active h2").addClass("animated bounceInLeft");
        $("#how.active img").addClass("animated rotateIn");

        // why? 

        $("#why.active .fa").addClass("animated tada");

    });




    //Leaving state
    window.addEventListener('impress:stepleave', function() {

        //Ready Animation returns back 
        $('#ready.past').parents("body").find(".slide")
            .animate({
                top: "0"
            }, 1300).css("opacity", "");

        $('#ready.past').animate({
            top: "0"
        }, 1000);

        $('#ready.past .fa-comments-o').hide().removeClass("animated bounceInRight");


        // #Compare ends animation 
        $('#compare.past').parents('body').find("#twoWay").css({
            "opacity": "",
            "border-bottom": ""
        });

        // #Tempalte and directive ends animation 
        $('#detailTempDirec.past').parents('body').find("#templateDirectives").css({
            "opacity": "",
            "border-bottom": ""
        });

        // compare
        $("#compare.past").find(".vsDivider").removeClass("animated rotateIn");

        // how? 
        $("#how.past h2").removeClass("animated bounceInLeft");
        $("#how.past img").removeClass("animated rotateIn");


        // why?
        $("#why.past .fa").removeClass("animated tada");


    });

});