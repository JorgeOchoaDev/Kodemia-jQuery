//2 cuadrados rojos y 2 verdes al cargar la página, que se pueden ocultar al presionar un botón
const songsNames = [
   "Los chicos no lloran",
   "Bambu",
   "Morena mía",
   "Manos vacías",
   "Aire soy",
   "Te amaré",
   "Y como un lobo",
   "Tu Salvación"
]
$("body").append("<div class='square red-square'></div>");
$("body").append("<div class='square green-square'></div>");
$(".square").append("<button class='slide'>slide?</button>");
$(".slide").click(function(){
  $(this).parent().slideUp();
});

//recorrer el array e insertar un cuadro por cada item de mi array, este cuadro
//debe tener 2 botones, uno que elimne la tarjeta seleccionada y otro que la
//agrege a otra lista llamada “favoritos”, y el título de la canción
$("body").append("<div class='songbox'></div>");
$("body").append("<div class='likes'></div>");
for (i=0;i<songsNames.length;i++){
  $(".songbox").append("<div class='square song'>"+songsNames[i]+"<button class='remove'>Remove</button><button class='favorite'>Add to favorites</button></div>");
}
$(".favorite").click( function(){
  $(this).parent().removeClass("song");
  $(this).parent().addClass("favorite");
  $(this).parent().appendTo($(".likes"));
  $(this).remove();
});
$(".remove").click( function(){
  $(this).parent().remove();
});
