window.onload = function() {
    window.jQuery ? $(document).ready(function() {
        $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(), $("body").append("<div class='overlay'></div>"), $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")), $(".navbar-toggle, .navbar-toggler").on("click", function() {
            $(".sideMenu, .overlay").toggleClass("open"), $(".overlay, .dropdown-menu").on("click", function() {
                $(".overlay").removeClass("open"), $(".sideMenu").removeClass("open")
            }),
            $(".overlay").hasClass("open") ? disableScroll() : enableScroll()
        }), $("body").on("click", ".sideMenu.open .nav-item", function() {
            $(this).hasClass("dropdown") || $(".sideMenu, .overlay").toggleClass("open")
        }), $(window).resize(function() {
            $(".navbar-toggler").is(":hidden") ? $(".sideMenu, .overlay").hide() : $(".sideMenu, .overlay").show()
        }), $(".overlay").on("click", function(){
            enableScroll()
        })
    }) : console.log("sidebarNavigation Requires jQuery")
};

function preventDefault(e){
    e.preventDefault();
}

function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
}