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

        const overlay = document.getElementById('videoOverlay');

        // Função para alternar entre mostrar e esconder
        function toggleOverlay() {
            overlay.classList.toggle('show');
            overlay.classList.toggle('hide');
        }
    
        // Exibe inicialmente e alterna a cada 3 segundos
        overlay.classList.add('show');
        setInterval(toggleOverlay, 6000); // 3s para fadeOut e 3s para fadeIn
    
        // Seleciona todos os botões de reserva
    const ticketButtons = document.querySelectorAll('.buy-button');
    
    // Seleciona o modal e os elementos dentro dele
    const reserveModal = document.getElementById('ticketModal');
    const modalContentText = document.getElementById('modal-text');
    const selectedTicketName = document.getElementById('ticket-name');
    const submitReceiptButton = document.getElementById('submitReceipt');
    
    // Função para abrir o modal
    ticketButtons.forEach(button => {
        button.addEventListener('click', function() {
            const showName = this.getAttribute('data-show');
            selectedTicketName.textContent = showName;
    
            // Mensagens diferentes para cada tipo de show
            if (showName === 'Área VIP') {
                modalContentText.textContent = 'Você fez uma excelente escolha! A Área VIP oferece uma experiência exclusiva com muito conforto e proximidade ao CR7 Angolano!';
            } else if (showName === 'Área Normal') {
                modalContentText.textContent = 'A Área Normal também oferece uma ótima visão e muita diversão. Prepare-se para uma grande batalha!';
            } else if (showName === 'Magic Show') {
                modalContentText.textContent = 'Prepare-se para uma experiência mágica e cheia de surpresas no Magic Show!';
            }
    
            // Exibe o modal
            reserveModal.style.display = "flex";
        });
    });
    
    // Função para fechar o modal
    const closeReserveModal = document.querySelector('.close');
    closeReserveModal.addEventListener('click', function() {
        reserveModal.style.display = "none";
    });
    
    // Fechar o modal quando clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === reserveModal) {
            reserveModal.style.display = "none";
        }
    });
    
    // Função para redirecionar ao WhatsApp
    submitReceiptButton.addEventListener('click', function() {
        const phoneNumber = "923700928"; // Número de telefone do WhatsApp
        const message = encodeURIComponent(`Olá, esse é o meu comprovante para a Batalha dos Gigantes "${selectedTicketName.textContent}".`); // Mensagem personalizada
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.location.href = whatsappURL; // Redireciona para o WhatsApp
    });
