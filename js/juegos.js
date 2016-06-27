$(document).ready(adivina());

function adivina(){
	var puntos=0;
	var intento=3;
	$(".puntaje").text(puntos);
	imgAleatoria();
	$("#comprobar").click(function(){
		var nombre=$("#entrada").val();
		var name=$("#animal").attr("alt");
		if(nombre.toUpperCase()==name.toUpperCase()){
			intento=3;
			$("#mensaje").text("¡Acertaste!")
			puntos=puntos+5;
			$(".puntaje").text(puntos);
			imgAleatoria();
		}
		else{
			intento=intento-1;
			if(intento>0){
				$("#mensaje").text("No, no es el animal, pero vamos, te quedan "+intento+" intentos.");
				}
			else{
				$("#mensaje").text("Lo siento, ya no tienes más intentos");
				puntos=puntos-1;
				$(".puntaje").text(puntos);
				imgAleatoria();

				}
			
			}
		clear();
		});
}

function imgAleatoria(){
	var size=animales.length;
	var i = Math.floor((Math.random() * size));
	$("#animal").attr("src","img/animales/"+animales[i].image);
	$("#animal").attr("alt",""+animales[i].name);
}

function clear(){
	$("#entrada").val("");
	$("#entrada").focus();
}


