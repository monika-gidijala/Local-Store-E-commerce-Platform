/* =============================================
   LOCALMART — App Logic (app.js)
   ============================================= */

// ========================
// DATA
// ========================

const CATEGORIES = [
  { id: 'all', name: 'All', emoji: '🛒' },
  { id: 'groceries', name: 'Groceries', emoji: '🥦' },
  { id: 'electronics', name: 'Electronics', emoji: '📱' },
  { id: 'clothing', name: 'Clothing', emoji: '👕' },
  { id: 'beauty', name: 'Beauty', emoji: '🧴' },
  { id: 'dairy', name: 'Dairy', emoji: '🥛' },
  { id: 'bakery', name: 'Bakery', emoji: '🍞' },
  { id: 'snacks', name: 'Snacks', emoji: '🍿' },
];

const PRODUCTS = [
  // Groceries
  { id: 1, name: 'Fresh Broccoli', category: 'groceries', emoji: '🥦', price: 49, originalPrice: 70, desc: 'Crisp, farm-fresh broccoli. Rich in vitamins C and K. Perfect for stir-fries and salads.', rating: 4.7, reviews: 128, inStock: true, badge: 'fresh' },
  { id: 2, name: 'Red Apples (1kg)', category: 'groceries', emoji: '🍎', price: 129, originalPrice: 160, desc: 'Sweet and crunchy red apples sourced from the Himalayas. Great for snacking.', rating: 4.8, reviews: 214, inStock: true, badge: 'hot' },
  { id: 3, name: 'Organic Tomatoes', category: 'groceries', emoji: '🍅', price: 39, originalPrice: 55, desc: 'Vine-ripened, organically grown tomatoes. Perfect for curries, salads, and sauces.', rating: 4.5, reviews: 89, inStock: true, badge: null },
  { id: 4, name: 'Yellow Bananas', category: 'groceries', emoji: '🍌', price: 29, originalPrice: 40, desc: 'Sweet, ripe bananas — great energy source. Perfect for smoothies and snacks.', rating: 4.6, reviews: 175, inStock: true, badge: null },
  { id: 5, name: 'Baby Spinach (250g)', category: 'groceries', emoji: '🌿', price: 59, originalPrice: 80, desc: 'Tender baby spinach, washed and ready to use. Packed with iron and folate.', rating: 4.4, reviews: 63, inStock: false, badge: null },
  { id: 6, name: 'Carrots (500g)', category: 'groceries', emoji: '🥕', price: 35, originalPrice: 50, desc: 'Sweet, crunchy carrots. A great source of beta-carotene. Ideal for cooking or snacking.', rating: 4.6, reviews: 102, inStock: true, badge: null },

  // Electronics
  { id: 7, name: 'Wireless Earbuds', category: 'electronics', emoji: '🎧', price: 1299, originalPrice: 1999, desc: 'True wireless earbuds with 30hr battery, active noise cancellation and IPX5 water resistance.', rating: 4.5, reviews: 389, inStock: true, badge: 'hot' },
  { id: 8, name: 'USB-C Charging Cable', category: 'electronics', emoji: '🔌', price: 199, originalPrice: 299, desc: 'Braided nylon 3A fast-charging cable, 2m length. Compatible with all USB-C devices.', rating: 4.3, reviews: 512, inStock: true, badge: null },
  { id: 9, name: 'Power Bank 20000mAh', category: 'electronics', emoji: '🔋', price: 1799, originalPrice: 2499, desc: 'Slim 20000mAh power bank with 22.5W fast charge and dual USB output.', rating: 4.7, reviews: 267, inStock: true, badge: 'new' },
  { id: 10, name: 'LED Desk Lamp', category: 'electronics', emoji: '💡', price: 799, originalPrice: 1199, desc: 'Smart LED desk lamp with 5 brightness levels, USB charging port and touch control.', rating: 4.4, reviews: 144, inStock: true, badge: null },

  // Clothing
  { id: 11, name: 'Classic White Tee', category: 'clothing', emoji: '👕', price: 499, originalPrice: 799, desc: '100% cotton premium white t-shirt. Relaxed fit. Available in all sizes. Machine washable.', rating: 4.5, reviews: 423, inStock: true, badge: null },
  { id: 12, name: 'Denim Jacket', category: 'clothing', emoji: '🧥', price: 1999, originalPrice: 2999, desc: 'Vintage-inspired denim jacket with multiple pockets. Slim fit. Durable and stylish.', rating: 4.6, reviews: 188, inStock: true, badge: 'hot' },
  { id: 13, name: 'Sports Sneakers', category: 'clothing', emoji: '👟', price: 1499, originalPrice: 2199, desc: 'Lightweight and breathable sports sneakers with memory foam insoles and durable rubber outsole.', rating: 4.8, reviews: 531, inStock: true, badge: 'new' },
  { id: 14, name: 'Jogger Pants', category: 'clothing', emoji: '👖', price: 799, originalPrice: 1299, desc: 'Comfortable jogger pants in cotton-blend fabric with elastic waistband and side pockets.', rating: 4.3, reviews: 215, inStock: false, badge: null },

  // Beauty
  { id: 15, name: 'Face Wash', category: 'beauty', emoji: '🧴', price: 149, originalPrice: 220, desc: 'Gentle foaming face wash with aloe vera and neem. Removes dirt, oil and impurities.', rating: 4.6, reviews: 319, inStock: true, badge: null },
  { id: 16, name: 'Moisturiser SPF50', category: 'beauty', emoji: '☀️', price: 349, originalPrice: 499, desc: 'Lightweight day moisturiser with SPF50 sun protection and vitamin C. Non-greasy formula.', rating: 4.7, reviews: 278, inStock: true, badge: 'hot' },
  { id: 17, name: 'Lip Balm Set', category: 'beauty', emoji: '💄', price: 199, originalPrice: 299, desc: 'Set of 6 tinted and flavored lip balms with shea butter and vitamin E for soft, hydrated lips.', rating: 4.5, reviews: 147, inStock: true, badge: 'new' },

  // Dairy
  { id: 18, name: 'Full Cream Milk (1L)', category: 'dairy', emoji: '🥛', price: 65, originalPrice: 72, desc: 'Fresh, pasteurised full-cream milk. Rich in calcium and protein. From trusted local farms.', rating: 4.8, reviews: 641, inStock: true, badge: null },
  { id: 19, name: 'Greek Yoghurt (400g)', category: 'dairy', emoji: '🫙', price: 129, originalPrice: 165, desc: 'Thick and creamy Greek-style yoghurt, high in protein. Perfect with fruits and granola.', rating: 4.7, reviews: 298, inStock: true, badge: 'new' },
  { id: 20, name: 'Cheddar Cheese (200g)', category: 'dairy', emoji: '🧀', price: 219, originalPrice: 279, desc: 'Aged cheddar cheese with a sharp, tangy flavour. Great for sandwiches, pasta and snacking.', rating: 4.6, reviews: 183, inStock: true, badge: null },
  { id: 21, name: 'Butter (500g)', category: 'dairy', emoji: '🧈', price: 199, originalPrice: 240, desc: 'Pure, creamy salted butter made from fresh cream. Perfect for baking and spreading.', rating: 4.5, reviews: 421, inStock: false, badge: null },

  // Bakery
  { id: 22, name: 'Whole Wheat Bread', category: 'bakery', emoji: '🍞', price: 55, originalPrice: 70, desc: 'Freshly baked 100% whole wheat bread loaf. High fibre, no preservatives. 600g.', rating: 4.5, reviews: 387, inStock: true, badge: null },
  { id: 23, name: 'Croissant (Pack of 4)', category: 'bakery', emoji: '🥐', price: 129, originalPrice: 180, desc: 'Flaky, buttery croissants baked fresh every morning. Perfect with jam or cheese.', rating: 4.8, reviews: 524, inStock: true, badge: 'hot' },
  { id: 24, name: 'Chocolate Muffins (6)', category: 'bakery', emoji: '🧁', price: 199, originalPrice: 260, desc: 'Moist and rich double chocolate muffins with chocolate chips. Freshly baked daily.', rating: 4.9, reviews: 612, inStock: true, badge: 'hot' },

  // Snacks
  { id: 25, name: 'Popcorn (Butter)', category: 'snacks', emoji: '🍿', price: 79, originalPrice: 100, desc: 'Light, airy butter popcorn. Ideal movie snack. Low in calories. 150g resealable bag.', rating: 4.4, reviews: 289, inStock: true, badge: null },
  { id: 26, name: 'Mixed Nuts (250g)', category: 'snacks', emoji: '🥜', price: 299, originalPrice: 399, desc: 'Premium mix of almonds, cashews, walnuts and pistachios. Lightly salted and roasted.', rating: 4.7, reviews: 341, inStock: true, badge: 'new' },
  { id: 27, name: 'Dark Chocolate Bar', category: 'snacks', emoji: '🍫', price: 99, originalPrice: 130, desc: '72% dark chocolate bar with subtle bitter notes. Vegan, gluten-free. 80g.', rating: 4.6, reviews: 213, inStock: true, badge: null },
];

