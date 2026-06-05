// 🛍️ MIDCAMERA - PRODUCTS JS

// Danh sách sản phẩm mẫu theo đúng design system
const PRODUCTS_DATA = [
    {
        id: "canon-r50",
        name: "Canon EOS R50",
        price: 150000,
        category: "Mirrorless",
        brand: "Canon",
        image: "../images/canon_r50.jpg",
        desc: "Thiết kế cực kỳ nhỏ gọn, lấy nét mắt tự động thông minh, lý tưởng cho những chuyến du lịch và làm vlog hàng ngày.",
        specs: {
            "Cảm biến": "APS-C CMOS 24.2 MP",
            "Bộ xử lý": "DIGIC X",
            "Lấy nét": "Dual Pixel CMOS AF II",
            "Quay video": "4K 30p (không crop)"
        }
    },
    {
        id: "fuji-xt100",
        name: "Fujifilm X-T100",
        price: 130000,
        category: "Mirrorless",
        brand: "Fujifilm",
        image: "../images/fuji_xt100.png",
        desc: "Phong cách retro cổ điển, màn hình lật 3 chiều độc đáo và khả năng giả lập màu film Fujifilm mang lại chất lượng ảnh khác biệt.",
        specs: {
            "Cảm biến": "APS-C CMOS 24.2 MP",
            "Bộ xử lý": "Fujifilm Engine",
            "Màn hình": "Lật cảm ứng 3.0 inch",
            "Giả lập màu": "Classic Chrome, Provia, Velvia"
        }
    },
    {
        id: "fuji-xt10",
        name: "Fujifilm X-T10",
        price: 120000,
        category: "Mirrorless",
        brand: "Fujifilm",
        image: "../images/fuji_xt10.jpg",
        desc: "Kích thước cơ động, hệ thống điều khiển cơ khí trực quan, mang lại niềm vui chụp ảnh thuần túy của dòng X-T.",
        specs: {
            "Cảm biến": "X-Trans CMOS II 16.3 MP",
            "Bộ xử lý": "EXR Processor II",
            "Lấy nét": "77 điểm lấy nét",
            "Kính ngắm": "OLED EVF 2.36 triệu điểm"
        }
    },
    {
        id: "fuji-x100v",
        name: "Fujifilm X100V",
        price: 200000,
        category: "Compact",
        brand: "Fujifilm",
        image: "../images/fuji_x100vi.jpg",
        desc: "Chiếc compact đường phố tối thượng với ống kính f/2 23mm cố định, cảm biến X-Trans IV và kính ngắm lai độc quyền.",
        specs: {
            "Cảm biến": "X-Trans CMOS 4 26.1 MP",
            "Ống kính": "23mm F2.0 (tương đương 35mm)",
            "Bộ xử lý": "X-Processor 4",
            "Giả lập màu": "Classic Neg, Eterna, Acros"
        }
    },
    {
        id: "dji-pocket3",
        name: "DJI Pocket 3",
        price: 180000,
        category: "Action",
        brand: "DJI",
        image: "../images/pocket3.jpg",
        desc: "Cảm biến 1 inch mạnh mẽ, gimbal chống rung vật lý 3 trục, màn hình xoay thông minh cho chất lượng video vlogging đỉnh cao.",
        specs: {
            "Cảm biến": "CMOS 1.0-inch",
            "Chống rung": "Gimbal cơ học 3 trục",
            "Quay video": "4K/120fps quay chậm",
            "Màn hình": "2.0-inch OLED xoay"
        }
    },
    {
        id: "fuji-instax",
        name: "Fujifilm Instax Mini",
        price: 80000,
        category: "Film",
        brand: "Fujifilm",
        image: "../images/fuji_xm5.jpg",
        desc: "Máy ảnh chụp lấy liền dễ thương, lưu giữ khoảnh khắc bằng những tấm ảnh film mang phong cách cổ điển tức thì.",
        specs: {
            "Loại film": "Fujifilm Instax Mini",
            "Ống kính": "60mm F12.7",
            "Tốc độ màn trập": "1/60 giây cố định",
            "Đèn flash": "Flash tự động đánh liên tục"
        }
    }
];

