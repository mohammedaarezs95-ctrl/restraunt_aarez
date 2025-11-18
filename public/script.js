const output = document.getElementById('output');
const btnFull = document.getElementById('btn-full');
const btnVeg = document.getElementById('btn-veg');
const btnCats = document.getElementById('btn-cats');

btnFull.addEventListener('click', () => fetchAndRender('/menu', renderMenu));
btnVeg.addEventListener('click', () => fetchAndRender('/menu/vegetarian', renderMenu));
btnCats.addEventListener('click', () => fetchAndRender('/menu/categories', renderCategories));

async function fetchAndRender(url, renderer) {
  output.innerHTML = '<p>Loading...</p>';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    renderer(data);
  } catch (err) {
    output.innerHTML = `<p class="error">Error fetching data: ${err.message}</p>`;
  }
}

function renderMenu(items) {
  if (!Array.isArray(items) || items.length === 0) {
    output.innerHTML = '<p>No menu items found.</p>';
    return;
  }
  output.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <div class="menu-left">
        <h3>${item.name} <span class="category">(${item.category})</span></h3>
        <p>${item.description}</p>
      </div>
      <div class="menu-right">
        <div class="price">₹${item.price}</div>
        <div class="${item.isVegetarian ? 'badge' : 'badge nonveg'}">${item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</div>
      </div>
    `;
    output.appendChild(div);
  });
}

function renderCategories(payload) {
  const cats = payload && payload.categories ? payload.categories : [];
  if (cats.length === 0) {
    output.innerHTML = '<p>No categories found.</p>';
    return;
  }
  output.innerHTML = '<div class="categories-list"></div>';
  const list = output.querySelector('.categories-list');
  cats.forEach(c => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `<strong>${c.name}</strong><div>Items: ${c.itemCount}</div>`;
    list.appendChild(card);
  });
}
