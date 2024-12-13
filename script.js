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
