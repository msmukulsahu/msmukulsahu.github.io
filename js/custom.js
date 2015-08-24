/* ------------------------------------------------------------------------
	jQuery NO CONFLICT ( use $j( ) instead of $( ) )	
* ------------------------------------------------------------------------- */
var $j = jQuery.noConflict();





$j(document).ready(function(){ 
	"use strict";

	//ANIMATIONS FOR FIRST HALF SCREEN
	//Animation Fade Down
	
	if($j(window).width()>767)
	{

		$j(".first-half").mouseenter(function(){
			$j(".first-half .animatedFadeDown").addClass("fadeInDown animated-delay-2 animated");
		 });

		$j(".first-half").mouseleave(function(){
			$j(".first-half .animatedFadeDown").removeClass("fadeInDown animated-delay-2 animated");
		 });

			
		//Animation Fade Up
		$j(".first-half").mouseenter(function(){
			$j(".first-half .animatedFadeUp").addClass("fadeInUp animated-delay-2 animated");
		 });

		$j(".first-half").mouseleave(function(){
			$j(".first-half .animatedFadeUp").removeClass("fadeInUp animated-delay-2 animated");
		 });


		//Animation FadeIn
		$j(".first-half").mouseenter(function(){
			$j(".first-half .animatedFadeIn").addClass("fadeIn animated-delay-2 animated");
		 });

		$j(".first-half").mouseleave(function(){
			$j(".first-half .animatedFadeIn").removeClass("fadeIn animated-delay-2 animated");
		 });

	}



	//ANIMATIONS FOR FIRST LAST SCREEN
	//Animation Fade Down

	if($j(window).width()>767)
	{

		$j(".last-half").mouseenter(function(){
			$j(".last-half .animatedFadeDown").addClass("fadeInDown animated-delay-2 animated");
		 });

		$j(".last-half").mouseleave(function(){
			$j(".last-half .animatedFadeDown").removeClass("fadeInDown animated-delay-2 animated");
		 });

			
		//Animation Fade Up
		$j(".last-half").mouseenter(function(){
			$j(".last-half .animatedFadeUp").addClass("fadeInUp animated-delay-2 animated");
		 });

		$j(".last-half").mouseleave(function(){
			$j(".last-half .animatedFadeUp").removeClass("fadeInUp animated-delay-2 animated");
		 });


		//Animation FadeIn
		$j(".last-half").mouseenter(function(){
			$j(".last-half .animatedFadeIn").addClass("fadeIn animated-delay-2 animated");
		 });

		$j(".last-half").mouseleave(function(){
			$j(".last-half .animatedFadeIn").removeClass("fadeIn animated-delay-2 animated");
		 });

	}	

	

});





/* ------------------------------------------------------------------------
	Calculate height  - ( .first-half .last-half )
* ------------------------------------------------------------------------- */
function calculateHeight()
{
	"use strict";

	var firstHalf = $j(".first-half").height();	
	var lastHalf = $j(".last-half").height();
	var windowHeight = $j(window).height();


	if( firstHalf < windowHeight && lastHalf < windowHeight )
	{
		$j(".first-half, .last-half").css("height",windowHeight)	
	}
	else
	if( firstHalf > windowHeight && firstHalf > lastHalf )
	{
		$j(".first-half, .last-half").css("height",firstHalf)	
	}

	else
	if( lastHalf > windowHeight && lastHalf > firstHalf )
	{
		$j(".first-half, .last-half").css("height",lastHalf)	
	}

}




/* ------------------------------------------------------------------------
	On resize window height is calculated to fit current screen
* ------------------------------------------------------------------------- */

$j(window).resize(function(){ 
	"use strict";
	//Calculate height on resizing window
	calculateHeight();


});




/* ------------------------------------------------------------------------
	ANIMATED LOADER ON PAGE LOAD
* ------------------------------------------------------------------------- */
$j(document).ready(function(){ 
	"use strict";
	
	$j("#pre-loader-single").delay(1500).fadeOut(600, function(){
		$j(".load-loader").fadeIn(1000);
		
		//Calculate height ( index page ) when animation is finished
		calculateHeight();
		
		//Init revolution slider
		initRevSlider();

		//Activate Map & Calculate Height
		activateMap();
		calculateMapHeight();

		
	});
	
});





