let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
    alert(`${name} đã thêm vào giỏ hàng!`);
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} VND`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    alert('Chức năng thanh toán chưa được triển khai. Vui lòng liên hệ để đặt hàng!');
}

// Hàm hiển thị chi tiết sản phẩm
function showProductDetail(productElement) {
    const img = productElement.querySelector('img').src;
    const name = productElement.querySelector('h3').textContent;
    const description = productElement.dataset.description;
    const rating = parseInt(productElement.dataset.rating);

    // Điền dữ liệu vào modal
    document.getElementById('detail-img').src = img;
    document.getElementById('detail-name').textContent = name;
    document.getElementById('detail-description').textContent = description;
    document.getElementById('detail-rating').innerHTML = renderStars(rating);

    // Hiển thị modal
    document.getElementById('product-detail-modal').style.display = 'block';

    // Thêm sự kiện cho nút "Thêm vào Giỏ" trong modal
    document.getElementById('detail-add-to-cart').onclick = () => {
        const price = parseInt(productElement.querySelector('.price').textContent.replace(/\D/g, ''));
        addToCart(name, price);
        closeProductDetail();
    };
}

// Hàm đóng modal chi tiết
function closeProductDetail() {
    document.getElementById('product-detail-modal').style.display = 'none';
}

// Hàm render sao cho rating
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<i class="fas fa-star star ${i > rating ? 'empty' : ''}"></i>`;
    }
    return stars;
}