// JavaScript Document
$( ".kruis" ).hide();
$( ".cogmenu" ).hide();
$( ".cog" ).click(function() {
$( ".cogmenu" ).slideToggle( "slow", function() {
$( ".cog" ).hide();
$( ".kruis" ).show();
});
});

$( ".kruis" ).click(function() {
$( ".cogmenu" ).slideToggle( "slow", function() {
$( ".kruis" ).hide();
$( ".cog" ).show();
});
});
