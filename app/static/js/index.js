// Bubble animation

function selectFocused(circle) {
  const focused = document.querySelectorAll('.circle.focused');
  focused.forEach(circle => {
    circle.classList.remove('focused');
  });
  circle.classList.add('focused');
}

function createBubble(circle) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 20 + 5;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = `-${size}px`;
  bubble.style.animation = `floatUp ${Math.random() * 3 + 1}s linear`;

  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });

  circle.appendChild(bubble);
}

function startBubbleAnimation() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    setInterval(() => {
      createBubble(circle);
    }, Math.random() * 6000 + 2000);
  });
}

// Circle spacing

function circle_calc(length) {

  size = Math.min(175, 175-(length-10)*(15-Math.abs(length-15)));
  radius = 210+size/2;

  return [radius, size];
}

function createCircles(circles) {

    const [radius, size] = circle_calc(circles.length);
    const container = document.getElementById('circle-container');

    const root = document.documentElement;
    root.style.setProperty('--circle-size', `${size}px`);

    let i = 0;
    for (var circle in circles) {
      
      const circleElement = document.createElement('div');
      circleElement.classList.add('circle');
  
      // Calculate angle and position for each circle
      const angle = (i * (360 / circles.length)) * (Math.PI / 180);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

  
      // Positioning circles in a circular pattern
      circleElement.style.left = `calc(50% + ${x}px - var(--circle-size) / 2)`;
      circleElement.style.top = `calc(50% + ${y}px - var(--circle-size) / 2)`;
  
      container.appendChild(circleElement);

      circleElement.innerHTML = '<div class="circle-content"><p>' + Object.values(circles[circle]) + '<p></div>';
      
      content = circleElement.querySelector('.circle-content');
      content.style.fontSize = `${size / 5}px`;
      i++;
    }
    document.querySelectorAll('.circle').forEach(circle => {
      circle.addEventListener('click', () => {
        circle.style.animation = 'floatUp 10s linear';
        setTimeout(() => {
          window.location.href = '/about';
        }, 2000);
      });


      const pointer = document.getElementById('pointer');
      pointer.style.pointerEvents = 'none';
      circle.addEventListener('mouseover', () => {
        document.body.style.cursor = 'none';
        selectFocused(circle);
        circle.addEventListener('mousemove', (event) => {
          pointer.classList.remove('released');
          pointer.style.display = 'block';
          const pointerWidth = pointer.offsetWidth;
          const pointerHeight = pointer.offsetHeight;
          pointer.style.left = `${event.clientX - (pointerWidth / 2)}px`;
          pointer.style.top = `${event.clientY - (pointerHeight / 2)}px`;
        });
      });
    
      circle.addEventListener('mouseout', () => {
        pointer.classList.add('released');
        document.body.style.cursor = '';
      });
      pointer.addEventListener('animationend', () => {
        pointer.style.display = 'none';
        document.body.style.cursor = '';
      });
    });
  }

// Circle convenience functions
  
function clearCircles() {
  let container = document.getElementById('circle-container');
  container.remove();
  container = document.createElement('div');
  container.id = 'circle-container';
  document.getElementsByClassName('home')[0].appendChild(container);
}

function replaceCircles(circles) {
  clearCircles();
  createCircles(circles);
}

document.addEventListener('DOMContentLoaded', () => {


    test1 = [{1: 'one'}, {2: 'two'}, {3: 'three'}, {4: 'four'}, {5: 'five'}, {6: 'six'}, {7: 'seven'}, {8: 'eight'}, {9: 'nine'}, {10: 'ten'}]
    createCircles(test1);

    startBubbleAnimation();

    add_button = document.getElementById('add-button');
    add_button.onclick = function() {
      test1.push({11: 'eleven'});
      replaceCircles(test1);
    }
    remove_button = document.getElementById('remove-button');
    remove_button.onclick = function() {
      test1.pop();
      replaceCircles(test1);
    }

    control_menu_button = document.getElementById('menu-btn');
    control_menu = document.getElementById('control-menu');
    control_menu_button.addEventListener('click', () => {
      control_menu.classList.add('active');
  });
});