const SAMPLE_REVIEWS = {
  1: [{ author: 'Priya S.', stars: 5, text: 'Super fresh! Arrived within the hour. Will definitely order again.' }, { author: 'Rahul M.', stars: 4, text: 'Good quality. Packaging was great and delivery was fast.' }],
  7: [{ author: 'Arjun K.', stars: 5, text: 'Amazing earbuds for the price. ANC works brilliantly!' }, { author: 'Sneha R.', stars: 4, text: 'Great sound quality. Battery life is excellent.' }],
  13: [{ author: 'Vikram P.', stars: 5, text: 'Super comfortable! Wore them all day with no issues.' }, { author: 'Anita B.', stars: 5, text: 'Perfect fit and stylish. Very happy with this purchase.' }],
};

const FAQS = [
  { q: 'How fast is delivery?', a: 'We offer same-day delivery within 2 hours for most areas. Delivery is free on all orders!' },
  { q: 'How do I track my order?', a: 'Go to "My Orders" page, enter your Order ID, and you\'ll see real-time tracking updates.' },
  { q: 'Can I return a product?', a: 'Yes! We have a 7-day easy return policy. Just contact support and we\'ll arrange a pickup.' },
  { q: 'What payment methods are accepted?', a: 'We accept Cash on Delivery, UPI (GPay, PhonePe, Paytm), Credit/Debit Cards and Net Banking.' },
  { q: 'Are the products fresh?', a: 'Absolutely. Our groceries are sourced fresh daily from local farms and suppliers.' },
  { q: 'Do you have a loyalty program?', a: 'Yes! Earn 1 point per ₹10 spent. Redeem 100 points for ₹10 off your next order.' },
];

