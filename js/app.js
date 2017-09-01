 
 $.get('http://localhost:3000/menu', function (response){  
 	for (var i = 0; i < response.entrantes.length; i++) {
 		$('#entrantes').append("<li>"+response.entrantes[i].nombre+"</li>");
 	}
	 
});

