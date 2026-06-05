// 💳 MIDCAMERA - CHECKOUT JS

const PRODUCTS_DATA = [
    { id: "canon-r50", name: "Canon EOS R50", price: 150000, deposit: 5000000 },
    { id: "fuji-xt100", name: "Fujifilm X-T100", price: 130000, deposit: 4000000 },
    { id: "fuji-xt10", name: "Fujifilm X-T10", price: 120000, deposit: 3500000 },
    { id: "fuji-x100v", name: "Fujifilm X100V", price: 200000, deposit: 12000000 },
    { id: "dji-pocket3", name: "DJI Pocket 3", price: 180000, deposit: 6000000 },
    { id: "fuji-instax", name: "Fujifilm Instax Mini", price: 80000, deposit: 1500000 }
];

const ACCESSORIES_DATA = [
    { id: "acc-battery", name: "Bộ Pin sạc dự phòng", price: 30000 },
    { id: "acc-tripod", name: "Chân máy Tripod Benro", price: 40000 },
    { id: "acc-sdcard", name: "Thẻ nhớ SanDisk 64GB", price: 20000 }
];

let cartItems = [];
let totalRentAmount = 0;
let totalDepositAmount = 0;
let selectedPayment = "qr"; // Mặc định chuyển khoản QR

document.addEventListener("DOMContentLoaded", () => {
    loadCheckoutSummary();

    // Điền sẵn thông tin khách hàng nếu đã lưu trong localStorage
    const user = localStorage.getItem("mid_user");
    if (user) {
        const userData = JSON.parse(user);
        const nameInput = document.getElementById("custName");
        const emailInput = document.getElementById("custEmail");
        const phoneInput = document.getElementById("custPhone");

        if (nameInput) nameInput.value = userData.name || "Nguyễn Khánh Vân";
        if (emailInput) emailInput.value = userData.email || "Midcamera37@gmail.com";
        if (phoneInput) phoneInput.value = userData.phone || "0987.654.321";
    }
});

