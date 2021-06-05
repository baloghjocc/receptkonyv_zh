$(function(){    
    $.ajax({url: "receptek.json", success: function(result){ receptekTomb=(result); kiir();}});
    $("article").on("click","tr",megjelenit);
    $("article").on("click", ".torol", function(){     
                        var index = Number($(this).attr("index")); //megnézem, mi az eseményt kiváltó Töröl gomb indexe --> az lesz az elem tömbben elfoglalt indexe is
                        receptekTomb.splice(index, 1);                        
                        kiir();
    });
});

var receptekTomb=[];

function kiir(){
	$("article").empty();
    for (var item in receptekTomb) {
        var etelek ="<p><b>Étel neve</b>: "+receptekTomb[item]["nev"]+"</p>\n\
                          <p><b>Kategória</b>: "+receptekTomb[item]["kategoria"]+"</p>\n\
                          <p> <b>Elkészítési idő</b>: "+receptekTomb[item]["elkeszitesi_ido"]+"</p>\n\
                           <img src='" + receptekTomb[item]['eleresi_ut'] + "' alt='" + receptekTomb[item]['eleresi_ut'].slice(6,receptekTomb[item]['eleresi_ut'].length-4) + "' >\n\
                            <p><b>Ár</b>: "+receptekTomb[item]["ar"]+" Ft</p>\n\
                           <p><b>Db</b>: <input type='text' id='"+receptekTomb[item]["nev"]+"_db'></p>\n\
                            <div id=gombok><input type='button' class='modosit' index='"+item+"' value='Módosít'><input type='button' class='torol' index='"+item+"' value='Töröl'></div>";
                        $("article").append("<div id='"+receptekTomb[item]["nev"]+"'>"+etelek+"</div>");
         
                        }    

    }

function megjelenit(){
    var id=Number($(this).attr("id"));
    megjelenitRecept(id);
    
}

function megjelenitRecept(recept){
    $("section").empty();
    $("section").append("<h2></h2>");
	$("section h2").append(recept);
}

