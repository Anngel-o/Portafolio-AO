// news.js
document.addEventListener("DOMContentLoaded", function () {
  fetchNews();
});

async function fetchNews() {
  const container = document.getElementById("news-container");

  try {
    const response = await fetch("./data/news.json");
    if (!response.ok) throw new Error("Error al cargar noticias");

    const data = await response.json();
    renderNews(data.news);
  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = `
        <div class="error-message">
          <p>No se pudieron cargar las noticias. Por favor intenta más tarde.</p>
        </div>
      `;
  }
}

function renderNews(newsItems) {
  const container = document.getElementById("news-container");

  if (!newsItems || newsItems.length === 0) {
    container.innerHTML = "<p>No hay noticias disponibles actualmente.</p>";
    return;
  }

  container.innerHTML = newsItems
    .map(
      (news) => `
      <article class="news-card" data-aos="fade-up">
        <div class="news-image-container">
          <img src="${news.image}" alt="${news.title}" class="news-image" loading="lazy">
        </div>
        <div class="news-content">
          <span class="news-date">${news.date}</span>
          <h3 class="news-title">${news.title}</h3>
          <p class="news-excerpt">${news.excerpt}</p>
          <a href="${news.link}" target="_blank" rel="noopener noreferrer" class="news-link">
            Leer más <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </article>
    `
    )
    .join("");
}