const BOT_REPLIES = [
  "I'm happy to help! Could you share your Order ID so I can check the status?",
  "Thank you for reaching out. Our team will get back to you within 30 minutes.",
  "I understand your concern. Let me pull up the details right away!",
  "Great news — we can process a replacement or refund for that order.",
  "Is there anything else I can help you with? 😊",
  "Our delivery team is on the way. Expected arrival within 45 minutes.",
];

// ========================
// STATE
// ========================
let cart = JSON.parse(localStorage.getItem('lm_cart') || '[]');
let orders = JSON.parse(localStorage.getItem('lm_orders') || '[]');
let wishlist = JSON.parse(localStorage.getItem('lm_wishlist') || '[]');
let selectedCategory = 'all';
let currentFilters = { maxPrice: 5000, minRating: 0, inStock: false };
let currentSort = 'default';
let currentSearch = '';
let currentModalProduct = null;
let currentQty = 1;
let selectedStars = 0;
let botReplyIdx = 0;

// ========================
// UTILITY
// ========================
const $ = id => document.getElementById(id);
const qs = sel => document.querySelector(sel);

function showToast(msg, isError = false) {
  const t = $('toast');
  t.textContent = msg;
  t.style.background = isError ? '#ef4444' : 'linear-gradient(135deg, #6c63ff, #a855f7)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

function saveCart() { localStorage.setItem('lm_cart', JSON.stringify(cart)); }
function saveOrders() { localStorage.setItem('lm_orders', JSON.stringify(orders)); }
function saveWishlist() { localStorage.setItem('lm_wishlist', JSON.stringify(wishlist)); }

function genOrderId() {
  const d = new Date();
  const rand = Math.floor(Math.random() * 900 + 100);
  return `LM-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${rand}`;
}

// ========================
// PAGE NAVIGATION
// ========================
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const el = $(`page-${page}`);
  if (el) el.classList.add('active');

  document.querySelectorAll(`[data-page="${page}"]`).forEach(l => l.classList.add('active'));

  // Close mobile nav
  $('mobile-nav').classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'orders') renderOrders();
  if (page === 'shop') { renderShopGrid(); }
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// Hamburger
$('hamburger').addEventListener('click', () => {
  $('mobile-nav').classList.toggle('open');
});

