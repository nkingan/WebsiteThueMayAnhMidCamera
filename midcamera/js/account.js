// 👤 MIDCAMERA - ACCOUNT JS

const PRODUCT_IMAGES = {
    "canon-r50": "../images/canon_r50.jpg",
    "fuji-xt100": "../images/fuji_xt100.png",
    "fuji-xt10": "../images/fuji_xt10.jpg",
    "fuji-x100v": "../images/fuji_x100vi.jpg",
    "dji-pocket3": "../images/pocket3.jpg",
    "fuji-instax": "../images/fuji_xm5.jpg"
};

let userData = null;

document.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra session đăng nhập
    const storedUser = localStorage.getItem("mid_user");
    if (!storedUser) {
        alert("Vui lòng đăng nhập để truy cập trang cá nhân.");
        window.location.href = "auth.html";
        return;
    }

    userData = JSON.parse(storedUser);
    
    // Render profile thông tin
    renderProfile();
    renderOrdersHistory();

    // Menu click chuyển tab
    const menuItems = document.querySelectorAll(".account-menu-item:not(.btn-logout)");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const target = item.getAttribute("data-target");
            document.querySelectorAll(".account-pane").forEach(p => p.style.display = "none");
            const activePane = document.getElementById(`pane-${target}`);
            if (activePane) activePane.style.display = "block";
        });
    });

    // Nút đăng xuất
    const btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            if (confirm("Bạn có chắc chắn muốn đăng xuất khỏi tài khoản cá nhân?")) {
                localStorage.removeItem("mid_user");
                alert("Đăng xuất tài khoản thành công!");
                window.location.href = "../index.html";
            }
        });
    }

    // Form profile submit listener
    const profileForm = document.getElementById("profileForm");
    if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
            e.preventDefault();
            saveProfileChanges();
        });
    }
});

// Hiển thị thông tin profile người dùng
function renderProfile() {
    if (!userData) return;

    // Sidebar
    const sideName = document.getElementById("sidebarName");
    const sideEmail = document.getElementById("sidebarEmail");
    const sideAvatar = document.getElementById("sidebarAvatar");

    if (sideName) sideName.textContent = userData.name;
    if (sideEmail) sideEmail.textContent = userData.email;
    
    if (sideAvatar) {
        const nameParts = userData.name.split(" ");
        const initials = nameParts.map(p => p.charAt(0)).join("").toUpperCase();
        sideAvatar.textContent = initials.slice(-3);
    }

    // Form inputs
    const pName = document.getElementById("profName");
    const pEmail = document.getElementById("profEmail");
    const pPhone = document.getElementById("profPhone");
    const pCreated = document.getElementById("profCreated");
    const pAddress = document.getElementById("profAddress");

    if (pName) pName.value = userData.name;
    if (pEmail) pEmail.value = userData.email;
    if (pPhone) pPhone.value = userData.phone;
    if (pCreated) pCreated.value = userData.created || "17/12/2025";
    if (pAddress && userData.address) {
        pAddress.value = userData.address;
    }
}

// Lưu thay đổi profile
function saveProfileChanges() {
    if (!userData) return;
    
    const pName = document.getElementById("profName");
    const pEmail = document.getElementById("profEmail");
    const pPhone = document.getElementById("profPhone");
    const pAddress = document.getElementById("profAddress");

    userData.name = pName ? pName.value : userData.name;
    userData.email = pEmail ? pEmail.value : userData.email;
    userData.phone = pPhone ? pPhone.value : userData.phone;
    userData.address = pAddress ? pAddress.value : userData.address;

    localStorage.setItem("mid_user", JSON.stringify(userData));
    renderProfile();
    alert("Đã cập nhật thông tin tài khoản thành công!");
}

// Tải lịch sử đơn hàng
function renderOrdersHistory() {
    const container = document.getElementById("ordersHistoryContainer");
    if (!container) return;
    container.innerHTML = "";

    const storedOrders = localStorage.getItem("mid_orders") ? JSON.parse(localStorage.getItem("mid_orders")) : [];

    const defaultOrders = [
        {
            orderCode: "MID492817",
            date: "25/05/2026",
            status: "Đang thuê",
            paymentMethod: "Chuyển khoản QR",
            items: [
                { id: "fuji-x100v", name: "Fujifilm X100V", startDate: "25/05/2026", endDate: "28/05/2026", price: 200000 }
            ],
            totalAmount: 600000
        },
        {
            orderCode: "MID281734",
            date: "10/05/2026",
            status: "Hoàn thành",
            paymentMethod: "Thanh toán khi nhận máy",
            items: [
                { id: "canon-r50", name: "Canon EOS R50", startDate: "10/05/2026", endDate: "13/05/2026", price: 150000 }
            ],
            totalAmount: 450000
        },
        {
            orderCode: "MID102938",
            date: "01/05/2026",
            status: "Đã hủy",
            paymentMethod: "Chuyển khoản QR",
            items: [
                { id: "fuji-xt100", name: "Fujifilm X-T100", startDate: "01/05/2026", endDate: "03/05/2026", price: 130000 }
            ],
            totalAmount: 260000
        }
    ];

    const allOrders = [...storedOrders, ...defaultOrders];

    allOrders.forEach(order => {
        const orderBox = document.createElement("div");
        orderBox.style.marginBottom = "30px";
        orderBox.style.border = "1px solid #eee";
        orderBox.style.borderRadius = "8px";
        orderBox.style.padding = "20px";

        let statusClass = "renting";
        if (order.status === "Hoàn thành") statusClass = "completed";
        if (order.status === "Đã hủy") statusClass = "cancelled";

        let orderHeader = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:12px; margin-bottom:15px;">
                <div>
                    <span style="font-family:'Montserrat'; font-weight:700; color:#111; font-size:0.95rem;">Đơn hàng: #${order.orderCode}</span>
                    <span style="font-size:0.8rem; color:#8E8E93; margin-left:15px;">Ngày đặt: ${order.date}</span>
                </div>
                <span class="status-badge ${statusClass}">${order.status}</span>
            </div>
        `;

        let itemsHTML = "";
        order.items.forEach(item => {
            const imgUrl = PRODUCT_IMAGES[item.id] || "../images/canon_r50.jpg";
            itemsHTML += `
                <div class="order-item">
                    <div class="order-item-img">
                        <img src="${imgUrl}" alt="${item.name}">
                    </div>
                    <div class="order-item-info">
                        <h4>${item.name}</h4>
                        <span class="order-item-date"><i class="fa-regular fa-calendar"></i> Thời gian: Từ <strong>${item.startDate}</strong> đến <strong>${item.endDate}</strong></span>
                    </div>
                    <div class="order-item-price-box">
                        <span class="order-item-price">${item.price.toLocaleString("vi-VN")}₫/ngày</span>
                    </div>
                </div>
            `;
        });

        let orderFooter = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; border-top:1px solid #eee; padding-top:12px; font-size:0.9rem;">
                <span style="color:#666;">Thanh toán qua: <strong>${order.paymentMethod}</strong></span>
                <span>Tổng tiền thuê: <strong style="font-family:'Montserrat'; font-size:1.1rem; color:#111;">${order.totalAmount.toLocaleString("vi-VN")}₫</strong></span>
            </div>
        `;

        orderBox.innerHTML = orderHeader + itemsHTML + orderFooter;
        container.appendChild(orderBox);
    });
}
