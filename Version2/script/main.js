$(function () {
    new WOW().init(); 

    // PROMOTION TIMEOUT
    setTimeout(function(){
        $("#promo").slideDown();
    }, 3000)

    $("#closePromo").on("click", function(){
        $("#promo").slideUp();
    })

    // SHOW-HIDE SIDEBAR ON SMALL&MEDUIM DEVICES
    $("#closeSidebar").on("click", function(){
        let sidebar = $("#sidebar");

        if(sidebar.hasClass("active")){
            sidebar.removeClass("active");
            $("#closeSidebar span").removeClass("active");
        }else{
            sidebar.addClass("active");
            $("#closeSidebar span").addClass("active");
        }
    })
})