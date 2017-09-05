function getMenu (food) {
	 $.get('http://localhost:3000/menu', function (response){  
	 	
	 	for (var i = 0; i < response[food].length; i++) {
	 		var plato = response[food][i].nombre;
	 		var clasePlato = response[food][i].nombre.split(' ').join('');
	 		var precio = response[food][i].precio;
	 		
	 		$('#'+food).append("<li><h3>"+plato+"</h3><button data-name='"+plato+"' data-price='"+precio+"' class='"+clasePlato+" botonPlato'>Add</button></li>");
	 		
	 		$('#'+food).append("<li>"+precio+" €</li>");
	 		
	 		if (response[food][i].descripcion  && response[food][i].imagen ) {
	 			$('#'+food).append("<li>"+response[food][i].descripcion+"</li>");
	 			$('#'+food).append("<img src="+response[food][i].imagen+">");
	 		};

	 		//$('.'+clasePlato).on('click', addItem(event, clasePlato, precio));
	 	};

	 	$('.botonPlato').on('click', function(){
	 		var nombre = $(this).attr("data-name");
	 		var precio = $(this).attr("data-price");
	 		
	 		addItem(nombre, precio);
	 	});
	});
}
function addItem (clasePlato, precio) {
   console.log("asd");
    $('#items').append("<li>"+clasePlato+"  "+precio+"</li>");
}

/*function anadirPrecio(plato){
	
	var precio = parseFloat($("."+plato).attr("data-price"));
	total =+precio
	return total;
	
};*/

getMenu("entrantes");
getMenu("carnes");
getMenu("pescados");
getMenu("postres");
getMenu("bebidas");


