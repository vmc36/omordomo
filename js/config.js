async function loadConfig() {
  try {
    const res = await fetch('data/config.json');
    const { whatsapp, address, hours } = await res.json();

    // Atualiza todos os links de WhatsApp da página
    document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
      el.href = `https://wa.me/${whatsapp.number}`;
    });

    // Atualiza o link e o número de exibição do WhatsApp
    const phoneLink = document.getElementById('contact-phone');
    if (phoneLink) {
      phoneLink.href = `https://wa.me/${whatsapp.number}`;
      const valueEl = phoneLink.querySelector('.contact-link-value');
      if (valueEl) valueEl.textContent = whatsapp.display;
    }

    // Atualiza o endereço na seção de contato
    const addressDisplay = document.getElementById('contact-address');
    if (addressDisplay) addressDisplay.textContent = address.display;

    // Atualiza os horários na seção de contato
    const hoursContainer = document.getElementById('contact-hours');
    if (hoursContainer) {
      const dayMap = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
      const todayIndex = dayMap[new Date().getDay()];
      const header = `<div class="hours-header">
            <span class="hours-header-icon" aria-hidden="true">🕐</span>
            <span class="hours-header-label">Horários</span>
          </div>`;
      hoursContainer.innerHTML = header + hours
        .map((h, i) => {
          const isToday = i === todayIndex;
          const isClosed = h.periods.length === 1 && h.periods[0].toLowerCase() === 'fechado';
          const slots = h.periods
            .map(p => `<span class="hours-slot${isClosed ? ' hours-slot--closed' : ''}">${p}</span>`)
            .join('');
          return `<div class="hours-row${isToday ? ' hours-row--today' : ''}">
            <span class="hours-day">${h.days}</span>
            <div class="hours-slots">${slots}</div>
          </div>`;
        })
        .join('');
    }
  } catch (err) {
    console.error('Erro ao carregar config.json:', err);
  }
}

loadConfig();
