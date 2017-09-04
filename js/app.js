var btnNatillas = $('#natillas');
var total=0;
function getMenu (food) {

	 $.get('http://localhost:3000/menu', function (response){  
	 	
	 	for (var i = 0; i < response[food].length; i++) {
	 		$('#'+food).append("<li><h3>"+response[food][i].nombre+"</h3><button class="+response[food][i].nombre+">Add</button></li>");
	 		$(document).on("click",$('.'+response[food][i].nombre), function (e) {
				    e.preventDefault();
				 	total = total + 11.40/*response[food][i].precio*/;
					$("#cuenta").append(total);
				});
	 		$('#'+food).append("<li>"+response[food][i].descripcion+"</li>");
	 		$('#'+food).append("<li>"+response[food][i].precio+"</li>");
	 		$('#'+food).append("<img src="+response[food][i].imagen+">");
	 	}
		 
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
getMenu("entrantes");
getMenu("carnes");
getMenu("pescados");
getMenu("postres");
getBebidas("bebidas");


