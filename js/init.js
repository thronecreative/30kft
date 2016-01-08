
$( document ).ready(function() {

	var $body = $('body');
    
    		// MENU TWEAKS!!!
 			//===================================
 			$('#menu-toggle, .menu-toggle').click(function(){
				$body.toggleClass('nav-open');
				return false;
			});

			$('a[href*=#]:not([href=#])').click(function() {
				$body.removeClass('nav-open');
		      

		     
		      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		        
		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		        if (target.length) {
		          
		          $('html,body').delay(300).animate({
		            scrollTop: target.offset().top
		          }, 1500);
		          return false;
		        }
		      }
		    });

			$("#wrap").fitVids();



 			// LIST BOX
 			//===================================
 			// var list_box_items = $('.list-box .item');

 			// $('.list-box .item h2.trigger').click(function(event) {
 			// 	$(this).next().slideToggle();
 			// 	$('.list-box .item .body').not($(this).next()).slideUp();
 			// });

 			// CYCLE GALLERY
 			//===================================
 			// var	cycle_items = $('.cycle-gallery li'),
 			// 		cycle_total = cycle_items.length,
 			// 		cycle_current = 0, 
 			// 		cycle_last = 0;

 			// cycle_items.each(function(index, el) {
 			// 	$(this).addClass('index-'+ index).hide();
 			// });
 			// $('.cycle-gallery .index-0').show();

 			// function nextCycle(){
 				
 			// 	cycle_last = cycle_current;
 			// 	if(cycle_current == cycle_total - 1){
 			// 		cycle_current = 0;
 			// 	}else{
 			// 		cycle_current++;
 			// 	}

 			// 	fadeCycle();
 			// }

 			// function fadeCycle(){
 			// 	$('.cycle-gallery .index-' + cycle_current).fadeIn(200);
 			// 	$('.cycle-gallery .index-' + cycle_last).fadeOut(200);
 			// }

 			//	setInterval(nextCycle, 1000);




 			// MASONRY!!!
 			//===================================
			// var masonry_container = $('.node-image-gallery .field-name-field-other-images');
			
			// masonry_container.imagesLoaded(function(){
			// 	masonry_container.masonry({
			// 	  itemSelector: '.field-item'
			// 	});
			// });


			// SCROLL MAGIC
 			//===================================
				var onCenterController = new ScrollMagic.Controller();
				var onEnterController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
				var onLeaveController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});

				var logo_main = new ScrollMagic.Scene({triggerElement: "#header", duration: "100%"})
			.setTween("#header .inner", {'top': '80%', ease: Linear.easeNone})
			.addTo(onLeaveController);

			var about = new ScrollMagic.Scene({triggerElement: "#about", duration: "200%"})
			.setTween("#about", {'background-position': '50% 150%', ease: Linear.easeNone})
			.addTo(onEnterController);

			var benefits = new ScrollMagic.Scene({triggerElement: "#benefits", duration: "200%"})
			.setTween("#benefits", {'background-position': '50% 150%', ease: Linear.easeNone})
			.addTo(onEnterController);

			var team = new ScrollMagic.Scene({triggerElement: "#team", duration: "200%"})
			.setTween("#team", {'background-position': '50% 150%', ease: Linear.easeNone})
			.addTo(onEnterController);

			var services = new ScrollMagic.Scene({triggerElement: "#services", duration: "200%"})
			.setTween("#services", {'background-position': '50% 150%', ease: Linear.easeNone})
			.addTo(onEnterController);

			var contact = new ScrollMagic.Scene({triggerElement: "#contact", duration: "200%"})
			.setTween("#contact", {'background-position': '50% 150%', ease: Linear.easeNone})
			.addTo(onEnterController);

});

