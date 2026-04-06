async function loadReviews() {
  const grid = document.querySelector('.reviews-grid');
  if (!grid) return;

  try {
    const res = await fetch('data/reviews.json');
    const { reviews } = await res.json();

    grid.innerHTML = reviews.map(({ name, avatar, rating, text }) => `
      <li class="review-card">
        <article itemscope itemtype="https://schema.org/Review">
          <img class="review-avatar" src="${avatar}" alt="Foto de ${name}"
               width="60" height="60" loading="lazy" />
          <span class="review-name" itemprop="author">${name}</span>
          <div class="review-stars" aria-label="Avaliação: ${rating} de 5 estrelas">
            ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
          </div>
          <blockquote class="review-text" itemprop="reviewBody">"${text}"</blockquote>
        </article>
      </li>
    `).join('');
  } catch (err) {
    console.error('Erro ao carregar avaliações:', err);
  }
}

loadReviews();
