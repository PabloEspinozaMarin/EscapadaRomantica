// ========== DATOS DE DESTINOS ==========
// ⚠️ CAMBIA LAS RUTAS DE IMÁGENES POR LAS TUYAS
const destinations = {
  playa: [
    {
      id: 1,
      name: "Casa Frente al Mar",
      nombre: "Casa Aura",
      location: "Tamarindo, Guanacaste",
      time: "1h 40min (aprox) desde Nandayure",
      images: [
        "images/playa1-1.jpg",
        "images/playa1-2.jpg",
        "images/playa1-3.jpg"
      ],
      description: "Hermosa casa con vista directa al mar. Dan desayuno."
    },
    {
      id: 2,
      name: "Villa",
      nombre: "Las Guapas 2: Villa con piscina privada",
      location: "Tamarindo, Guanacaste",
      time: "1h 40min (aprox) desde Nandayure",
      images: [
        "images/playa2-1.jpg",
        "images/playa2-2.jpg",
        "images/playa2-3.jpg"
      ],
      description: "Los huéspedes tienen acceso completo a todas las áreas comunes de la propiedad, incluida la piscina de agua salada, las hamacas, los jardines y la chimenea. Cada habitación es privada, diseñada para la comodidad y la relajación, con espacios compartidos cuidadosamente mantenidos para su disfrute. Queremos que sientas que Kahwi es tu hogar lejos de casa."
    },
    {
      id: 3,
      name: "Casita Frente al Mar",
      nombre: "Plumita Pacifica Costa Rica Paradise",
      location: "Playa Junquillal, Guanacaste",
      time: "1h 40min (aprox) desde Nandayure",
      images: [
        "images/playa3-1.jpg",
        "images/playa3-2.jpg",
        "images/playa3-3.jpg"
      ],
      description: "Este apartamento con aire acondicionado consta de 1 dormitorio, una sala de estar, una cocina totalmente equipada con nevera y cafetera, y 1 baño con ducha y artículos de aseo gratuitos. Hay toallas y ropa de cama en el apartamento.."
    },
    {
      id: 4,
      name: "Villa",
      location: "Montezuma, Puntarenas",
       nombre: "Andeluna Luxury Villa",
      time: "2h 10min (aprox) desde Nandayure",
      images: [
        "images/playa4-1.jpg",
        "images/playa4-2.jpg",
        "images/playa4-3.jpg"
      ],
      description: "Escápate a nuestra villa de lujo, a pocos minutos de la famosa playa de Montezuma en Costa Rica. Rodeado de naturaleza vibrante y biodiversidad, este exquisito refugio cuenta con impresionantes vistas al mar."
    },
     {
      id: 5,
      name: "Domo",
      location: "Santa Teresa, Puntarenas",
       time: "2h 20min (aprox) desde Nandayure",
      images: [
        "images/playa5-1.jpg",
        "images/playa5-2.jpg",
        "images/playa5-3.jpg"
      ],
      description: "A pocos pasos de la playa, en el corazón de Santa Teresa, este espacio es perfecto para tus vacaciones o estancias más largas.   Hay una cocina totalmente equipada con todo lo necesario para cocinar.  Baño completo con agua caliente."
    }
  ],
  montaña: [
    {
      id: 6,
      name: "Alojamiento entero",
       nombre: "Alojamiento entero: casa de huéspedes en El Jardín, Costa Rica",
      location: "Dota, Cartago",
       time: "1h 40min (aprox) desde San José",
      images: [
        "images/montana1-1.jpg",
        "images/montana1-2.jpg",
        "images/montana1-3.jpg"
      ],
      description: "Cabaña rústica en medio del Valle del Cocora. Perfecta para caminatas y café."
    },
    {
      id: 7,
      name: "Cabaña",
      location: "Vara de Roble, Cartago",
      time: "1h 40min (aprox) desde San José",
      images: [
        "images/montana2-1.jpg",
        "images/montana2-2.jpg",
        "images/montana2-3.jpg"
      ],
      description: "Lodge con chimenea y vistas espectaculares a las montañas coloniales."
    },
    {
      id: 8,
      name: "Cabaña",
      location: "Poás, Alajuela",
     time: "1h (aprox) desde San José",
      images: [
        "images/montana3-1.jpg",
        "images/montana3-2.jpg",
        "images/montana3-3.jpg"
      ],
      description: "Cabaña a 10 minutos de la entrada del Volcán Poás. Disfruta de una escapada tranquila en nuestra cabaña en Poás, Alajuela, ideal para parejas. Cuenta con una cama matrimonial, sofá cama, balcón privado y agua caliente."
    },
    {
      id: 9,
      name: "Alojamiento entero",
      location: "San Isidro de Grecia, Costa Rica",
      time: "1h 20min (aprox) desde San José",
     
      images: [
        "images/montana4-1.jpg",
        "images/montana4-2.jpg",
        "images/montana4-3.jpg"
      ],
      description: "Es el lugar perfecto para disfrutar del silencio y la tranquilidad. Cuenta con una cama queen, un sillón seccional para una persona adicional, y un parqueo techado para dos carros."
    },
     {
      id: 10,
      name: "Domo",
      location: "Poás, Alajuela",
      time: "1h (aprox) desde San José",
     
      images: [
        "images/montana5-1.jpg",
        "images/montana5-2.jpg",
        "images/montana5-3.jpg"
      ],
      description: "Hermoso Glamping de montaña, ubicado en las faldas del Volcán Poás, rodeado de la más bella naturaleza.Nuestro Domo se encuentra en un lugar tranquilo y acogedor, ideal para relajarse."
    },{
      id: 11,
      name: "Domo",
      location: "La Fortuna, Alajuela, Costa Rica",
      time: "3h (aprox) desde San José o Nandayure",
     
      images: [
        "images/montana6-1.jpg",
        "images/montana6-2.jpg",
        "images/montana6-3.jpg"
      ],
      description: "Es el lugar perfecto para disfrutar del silencio y la tranquilidad. Cuenta con una cama queen, un sillón seccional para una persona adicional, y un parqueo techado para dos carros."
    },
    ,{
      id: 12,
      name: "Domo",
      location: "Nuevo Arenal, Tilarán, Costa Rica",
      time: "3h (aprox) desde San José o Nandayure",
     
      images: [
        "images/montana7-1.jpg",
        "images/montana7-2.jpg",
        "images/montana7-3.jpg"
      ],
      description: "Una escapada perfecta para parejas en el corazón de Nuevo Arenal. Disfruta de la comodidad de un glamping con baño privado. Relájate con vistas al Lago Arenal y explora la zona, a solo 600m del Parque del Lago y cerca de restaurantes, a solo 20 metros de distancia."
    },
    ,{
      id: 13,
      name: "Domo",
      location: "Nuevo Arenal, Tilarán, Costa Rica",
     time: "3h (aprox) desde San José o Nandayure",
     
      images: [
        "images/montana8-1.jpg",
        "images/montana8-2.jpg",
        "images/montana8-3.jpg"
      ],
      description: "Conectate con la naturaleza en medio de la montaña en un glamping único en la zona. Rodeado del Bosque Tropical Húmedo, podrás observar vegetación y fauna local, aves y animales de diversas especies, acceso a sendero que limita con Parque Nacional Volcán Tenorio además de amplias amplias zonas verdes."
    }
    ,{
      id: 14,
      name: "Cabaña",
      location: "Río Celeste, Costa Rica",
     time: "2h 20min (aprox) desde Nandayure",
     
      images: [
        "images/montana9-1.jpg",
        "images/montana9-2.jpg",
        "images/montana9-3.jpg"
      ],
      description: "Muy convenientemente construida con temática de cabaña, cómoda y natural, esta encantadora cabaña ofrece un refugio acogedor y tranquilo, perfecto para aquellos que buscan escapar del bullicio de la vida cotidiana y conectarse con el entorno natural, además ubicada a tan solo 1 kilómetro de la entrada al  Parque Nacional Tenorio y su principal atractivo Rio Celeste y su majestuosa catarata, esta encantadora cabaña ofrece un refugio acogedor y tranquilo."
    }
  ]
};

