$(document).ready(function (){

    //selector de etiqueta
    $("h1").html("Adiós mundo");

    //Selector de id empieza con almohadilla (#)
    $("#page-title").html("Hola mundo de Jquery");

    //Selector de clase empieza con punto (.)
    $(".red").attr("style" , "color:#FF0000");

   /* $("document").on("click" , "#btn-clear" , function(){

        $("h1").html("");

    });*/

    /*$("document").on("click" , "#btn-yellow" , function(){

        $("h1").attr("style" , "color: yellow");

    });

    $("document").on("click" , "#clear-yellow" , function(){

        $("h1").attr("style" , "color: yellow");

    });*/

    $(document).on("click", "#btn-clear", function () {
        $("h1").html("");
      });
    
      $(document).on("click", "#btn-restore", function () {
        // Selector de etiqueta
        $("h1").html("adios mundo cruel");
    
        // Selector de ID (#)
        $("#page-title").html("Titulo Hola Mundo");
      });

    $(document).on("click", "#add-yellow", function () {
        $("h1").addClass("yellow");
      });
    
      $(document).on("click", "#delete-yellow", function () {
        $("h1").removeClass("yellow");
      });

});