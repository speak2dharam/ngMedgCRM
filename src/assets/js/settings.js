$(document).ready(function () {
    var menuStatus = localStorage.getItem('menuCollapsed');
    console.log(menuStatus)
    if (menuStatus == 'true') {
        collapseMenu();
    }
    if (menuStatus == 'false') {
        expandMenu();
    }


    $('.toggle-btn').on('click', function () {
        var target = $(this).data('target');
        var $targetDiv = $('#' + target);

        // Hide all divs except the one being toggled
        $('.DetailBox').not($targetDiv).hide();

        // Toggle visibility of the clicked div
        $targetDiv.toggle();

        // Add 'active' class to the clicked button and remove it from others
        $('.toggle-btn').removeClass('ActivedownIco');
        $(this).toggleClass('ActivedownIco');

        // Close div if the same button is clicked again
        //if ($targetDiv.is(':visible')) {
        //    //$targetDiv.hide();
        //    $(this).removeClass('ActivedownIco');
        //}
        
    });

});
//function menuToggle() {
//    $("body").toggleClass("navbar-vertical-collapsed");
//}
function expandMenu() {
    $("body").removeClass("navbar-vertical-collapsed");
    $("#expandMenu").hide();
    $("#collapseMenu").show();
    localStorage.setItem('menuCollapsed', false);
}
function collapseMenu() {
    $("body").addClass("navbar-vertical-collapsed");
    $("#expandMenu").show();
    $("#collapseMenu").hide();
    localStorage.setItem('menuCollapsed', true);
}

function hidemenumobile() {
    $(".sidebar").hide();
    $(".mobmenubg").hide();
}
function showmenumobile() {
    //$("#mobmenubg").addClass("d-block");
    $(".mobmenubg").show();
    $(".sidebar").show();
}

function login() {
    $(".loginBox").slideUp();
    $(".otpBox").slideDown();
    //$("#mfacode").focus();
    setToastMsg("Login successfully","An email with a verification code has been sent on your registered email id.")
}

function backtologin() {
    $(".loginBox").slideDown();
    $(".otpBox").slideUp();
}

function setToastMsg(toasteading,toastTitle) {
    $(".toastheading").empty();
    $(".toast-body").empty();

    $(".toastheading").append(toasteading);
    $(".toast-body").append(toastTitle);
    $('#liveToast').toast('show');
}

