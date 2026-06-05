// 🧭 MIDCAMERA - MAIN JS (Dùng chung cho toàn bộ website)

// Cập nhật số lượng giỏ hàng ở Header
function updateHeaderCartCount() {
    const cart = localStorage.getItem('mid_cart') ? JSON.parse(localStorage.getItem('mid_cart')) : [];
    const cartCount = document.getElementById('headerCartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Cập nhật trạng thái tài khoản trên Header
function updateHeaderAccount() {
    const user = localStorage.getItem('mid_user');
    const accountLink = document.getElementById('headerAccountIcon');
    if (!accountLink) return;

    // Kiểm tra xem trang hiện tại có phải là trang chủ nằm ở thư mục gốc hay không
    const isHomepage = document.body.classList.contains('page-trangchu');
    const prefix = isHomepage ? 'pages/' : '';

    if (user) {
        accountLink.href = prefix + "account.html";
        accountLink.title = "Trang cá nhân";
    } else {
        accountLink.href = prefix + "auth.html";
        accountLink.title = "Đăng nhập";
    }
}

// Lắng nghe sự kiện khi tài liệu đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderCartCount();
    updateHeaderAccount();
});
