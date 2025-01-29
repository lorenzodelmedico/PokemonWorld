document.addEventListener('DOMContentLoaded', () => {
    // Handle popup
    const popup = document.getElementById('pikachu-popup');
    const closeBtn = document.querySelector('.close-btn');
    const audio = document.getElementById('theme-music');

    // Close popup and start music
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        audio.play().catch(error => {
            // Handle autoplay restrictions
            console.log('Audio playback failed:', error);
        });
    });

    // Pokeball interaction
    document.getElementById('pokeball').addEventListener('click', () => {
        const pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
        const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
        
        const display = document.getElementById('pokemon-display');
        display.innerHTML = `
            <div class="pokemon-card">
                <h2>${randomPokemon} appeared!</h2>
                <div class="sprite"></div>
            </div>
        `;
    });

    // Add hover effects
    document.querySelectorAll('.interactive-section div').forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.1)';
        });
        
        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
        });
    });
    // Add particle effect on pokeball click
    import('https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js').then(() => {
    document.getElementById('pokeball').addEventListener('click', (e) => {
      party.confetti(e.clientX, e.clientY);
    });
  });
  
  // Add hover tooltips
    tippy('[data-tippy-content]', {
    theme: 'pokemon',
    animation: 'scale'
  });
});