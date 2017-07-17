/**
 * Created by User on 31.05.2017.
 */
$(document).ready(function () {
    
    var $overlay = $(".overlay");
    var $closeBtn = $(".navWrapper__closeBtn");
    
    $("#header__navTablet").on("click", function () {
        $overlay.show();
    } );
    
    $closeBtn.on("click", function () {
        $overlay.hide();
    });

    var $catalog = $(".catalog");
    var $close = $("#closeBtn__catalog");

    $("#open-btn").on("click", function () {
        $catalog.show();
    } );

    $close.on("click", function () {
        $catalog.hide();
    });
    
    
    $(".dropdown-menu ").hover(function () {
        $(".menu-overlay").show();
    }, function () {
        $(".menu-overlay").hide();
    })
});