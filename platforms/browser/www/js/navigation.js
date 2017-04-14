// JavaScript Document



var thePage,theSubPage;
thePage="home";
loadPage()

$(document).ready(function(){
	$(document).on("click","a.intern",function(event){
		event.preventDefault();
		thePage=$(this).attr("href")
		loadPage()
	
	});
	

	$(document).on("click","a.back",function(event){
		if(thePage.indexOf("/")==-1){
			//niveau 1
			thePage="home";
			loadPage()
		
		}
		
	
	else{
		//niveau 2	
		var arr = thePage.split("/");
		thePage=arr[0]
		loadPage()
	}
	
	
	
	});
});
	
		
	$(document).on("click","a.home",function(event){
		if(thePage.indexOf("/")==-1){
		//niveau 1
		thePage="home";
		loadPage()
		
	}
		
});


	

	
	



function loadPage(){
	
	$("a.intern").removeClass("hamburger-active");
	$("a.intern[href='"+thePage+"']").addClass("hamburger-active");
	
	if(thePage.indexOf("/")==-1){
		$("a.back").show();
		$("a.home").hide();
	}

	else{ $("a.home").show();
	
	}
	
	
	if(thePage=="home")
			$("a.back").hide();
	
	if(thePage=="home"){
		$("#content").load("http://tripleclick.be/hageland_app/content/home.php",{},function(){
			
		})
	}
	else if(thePage=="nieuws"){
		$("#content").load("http://tripleclick.be/hageland_app/content/nieuws.php",{},function(){
			loadnews()
			
		})
	}
	
		else if(thePage=="agenda"){
		$("#content").load("http://tripleclick.be/hageland_app/content/agenda.php",{},function(){
			
		})
	}
	
	else if(thePage=="bedrijven"){
		$("#content").load("http://tripleclick.be/hageland_app/content/bedrijven.php",{},function(){
			
		})
	}
	
	else if(thePage=="verenigingen"){
		$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen.php",{},function(){
			
		})
	}
	
		else if(thePage=="ondernemingen"){
		$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen.php",{},function(){
			
		})
	}
	
	else if(thePage=="zorg"){
		$("#content").load("http://tripleclick.be/hageland_app/content/zorg.php",{},function(){
			
		})
	}
	
	else if(thePage=="streekproducten"){
		$("#content").load("http://tripleclick.be/hageland_app/content/streekproducten.php",{},function(){
			
		})
		
	}
		
	else if(thePage=="toerisme"){
		$("#content").load("http://tripleclick.be/hageland_app/content/toerisme.php",{},function(){
			
		})
	}
	
	
	else if(thePage=="kaart"){
		$("#content").load("http://tripleclick.be/hageland_app/content/kaart.php",{},function(){
			
		})
	}
	
	
	/*--------gemeente------*/
	
	else if(thePage=="gemeente"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente.php",{},function(){
			
		})
	}
	
	
	else if(thePage=="gemeente/openingsuren"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/openingsuren.php",{},function(){
			
		})
	}
	
	else if(thePage=="gemeente/bestuur"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/bestuur.php",{},function(){
			
		})
	}
	
	else if(thePage=="gemeente/eloket"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/eloket.php",{},function(){
			
		})
	}
	
	
	else if(thePage=="gemeente/inh/ticket"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/inh/ticket.php",{},function(){
			
		})
	}
	
	else if(thePage=="gemeente/chatten"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/chatten.php",{},function(){
			
		})
	}
	
	
	else if(thePage=="gemeente/vraag"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/vraag.php",{},function(){
			
		})
	}
	
	
	else if(thePage=="gemeente/meldpunt"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/meldpunt.php",{},function(){
			
		})
	}
	
	
	else if(thePage=="gemeente/afvalophaling"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/afvalophaling.php",{},function(){
			
		})
	}
	
	else if(thePage=="gemeente/zoek"){
		$("#content").load("http://tripleclick.be/hageland_app/content/gemeente/zoek.php",{},function(){
			
		})
	}
	
	
