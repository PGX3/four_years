// Controle do vídeo
const video = document.getElementById('video');
const overlay = document.getElementById('overlay');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.play();
});

video.addEventListener('ended', () => {
  overlay.style.display = 'flex'; // botão reaparece para replay
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('active');
  });
});
