
//alert("hagelandonline");

var baseUrl = "http://vlaanderenonline.be";
//var baseUrl = "http://hagelandonline.be";


$.get(baseUrl += "/category", function(data){
	alert(data);
	console.log(data);
});