// Tải thông tin đơn hàng và hiển thị summary
function loadCheckoutSummary() {
    const storedCart = localStorage.getItem("mid_cart");
    cartItems = storedCart ? JSON.parse(storedCart) : [];

    if (cartItems.length === 0) {
        alert("Giỏ hàng của bạn đang trống! Không thể thực hiện xác nhận.");
        window.location.href = "products.html";
        return;
    }

    const summaryList = document.getElementById("checkoutSummaryItems");
    if (!summaryList) return;
    summaryList.innerHTML = "";

    let subtotal = 0;
    let accTotal = 0;
    let depositTotal = 0;

    cartItems.forEach(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        if (!prod) return;

        // Tính số ngày
        const start = new Date(item.startDate);
        const end = new Date(item.endDate);
        const diffTime = Math.abs(end - start);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) diffDays = 1;

        const machineCost = prod.price * diffDays;
        subtotal += machineCost;
        depositTotal += prod.deposit;

        let accText = "";
        let itemAccCost = 0;
        if (item.accessories && item.accessories.length > 0) {
            item.accessories.forEach(accId => {
                const acc = ACCESSORIES_DATA.find(a => a.id === accId);
                if (acc) {
                    itemAccCost += acc.price * diffDays;
                }
            });
            accTotal += itemAccCost;
            accText = ` (+ ${item.accessories.length} phụ kiện)`;
        }

        // Render tóm tắt tên máy
        const itemRow = document.createElement("div");
        itemRow.className = "summary-item-brief";
        itemRow.innerHTML = `
            <span>${prod.name}${accText}</span>
            <span>x${diffDays} ngày</span>
        `;
        summaryList.appendChild(itemRow);
    });

    totalRentAmount = subtotal + accTotal;
    totalDepositAmount = depositTotal;

    const subtotalEl = document.getElementById("checkoutSubtotal");
    const depositEl = document.getElementById("checkoutDeposit");
    const totalEl = document.getElementById("checkoutTotal");
    const qrAmountEl = document.getElementById("qrTransferAmount");
    const qrCodeEl = document.getElementById("qrTransferCode");

    if (subtotalEl) subtotalEl.textContent = totalRentAmount.toLocaleString("vi-VN") + "₫";
    if (depositEl) depositEl.textContent = totalDepositAmount.toLocaleString("vi-VN") + "₫";
    if (totalEl) totalEl.textContent = totalRentAmount.toLocaleString("vi-VN") + "₫";

    // Cập nhật thông số chuyển khoản QR
    if (qrAmountEl) qrAmountEl.textContent = totalRentAmount.toLocaleString("vi-VN") + "₫";
    
    // Tạo mã chuyển khoản ngẫu nhiên
    const randomCode = "MID" + Math.floor(100000 + Math.random() * 900000);
    if (qrCodeEl) qrCodeEl.textContent = randomCode;

    // Link QR Code thực tế
    const qrImg = document.querySelector("#qrCodeContainer img");
    if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=STB:373799998888|AMOUNT:${totalRentAmount}|MEMO:${randomCode}`;
    }
}

// Chuyển sang màn hình bước 3 (Thanh toán)
function goToPaymentScreen() {
    // Đổi trạng thái tiến trình
    const stepBox2 = document.getElementById("stepBox2");
    const stepLine2 = document.getElementById("stepLine2");
    const stepBox3 = document.getElementById("stepBox3");

    if (stepBox2) stepBox2.className = "progress-step completed";
    if (stepLine2) stepLine2.className = "progress-line completed";
    if (stepBox3) stepBox3.className = "progress-step active";

    // Chuyển màn hình
    const screenStep2 = document.getElementById("screenStep2");
    const screenStep3 = document.getElementById("screenStep3");
    if (screenStep2) screenStep2.style.display = "none";
    if (screenStep3) screenStep3.style.display = "block";
    
    // Cuộn lên đầu
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Quay lại màn hình nhập thông tin (Bước 2)
function goBackToForm() {
    const stepBox2 = document.getElementById("stepBox2");
    const stepLine2 = document.getElementById("stepLine2");
    const stepBox3 = document.getElementById("stepBox3");

    if (stepBox2) stepBox2.className = "progress-step active";
    if (stepLine2) stepLine2.className = "progress-line";
    if (stepBox3) stepBox3.className = "progress-step upcoming";

    const screenStep2 = document.getElementById("screenStep2");
    const screenStep3 = document.getElementById("screenStep3");
    if (screenStep2) screenStep2.style.display = "block";
    if (screenStep3) screenStep3.style.display = "none";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Lựa chọn phương thức thanh toán
function selectPaymentMethod(method) {
    selectedPayment = method;
    document.querySelectorAll(".payment-method-tab").forEach(tab => tab.classList.remove("active"));
    
    const qrContainer = document.getElementById("qrCodeContainer");
    const methodQr = document.getElementById("methodQr");
    const methodCod = document.getElementById("methodCod");

    if (method === "qr") {
        if (methodQr) methodQr.classList.add("active");
        if (qrContainer) qrContainer.style.display = "flex";
    } else {
        if (methodCod) methodCod.classList.add("active");
        if (qrContainer) qrContainer.style.display = "none";
    }
}

// Xác nhận đặt thuê thành công (Lưu đơn hàng và xóa giỏ hàng)
function confirmOrderPlacement() {
    const custName = document.getElementById("custName");
    const custPhone = document.getElementById("custPhone");
    const custAddress = document.getElementById("custAddress");
    const custCccd = document.getElementById("custCccd");
    const qrTransferCode = document.getElementById("qrTransferCode");

    const customerName = custName ? custName.value : "";
    const customerPhone = custPhone ? custPhone.value : "";
    const customerAddress = custAddress ? custAddress.value : "";
    const customerCccd = custCccd ? custCccd.value : "";
    const orderCode = qrTransferCode ? qrTransferCode.textContent : "MID" + Math.floor(100000 + Math.random() * 900000);

    const orders = localStorage.getItem("mid_orders") ? JSON.parse(localStorage.getItem("mid_orders")) : [];
    
    const newOrder = {
        orderCode: orderCode,
        date: new Date().toLocaleDateString("vi-VN"),
        customerName: customerName,
        customerPhone: customerPhone,
        customerAddress: customerAddress,
        customerCccd: customerCccd,
        paymentMethod: selectedPayment === "qr" ? "Chuyển khoản QR" : "Thanh toán khi nhận máy",
        items: cartItems.map(item => {
            const prod = PRODUCTS_DATA.find(p => p.id === item.id);
            return {
                id: item.id,
                name: prod ? prod.name : "Thiết bị",
                startDate: item.startDate,
                endDate: item.endDate,
                price: prod ? prod.price : 0
            };
        }),
        totalAmount: totalRentAmount,
        depositAmount: totalDepositAmount,
        status: "Đang thuê"
    };

    orders.unshift(newOrder);
    localStorage.setItem("mid_orders", JSON.stringify(orders));

    // Xóa sạch giỏ hàng sau khi đặt thuê thành công
    localStorage.removeItem("mid_cart");

    alert(`Đặt thuê thiết bị thành công! Mã đơn hàng của bạn là: ${orderCode}. MIDCAMERA Vinh sẽ liên hệ bàn giao máy ảnh sớm nhất.`);
    
    window.location.href = "account.html";
}
