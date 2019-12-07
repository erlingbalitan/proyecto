this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "Balitan" && $("#Contrasena").val() == '281200'){
		logueado = true;
		if(logueado == true){
			window.location = "./pages/Inicio.html"
		}
		
		}else{
			Swal.fire('Error');
	}
});

$("#galeria").click(function(){
	window.location = "../pages/galeria.html"
});

$("#pdf").click(function(){
	window.location = "../pages/Sonar.html"
	$(".embed").src = "../pdfs/Sonar.pdf"
})

$("#galeria_pdf").click(function(){
	window.location = "../pages/galeria_pdf.html"
});

$("#prueba").click(function(){
	window.location = "../pages/prueba.html"
});

$("#salir").click(function(){
	window.location = "../index.html"
})

window.addEventListener('load', function(){
	$('.container').fadeIn(1000);
})