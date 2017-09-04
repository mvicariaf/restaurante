
function getMenu (food) {

	 $.get('http://localhost:3000/menu', function (response){  
	 	var total=0;
	 	var suma=0;
	 	for (var i = 0; i < response[food].length; i++) {
	 		$('#'+food).append("<li><h3>"+response[food][i].nombre+"</h3><button data-price='"+response[food][i].precio+"' class="+response[food][i].nombre+">Add</button></li>");
	 		
	 		$('#'+food).append("<li>"+response[food][i].descripcion+"</li>");
	 		$('#'+food).append("<li>"+response[food][i].precio+"</li>");
	 		$('#'+food).append("<img src="+response[food][i].imagen+">");
	 		$('.'+response[food][i].nombre).on("click", function (e) {
				    e.preventDefault();
				    

				 	// function precioTotal (){
				 	// 	total = suma + parseFloat(response[food][i].precio);
				 	// 	return suma = total;
				 	// }
				 	var precio = parseFloat($(this).attr("data-price"));
				 	total+=precio;
					$("#cuenta").text(total);
				});
	 	};
	});
};
function getBebidas (drink) {
	 $.get('http://localhost:3000/menu', function (response){  
	 	
	 	for (var i = 0; i < response[drink].length; i++) {
	 		$('#'+drink).append("<li><h3>"+response[drink][i].nombre+"</h3></li>");
	 		$('#'+drink).append("<li>"+response[drink][i].precio+"</li>");
	 		
	 	}
		 
	});
};

function añadirPrecio(precio){
	
	return total = total + precio;
};
getMenu("entrantes");
getMenu("carnes");
getMenu("pescados");
getMenu("postres");
getBebidas("bebidas");


