$(function() {

	
	$(window).scroll(function(){
		if ($(window).scrollTop() <= 0) {
			//autoHeader();
			$(".header-top").css("position","relative");
			$(".header").css("margin-top","0px");
			//$(".header-top").css("visibility","visible");
			//$(".header-top").css("height","90px");
			//$(".menu-open").css("display","block");
			//$(".tel-top").css("display","block");
			//$(".logo").css("display","block");
			$(".header-top").css("display","block");
			$(".logo").removeClass('noAfter');
			if ($(window).width() <= '768'){
				$(".logo").css("margin-top", "22px");
			}
		}
		if ($(window).scrollTop() > 430) {
			//$(".tel-top").css("display","none");
			//$(".menu-open").css("display","none");
			//$(".logo").css("display","none");
			$(".header-top").css("display","none");
			$(".header").css("margin-top","90px");
			//$(".header-top").css("visibility","hidden");
			//$(".header-top").css("transition","all ease 1s");
			
		}
		if ($(".official").offset().top <= $(window).scrollTop()) {
			$(".header-top").css("position","fixed");
			$(".header").css("margin-top","90px");
			$(".header-top").css("display","block");
			//$(".header-top").css("height","90px");
			$(".logo").addClass('noAfter');
			if ($(window).width() <= '768'){
				$(".logo").css("margin-top", "20px");
			}
			$("#header-a").removeClass('width');
			//$(".menu-open").css("display","block");
			//$(".tel-top").css("display","block");
			//$(".logo").css("display","block");
		}
	});
		$("#header-a").addClass('width');
		function windowSize(){
			var height = $(".obo .right").css("height");
			var heightIndex = String(+$(".obo .slide-img").height()- 95) + "px";
		    if ($(window).width() <= '960'){
		    	$(".slider-nav").css("transform", "translateY(-" + height + ")");
		    	$(".obo .count").css("transform", "translate(40px, " + heightIndex + ")");
		    }
		     if ($(window).width() <= '768'){
		     	var heightIndex = String(+$(".obo .slide-img").height() - 40) + "px";
		    	$(".obo .count").css("transform", "translate(20px, " + heightIndex + ")");
		    }
  	}; 		
  function autoHeader(){
  	var value_int = $(".header").height() - 90;
		var value_str = value_int + "px";
		$(".header").css("height", value_str);
  	};

	$(window).resize(function(){
		autoHeader();
		windowSize();
	});
	autoHeader();
	windowSize();


	
	$("input[id='name']")
      .focus(function() {
        $("label[for='name']").css("opacity", 0);
      });
  $("input[id='mail']")
      .focus(function() {
        $("label[for='mail']").css("opacity", 0);
      });
  $("textarea[id='texta']")
      .focus(function() {
        $("label[for='texta']").css("opacity", 0);
      });

      
	  		$("input[id='name']")
	      .focusout(function() {
	      	if ($("input[id='name']").val()==""){
	       		$("label[for='name']").css("opacity", 1);
	      };
	      });
  
  		$("input[id='mail']")
      .focusout(function() {
      	if ($("input[id='mail']").val()==""){
        $("label[for='mail']").css("opacity", 1);
      };
      });
 		 $("textarea[id='texta']")
      .focusout(function() {
      	if ($("textarea[id='texta']").val()==""){
        $("label[for='texta']").css("opacity", 1);
      }
      });
    $(".btn-form").click(function(){
    	$("label").css("opacity","1")
    });

    

    $("form.callback-common").submit(function() { 
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "/mail.php", 
				data: th.serialize()
			}).done(function() {
				$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
				setTimeout(function() {
					$(th).find('.success').removeClass('active').fadeOut();
					th.trigger("reset");
				}, 5000);
			});
			
			return false;
		});



		$("input[id='name-top']")
      .focus(function() {
        $("label[for='name-top']").css("opacity", 0);
      });
  	$("input[id='mail-top']")
      .focus(function() {
        $("label[for='mail-top']").css("opacity", 0);
      });
  	$("textarea[id='texta-top']")
      .focus(function() {
        $("label[for='texta-top']").css("opacity", 0);
      });

    	$("input[id='name-top']")
	      .focusout(function() {
	      	if ($("input[id='name-top']").val()==""){
	       		$("label[for='name-top']").css("opacity", 1);
	      };
	      });
  
  		$("input[id='mail-top']")
      .focusout(function() {
      	if ($("input[id='mail-top']").val()==""){
        $("label[for='mail-top']").css("opacity", 1);
      };
      });
 		 $("textarea[id='texta-top']")
      .focusout(function() {
      	if ($("textarea[id='texta-top']").val()==""){
        $("label[for='texta-top']").css("opacity", 1);
      }
      });


   
		$(".menu-open").click(function(event){
			event.preventDefault();
			$(".menu-list").css("visibility","visible");
			$(".menu-list").css("transform","translateX(0%)");
			$(".menu-list").css("opacity","1");
			$("body").css("overflow-y", "hidden")
		});
		$(".menu-close").click(function(event){
			event.preventDefault();
			$(".menu-list").css("visibility","hidden");
			$(".menu-list").css("transform","translateX(-100%)");
			$(".menu-list").css("opacity","0");
			$("body").css("overflow-y", "auto")
		});
		$(".menu-list li a").click(function(event){
			event.preventDefault();
			var top;
			top = $($(this).attr('href')).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
			$(".menu-list").css("visibility","hidden");
			$(".menu-list").css("transform","translateX(-100%)");
			$(".menu-list").css("opacity","0");
			$("body").css("overflow-y", "auto")
		});
			


		$(".button-sity").click(function(event){
			event.preventDefault();
			$(".post-list").css("visibility","visible");
			$(".post-list").css("transform","translateX(0%)");
			$(".post-list").css("opacity","1");
			$("body").css("overflow-y", "hidden")
		});
		$(".post-close").click(function(event){
			event.preventDefault();
			$(".post-list").css("visibility","hidden");
			$(".post-list").css("transform","translateX(-100%)");
			$(".post-list").css("opacity","0");
			$("body").css("overflow-y", "auto")
		});


		$("#question").click(function(event){
			event.preventDefault();
			$(".wrapper-form").css("visibility","visible");
			$(".wrapper-form").css("transform","translateX(0%)");
			$(".wrapper-form").css("opacity","1");
			$("body").css("overflow-y", "hidden")
		});
		$(".form-top-close").click(function(event){
			event.preventDefault();
			$(".wrapper-form").css("visibility","hidden");
			$(".wrapper-form").css("transform","translateX(-100%)");
			$(".wrapper-form").css("opacity","0");
			$("body").css("overflow-y", "auto")
		});

		$(".navigation li a").click(function(event){
			event.preventDefault();
			var top;
			top = $($(this).attr('href')).offset().top;
			$('body').animate({scrollTop: top}, 2000);
		});

		$(".post a.button").click(function(event){
			event.preventDefault();
			var top;
			top = $($(this).attr('href')).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		});

		$('#official').appear();
	  $('#official').on('appear', function(event, $all_appeared_elements) {
    	$("#official-a").addClass('width');
		});
		$('#official').on('disappear', function(event, $all_disappeared_elements) {
      $("#official-a").removeClass('width');
		});


		$('#best').appear();
	  $('#best').on('appear', function(event, $all_appeared_elements) {
    	$("#best-a").addClass('width');
		});
		$('#best').on('disappear', function(event, $all_disappeared_elements) {
      $("#best-a").removeClass('width');
		});



		$('.common-section').appear();
	  $('.common-section').on('appear', function(event, $all_appeared_elements) {
    	$("#about-a").addClass('width');
		});
		$('.common-section').on('disappear', function(event, $all_disappeared_elements) {
      $("#about-a").removeClass('width');
		});
	
		
		$('#header').appear();
	  $('#header').on('appear', function(event, $all_appeared_elements) {
    	$("#header-a").addClass('width');
		});
		$('#header').on('disappear', function(event, $all_disappeared_elements) {
      $("#header-a").removeClass('width');
		});


		$('#post').appear();
	  $('#post').on('appear', function(event, $all_appeared_elements) {
    	$("#post-a").addClass('width');
		});
		$('#post').on('disappear', function(event, $all_disappeared_elements) {
      $("#post-a").removeClass('width');
		});

		$('#contact').appear();
	  $('#contact').on('appear', function(event, $all_appeared_elements) {
    	$("#contact-a").addClass('width');
		});
		$('#contact').on('disappear', function(event, $all_disappeared_elements) {
      $("#contact-a").removeClass('width');
		});

		var wallopEl = document.querySelector('.Wallop');
		var wallop = new Wallop(wallopEl);

		$(".count .indexis").html($('.slide').length);

		wallop.on('change', function(event) {
			var index = +event.detail.currentItemIndex + 1;
			$(".count .index").html(String(index));

			
		});



	
		




   

});
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});