// Logo → home
$('logo-btn').addEventListener('click', () => navigateTo('home'));

// ========================
// CATEGORIES (HOME)
// ========================
function renderCategories() {
  const grid = $('categories-grid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card ${selectedCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
      <span class="cat-emoji">${c.emoji}</span>
      <span class="cat-name">${c.name}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedCategory = card.dataset.cat;
      navigateTo('shop');
      setTimeout(() => renderShopGrid(), 50);
    });
  });
}

// ========================
// PRODUCT CARD
// ========================
function productCard(p, featured = false) {
  const discountPct = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const badgeHTML = p.badge === 'hot' ? `<div class="product-badge badge-hot">🔥 Hot</div>`
    : p.badge === 'new' ? `<div class="product-badge badge-new">✨ New</div>`
    : p.badge === 'fresh' ? `<div class="product-badge">🌿 Fresh</div>`
    : discountPct > 0 ? `<div class="product-badge">${discountPct}% OFF</div>` : '';

  const isWished = wishlist.includes(p.id);

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${badgeHTML}
        <button class="wishlist-btn ${isWished ? 'liked' : ''}" data-wish="${p.id}" title="Wishlist">
          ${isWished ? '❤️' : '🤍'}
        </button>
        <span class="product-emoji">${p.emoji}</span>
        ${!p.inStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-meta">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.originalPrice ? `<span class="product-original">${formatPrice(p.originalPrice)}</span>` : ''}
          </div>
          <span class="product-rating">⭐ ${p.rating} <span>(${p.reviews})</span></span>
        </div>
      </div>
      <div class="product-actions">
        <button class="add-cart-btn ${!p.inStock ? 'disabled' : ''}" data-add="${p.id}" ${!p.inStock ? 'disabled' : ''}>
          ${p.inStock ? '+ Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  `;
}

function attachProductEvents(container) {
  container.querySelectorAll('.product-card').forEach(card => {
    // Click → open modal
    card.addEventListener('click', e => {
      if (e.target.closest('.add-cart-btn') || e.target.closest('.wishlist-btn')) return;
      const id = parseInt(card.dataset.id);
      openProductModal(id);
    });
  });

  container.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (btn.disabled) return;
      addToCart(parseInt(btn.dataset.add));
    });
  });

  container.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.wish));
    });
  });
}

// ========================
// FEATURED GRID
// ========================
function renderFeatured() {
  const grid = $('featured-grid');
  const featured = PRODUCTS.filter(p => p.badge || p.rating >= 4.7).slice(0, 8);
  grid.innerHTML = featured.map(p => productCard(p, true)).join('');
  attachProductEvents(grid);
}

