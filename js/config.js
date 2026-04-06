async function loadConfig() {
  try {
    const res = await fetch('data/config.json');
    const { whatsapp, address, hours } = await res.json();

    // Atualiza todos os links de WhatsApp da página
    document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
      el.href = `https://wa.me/${whatsapp.number}`;
    });

    // Atualiza o texto de exibição do telefone na seção de contato
    const phoneDisplay = document.getElementById('contact-phone');
    if (phoneDisplay) phoneDisplay.textContent = whatsapp.display;

    // Atualiza o endereço na seção de contato
    const addressDisplay = document.getElementById('contact-address');
    if (addressDisplay) addressDisplay.textContent = address.display;

    // Atualiza os horários na seção de contato
    const hoursContainer = document.getElementById('contact-hours');
    if (hoursContainer) {
      hoursContainer.innerHTML = hours
        .map(h => `
          <span class="hours-row">
            <span class="hours-day">${h.days}</span>
            <span class="hours-periods">${h.periods.join('<br>')}</span>
          </span>`)
        .join('');
    }
  } catch (err) {
    console.error('Erro ao carregar config.json:', err);
  }
}

loadConfig();
