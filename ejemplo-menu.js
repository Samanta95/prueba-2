$(window).scroll(function(e) {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 1) {
    $('#banner-menu').addClass('fixed');
  }else if(scrollTop < 50){
    $('#banner-menu').removeClass('fixed');
  }

});

$(document).ready(function(){
  $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
});
$(document).ready(function(){
  $('.slider-testimonio').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
});

$(document).ready(function(){
  $('.cliente-logos').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.slider-servicios').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// el codigo que hace que mi menu baje a la seccion que hice click.,
//el problema es que baja muy rapido y se queda muy abajo
// YA, el problema es que en tu OuterHeight no estas considerando el alto de tu cabecera
// lo de muy rapido, aver dame un toque que lo leo bien oki
// ya ... aver
// Me permites modificar tu codigo un poquito?  si

// te explico, cada vez que se dispara el evento scroll de window, ejecuitas el:
// -- sections.each
// dentro de este: motod se navegacion y selector de a y find, lo cual lo hace un pelo innecesario, son procesos que ejeculas a cada rato y puede afectar
// al rendimiento general de la pagina, lo que voya hacer ya, es mejorar un poco el rendimiento del algoritmo
var sections = $('section')
  , nav = $('contenedor')
  , nav_height = nav.outerHeight()
  , $body = $("html, body");

// Cache de posiciones, se va a actualizar cada vez que se REDIMENSIONE window
var sectionPositions = {}

function poblateSectionPositions(){
  var headerHeight = $("#banner-menu").outerHeight()
  sections.each(function(index, section){
    if(section.id){
      sectionPositions[section.id] = $(section).offset().top - headerHeight
    }
  })
}

$(window)
// hacemos que cada vez que redimensione window se actualicen las posiciones, pues en responsive varian al ser las secciones mas altas
.on('resize', function(){
  poblateSectionPositions();
})
// disparamos el evento resize para ejecutar en la primera carga el listener que definimos arriba, y el evento scroll para ejecutar el sticky header
.trigger('resize scroll');

// hace lo mismo que find, pero de manera mas eficiente
var linksNav = $('.lnk-menu');
linksNav.click(function(e){
  // lo que decias que iba muy rapido, es por que la ruta hash ya tiene un evento predeterminado, de posicionar la pagina, lo evitamos con preventdefault
  e.preventDefault();
  
  $body.stop().animate({scrollTop: sectionPositions[$(this).attr('href').substring(1)]}, 500)
  
})



// En teoria ya esta, el tema posiciones es ya por que la maquetacion no ayuda mucho, pero hice lo que pude, alguna duda o algo?

//no, gracias T.T si voy a ver de arreglar eso

// dale, si no tienes dudas me desconectare, igual cualquier cosa me preguntas

// no olvider meter toda la evolucionde codigo en el poderoso git
/oki


/*
$(window).on('scroll', function () {
  console.log('hola', $(this).scrollTop())
  var scroll_cont = $(this).scrollTop();
  
  sections.each(function() {
    console.log($(this))
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (scroll_cont >= top && scroll_cont <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

*/






