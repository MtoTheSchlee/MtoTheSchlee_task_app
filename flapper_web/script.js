function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const container = document.getElementById('products');
  if (!container) return;
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.textContent = `${p.name} (${p.category}) - Code: ${p.code}`;
    container.appendChild(div);
  });
}

function loadAdminProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const container = document.getElementById('product-admin-list');
  if (!container) return;
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.textContent = `${p.name} (${p.category}) - Code: ${p.code}`;
    container.appendChild(div);
  });
}

function generateCode(name) {
  return name.replace(/\s+/g, '').toUpperCase() + '-' + Math.floor(Math.random() * 10000);
}

const form = document.getElementById('add-product-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value.trim();
    const video = document.getElementById('video').value.trim();
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const code = generateCode(name);
    products.push({ name, category, video, code });
    localStorage.setItem('products', JSON.stringify(products));
    form.reset();
    loadAdminProducts();
  });
  loadAdminProducts();
} else {
  loadProducts();
}
