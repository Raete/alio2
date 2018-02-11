'use strict';

// change pages
$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".page-";
  var logoPrefix = ".logo-";
  var navPrefix = ".nav-";


  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    $(logoPrefix + curPage).removeClass("logo--deactive").addClass("logo--active");
    $(logoPrefix + (curPage - 1)).addClass("logo--deactive");
    $(logoPrefix + (curPage + 1)).removeClass("logo--active");

    $(navPrefix + curPage).removeClass("nav_item--deactive").addClass("nav_item--active");
    $(navPrefix + (curPage - 1)).addClass("nav_item--deactive");
    $(navPrefix + (curPage + 1)).removeClass("nav_item--active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

});