// ========== VARIABLES GLOBALES ==========
let currentCategory = null;
let currentCardIndex = 0;
let currentImageIndex = 0;
let selectedPlace = null;

// ========== FUNCIONES DE NAVEGACIÓN ==========

// Mostrar una sección específica
function showSection(sectionId) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Mostrar la sección solicitada
  document.getElementById(sectionId).classList.add('active');
}

// Seleccionar categoría (playa o montaña)
function selectCategory(category) {
  currentCategory = category;
  currentCardIndex = 0;
  
  // Cambiar título
  const title = document.getElementById('results-title');
  title.textContent = category === 'playa' ? '🏖️ Destinos de Playa' : '🏔️ Destinos de Montaña';
  
  // Renderizar cards
  renderCarousel();
  renderDots();
  updateCarousel();
  
  // Mostrar sección de resultados
  showSection('results-section');
}

// ========== CARRUSEL ==========

// Renderizar las cards del carrusel
function renderCarousel() {
  const carousel = document.getElementById('carousel');
  const places = destinations[currentCategory];
  
  carousel.innerHTML = places.map(place => `
    <div class="carousel-card">
      <div class="carousel-card-inner">
        <div class="carousel-image">
          <img src="${place.images[0]}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/400x300/fce7f3/ec4899?text=Imagen'">
         
        </div>
        <div class="carousel-info">
          <h3>${place.name}</h3>
          <p><span class="info-icon">📍</span> ${place.location}</p>
          <p><span class="info-icon">🕐</span> ${place.time}</p>
          <div class="carousel-footer">
          
            <button class="btn-view" onclick="openModal(${place.id})">Mmmm, me interesa</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Renderizar los puntos indicadores
function renderDots() {
  const dotsContainer = document.getElementById('dots-container');
  const places = destinations[currentCategory];
  
  dotsContainer.innerHTML = places.map((_, index) => `
    <button class="dot ${index === 0 ? 'active' : ''}" onclick="goToCard(${index})"></button>
  `).join('');
}

// Actualizar posición del carrusel
function updateCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(-${currentCardIndex * 100}%)`;
  
  // Actualizar dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentCardIndex);
  });
  
  // Actualizar estado de botones
  const places = destinations[currentCategory];
  document.querySelector('.prev-btn').disabled = currentCardIndex === 0;
  document.querySelector('.next-btn').disabled = currentCardIndex === places.length - 1;
}