// ========================
// SHOP GRID (with filters/sort/search)
// ========================
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category
  if (selectedCategory !== 'all') list = list.filter(p => p.category === selectedCategory);

  // Search
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  // Price
  list = list.filter(p => p.price <= currentFilters.maxPrice);

  // Rating
  if (currentFilters.minRating > 0) list = list.filter(p => p.rating >= currentFilters.minRating);

  // Stock
  if (currentFilters.inStock) list = list.filter(p => p.inStock);

  // Sort
  if (currentSort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (currentSort === 'rating') list.sort((a, b) => b.rating - a.rating);
  else if (currentSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

function renderShopGrid() {
  const grid = $('shop-grid');
  const list = getFilteredProducts();
  $('results-info').textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    grid.innerHTML = '';
    $('no-results').classList.remove('hidden');
  } else {
    $('no-results').classList.add('hidden');
    grid.innerHTML = list.map(p => productCard(p)).join('');
    attachProductEvents(grid);
  }

  // Render category filters in sidebar
  renderCatFilter();
}

function renderCatFilter() {
  const el = $('cat-filter');
  el.innerHTML = CATEGORIES.map(c => `
    <label>
      <input type="radio" name="cat-filter" value="${c.id}" ${selectedCategory === c.id ? 'checked' : ''} />
      ${c.emoji} ${c.name}
    </label>
  `).join('');
  el.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('change', () => {
      selectedCategory = inp.value;
      renderShopGrid();
    });
  });
}

// Sort
$('sort-select').addEventListener('change', () => {
  currentSort = $('sort-select').value;
  renderShopGrid();
});

// Price range
$('price-range').addEventListener('input', () => {
  currentFilters.maxPrice = parseInt($('price-range').value);
  $('price-max-label').textContent = formatPrice(currentFilters.maxPrice);
  renderShopGrid();
});

// Rating filter
document.querySelectorAll('input[name="rating"]').forEach(inp => {
  inp.addEventListener('change', () => {
    currentFilters.minRating = parseInt(inp.value);
    renderShopGrid();
  });
});

// Stock filter
$('in-stock-filter').addEventListener('change', () => {
  currentFilters.inStock = $('in-stock-filter').checked;
  renderShopGrid();
});

// Clear filters
$('clear-filters-btn').addEventListener('click', () => {
  selectedCategory = 'all';
  currentFilters = { maxPrice: 5000, minRating: 0, inStock: false };
  currentSort = 'default';
  currentSearch = '';
  $('price-range').value = 5000;
  $('price-max-label').textContent = '₹5000';
  $('sort-select').value = 'default';
  $('in-stock-filter').checked = false;
  $('search-input').value = '';
  document.querySelector('input[name="rating"][value="0"]').checked = true;
  renderShopGrid();
});

// Filter toggle (mobile)
$('filter-toggle-btn').addEventListener('click', () => {
  $('filters-sidebar').classList.toggle('mobile-open');
});

// Search
$('search-btn').addEventListener('click', doSearch);
$('search-input').addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
function doSearch() {
  currentSearch = $('search-input').value;
  navigateTo('shop');
  setTimeout(() => renderShopGrid(), 50);
}

// View all & shop nav
$('view-all-btn').addEventListener('click', () => { selectedCategory = 'all'; navigateTo('shop'); setTimeout(() => renderShopGrid(), 50); });
$('hero-shop-btn').addEventListener('click', () => { navigateTo('shop'); setTimeout(() => renderShopGrid(), 50); });
$('hero-track-btn').addEventListener('click', () => navigateTo('orders'));
$('orders-shop-btn').addEventListener('click', () => { navigateTo('shop'); setTimeout(() => renderShopGrid(), 50); });
$('cart-shop-btn').addEventListener('click', () => { closeCart(); navigateTo('shop'); setTimeout(() => renderShopGrid(), 50); });

