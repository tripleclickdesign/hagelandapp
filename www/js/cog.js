// JavaScript Document
$( ".kruis" ).hide();
$( ".cogmenu" ).hide();

$( ".cog" ).click(function() {
	$( ".cogmenu" ).slideToggle( "slow", function() {
		$( ".cog" ).hide();
		$( ".kruis" ).show();
		$("body").addClass("noscroll");
	});
});

$( ".kruis" ).click(function() {
	$( ".cogmenu" ).slideToggle( "slow", function() {
		$( ".kruis" ).hide();
		$( ".cog" ).show();
		$("body").removeClass("noscroll");

	});
});
