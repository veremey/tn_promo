(function(window, google, mapster){
	// 'static/img/icons/marker.png',

	var options = mapster.MAP_OPTIONS,
			element = document.getElementById("map"),
			map = mapster.create(element, options);
			map.addMarker({
				lat: 48.463109,
				lng: 35.062986,
				draggale: true,
				icon: 'static/img/icons/marker.png'

			});
			map.addMarker({
				lat: 48.454109,
				lng: 35.0621486,
				draggale: true,
				icon: 'static/img/icons/marker.png'

			});
			map.addMarker({
				lat: 48.488190,
				lng: 35.055555,
				draggale: true,
				icon: 'static/img/icons/marker.png'

			});
			map.addMarker({
				lat: 48.475076,
				lng: 35.091421,
				draggale: true,
				icon: 'static/img/icons/marker.png'

			});


}(window, google, window.Mapster));
