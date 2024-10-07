$(document).ready(function(){

    $(document).on("click", "#btn-get-data", function(){

        getPokemonList();

    });

$.ajax({
    url:"https://www.swapi.tech/api/people",
    method: "GET",

    }).done(function(data){
        //JSON.parse () toma como entrada el JSON que 
        //llega del sv y lo convierte en un objeto
        var json = JSON.parse(data);

        $("#data_content").html();
 
        /*Lo que se programa dentro de esta 
        función ser ejecutado cuando se haya resuelto la petición
        asíncrona, es decir, cuando llegue la respuesta del servidor*/

    });


});