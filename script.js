    // Função para mover a rolagem horizontalmente
    const gladiatorsContainer = document.querySelector('.gladiators-container');
    let gladiatorScrollAmount = 0;

    function autoScrollGladiators() {
        // Verifica se o scroll atingiu o final
        if (gladiatorScrollAmount >= (gladiatorsContainer.scrollWidth - gladiatorsContainer.clientWidth)) {
            gladiatorScrollAmount = -2; // Reseta o scroll quando atingir o final
        } else {
            gladiatorScrollAmount += 1; // Avança lentamente no scroll
        }
        gladiatorsContainer.scrollLeft = gladiatorScrollAmount;
    }

    // Inicia o scroll automático a cada 20ms
    setInterval(autoScrollGladiators, 20);

        const video = document.getElementById('introVideo');
        const soundToggle = document.getElementById('soundToggle');
        const icon = soundToggle.querySelector('.icon');

        soundToggle.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                icon.textContent = '🔇'; // Ícone para "Mute"
                soundToggle.classList.add('active');
            } else {
                video.muted = true;
                icon.textContent = '🔈'; // Ícone para "Unmute"
                soundToggle.classList.remove('active');
            }
        });

