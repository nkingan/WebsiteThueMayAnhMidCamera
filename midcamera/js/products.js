// 🛍️ MIDCAMERA - PRODUCTS JS

// Mảng dữ liệu PRODUCTS_DATA được dùng chung toàn cục từ js/main.js

// Trạng thái bộ lọc và so sánh
let selectedCategory = "all";
let selectedBrands = [];
let selectedStatuses = [];
let maxPrice = 300000;
let comparedProductIds = [];
let searchQuery = "";

// Đăng ký các phần tử DOM
let productsGrid;
let priceRange;
let priceRangeValue;
let btnResetFilter;
let categoryItems;
let quickviewModal;
let quickviewBody;
let quickviewFooter;
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
    quickviewBody = document.getElementById("quickviewBody");
    quickviewFooter = document.getElementById("quickviewFooter");
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

    // Lắng nghe sự kiện checkbox tình trạng
    const statusCheckboxes = document.querySelectorAll('input[name="status"]');
    statusCheckboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            selectedStatuses = Array.from(statusCheckboxes)
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
            selectedStatuses = [];
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
            statusCheckboxes.forEach(c => c.checked = false);
            searchQuery = "";
            const headerSearchInput = document.getElementById("globalSearchInput");
            if (headerSearchInput) headerSearchInput.value = "";
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
    const search = params.get("search");
    if (search) {
        searchQuery = search.toLowerCase();
    }
}

