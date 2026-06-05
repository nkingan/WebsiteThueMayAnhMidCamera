// 📸 MIDCAMERA - PRODUCT DETAIL JS

// Mock Data Máy ảnh
const PRODUCTS_DATA = [
    {
        id: "canon-r50",
        name: "Canon EOS R50",
        price: 150000,
        category: "Mirrorless",
        brand: "Canon",
        image: "../images/canon_r50.jpg",
        shortDesc: "Thiết kế cực kỳ nhỏ gọn, lấy nét mắt tự động thông minh, lý tưởng cho những chuyến du lịch và làm vlog hàng ngày.",
        longDesc: "Canon EOS R50 là chiếc máy ảnh mirrorless dòng APS-C hướng tới sự nhỏ gọn và tiện lợi tối đa cho người dùng. Với cảm biến 24.2 Megapixel kết hợp cùng bộ xử lý hình ảnh DIGIC X đỉnh cao, máy cho khả năng ghi lại hình ảnh sắc nét ngay cả trong điều kiện thiếu sáng. Hệ thống lấy nét tự động thông minh Dual Pixel CMOS AF II tự động phát hiện và theo dõi mắt, khuôn mặt của người lẫn động vật cực nhạy. Phù hợp hoàn hảo cho các bạn trẻ sáng tạo nội dung, làm vlog, chụp ảnh du lịch hoặc đời thường.",
        gallery: [
            "../images/canon_r50.jpg",
            "../images/fuji_xm5.jpg",
            "../images/pocket3.jpg"
        ],
        specs: {
            "Loại cảm biến": "APS-C CMOS 24.2 Megapixel",
            "Bộ xử lý hình ảnh": "DIGIC X",
            "Hệ thống lấy nét": "Dual Pixel CMOS AF II (Lấy nét mắt AI)",
            "Khả năng quay video": "4K UHD 30p (không crop từ 6K), FHD 120p",
            "Độ nhạy sáng ISO": "100 - 25600 (Mở rộng đến 51200)",
            "Màn hình hiển thị": "LCD xoay lật đa góc 3.0 inch cảm ứng",
            "Trọng lượng thân máy": "375g (Đã bao gồm pin và thẻ nhớ)"
        }
    },
    {
        id: "fuji-xt100",
        name: "Fujifilm X-T100",
        price: 130000,
        category: "Mirrorless",
        brand: "Fujifilm",
        image: "../images/fuji_xt100.png",
        shortDesc: "Phong cách retro cổ điển, màn hình lật 3 chiều độc đáo và khả năng giả lập màu film Fujifilm mang lại chất lượng ảnh khác biệt.",
        longDesc: "Fujifilm X-T100 kết hợp thiết kế cổ điển sang trọng đặc trưng của dòng máy ảnh hoài cổ Fujifilm cùng cảm biến APS-C 24.2 MP chất lượng cao. Máy sở hữu màn hình xoay lật 3 chiều vô cùng linh hoạt cho phép chụp các góc khó hoặc selfie dễ dàng. Điểm đắt giá nhất chính là 11 chế độ giả lập màu film huyền thoại của Fujifilm tích hợp sẵn, giúp ảnh chụp ra có tone màu nghệ thuật mang đậm chất hoài niệm mà không cần qua hậu kỳ phức tạp.",
        gallery: [
            "../images/fuji_xt100.png",
            "../images/fuji_xt20.jpg",
            "../images/fuji_xt10.jpg"
        ],
        specs: {
            "Loại cảm biến": "APS-C CMOS 24.2 Megapixel",
            "Chế độ giả lập màu": "Classic Chrome, Provia, Velvia, Astia...",
            "Màn hình hiển thị": "Lật 3 hướng cảm ứng 3.0 inch",
            "Kính ngắm": "Kính ngắm điện tử OLED EVF 2.36 triệu điểm",
            "Độ nhạy sáng ISO": "200 - 12800 (Mở rộng 100 - 51200)",
            "Kết nối không dây": "Wi-Fi & Bluetooth tích hợp chuyển ảnh nhanh",
            "Thời lượng pin": "Chụp khoảng 430 khung hình/sạc đầy"
        }
    },
    {
        id: "fuji-xt10",
        name: "Fujifilm X-T10",
        price: 120000,
        category: "Mirrorless",
        brand: "Fujifilm",
        image: "../images/fuji_xt10.jpg",
        shortDesc: "Kích thước cơ động, hệ thống điều khiển cơ khí trực quan, mang lại niềm vui chụp ảnh thuần túy của dòng X-T.",
        longDesc: "Fujifilm X-T10 là chiếc máy ảnh không gương lật nhỏ gọn thừa hưởng phong cách thiết kế cơ khí cơ học cơ động của dòng X-T cao cấp. Sở hữu cảm biến X-Trans CMOS II độc quyền đem lại độ chi tiết ảnh vượt trội cùng khả năng tái tạo màu da cực kỳ nịnh mắt. Bố cục các bánh răng điều khiển tốc độ, bù trừ sáng bằng kim loại mang lại trải nghiệm thao tác nhiếp ảnh hoài cổ, đầy cảm xúc.",
        gallery: [
            "../images/fuji_xt10.jpg",
            "../images/fuji_xt20.jpg",
            "../images/fuji_x100vi.jpg"
        ],
        specs: {
            "Loại cảm biến": "X-Trans CMOS II 16.3 Megapixel",
            "Bộ xử lý hình ảnh": "EXR Processor II",
            "Hệ thống lấy nét": "77 điểm lấy nét thông minh",
            "Chế độ giả lập màu": "Classic Chrome, PRO Neg, Monochrome...",
            "Bánh răng vật lý": "Điều chỉnh tốc độ màn trập, bù trừ sáng",
            "Tốc độ chụp liên tiếp": "8.0 khung hình / giây",
            "Trọng lượng thân máy": "381g"
        }
    },
    {
        id: "fuji-x100v",
        name: "Fujifilm X100V",
        price: 200000,
        category: "Compact",
        brand: "Fujifilm",
        image: "../images/fuji_x100vi.jpg",
        shortDesc: "Chiếc compact đường phố tối thượng với ống kính f/2 23mm cố định, cảm biến X-Trans IV và kính ngắm lai độc quyền.",
        longDesc: "Fujifilm X100V đại diện cho thế hệ thứ 5 của dòng máy ảnh compact đường phố huyền thoại X100. Máy được nâng cấp ống kính 23mm F2.0 thế hệ mới cho độ nét rìa ảnh vượt trội. Thiết kế thân máy bằng nhôm tinh luyện kết hợp cảm biến X-Trans CMOS 4 và bộ xử lý X-Processor 4 mạnh mẽ. Kính ngắm lai quang học và điện tử độc quyền cùng các giả lập màu phim mới nhất khiến X100V trở thành chiếc máy ảnh được khao khát nhất bởi các nhiếp ảnh gia đường phố.",
        gallery: [
            "../images/fuji_x100vi.jpg",
            "../images/fuji_xs20.jpg",
            "../images/fuji_xs10.jpg"
        ],
        specs: {
            "Loại cảm biến": "X-Trans CMOS 4 26.1 Megapixel",
            "Bộ xử lý hình ảnh": "X-Processor 4",
            "Ống kính cố định": "Fujinon 23mm F2.0 (tương đương tiêu cự 35mm)",
            "Kính ngắm lai OVF/EVF": "Quang học 0.52x & Điện tử OLED 3.69 triệu điểm",
            "Màn hình hiển thị": "LCD lật cảm ứng mỏng tinh tế",
            "Giả lập màu phim": "Classic Neg, Eterna, Acros, Color Chrome Effect",
            "Quay video": "4K UHD 30p"
        }
    },
    {
        id: "dji-pocket3",
        name: "DJI Osmo Pocket 3",
        price: 180000,
        category: "Action",
        brand: "DJI",
        image: "../images/pocket3.jpg",
        shortDesc: "Cảm biến 1 inch mạnh mẽ, gimbal chống rung vật lý 3 trục, màn hình xoay thông minh cho chất lượng video vlogging đỉnh cao.",
        longDesc: "DJI Osmo Pocket 3 là bước nhảy vọt lớn trong thế giới camera hành trình và làm vlog cá nhân. Sở hữu cảm biến CMOS kích thước lớn tới 1-inch, máy cho khả năng thu sáng vượt trội, kiểm soát nhiễu ảnh xuất sắc ngay cả khi quay đêm. Gimbal chống rung vật lý 3 trục cơ học siêu mượt mà giữ cho video luôn ổn định tuyệt đối trong mọi chuyển động. Thiết kế màn hình xoay 2.0 inch OLED thông minh cho phép chuyển đổi nhanh chóng giữa khung hình ngang và đứng.",
        gallery: [
            "../images/pocket3.jpg",
            "../images/fuji_xm5.jpg",
            "../images/canon_r50.jpg"
        ],
        specs: {
            "Loại cảm biến": "CMOS 1.0-inch chất lượng cao",
            "Hệ thống chống rung": "Gimbal vật lý cơ học 3 trục độc lập",
            "Quay video tối đa": "4K/120fps (Slow motion), 4K/60fps HDR",
            "Màn hình hiển thị": "OLED 2.0-inch cảm ứng xoay thông minh",
            "Profile màu chuyên sâu": "10-bit D-Log M & D-Log HLG",
            "Hệ thống micro": "Thu âm định hướng 3 micro giảm tiếng ồn gió",
            "Trọng lượng máy": "179g siêu nhẹ bỏ túi"
        }
    }
];

