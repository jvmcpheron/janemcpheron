// Select elements
const themeButton = document.getElementById('theme-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

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
});

document.addEventListener("DOMContentLoaded", () => {
    let i = 0;
    const txt = "Hi :)";
    const speed = 200; // Typing speed per character
    const typingDelay = 1000; // Delay before typing starts (in milliseconds)
    const target = document.getElementById("typewriter");
  
    function typeWriter() {
      if (i < txt.length) {
        target.innerHTML = txt.substring(0, i + 1) + '<span class="cursor static">|</span>';
        i++;
        setTimeout(typeWriter, speed);
      } else {
        // Keep cursor blinking after typing finishes
        target.innerHTML = txt + '<span class="cursor blink">|</span>';
      }
    }
  
    // Show the cursor initially, then start typing after the delay
    target.innerHTML = '<span class="cursor static">|</span>';
    setTimeout(typeWriter, typingDelay);
  });
  
  
  
