$(document).ready(function() {
  // Validar formulario antes de enviar
  $('form').on('submit', function(e) {
    e.preventDefault(); // Evitar envío real por ahora

    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    // Validación básica
    if (nombre === '' || correo === '' || mensaje === '') {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Validar formato básico email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Simular envío exitoso
    alert('¡Gracias por tu mensaje, ' + nombre + '! Te responderé pronto.');

    // Limpiar formulario
    $(this).trigger('reset');
  });

  // Cambiar clase del navbar al hacer scroll
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-scrolled shadow');
    } else {
      $('.navbar').removeClass('navbar-scrolled shadow');
    }
  });

  // Mostrar más info al hacer clic en proyectos o habilidades
  // Aquí un ejemplo para proyectos: toggle la descripción al hacer clic en la tarjeta
  $('#proyectos .card').on('click', function() {
    $(this).find('.card-text').slideToggle();
  });
});