// Danh sách phụ kiện gợi ý
const ACCESSORIES_DATA = [
    { id: "acc-battery", name: "Bộ Pin sạc dự phòng", price: 30000, image: "../images/pocket3.jpg" },
    { id: "acc-tripod", name: "Chân máy Tripod Benro", price: 40000, image: "../images/canon_r50.jpg" },
    { id: "acc-sdcard", name: "Thẻ nhớ SanDisk 64GB 170MB/s", price: 20000, image: "../images/fuji_xt10.jpg" }
];

let currentProduct = null;
let selectedAccessories = [];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Phân tích ID sản phẩm từ URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id") || "canon-r50";
    
    currentProduct = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
    
    // Render dữ liệu máy ảnh
    renderProductDetails();
    renderAccessories();

    // 2. Khởi tạo Date Picker
    initDatePicker();

    // Lắng nghe thay đổi date picker
    const startInput = document.getElementById("startDatePicker");
    const returnInput = document.getElementById("returnDatePicker");
    if (startInput) startInput.addEventListener("change", calculateTotal);
    if (returnInput) returnInput.addEventListener("change", calculateTotal);

    // 3. Xử lý click Tab
    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(tab => {
        tab.addEventListener("click", () => {
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const tabId = tab.getAttribute("data-tab");
            document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
            const pane = document.getElementById(`tab-${tabId}`);
            if (pane) pane.classList.add("active");
        });
    });

    // 4. Lắng nghe nút Thêm vào giỏ
    const btnAddToCart = document.getElementById("btnAddToCart");
    const btnRentNow = document.getElementById("btnRentNow");
    if (btnAddToCart) {
        btnAddToCart.addEventListener("click", () => {
            addToCart(false);
        });
    }
    if (btnRentNow) {
        btnRentNow.addEventListener("click", () => {
            addToCart(true);
        });
    }
});

