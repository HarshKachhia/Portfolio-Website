$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["4th Year Engineering Student at OntarioTechU","Ex- Jr. Mechatronics Engineering Specalist","SOLIDWORKS Mechanical Design Associate Certification Holder","Yellow Belt Lean Six Sigma Certification Holder" , "3D Modeling/Printing Enthusiast"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Smart Worker","Problem Solver", "Fast Learner", "Critical Thinker", "Team Player"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        /* NAV Bars for future update
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        */
        responsive: {
            0:{
                items: 1,
                
            },
            600:{
                items: 2,
                
            },
            1000:{
                items: 3,
                
            }
        }
    });
});