/*--------verenigingen-------*/
		
	else if(thePage=="verenigingen/jeugd"){
		$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/jeugd.php",{},function(){
			
		})
	}
	
	else if(thePage=="verenigingen/sport"){
		$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/sport.php",{},function(){
			
		})
	}
	
	
	
	else if(thePage=="verenigingen/cultuur"){
		$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/cultuur.php",{},function(){
			
		})
	}
	
	else if(thePage=="verenigingen/sociaal"){
			$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/sociaal.php",{},function(){
				
			})
		}


	else if(thePage=="verenigingen/milieu"){
				$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/milieu.php",{},function(){
					
				})
			}
			
			
	else if(thePage=="verenigingen/politiek"){
				$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/politiek.php",{},function(){
					
				})
			}

		
	else if(thePage=="verenigingen/alle"){
				$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/alle.php",{},function(){
					
				})
			
	}
		
	else if(thePage=="verenigingen/zoek"){
				$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/zoek.php",{},function(){
					
				})
			}


	
	else if(thePage=="verenigingen/kaart"){
				$("#content").load("http://tripleclick.be/hageland_app/content/verenigingen/kaart.php",{},function(){
					
				})
			}
	
	/*--------toerisme-------*/
	
	
			else if(thePage=="toerisme/fietsen"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/fietsen.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/wandelen"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/wandelen.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/bier"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/bier.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/wijn"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/wijn.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/fruit"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/fruit.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/erfgoed"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/erfgoed.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/alle"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/alle.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/zoek"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/zoek.php",{},function(){
					
				})
			}
			
			else if(thePage=="toerisme/kaart"){
				$("#content").load("http://tripleclick.be/hageland_app/content/toerisme/kaart.php",{},function(){
					
				})
			}
			
			
	/*-------nieuws-----*/
	
	
				else if(thePage=="nieuws/nieuws"){
				$("#content").load("http://tripleclick.be/hageland_app/content/nieuws/nieuws.php",{},function(){
					
				})
			}
			
			
	/*-------agenda-------*/		
			
			
	
				else if(thePage=="agenda/agenda"){
				$("#content").load("http://tripleclick.be/hageland_app/content/agenda/agenda.php",{},function(){
					
				})
			}
			
			
	/*--------ondernemignen---------*/
	
			
		else if(thePage=="ondernemingen/eten"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/eten.php",{},function(){
					
				})
			}
			
		else if(thePage=="ondernemingen/tebeleven"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/tebeleven.php",{},function(){
					
				})
			}
		
		else if(thePage=="ondernemingen/overnachting"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/overnachting.php",{},function(){
					
				})
			}
			
			else if(thePage=="ondernemingen/alle"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/alle.php",{},function(){
					
				})
			}
		
			else if(thePage=="ondernemingen/shoppen"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/shoppen.php",{},function(){
					
				})
			}
			
				else if(thePage=="ondernemingen/kaart"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/kaart.php",{},function(){
					
				})
			}
			
				else if(thePage=="ondernemingen/zoek"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/zoek.php",{},function(){
					
				})
			}
			
					else if(thePage=="ondernemingen/vakman"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/vakman.php",{},function(){
					
				})
			}
			
				else if(thePage=="ondernemingen/cadeau"){
				$("#content").load("http://tripleclick.be/hageland_app/content/ondernemingen/cadeau.php",{},function(){
					
				})
			}
			
	/*-------------zorg---------*/	

	else if(thePage=="zorg/innood"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/innood.php",{},function(){
					
				})
			}
			
		else if(thePage=="zorg/ziekenhuizen"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/ziekenhuizen.php",{},function(){
					
				})
			}
			
			else if(thePage=="zorg/zoek"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/zoek.php",{},function(){
					
				})
			}
	
		
	else if(thePage=="zorg/dokters"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/dokters.php",{},function(){
					
				})
			}
	

	else if(thePage=="zorg/specialisten"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/specialisten.php",{},function(){
					
				})
			}


	else if(thePage=="zorg/apotheken"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/apotheken.php",{},function(){
					
				})
			}

else if(thePage=="zorg/wachtdiensten"){
				$("#content").load("http://tripleclick.be/hageland_app/content/zorg/wachtdiensten.php",{},function(){
					
				})
			}

/*------------------kaart------------*/



else if(thePage=="kaart/kaart"){
				$("#content").load("http://tripleclick.be/hageland_app/content/kaart/kaart.php",{},function(){
					
				})
			}
			
}