// Ir a card anterior
function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCarousel();
  }
}

// Ir a card siguiente
function nextCard() {
  const places = destinations[currentCategory];
  if (currentCardIndex < places.length - 1) {
    currentCardIndex++;
    updateCarousel();
  }
}

// Ir a una card específica
function goToCard(index) {
  currentCardIndex = index;
  updateCarousel();
}

// ========== MODAL ==========

// Abrir modal con detalles del lugar
function openModal(placeId) {
  const places = destinations[currentCategory];
  selectedPlace = places.find(p => p.id === placeId);
  currentImageIndex = 0;
  
  if (!selectedPlace) return;
  
  // Llenar datos del modal
  document.getElementById('modal-image').src = selectedPlace.images[0];
  document.getElementById('modal-title').textContent = selectedPlace.name;
 
  document.getElementById('modal-description').textContent = selectedPlace.description;
  document.getElementById('modal-location').textContent = selectedPlace.location;
  document.getElementById('modal-time').textContent = selectedPlace.time;
 
  
  // Renderizar dots de galería
  renderGalleryDots();
  
  // Mostrar modal
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
  selectedPlace = null;
}

// Renderizar dots de galería
function renderGalleryDots() {
  const dotsContainer = document.getElementById('gallery-dots');
  
  dotsContainer.innerHTML = [0, 1, 2].map(index => `
    <button class="gallery-dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></button>
  `).join('');
}

// Actualizar imagen del modal
function updateModalImage() {
  if (!selectedPlace) return;
  
  document.getElementById('modal-image').src = selectedPlace.images[currentImageIndex];
  
  // Actualizar dots
  document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentImageIndex);
  });
}

// Imagen anterior
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + 3) % 3;
  updateModalImage();
}

// Imagen siguiente
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % 3;
  updateModalImage();
}

// Ir a imagen específica
function goToImage(index) {
  currentImageIndex = index;
  updateModalImage();
}

// ========== EVENTOS ==========

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Soporte para swipe en móviles
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe izquierda - siguiente
      if (document.getElementById('modal').classList.contains('active')) {
        nextImage();
      } else if (document.getElementById('results-section').classList.contains('active')) {
        nextCard();
      }
    } else {
      // Swipe derecha - anterior
      if (document.getElementById('modal').classList.contains('active')) {
        prevImage();
      } else if (document.getElementById('results-section').classList.contains('active')) {
        prevCard();
      }
    }
  }
}