// Render danh sách sản phẩm theo bộ lọc
function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    const filteredProducts = PRODUCTS_DATA.filter(prod => {
        const matchesCat = (selectedCategory === "all" || prod.category === selectedCategory);
        const matchesBrand = (selectedBrands.length === 0 || selectedBrands.includes(prod.brand));
        const matchesStatus = (selectedStatuses.length === 0 || selectedStatuses.includes(prod.status));
        const matchesPrice = (prod.price <= maxPrice);
        const matchesSearch = !searchQuery || 
            prod.name.toLowerCase().includes(searchQuery) ||
            prod.desc.toLowerCase().includes(searchQuery) ||
            prod.brand.toLowerCase().includes(searchQuery) ||
            prod.category.toLowerCase().includes(searchQuery);
        return matchesCat && matchesBrand && matchesStatus && matchesPrice && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px 0; color: #666; font-family: 'Inter';">Không tìm thấy thiết bị phù hợp với bộ lọc.</p>`;
        return;
    }

    filteredProducts.forEach(prod => {
        const card = document.createElement("div");
        card.className = "camera-card";
        const isCompared = comparedProductIds.includes(prod.id) ? "checked" : "";

        let statusText = "";
        if (prod.status === "available") statusText = "Sẵn sàng";
        else if (prod.status === "rented") statusText = "Đã thuê";
        else if (prod.status === "maintenance") statusText = "Bảo dưỡng";

        const rentBtnHTML = prod.status === "maintenance"
            ? `<a href="javascript:void(0)" class="btn-rent disabled">BẢO DƯỠNG</a>`
            : `<a href="javascript:void(0)" onclick="rentNow('${prod.id}')" class="btn-rent">THUÊ NGAY</a>`;

        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="status-badge-floating ${prod.status}">${statusText}</span>
                <img src="${resolveImagePath(prod.image)}" alt="${prod.name}">
            </div>
            <div class="card-info">
                <span class="product-type-tag">${prod.category} • ${prod.brand}</span>
                <h3>${prod.name}</h3>
                <p class="card-desc">${prod.desc}</p>
                <div class="card-divider"></div>
                <div class="card-bottom">
                    <div class="card-price-block">
                        <span class="price-tag">${prod.price.toLocaleString("vi-VN")}₫/ngày</span>
                        <label class="compare-checkbox-label">
                            <input type="checkbox" onchange="toggleCompare(this, '${prod.id}')" ${isCompared}> So sánh
                        </label>
                    </div>
                    <div class="card-button-block">
                        ${rentBtnHTML}
                        <button class="btn-outline btn-quick-view" onclick="openQuickview('${prod.id}')">XEM NHANH</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Đặt thuê ngay (thêm sản phẩm vào giỏ và đi tới trang giỏ hàng)
function rentNow(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (prod && prod.status === 'maintenance') {
        alert("Thiết bị này hiện đang được bảo trì kỹ thuật và không thể đặt thuê lúc này. Vui lòng quay lại sau.");
        return;
    }

    const user = localStorage.getItem('mid_user');
    if (!user) {
        alert("Vui lòng đăng nhập trước khi tiến hành đặt thuê thiết bị.");
        localStorage.setItem("mid_redirect_after_login", window.location.href);
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
            endDate: returnDate.toISOString().split('T')[0],
            accessories: []
        });
        localStorage.setItem('mid_cart', JSON.stringify(cart));
    }
    window.location.href = "cart.html";
}

// Xử lý Quick View Modal
function openQuickview(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    // Lọc bỏ duplicate và chỉ giữ các dòng thông số chuẩn
    const allowedSpecs = [
        { label: "Cảm biến", keys: ["Cảm biến", "Loại cảm biến"] },
        { label: "Bộ xử lý", keys: ["Bộ xử lý", "Bộ xử lý hình ảnh"] },
        { label: "Lấy nét", keys: ["Lấy nét", "Hệ thống lấy nét"] },
        { label: "Kính ngắm", keys: ["Kính ngắm", "Kính ngắm lai OVF/EVF"] },
        { label: "Chế độ giả lập màu", keys: ["Chế độ giả lập màu", "Giả lập màu", "Giả lập màu phim"] },
        { label: "Tốc độ chụp liên tiếp", keys: ["Tốc độ chụp liên tiếp"] },
        { label: "Trọng lượng", keys: ["Trọng lượng", "Trọng lượng thân máy", "Trọng lượng máy"] }
    ];
    
    let specsHTML = "";
    allowedSpecs.forEach(spec => {
        for (const key of spec.keys) {
            if (prod.specs && prod.specs[key]) {
                specsHTML += `
                    <tr>
                        <td>${spec.label}</td>
                        <td>${prod.specs[key]}</td>
                    </tr>
                `;
                break; // Chỉ render match đầu tiên để tránh trùng lặp
            }
        }
    });

    // Sẵn sàng vs Đã thuê vs Bảo dưỡng status badge
    let badgeClass = "";
    let badgeText = "";
    if (prod.status === "available") {
        badgeClass = "available";
        badgeText = "Sẵn sàng";
    } else if (prod.status === "rented") {
        badgeClass = "rented";
        badgeText = "Đã thuê";
    } else if (prod.status === "maintenance") {
        badgeClass = "rented"; // mapped style
        badgeText = "Bảo dưỡng";
    }
    // Wait, the status-badge.rented class in request says: .status-badge.rented { background: #fee2e2; color: #b91c1c; }
    // Let's map "maintenance" to rented/maintenance or make badgeClass match status
    badgeClass = prod.status; 
    if (prod.status === "maintenance") {
        badgeClass = "maintenance";
        badgeText = "Bảo dưỡng";
    } else if (prod.status === "rented") {
        badgeText = "Đã thuê";
    } else {
        badgeText = "Sẵn sàng";
    }
    
    const statusBadgeHTML = `<span class="status-badge ${badgeClass}">${badgeText}</span>`;

    const quickRentBtnHTML = prod.status === "maintenance"
        ? `<button class="btn-book disabled" style="background-color: #8E8E93; cursor: not-allowed; opacity: 0.6;" disabled>BẢO DƯỠNG</button>`
        : `<button class="btn-book" onclick="rentNow('${prod.id}')">ĐẶT THUÊ</button>`;

    if (quickviewBody) {
        quickviewBody.innerHTML = `
            <div class="modal-left">
                <div class="modal-img-wrapper">
                    <img src="${resolveImagePath(prod.image)}" alt="${prod.name}">
                </div>
            </div>
            <div class="modal-right">
                <h2>${prod.name}${statusBadgeHTML}</h2>
                <div class="modal-price">${prod.price.toLocaleString("vi-VN")}₫/ngày</div>
                <p class="modal-desc">${prod.desc}</p>
                
                <h4 style="font-family: 'Montserrat'; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-top: 15px; letter-spacing: 0.05em; color: #8E8E93;">Thông số kỹ thuật</h4>
                <table class="specs-table">
                    <tbody>
                        ${specsHTML}
                    </tbody>
                </table>
            </div>
        `;
    }

    if (quickviewFooter) {
        quickviewFooter.innerHTML = `
            ${quickRentBtnHTML}
            <a href="product-detail.html?id=${prod.id}" class="btn-detail">CHI TIẾT</a>
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
                <img src="${resolveImagePath(prod.image)}" alt="${prod.name}">
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
                <img src="${resolveImagePath(prod.image)}" alt="${prod.name}"><br>
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
