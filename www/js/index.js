/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
       this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        app.receivedEvent('deviceready');

        app.setupPush();
        app.setupToolbar();

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      
        console.log('Received Event: ' + id);	

	
    },
    setupToolbar: function(){
    	StatusBar.styleBlackTranslucent();
		StatusBar.styleLightContent();
    },
     setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "XXXXXXXX"
            },
            "browser": {
                //pushServiceURL: 'http://tripleclick.be/hageland_app/inc/push/push.php'
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            },
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed

            }

        	$.post("http://tripleclick.be/hageland_app/inc/push/registration.php", {id: data.registrationId});

        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
    }
};


function loadnews(){
	var i=0;
	$.get("http://www.nieuwsblad.be/rss.aspx?intro=1§ion=postcode&postcode=3000", function(data) {
		var $XML = $(data);
		$XML.find("item").each(function() {
			i=i+1;
			if(i==1) css = "style='margin-top:0px;'";
			else css = "";
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
			if(item.enclosure) article+="<img class='nieuws' "+css+" src='"+item.enclosure+"'>";
			article+="<p class='nieuws'>"+item.title+"</p><h2 class='nieuws'>"+item.description+"</h2><p class='ticket'>"+item.pubDate+"</p></div>";
			$('#news').append(article);
			//etc...
		});
	});	

}

//getposition//
//maps API key AIzaSyD60JeZBaJOiY9B5-4de4ptq2-vVgLEcuA
function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
	
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {

      console.log(
	  	'Latitude: '       	   + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
		 
		 getReverseGeocodingData(position.coords.latitude,position.coords.longitude);
   };

   function onError(error) {
       console.log('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
   
}



function getReverseGeocodingData(lat,lng) { 
	var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat,lng);
       
    geocoder.geocode({ 'latLng': latlng }, function (results, status) { 
		if (status == google.maps.GeocoderStatus.OK) {
			if(results[0]) {
				//console.log(results[0]);
           	 	var address = (results[0].formatted_address);
								
				var place = results[0].address_components[2].long_name;
				var zip = results[0].address_components[6].long_name;
				
				alert(address + " (lookup place = '"+place+"' zip = '"+zip+"')");
				
				//var place = "Leuven";
				if($("#regio-filter option[value='"+place+"']").length){
					console.log("regio filter option '"+place+"' found");	
					$("#regio-filter").val(place);
					$('.SlectBox')[0].sumo.reload();
					$("#regio-filter").trigger("change");

					
				}
				else console.log("regio filter option '"+place+"' NOT found");	//TODO FETCH FROM SERVER


				
			}
			else {
				alert('Google did not return any results.');
			  }
			} 
		else {
			  alert("Reverse Geocoding failed due to: " + status);
		}
      
    });
}



//watchposition//
/*
function watchPosition() {

   var options = {
      maximumAge: 3600000,
      timeout: 3000,
      enableHighAccuracy: true,
   }

   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   function onSuccess(position) {

      console.log('Latitude: '        + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      console.log('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }

}*/

function qrScan(){
	   cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +

					"Cancelled: " + result.cancelled);
		  },
		  function (error) {
			  alert("Scanning failed: " + error);
		  },
		  {
			  preferFrontCamera : false, // iOS and Android
			  showFlipCameraButton : true, // iOS and Android
			  showTorchButton : true, // iOS and Android
			  torchOn: true, // Android, launch with the torch switched on (if available)
			  prompt : "Place a barcode inside the scan area", // Android
			  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
			  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
			  orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
			  disableAnimations : true, // iOS
			  disableSuccessBeep: false // iOS
		  }
   );
	}

function initMap(mode){
	/*
	$.ajax({
		type: 'GET',
		url: 'http://tripleclick.be/hageland_app/content/kaart/data.php',
		//dataType: 'json',
		success : function(data){
		*/
			
			/*
			var data = [{
				lat:50.9960490,
				lng: 4.7008540
			}];
			*/
				
			var marker, infobox;
			var styledMapOptions = {name: 'Custom Style'};
			var latlng = new google.maps.LatLng(50.876616, 4.703368);
			var MY_MAPTYPE_ID = 'custom_style';
			var featureOpts = [];

 			
			var isDraggable = !('ontouchstart' in document.documentElement);
 			
 			var mapOptions = {
				scrollwheel: true,
				draggable: true,
				zoom: 12,
				center: latlng,
				mapTypeControlOptions: {
				  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
				},
				mapTypeId: MY_MAPTYPE_ID
			  };
			
			if($("div#map").children().length == 0){			
				map = new google.maps.Map(document.getElementById('map'), mapOptions);
				customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
				map.mapTypes.set(MY_MAPTYPE_ID, customMapType);		
				addMarkersToMap(map);	
			}
			var i = 0;
			
			closeInfoWindows();
			deleteMarkers();
				
			var markerPositionArray = []; 
			
			
			
			//$.each(data, function(key, value){});
		//}		
	//});	
}

var addMarkersToMap = function(map){
	var latitudeAndLongitudeOne = new google.maps.LatLng(50.876616, 4.703368);
	
	var markerOne = new google.maps.Marker({
	position: latitudeAndLongitudeOne,
	map: map
	});
	
	var latitudeAndLongitudeTwo = new google.maps.LatLng(50.932236, 4.689164);
	
	var markerOne = new google.maps.Marker({
	position: latitudeAndLongitudeTwo,
	map: map
	});
}


function deleteMarkers() {
  
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function closeInfoWindows(){	
  for (var i = 0; i < markers.length; i++) {
    markers[i].infowindow.close();
  }
}