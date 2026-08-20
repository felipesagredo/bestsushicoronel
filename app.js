/**
 * BESTSUSHI CORONEL - APP LOGIC & INTERACTION
 * Vanilla JavaScript implementation loading menu.json as DB
 */

document.addEventListener('DOMContentLoaded', () => {
  // Embedded DB Fallback for Instant 100% Reliable Render
  const DEFAULT_MENU_DATA = {
    "info": {
      "name": "BestSushi Coronel",
      "slogan": "El mejor Sushi, Handrolls Crispy y Empanadas de Coronel",
      "phone": "56937373076",
      "whatsapp_display": "+56 9 3737 3076",
      "instagram_url": "https://instagram.com/bestsushicoronel",
      "instagram_handle": "@bestsushicoronel",
      "horario": "Lunes a Sábado: 12:00 a 22:00 hrs",
      "ubicacion": "Coronel, Región del Bío Bío",
      "modalidad": "Exclusivo Retiro en Local"
    },
    "categories": [
      { "id": "todas", "name": "Todas las Promos" },
      { "id": "sushi", "name": "Promos Sushi" },
      { "id": "handrolls", "name": "Handrolls Crispy" },
      { "id": "empanadas", "name": "Empanadas" },
      { "id": "combos", "name": "Combos Mixtos" },
      { "id": "salsas", "name": "Salsas y Extras" }
    ],
    "items": [
      {
        "id": "sushi-30-piezas",
        "category": "sushi",
        "title": "Promo 30 Piezas de Sushi",
        "price": 12990,
        "price_display": "$12.990",
        "badge": "30 PIEZAS",
        "popular": true,
        "description": "Arma tus 3 rolls (30 piezas en total) personalizando cada roll individualmente.",
        "image": "assets/promo_sushi_ig.png",
        "customizable": true,
        "units_count": 3,
        "unit_label": "Roll",
        "per_unit_options": {
          "envoltura": { "title": "Envoltura", "limit": 1, "choices": ["Palta", "Tempura Crispy", "Sésamo"] },
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Camarón"] },
          "agregados": { "title": "Verduras / Agregados (Queso crema incluido)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] }
        },
        "general_options": {
          "salsas": { "title": "Salsa Incluida", "limit": 1, "choices": ["Salsa Soya", "Salsa Teriyaki"] }
        }
      },
      {
        "id": "sushi-40-piezas",
        "category": "sushi",
        "title": "Promo 40 Piezas de Sushi",
        "price": 16990,
        "price_display": "$16.990",
        "badge": "40 PIEZAS",
        "popular": true,
        "description": "¡Mega promo familiar! Arma tus 4 rolls (40 piezas) personalizando cada roll como quieras.",
        "image": "assets/promo_sushi_ig.png",
        "customizable": true,
        "units_count": 4,
        "unit_label": "Roll",
        "per_unit_options": {
          "envoltura": { "title": "Envoltura", "limit": 1, "choices": ["Palta", "Tempura Crispy", "Sésamo"] },
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Camarón"] },
          "agregados": { "title": "Verduras / Agregados (Queso crema incluido ✨)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] }
        },
        "general_options": {
          "salsas": { "title": "Salsas Incluidas", "limit": 2, "choices": ["Salsa Soya", "Salsa Teriyaki"] }
        }
      },
      {
        "id": "sushi-30-piezas-clasica",
        "category": "sushi",
        "title": "Promo 30 Piezas Clásicas (Lista para Servir)",
        "price": 12990,
        "price_display": "$12.990",
        "badge": "LISTA PARA SERVIR",
        "popular": false,
        "description": "Sin personalizar, lista para servir. Incluye: 10 Piezas Envueltas en Palta, 10 Tempura Hot Roll y 10 Envueltas en Sésamo (Salsas Soya y Teriyaki incluidas).",
        "image": "assets/promo_sushi_ig.png",
        "customizable": false
      },
      {
        "id": "sushi-40-piezas-clasica",
        "category": "sushi",
        "title": "Promo 40 Piezas Clásicas (Lista para Servir)",
        "price": 16990,
        "price_display": "$16.990",
        "badge": "LISTA PARA SERVIR",
        "popular": false,
        "description": "Sin personalizar, lista para servir. Incluye: 10 Envueltas en Palta, 10 Tempura Hot Roll, 10 Envueltas en Sésamo y 10 Tempura de Pollo (Salsas Soya y Teriyaki incluidas).",
        "image": "assets/promo_sushi_ig.png",
        "customizable": false
      },
      {
        "id": "sushi-roll-cebollin-crispy",
        "category": "sushi",
        "title": "Roll Cebollín Crispy Pollo Palta",
        "price": 8490,
        "price_display": "$8.490",
        "badge": "10 PIEZAS PREMIUM",
        "popular": true,
        "description": "Exclusivo roll de 10 piezas relleno de Pollo crispy y Palta, envuelto en cebollín crocante y bañado con nuestra exquisita salsa de ají ahumado casera.",
        "image": "assets/Cebollin_kryspi_pollo_palta_con_salsa_aji_ahumado.jpeg",
        "customizable": false
      },
      {
        "id": "handroll-1x",
        "category": "handrolls",
        "title": "1x Handroll Crispy",
        "price": 5500,
        "price_display": "$5.500",
        "badge": "1 HANDROLL",
        "popular": false,
        "description": "Crocante y calentito. Arma tu Handroll Crispy con proteína, verduras y salsa.",
        "image": "assets/promo_handrolls_ig.png",
        "customizable": true,
        "units_count": 1,
        "unit_label": "Handroll",
        "per_unit_options": {
          "proteina": { "title": "Proteína a Elección", "limit": 1, "choices": ["Pollo", "Camarón"] },
          "verduras": { "title": "Verduras a Elección (hasta 2)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
          "salsa": { "title": "Salsa a Elección", "limit": 1, "choices": ["Salsa Soya", "Salsa Teriyaki"] }
        }
      },
      {
        "id": "handroll-2x",
        "category": "handrolls",
        "title": "2x Handrolls Crispy",
        "price": 9990,
        "price_display": "$9.990",
        "badge": "¡MÁS POPULAR!",
        "popular": true,
        "description": "Super Promo 2 Handrolls Crispy. Personaliza los sabores de cada Handroll de forma independiente.",
        "image": "assets/promo_handrolls_ig.png",
        "customizable": true,
        "units_count": 2,
        "unit_label": "Handroll",
        "per_unit_options": {
          "proteina": { "title": "Proteína a Elección", "limit": 1, "choices": ["Pollo", "Camarón"] },
          "verduras": { "title": "Verduras a Elección (hasta 2)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
          "salsa": { "title": "Salsa a Elección", "limit": 1, "choices": ["Salsa Soya", "Salsa Teriyaki"] }
        }
      },
      {
        "id": "handroll-3x",
        "category": "handrolls",
        "title": "3x Handrolls Crispy",
        "price": 13990,
        "price_display": "$13.990",
        "badge": "OFERTA 3X",
        "popular": false,
        "description": "3 Handrolls Crispy. Personaliza cada Handroll con su propia proteína, verduras y salsa.",
        "image": "assets/promo_handrolls_ig.png",
        "customizable": true,
        "units_count": 3,
        "unit_label": "Handroll",
        "per_unit_options": {
          "proteina": { "title": "Proteína a Elección", "limit": 1, "choices": ["Pollo", "Camarón"] },
          "verduras": { "title": "Verduras a Elección (hasta 2)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
          "salsa": { "title": "Salsa a Elección", "limit": 1, "choices": ["Salsa Soya", "Salsa Teriyaki"] }
        }
      },
      {
        "id": "empanada-1x",
        "category": "empanadas",
        "title": "1x Empanada Frita",
        "price": 3000,
        "price_display": "$3.000",
        "badge": "1 EMPANADA",
        "popular": false,
        "description": "Base de Queso Mantecoso derretido + 1 Proteína + 1 Vegetal + Salsa casera a elección.",
        "image": "assets/promo_empanada_1x.png",
        "customizable": true,
        "units_count": 1,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Cebollín", "Morrón", "Champiñón", "Choclo"] },
          "salsa": { "title": "Salsa Casera", "limit": 1, "choices": ["Pebre Casero", "Ají Casero", "Cilantro Casero"] }
        }
      },
      {
        "id": "empanada-2x",
        "category": "empanadas",
        "title": "2x Empanadas Fritas",
        "price": 5490,
        "price_display": "$5.490",
        "badge": "PROMO 2X",
        "popular": true,
        "description": "2 Empanadas. Elige el relleno de cada empanada de forma independiente.",
        "image": "assets/promo_empanada_2x.png",
        "customizable": true,
        "units_count": 2,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Cebollín", "Morrón", "Champiñón", "Choclo"] },
          "salsa": { "title": "Salsa Casera", "limit": 1, "choices": ["Pebre Casero", "Ají Casero", "Cilantro Casero"] }
        }
      },
      {
        "id": "empanada-3x",
        "category": "empanadas",
        "title": "3x Empanadas Fritas",
        "price": 7990,
        "price_display": "$7.990",
        "badge": "PROMO 3X",
        "popular": false,
        "description": "3 Empanadas fritas al instante. Arma cada empanada a tu gusto.",
        "image": "assets/promo_empanada_3x.png",
        "customizable": true,
        "units_count": 3,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Cebollín", "Morrón", "Champiñón", "Choclo"] },
          "salsa": { "title": "Salsa Casera", "limit": 1, "choices": ["Pebre Casero", "Ají Casero", "Cilantro Casero"] }
        }
      },
      {
        "id": "empanada-5x",
        "category": "empanadas",
        "title": "5x Empanadas Fritas",
        "price": 12990,
        "price_display": "$12.990",
        "badge": "PACK FAMILIAR 5X",
        "popular": true,
        "description": "¡Mega Pack 5 Empanadas! Personaliza las 5 empanadas una por una.",
        "image": "assets/promo_empanada_3x.png",
        "customizable": true,
        "units_count": 5,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Cebollín", "Morrón", "Champiñón", "Choclo"] },
          "salsa": { "title": "Salsa Casera", "limit": 1, "choices": ["Pebre Casero", "Ají Casero", "Cilantro Casero"] }
        }
      },
      {
        "id": "combo-mixto-especial",
        "category": "combos",
        "title": "Combo Mixto BestSushi",
        "price": 18990,
        "price_display": "$18.990",
        "badge": "COMBO REY",
        "popular": true,
        "description": "20 Piezas de Sushi variadas + 2 Handrolls Crispy + 1 Empanada Frita.",
        "image": "assets/promo_combos_ig.png",
        "customizable": true,
        "units_count": 2,
        "unit_label": "Handroll Crispy",
        "per_unit_options": {
          "proteina": { "title": "Proteína Handroll", "limit": 1, "choices": ["Pollo", "Camarón"] },
          "verduras": { "title": "Verduras Handroll", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] }
        },
        "general_options": {
          "empanada_relleno": { "title": "Empanada Incluida", "limit": 1, "choices": ["Pollo + Queso Mantecoso", "Camarón + Queso Mantecoso"] },
          "salsas": { "title": "Salsas Incluidas", "limit": 2, "choices": ["Salsa Soya", "Teriyaki", "Pebre Casero", "Ají Casero"] }
        }
      },
      {
        "id": "salsa-pebre",
        "category": "salsas",
        "title": "Pebre Casero BestSushi",
        "price": 1000,
        "price_display": "$1.000",
        "badge": "RECETA CASERA",
        "popular": true,
        "description": "Delicioso pebre chileno casero preparado con tomates frescos, cebollita y cilantro picado.",
        "image": "assets/promo_pebre_ig.png",
        "customizable": false
      },
      {
        "id": "salsa-teriyaki",
        "category": "salsas",
        "title": "Salsa Teriyaki Especial (Pote)",
        "price": 1000,
        "price_display": "$1.000",
        "badge": "DULCE & ESPESA",
        "popular": false,
        "description": "Salsa Teriyaki artesanal reducida de sabor dulce y espeso perfecto para rolls y handrolls.",
        "image": "assets/promo_salsas_ig.png",
        "customizable": false
      },
      {
        "id": "pack-salsas-trio",
        "category": "salsas",
        "title": "Trío de Salsas & Aderezos Caseros",
        "price": 2500,
        "price_display": "$2.500",
        "badge": "PACK 3X SALSAS",
        "popular": true,
        "description": "Elige 3 porciones de tus aderezos favoritos: Pebre Casero, Salsa Teriyaki, Ají o Cilantro.",
        "image": "assets/promo_salsas_ig.png",
        "customizable": true,
        "options": {
          "salsas_adicionales": { "title": "Elige 3 Salsas o Aderezos", "limit": 3, "choices": ["Pebre Casero", "Salsa Teriyaki", "Ají Casero", "Cilantro Casero", "Salsa Soya Extra"] }
        }
      }
    ]
  };

  // Embedded Initial Fallback Reviews
  const DEFAULT_REVIEWS = [
    {
      id: "rev-1",
      productId: "sushi-30-piezas",
      userName: "Camila S.",
      rating: 5,
      date: "2026-08-15",
      commentText: "Excelente promo, los rolls llegaron calientitos y crocantes. La salsa teriyaki 10/10."
    },
    {
      id: "rev-2",
      productId: "handroll-crispy-1x",
      userName: "Matías R.",
      rating: 5,
      date: "2026-08-16",
      commentText: "El mejor handroll de Coronel sin duda. Mucho relleno y súper crujiente."
    },
    {
      id: "rev-3",
      productId: "sushi-40-piezas",
      userName: "Francisca M.",
      rating: 5,
      date: "2026-08-18",
      commentText: "Ideal para compartir en familia. Todo fresco y muy bien presentado."
    },
    {
      id: "rev-4",
      productId: "empanadas-fritas-1x",
      userName: "Gonzalo P.",
      rating: 5,
      date: "2026-08-19",
      commentText: "Las empanadas de queso camarón son una delicia total, fritas en su punto."
    }
  ];

  // Global State initialized with embedded DB for 100% instant render
  let menuData = DEFAULT_MENU_DATA;
  let appReviews = [...DEFAULT_REVIEWS];
  let currentCategory = 'todas';
  let cart = [];
  localStorage.removeItem('bestsushi_cart');
  let activeCustomizingItem = null;
  let selectedOptions = {};

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const categoriesNav = document.getElementById('categories-nav');
  const cartBtnTrigger = document.getElementById('cart-btn-trigger');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartClose = document.getElementById('cart-close');
  const cartClearBtn = document.getElementById('cart-clear-btn');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalAmount = document.getElementById('cart-total-amount');
  const cartCountEl = document.getElementById('cart-count');
  const checkoutWhatsappBtn = document.getElementById('checkout-whatsapp-btn');
  const cartDeliveryMethod = document.getElementById('cart-delivery-method');
  const cartDeliveryTime = document.getElementById('cart-delivery-time');

  // On-Page Configurator Section Elements
  const configuratorSection = document.getElementById('configurador-section');
  const configuratorTitle = document.getElementById('configurator-title');
  const configuratorPrice = document.getElementById('configurator-price');
  const configuratorBody = document.getElementById('configurator-body');
  const configuratorSummaryText = document.getElementById('configurator-summary-text');
  const configuratorAddBtn = document.getElementById('configurator-add-btn');
  const btnCloseConfigurator = document.getElementById('btn-close-configurator');

  // Contact DOM Elements
  const contactPhoneEl = document.getElementById('contact-phone');
  const contactScheduleEl = document.getElementById('contact-schedule');
  const contactInstagramLink = document.getElementById('contact-instagram-link');
  const floatingWhatsapp = document.getElementById('floating-whatsapp');
  const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');

  // Calculate Real Global Store Rating
  function updateGlobalStoreRating() {
    const storeRatingEl = document.getElementById('store-global-rating');
    if (!storeRatingEl) return;

    if (!appReviews || appReviews.length === 0) {
      storeRatingEl.innerHTML = `<i class="fas fa-star"></i> 5.0 (Nuevo en Coronel)`;
      return;
    }

    const totalScore = appReviews.reduce((sum, r) => sum + (Number(r.rating) || 5), 0);
    const avg = (totalScore / appReviews.length).toFixed(1);
    const count = appReviews.length;
    const label = count === 1 ? 'reseña' : 'reseñas';

    storeRatingEl.innerHTML = `<i class="fas fa-star"></i> ${avg} (${count} ${label})`;
  }

  // Immediate Initial Render (uses embedded data, no network needed)
  initRestaurantInfo();
  renderCategories();
  renderProducts();
  updateCartUI();
  updateGlobalStoreRating();

  // Load Data from JSON DB in background
  async function loadMenuData() {
    try {
      let response = await fetch('/api/menu');
      if (!response.ok) {
        // Fallback for static servers (like Live Server or http-server on port 8080)
        response = await fetch('data/menu.json');
      }
      if (response.ok) {
        menuData = await response.json();
      }
    } catch (error) {
      // Offline fallback
    }

    try {
      let response = await fetch('/api/reviews');
      if (!response.ok) {
        // Fallback for static servers
        response = await fetch('data/reviews.json');
      }
      if (response.ok) {
        const data = await response.json();
        if (data.reviews && data.reviews.length > 0) {
          appReviews = data.reviews;
        }
      }
    } catch (error) {
      // Offline fallback
    }

    initRestaurantInfo();
    renderCategories();
    renderProducts();
    updateGlobalStoreRating();
  }

  // Populate metadata from JSON DB
  function initRestaurantInfo() {
    if (!menuData || !menuData.info) return;
    const info = menuData.info;

    if (contactPhoneEl) contactPhoneEl.textContent = info.whatsapp_display;
    if (contactScheduleEl) contactScheduleEl.textContent = info.horario;
    
    const heroScheduleBadge = document.getElementById('hero-schedule-badge');
    if (heroScheduleBadge && info.horario) heroScheduleBadge.textContent = info.horario;

    if (contactInstagramLink) {
      contactInstagramLink.href = info.instagram_url;
      contactInstagramLink.textContent = info.instagram_handle;
    }

    // Direct WhatsApp Links
    const waUrl = `https://wa.me/${info.phone}?text=${encodeURIComponent('¡Hola BestSushi! Quisiera hacer una consulta / pedido.')}`;
    if (floatingWhatsapp) floatingWhatsapp.href = waUrl;
    if (heroWhatsappBtn) heroWhatsappBtn.href = waUrl;
  }

  // Render Category Tabs
  function renderCategories() {
    if (!menuData || !menuData.categories) return;
    categoriesNav.innerHTML = '';

    menuData.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-btn ${cat.id === currentCategory ? 'active' : ''}`;
      btn.textContent = cat.name;
      btn.addEventListener('click', () => {
        currentCategory = cat.id;
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts();
        
        const menuSection = document.getElementById('menu');
        if (menuSection && window.scrollY < 180) {
          menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      categoriesNav.appendChild(btn);
    });
  }

  // Get Average Stars and Count for Product
  function getProductRating(productId) {
    const productReviews = appReviews.filter(r => r.productId === productId);
    if (productReviews.length === 0) {
      return {
        average: '5.0',
        count: 0,
        starsHTML: `
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        `
      };
    }

    const total = productReviews.reduce((sum, r) => sum + r.rating, 0);
    const average = total / productReviews.length;
    const rounded = Math.round(average);

    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        starsHTML += '<i class="fas fa-star"></i>';
      } else {
        starsHTML += '<i class="far fa-star" style="color: #cbd5e0;"></i>';
      }
    }

    return {
      average: average.toFixed(1),
      count: productReviews.length,
      starsHTML: starsHTML
    };
  }

  // Render Products Grid based on selected category
  function renderProducts() {
    if (!menuData || !menuData.items) return;
    productsGrid.innerHTML = '';

    const filteredItems = currentCategory === 'todas'
      ? menuData.items
      : menuData.items.filter(item => item.category === currentCategory);

    filteredItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const rating = getProductRating(item.id);

      card.innerHTML = `
        <div class="product-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
          <span class="product-badge ${item.popular ? 'red' : ''}">${item.badge || ''}</span>
        </div>
        <div class="product-content">
          <h3 class="product-title">${item.title}</h3>
          
          <div class="product-rating-row">
            <div class="product-stars">
              ${rating.starsHTML}
              <span>(${rating.count})</span>
            </div>
            <button class="btn-reviews-link" data-id="${item.id}">Ver opiniones</button>
          </div>

          <p class="product-desc">${item.description}</p>
          <div class="product-footer">
            <span class="product-price">${item.price_display || '$' + item.price.toLocaleString('es-CL')}</span>
            <button class="btn-add-item" data-id="${item.id}">
              <i class="fas ${item.customizable ? 'fa-sliders-h' : 'fa-plus'}"></i>
              ${item.customizable ? 'Personalizar pedido' : 'Agregar'}
            </button>
          </div>
        </div>
      `;

      // Event Listeners
      const addBtn = card.querySelector('.btn-add-item');
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleAddProductClick(item);
      });

      const reviewsBtn = card.querySelector('.btn-reviews-link');
      if (reviewsBtn) {
        reviewsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openReviewsModal(item);
        });
      }

      const imgWrap = card.querySelector('.product-card-img-wrap');
      if (imgWrap) {
        imgWrap.addEventListener('click', () => handleAddProductClick(item));
      }

      productsGrid.appendChild(card);
    });
  }

  // Handle Adding / Customizing Product
  function handleAddProductClick(item) {
    if (item.customizable && (item.options || item.per_unit_options)) {
      openConfiguratorSection(item);
    } else {
      addToCart({
        id: item.id + '-' + Date.now(),
        productId: item.id,
        title: item.title,
        price: item.price,
        details: 'Opción estándar',
        quantity: 1
      });
      openCart();
    }
  }

  // Interactive On-Page Configurator Logic
  let selectedUnitOptions = {};
  let selectedGeneralOptions = {};
  let selectedUnitExclusions = {};
  let selectedItemExclusions = [];
  let selectedUnitTouches = {};
  let selectedItemTouches = [];
  let selectedExtras = [];

  const EXTRAS_GLOBALES = {
    "Proteínas": [
      { id: "extra-pollo", name: "Extra Pollo", price: 1000 },
      { id: "extra-camaron", name: "Extra Camarón", price: 1200 },
      { id: "extra-machas", name: "Extra Machas", price: 1200 }
    ],
    "Verduras": [
      { id: "extra-palta", name: "Extra Palta", price: 800 },
      { id: "extra-cebollin", name: "Extra Cebollín", price: 500 },
      { id: "extra-morron", name: "Extra Morrón", price: 500 },
      { id: "extra-champinon", name: "Extra Champiñón", price: 500 },
      { id: "extra-choclo", name: "Extra Choclo", price: 500 }
    ],
    "Salsas y Queso": [
      { id: "extra-queso-crema", name: "Extra Queso crema", price: 800 },
      { id: "extra-queso-mantecoso", name: "Extra Queso Mantecoso", price: 800 }
    ]
  };

  const CONFIGURACION_PERSONALIZACION = {
    sushi: {
      exclusions: ["Queso crema", "Sésamo", "Cebollín", "Palta"]
    },
    handrolls: {
      exclusions: ["Queso crema", "Cebollín", "Palta"]
    },
    empanadas: {
      exclusions: ["Queso mantecoso", "Cebollín", "Morrón", "Champiñón"],
      touches: ["Toque de cilantro", "Toque de pimienta", "Toque de orégano"]
    },
    combos: {
      exclusions: ["Queso crema", "Sésamo", "Cebollín", "Palta"]
    }
  };

  function openConfiguratorSection(item) {
    activeCustomizingItem = item;
    selectedOptions = {};
    selectedUnitOptions = {};
    selectedGeneralOptions = {};
    selectedUnitExclusions = {};
    selectedItemExclusions = [];
    selectedUnitTouches = {};
    selectedItemTouches = [];
    selectedExtras = [];

    let unitContainers = [];


    configuratorTitle.textContent = item.title;
    configuratorPrice.textContent = item.price_display;
    configuratorBody.innerHTML = '';

    // Check if item has per-unit customization (e.g. 2x Handrolls, 3x Empanadas, 30 piezas sushi)
    if (item.per_unit_options && item.units_count && item.units_count >= 1) {
      const unitsCount = item.units_count;
      const unitLabel = item.unit_label || 'Unidad';

      // Tab Selector Bar for Compact View
      const tabsBar = document.createElement('div');
      tabsBar.className = 'unit-tabs-bar';

      const unitContainers = [];

      for (let u = 1; u <= unitsCount; u++) {
        selectedUnitOptions[u] = {};

        // Tab Button
        const tabBtn = document.createElement('button');
        tabBtn.type = 'button';
        tabBtn.className = `unit-tab-btn ${u === 1 ? 'active' : ''}`;
        tabBtn.innerHTML = `<i class="fas fa-utensils"></i> ${unitLabel} #${u}`;

        tabsBar.appendChild(tabBtn);

        // Unit Container Box
        const unitBox = document.createElement('div');
        unitBox.className = 'unit-customizer-box';
        unitBox.style.display = u === 1 ? 'block' : 'none';

        unitContainers.push({ u, tabBtn, unitBox });

        tabBtn.addEventListener('click', () => {
          unitContainers.forEach(uc => {
            const isActive = uc.u === u;
            uc.unitBox.style.display = isActive ? 'block' : 'none';
            if (isActive) {
              uc.tabBtn.classList.add('active');
            } else {
              uc.tabBtn.classList.remove('active');
            }
          });
        });

        Object.keys(item.per_unit_options).forEach(optKey => {
          const optGroup = item.per_unit_options[optKey];
          selectedUnitOptions[u][optKey] = [];

          const groupDiv = document.createElement('div');
          groupDiv.className = 'option-group';

          let imgHTML = '';
          const keyLower = optKey.toLowerCase();
          if (keyLower.includes('envoltura') || keyLower.includes('cobertura') || keyLower.includes('wrap')) {
            imgHTML = `<img src="assets/wrap_reference.png" class="option-group-img" alt="${optGroup.title}">`;
          } else if (keyLower.includes('protein')) {
            imgHTML = `<img src="assets/protein_reference.png" class="option-group-img" alt="${optGroup.title}">`;
          } else if (keyLower.includes('agregado') || keyLower.includes('verdur') || keyLower.includes('vegetal') || keyLower.includes('fill')) {
            imgHTML = `<img src="assets/veggies_reference.png" class="option-group-img" alt="${optGroup.title}">`;
          }

          groupDiv.innerHTML = `
            <div class="option-group-title" style="font-size:0.85rem;">${optGroup.title} (Máx: ${optGroup.limit})</div>
            <div class="option-group-content">
              ${imgHTML}
              <div class="options-list" style="flex: 1; min-width: 200px;"></div>
            </div>
          `;

          const listDiv = groupDiv.querySelector('.options-list');

          optGroup.choices.forEach(choice => {
            const chip = document.createElement('div');
            chip.className = 'option-chip';
            chip.dataset.key = optKey;
            chip.dataset.option = choice;
            chip.innerHTML = `<i class="far fa-circle"></i> <span>${choice}</span>`;

            chip.addEventListener('click', () => {
              toggleUnitOptionSelection(u, optKey, choice, optGroup.limit, chip);
              updateLiveSummary();
            });

            listDiv.appendChild(chip);
          });

          unitBox.appendChild(groupDiv);
        });

        // Exclusion chips group for this unit
        selectedUnitExclusions[u] = [];

        const catConfig = CONFIGURACION_PERSONALIZACION[item.category];
        if (catConfig && catConfig.exclusions && catConfig.exclusions.length > 0) {
          const exclGroupDiv = document.createElement('div');
          exclGroupDiv.className = 'exclusion-group';
          exclGroupDiv.style.cssText = 'margin-top: 1rem; border-top: 1px dashed #e2e8f0; padding-top: 0.75rem;';
          exclGroupDiv.innerHTML = `
            <div class="option-group-title" style="font-size:0.85rem; color: var(--red-accent);"><i class="fas fa-ban"></i> ¿Quitar algún ingrediente base de este/a ${unitLabel}? (Opcional)</div>
            <div class="exclusion-chips-list" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0.5rem;"></div>
          `;
          const chipsList = exclGroupDiv.querySelector('.exclusion-chips-list');

          catConfig.exclusions.forEach(excl => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'exclusion-chip';
            chip.dataset.exclusion = excl;
            chip.innerHTML = `<i class="far fa-circle"></i> Sin ${excl}`;
            chip.addEventListener('click', () => {
              const index = selectedUnitExclusions[u].indexOf(excl);
              if (index > -1) {
                selectedUnitExclusions[u].splice(index, 1);
                chip.classList.remove('active');
                chip.innerHTML = `<i class="far fa-circle"></i> Sin ${excl}`;
              } else {
                selectedUnitExclusions[u].push(excl);
                chip.classList.add('active');
                chip.innerHTML = `<i class="fas fa-check-circle"></i> Sin ${excl}`;
              }
              updateLiveSummary();
            });
            chipsList.appendChild(chip);
          });

          unitBox.appendChild(exclGroupDiv);
        }

        // Touches chips group for this unit
        selectedUnitTouches[u] = [];
        if (catConfig && catConfig.touches && catConfig.touches.length > 0) {
          const touchesGroupDiv = document.createElement('div');
          touchesGroupDiv.className = 'touches-group';
          touchesGroupDiv.style.cssText = 'margin-top: 1rem; border-top: 1px dashed #e2e8f0; padding-top: 0.75rem;';
          touchesGroupDiv.innerHTML = `
            <div class="option-group-title" style="font-size:0.85rem; color: var(--gold-primary); border-left-color: var(--gold-primary);"><i class="fas fa-magic"></i> ¿Añadir algún toque especial? (Opcional - Gratis)</div>
            <div class="touches-chips-list" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0.5rem;"></div>
          `;
          const chipsList = touchesGroupDiv.querySelector('.touches-chips-list');

          catConfig.touches.forEach(touch => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'touch-chip';
            chip.dataset.touch = touch;
            chip.innerHTML = `<i class="far fa-circle"></i> ${touch}`;
            chip.addEventListener('click', () => {
              const index = selectedUnitTouches[u].indexOf(touch);
              if (index > -1) {
                selectedUnitTouches[u].splice(index, 1);
                chip.classList.remove('active');
                chip.innerHTML = `<i class="far fa-circle"></i> ${touch}`;
              } else {
                selectedUnitTouches[u].push(touch);
                chip.classList.add('active');
                chip.innerHTML = `<i class="fas fa-check-circle"></i> ${touch}`;
              }
              updateLiveSummary();
            });
            chipsList.appendChild(chip);
          });
          unitBox.appendChild(touchesGroupDiv);
        }

        // Navigation bar at the bottom of the unit box
        const navBar = document.createElement('div');
        navBar.className = 'unit-nav-bar';
        navBar.style.cssText = 'margin-top: 1.5rem; display: flex; justify-content: flex-end; border-top: 1px solid #edf2f7; padding-top: 1.25rem;';

        // Next / Siguiente button (if not the last unit)
        if (u < unitsCount) {
          const nextBtn = document.createElement('button');
          nextBtn.type = 'button';
          nextBtn.className = 'btn-next-unit';
          nextBtn.style.cssText = 'padding: 0.65rem 1.5rem; border-radius: 20px; border: none; background: var(--red-accent); color: #ffffff; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 0.85rem; display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 4px 10px rgba(224,18,60,0.15);';
          nextBtn.innerHTML = `Siguiente ${unitLabel} <i class="fas fa-arrow-right"></i>`;
          nextBtn.addEventListener('click', () => {
            // Activate the next tab
            const nextIdx = u + 1;
            const nextContainer = unitContainers.find(uc => uc.u === nextIdx);
            if (nextContainer) {
              nextContainer.tabBtn.click();
              // Scroll the configurator title back into view
              const configuratorHeader = document.getElementById('configurator-title');
              if (configuratorHeader) {
                configuratorHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          });
          navBar.appendChild(nextBtn);
        }

        unitBox.appendChild(navBar);

        configuratorBody.appendChild(unitBox);
      }

      configuratorBody.insertBefore(tabsBar, configuratorBody.firstChild);

      // General options (like salsas for the promo)
      if (item.general_options) {
        Object.keys(item.general_options).forEach(optKey => {
          const optGroup = item.general_options[optKey];
          selectedGeneralOptions[optKey] = [];

          const groupDiv = document.createElement('div');
          groupDiv.className = 'option-group';

          let imgHTML = '';
          const keyLower = optKey.toLowerCase();
          if (keyLower.includes('envoltura') || keyLower.includes('cobertura') || keyLower.includes('wrap')) {
            imgHTML = `<img src="assets/wrap_reference.png" class="option-group-img" alt="${optGroup.title}">`;
          } else if (keyLower.includes('protein')) {
            imgHTML = `<img src="assets/protein_reference.png" class="option-group-img" alt="${optGroup.title}">`;
          } else if (keyLower.includes('agregado') || keyLower.includes('verdur') || keyLower.includes('vegetal') || keyLower.includes('fill')) {
            imgHTML = `<img src="assets/veggies_reference.png" class="option-group-img" alt="${optGroup.title}">`;
          }

          groupDiv.innerHTML = `
            <div class="option-group-title">${optGroup.title} (Máx: ${optGroup.limit})</div>
            <div class="option-group-content">
              ${imgHTML}
              <div class="options-list" style="flex: 1; min-width: 200px;"></div>
            </div>
          `;

          const listDiv = groupDiv.querySelector('.options-list');

          optGroup.choices.forEach(choice => {
            const chip = document.createElement('div');
            chip.className = 'option-chip';
            chip.innerHTML = `<i class="far fa-circle"></i> <span>${choice}</span>`;

            chip.addEventListener('click', () => {
              toggleGeneralOptionSelection(optKey, choice, optGroup.limit, chip);
              updateLiveSummary();
            });

            listDiv.appendChild(chip);
          });

          configuratorBody.appendChild(groupDiv);
        });
      }

    } else if (item.options) {
      // Standard single-unit customization
      Object.keys(item.options).forEach(optKey => {
        const optGroup = item.options[optKey];
        selectedOptions[optKey] = [];

        const groupDiv = document.createElement('div');
        groupDiv.className = 'option-group';

        let imgHTML = '';
        const keyLower = optKey.toLowerCase();
        if (keyLower.includes('envoltura') || keyLower.includes('cobertura') || keyLower.includes('wrap')) {
          imgHTML = `<img src="assets/wrap_reference.png" class="option-group-img" alt="${optGroup.title}">`;
        } else if (keyLower.includes('protein')) {
          imgHTML = `<img src="assets/protein_reference.png" class="option-group-img" alt="${optGroup.title}">`;
        } else if (keyLower.includes('agregado') || keyLower.includes('verdur') || keyLower.includes('vegetal') || keyLower.includes('fill')) {
          imgHTML = `<img src="assets/veggies_reference.png" class="option-group-img" alt="${optGroup.title}">`;
        }

        groupDiv.innerHTML = `
          <div class="option-group-title">${optGroup.title} (Máx: ${optGroup.limit})</div>
          <div class="option-group-content">
            ${imgHTML}
            <div class="options-list" style="flex: 1; min-width: 200px;"></div>
          </div>
        `;

        const listDiv = groupDiv.querySelector('.options-list');

        optGroup.choices.forEach(choice => {
          const chip = document.createElement('div');
          chip.className = 'option-chip';
          chip.innerHTML = `<i class="far fa-circle"></i> <span>${choice}</span>`;

          chip.addEventListener('click', () => {
            toggleOptionSelection(optKey, choice, optGroup.limit, chip);
            updateLiveSummary();
          });

          listDiv.appendChild(chip);
        });

        configuratorBody.appendChild(groupDiv);
      });

      // Exclusion chips group for single customized item
      selectedItemExclusions = [];
      const catConfig = CONFIGURACION_PERSONALIZACION[item.category];
      if (catConfig && catConfig.exclusions && catConfig.exclusions.length > 0) {
        const exclGroupDiv = document.createElement('div');
        exclGroupDiv.className = 'exclusion-group';
        exclGroupDiv.style.cssText = 'margin-top: 1.5rem; border-top: 1px dashed #e2e8f0; padding-top: 1rem;';
        exclGroupDiv.innerHTML = `
          <div class="option-group-title" style="color: var(--red-accent);"><i class="fas fa-ban"></i> ¿Quitar algún ingrediente base? (Opcional)</div>
          <div class="exclusion-chips-list" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0.5rem;"></div>
        `;
        const chipsList = exclGroupDiv.querySelector('.exclusion-chips-list');

        catConfig.exclusions.forEach(excl => {
          const chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'exclusion-chip';
          chip.innerHTML = `<i class="far fa-circle"></i> Sin ${excl}`;
          chip.addEventListener('click', () => {
            const index = selectedItemExclusions.indexOf(excl);
            if (index > -1) {
              selectedItemExclusions.splice(index, 1);
              chip.classList.remove('active');
              chip.innerHTML = `<i class="far fa-circle"></i> Sin ${excl}`;
            } else {
              selectedItemExclusions.push(excl);
              chip.classList.add('active');
              chip.innerHTML = `<i class="fas fa-check-circle"></i> Sin ${excl}`;
            }
            updateLiveSummary();
          });
          chipsList.appendChild(chip);
        });
        configuratorBody.appendChild(exclGroupDiv);
      }

      // Touches chips group for single customized item
      selectedItemTouches = [];
      if (catConfig && catConfig.touches && catConfig.touches.length > 0) {
        const touchesGroupDiv = document.createElement('div');
        touchesGroupDiv.className = 'touches-group';
        touchesGroupDiv.style.cssText = 'margin-top: 1.5rem; border-top: 1px dashed #e2e8f0; padding-top: 1rem;';
        touchesGroupDiv.innerHTML = `
          <div class="option-group-title" style="color: var(--gold-primary); border-left-color: var(--gold-primary);"><i class="fas fa-magic"></i> ¿Añadir algún toque especial? (Opcional - Gratis)</div>
          <div class="touches-chips-list" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0.5rem;"></div>
        `;
        const chipsList = touchesGroupDiv.querySelector('.touches-chips-list');

        catConfig.touches.forEach(touch => {
          const chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'touch-chip';
          chip.innerHTML = `<i class="far fa-circle"></i> ${touch}`;
          chip.addEventListener('click', () => {
            const index = selectedItemTouches.indexOf(touch);
            if (index > -1) {
              selectedItemTouches.splice(index, 1);
              chip.classList.remove('active');
              chip.innerHTML = `<i class="far fa-circle"></i> ${touch}`;
            } else {
              selectedItemTouches.push(touch);
              chip.classList.add('active');
              chip.innerHTML = `<i class="fas fa-check-circle"></i> ${touch}`;
            }
            updateLiveSummary();
          });
          chipsList.appendChild(chip);
        });
        configuratorBody.appendChild(touchesGroupDiv);
      }
    }

    // Render general extras from global list (applicable to all customizable items)
    if (EXTRAS_GLOBALES) {
      const extrasGroupDiv = document.createElement('div');
      extrasGroupDiv.className = 'extras-group';
      extrasGroupDiv.style.cssText = 'margin-top: 1.5rem; border-top: 1px dashed #e2e8f0; padding-top: 1rem;';
      extrasGroupDiv.innerHTML = `
        <div class="option-group-title" style="color: var(--gold-primary);"><i class="fas fa-plus-circle"></i> ¿Deseas agregar algún ingrediente extra? (Opcional)</div>
        <div class="extras-categories-container" style="display: flex; flex-direction: column; gap: 1rem; margin-top: 0.85rem;"></div>
      `;
      const categoriesContainer = extrasGroupDiv.querySelector('.extras-categories-container');

      Object.keys(EXTRAS_GLOBALES).forEach(extraCat => {
        const catList = EXTRAS_GLOBALES[extraCat];
        if (catList && catList.length > 0) {
          const catDiv = document.createElement('div');
          catDiv.className = 'extra-subcategory';
          catDiv.innerHTML = `
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.3px;">${extraCat}</div>
            <div class="extras-chips-list" style="display: flex; flex-wrap: wrap; gap: 8px;"></div>
          `;
          const chipsList = catDiv.querySelector('.extras-chips-list');

          catList.forEach(extra => {
            // Exclude cheese that doesn't match the category type
            if (item.category === 'empanadas' && extra.id === 'extra-queso-crema') return;
            if (item.category !== 'empanadas' && extra.id === 'extra-queso-mantecoso') return;

            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'extra-chip';
            chip.innerHTML = `<i class="far fa-circle"></i> ${extra.name} (+$${extra.price.toLocaleString('es-CL')})`;
            chip.addEventListener('click', () => {
              const index = selectedExtras.findIndex(e => e.id === extra.id);
              if (index > -1) {
                selectedExtras.splice(index, 1);
                chip.classList.remove('active');
                chip.innerHTML = `<i class="far fa-circle"></i> ${extra.name} (+$${extra.price.toLocaleString('es-CL')})`;
              } else {
                selectedExtras.push(extra);
                chip.classList.add('active');
                chip.innerHTML = `<i class="fas fa-check-circle"></i> ${extra.name} (+$${extra.price.toLocaleString('es-CL')})`;
              }
              updateLiveSummary();
            });
            chipsList.appendChild(chip);
          });
          categoriesContainer.appendChild(catDiv);
        }
      });
      configuratorBody.appendChild(extrasGroupDiv);
    }

    configuratorSection.style.display = 'block';
    updateLiveSummary();

    // Scroll smoothly and quickly to the configurator
    configuratorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateLiveSummary() {
    if (!activeCustomizingItem) return;
    let detailsArr = [];

    if (activeCustomizingItem.per_unit_options && activeCustomizingItem.units_count) {
      const unitsCount = activeCustomizingItem.units_count;
      const unitLabel = activeCustomizingItem.unit_label || 'Unidad';

      for (let u = 1; u <= unitsCount; u++) {
        let uChoices = [];
        const uOpts = selectedUnitOptions[u] || {};
        Object.keys(uOpts).forEach(k => {
          if (uOpts[k].length > 0) {
            uChoices.push(uOpts[k].join(', '));
          }
        });
        let uStr = uChoices.length > 0 ? uChoices.join(', ') : 'Sin seleccionar';
        
        // Append exclusions for this unit
        const uExcl = selectedUnitExclusions[u] || [];
        if (uExcl.length > 0) {
          const exclFormatted = uExcl.map(x => `sin ${x.toLowerCase()}`).join(', ');
          uStr += ` (${exclFormatted})`;
        }
        
        // Append touches for this unit
        const uTouch = selectedUnitTouches[u] || [];
        if (uTouch.length > 0) {
          const touchFormatted = uTouch.join(', ');
          uStr += ` [${touchFormatted}]`;
        }
        
        detailsArr.push(`${unitLabel} #${u}: [${uStr}]`);
      }
    } else {
      Object.keys(selectedOptions).forEach(k => {
        if (selectedOptions[k].length > 0) {
          detailsArr.push(selectedOptions[k].join(', '));
        }
      });
      // Append exclusions for single item
      if (selectedItemExclusions && selectedItemExclusions.length > 0) {
        const exclFormatted = selectedItemExclusions.map(x => `sin ${x.toLowerCase()}`).join(', ');
        detailsArr.push(`(${exclFormatted})`);
      }
      // Append touches for single item
      if (selectedItemTouches && selectedItemTouches.length > 0) {
        const touchFormatted = selectedItemTouches.join(', ');
        detailsArr.push(`[${touchFormatted}]`);
      }
    }

    // Append general extras to summary
    if (selectedExtras && selectedExtras.length > 0) {
      const extrasFormatted = selectedExtras.map(e => `+${e.name}`).join(', ');
      detailsArr.push(`Extras: [${extrasFormatted}]`);
    }

    // Recalculate price in live preview
    let extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
    const totalPrice = activeCustomizingItem.price + extrasTotal;
    configuratorPrice.textContent = `$${totalPrice.toLocaleString('es-CL')}`;

    configuratorSummaryText.textContent = detailsArr.length > 0 ? detailsArr.join(' | ') : 'Selecciona tus ingredientes en los pasos superiores...';
  }

  function toggleUnitOptionSelection(unitIdx, optKey, choice, limit, chipEl) {
    const list = selectedUnitOptions[unitIdx][optKey];
    const index = list.indexOf(choice);

    if (index > -1) {
      list.splice(index, 1);
      chipEl.classList.remove('selected');
      chipEl.querySelector('i').className = 'far fa-circle';
    } else {
      if (list.length >= limit) {
        if (limit === 1 && list.length === 1) {
          list.pop();
          const siblings = chipEl.parentElement.querySelectorAll('.option-chip');
          siblings.forEach(s => {
            s.classList.remove('selected');
            s.querySelector('i').className = 'far fa-circle';
          });
        } else {
          return;
        }
      }
      list.push(choice);
      chipEl.classList.add('selected');
      chipEl.querySelector('i').className = 'fas fa-check-circle';
    }
  }

  function toggleGeneralOptionSelection(optKey, choice, limit, chipEl) {
    const list = selectedGeneralOptions[optKey];
    const index = list.indexOf(choice);

    if (index > -1) {
      list.splice(index, 1);
      chipEl.classList.remove('selected');
      chipEl.querySelector('i').className = 'far fa-circle';
    } else {
      if (list.length >= limit) {
        if (limit === 1 && list.length === 1) {
          list.pop();
          const siblings = chipEl.parentElement.querySelectorAll('.option-chip');
          siblings.forEach(s => {
            s.classList.remove('selected');
            s.querySelector('i').className = 'far fa-circle';
          });
        } else {
          return;
        }
      }
      list.push(choice);
      chipEl.classList.add('selected');
      chipEl.querySelector('i').className = 'fas fa-check-circle';
    }
  }

  function toggleOptionSelection(optKey, choice, limit, chipEl) {
    const list = selectedOptions[optKey];
    const index = list.indexOf(choice);

    if (index > -1) {
      list.splice(index, 1);
      chipEl.classList.remove('selected');
      chipEl.querySelector('i').className = 'far fa-circle';
    } else {
      if (list.length >= limit) {
        if (limit === 1 && list.length === 1) {
          const prevChoice = list.pop();
          const siblings = chipEl.parentElement.querySelectorAll('.option-chip');
          siblings.forEach(s => {
            s.classList.remove('selected');
            s.querySelector('i').className = 'far fa-circle';
          });
        } else {
          return;
        }
      }
      list.push(choice);
      chipEl.classList.add('selected');
      chipEl.querySelector('i').className = 'fas fa-check-circle';
    }
  }

  // Add customized item from Configurator Section to cart
  if (configuratorAddBtn) {
    configuratorAddBtn.addEventListener('click', () => {
      if (!activeCustomizingItem) return;

      let detailsArr = [];

      if (activeCustomizingItem.per_unit_options && activeCustomizingItem.units_count) {
        const unitsCount = activeCustomizingItem.units_count;
        const unitLabel = activeCustomizingItem.unit_label || 'Unidad';

        for (let u = 1; u <= unitsCount; u++) {
          let uChoices = [];
          const uOpts = selectedUnitOptions[u] || {};
          Object.keys(uOpts).forEach(k => {
            if (uOpts[k].length > 0) {
              uChoices.push(uOpts[k].join(', '));
            }
          });
          let uStr = uChoices.length > 0 ? uChoices.join(', ') : 'Estándar';
          
          // Append exclusions for this unit
          const uExcl = selectedUnitExclusions[u] || [];
          if (uExcl.length > 0) {
            const exclFormatted = uExcl.map(x => `sin ${x.toLowerCase()}`).join(', ');
            uStr += ` (${exclFormatted})`;
          }
          
          // Append touches for this unit
          const uTouch = selectedUnitTouches[u] || [];
          if (uTouch.length > 0) {
            const touchFormatted = uTouch.join(', ');
            uStr += ` [${touchFormatted}]`;
          }
          
          detailsArr.push(`${unitLabel} #${u}: ${uStr}`);
        }

        if (selectedGeneralOptions) {
          Object.keys(selectedGeneralOptions).forEach(gk => {
            if (selectedGeneralOptions[gk].length > 0) {
              detailsArr.push(`Extras: ${selectedGeneralOptions[gk].join(', ')}`);
            }
          });
        }

      } else {
        let itemOptsStr = '';
        let optsArr = [];
        Object.keys(selectedOptions).forEach(k => {
          if (selectedOptions[k].length > 0) {
            optsArr.push(selectedOptions[k].join(', '));
          }
        });
        itemOptsStr = optsArr.join(' | ');

        // Append exclusions for single item
        if (selectedItemExclusions && selectedItemExclusions.length > 0) {
          const exclFormatted = selectedItemExclusions.map(x => `sin ${x.toLowerCase()}`).join(', ');
          if (itemOptsStr) {
            itemOptsStr += ` (${exclFormatted})`;
          } else {
            itemOptsStr = `(${exclFormatted})`;
          }
        }
        // Append touches for single item
        if (selectedItemTouches && selectedItemTouches.length > 0) {
          const touchFormatted = selectedItemTouches.join(', ');
          if (itemOptsStr) {
            itemOptsStr += ` [${touchFormatted}]`;
          } else {
            itemOptsStr = `[${touchFormatted}]`;
          }
        }
        if (itemOptsStr) {
          detailsArr.push(itemOptsStr);
        }
      }

      // Append general extras to cart details
      if (selectedExtras && selectedExtras.length > 0) {
        const extrasFormatted = selectedExtras.map(e => `+${e.name}`).join(', ');
        detailsArr.push(`Extras: ${extrasFormatted}`);
      }

      const detailsStr = detailsArr.length > 0 ? detailsArr.join(' | ') : 'Personalizado';

      let extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
      const finalPrice = activeCustomizingItem.price + extrasTotal;

      addToCart({
        id: activeCustomizingItem.id + '-' + Date.now(),
        productId: activeCustomizingItem.id,
        title: activeCustomizingItem.title,
        price: finalPrice,
        details: detailsStr,
        quantity: 1
      });

      configuratorSection.style.display = 'none';
      openCart();
    });
  }

  if (btnCloseConfigurator) {
    btnCloseConfigurator.addEventListener('click', () => {
      configuratorSection.style.display = 'none';
      activeCustomizingItem = null;
      
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Cart Management
  function addToCart(cartItem) {
    cart.push(cartItem);
    saveCart();
    updateCartUI();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }

  function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      removeFromCart(index);
    } else {
      saveCart();
      updateCartUI();
    }
  }

  function saveCart() {
    localStorage.setItem('bestsushi_cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    // Calculate total count and total amount
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (cartTotalAmount) cartTotalAmount.textContent = '$' + totalAmount.toLocaleString('es-CL');

    // Update Floating Mobile Bottom Order Bar
    const mobileBottomBar = document.getElementById('mobile-bottom-order-bar');
    const mobileOrderCount = document.getElementById('mobile-order-count');
    const mobileOrderTotal = document.getElementById('mobile-order-total');

    if (mobileBottomBar && mobileOrderCount && mobileOrderTotal) {
      if (totalCount > 0) {
        mobileBottomBar.classList.add('active');
        mobileOrderCount.textContent = totalCount;
        mobileOrderTotal.textContent = '$' + totalAmount.toLocaleString('es-CL');
      } else {
        mobileBottomBar.classList.remove('active');
      }
    }

    // Show/hide Vaciar button based on cart contents
    if (cartClearBtn) {
      cartClearBtn.style.display = cart.length > 0 ? 'inline-flex' : 'none';
    }

    // Update WhatsApp link with current cart contents
    updateWhatsAppLink();

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
          <i class="fas fa-shopping-basket" style="font-size: 2.5rem; margin-bottom: 1rem; color: #cbd5e1;"></i>
          <p style="font-weight: 700; color: var(--text-dark);">Tu carrito está vacío</p>
          <span style="font-size: 0.85rem;">Agrega tus promociones favoritas para hacer tu pedido.</span>
        </div>
      `;
    } else {
      cart.forEach((item, idx) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item-card';

        itemEl.innerHTML = `
          <div style="flex: 1; margin-right: 10px;">
            <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-dark);">${item.title}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin: 2px 0 6px;">${item.details}</div>
            <div style="font-weight: 900; font-size: 0.95rem; color: var(--red-accent);">$${(item.price * item.quantity).toLocaleString('es-CL')}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <button class="quantity-btn btn-minus" data-idx="${idx}" style="width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border-light); background: #fff; cursor: pointer; font-weight: 800;">-</button>
            <span style="font-weight: 800; font-size: 0.9rem; min-width: 16px; text-align: center;">${item.quantity}</span>
            <button class="quantity-btn btn-plus" data-idx="${idx}" style="width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border-light); background: #fff; cursor: pointer; font-weight: 800;">+</button>
            <button class="quantity-btn btn-remove" data-idx="${idx}" style="background: none; border: none; color: #ef4444; margin-left: 6px; cursor: pointer;"><i class="fas fa-trash-alt"></i></button>
          </div>
        `;

        itemEl.querySelector('.btn-minus').addEventListener('click', () => changeQuantity(idx, -1));
        itemEl.querySelector('.btn-plus').addEventListener('click', () => changeQuantity(idx, 1));
        itemEl.querySelector('.btn-remove').addEventListener('click', () => removeFromCart(idx));

        cartItemsList.appendChild(itemEl);
      });
    }
  }

  function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
  }

  if (cartClearBtn) {
    cartClearBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      if (confirm('¿Deseas vaciar tu carrito de compras?')) {
        clearCart();
      }
    });
  }

  // Cart Drawer open/close
  function openCart() {
    if (cartDrawer) {
      cartDrawer.classList.add('active');
      cartDrawer.classList.add('open');
    }
    if (cartBackdrop) cartBackdrop.classList.add('active');
  }
  function closeCartDrawer() {
    if (cartDrawer) {
      cartDrawer.classList.remove('active');
      cartDrawer.classList.remove('open');
    }
    if (cartBackdrop) cartBackdrop.classList.remove('active');
  }

  if (cartBtnTrigger) cartBtnTrigger.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  const btnMobileOrderAction = document.getElementById('btn-mobile-order-action');
  if (btnMobileOrderAction) btnMobileOrderAction.addEventListener('click', openCart);


  // Build WhatsApp URL from current cart state
  function buildWhatsAppUrl() {
    const phone = menuData && menuData.info ? menuData.info.phone : '56937373076';
    let text = `*¡HOLA BESTSUSHI CORONEL!*\n`;
    text += `*Nuevo Pedido desde la Página Web*\n\n`;

    cart.forEach((item, idx) => {
      text += `${idx + 1}. *${item.title}* (x${item.quantity})\n`;
      if (item.details && item.details !== 'Opción estándar' && item.details !== 'Personalizado') {
        let detailsString = item.details;
        // Format touches to display on a new line underneath
        detailsString = detailsString.replace(/\[([^\]]+)\]/g, '\n       ↳ Toques: $1');
        const formattedDetails = detailsString.split(' | ').join('\n     • ');
        text += `   - Opciones:\n     • ${formattedDetails}\n`;
      } else {
        text += `   - Opciones: Opción estándar\n`;
      }
      text += `   - Subtotal: $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    text += `*TOTAL A PAGAR: $${total.toLocaleString('es-CL')}*\n\n`;
    
    const deliveryMethod = cartDeliveryMethod ? cartDeliveryMethod.value : 'Retiro en Local';
    const deliveryTime = cartDeliveryTime ? cartDeliveryTime.value : 'Lo antes posible';
    
    text += `*Modalidad:* ${deliveryMethod}\n`;
    text += `*Horario:* ${deliveryTime}\n\n`;
    text += `Por favor confirmen mi pedido y tiempo estimado. ¡Muchas gracias!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  // Update WhatsApp link href dynamically whenever cart changes
  function updateWhatsAppLink() {
    if (cart.length > 0) {
      const orderUrl = buildWhatsAppUrl();
      if (checkoutWhatsappBtn) checkoutWhatsappBtn.href = orderUrl;
      if (floatingWhatsapp) {
        floatingWhatsapp.href = orderUrl;
        floatingWhatsapp.style.display = 'flex';
      }
      if (heroWhatsappBtn) {
        heroWhatsappBtn.href = orderUrl;
        heroWhatsappBtn.target = '_blank';
      }
    } else {
      if (checkoutWhatsappBtn) checkoutWhatsappBtn.href = '#';
      if (floatingWhatsapp) {
        floatingWhatsapp.style.display = 'none';
      }
      if (heroWhatsappBtn) {
        heroWhatsappBtn.href = '#menu';
        heroWhatsappBtn.target = '_self';
      }
    }
  }

  // Also attach click listener as rock-solid fallback for mobile browsers
  if (checkoutWhatsappBtn) {
    checkoutWhatsappBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor tag behavior to avoid '#' issues on mobile/WebViews
      if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega algunas promociones antes de pedir.');
        return;
      }
      // Programmatically redirect to WhatsApp URL
      window.location.href = buildWhatsAppUrl();
    });
  }

  if (cartDeliveryMethod) {
    cartDeliveryMethod.addEventListener('change', updateWhatsAppLink);
    cartDeliveryMethod.addEventListener('input', updateWhatsAppLink);
  }
  if (cartDeliveryTime) {
    cartDeliveryTime.addEventListener('change', updateWhatsAppLink);
    cartDeliveryTime.addEventListener('input', updateWhatsAppLink);
  }

  const timeToggleNow = document.getElementById('time-toggle-now');
  const timeToggleLater = document.getElementById('time-toggle-later');
  const timeSelectWrapper = document.getElementById('time-select-wrapper');

  if (timeToggleNow && timeToggleLater && timeSelectWrapper) {
    timeToggleNow.addEventListener('click', () => {
      timeToggleNow.classList.add('active');
      timeToggleLater.classList.remove('active');
      timeSelectWrapper.style.display = 'none';
      if (cartDeliveryTime) {
        cartDeliveryTime.value = "Lo antes posible";
        updateWhatsAppLink();
      }
    });

    timeToggleLater.addEventListener('click', () => {
      timeToggleLater.classList.add('active');
      timeToggleNow.classList.remove('active');
      timeSelectWrapper.style.display = 'block';
      if (cartDeliveryTime) {
        if (cartDeliveryTime.value === "Lo antes posible") {
          cartDeliveryTime.value = "12:00 hrs";
        }
        updateWhatsAppLink();
      }
    });
  }

  // Handle Hero Image click: Show all promos and scroll
  const heroImageLink = document.getElementById('hero-image-link');
  if (heroImageLink) {
    heroImageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentCategory = 'todas';
      
      // Update UI active category tabs
      document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.textContent.includes('Todas')) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      renderProducts();
      
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Custom scroll animation that starts slow (ease-in) and gets faster
  function customAcceleratedScrollTo(element, duration = 1200) {
    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    // Cubic Ease-In: starts slow, accelerates
    function easeInCubic(t) {
      return t * t * t;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInCubic(progress);
      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // IntersectionObserver for scroll animations
  function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // Events Carousel Logic
  function setupEventsCarousel() {
    const slider = document.getElementById('eventos-carousel');
    if (!slider) return;

    const slidesContainer = slider.querySelector('.carousel-slides');
    const slides = slider.querySelectorAll('.carousel-slide');
    const prevBtn = slider.querySelector('.carousel-prev');
    const nextBtn = slider.querySelector('.carousel-next');
    const dots = slider.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;

    function updateCarousel() {
      // Move slides container
      if (slidesContainer) {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
      
      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function goToSlide(index) {
      currentSlide = index;
      updateCarousel();
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
      });
    });

    // Autoplay functions
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Hover controls to pause autoplay
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Initial load
    startAutoplay();
  }

  // ==========================================
  // REVIEWS SYSTEM LOGIC
  // ==========================================
  let selectedProductIdForReview = null;
  const reviewsBackdrop = document.getElementById('reviews-backdrop');
  const reviewsModal = document.getElementById('reviews-modal');
  const reviewsModalClose = document.getElementById('reviews-modal-close');
  const reviewsList = document.getElementById('reviews-list');
  const reviewsCountText = document.getElementById('reviews-count-text');
  const reviewsAverageStars = document.getElementById('reviews-average-stars');
  const addReviewForm = document.getElementById('add-review-form');
  const reviewRatingInput = document.getElementById('review-rating-input');
  const reviewNameInput = document.getElementById('review-name-input');
  const reviewCommentInput = document.getElementById('review-comment-input');
  const starsSelector = document.getElementById('stars-selector');

  function openReviewsModal(product) {
    selectedProductIdForReview = product.id;
    document.getElementById('reviews-modal-title').textContent = `Opiniones: ${product.title}`;
    
    // Clear Form
    if (reviewNameInput) reviewNameInput.value = '';
    if (reviewCommentInput) reviewCommentInput.value = '';
    setFormStarRating(5);

    renderProductReviews(product.id);

    if (reviewsBackdrop) reviewsBackdrop.classList.add('active');
    if (reviewsModal) reviewsModal.classList.add('active');
  }

  function closeReviewsModal() {
    if (reviewsBackdrop) reviewsBackdrop.classList.remove('active');
    if (reviewsModal) reviewsModal.classList.remove('active');
    selectedProductIdForReview = null;
  }

  if (reviewsModalClose) reviewsModalClose.addEventListener('click', closeReviewsModal);
  if (reviewsBackdrop) reviewsBackdrop.addEventListener('click', closeReviewsModal);

  // Stars selector interaction inside Review Form
  if (starsSelector) {
    const stars = starsSelector.querySelectorAll('i');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        setFormStarRating(rating);
      });
    });
  }

  function setFormStarRating(rating) {
    if (reviewRatingInput) reviewRatingInput.value = rating;
    if (starsSelector) {
      const stars = starsSelector.querySelectorAll('i');
      stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-value'));
        if (val <= rating) {
          star.className = 'fas fa-star active';
        } else {
          star.className = 'far fa-star';
        }
      });
    }
  }

  function renderProductReviews(productId) {
    if (!reviewsList) return;
    reviewsList.innerHTML = '';

    const filtered = appReviews.filter(r => r.productId === productId);
    const ratingInfo = getProductRating(productId);

    if (reviewsAverageStars) reviewsAverageStars.innerHTML = ratingInfo.starsHTML;
    if (reviewsCountText) reviewsCountText.textContent = `${filtered.length} opiniones`;

    if (filtered.length === 0) {
      reviewsList.innerHTML = '<div class="no-reviews-msg">Este producto aún no tiene opiniones. ¡Sé el primero en dejar una!</div>';
      return;
    }

    filtered.forEach(rev => {
      const item = document.createElement('div');
      item.className = 'review-item';
      
      let starsHTML = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= rev.rating) {
          starsHTML += '<i class="fas fa-star" style="color:#ffc107; font-size:0.8rem; margin-right:1px;"></i>';
        } else {
          starsHTML += '<i class="far fa-star" style="color:#cbd5e0; font-size:0.8rem; margin-right:1px;"></i>';
        }
      }

      item.innerHTML = `
        <div class="review-item-header">
          <span class="review-item-user">${rev.userName}</span>
          <span class="review-item-date">${rev.date}</span>
        </div>
        <div style="margin-bottom:6px;">${starsHTML}</div>
        <p class="review-item-comment">${rev.commentText}</p>
      `;
      reviewsList.appendChild(item);
    });
  }

  // Handle Review submission
  if (addReviewForm) {
    addReviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!selectedProductIdForReview) return;

      const userName = reviewNameInput.value.trim();
      const commentText = reviewCommentInput.value.trim();
      const rating = parseInt(reviewRatingInput.value);

      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productId: selectedProductIdForReview,
            userName,
            rating,
            commentText
          })
        });

        if (response.ok) {
          const newReview = await response.json();
          appReviews.push(newReview);
          
          // Re-render
          renderProductReviews(selectedProductIdForReview);
          renderProducts();
          updateGlobalStoreRating();
          
          // Reset fields
          reviewCommentInput.value = '';
          reviewNameInput.value = '';
          setFormStarRating(5);
        } else {
          alert('Error al publicar la reseña');
        }
      } catch (err) {
        console.error(err);
        alert('Ocurrió un error al enviar tu valoración.');
      }
    });
  }


  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
    const iconClass = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';
    toast.innerHTML = `
      <div class="toast-icon"><i class="fas ${iconClass}"></i></div>
      <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }

  // ==========================================
  // ADMIN PANEL LOGIC
  // ==========================================
  let adminToken = sessionStorage.getItem('bestsushi_admin_token') || '';
  const adminTriggerLink = document.getElementById('admin-trigger-link');
  const adminBackdrop = document.getElementById('admin-backdrop');
  const adminModal = document.getElementById('admin-modal');
  const adminModalClose = document.getElementById('admin-modal-close');
  const adminLoginCard = document.getElementById('admin-login-card');
  const adminDashboard = document.getElementById('admin-dashboard');
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminPasswordInput = document.getElementById('admin-password-input');
  const adminLoginError = document.getElementById('admin-login-error');
  const btnCloseLogin = document.getElementById('btn-close-login');
  
  // Dashboard Tabs
  const adminTabs = document.querySelectorAll('.admin-tab');
  const adminTabContents = document.querySelectorAll('.admin-tab-content');

  // Edit Product Modal
  const editProductBackdrop = document.getElementById('edit-product-backdrop');
  const editProductModal = document.getElementById('edit-product-modal');
  const editProductClose = document.getElementById('edit-product-close');
  const editProductForm = document.getElementById('edit-product-form');
  const adminNewProductBtn = document.getElementById('admin-new-product-btn');

  async function openAdminPanel() {
    if (adminBackdrop) adminBackdrop.classList.add('active');
    if (adminModal) adminModal.classList.add('active');

    if (adminToken) {
      try {
        const response = await fetch('/api/verify-token', {
          headers: { 'x-admin-token': adminToken }
        });
        if (response.ok) {
          showDashboard();
          return;
        }
      } catch (err) {
        console.log('Error verifying token:', err);
      }
    }
    showLoginForm();
  }

  function closeAdminPanel() {
    if (adminBackdrop) adminBackdrop.classList.remove('active');
    if (adminModal) adminModal.classList.remove('active');
  }

  if (adminTriggerLink) {
    adminTriggerLink.addEventListener('click', (e) => {
      e.preventDefault();
      openAdminPanel();
    });
  }

  // Handle URL hash shortcut #admin
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
      openAdminPanel();
    }
  });
  if (window.location.hash === '#admin') {
    openAdminPanel();
  }

  if (adminModalClose) adminModalClose.addEventListener('click', closeAdminPanel);
  if (adminBackdrop) adminBackdrop.addEventListener('click', closeAdminPanel);
  if (btnCloseLogin) btnCloseLogin.addEventListener('click', closeAdminPanel);

  function showLoginForm() {
    if (adminLoginCard) adminLoginCard.style.display = 'block';
    if (adminDashboard) adminDashboard.style.display = 'none';
    if (adminPasswordInput) adminPasswordInput.value = '';
    if (adminLoginError) adminLoginError.style.display = 'none';
  }

  function showDashboard() {
    if (adminLoginCard) adminLoginCard.style.display = 'none';
    if (adminDashboard) adminDashboard.style.display = 'block';
    renderAdminProductsTable();
    renderAdminCommentsTable();
  }

  // Login handler
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = adminPasswordInput.value.trim();
      
      try {
        const response = await fetch('/api/verify-token', {
          headers: { 'x-admin-token': password }
        });

        if (response.ok) {
          adminToken = password;
          sessionStorage.setItem('bestsushi_admin_token', adminToken);
          showDashboard();
        } else {
          if (adminLoginError) adminLoginError.style.display = 'block';
        }
      } catch (err) {
        console.error(err);
        showToast('Error al conectar con el servidor.', 'error');
      }
    });
  }

  // Tab switching
  adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      adminTabs.forEach(t => t.classList.remove('active'));
      adminTabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const tabId = `tab-${tab.getAttribute('data-tab')}`;
      const targetContent = document.getElementById(tabId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Render products inside Admin panel table
  function renderAdminProductsTable() {
    const tbody = document.getElementById('admin-products-table-body');
    if (!tbody || !menuData || !menuData.items) return;
    tbody.innerHTML = '';

    menuData.items.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${item.image}" alt="Producto" class="table-product-img"></td>
        <td><div class="table-product-name">${item.title}</div></td>
        <td style="font-weight: 700;">$${item.price.toLocaleString('es-CL')}</td>
        <td><span class="cat-badge ${item.category}">${item.category}</span></td>
        <td><span class="badge-new" style="margin:0; font-size:0.7rem; background:${item.popular ? 'var(--red-accent)' : '#94a3b8'}">${item.badge || 'N/A'}</span></td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button class="btn-edit" style="background:#e0f2fe; color:#0284c7; border:none; padding:8px 12px; border-radius:6px; cursor:pointer;" data-id="${item.id}" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="btn-delete" style="background:#fee2e2; color:#ef4444; border:none; padding:8px 12px; border-radius:6px; cursor:pointer;" data-id="${item.id}" title="Eliminar"><i class="fas fa-trash"></i></button>
          </div>
        </td>
      `;

      // Event listeners
      tr.querySelector('.btn-edit').addEventListener('click', () => openEditProductModal(item));
      tr.querySelector('.btn-delete').addEventListener('click', () => deleteProduct(item.id));

      tbody.appendChild(tr);
    });
  }

  // Render comments inside Admin panel table
  function renderAdminCommentsTable() {
    const tbody = document.getElementById('admin-comments-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (appReviews.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--text-secondary);">No hay opiniones de clientes registradas.</td></tr>';
      return;
    }

    appReviews.forEach(rev => {
      const itemObj = menuData.items.find(i => i.id === rev.productId) || { title: 'Producto Eliminado' };
      const tr = document.createElement('tr');
      const starsHtml = Array.from({length: 5}, (_, i) => `<i class="fas fa-star" style="color: ${i < rev.rating ? 'var(--gold-star)' : '#e2e8f0'}; font-size: 0.8rem;"></i>`).join('');
      const initials = rev.userName.substring(0, 2).toUpperCase();
      
      tr.innerHTML = `
        <td style="font-size: 0.8rem; color: var(--text-muted);">${rev.date}</td>
        <td><div style="font-weight: 600;">${itemObj.title}</div></td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 28px; height: 28px; background: var(--bg-dark); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700;">${initials}</div>
            <span style="font-weight: 500;">${rev.userName}</span>
          </div>
        </td>
        <td style="min-width: 90px;">${starsHtml}</td>
        <td style="font-size: 0.85rem; max-width: 250px; overflow: hidden; text-overflow: ellipsis;">"${rev.commentText}"</td>
        <td>
          <button class="btn-delete" style="background:#fee2e2; color:#ef4444; border:none; padding:8px 12px; border-radius:6px; cursor:pointer;" data-id="${rev.id}" title="Eliminar Comentario"><i class="fas fa-trash"></i></button>
        </td>
      `;

      tr.querySelector('.btn-delete').addEventListener('click', () => deleteReview(rev.id));
      tbody.appendChild(tr);
    });
  }

  // Save changes to database (POST to Railway api)
  async function saveMenuDataToServer() {
    try {
      const response = await fetch('/api/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify(menuData)
      });
      if (response.ok) {
        renderProducts();
        renderAdminProductsTable();
        return true;
      } else {
        showToast('Error al guardar datos en el servidor.', 'error');
        return false;
      }
    } catch (e) {
      console.error(e);
      showToast('Error en conexión con el servidor.', 'error');
      return false;
    }
  }

  // Product CRUD
  function openEditProductModal(item = null) {
    const titleInput = document.getElementById('edit-product-title');
    const priceInput = document.getElementById('edit-product-price');
    const categoryInput = document.getElementById('edit-product-category');
    const badgeInput = document.getElementById('edit-product-badge');
    const descInput = document.getElementById('edit-product-desc');
    const imageInput = document.getElementById('edit-product-image');
    const popularInput = document.getElementById('edit-product-popular');
    const customizableInput = document.getElementById('edit-product-customizable');
    const idInput = document.getElementById('edit-product-id');

    if (item) {
      document.getElementById('edit-product-modal-title').textContent = 'Editar Producto';
      idInput.value = item.id;
      titleInput.value = item.title;
      priceInput.value = item.price;
      categoryInput.value = item.category;
      badgeInput.value = item.badge || '';
      descInput.value = item.description;
      imageInput.value = item.image;
      popularInput.checked = !!item.popular;
      customizableInput.checked = !!item.customizable;
    } else {
      document.getElementById('edit-product-modal-title').textContent = 'Nuevo Producto';
      idInput.value = '';
      titleInput.value = '';
      priceInput.value = '';
      categoryInput.value = 'sushi';
      badgeInput.value = '';
      descInput.value = '';
      imageInput.value = 'assets/promo_sushi_ig.png';
      popularInput.checked = false;
      customizableInput.checked = false;
    }

    if (editProductBackdrop) editProductBackdrop.classList.add('active');
    if (editProductModal) editProductModal.classList.add('active');
  }

  function closeEditProductModal() {
    if (editProductBackdrop) editProductBackdrop.classList.remove('active');
    if (editProductModal) editProductModal.classList.remove('active');
  }

  if (editProductClose) editProductClose.addEventListener('click', closeEditProductModal);
  if (editProductBackdrop) editProductBackdrop.addEventListener('click', closeEditProductModal);
  if (adminNewProductBtn) {
    adminNewProductBtn.addEventListener('click', () => openEditProductModal(null));
  }

  // Handle Edit/New product Form submit
  if (editProductForm) {
    editProductForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-product-id').value;
      const title = document.getElementById('edit-product-title').value.trim();
      const price = parseInt(document.getElementById('edit-product-price').value);
      const category = document.getElementById('edit-product-category').value;
      const badge = document.getElementById('edit-product-badge').value.trim();
      const description = document.getElementById('edit-product-desc').value.trim();
      const image = document.getElementById('edit-product-image').value.trim();
      const popular = document.getElementById('edit-product-popular').checked;
      const customizable = document.getElementById('edit-product-customizable').checked;

      const productData = {
        id: id || `item-${Date.now()}`,
        category,
        title,
        price,
        price_display: '$' + price.toLocaleString('es-CL'),
        badge: badge || undefined,
        popular,
        description,
        image,
        customizable
      };

      // Add options if customizable and it's new
      if (customizable && !id) {
        if (category === 'sushi') {
          productData.units_count = 3;
          productData.unit_label = 'Roll';
          productData.per_unit_options = {
            envoltura: { title: "Envoltura", limit: 1, choices: ["Palta", "Tempura Crispy", "Sésamo"] },
            proteina: { title: "Proteína", limit: 1, choices: ["Pollo", "Camarón"] },
            agregados: { title: "Verduras (Queso crema incluido)", limit: 2, choices: ["Palta", "Cebollín", "Morrón", "Champiñón"] }
          };
        } else if (category === 'handrolls') {
          productData.units_count = 1;
          productData.unit_label = 'Handroll';
          productData.per_unit_options = {
            proteina: { title: "Proteína", limit: 1, choices: ["Pollo", "Camarón"] },
            verduras: { title: "Verduras", limit: 2, choices: ["Palta", "Cebollín", "Morrón", "Champiñón"] }
          };
        }
      }

      if (id) {
        // Edit existing
        const index = menuData.items.findIndex(item => item.id === id);
        if (index !== -1) {
          // Merge old properties (like existing options) with new edits
          menuData.items[index] = { ...menuData.items[index], ...productData };
        }
      } else {
        // Create new
        menuData.items.push(productData);
      }

      const success = await saveMenuDataToServer();
      if (success) {
        showToast('Producto guardado correctamente.');
        closeEditProductModal();
      }
    });
  }

  // Delete product
  async function deleteProduct(productId) {
    if (!confirm('¿Estás seguro de que quieres eliminar este producto del menú de forma permanente?')) return;
    menuData.items = menuData.items.filter(item => item.id !== productId);
    const success = await saveMenuDataToServer();
    if (success) showToast('Producto eliminado permanentemente.');
  }

  // Delete/Moderate client review
  async function deleteReview(reviewId) {
    if (!confirm('¿Deseas eliminar este comentario?')) return;
    try {
      const response = await fetch('/api/reviews', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ reviewId })
      });

      if (response.ok) {
        appReviews = appReviews.filter(r => r.id !== reviewId);
        renderAdminCommentsTable();
        renderProducts();
        updateGlobalStoreRating();
        showToast('Reseña eliminada correctamente.');
      } else {
        showToast('No se pudo borrar el comentario.', 'error');
      }
    } catch (e) {
      console.error(e);
      showToast('Error de conexión al servidor.', 'error');
    }
  }


  // Start App
  setupEventsCarousel();
  loadMenuData();
});
