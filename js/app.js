
function getMenu (food) {

	 $.get('http://localhost:3000/menu', function (response){  
	 	var total=0;
	 	var suma=0;
	 	for (var i = 0; i < response[food].length; i++) {
	 		var plato = response[food][i].nombre;
	 		var dish = response[food][i].nombre.split(' ').join('')
	 		var precio = response[food][i].precio
	 		$('#'+food).append("<li><h3>"+plato+"</h3><button data-price='"+precio+"' class="+dish+">Add</button></li>");
	 		
	 		$('#'+food).append("<li>"+precio+" €</li>");
	 		
	 		
	 		$('.'+dish).on("click", function (e) {
				    e.preventDefault();
				    total += añadirPrecio(dish);
				    $("#cuenta").text(total);
				});
	 		if (response[food][i].descripcion  && response[food][i].imagen ) {
	 			$('#'+food).append("<li>"+response[food][i].descripcion+"</li>");
	 			$('#'+food).append("<img src="+response[food][i].imagen+">");
	 		}
	 	};
	});
};


function añadirPrecio(plato){
	
	var precio = parseFloat($("."+plato).attr("data-price"));
	total =+precio
	return total;
	
};
getMenu("entrantes");
getMenu("carnes");
getMenu("pescados");
getMenu("postres");
getMenu("bebidas");


