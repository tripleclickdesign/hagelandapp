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




function loadnews(){
	$.get("http://www.nieuwsblad.be/rss.aspx?intro=1§ion=postcode&postcode=3200", function(data) {
		var $XML = $(data);
		$XML.find("item").each(function() {
			var $this = $(this),
				item = {
					title:       $this.find("title").text(),
					link:        $this.find("link").text(),
					description: $this.find("description").text(),
					pubDate:     $this.find("pubDate").text(),
					author:      $this.find("author").text(),
					enclosure:	 $this.find("enclosure").attr('url'),
				};
				console.log($this)
		   // $('#news').append($('<h2/>').text(item.title));
		   var article="";
		   article+="<div class='ticket'>";
			if(item.enclosure) article+="<img class='nieuws' src='"+item.enclosure+"'>";
			article+="<p class='nieuws'>"+item.title+"</p><h2 class='nieuws'>"+item.description+"</h2><p class='ticket'>"+item.pubDate+"</p></div>";
			$('#news').append(article);
			//etc...
		});
	});
	

	
	

}
