(function(window, google, mapster){
	mapster.MAP_OPTIONS = {
		center: {
			lat: 48.463109,
			lng: 35.062986
		},
		zoom: 13,
		disableDefaultUI: true,
		scrollwheel: false,
		draggable: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
}(window, google, window.Mapster || (window.Mapster = {})));