// Render toàn bộ thông tin sản phẩm
function renderProductDetails() {
    if (!currentProduct) return;

    // Breadcrumb & Title
    const breadName = document.getElementById("breadcrumbProductName");
    const nameEl = document.getElementById("productName");
    if (breadName) breadName.textContent = currentProduct.name;
    if (nameEl) nameEl.textContent = currentProduct.name;
    document.title = `${currentProduct.name} — Chi tiết thiết bị MIDCAMERA`;
    
    // Badge & Price & Desc
    const catBadge = document.getElementById("productCategory");
    const priceBox = document.getElementById("productPrice");
    const shortDesc = document.getElementById("productShortDesc");
    const longDesc = document.getElementById("productLongDesc");

    if (catBadge) catBadge.textContent = `${currentProduct.category} • ${currentProduct.brand}`;
    if (priceBox) priceBox.textContent = currentProduct.price.toLocaleString("vi-VN") + "₫/ngày";
    if (shortDesc) shortDesc.textContent = currentProduct.shortDesc;
    if (longDesc) longDesc.textContent = currentProduct.longDesc;

    // Gallery ảnh lớn
    const mainImg = document.getElementById("productMainImage");
    if (mainImg) {
        mainImg.src = currentProduct.gallery[0];
        mainImg.alt = currentProduct.name;
    }

    // Gallery thumbnail strip
    const thumbStrip = document.getElementById("productThumbnailStrip");
    if (thumbStrip) {
        thumbStrip.innerHTML = "";
        currentProduct.gallery.forEach((imgUrl, idx) => {
            const thumb = document.createElement("div");
            thumb.className = `thumbnail-item ${idx === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${imgUrl}" alt="${currentProduct.name} View ${idx}">`;
            thumb.addEventListener("click", () => {
                document.querySelectorAll(".thumbnail-item").forEach(t => t.classList.remove("active"));
                thumb.classList.add("active");
                if (mainImg) mainImg.src = imgUrl;
            });
            thumbStrip.appendChild(thumb);
        });
    }

    // Render bảng thông số kỹ thuật
    const specsBody = document.getElementById("productSpecsTableBody");
    if (specsBody) {
        specsBody.innerHTML = "";
        for (const [key, value] of Object.entries(currentProduct.specs)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${key}</td>
                <td>${value}</td>
            `;
            specsBody.appendChild(row);
        }
    }
}

// Render phụ kiện gợi ý
function renderAccessories() {
    const accRow = document.getElementById("accessoriesRow");
    if (!accRow) return;
    accRow.innerHTML = "";

    ACCESSORIES_DATA.forEach(acc => {
        const isSelected = selectedAccessories.includes(acc.id);
        const buttonText = isSelected ? "ĐÃ THÊM" : "+ THÊM";

        const card = document.createElement("div");
        card.className = "accessory-card";
        card.innerHTML = `
            <div class="accessory-img-wrapper">
                <img src="${acc.image}" alt="${acc.name}">
            </div>
            <h4>${acc.name}</h4>
            <span class="accessory-price">${acc.price.toLocaleString("vi-VN")}₫/ngày</span>
            <button class="btn-add-accessory" id="btn-acc-${acc.id}" onclick="toggleAccessory('${acc.id}')">${buttonText}</button>
        `;
        accRow.appendChild(card);
    });
}

// Toggle chọn phụ kiện đi kèm
function toggleAccessory(accId) {
    const index = selectedAccessories.indexOf(accId);
    const btn = document.getElementById(`btn-acc-${accId}`);
    
    if (index === -1) {
        selectedAccessories.push(accId);
        if (btn) {
            btn.textContent = "ĐÃ THÊM";
            btn.style.opacity = "0.6";
        }
    } else {
        selectedAccessories.splice(index, 1);
        if (btn) {
            btn.textContent = "+ THÊM";
            btn.style.opacity = "1";
        }
    }
    calculateTotal();
}

// Khởi tạo các giá trị date picker mặc định
function initDatePicker() {
    const startInput = document.getElementById("startDatePicker");
    const returnInput = document.getElementById("returnDatePicker");
    if (!startInput || !returnInput) return;

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const returnDate = new Date();
    returnDate.setDate(tomorrow.getDate() + 3); // Mặc định thuê 3 ngày

    const startStr = tomorrow.toISOString().split('T')[0];
    const returnStr = returnDate.toISOString().split('T')[0];

    startInput.value = startStr;
    returnInput.value = returnStr;

    startInput.min = startStr;
    returnInput.min = startStr;

    calculateTotal();
}

// Tính toán tổng tiền theo thời gian thuê và phụ kiện chọn kèm
function calculateTotal() {
    const startInput = document.getElementById("startDatePicker");
    const returnInput = document.getElementById("returnDatePicker");
    if (!startInput || !returnInput) return;

    const startVal = startInput.value;
    const returnVal = returnInput.value;

    if (!startVal || !returnVal) return;

    const start = new Date(startVal);
    const end = new Date(returnVal);

    returnInput.min = startVal;

    if (end < start) {
        returnInput.value = startVal;
        calculateTotal();
        return;
    }

    const diffTime = Math.abs(end - start);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) diffDays = 1;

    const daysCount = document.getElementById("daysCount");
    if (daysCount) daysCount.textContent = diffDays;

    let accessoriesPricePerDay = 0;
    selectedAccessories.forEach(accId => {
        const acc = ACCESSORIES_DATA.find(a => a.id === accId);
        if (acc) accessoriesPricePerDay += acc.price;
    });

    const total = (currentProduct.price + accessoriesPricePerDay) * diffDays;
    const totalDisp = document.getElementById("totalPriceDisplay");
    if (totalDisp) totalDisp.textContent = total.toLocaleString("vi-VN") + "₫";
}

// Thêm vào giỏ hàng
function addToCart(redirect = false) {
    const user = localStorage.getItem('mid_user');
    if (!user) {
        alert("Vui lòng đăng nhập trước khi thực hiện giao dịch thuê thiết bị.");
        window.location.href = "auth.html";
        return;
    }

    const startInput = document.getElementById("startDatePicker");
    const returnInput = document.getElementById("returnDatePicker");
    if (!startInput || !returnInput) return;

    const startDate = startInput.value;
    const endDate = returnInput.value;

    const cart = localStorage.getItem('mid_cart') ? JSON.parse(localStorage.getItem('mid_cart')) : [];
    const existIdx = cart.findIndex(item => item.id === currentProduct.id);

    const cartItem = {
        id: currentProduct.id,
        startDate: startDate,
        endDate: endDate,
        accessories: [...selectedAccessories]
    };

    if (existIdx === -1) {
        cart.push(cartItem);
    } else {
        cart[existIdx] = cartItem;
    }

    localStorage.setItem('mid_cart', JSON.stringify(cart));
    
    // Gọi hàm dùng chung trong main.js
    if (typeof updateHeaderCartCount === 'function') {
        updateHeaderCartCount();
    }

    if (redirect) {
        window.location.href = "cart.html";
    } else {
        alert(`Đã thêm máy ảnh ${currentProduct.name} thành công vào giỏ hàng của bạn!`);
    }
}
