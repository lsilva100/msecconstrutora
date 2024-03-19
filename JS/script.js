
 window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 200) {
      header.classList.add('header-scrolled');
      // Forçar o navegador a repintar os elementos antes de aplicar a transição
      void header.offsetWidth;
    } else {
      header.classList.remove('header-scrolled');
      // Forçar o navegador a repintar os elementos antes de aplicar a transição
      void header.offsetWidth;
    }
  });

//*****************************DEPOIMENTOS******************************/
document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 1; // Começa com o primeiro depoimento
  var testimonialContainer = document.querySelector(".testimonial-container");
  var testimonials = document.querySelectorAll(".testimonial");

  function displayTestimonial(index) {
      var currentTestimonial = document.querySelector("#testimonial" + index);
      if (currentTestimonial) {
          // Adiciona a classe 'show' para exibir o depoimento com a transição
          currentTestimonial.classList.add("show");
          // Oculta os outros depoimentos
          testimonials.forEach(function(testimonial) {
              if (testimonial !== currentTestimonial) {
                  testimonial.classList.remove("show");
              }
          });
      }
  }

  function nextTestimonial() {
      currentIndex++;
      if (currentIndex > 3) { // Se atingir o número máximo de depoimentos
          currentIndex = 1; // Reinicia com o primeiro depoimento
      }
      displayTestimonial(currentIndex);
  }

  // Exibir o primeiro depoimento inicialmente
  displayTestimonial(currentIndex);

  // Trocar automaticamente os depoimentos a cada 5 segundos
  setInterval(nextTestimonial, 5000);
});
/********************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  let position = 0;
  let rotationSpeed = 100; // Velocidade de rotação padrão para desktop

  function rotateCarousel() {
    position -= rotationSpeed; // Move a cada slide
    if (position < -400) {
      position = 0; // Volta ao início
    }
    carousel.style.transform = `translateX(${position}px)`;
  }

  

  // Verifica se é um dispositivo móvel
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Se for um dispositivo móvel, aumenta a velocidade de rotação
  if (isMobileDevice()) {
    rotationSpeed = 1000; // Ajuste a velocidade de rotação para dispositivos móveis
  }

  function rotateCarousel() {
    position -= rotationSpeed; // Move a cada slide
    if (position < -500) {
      position = 0; // Volta ao início
    }
    carousel.style.transform = `translateX(${position}px)`;
  }

  setInterval(rotateCarousel, 1000); // Troca de slide a cada 2 segundos
});

/*************************************************************************************************************** */

function toggleMenu() {
  var menu = document.getElementById("menu");
  var burger = document.getElementById("burguer");
  
  if (menu.style.display === "block") {
      menu.style.display = "none";
      burger.innerHTML = "Menu"; // Altera para "Menu" quando o menu está oculto
  } else {
      menu.style.display = "block";
      burger.innerHTML = "X"; // Altera para "X" quando o menu está visível
  }
}





  
  