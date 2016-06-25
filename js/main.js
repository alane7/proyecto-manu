$(document).ready(function(){
    $("#foto_fauna").attr("src", "http://www.mintur.gob.ve/mintur/wp-content/uploads/2014/11/Guacamayos-Bandera-lucen-nuestro-tricolor-nacional.-Foto-Archivo1.jpg");

    $("#mamiferos").hover(function(){ 
        $("#foto_fauna").attr("src", "http://vignette3.wikia.nocookie.net/reinoanimalia/images/8/80/Jaguar_hd_full.png/revision/latest?cb=20130303143941&path-prefix=es");
    });

    $("#aves").hover(function(){ 
        $("#foto_fauna").attr("src", "http://www.mintur.gob.ve/mintur/wp-content/uploads/2014/11/Guacamayos-Bandera-lucen-nuestro-tricolor-nacional.-Foto-Archivo1.jpg");
    });

    $("#reptiles").hover(function(){ 
        $("#foto_fauna").attr("src", "http://www.visitmanu.com/wp-content/uploads/2013/01/top-six-caim%C3%A1n.jpg");
    });

    $("#anfibios").hover(function(){ 
        $("#foto_fauna").attr("src", "http://portal.andina.com.pe/EDPfotografia2/Thumbnail/2009/09/01/000104567W.jpg");
    })

    $("#insectos").hover(function(){ 
        $("#foto_fauna").attr("src", "http://serfotografo.es/salvasole/wp-content/uploads/sites/4/14-Mariposa-increible-Manu-NP-Per%C3%BA-24-8-10.jpg");
    });


    //FLORA
    $("#foto_flora").attr("src", "http://www.perutraveladviser.com/image/manu05.jpg");
    $("#arboles").hover(function(){ 
        $("#foto_flora").attr("src", "http://www.carpinteriacaballeroleon.com/imagenes-2014/arboles/arbol-caoba.jpg");
    });
    $("#flores").hover(function(){ 
        $("#foto_flora").attr("src", "http://www.perutraveladviser.com/image/manu05.jpg");
    });
    $("#arbustos").hover(function(){ 
        $("#foto_flora").attr("src", "http://4.bp.blogspot.com/-5BM5Ayc4Uvc/VrDYZapt8gI/AAAAAAAAdCA/WkcEfOf73wQ/s1600/ichu%2B44.jpg");
    });

    //cultura viva
    $("#foto_cultura_viva").attr("src", "https://s-media-cache-ak0.pinimg.com/564x/dc/44/04/dc4404ba2146eec87c65e78634c37ec4.jpg");
    $("#machiguenga").hover(function(){ 
        $("#foto_cultura_viva").attr("src", "http://www.go2peru.travel/destinos/large/tambopata_abr09-1125.jpg");
    });
    $("#yine").hover(function(){ 
        $("#foto_cultura_viva").attr("src", "https://s-media-cache-ak0.pinimg.com/564x/dc/44/04/dc4404ba2146eec87c65e78634c37ec4.jpg");
    });
    $("#nahua").hover(function(){ 
        $("#foto_cultura_viva").attr("src", "http://www.rumbosdelperu.com/imagenes_ftp/ACTUALIDAD/MEDIOAMBIENTE/Indigenas%20Nahua/cult-nahua-cazador.jpg");
    });


    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

    //MODAL
    $("#myBtnFauna").click(function(){
        $("#myModalFauna").modal();
    });

    $("#myBtnFlora").click(function(){
        $("#myModalFlora").modal();
    });

    $("#myBtnCulturaViva").click(function(){
        $("#myModalCulturaViva").modal();
    });
    
});
