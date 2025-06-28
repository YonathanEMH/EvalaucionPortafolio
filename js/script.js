$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (nombre === '' || correo === '' || mensaje === '') {
      alert('Por favor completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    alert('¡Gracias por tu mensaje, ' + nombre + '! Te responderé pronto.');

    $(this).trigger('reset');
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-scrolled shadow');
    } else {
      $('.navbar').removeClass('navbar-scrolled shadow');
    }
  });

  $('#proyectos .card').on('click', function() {
    $(this).find('.card-text').slideToggle();
  });
});

$(document).ready(function() {
  $('#habilidades li').hover(
    function() {
      $(this).css({
        'background-color': '#0d6efd',  // color azul Bootstrap primary
        'color': 'white',
        'cursor': 'pointer'
      });
    },
    function() {
      $(this).css({
        'background-color': '',
        'color': '',
        'cursor': ''
      });
    }
  );
});
