// 📸 MIDCAMERA - PRODUCT DETAIL JS

// Dữ liệu PRODUCTS_DATA và ACCESSORIES_DATA được kế thừa toàn cục từ js/main.js


let currentProduct = null;
let selectedAccessories = [];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Phân tích ID sản phẩm từ URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id") || "canon-r50";
    
    currentProduct = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
    
    // Nạp các reviews lưu trong localStorage nếu có
    const localReviews = localStorage.getItem(`mid_reviews_${currentProduct.id}`);
    if (localReviews) {
        currentProduct.reviews = JSON.parse(localReviews);
    }
    
    // Render dữ liệu máy ảnh
    renderProductDetails();
    renderAccessories();
    renderReviews();

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

    // 4. Khởi tạo chọn Rating Sao cho Form viết đánh giá
    initReviewFormStars();

    // Lắng nghe submit Form đánh giá
    const reviewForm = document.getElementById("writeReviewForm");
    if (reviewForm) {
        reviewForm.addEventListener("submit", handleReviewSubmit);
    }

    // 5. Lắng nghe nút Thêm vào giỏ
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

    // Khóa hoàn toàn chức năng nếu máy đang Bảo trì
    if (currentProduct.status === "maintenance") {
        if (btnAddToCart) {
            btnAddToCart.disabled = true;
            btnAddToCart.textContent = "THIẾT BỊ ĐANG BẢO TRÌ";
            btnAddToCart.style.backgroundColor = "#8E8E93";
            btnAddToCart.style.borderColor = "#8E8E93";
            btnAddToCart.style.cursor = "not-allowed";
        }
        if (btnRentNow) {
            btnRentNow.disabled = true;
            btnRentNow.textContent = "KHÔNG THỂ THUÊ";
            btnRentNow.style.borderColor = "#8E8E93";
            btnRentNow.style.color = "#8E8E93";
            btnRentNow.style.cursor = "not-allowed";
        }

        // Chèn thông báo bảo trì định kỳ
        const maintAlert = document.createElement("div");
        maintAlert.className = "maint-alert-box";
        maintAlert.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Thiết bị này hiện đang được bảo trì định kỳ để chuẩn bị chất lượng tốt nhất. Quý khách vui lòng chọn máy ảnh khác.`;
        const pickerBox = document.querySelector(".date-picker-box");
        if (pickerBox) {
            pickerBox.insertBefore(maintAlert, pickerBox.firstChild);
        }
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

    let statusLabel = "";
    if (currentProduct.status === "available") statusLabel = " • Sẵn sàng";
    else if (currentProduct.status === "rented") statusLabel = " • Đang cho thuê";
    else if (currentProduct.status === "maintenance") statusLabel = " • Đang bảo trì";

    if (catBadge) catBadge.textContent = `${currentProduct.category} • ${currentProduct.brand}${statusLabel}`;
    if (priceBox) priceBox.textContent = currentProduct.price.toLocaleString("vi-VN") + "₫/ngày";
    if (shortDesc) shortDesc.textContent = currentProduct.shortDesc;
    if (longDesc) longDesc.textContent = currentProduct.longDesc;

    // Gallery ảnh lớn
    const mainImg = document.getElementById("productMainImage");
    if (mainImg) {
        mainImg.src = resolveImagePath(currentProduct.gallery[0]);
        mainImg.alt = currentProduct.name;
    }

    // Gallery thumbnail strip
    const thumbStrip = document.getElementById("productThumbnailStrip");
    if (thumbStrip) {
        thumbStrip.innerHTML = "";
        currentProduct.gallery.forEach((imgUrl, idx) => {
            const thumb = document.createElement("div");
            thumb.className = `thumbnail-item ${idx === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${resolveImagePath(imgUrl)}" alt="${currentProduct.name} View ${idx}">`;
            thumb.addEventListener("click", () => {
                document.querySelectorAll(".thumbnail-item").forEach(t => t.classList.remove("active"));
                thumb.classList.add("active");
                if (mainImg) mainImg.src = resolveImagePath(imgUrl);
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
                <img src="${resolveImagePath(acc.image)}" alt="${acc.name}">
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

    // Reset cảnh báo overlap cũ
    const pickerBox = document.querySelector(".date-picker-box");
    const existingAlert = document.getElementById("overlapWarningAlert");
    if (existingAlert) existingAlert.remove();
    startInput.classList.remove("invalid-date");
    returnInput.classList.remove("invalid-date");

    const btnAddToCart = document.getElementById("btnAddToCart");
    const btnRentNow = document.getElementById("btnRentNow");

    if (currentProduct.status !== "maintenance") {
    if (btnAddToCart) {
        btnAddToCart.disabled = false;
        btnAddToCart.textContent = "THÊM VÀO GIỎ HÀNG";

        // Xóa trạng thái overlap
        btnAddToCart.classList.remove("btn-disabled-overlap");

        // Khôi phục class gốc
        btnAddToCart.className = "btn-add-to-cart";

        btnAddToCart.style.backgroundColor = "";
        btnAddToCart.style.borderColor = "";
        btnAddToCart.style.cursor = "";
    }

    if (btnRentNow) {
        btnRentNow.disabled = false;
        btnRentNow.textContent = "ĐẶT THUÊ NGAY";

        // Xóa trạng thái overlap
        btnRentNow.classList.remove("btn-disabled-overlap");

        // Khôi phục class gốc
        btnRentNow.className = "btn-rent-now";

        btnRentNow.style.borderColor = "";
        btnRentNow.style.color = "";
        btnRentNow.style.cursor = "";
    }
}
    if (end < start) {
        returnInput.value = startVal;
        calculateTotal();
        return;
    }

    // Kiểm tra trùng lịch (Overlap Check)
    const checkResult = checkDateOverlap(currentProduct.id, startVal, returnVal);
    if (checkResult.overlap) {
        startInput.classList.add("invalid-date");
        returnInput.classList.add("invalid-date");

        // Vô hiệu hóa các nút đặt thuê
        // Vô hiệu hóa các nút đặt thuê và gắn class để CSS xử lý style bận lịch
if (btnAddToCart) {
    btnAddToCart.disabled = true;
    btnAddToCart.textContent = "LỊCH TRÙNG - KHÔNG THỂ ĐẶT";
    btnAddToCart.className = "btn-add-to-cart btn-disabled-overlap"; // Thêm class mới
    btnAddToCart.style = ""; // Xóa bỏ hoàn toàn inline style cũ gây lỗi viền 3D
}
if (btnRentNow) {
    btnRentNow.disabled = true;
    btnRentNow.textContent = "KHÔNG KHẢ DỤNG";
    btnRentNow.className = "btn-rent-now btn-disabled-overlap"; // Thêm class mới
    btnRentNow.style = ""; // Xóa bỏ hoàn toàn inline style cũ gây lỗi viền 3D
}

        // Tạo hộp cảnh báo cực đẹp màu đỏ
        const alertDiv = document.createElement("div");
        alertDiv.id = "overlapWarningAlert";
        alertDiv.className = "overlap-warning-box";
        alertDiv.innerHTML = `
            <i class="fa-solid fa-calendar-xmark"></i>
            <div>
                <strong>Lịch bận kẹt!</strong> Thiết bị này đã có người đặt thuê trong khoảng thời gian từ 
                <strong>${checkResult.range.start}</strong> đến <strong>${checkResult.range.end}</strong>. 
                Vui lòng chọn ngày nhận sau ngày trả trên hoặc đổi khoảng ngày khác.
            </div>
        `;
        if (pickerBox) {
            pickerBox.insertBefore(alertDiv, pickerBox.querySelector(".total-summary-row"));
        }

        const daysCount = document.getElementById("daysCount");
        if (daysCount) daysCount.textContent = "—";
        const totalDisp = document.getElementById("totalPriceDisplay");
        if (totalDisp) totalDisp.textContent = "Kẹt lịch";
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

// Xử lý nạp và hiển thị Tab Đánh giá (Reviews Logic)
function renderReviews() {
    const avgScoreEl = document.getElementById("averageScoreDisplay");
    const avgStarsEl = document.getElementById("averageStarsDisplay");
    const countEl = document.getElementById("reviewsCountDisplay");
    const barsContainer = document.getElementById("ratingBarsContainer");
    const listContainer = document.getElementById("reviewsListContainer");

    if (!avgScoreEl || !listContainer) return;

    const reviewsList = currentProduct.reviews || [];
    const totalReviews = reviewsList.length;

    if (totalReviews === 0) {
        avgScoreEl.textContent = "0.0";
        avgStarsEl.textContent = "☆☆☆☆☆";
        countEl.textContent = "(0 đánh giá)";
        
        let emptyBarsHTML = "";
        for (let star = 5; star >= 1; star--) {
            emptyBarsHTML += `
                <div class="rating-bar-row">
                    <span class="star-num">${star}★</span>
                    <div class="bar-bg"><div class="bar-fill" style="width: 0%"></div></div>
                    <span class="star-percent-count">0</span>
                </div>
            `;
        }
        barsContainer.innerHTML = emptyBarsHTML;
        listContainer.innerHTML = `<p class="no-reviews-msg">Thiết bị này chưa có đánh giá nào. Hãy là người đầu tiên trải nghiệm và chia sẻ cảm nhận!</p>`;
        return;
    }

    // Tính điểm trung bình
    let sumScore = 0;
    reviewsList.forEach(r => sumScore += r.rating);
    const average = (sumScore / totalReviews).toFixed(1);
    
    avgScoreEl.textContent = average;
    countEl.textContent = `(${totalReviews} đánh giá)`;

    // Render số sao trung bình
    const roundAvg = Math.round(average);
    avgStarsEl.textContent = "★".repeat(roundAvg) + "☆".repeat(5 - roundAvg);

    // Render thanh tỷ lệ rating bars
    let barsHTML = "";
    for (let star = 5; star >= 1; star--) {
        const starCount = reviewsList.filter(r => r.rating === star).length;
        const percentage = (starCount / totalReviews) * 100;
        barsHTML += `
            <div class="rating-bar-row">
                <span class="star-num">${star}★</span>
                <div class="bar-bg">
                    <div class="bar-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="star-percent-count">${starCount}</span>
            </div>
        `;
    }
    barsContainer.innerHTML = barsHTML;

    // Render danh sách đánh giá
    let listHTML = "";
    // Đảo ngược để đánh giá mới nhất lên trên đầu
    [...reviewsList].reverse().forEach(r => {
        const starsText = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
        listHTML += `
            <div class="review-item">
                <div class="review-item-header">
                    <div class="review-item-avatar">${r.author.charAt(0).toUpperCase()}</div>
                    <div class="review-item-meta">
                        <h4>${r.author}</h4>
                        <span class="review-item-date">${r.date}</span>
                    </div>
                    <div class="review-item-stars">${starsText}</div>
                </div>
                <p class="review-item-comment">${r.comment}</p>
            </div>
        `;
    });
    listContainer.innerHTML = listHTML;
}

// Khởi tạo tương tác chọn Rating Sao trong Form
function initReviewFormStars() {
    const stars = document.querySelectorAll("#starRatingSelect i");
    if (stars.length === 0) return;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = parseInt(star.getAttribute("data-rating"));
            document.getElementById("selectedStarRatingValue").value = rating;
            
            // Highlight số sao tương ứng
            stars.forEach((s, idx) => {
                if (idx < rating) {
                    s.className = "fa-solid fa-star";
                } else {
                    s.className = "fa-regular fa-star";
                }
            });
        });
    });
}

// Xử lý gửi Đánh giá mới
function handleReviewSubmit(e) {
    e.preventDefault();

    const authorInput = document.getElementById("reviewAuthor");
    const commentInput = document.getElementById("reviewComment");
    const ratingVal = parseInt(document.getElementById("selectedStarRatingValue").value) || 5;

    if (!authorInput || !commentInput) return;

    const today = new Date();
    const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    const newReview = {
        author: authorInput.value.trim(),
        date: dateStr,
        rating: ratingVal,
        comment: commentInput.value.trim()
    };

    if (!currentProduct.reviews) currentProduct.reviews = [];
    currentProduct.reviews.push(newReview);

    // Lưu vào localStorage để duy trì trạng thái đánh giá
    localStorage.setItem(`mid_reviews_${currentProduct.id}`, JSON.stringify(currentProduct.reviews));

    // Render lại giao diện tab
    renderReviews();

    // Reset Form
    authorInput.value = "";
    commentInput.value = "";
    document.getElementById("selectedStarRatingValue").value = "5";
    
    const stars = document.querySelectorAll("#starRatingSelect i");
    stars.forEach(s => s.className = "fa-solid fa-star"); // Reset về 5 sao sáng

    alert("Cảm ơn bạn đã gửi đánh giá! Ý kiến của bạn đã được ghi nhận thành công.");
}

// Thêm vào giỏ hàng
function addToCart(redirect = false) {
    if (currentProduct.status === "maintenance") {
        alert("Thiết bị này đang bảo trì, không thể tiến hành giao dịch thuê.");
        return;
    }

    const user = localStorage.getItem('mid_user');
    if (!user) {
        alert("Vui lòng đăng nhập trước khi thực hiện giao dịch thuê thiết bị.");
        localStorage.setItem("mid_redirect_after_login", window.location.href);
        window.location.href = "auth.html";
        return;
    }

    const startInput = document.getElementById("startDatePicker");
    const returnInput = document.getElementById("returnDatePicker");
    if (!startInput || !returnInput) return;

    const startDate = startInput.value;
    const endDate = returnInput.value;

    // Validate trùng lặp một lần nữa trước khi thêm vào giỏ hàng
    const checkResult = checkDateOverlap(currentProduct.id, startDate, endDate);
    if (checkResult.overlap) {
        alert(`Không thể đặt! Thiết bị đã bị trùng lịch trong khoảng thời gian từ ${checkResult.range.start} đến ${checkResult.range.end}. Vui lòng chọn ngày khác.`);
        return;
    }

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
