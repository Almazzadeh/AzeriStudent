$(function () {
    $(".select > p").on("click", function () {
        $(this).toggleClass("active");
        $(".select .myDropdown").slideToggle("fast");
    })

    $(".select .myDropdown a").each(function () {
        $(this).on("click", function () {
            $(".select > p").html($(this).html()).removeClass("active");
            $(".select .myDropdown").slideUp("fast");
        })
    })
})