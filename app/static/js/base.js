document.addEventListener('DOMContentLoaded', function() {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.navbar-nav');
        const navLinks = document.querySelectorAll('.navbar-nav li');
        
        burger.addEventListener('click', () => {
          // Toggle Nav
          
          if (!nav.classList.contains('nav-active')) {
            nav.style.display = 'flex';
          } else {
            setTimeout(function() {
              nav.style.display = 'none';
            }, 500)
          }
          setTimeout(function() {
          nav.classList.toggle('nav-active');
        }, 100);
          
          // Animate Links
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = '';
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
          });
          
          // Burger Animation
          burger.classList.toggle('toggle');
        });
      }

      function createBubble() {
        const bubble_container = document.getElementsByClassName('bg-bubbles')[0];
        const bubble = document.createElement('div');
        bubble.classList.add('bg-bubble');

        const size = Math.random() * 60 + 20 + 'px'; // Random size between 20px and 80px
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 20 + 10 + 's'; // Random duration between 2s and 5s
        bubble_container.appendChild(bubble);
      
        // Remove bubble after it has floated up
        bubble.addEventListener('animationend', (event) => {
          if (event.animationName === 'rise') {
            bubble.remove();
          }
        });
      }
      
      // Create bubbles periodically
      setInterval(createBubble, 800);

    navSlide();
    });
    