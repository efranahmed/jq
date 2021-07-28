

$(document).ready(function(){
	// alert
	$('#btn1').click(function(){
		alert("Hello brother");
		});
	
	// hide
	$('#btn2').click(function(){
		$('h2').hide();
	// show	
	});
	$('#btn3').click(function(){
		$('h2').show();
	});
	// toggle
	$('#btn4').click(function(){
		$('h2').toggle();
	});
	// fadeout
	$('#btn5').click(function(){
		$('h3').fadeOut();
	// fadein	
	});
	$('#btn6').click(function(){
		$('h3').fadeIn();
	});
	// fadetoggle
	$('#btn7').click(function(){
		$('h3').fadeToggle();
	});

	// slidetoggle
	$('.click').click(function(){
		$('.text').slideToggle();
	});


});