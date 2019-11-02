$(document).ready(function(){
  $.scrollUp();
  $(".container").css('padding', '0 0 30px 0');
  // GENERAL
  var tooltips = [
    "Go Home",
    "What is Vecta Corp.?",
    "Vecta Corp. offers 3 solutions for prospecting, converting, and retaining customers",
    "We provide a variety of resources that you can utilize to enhance your experience",
    "You can reach out to us here"
  ];
  var menuItems = $('#responsive-menu').children();
  menuItems.each( function(index) {
    // need to set the title or tooltip wouldn't show
    $(this).attr("title", "");
    $(this).tooltip({
      content: tooltips[index]
    });
  });

  // HOME PAGE TABS
  $("#home-tabs").tabs({
    collapsible: true,
    active: 0
  });

  // HOME PAGE ACCORDION
  $("#accordion").accordion({
    animate: 200,
    collapsible: true,
  });

  // ABOUT US TABS
  $("#management-team-tabs").tabs({
    collapsible: true,
    active: 0
  }).addClass( "ui-tabs-vertical ui-helper-clearfix" ).css('margin', '0 0 30px 0');

  // ABOUT US Headquarters
  $("#hq-outside").css("width", "420px");
  $("#hq-next").css("float", "right");

  // SOLUTIONS
  $("#solutions div").css("padding", "0 20px 40px 20px");
  $("#solutions ul li").css("list-style", "disc inside");
  $("#quicknav").stick_in_parent();

  // CONTACT US
  $("input[type='radio']").checkboxradio({

  });
  $("input[type='checkbox']").checkboxradio();
  $("#companysize").selectmenu();
  $("button").button();



});
