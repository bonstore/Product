// products.js - Product data management
const products = {
    // Category 1 products
    category1: [
        {
            id: "c1p1",
            name: "Panel 1Gb",
            price: "Rp 1.000",
            description: "Kualitas Terbaik",
            image: "https://i.ibb.co.com/zWrhmXdg/47d333c7330d5dd8d2a28b1995d02a25.jpg",
            checkoutUrl: "https://wa.me/6285141316926?text=Halo%20Admin%0ASaya%20ingin%20mengonfirmasi%20pembelian%20dengan%20detail%20sebagai%20berikut%3A%0A%0AProduk%3A%20Panel%201Gb%0AHarga%3A%20Rp%201.000%0A%0ABerikut%20saya%20lampirkan%20bukti%20pembayaran.%0AMohon%20konfirmasinya%2C%20terima%20kasih."
        },
        {
            id: "c1p2",
            name: "Panel 2Gb",
            price: "Rp 2.000",
            description: "Kualitas Terbaik",
            image: "https://i.ibb.co.com/zWrhmXdg/47d333c7330d5dd8d2a28b1995d02a25.jpg",
            checkoutUrl: "https://wa.me/6285141316926?text=Halo%20Admin%0ASaya%20ingin%20mengonfirmasi%20pembelian%20dengan%20detail%20sebagai%20berikut%3A%0A%0AProduk%3A%20Panel%202Gb%0AHarga%3A%20Rp%202.000%0A%0ABerikut%20saya%20lampirkan%20bukti%20pembayaran.%0AMohon%20konfirmasinya%2C%20terima%20kasih.
"
        },
                {
            id: "c1p3",
            name: "Panel 4Gb",
            price: "Rp 4.000",
            description: "Kualitas Terbaik",
            image: "https://i.ibb.co.com/zWrhmXdg/47d333c7330d5dd8d2a28b1995d02a25.jpg",
            checkoutUrl: "https://wa.me/6285141316926?text=Halo%20Admin%0ASaya%20ingin%20mengonfirmasi%20pembelian%20dengan%20detail%20sebagai%20berikut%3A%0A%0AProduk%3A%20Panel%204Gb%0AHarga%3A%20Rp%204.000%0A%0ABerikut%20saya%20lampirkan%20bukti%20pembayaran.%0AMohon%20konfirmasinya%2C%20terima%20kasih.
"
        }
    ],
    
    // Category 2 products
    category2: [
        {
            id: "c2p1",
            name: "Website Template",
            price: "Rp 499.000",
            description: "Professional website template with responsive design. Easy to customize and mobile-friendly.",
            image: "https://via.placeholder.com/300x200?text=Web+Template",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Website%20Template%20dengan%20harga%20Rp%20499.000.%20Berikut%20bukti%20pembayarannya."
        },
        {
            id: "c2p2",
            name: "Social Media Kit",
            price: "Rp 349.000",
            description: "Complete social media branding kit with templates for multiple platforms and scheduling tools.",
            image: "https://via.placeholder.com/300x200?text=Social+Media",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Social%20Media%20Kit%20dengan%20harga%20Rp%20349.000.%20Berikut%20bukti%20pembayarannya."
        },
        {
            id: "c2p3",
            name: "Logo Design",
            price: "Rp 599.000",
            description: "Professional logo design with unlimited revisions. Includes source files and multiple formats.",
            image: "https://via.placeholder.com/300x200?text=Logo+Design",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Logo%20Design%20dengan%20harga%20Rp%20599.000.%20Berikut%20bukti%20pembayarannya."
        }
    ],
    
    // Category 3 products
    category3: [
        {
            id: "c3p1",
            name: "E-commerce Package",
            price: "Rp 1.499.000",
            description: "Complete e-commerce solution with payment gateway integration, inventory management, and more.",
            image: "https://via.placeholder.com/300x200?text=E-commerce",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20E-commerce%20Package%20dengan%20harga%20Rp%201.499.000.%20Berikut%20bukti%20pembayarannya."
        },
        {
            id: "c3p2",
            name: "Mobile App Development",
            price: "Rp 2.999.000",
            description: "Custom mobile application development for Android and iOS with ongoing support.",
            image: "https://via.placeholder.com/300x200?text=App+Dev",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Mobile%20App%20Development%20dengan%20harga%20Rp%202.999.000.%20Berikut%20bukti%20pembayarannya."
        },
        {
            id: "c3p3",
            name: "Business Analytics",
            price: "Rp 799.000",
            description: "Advanced business analytics and reporting tools to track your website performance.",
            image: "https://via.placeholder.com/300x200?text=Analytics",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Business%20Analytics%20dengan%20harga%20Rp%20799.000.%20Berikut%20bukti%20pembayarannya."
        }
    ],
    
    // Category 4 products
    category4: [
        {
            id: "c4p1",
            name: "Content Writing",
            price: "Rp 399.000",
            description: "Professional content writing service for your website, blog, or social media platforms.",
            image: "https://via.placeholder.com/300x200?text=Content",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Content%20Writing%20dengan%20harga%20Rp%20399.000.%20Berikut%20bukti%20pembayarannya."
        },
        {
            id: "c4p2",
            name: "Digital Marketing",
            price: "Rp 1.299.000",
            description: "Comprehensive digital marketing strategy including SEO, PPC, and social media marketing.",
            image: "https://via.placeholder.com/300x200?text=Marketing",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Digital%20Marketing%20dengan%20harga%20Rp%201.299.000.%20Berikut%20bukti%20pembayarannya."
        },
        {
            id: "c4p3",
            name: "Video Production",
            price: "Rp 1.899.000",
            description: "Professional video production service for promotional content and social media campaigns.",
            image: "https://via.placeholder.com/300x200?text=Video",
            checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Video%20Production%20dengan%20harga%20Rp%201.899.000.%20Berikut%20bukti%20pembayarannya."
        }
    ]
};

// Function to generate HTML for product cards
function generateProductCards(categoryId) {
    const category = products[categoryId];
    if (!category) return '<p>Category not found</p>';
    
    let cardsHTML = '<div class="product-grid">';
    
    category.forEach(product => {
        cardsHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">${product.price}</span>
                    <button class="buy-btn" data-product-id="${product.id}">Buy Now</button>
                </div>
            </div>
        `;
    });
    
    cardsHTML += '</div>';
    return cardsHTML;
}

// Function to load products for a specific tab
function loadProductsForTab(tabId) {
    const categoryMapping = {
        'product1': 'category1',
        'product2': 'category2',
        'product3': 'category3',
        'product4': 'category4'
    };
    
    const categoryId = categoryMapping[tabId];
    const tabElement = document.getElementById(tabId);
    
    if (tabElement && categoryId) {
        tabElement.innerHTML = generateProductCards(categoryId);
    }
}

// Function to get checkout URL for a product
function getCheckoutUrl(productId) {
    // Search through all categories for the product
    for (const category in products) {
        const productFound = products[category].find(p => p.id === productId);
        if (productFound) {
            return productFound.checkoutUrl;
        }
    }
    return null;
}

// Load products when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load initial products
    loadProductsForTab('product1');
    
    // Add event handlers to Buy buttons
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('buy-btn')) {
            const productId = e.target.getAttribute('data-product-id');
            // Navigate to checkout page with product ID
            window.location.href = `checkout.html?id=${productId}`;
        }
    });
});

// Export for use in other scripts if needed
window.productManager = {
    products,
    loadProductsForTab,
    getCheckoutUrl
};
