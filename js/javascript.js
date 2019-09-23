
$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,

});
$('.slider-catalogo').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },



  ]
});



/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);


//Codigo del formulario
new Vue({
  el: "#app",
  data: function(){
    return {
      formulario: {
        nombre: '',
        correo: '',
        mensaje: ''
      }
    }
  },
  methods: {
    enviarFormulario: function(){
			// validacion DE CAMPOS
      var todoCorrecto = true
      if(!/^[a-z\s]{3,12}$/ig.test(this.formulario.nombre)){
      	todoCorrecto = false
      }

      if(!/^[a-z0-9@\.]{4,30}$/ig.test(this.formulario.correo)){
      	todoCorrecto = false
      }

      if(this.formulario.mensaje.length < 4){
      	todoCorrecto = false
      }

      if(todoCorrecto === false){
      	alert('Revisa tu formulario')
        return;
      }

      //Envio

      var frm = new FormData()
      	frm.append('user', this.formulario.nombre)
		    frm.append('email', this.formulario.correo)
		    frm.append('message', this.formulario.mensaje)

      fetch('http://127.0.0.1/prueba/mail.php', {
        method: 'POST',
        body: frm
      })

      //mensaje
    }
  }
})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())


app.all('/', (req, res) => {
	return res.sendFile(__dirname + "../index.html")
})

// FAKE

function enviarDatos(a, b, c){
	console.log(a, b, c)
}

//FAKE

app.post('/contacto', (req, res) => {

	const {user, email, message} = req.body

	enviarDatos('samanta493@gmail.com', 'Contacto desde la web', "Nombre: " + user  + ", Correo: " + email + ", Mensaje: " + message)

	return res.json({
		success: 1,
		data: {
			message: 'Enviado con exito!'
		}
	})
})

app.listen(8081, '127.0.0.1', function(){
	console.log('corriendo')
})
