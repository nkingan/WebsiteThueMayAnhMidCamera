// 🛒 MIDCAMERA - CART JS

// Mock Data sản phẩm của MIDCAMERA
const PRODUCTS_DATA = [
    { id: "canon-r50", name: "Canon EOS R50", price: 150000, deposit: 5000000, image: "../images/canon_r50.jpg", category: "Mirrorless" },
    { id: "fuji-xt100", name: "Fujifilm X-T100", price: 130000, deposit: 4000000, image: "../images/fuji_xt100.png", category: "Mirrorless" },
    { id: "fuji-xt10", name: "Fujifilm X-T10", price: 120000, deposit: 3500000, image: "../images/fuji_xt10.jpg", category: "Mirrorless" },
    { id: "fuji-x100v", name: "Fujifilm X100V", price: 200000, deposit: 12000000, image: "../images/fuji_x100vi.jpg", category: "Compact" },
    { id: "dji-pocket3", name: "DJI Pocket 3", price: 180000, deposit: 6000000, image: "../images/pocket3.jpg", category: "Action" },
    { id: "fuji-instax", name: "Fujifilm Instax Mini", price: 80000, deposit: 1500000, image: "../images/fuji_xm5.jpg", category: "Film" }
];

// Mock Data phụ kiện
const ACCESSORIES_DATA = [
    { id: "acc-battery", name: "Bộ Pin sạc dự phòng", price: 30000 },
    { id: "acc-tripod", name: "Chân máy Tripod Benro", price: 40000 },
    { id: "acc-sdcard", name: "Thẻ nhớ SanDisk 64GB", price: 20000 }
];

let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
    loadCart();

    // Nút tiếp tục chuyển sang checkout.html
    const btnContinue = document.getElementById("btnContinueCheckout");
    if (btnContinue) {
        btnContinue.addEventListener("click", () => {
            if (cartItems.length === 0) {
                alert("Giỏ hàng của bạn đang trống!");
                return;
            }
            window.location.href = "checkout.html";
        });
    }
});

// Hàm đọc giỏ hàng từ localStorage và render
function loadCart() {
    const storedCart = localStorage.getItem("mid_cart");
    cartItems = storedCart ? JSON.parse(storedCart) : [];

    const layoutBox = document.getElementById("cartLayoutBox");
    const emptyBox = document.getElementById("emptyCartBox");

    if (!layoutBox || !emptyBox) return;

    if (cartItems.length === 0) {
        layoutBox.style.display = "none";
        emptyBox.style.display = "block";
        return;
    }

    layoutBox.style.display = "flex";
    emptyBox.style.display = "none";

    const listContainer = document.getElementById("cartListItems");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    let totalMachinePrice = 0;
    let totalAccPrice = 0;
    let totalDeposit = 0;

    cartItems.forEach(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        if (!prod) return;

        // Tính số ngày thuê
        const start = new Date(item.startDate);
        const end = new Date(item.endDate);
        const diffTime = Math.abs(end - start);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) diffDays = 1;

        // Tạm tính máy
        const itemMachineCost = prod.price * diffDays;
        totalMachinePrice += itemMachineCost;

        // Trị giá cọc máy
        totalDeposit += prod.deposit;

        // Đọc các phụ kiện chọn kèm
        let accsHTML = "";
        let itemAccCost = 0;
        if (item.accessories && item.accessories.length > 0) {
            const accNames = [];
            item.accessories.forEach(accId => {
                const acc = ACCESSORIES_DATA.find(a => a.id === accId);
                if (acc) {
                    accNames.push(acc.name);
                    itemAccCost += acc.price * diffDays;
                }
            });
            totalAccPrice += itemAccCost;
            accsHTML = `<p class="cart-item-accessories"><strong>Phụ kiện kèm:</strong> ${accNames.join(", ")}</p>`;
        }

        // Render Item
        const itemBox = document.createElement("div");
        itemBox.className = "cart-item";
        itemBox.innerHTML = `
            <div class="cart-item-img">
                <img src="${prod.image}" alt="${prod.name}">
            </div>
            <div class="cart-item-info">
                <h3>${prod.name}</h3>
                <p class="cart-item-dates"><i class="fa-regular fa-calendar"></i> Thuê từ <strong>${item.startDate}</strong> đến <strong>${item.endDate}</strong> (${diffDays} ngày)</p>
                ${accsHTML}
            </div>
            <div class="cart-item-price-box">
                <span class="cart-item-price">${(itemMachineCost + itemAccCost).toLocaleString("vi-VN")}₫</span>
                <span class="cart-item-price-desc">Tổng cộng thuê</span>
            </div>
            <button class="btn-remove-item" onclick="removeItem('${item.id}')" title="Xóa thiết bị này"><i class="fa-solid fa-trash-can"></i></button>
        `;
        listContainer.appendChild(itemBox);
    });

    // Hiển thị tóm tắt tiền ở Sidebar phải
    const subtotalEl = document.getElementById("summarySubtotal");
    const accEl = document.getElementById("summaryAccessories");
    const depositEl = document.getElementById("summaryDeposit");
    const totalEl = document.getElementById("summaryTotal");

    if (subtotalEl) subtotalEl.textContent = totalMachinePrice.toLocaleString("vi-VN") + "₫";
    if (accEl) accEl.textContent = totalAccPrice.toLocaleString("vi-VN") + "₫";
    if (depositEl) depositEl.textContent = totalDeposit.toLocaleString("vi-VN") + "₫";
    
    const totalRent = totalMachinePrice + totalAccPrice;
    if (totalEl) totalEl.textContent = totalRent.toLocaleString("vi-VN") + "₫";

    // Lưu tổng giá trị thanh toán tạm tính cho bước checkout
    localStorage.setItem("mid_checkout_total", totalRent);
    localStorage.setItem("mid_checkout_deposit", totalDeposit);
}

// Xóa một thiết bị khỏi giỏ hàng
function removeItem(productId) {
    if (confirm("Bạn có chắc chắn muốn xóa thiết bị này khỏi giỏ hàng?")) {
        cartItems = cartItems.filter(item => item.id !== productId);
        localStorage.setItem("mid_cart", JSON.stringify(cartItems));
        loadCart();
        
        // Gọi hàm dùng chung từ main.js
        if (typeof updateHeaderCartCount === 'function') {
            updateHeaderCartCount();
        }
    }
}
