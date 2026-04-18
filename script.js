const botaoGithub = document.getElementById('btn-github');
const botaoLinkedin = document.getElementById('btn-linkedin');
const cardGame = document.getElementById('card-game')
const btnParte = document.getElementById('game-btn-content');
const detalhesParte = document.getElementById('game-details');


botaoGithub.addEventListener('click', function() {
  window.open('https://github.com/viivgab', '_blank');
});

botaoLinkedin.addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/vitória-gabriela-meneses-da-silva-57492b263/', '_blank');
});

cardGame.addEventListener('click', function() {
  const aberto = cardGame.classList.toggle('open');
    
    if (aberto) {
        // Esconde o botão e mostra o conteúdo NA FORÇA
        btnExpandir.style.display = 'none';
        expandirJogo.classList.remove('hidden');
        expandirJogo.style.display = 'block';
    } else {
        // Volta ao normal ao fechar
        btnExpandir.style.display = 'flex';
        expandirJogo.classList.add('hidden');
        expandirJogo.style.display = 'none';
    }
});