// Trạng thái bộ lọc và so sánh
let selectedCategory = "all";
let selectedBrands = [];
let maxPrice = 300000;
let comparedProductIds = [];

// Đăng ký các phần tử DOM
let productsGrid;
let priceRange;
let priceRangeValue;
let btnResetFilter;
let categoryItems;
let quickviewModal;
let btnCloseQuickview;
let quickviewContent;
let compareBar;
let compareCount;
let compareThumbs;
let btnOpenComparePopup;
let comparePopup;
let btnCloseComparePopup;
let compareTable;

document.addEventListener("DOMContentLoaded", () => {
    // Khởi tạo các biến DOM sau khi trang load xong
    productsGrid = document.getElementById("productsGrid");
    priceRange = document.getElementById("priceRange");
    priceRangeValue = document.getElementById("priceRangeValue");
    btnResetFilter = document.getElementById("btnResetFilter");
    categoryItems = document.querySelectorAll(".category-item");
    quickviewModal = document.getElementById("quickviewModal");
    btnCloseQuickview = document.getElementById("btnCloseQuickview");
    quickviewContent = document.getElementById("quickviewContent");
    compareBar = document.getElementById("compareBar");
    compareCount = document.getElementById("compareCount");
    compareThumbs = document.getElementById("compareThumbs");
    btnOpenComparePopup = document.getElementById("btnOpenComparePopup");
    comparePopup = document.getElementById("comparePopup");
    btnCloseComparePopup = document.getElementById("btnCloseComparePopup");
    compareTable = document.getElementById("compareTable");

    // Đọc tham số URL nếu có
    parseUrlParams();
    renderProducts();

    // Lắng nghe sự kiện trượt giá
    if (priceRange) {
        priceRange.addEventListener("input", (e) => {
            maxPrice = parseInt(e.target.value);
            priceRangeValue.textContent = maxPrice.toLocaleString("vi-VN") + "₫";
            renderProducts();
        });
    }

    // Lắng nghe sự kiện click danh mục
    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            categoryItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            selectedCategory = item.getAttribute("data-category");
            renderProducts();
        });
    });

    // Lắng nghe sự kiện checkbox thương hiệu
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            selectedBrands = Array.from(brandCheckboxes)
                .filter(c => c.checked)
                .map(c => c.value);
            renderProducts();
        });
    });

    // Lắng nghe nút reset bộ lọc
    if (btnResetFilter) {
        btnResetFilter.addEventListener("click", () => {
            selectedCategory = "all";
            selectedBrands = [];
            maxPrice = 300000;
            if (priceRange) {
                priceRange.value = 300000;
            }
            if (priceRangeValue) {
                priceRangeValue.textContent = "300.000₫";
            }
            
            categoryItems.forEach(i => {
                i.classList.remove("active");
                if (i.getAttribute("data-category") === "all") i.classList.add("active");
            });
            
            brandCheckboxes.forEach(c => c.checked = false);
            renderProducts();
        });
    }

    // Lắng nghe đóng mở modal xem nhanh
    if (btnCloseQuickview) btnCloseQuickview.addEventListener("click", closeQuickview);
    if (quickviewModal) {
        quickviewModal.addEventListener("click", (e) => {
            if (e.target === quickviewModal) closeQuickview();
        });
    }

    // So sánh
    if (btnOpenComparePopup) btnOpenComparePopup.addEventListener("click", openComparePopup);
    if (btnCloseComparePopup) btnCloseComparePopup.addEventListener("click", closeComparePopup);
    if (comparePopup) {
        comparePopup.addEventListener("click", (e) => {
            if (e.target === comparePopup) closeComparePopup();
        });
    }
});

// Hàm đọc tham số query từ URL để tự lọc nhanh khi chuyển từ trang chủ sang
function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get("brand");
    const type = params.get("type");
    const price = params.get("price");

    if (brand) {
        selectedBrands.push(brand);
        const cb = document.querySelector(`input[name="brand"][value="${brand}"]`);
        if (cb) cb.checked = true;
    }
    if (type) {
        selectedCategory = type;
        if (categoryItems) {
            categoryItems.forEach(i => {
                i.classList.remove("active");
                if (i.getAttribute("data-category") === type) i.classList.add("active");
            });
        }
    }
    if (price) {
        const parts = price.split("-");
        if (parts.length === 2) {
            maxPrice = parseInt(parts[1]);
            if (priceRange) {
                priceRange.value = maxPrice;
            }
            if (priceRangeValue) {
                priceRangeValue.textContent = maxPrice.toLocaleString("vi-VN") + "₫";
            }
        }
    }
}

