// script.js - comportamiento simple (menú móvil y envío del formulario simulado)

document.addEventListener('DOMContentLoaded', function () {
  // año en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // toggle nav (móvil)
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  btn && btn.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'transparent';
    }
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close nav on mobile
        if (window.innerWidth < 900 && nav) nav.style.display = '';
      }
    });
  });

  // formulario (simulación de envío)
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  form && form.addEventListener('submit', function (e) {
    e.preventDefault();
    // validación básica
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !message) {
      msg.style.color = 'darkred';
      msg.textContent = 'Por favor, completa tu nombre y mensaje.';
      return;
    }

    // Simular envío (aquí podrías integrar fetch a tu backend o a un servicio como Formspree)
    msg.style.color = 'green';
    msg.textContent = 'Gracias, tu mensaje fue enviado. Pronto nos comunicaremos.';
    form.reset();
  });
});