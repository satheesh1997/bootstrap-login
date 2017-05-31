//preloader functions
$(document).load(function(){
	$(".preloader").fadeIn('slow');
});
$(document).ready(function(){
	$(".preloader").fadeOut('slow');
});

//input group functions
$(".form-control").on("focus", function(){
	$(this).prev('.input-group-addon').fadeOut();
	$(this).next('.input-group-addon').fadeIn();
});

$(".form-control").on("blur", function(){
	$(this).prev('.input-group-addon').fadeIn();
	$(this).next('.input-group-addon').fadeOut();
});

// login button submit function
$("#login_submit").click(function(){
	//spinner loading in login button
	$(this).children("i").removeClass("fa-sign-in");
	$(this).children("i").addClass("fa-spinner fa-spin");
});

//showning image in login while entering data
$("#rollnumber").keyup(function(){
	//write any function to fetch image from server....
	$("#login_img").fadeIn("slow");
});