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
      "modalidad": "Delivery a Domicilio y Retiro en Local"
    },
    "categories": [
      { "id": "todas", "name": "🔥 Todas las Promos" },
      { "id": "sushi", "name": "🍣 Promos Sushi" },
      { "id": "handrolls", "name": "🌯 Handrolls Crispy" },
      { "id": "empanadas", "name": "🥟 Empanadas" },
      { "id": "combos", "name": "🍱 Combos Mixtos" },
      { "id": "salsas", "name": "🌶️ Salsas y Extras" }
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
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Camarón", "Jamón"] },
          "agregados": { "title": "Verduras / Agregados (Queso crema incluido ✨)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] }
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
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Camarón", "Jamón"] },
          "agregados": { "title": "Verduras / Agregados (Queso crema incluido ✨)", "limit": 2, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] }
        },
        "general_options": {
          "salsas": { "title": "Salsas Incluidas", "limit": 2, "choices": ["Salsa Soya", "Salsa Teriyaki"] }
        }
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
        "image": "assets/promo_empanadas_ig.png",
        "customizable": true,
        "units_count": 1,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Jamón", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
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
        "image": "assets/promo_empanadas_ig.png",
        "customizable": true,
        "units_count": 2,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Jamón", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
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
        "image": "assets/promo_empanadas_ig.png",
        "customizable": true,
        "units_count": 3,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Jamón", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
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
        "image": "assets/promo_empanadas_ig.png",
        "customizable": true,
        "units_count": 5,
        "unit_label": "Empanada",
        "per_unit_options": {
          "proteina": { "title": "Proteína", "limit": 1, "choices": ["Pollo", "Jamón", "Machas", "Camarón"] },
          "vegetal": { "title": "Vegetal", "limit": 1, "choices": ["Palta", "Cebollín", "Morrón", "Champiñón"] },
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
          "empanada_relleno": { "title": "Empanada Incluida", "limit": 1, "choices": ["Pollo + Queso", "Jamón + Queso", "Camarón + Queso"] },
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

  // Global State initialized with embedded DB for 100% instant render
  let menuData = DEFAULT_MENU_DATA;
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

  // Immediate Initial Render (uses embedded data, no network needed)
  initRestaurantInfo();
  renderCategories();
  renderProducts();
  updateCartUI();

  // Load Data from JSON DB in background
  async function loadMenuData() {
    try {
      const response = await fetch('data/menu.json');
      if (response.ok) {
        menuData = await response.json();
        initRestaurantInfo();
        renderCategories();
        renderProducts();
      }
    } catch (error) {
      console.log('Usando base de datos incorporada:', error);
    }
  }

  // Populate metadata from JSON DB
  function initRestaurantInfo() {
    if (!menuData || !menuData.info) return;
    const info = menuData.info;

    if (contactPhoneEl) contactPhoneEl.textContent = info.whatsapp_display;
    if (contactScheduleEl) contactScheduleEl.textContent = info.horario;

    if (contactInstagramLink) {
      contactInstagramLink.href = info.instagram_url;
      contactInstagramLink.textContent = info.instagram_handle;
    }

    // Direct WhatsApp Links
    const waUrl = `https://wa.me/${info.phone}?text=${encodeURIComponent('¡Hola BestSushi! 👋 Quisiera hacer una consulta / pedido.')}`;
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
      });
      categoriesNav.appendChild(btn);
    });
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

      card.innerHTML = `
        <div class="product-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
          <span class="product-badge ${item.popular ? 'red' : ''}">${item.badge}</span>
        </div>
        <div class="product-content">
          <h3 class="product-title">${item.title}</h3>
          <p class="product-desc">${item.description}</p>
          <div class="product-footer">
            <span class="product-price">${item.price_display}</span>
            <button class="btn-add-item" data-id="${item.id}">
              <i class="fas ${item.customizable ? 'fa-sliders-h' : 'fa-plus'}"></i>
              ${item.customizable ? 'Agregar al pedido' : 'Agregar'}
            </button>
          </div>
        </div>
      `;

      // Event Listener
      const addBtn = card.querySelector('.btn-add-item');
      addBtn.addEventListener('click', () => handleAddProductClick(item));

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

  function openConfiguratorSection(item) {
    activeCustomizingItem = item;
    selectedOptions = {};
    selectedUnitOptions = {};
    selectedGeneralOptions = {};

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
      tabsBar.style.cssText = 'display: flex; gap: 8px; margin-bottom: 1.2rem; overflow-x: auto; padding-bottom: 4px; border-bottom: 1px solid var(--border-subtle);';

      const unitContainers = [];

      for (let u = 1; u <= unitsCount; u++) {
        selectedUnitOptions[u] = {};

        // Tab Button
        const tabBtn = document.createElement('button');
        tabBtn.type = 'button';
        tabBtn.className = `unit-tab-btn ${u === 1 ? 'active' : ''}`;
        tabBtn.style.cssText = `flex: 1; padding: 0.65rem 0.8rem; border-radius: 10px; border: 1px solid ${u === 1 ? 'var(--gold-primary)' : 'var(--border-subtle)'}; background: ${u === 1 ? 'rgba(212,175,55,0.18)' : 'rgba(255,255,255,0.03)'}; color: ${u === 1 ? 'var(--gold-light)' : 'var(--text-secondary)'}; font-weight: 700; cursor: pointer; white-space: nowrap; font-size: 0.88rem; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px;`;
        tabBtn.innerHTML = `<i class="fas fa-utensils"></i> ${unitLabel} #${u}`;

        tabsBar.appendChild(tabBtn);

        // Unit Container Box
        const unitBox = document.createElement('div');
        unitBox.className = 'unit-customizer-box';
        unitBox.style.cssText = `background: rgba(255,255,255,0.03); border: 1px solid var(--border-gold); border-radius: 14px; padding: 1.2rem; margin-bottom: 1.5rem; display: ${u === 1 ? 'block' : 'none'};`;

        unitContainers.push({ u, tabBtn, unitBox });

        tabBtn.addEventListener('click', () => {
          unitContainers.forEach(uc => {
            const isActive = uc.u === u;
            uc.unitBox.style.display = isActive ? 'block' : 'none';
            uc.tabBtn.style.borderColor = isActive ? 'var(--gold-primary)' : 'var(--border-subtle)';
            uc.tabBtn.style.background = isActive ? 'rgba(212,175,55,0.18)' : 'rgba(255,255,255,0.03)';
            uc.tabBtn.style.color = isActive ? 'var(--gold-light)' : 'var(--text-secondary)';
          });
        });

        Object.keys(item.per_unit_options).forEach(optKey => {
          const optGroup = item.per_unit_options[optKey];
          selectedUnitOptions[u][optKey] = [];

          const groupDiv = document.createElement('div');
          groupDiv.className = 'option-group';

          groupDiv.innerHTML = `
            <div class="option-group-title" style="font-size:0.85rem;">${optGroup.title} (Máx: ${optGroup.limit})</div>
            <div class="options-list"></div>
          `;

          const listDiv = groupDiv.querySelector('.options-list');

          optGroup.choices.forEach(choice => {
            const chip = document.createElement('div');
            chip.className = 'option-chip';
            chip.innerHTML = `<i class="far fa-circle"></i> <span>${choice}</span>`;

            chip.addEventListener('click', () => {
              toggleUnitOptionSelection(u, optKey, choice, optGroup.limit, chip);
              updateLiveSummary();
            });

            listDiv.appendChild(chip);
          });

          unitBox.appendChild(groupDiv);
        });

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

          groupDiv.innerHTML = `
            <div class="option-group-title">${optGroup.title} (Máx: ${optGroup.limit})</div>
            <div class="options-list"></div>
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

        groupDiv.innerHTML = `
          <div class="option-group-title">${optGroup.title} (Máx: ${optGroup.limit})</div>
          <div class="options-list"></div>
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
    }

    configuratorSection.style.display = 'block';
    updateLiveSummary();

    // Smooth scroll directly to the section
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
        const uStr = uChoices.length > 0 ? uChoices.join(', ') : 'Sin seleccionar';
        detailsArr.push(`${unitLabel} #${u}: [${uStr}]`);
      }
    } else {
      Object.keys(selectedOptions).forEach(k => {
        if (selectedOptions[k].length > 0) {
          detailsArr.push(selectedOptions[k].join(', '));
        }
      });
    }

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
          const uStr = uChoices.length > 0 ? uChoices.join(', ') : 'Estándar';
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
        Object.keys(selectedOptions).forEach(k => {
          if (selectedOptions[k].length > 0) {
            detailsArr.push(selectedOptions[k].join(', '));
          }
        });
      }

      const detailsStr = detailsArr.length > 0 ? detailsArr.join(' | ') : 'Personalizado';

      addToCart({
        id: activeCustomizingItem.id + '-' + Date.now(),
        productId: activeCustomizingItem.id,
        title: activeCustomizingItem.title,
        price: activeCustomizingItem.price,
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

    cartCountEl.textContent = totalCount;
    cartTotalAmount.textContent = '$' + totalAmount.toLocaleString('es-CL');

    // Show/hide Vaciar button based on cart contents
    if (cartClearBtn) {
      cartClearBtn.style.display = cart.length > 0 ? 'inline-flex' : 'none';
    }

    // Update WhatsApp link with current cart contents
    updateWhatsAppLink();

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; color: var(--text-secondary); padding: 3rem 1rem;">
          <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 1rem; color: var(--border-gold);"></i>
          <p>Tu carrito está vacío</p>
          <span style="font-size: 0.85rem;">Selecciona tus promociones favoritas para hacer tu pedido.</span>
        </div>
      `;
    } else {
      cart.forEach((item, idx) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';

        itemEl.innerHTML = `
          <div class="cart-item-header">
            <span class="cart-item-title">${item.title}</span>
            <span class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-CL')}</span>
          </div>
          <div class="cart-item-details">${item.details}</div>
          <div class="cart-item-controls">
            <div>
              <button class="quantity-btn btn-minus" data-idx="${idx}">-</button>
              <span style="margin: 0 8px; font-weight: 700;">${item.quantity}</span>
              <button class="quantity-btn btn-plus" data-idx="${idx}">+</button>
            </div>
            <button class="quantity-btn btn-remove" data-idx="${idx}" style="color: var(--red-accent); border: none;"><i class="fas fa-trash"></i></button>
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
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartBackdrop) cartBackdrop.classList.add('active');
  }
  function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartBackdrop) cartBackdrop.classList.remove('active');
  }

  if (cartBtnTrigger) cartBtnTrigger.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Card Modal Handlers (Lazy QR Image loading)
  if (openCardModalNav && cardModalOverlay) {
    openCardModalNav.addEventListener('click', (e) => {
      e.preventDefault();
      const qrImg = document.getElementById('qr-modal-img');
      if (qrImg && qrImg.dataset.src && !qrImg.src) {
        qrImg.src = qrImg.dataset.src;
      }
      cardModalOverlay.classList.add('active');
    });
  }
  if (cardModalClose && cardModalOverlay) {
    cardModalClose.addEventListener('click', () => {
      cardModalOverlay.classList.remove('active');
    });
    cardModalOverlay.addEventListener('click', (e) => {
      if (e.target === cardModalOverlay) {
        cardModalOverlay.classList.remove('active');
      }
    });
  }

  // Build WhatsApp URL from current cart state
  function buildWhatsAppUrl() {
    const phone = menuData && menuData.info ? menuData.info.phone : '56937373076';
    let text = `*¡HOLA BESTSUSHI CORONEL!* 🍱\n`;
    text += `*Nuevo Pedido desde la Página Web*\n\n`;

    cart.forEach((item, idx) => {
      text += `${idx + 1}. *${item.title}* (x${item.quantity})\n`;
      text += `   - Opciones: ${item.details}\n`;
      text += `   - Subtotal: $${(item.price * item.quantity).toLocaleString('es-CL')}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    text += `💰 *TOTAL A PAGAR: $${total.toLocaleString('es-CL')}*\n\n`;
    text += `🛵 *Modalidad:* Delivery / Retiro en local\n`;
    text += `Por favor confirmen mi pedido y tiempo estimado de entrega. ¡Muchas gracias! 🙏✨`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  // Update WhatsApp link href dynamically whenever cart changes
  function updateWhatsAppLink() {
    if (!checkoutWhatsappBtn) return;
    if (cart.length > 0) {
      checkoutWhatsappBtn.href = buildWhatsAppUrl();
    } else {
      checkoutWhatsappBtn.href = '#';
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

  // Start App
  loadMenuData();
});
