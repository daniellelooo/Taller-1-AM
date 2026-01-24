const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchCloseBtn = document.getElementById('searchCloseBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    searchBar.classList.add('active');
    setTimeout(() => {
        searchInput.focus();
    }, 100);
});

searchCloseBtn.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchInput.value = '';
});

const heroSlider = document.getElementById('heroSlider');
let isDown = false;
let startX;
let scrollLeft;

heroSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    heroSlider.style.cursor = 'grabbing';
    startX = e.pageX - heroSlider.offsetLeft;
    scrollLeft = heroSlider.scrollLeft;
});

heroSlider.addEventListener('mouseleave', () => {
    isDown = false;
    heroSlider.style.cursor = 'grab';
});

heroSlider.addEventListener('mouseup', () => {
    isDown = false;
    heroSlider.style.cursor = 'grab';
});

heroSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - heroSlider.offsetLeft;
    const walk = (x - startX) * 2;
    heroSlider.scrollLeft = scrollLeft - walk;
});

heroSlider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - heroSlider.offsetLeft;
    scrollLeft = heroSlider.scrollLeft;
});

heroSlider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - heroSlider.offsetLeft;
    const walk = (x - startX) * 2;
    heroSlider.scrollLeft = scrollLeft - walk;
});

const heroPrevBtn = document.getElementById('heroPrevBtn');
const heroNextBtn = document.getElementById('heroNextBtn');

heroPrevBtn.addEventListener('click', () => {
    heroSlider.scrollBy({
        left: -heroSlider.offsetWidth,
        behavior: 'smooth'
    });
});

heroNextBtn.addEventListener('click', () => {
    heroSlider.scrollBy({
        left: heroSlider.offsetWidth,
        behavior: 'smooth'
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const productsGrid = document.getElementById('productsGrid');

const products = [
    {
        name: 'Daydreamer tee',
        price: '$30',
        category: 'clothing',
        isNew: true,
        img1: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Here, there, everywhere tee',
        price: '$30',
        category: 'clothing',
        isNew: true,
        img1: 'https://images.pexels.com/photos/3054549/pexels-photo-3054549.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Thinking cap',
        price: '$22',
        category: 'accessories',
        isNew: true,
        img1: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Here, there, everywhere crewneck',
        price: '$50',
        category: 'clothing',
        isNew: true,
        img1: 'https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Socks pack',
        price: '$18',
        category: 'accessories',
        isNew: false,
        img1: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Plushie keychain',
        price: '$25',
        category: 'accessories',
        isNew: false,
        img1: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/2783832/pexels-photo-2783832.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Logo crewneck',
        price: '$45',
        category: 'clothing',
        isNew: false,
        img1: 'https://images.pexels.com/photos/6954204/pexels-photo-6954204.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/6954206/pexels-photo-6954206.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Beanie',
        price: '$20',
        category: 'accessories',
        isNew: false,
        img1: 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=600',
        img2: 'https://images.pexels.com/photos/5858237/pexels-photo-5858237.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];

function renderProducts(filteredProducts) {
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const newBadge = product.isNew ? '<div class="new-badge">New!</div>' : '';
        const productCard = `
            <div class="product-wrapper" data-category="${product.category}">
                <div class="product-card">
                    <div class="product-image">
                        ${newBadge}
                        <img src="${product.img1}" alt="${product.name}" class="img-primary">
                        <img src="${product.img2}" alt="${product.name}" class="img-hover">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.filter;
        filterProducts(category);
    });
});

renderProducts(products);

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Added!';
        btn.style.backgroundColor = 'var(--green)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 1500);
        
        const cartBtn = document.querySelector('.cart-btn');
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = '';
        }, 300);
    }
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
});

const rotatingCircle = document.querySelector('.rotating-circle');

rotatingCircle.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