// Render danh sách sản phẩm theo bộ lọc
function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    const filteredProducts = PRODUCTS_DATA.filter(prod => {
        const matchesCat = (selectedCategory === "all" || prod.category === selectedCategory);
        const matchesBrand = (selectedBrands.length === 0 || selectedBrands.includes(prod.brand));
        const matchesPrice = (prod.price <= maxPrice);
        return matchesCat && matchesBrand && matchesPrice;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px 0; color: #666; font-family: 'Inter';">Không tìm thấy thiết bị phù hợp với bộ lọc.</p>`;
        return;
    }

    filteredProducts.forEach(prod => {
        const card = document.createElement("div");
        card.className = "camera-card";
        const isCompared = comparedProductIds.includes(prod.id) ? "checked" : "";

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${prod.image}" alt="${prod.name}">
            </div>
            <div class="card-info">
                <span class="product-type-tag">${prod.category} • ${prod.brand}</span>
                <h3>${prod.name}</h3>
                <p class="card-desc">${prod.desc}</p>
                
                <div class="card-bottom">
                    <span class="price-tag">${prod.price.toLocaleString("vi-VN")}₫/ngày</span>
                    <a href="javascript:void(0)" onclick="rentNow('${prod.id}')" class="btn-rent">THUÊ NGAY</a>
                </div>

                <div class="card-action-row">
                    <button class="btn-outline btn-quick-view" onclick="openQuickview('${prod.id}')">XEM NHANH</button>
                    <label class="compare-checkbox-label">
                        <input type="checkbox" onchange="toggleCompare(this, '${prod.id}')" ${isCompared}> So sánh
                    </label>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Đặt thuê ngay (thêm sản phẩm vào giỏ và đi tới trang giỏ hàng)
function rentNow(productId) {
    const user = localStorage.getItem('mid_user');
    if (!user) {
        alert("Vui lòng đăng nhập trước khi tiến hành đặt thuê thiết bị.");
        window.location.href = "auth.html";
        return;
    }

    const cart = localStorage.getItem('mid_cart') ? JSON.parse(localStorage.getItem('mid_cart')) : [];
    const existIdx = cart.findIndex(item => item.id === productId);
    
    if (existIdx === -1) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const returnDate = new Date();
        returnDate.setDate(tomorrow.getDate() + 3);

        cart.push({
            id: productId,
            startDate: tomorrow.toISOString().split('T')[0],
            endDate: returnDate.toISOString().split('T')[0]
        });
        localStorage.setItem('mid_cart', JSON.stringify(cart));
    }
    window.location.href = "cart.html";
}

// Xử lý Quick View Modal
function openQuickview(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    let specsHTML = "";
    for (const [key, value] of Object.entries(prod.specs)) {
        specsHTML += `
            <li>
                <span>${key}</span>
                <span>${value}</span>
            </li>
        `;
    }

    if (quickviewContent) {
        quickviewContent.innerHTML = `
            <div class="modal-left">
                <div class="modal-img-wrapper">
                    <img src="${prod.image}" alt="${prod.name}">
                </div>
            </div>
            <div class="modal-right">
                <h2>${prod.name}</h2>
                <div class="modal-price">${prod.price.toLocaleString("vi-VN")}₫/ngày</div>
                <p class="modal-desc">${prod.desc}</p>
                
                <h4 style="font-family: 'Montserrat'; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-top: 10px;">Thông số kỹ thuật</h4>
                <ul class="modal-specs-list">
                    ${specsHTML}
                </ul>

                <div class="modal-action-buttons">
                    <button class="btn-primary" onclick="rentNow('${prod.id}')">ĐẶT THUÊ</button>
                    <a href="product-detail.html?id=${prod.id}" class="btn-outline">CHI TIẾT</a>
                </div>
            </div>
        `;
    }

    if (quickviewModal) {
        quickviewModal.classList.add("active");
    }
}

function closeQuickview() {
    if (quickviewModal) {
        quickviewModal.classList.remove("active");
    }
}

// Xử lý thanh Compare Bar & Toggle lựa chọn so sánh
function toggleCompare(checkbox, productId) {
    if (checkbox.checked) {
        if (comparedProductIds.length >= 3) {
            alert("Bạn chỉ có thể so sánh tối đa 3 sản phẩm cùng lúc.");
            checkbox.checked = false;
            return;
        }
        if (!comparedProductIds.includes(productId)) {
            comparedProductIds.push(productId);
        }
    } else {
        comparedProductIds = comparedProductIds.filter(id => id !== productId);
    }
    updateCompareBar();
}

// Cập nhật thanh so sánh
function updateCompareBar() {
    if (!compareCount || !compareThumbs || !compareBar) return;
    compareCount.textContent = comparedProductIds.length;
    compareThumbs.innerHTML = "";

    if (comparedProductIds.length >= 2) {
        compareBar.classList.add("active");
    } else {
        compareBar.classList.remove("active");
    }

    comparedProductIds.forEach(id => {
        const prod = PRODUCTS_DATA.find(p => p.id === id);
        if (prod) {
            const thumb = document.createElement("div");
            thumb.className = "compare-thumb";
            thumb.innerHTML = `
                <img src="${prod.image}" alt="${prod.name}">
                <div class="compare-thumb-remove" onclick="removeCompareItem('${prod.id}')">&times;</div>
            `;
            compareThumbs.appendChild(thumb);
        }
    });
}

// Xóa một sản phẩm khỏi danh sách so sánh từ Compare Bar
function removeCompareItem(productId) {
    comparedProductIds = comparedProductIds.filter(id => id !== productId);
    renderProducts(); 
    updateCompareBar();
}

// Xử lý Compare Popup và hiển thị bảng so sánh
function openComparePopup() {
    if (comparedProductIds.length < 2 || !compareTable || !comparePopup) return;

    const selectedProducts = comparedProductIds.map(id => PRODUCTS_DATA.find(p => p.id === id));
    const allSpecKeys = new Set();
    selectedProducts.forEach(prod => {
        if (prod && prod.specs) {
            Object.keys(prod.specs).forEach(key => allSpecKeys.add(key));
        }
    });

    let tableHTML = `
        <tr>
            <th>Thông số kỹ thuật</th>
    `;
    selectedProducts.forEach(prod => {
        tableHTML += `
            <th>
                <img src="${prod.image}" alt="${prod.name}"><br>
                <span class="compare-product-name">${prod.name}</span>
                <span style="font-family: 'Inter'; font-weight: 600; font-size: 0.85rem; color: #666; margin-top: 5px; display: inline-block;">${prod.price.toLocaleString("vi-VN")}₫/ngày</span>
            </th>
        `;
    });
    tableHTML += `</tr>`;

    tableHTML += `
        <tr>
            <td>Phân loại</td>
    `;
    selectedProducts.forEach(prod => {
        tableHTML += `<td>${prod.category}</td>`;
    });
    tableHTML += `</tr>`;

    tableHTML += `
        <tr>
            <td>Thương hiệu</td>
    `;
    selectedProducts.forEach(prod => {
        tableHTML += `<td>${prod.brand}</td>`;
    });
    tableHTML += `</tr>`;

    allSpecKeys.forEach(key => {
        tableHTML += `
            <tr>
                <td>${key}</td>
        `;
        selectedProducts.forEach(prod => {
            const value = (prod.specs && prod.specs[key]) ? prod.specs[key] : "—";
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += `</tr>`;
    });

    tableHTML += `
        <tr>
            <td>Hành động</td>
    `;
    selectedProducts.forEach(prod => {
        tableHTML += `
            <td>
                <button class="btn-primary" style="padding: 8px 18px; font-size: 0.75rem;" onclick="rentNow('${prod.id}')">ĐẶT THUÊ NGAY</button>
            </td>
        `;
    });
    tableHTML += `</tr>`;

    compareTable.innerHTML = tableHTML;
    comparePopup.classList.add("active");
}

function closeComparePopup() {
    if (comparePopup) {
        comparePopup.classList.remove("active");
    }
}
