// Select elements
const themeButton = document.getElementById('theme-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');




// Default mode to light
document.body.classList.remove('dark-mode');

// Toggle light/dark mode
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change SVG based on the current mode
    const icon = document.querySelector('#theme-button img');

    if (document.body.classList.contains('dark-mode')) {
        // Update to light mode icon (for dark mode)
        icon.setAttribute('src', './assets/ldmode.svg');
        icon.setAttribute('alt', 'Light Mode');
    } else {
        // Update to dark mode icon (for light mode)
        icon.setAttribute('src', './assets/ldmode.svg');
        icon.setAttribute('alt', 'Dark Mode');
    }
});

// Toggle hamburger menu
hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    if(span1.classList.contains('active')){
        span1.classList.toggle('inactive');
        span2.classList.toggle('inactive');
        span3.classList.toggle('inactive');
        console.log('inactive');
    }else if (span1.classList.contains('inactive')){
        span1.classList.toggle('inactive');
        span2.classList.toggle('inactive');
        span3.classList.toggle('inactive');
        console.log('active');
    }

    span1.classList.toggle('active');
    span2.classList.toggle('active');
    span3.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const typewriterElements = [
      {
          id: "intro-typewriter",
          text: "Hi :)",
          typingDelay: 1000,
          speed: 200,
      },
      {
          id: "projects-typewriter",
          text: "< Projects / >",
          typingDelay: 2000,
          speed: 150,
      },
      {
        id: "experience-typewriter",
        text: "< Experience / >",
        typingDelay: 3000,
        speed: 150,
    },
  ];

  typewriterElements.forEach(({ id, text, typingDelay, speed }) => {
      let index = 0;
      const target = document.getElementById(id);

      function typeWriter() {
          if (index < text.length) {
              target.innerHTML = text.substring(0, index + 1) + '<span class="cursor static">|</span>';
              index++;
              setTimeout(typeWriter, speed);
          } else {
              target.innerHTML = text + '<span class="cursor blink">|</span>';
          }
      }

      // Show the cursor initially, then start typing after the delay
      target.innerHTML = '<span class="cursor static">|</span>';
      setTimeout(typeWriter, typingDelay);
  });
});
