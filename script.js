// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect
const typingText = "Design Verification Engineer | Innovator | Web Developer";
let index = 0;
function typeEffect() {
    if (index < typingText.length) {
        document.querySelector('.hero-content p').textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
setTimeout(() => {
    document.querySelector('.hero-content p').textContent = "";
    typeEffect();
}, 500);

// Dark/Light Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Mode';
toggleButton.classList.add('btn');
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Adding Light Mode Styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .light-mode {
            background-color: #ffffff;
            color: #121212;
        }
        .light-mode .project-card {
            background: #f4f4f4;
            color: black;
        }
        .light-mode .btn {
            background: #121212;
            color: white;
        }
    </style>
`);

// Scroll Animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.6s ease-in-out';
});

document.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.style.opacity = '1';
        }
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', (e) => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});