/* ------------------------------------------------------------------------
	FUNCTION FOR CALLING REVOLUTION SLIDER
* ------------------------------------------------------------------------- */	
function initRevSlider(){
	"use strict";
	$j('.tp-banner').revolution(
		{
			delay:6500,
			startwidth:940,
			startheight:430,
			hideThumbs:1,
			onHoverStop:"on",
			navigationType:"none",
			soloArrowRightHOffset:0,
			soloArrowLeftHOffset:0,
			shadow:0
         	
	});

}




/* ------------------------------------------------------------------------
	ANIMATE PAGE ELEMENS WHEN THEY ARE IN VIEW PORT
* ------------------------------------------------------------------------- */	

$j(document).ready(function(){
	"use strict";
	
	$j('.element_from_top').each(function () {
		$j(this).appear(function() {
		  $j(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});	
	});
	
	$j('.element_from_bottom').each(function () {
		$j(this).appear(function() {
		  $j(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});	
	});
	
	
	$j('.element_from_left').each(function () { 
		$j(this).appear(function() {
		  $j(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});	
	});
	
	
	$j('.element_from_right').each(function () {
		$j(this).appear(function() {
		  $j(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});
	
	$j('.element_fade_in').each(function () {
		$j(this).appear(function() {
		  $j(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});

});





/* ------------------------------------------------------------------------
	PIE CHART
* ------------------------------------------------------------------------- */
$j(window).scroll(function() {
	"use strict";

	//circle progress bar
	if ($j().easyPieChart) {
		var count = 0 ;
		var colors = ['#88cc6a', '#6b6b6b', '#bf1e2e', '#289dcc'];
		$j('.chart').each(function(){

				
			var imagePos = $j(this).offset().top;
			var topOfWindow = $j(window).scrollTop();
			if (imagePos < topOfWindow+600) {

				$j(this).easyPieChart({
			        barColor: colors[count],
					trackColor: '#f7f4f4',
					scaleColor: false,
					scaleLength: false,
					lineCap: 'butt',
					lineWidth: 10,
					size: 130,
					rotate: 0,
					animate: 2000,
					onStep: function(from, to, percent) {
							$j(this.el).find('.percent').text(Math.round(percent));
						}
			    });
			}

			count++;
			if (count >= colors.length) { count = 0};
		});
	}

});





/* ------------------------------------------------------------------------
 	FUNCTION FOR CAROUSEL
* ------------------------------------------------------------------------- */

	$j(function() {
		

		var $carousel = $j('.nice-carousel');

		if( $carousel.length ) {

			var scrollCount;

			function getWindowWidth() {
				"use strict";

				if( $j(window).width() < 480 ) {
					scrollCount = 1;
				} else if( $j(window).width() < 768 ) {
					scrollCount = 2;
				} else if( $j(window).width() < 960 ) {
					scrollCount = 3;
				} else {
					scrollCount = 4;
				}

			}
			
			// Init
			function initCarousel( carousels ) {
				"use strict";
				carousels.each(function() {

					var $this  = $j(this);
					
					// Options
					$this.jcarousel({
						animation           : 800,
						easing              : 'easeOutCubic',
						scroll              : 2,
						itemVisibleInCallback : function() {
							onBeforeAnimation : resetPosition( $this );
							onAfterAnimation  : resetPosition( $this );
						}
					});

				});

			}

			// Adjustment of carousel
			function adjustCarousel() {
				"use strict";	
				$carousel.each(function() {
					var $newWidth;
					var $this    = $j(this),
						$lis     = $this.children('li')
						$newWidth = $lis.length * $lis.first().outerWidth( true ) + 100;

					getWindowWidth();

					// Resize if width is changed
					if( $this.width() !== $newWidth ) {

						$this.css('width', $newWidth )
							 .data('resize','true');

						initCarousel( $this );

						$this.jcarousel('scroll', 1);

						var timer = window.setTimeout( function() {
							window.clearTimeout( timer );
							$this.data('resize', null);
						}, 600 );

					}

				});

			}
			
			//Reseting position
			function resetPosition( elem ) {
				"use strict";
				if( elem.data('resize') )
					elem.css('left', '0');
			}

			getWindowWidth();

			initCarousel( $carousel );

			// Detect swipe support
			if( Modernizr.touch ) {
				
				function swipeFunc( e, dir ) {
					"use strict";

					var $carousel = $j(e.currentTarget);
					
					if( dir === 'left' )
						$carousel.parent('.jcarousel-clip').siblings('.jcarousel-next').trigger('click');
					
					if( dir === 'right' )
						$carousel.parent('.jcarousel-clip').siblings('.jcarousel-prev').trigger('click');
					
				}
			
				$carousel.swipe({
					swipeLeft       : swipeFunc,
					swipeRight      : swipeFunc,
					allowPageScroll : 'auto'
				});
				
			}

			// Window resize
			$j(window).on('resize', function() {
				"use strict";

				var timer = window.setTimeout( function() {
					window.clearTimeout( timer );
					adjustCarousel();
				}, 30 );

			});

		}

	});





/* ------------------------------------------------------------------------
	ANIMATED CAROUSEL ITEM ON MOUSE ENTER
* ------------------------------------------------------------------------- */
$j(document).ready(function(){ 
	"use strict";

	$j(".nice-carousel li").mouseenter(function(){ 
		$j(this).find(".item-description").addClass("fadeInDownBig animated-2").css("display","block");
	});

	$j(".nice-carousel li").mouseleave(function(){ 
		$j(this).find(".item-description").removeClass("fadeInDownBig animated-2").addClass("fadeOutUpBig animated");
		
		var itemDesc = $j(this).find(".item-description");

			setTimeout(function() { 
    			$j(itemDesc).removeClass("fadeOutUpBig animated").css("display","none");
    		}, 300);

	});


});





/* ------------------------------------------------------------------------
	ANIMATED COUNTER
* ------------------------------------------------------------------------- */

var scrollHandler = function(){
	"use strict";

	if($j(".counter").is(':visible'))
	{	
		var counterTop = $j(".counter").offset().top;
     	var topOfWindow = $j(window).scrollTop();
		
	    if (counterTop < topOfWindow+600) {
				
			$j(".counter").counterUp({
		        delay: 10,
			    time: 2500
		   	});

		   $j(window).unbind("scroll",scrollHandler);	

	 	  }

	}

};

$j(window).bind("scroll",scrollHandler);





/* ------------------------------------------------------------------------
	PORTOFOLIO
* ------------------------------------------------------------------------- */  

$j(function(){
	"use strict";

	// Clone portfolio items to get a second collection for Quicksand plugin
	
	var $portfolioClone = $j(".portfolio").clone();
	
	// Attempt to call Quicksand on every click event handler
	$j(".port-filter a").click(function(e){
		
		$j(".port-filter li").removeClass("current");	

				
		// Get the class attribute value of the clicked link
		var $filterClass = $j(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		
		// Call quicksand
		$j(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 400, 
			easing: 'linear',
			useScaling: true 
		});


		$j(this).parent().addClass("current");

		// Prevent the browser jump to the link anchor
		e.preventDefault(); 
		//Start again portfolio animation on hover
		startPortfolioHover();

		//Call Magnificent popup function
		selectMgItems();

	})
});


//Add Portfolio Hover Effect
$j('ul.portfolio > li').hoverdir();

//Portfolio Hover Function
function startPortfolioHover()
{	
	"use strict";
	$j('ul.portfolio > li').hoverdir();	
}




/* ------------------------------------------------------------------------
	MAGNIFICENT POPUP
* ------------------------------------------------------------------------- */

$j(document).ready(function(){ 

	selectMgItems();

});



function selectMgItems(){

	"use strict";
	var mgdata = new Array();
	
	$j('.mg-item').each(function(){ 


		//Check if video exist
		if($j(this).find(".mg-video").length>0)
		{	
			//Check if video is youtube video
			if($j(this).find('.mg-video').attr('type')=='youtube')
			{
				var youtubeID = $j(this).find('.mg-video').attr('video-id');
				
				//Check if url exist
				if($j(this).find('.mg-url').length>0)
				{

					mgdata = {
					    src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-video-holder"><iframe class="mfp-iframe" src="http://www.youtube.com/embed/' + youtubeID + '?controls=1&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&amp;fs=0&amp;hd=1&amp;loop=0&amp;wmode=opaque&amp;rel=0" frameborder="0" allowfullscreen></iframe></div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '<div class="mg-link-holder"><a class="btn btn-skin btn-small" href="' + $j(this).find(".mg-popup-data .mg-url").text() + '"> <i class="fa fa-plus-circle"></i> More Info</a></div>' + '</div>', 
						type: 'inline'
					 };

				}
				else
				{
					mgdata = {
					    src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-video-holder"><iframe class="mfp-iframe" src="http://www.youtube.com/embed/' + youtubeID + '?controls=1&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&amp;fs=0&amp;hd=1&amp;loop=0&amp;wmode=opaque&amp;rel=0" frameborder="0" allowfullscreen></iframe></div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '</div>', 
						type: 'inline'
					 };
				}


			}

			else

			//Check if video is vimeo video	
			if($j(this).find('.mg-video').attr('type')=='vimeo')
			{
				var vimeoID = $j(this).find('.mg-video').attr('video-id');
				
				//Check if url exist
				if($j(this).find('.mg-url').length>0)
				{
					mgdata = {
					    src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-video-holder"><iframe src="//player.vimeo.com/video/88224399?autoplay=1&portrait=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '<div class="mg-link-holder"><a class="btn btn-skin btn-small" href="' + $j(this).find(".mg-popup-data .mg-url").text() + '"> <i class="fa fa-plus-circle"></i> More Info</a></div>' + '</div>', 
						type: 'inline'
					 };

				}
				else
				{
					mgdata = {
					    src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-video-holder"><iframe src="//player.vimeo.com/video/88224399?autoplay=1&portrait=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '</div>', 
						type: 'inline'
					 };
				}

			}

			else

			//Check if video is dailymotion video	
			if($j(this).find('.mg-video').attr('type')=='dailymotion')
			{
				var dailymotionID = $j(this).find('.mg-video').attr('video-id');
				
				//Check if url exist
				if($j(this).find('.mg-url').length>0)
				{
					mgdata = {
					    src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-video-holder"><iframe frameborder="0" src="http://www.dailymotion.com/embed/video/'+ dailymotionID +'" allowfullscreen></iframe> </div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '<div class="mg-link-holder"><a class="btn btn-skin btn-small" href="' + $j(this).find(".mg-popup-data .mg-url").text() + '"> <i class="fa fa-plus-circle"></i> More Info</a></div>' + '</div>', 
						type: 'inline'
					 };

				}
				else
				{
					mgdata = {
					    src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-video-holder"><iframe frameborder="0" src="http://www.dailymotion.com/embed/video/'+ dailymotionID +'" allowfullscreen></iframe> </div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '<div class="mg-link-holder"></div>' + '</div>', 
						type: 'inline'
					 };
				}	 

			}
			

		}

		
		else
		{
			//Check if image exist
			if($j(this).find('.mg-image').length>0)
			{
				//Check if url exist
				if($j(this).find('.mg-url').length>0)
				{
					mgdata = {
					   src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-image-holder"><img src="' + $j(this).find(".mg-popup-data img.mg-image").attr("src") +'"></div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '<div class="mg-link-holder"><a class="btn btn-skin btn-small" href="' + $j(this).find(".mg-popup-data .mg-url").text() + '"> <i class="fa fa-plus-circle"></i> More Info</a></div>' + '</div>',
					   type: 'inline'
				 	};
				}
				else
				{
					mgdata = {
					   src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-image-holder"><img src="' + $j(this).find(".mg-popup-data img.mg-image").attr("src") +'"></div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '</div>',
					   type: 'inline'
				 	};
				} 	
			} 
			else
			{
				//Check if url exist
				if($j(this).find('.mg-url').length>0)
				{
					mgdata = {
					   src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '<div class="mg-link-holder"><a class="btn btn-skin btn-small" href="' + $j(this).find(".mg-popup-data .mg-url").text() + '"> <i class="fa fa-plus-circle"></i> More Info</a></div>' + '</div>',
					   type: 'inline'
				 	};
				}
				else
				{
					mgdata = {
					   src: '<div class="mg-popup fadeInDown animated"> <div class="mg-title"><h2>'+ $j(this).find(".mg-popup-data .mg-title").text() + '</h2></div>' + '<div class="mg-description">' + $j(this).find(".mg-popup-data .mg-description").html() + '</div>' + '</div>',
					   type: 'inline'
				 	};
				} 	
			}	



		}

		
		initMgPopup(this,mgdata);  
		
		
	});	


}



function initMgPopup(item,mgdata){

	"use strict";

	$j(item).magnificPopup({
		removalDelay: 300,
		items: mgdata,
		mainClass: 'mfp-with-zoom', 
	});

}	





/* ------------------------------------------------------------------------
	TIPSY PLUGIN (toolTip) 
* ------------------------------------------------------------------------- */
$j('.showTipsy').tipsy({
	gravity: 's',
	delayIn: 100, 
	delayOut: 300,
	fade: true
});	





/* ------------------------------------------------------------------------
	CONTACT PAGE FUNCTIONS
* ------------------------------------------------------------------------- */
function activateMap()
{
	"use strict";

	var $map = $j('#map-canavas');

		if( $map.length ) {

			$map.gMap({
				address: 'Dept. of Mechanical Engineering, IN 721302',
				zoom: 12,
				markers: [
					{ 'address' : 'Dept. of Mechanical Engineering, IN 721302' }
				]
			});

		}

		calculateMapHeight();

}	


//Calculate map holder height 
function calculateMapHeight()
{
	"use strict";

	var windowHeight = $j(window).height();

	//Calculate height if resolutoin is 768px or more ( Below resolutions will be done via css )
	if( $j(window).width() >= 768 )
	{
		$j("#contact-map").css("height",windowHeight);	

		//Set margin top of contact form holder
		var halfOfContactHolder = $j("#contact-map .contact-holder").height()/2;
		var marginTop = windowHeight/2+(halfOfContactHolder-13);
		$j("#contact-map .contact-holder").css("margin-top",- marginTop);	

	}

}


//Close Contact Form
function closeContact(){
	"use strict";

	$j("#contact-holder").slideToggle("slow");

}




/* ------------------------------------------------------------------------
	CONTACT PAGE FORM
* ------------------------------------------------------------------------- */

// Regex for valid name
var nameRegex=/^\s?[a-zA-Z šŠđĐžŽćĆčČ]+\s[a-zA-Z šŠđĐžŽćĆčČ'-]+$/;
// Regex for valid email address
var emailRegex = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,4}$/;
// Regex for empty input
var emptyRegex=/\S/;
//Regex for valid website
var websiteRegex=/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((‌​\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;


//Sending Message	
$j(function(){
    $j('#send-message').click(function(e){
         
         "use strict";   

        //Stop form submission & check the validation
        e.preventDefault();
         
        // Variable declaration
        var nameField = $j('#name').val();
        var emailField = $j('#email').val();
        var subject = $j('#subject').val();
        var messageField = $j('#message').val();
        var errorMessages=[];
		
		
		if(nameField.search(emptyRegex) || nameField=="Your Name")
		{
			errorMessages.push('Please enter your name !');
			
		}
		
		else	
		
		if(nameField.search(nameRegex)==-1)
		{
			errorMessages.push('Your name is invalid !');
			
		}
						
		
		if(emailField.search(emptyRegex) || emailField=="Your Email")
		{
			errorMessages.push('Please enter your email !');
			
		}
		
		else	
		
		if(emailField.search(emailRegex)==-1)
		{
			errorMessages.push('Your email is invalid !');
			
		}
		
		
		if(messageField.search(emptyRegex) || messageField=="Type your message...")
		{
			
			errorMessages.push('Please enter your message !');
			
		}
			
			
		//Check to see if error has occured	
		if(errorMessages.length>0)
		{
			//Clear previous errors
			$j("#contact-messages-holder").html("");
				
			$j("#contact-messages-holder").append('<div class="notification error"> <i class="fa fa-times-circle"></i> '); 	
			
			for(var i=0;i<errorMessages.length;i++)
			{
				$j("#contact-messages-holder .notification").append('<p>'+errorMessages[i]+'</p>');
				$j("html, body").animate({ scrollTop: $j("#contact-messages-holder").offset().top -400 },600);
					
			}
				
				return false;
			
		}
			
			
		/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
        $j.post("php/email.php", $j("#contact-form").serialize(),function(result){
					
					
			//Load gif animation
			$j("#contact-loading").html('<img src="images/load.gif" alt=""/>');	
					
			//Clear previous errors
			$j("#contact-messages-holder").html("");
					
			
            //Check the result set from email.php file.
			
            if(result == 'sent'){
			
				//If the email is sent successfully, clear the form
				   clearContact();          
				   
				//Display the success message
				$j("#contact-messages-holder").append('<div class="notification success"> <i class="fa fa-check"></i> <p>Thank you, your message has been sent successfully.</p> </div>'); 	
					
				//Disable gif loading
				$j("#contact-loading").html("");	
				
			}
					
			else{
                    //Display the error message    
					$j("#contact-messages-holder").append('<div class="notification error"> <i class="fa fa-times-circle"></i> <p>Sorry your message could not be delivered !</p> </div>'); 	
					
					//Disable gif loading
					$j("#contact-loading").html("");		
                       
                }
				
         });
		  	
       });
    });    
    
	

//Clear Contact Form	
function clearContact(){
	"use strict";

	$j('#name').val("Your Name");
    $j('#email').val("Your Email");
    $j('#subject').val("Subject");
    $j('#message').val("Type your message...");
	
}






/* ------------------------------------------------------------------------
	CLEAR INPUT MESSAGES
* ------------------------------------------------------------------------- */
	
$j('input[type=text],input[type=email],input[type=url],textarea').each(function() {
 	"use strict";
	 	
	var default_val = this.value;
	$j(this).focus(function(){
	   if(this.value == default_val) {
	           this.value = '';
	   }
	});

	$j(this).blur(function(){
	       if(this.value == '') {
	               this.value = default_val;
	       }
	});
});




/*-------------------------------------------------*/
/* GALLERY POST SLIDER
/*-------------------------------------------------*/
	$j(window).load(function(){ 
		"use strict";
		$j(".flexslider").flexslider();
	});	




/* ------------------------------------------------------------------------
	PRETTY PHOTO
* ------------------------------------------------------------------------- */ 
$j(window).load(function(){
  	"use strict";
	$j("a[rel^='prettyPhoto']").prettyPhoto({
	 	show_title:false
	});

});




/* ------------------------------------------------------------------------
/* ACCORDIONS
* ------------------------------------------------------------------------- */ 

	$j('.accordions p').filter(':nth-child(n+4)').addClass('accordion-hide');

	$j('.accordions h2').on('click', function() {
		"use strict";

		if ( !$j(this).hasClass('active')) {
		$j('.accordions h2').removeClass('active');
		$j(this)
			.addClass('active')
			.next()
				.slideDown(200)
				.siblings('.accordions p')
					.slideUp(200);
		}
	});


	$j('.accordion-item p').filter(':nth-child(n+4)').addClass('accordion-hide');
	$j('.accordions .first-item').addClass("active");

	$j('.accordion-item h3').on('click', function() {
		"use strict";

		if ( !$j(this).hasClass('active')) {
		$j('.accordion-item h3').removeClass('active');
		$j(this)
			.addClass('active')
			.next()
				.slideDown(200)
				.siblings('.accordion-widget div p')
					.slideUp(200);
		}
	});




/* ------------------------------------------------------------------------
/* TABS
* ------------------------------------------------------------------------- */	 
	$j( "#tabs" ).tabs();




/* ------------------------------------------------------------------------
	CALL FLICKR PLUGIN
* ------------------------------------------------------------------------- */	 
$j('.flickrImages').jflickrfeed({
	limit: 6,
	qstrings: {
		id: '44499772@N06'
	},
	
	itemTemplate: '<a href="{{image_b}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a>'
	
}); 




/* ------------------------------------------------------------------------
	FUNCTION FOR CALLING TWITTER PLUGIN
* ------------------------------------------------------------------------- */  
	
$j(document).ready(function() {
	"use strict";

    $j(".twitterFeed").tweet({
        modpath: 'twitter/index.php',
		username: "envatowebdesign",
		count: 2,
		loading_text: "Loading tweets...",
    });

 });




/* ------------------------------------------------------------------------
	SCROLL TO THE COMMENT SECTION
* ------------------------------------------------------------------------- */	
	
	function scrollToComments(){
		"use strict";

		$j("html, body").animate({scrollTop: $j('#comment-section').offset().top - 150 }, 1000, 'easeOutQuad' );
		
	};





/* ------------------------------------------------------------------------
	PAGE TOP MENU
* ------------------------------------------------------------------------- */

//Init menu on document ready
$j(document).ready(function(){
	
	initMenu();

});	

//Re-Init menu on resize
$j(window).resize(function(){ 

	initMenu();

});


function initMenu(){

	"use strict";

	var windowWidth = $j(window).width();

	if(windowWidth>767)
	{

		$j(".page-top-menu").mouseenter(function(){ 
			$j("#mainNavigation select").css("display","none");
			$j(".top-menu").css("display","block");
			$j(".top-menu").addClass("fadeInRight animated-delay-2 animated");
		});

		$j(".page-top-menu").mouseleave(function(){ 
			$j("#mainNavigation select").css("display","none");
			$j(".top-menu").css("display","none");
			$j(".top-menu").removeClass("fadeInRight animated-delay-2 animated");
		});

	}
	else
	{
		$j(".page-top-menu").mouseenter(function(){ 
			$j(".top-menu").css("display","none");
			$j("#mainNavigation select").css("display","block");
			$j("#mainNavigation select").addClass("fadeInRight animated-delay-2 animated");
		});

		$j(".page-top-menu").mouseleave(function(){ 
			$j(".top-menu").css("display","none");
			$j("#mainNavigation select").css("display","none");
			
		});
	}	

}






/* ------------------------------------------------------------------------
	FUNCTION FOR RESPONSIVE DROPDOWN LIST
* ------------------------------------------------------------------------- */

	$j(function(){
		"use strict";
   
   
	   //inject dropdown list to nav #mainNavigation
	   $j("<select/>").appendTo("#mainNavigation");
	   
	   
	   //Create default option Go to...
	   $j("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to...",
	   }).appendTo("#mainNavigation select");
	   

	   $j("#mainNavigation select").click(function(){ $j(this).removeClass("fadeInRight animated-delay-2 animated");  });

	   
	   //Populate dropdowns with menu items
	   $j("#mainNavigation a").each(function(){
		
			var elem = $j(this);
			var depth = $j(elem).parents('ul').length - 1;
			var indent ='';
			
			if(depth)
			{
				while(depth>0)
				{
					indent+=' - ';
					depth--;
				}
			}


			$j("<option />",{
			"value"   :   elem.attr("href"),
			"text"    :   indent + elem.text()
			}).appendTo("#mainNavigation select");
	   
		});
		
		
		//make responsive dropdown to navigate
		$j("#mainNavigation select").change(function(){
		window.location = $j(this).find("option:selected").val();
		
		});
	   
   
	});



