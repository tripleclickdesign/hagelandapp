// JavaScript Document
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	//StatusBar.overlaysWebView(false);
	StatusBar.styleBlackTranslucent();
	StatusBar.styleLightContent();
    //window.open = cordova.InAppBrowser.open;
	//var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
}

var thePage,theSubPage,theSubSubPage;
var	markers = [];
thePage="home";
loadPage();

$(document).ready(function(){
	$('.SlectBox').SumoSelect();
	
	$("#regio-filter").change(function(){
		console.log($(this).val());
		loadPage();
	});
	
	$(document).on("click",".menu a",function(event){
			$( ".cross" ).click();
	});
	
	$(document).on("click",".cogmenu a",function(event){
			$( ".kruis" ).click();
	});
	
	$(document).on("click","a.intern",function(event){
		event.preventDefault();
		href=$(this).attr("href");
		var arr = href.split("/");
		thePage=arr[0];
		theSubPage=arr[1];
		theSubSubPage=arr[2];
		loadPage();
	
	});
	
	$(document).on("click",".location",function(event){
			getPosition();
	});
	$(document).on("click","#qrbutton",function(event){
			qrScan();
	});
	
	$(document).on("click","a.back",function(event){
			//niveau 1
			if(theSubPage) theSubPage = "";
			else thePage = "home";
			loadPage();	
	});
	
	$(document).on("click","a.extern",function(e){
		e.preventDefault();
		var linktarget = $(this).attr("href");
		
		if (typeof navigator !== "undefined" && navigator.app) {
			// Mobile device.
			navigator.app.loadUrl(linktarget, {openExternal: true});
			
			
			
		} else {
			// Possible web browser
			
			window.open(linktarget, "_blank", "location=no,toolbarposition=top");
			
		}
	});
	
		
	
	$(document).on("click","a.home",function(event){
		if(thePage.indexOf("/")==-1){
		//niveau 1
		thePage="home";
		loadPage();
		}		
	});
});




function loadPage(){
	
	$("a.intern").removeClass("hamburger-active");
	$("a.intern[href='"+thePage+"']").addClass("hamburger-active");
	
	
	if(thePage=="home")$("a.back").hide();
	else $("a.back").show();
	/*
	if(theSubPage) $("a.home").show();
	else $("a.home").hide()*/
	
	if(thePage == "agenda")	$("#overlay").show();
			
	if(thePage && !theSubPage){
		$("#content").load("http://tripleclick.be/hageland_app/content/"+thePage+".php",{regio: $("#regio-filter").val()},function(){
			
			if(thePage == "agenda") $("#overlay").hide();

			
			if(thePage=="nieuws")loadnews();
			if(thePage=="kaart"){
					initMap('init');
				};
			})
		}
	else if(thePage && theSubPage && !theSubSubPage){
		$("#content").load("http://tripleclick.be/hageland_app/content/"+thePage+"/"+theSubPage+".php",{},function(){})
		}
	else if(thePage && theSubPage && theSubSubPage){
		$("#content").load("http://tripleclick.be/hageland_app/content/"+thePage+"/"+theSubPage+"/"+theSubSubPage+".php",{},function(){
			})
		}
		
		
	
	/*if(thePage=="home"){
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
			
			
	
	
	
				else if(thePage=="nieuws/nieuws"){
				$("#content").load("http://tripleclick.be/hageland_app/content/nieuws/nieuws.php",{},function(){
					
				})
			}
			
			
	
			
			
	
				else if(thePage=="agenda/agenda"){
				$("#content").load("http://tripleclick.be/hageland_app/content/agenda/agenda.php",{},function(){
					
				})
			}
			
			

	
			
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





else if(thePage=="kaart/kaart"){
				$("#content").load("http://tripleclick.be/hageland_app/content/kaart/kaart.php",{},function(){
					
				})
			}
*/			
}


