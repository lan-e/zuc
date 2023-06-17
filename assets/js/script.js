document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");
  navbar_height = document.querySelector(".autohide").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";
  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});
// const dropdown = document.getElementById("navbarNavDropdown");

// document.addEventListener("click", (event) => {
//   const isClickInsideDropdown = dropdown.contains(event.target);
//   if (!isClickInsideDropdown) {
//     dropdown.style.display = "none";
//   }
// });

// $(".dd_main_wrap").click(function(){
//   $(this).toggleClass("active");
// })

// $(document).click(function(){
//  $(".dd_main_wrap").removeClass('active');
// });

// $(".dd_items, .dd_main_wrap").click(function(e){
//   e.stopPropagation();
// });
