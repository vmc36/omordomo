const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "O Mordomo Barbearia",
  "description": "Barbearia premium em Jaboatão dos Guararapes com cortes masculinos, barba completa e combo com navalha.",
  "url": "https://omordomobarbearia.com.br",
  "telephone": "+5500000000000",
  "image": "https://omordomobarbearia.com.br/images/barbeiro-corte-maquina.jpeg",
  "priceRange": "R$35–R$70",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Cash, Credit Card, PIX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "Jaboatão dos Guararapes",
    "addressRegion": "PE",
    "postalCode": "54000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.186174,
    "longitude": -34.926457
  },
  "hasMap": "https://www.google.com/maps/place/O+Mordomo+Barbearia/@-8.1859348,-34.9265064,17z",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/omordomobarbearia",
    "https://booksy.com/pt-br/253711_o-mordomo-barbearia_barbearias_634596_jaboatao-dos-guararapes"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "reviewCount": "3"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Barbearia",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corte Masculino",
          "description": "Corte clássico ou moderno, feito com precisão e atenção aos detalhes do seu estilo."
        },
        "price": "45.00",
        "priceCurrency": "BRL"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Barba Completa",
          "description": "Modelagem e hidratação com toalha quente para um acabamento impecável e relaxante."
        },
        "price": "35.00",
        "priceCurrency": "BRL"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "O Combo — Corte + Barba",
          "description": "Corte e barba completa. A experiência completa do verdadeiro cavalheiro moderno."
        },
        "price": "70.00",
        "priceCurrency": "BRL"
      }
    ]
  }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schema);
document.head.appendChild(script);