// ========================
// PRODUCT MODAL
// ========================
function starsHTML(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    s += i <= Math.round(rating) ? '⭐' : '☆';
  }
  return s;
}

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  currentQty = 1;
  selectedStars = 0;

  const reviews = SAMPLE_REVIEWS[id] || [];

  $('modal-content').innerHTML = `
    <div class="modal-product">
      <div class="modal-img">${p.emoji}</div>
      <div class="modal-details">
        <div class="modal-title">${p.name}</div>
        <div class="modal-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span style="color:var(--text-muted);font-size:0.9rem">${p.rating} (${p.reviews} reviews)</span>
        </div>
        <div class="modal-price">${formatPrice(p.price)}
          ${p.originalPrice ? `<span class="product-original" style="font-size:1rem">${formatPrice(p.originalPrice)}</span>` : ''}
        </div>
        <div class="modal-desc">${p.desc}</div>
        <div style="font-size:0.85rem;color:${p.inStock ? 'var(--accent2)' : 'var(--danger)'}">
          ${p.inStock ? '✅ In Stock' : '❌ Out of Stock'}
        </div>
        ${p.inStock ? `
        <div class="modal-qty">
          <button class="qty-btn" id="qty-minus">−</button>
          <span class="qty-value" id="qty-val">1</span>
          <button class="qty-btn" id="qty-plus">+</button>
        </div>
        <button class="btn-primary" id="modal-add-cart-btn">🛒 Add to Cart</button>
        ` : `<button class="btn-primary" disabled style="opacity:0.5;cursor:not-allowed">Out of Stock</button>`}
      </div>

      <div class="reviews-section">
        <h3>Customer Reviews (${reviews.length})</h3>
        <div class="review-list">
          ${reviews.length ? reviews.map(r => `
            <div class="review-item">
              <div class="review-header">
                <span class="review-author">${r.author}</span>
                <span class="review-stars">${starsHTML(r.stars)}</span>
              </div>
              <div class="review-text">${r.text}</div>
            </div>
          `).join('') : '<p style="color:var(--text-muted);font-size:0.9rem">No reviews yet. Be the first!</p>'}
        </div>

        <div class="add-review">
          <p style="font-weight:600;margin-bottom:0.5rem;font-size:0.9rem">Leave a Review</p>
          <div class="star-picker" id="star-picker">
            ${[1,2,3,4,5].map(i => `<span class="star-pick" data-val="${i}">⭐</span>`).join('')}
          </div>
          <textarea id="review-input" rows="3" placeholder="Share your thoughts about this product…"></textarea>
          <button class="btn-primary" id="submit-review-btn">Submit Review</button>
        </div>
      </div>
    </div>
  `;

  // Qty controls
  if (p.inStock) {
    $('qty-minus').addEventListener('click', () => { if (currentQty > 1) { currentQty--; $('qty-val').textContent = currentQty; } });
    $('qty-plus').addEventListener('click', () => { if (currentQty < 10) { currentQty++; $('qty-val').textContent = currentQty; } });
    $('modal-add-cart-btn').addEventListener('click', () => {
      for (let i = 0; i < currentQty; i++) addToCart(p.id, false);
      showToast(`${currentQty}x ${p.name} added to cart! 🛒`);
      closeProductModal();
    });
  }

  // Star picker
  const picks = document.querySelectorAll('.star-pick');
  picks.forEach(pick => {
    pick.addEventListener('click', () => {
      selectedStars = parseInt(pick.dataset.val);
      picks.forEach((p2, i) => p2.classList.toggle('active', i < selectedStars));
    });
    pick.addEventListener('mouseover', () => {
      const v = parseInt(pick.dataset.val);
      picks.forEach((p2, i) => p2.classList.toggle('active', i < v));
    });
    pick.addEventListener('mouseout', () => {
      picks.forEach((p2, i) => p2.classList.toggle('active', i < selectedStars));
    });
  });

  $('submit-review-btn').addEventListener('click', () => {
    const txt = $('review-input').value.trim();
    if (!txt || selectedStars === 0) { showToast('Please select stars and write a review!', true); return; }
    if (!SAMPLE_REVIEWS[id]) SAMPLE_REVIEWS[id] = [];
    SAMPLE_REVIEWS[id].unshift({ author: 'You', stars: selectedStars, text: txt });
    showToast('Review submitted! Thanks 🙌');
    openProductModal(id); // re-render
  });

  $('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  $('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

$('modal-close').addEventListener('click', closeProductModal);
$('product-modal').addEventListener('click', e => { if (e.target === $('product-modal')) closeProductModal(); });

// ========================
// CART
// ========================
function addToCart(id, notify = true) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !p.inStock) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
  if (notify) showToast(`${p.name} added to cart! 🛒`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = $('cart-badge');
  badge.textContent = total;
  badge.classList.add('pulse');
  setTimeout(() => badge.classList.remove('pulse'), 400);
}

