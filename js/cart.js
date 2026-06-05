// 🛒 MIDCAMERA - CART JS

// Dữ liệu PRODUCTS_DATA và ACCESSORIES_DATA được kế thừa toàn cục từ js/main.js


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

// Kiểm tra trùng lặp lịch đặt thuê (Overlap Validation)
function checkDateOverlap(productId, startStr, endStr) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return { overlap: false };

    // So sánh lịch mẫu hệ thống
    const mockRanges = prod.bookedRanges || [];
    
    // So sánh với các đơn hàng đã đặt thành công lưu trong localStorage
    const storedOrders = localStorage.getItem('mid_orders') ? JSON.parse(localStorage.getItem('mid_orders')) : [];
    const activeBookings = [];
    storedOrders.forEach(order => {
        if (order.items) {
            order.items.forEach(item => {
                if (item.id === productId) {
                    activeBookings.push({ start: item.startDate, end: item.endDate });
                }
            });
        }
    });

    const allRanges = [...mockRanges, ...activeBookings];

    const start = new Date(startStr);
    const end = new Date(endStr);

    for (const range of allRanges) {
        const rangeStart = new Date(range.start);
        const rangeEnd = new Date(range.end);

        // Phát hiện overlap: start <= rangeEnd và end >= rangeStart
        if (start <= rangeEnd && end >= rangeStart) {
            return {
                overlap: true,
                range: range
            };
        }
    }
    return { overlap: false };
}

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
    let hasOverlapError = false;

    cartItems.forEach(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        if (!prod) return;

        // Tính số ngày thuê
        const start = new Date(item.startDate);
        const end = new Date(item.endDate);
        const diffTime = Math.abs(end - start);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) diffDays = 1;

        // Kiểm tra trùng lịch đặt
        const checkResult = checkDateOverlap(item.id, item.startDate, item.endDate);
        let overlapAlertHTML = "";
        let isDateInvalid = "";

        if (checkResult.overlap) {
            hasOverlapError = true;
            isDateInvalid = "invalid-date";
            overlapAlertHTML = `
                <div class="cart-item-overlap-alert">
                    <i class="fa-solid fa-calendar-xmark"></i> Trùng lịch bận từ ngày ${checkResult.range.start} đến ${checkResult.range.end}! Vui lòng chọn ngày khác.
                </div>
            `;
        }

        // Tạm tính máy
        const itemMachineCost = checkResult.overlap ? 0 : prod.price * diffDays;
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
                    if (!checkResult.overlap) {
                        itemAccCost += acc.price * diffDays;
                    }
                }
            });
            totalAccPrice += itemAccCost;
            accsHTML = `<p class="cart-item-accessories"><strong>Phụ kiện kèm:</strong> ${accNames.join(", ")}</p>`;
        }

        const priceText = checkResult.overlap ? "Lỗi trùng lịch" : `${(itemMachineCost + itemAccCost).toLocaleString("vi-VN")}₫`;

        // Render Item
        const itemBox = document.createElement("div");
        itemBox.className = "cart-item";
        itemBox.innerHTML = `
            <div class="cart-item-img">
                <img src="${resolveImagePath(prod.image)}" alt="${prod.name}">
            </div>
            <div class="cart-item-info">
                <h3>${prod.name}</h3>
                
                <div class="cart-item-date-edit">
                    <div class="cart-date-input">
                        <label>Từ ngày nhận:</label>
                        <input type="date" value="${item.startDate}" onchange="updateCartItemDates('${item.id}', 'startDate', this.value)" class="cart-date-picker ${isDateInvalid}">
                    </div>
                    <div class="cart-date-input">
                        <label>Đến ngày trả:</label>
                        <input type="date" value="${item.endDate}" onchange="updateCartItemDates('${item.id}', 'endDate', this.value)" class="cart-date-picker ${isDateInvalid}">
                    </div>
                </div>

                ${accsHTML}
                ${overlapAlertHTML}
            </div>
            <div class="cart-item-price-box">
                <span class="cart-item-price">${priceText}</span>
                <span class="cart-item-price-desc">Tổng cộng (${diffDays} ngày)</span>
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
    const btnContinue = document.getElementById("btnContinueCheckout");

    if (subtotalEl) subtotalEl.textContent = totalMachinePrice.toLocaleString("vi-VN") + "₫";
    if (accEl) accEl.textContent = totalAccPrice.toLocaleString("vi-VN") + "₫";
    if (depositEl) depositEl.textContent = totalDeposit.toLocaleString("vi-VN") + "₫";
    
    const totalRent = totalMachinePrice + totalAccPrice;
    
    if (hasOverlapError) {
        if (totalEl) totalEl.textContent = "Cần chỉnh lịch";
        if (btnContinue) {
            btnContinue.disabled = true;
            btnContinue.textContent = "TRÙNG LỊCH - KHÔNG THỂ ĐẶT THUÊ";
            btnContinue.style.backgroundColor = "#8E8E93";
            btnContinue.style.borderColor = "#8E8E93";
            btnContinue.style.cursor = "not-allowed";
        }
    } else {
        if (totalEl) totalEl.textContent = totalRent.toLocaleString("vi-VN") + "₫";
        if (btnContinue) {
            btnContinue.disabled = false;
            btnContinue.textContent = "TIẾP TỤC XÁC NHẬN";
            btnContinue.style.backgroundColor = "";
            btnContinue.style.borderColor = "";
            btnContinue.style.cursor = "";
        }
    }

    // Lưu tổng giá trị thanh toán tạm tính cho bước checkout
    localStorage.setItem("mid_checkout_total", totalRent);
    localStorage.setItem("mid_checkout_deposit", totalDeposit);
}

// Chỉnh sửa trực tiếp ngày nhận/trả trong giỏ hàng
function updateCartItemDates(productId, field, newDateStr) {
    if (!newDateStr) return;

    const itemIndex = cartItems.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    let startDateVal = cartItems[itemIndex].startDate;
    let endDateVal = cartItems[itemIndex].endDate;

    if (field === 'startDate') {
        startDateVal = newDateStr;
        // Nếu ngày nhận lớn hơn ngày trả, tự động đồng bộ ngày trả bằng ngày nhận
        if (new Date(startDateVal) > new Date(endDateVal)) {
            endDateVal = startDateVal;
        }
    } else if (field === 'endDate') {
        endDateVal = newDateStr;
        // Nếu ngày trả nhỏ hơn ngày nhận, tự động đồng bộ ngày nhận bằng ngày trả
        if (new Date(endDateVal) < new Date(startDateVal)) {
            startDateVal = endDateVal;
        }
    }

    cartItems[itemIndex].startDate = startDateVal;
    cartItems[itemIndex].endDate = endDateVal;

    // Lưu đè lại vào giỏ hàng
    localStorage.setItem("mid_cart", JSON.stringify(cartItems));

    // Render lại giỏ hàng
    loadCart();
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
