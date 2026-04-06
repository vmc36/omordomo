async function loadServices() {
  const grid = document.querySelector('.services-grid');
  if (!grid) return;

  try {
    const res = await fetch('data/services.json');
    const { booksy_url, services } = await res.json();

    grid.innerHTML = services.map(({ icon, name, description, price, image }) => `
      <li class="service-card">
        ${image ? `<div class="service-img" style="background-image:url('${image}')" aria-hidden="true"><div class="service-img-overlay"></div></div>` : ''}
        <span class="service-icon" aria-hidden="true">${icon}</span>
        <h3 class="service-name">${name}</h3>
        <p class="service-desc">${description}</p>
        <data class="service-price" value="${price}">R$ ${price}</data>
        <a href="${booksy_url}" target="_blank" rel="noopener noreferrer"
           class="service-arrow" aria-label="Agendar ${name} no Booksy">→</a>
      </li>
    `).join('');
  } catch (err) {
    console.error('Erro ao carregar serviços:', err);
  }
}

loadServices();