function renderCartItems() {
  const total = getCartTotal();
  const isEmpty = cart.length === 0;

  $('cart-empty').style.display = isEmpty ? 'flex' : 'none';
  $('cart-items-container').classList.toggle('hidden', isEmpty);
  $('cart-footer').classList.toggle('hidden', isEmpty);

  if (!isEmpty) {
    $('cart-items-container').innerHTML = cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-emoji">${p.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatPrice(p.price * item.qty)}</div>
          </div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" data-cart-minus="${p.id}">−</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="cart-qty-btn" data-cart-plus="${p.id}">+</button>
            <button class="cart-remove-btn" data-cart-remove="${p.id}">🗑</button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('[data-cart-minus]').forEach(b => b.addEventListener('click', () => updateCartQty(parseInt(b.dataset.cartMinus), -1)));
    document.querySelectorAll('[data-cart-plus]').forEach(b => b.addEventListener('click', () => updateCartQty(parseInt(b.dataset.cartPlus), 1)));
    document.querySelectorAll('[data-cart-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(parseInt(b.dataset.cartRemove))));

    $('cart-subtotal').textContent = formatPrice(total);
    $('cart-total').textContent = formatPrice(total);
    $('co-total').textContent = formatPrice(total);
  }
}

function openCart() {
  $('cart-drawer').classList.add('open');
  $('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  $('cart-drawer').classList.remove('open');
  $('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

$('cart-btn').addEventListener('click', openCart);
$('cart-close-btn').addEventListener('click', closeCart);
$('cart-overlay').addEventListener('click', closeCart);
$('checkout-btn').addEventListener('click', () => {
  closeCart();
  $('co-total').textContent = formatPrice(getCartTotal());
  $('checkout-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
});

// ========================
// WISHLIST
// ========================
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  const p = PRODUCTS.find(x => x.id === id);
  if (idx === -1) {
    wishlist.push(id);
    showToast(`${p.name} added to wishlist! ❤️`);
  } else {
    wishlist.splice(idx, 1);
    showToast(`Removed from wishlist`);
  }
  saveWishlist();
  // Re-render visible cards
  renderFeatured();
  renderShopGrid();
}

// ========================
// CHECKOUT
// ========================
$('checkout-modal-close').addEventListener('click', () => {
  $('checkout-modal').classList.remove('open');
  document.body.style.overflow = '';
});
$('checkout-modal').addEventListener('click', e => {
  if (e.target === $('checkout-modal')) { $('checkout-modal').classList.remove('open'); document.body.style.overflow = ''; }
});

$('checkout-form').addEventListener('submit', e => {
  e.preventDefault();
  const orderId = genOrderId();
  const statuses = ['Processing', 'Shipped', 'Delivered'];
  const status = statuses[Math.floor(Math.random() * 2)]; // Processing or Shipped

  const order = {
    id: orderId,
    items: cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return { name: p.name, emoji: p.emoji, qty: item.qty, price: p.price };
    }),
    total: getCartTotal(),
    status,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    address: $('co-address').value,
    name: $('co-name').value,
  };

  orders.unshift(order);
  saveOrders();

  cart = [];
  saveCart();
  updateCartBadge();
  renderCartItems();

  $('checkout-modal').classList.remove('open');

  $('success-order-id').textContent = `Order ID: ${orderId}`;
  $('success-modal').classList.add('open');
});

$('success-ok-btn').addEventListener('click', () => {
  $('success-modal').classList.remove('open');
  document.body.style.overflow = '';
  navigateTo('orders');
});

// ========================
// ORDERS
// ========================
function renderOrders() {
  const list = $('orders-list');
  if (orders.length === 0) {
    list.innerHTML = `<div class="empty-orders">
      <span>📦</span><p>No orders yet. Start shopping!</p>
      <button class="btn-primary" id="orders-shop-btn2">Browse Products</button>
    </div>`;
    $('orders-shop-btn2').addEventListener('click', () => { navigateTo('shop'); setTimeout(() => renderShopGrid(), 50); });
    return;
  }

  list.innerHTML = orders.map(o => `
    <div class="order-card" data-order="${o.id}">
      <div class="order-card-header">
        <span class="order-id">📦 ${o.id}</span>
        <span class="order-status status-${o.status.toLowerCase()}">${o.status}</span>
      </div>
      <div class="order-items-list">
        ${o.items.map(i => `${i.emoji} ${i.name} × ${i.qty}`).join(' · ')}
      </div>
      <div class="order-footer">
        <span class="order-total">${formatPrice(o.total)}</span>
        <span class="order-date">${o.date}</span>
      </div>
    </div>
  `).join('');
}

// Order Tracking
$('track-btn').addEventListener('click', trackOrder);
$('track-input').addEventListener('keydown', e => { if (e.key === 'Enter') trackOrder(); });
$('hero-track-btn').addEventListener('click', () => navigateTo('orders'));

function trackOrder() {
  const input = $('track-input').value.trim();
  const result = $('track-result');

  if (!input) { showToast('Please enter an Order ID', true); return; }

  const order = orders.find(o => o.id.toLowerCase() === input.toLowerCase());

  if (!order) {
    result.classList.remove('hidden');
    result.innerHTML = `<div style="color:var(--danger);font-weight:600">❌ Order not found. Please check the Order ID and try again.</div>`;
    return;
  }

  const steps = ['Confirmed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const statusIdx = {
    'Processing': 1, 'Shipped': 2, 'Out for Delivery': 3, 'Delivered': 4, 'Cancelled': -1
  };
  const currentStep = statusIdx[order.status] ?? 1;

  result.classList.remove('hidden');
  result.innerHTML = `
    <div style="margin-bottom:1rem">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
        <strong>${order.id}</strong>
        <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
      </div>
      <div style="font-size:0.9rem;color:var(--text-muted);margin-top:0.25rem">Delivered to: ${order.address}</div>
    </div>
    <div class="track-steps">
      ${steps.map((s, i) => `
        <div class="track-step ${i <= currentStep ? 'done' : ''}">
          <div class="step-dot">${i <= currentStep ? '✓' : i + 1}</div>
          <div class="step-label">${s}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ========================
// SUPPORT PAGE
// ========================
function renderFAQ() {
  $('faq-list').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-question" data-faq="${i}">
        ${f.q}
        <span class="faq-arrow">▼</span>
      </div>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

$('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Message sent! We\'ll reply within 30 minutes ✅');
  $('contact-form').reset();
});

$('faq-card').addEventListener('click', () => {
  document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
});

// ========================
// CHAT WIDGET
// ========================
$('chat-bubble').addEventListener('click', () => {
  $('chat-box').classList.toggle('hidden');
});
$('chat-close').addEventListener('click', () => $('chat-box').classList.add('hidden'));
$('live-chat-btn').addEventListener('click', () => { $('chat-box').classList.remove('hidden'); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });

$('chat-send').addEventListener('click', sendChatMsg);
$('chat-input').addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMsg(); });

function sendChatMsg() {
  const input = $('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  const msgs = $('chat-messages');
  msgs.innerHTML += `<div class="chat-msg user">${msg}</div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    const reply = BOT_REPLIES[botReplyIdx % BOT_REPLIES.length];
    botReplyIdx++;
    msgs.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1000);
}

// ========================
// INIT
// ========================
function init() {
  renderCategories();
  renderFeatured();
  renderFAQ();
  updateCartBadge();

  // Preload shop grid in background
  setTimeout(() => renderShopGrid(), 100);
}

init();
