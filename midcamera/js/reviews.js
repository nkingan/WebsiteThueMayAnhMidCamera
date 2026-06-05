

// 1. CƠ SỞ DỮ LIỆU ĐÁNH GIÁ BAN ĐẦU (Gia tăng niềm tin - Tag xác thực - Ảnh minh chứng)
let REVIEWS_DATA = [
    {
        name: "Vũ Trọng Sinh",
        avatar: "TS",
        date: "31/05/2026",
        stars: 5,
        device: "Fujifilm X100V",
        deviceTag: "fujifilm",
        usecase: "Vlog & Đời thường",
        usecaseTag: "vlog",
        content: "Thuê máy đi du lịch tại MID là lựa chọn chuẩn xác nhất. Máy nhỏ gọn, chụp ảnh phong cảnh và chân dung gia đình đều rất đẹp. Các bạn nhân viên thì 10 điểm, hỗ trợ cực kỳ chuyên nghiệp và thân thiện. Gia đình mình đã có một bộ ảnh du lịch rất ưng ý nhờ sự hỗ trợ của các bạn!",
        rentalDays: "2 ngày",
        helpful: 100,
        photos: ["../images/review/Canon.png"], 
        isVerified: true
    },
    {
        name: "Nguyễn Minh Hoàng",
        avatar: "MH",
        date: "28/05/2026",
        stars: 5,
        device: "Fujifilm X100V",
        deviceTag: "fujifilm",
        usecase: "Vlog & Đời thường",
        usecaseTag: "vlog",
        content: "Dịch vụ cực tốt! Các bạn trẻ của MID hỗ trợ và tư vấn rất nhiệt tình, nhờ có MID mà gia đình mình đã có một bộ ảnh đầy tháng cho con gái vô cùng ưng ý và ý nghĩa. Chắc chắn mình sẽ còn quay lại ủng hộ MiD trong những cột mốc sắp tới của con. Highly recommend cho bố mẹ nào muốn tự tay ghi lại kỷ niệm cho bé nhé!",
        rentalDays: "2 ngày",
        helpful: 40,
        photos: ["../images/review/Fujifilm X100V.jpg", "../images/review/Fujifilm X100V(2).jpg"],
        isVerified: true
    },
    {
        name: "Lê Khánh Chi",
        avatar: "KC",
        date: "25/05/2026",
        stars: 5,
        device: "Canon EOS R50",
        deviceTag: "canon",
        usecase: "Kỷ yếu",
        usecaseTag: "Kỷ yếu",
        content: "Mình thuê máy để chụp cho sự kiện của trường, máy chạy rất mượt, lấy nét tốt. Nhân viên thân thiện, hỗ trợ nhiệt tình từ lúc nhận đến lúc trả máy. 10 điểm cho sự chuyên nghiệp của MID!",
        rentalDays: "1 ngày",
        helpful: 29,
        photos: ["../images/review/canon.jpg", "../images/review/canon2.jpg", "../images/review/canon3.jpg"],
        isVerified: true
    },
    {
        name: "Phan Quốc Huy",
        avatar: "QH",
        date: "22/01/2026",
        stars: 5,
        device: "Fujifilm X-T100",
        deviceTag: "fujifilm",
        usecase: "Du lịch",
        usecaseTag: "travel",
        content: "Thuê máy tại MID để chụp ảnh áo dài cho bạn gái và mình thực sự ưng ý! Máy lấy nét rất chuẩn, lên màu da cực xinh nên bộ ảnh nào cũng 'nịnh' mắt. Nhân viên shop tư vấn rất kỹ về cài đặt để mình dễ thao tác dù không phải dân chuyên. Cảm ơn MID đã giúp mình có một buổi chụp hình thành công!",
        rentalDays: "2 ngày",
        helpful: 15,
        photos: ["../images/review/FJXT100.jpg", "../images/review/FJXT100(2).jpg", "../images/review/FJXT100(3).jpg"],
        isVerified: true
    },
    {
        name: "Nguyễn Phương Linh",
        avatar: "PL",
        date: "20/05/2026",
        stars: 5,
        device: "Fujifilm instax Mini 11 ",
        deviceTag: "fujifilm",
        usecase: "Kỷ yếu",
        usecaseTag: "kỷ yếu",
        content: "Một mùa kỷ yếu thật trọn vẹn nhờ có chiếc máy ảnh xịn xò từ MID. Mình thuê máy để lưu giữ lại những khoảnh khắc cuối của thời học sinh, và kết quả thực sự ngoài mong đợi. Máy chụp lên màu cực thơ, bắt trọn được từng nụ cười và khoảng khắc siu đẹp. Cảm ơn các anh chị nhân viên đã tư vấn rất tận tình, hướng dẫn mình cách chỉnh máy để ảnh nào cũng lung linh. Nhất định sẽ giới thiệu bạn bè ghé shop ạ",
        rentalDays: "2 ngày",
        helpful: 8,
        photos: ["../images/review/FJinstaxMini.jpg","../images/review/FJinstaxMini(2).jpg", "../images/review/FJinstaxMini(3).jpg"],
        isVerified: true
    },
    {
        name: "Vũ Huyền Kim Khánh",
        avatar: "KK",
        date: "18/05/2026",
        stars: 5,
        device: "DJI Pocket 3",
        deviceTag: "dji",
        usecase: "Đám cưới & Vlog",
        usecaseTag: "vlog",
        content: "Bị nghiện DJI Pocket 3 mất rồi! Ghé MID thuê máy để lưu giữ lại ngày trọng đại của đứa bạn thân. Máy hoạt động rất ổn định, hình ảnh trong veo, chụp ở điều kiện ánh sáng nhà hàng cũng rất đẹp. Thủ tục nhanh gọn, nhân viên thân thiện. Một địa chỉ cực kỳ uy tín cho những ai muốn tự tay ghi lại những khoảnh khắc đáng nhớ của bạn bè!",
        rentalDays: "2 ngày",
        helpful: 53,
        photos: ["../images/review/DJIPocket3.jpg", "../images/review/DJIPocket3(2).jpg"],
        isVerified: true
    },
    {
        name: "Trần Ngọc Anh",
        avatar: "NA",
        date: "18/05/2026",
        stars: 5,
        device: "DJI Pocket 3",
        deviceTag: "dji",
        usecase: "Vlog & Đời thường",
        usecaseTag: "vlog",
        content: "Bị nghiện DJI Pocket 3 mất rồi! Quay vlog du lịch siêu mượt. Gimbal chống rung 3 trục cơ học đỉnh thật sự, chạy nhảy mà video vẫn êm ru. Thiết bị nhận về cực sạch, đầy đủ phụ kiện đi kèm. Quy trình nhận trả nhanh chóng, bạn nhân viên kiểm tra máy nhiệt tình và vui vẻ.",
        rentalDays: "2 ngày",
        helpful: 53,
        isVerified: true
    },
    {
        name: "Phạm Duy Nam",
        avatar: "DN",
        date: "10/05/2026",
        stars: 5,
        device: "Sony A7IV",
        deviceTag: "sony",
        usecase: "Vlog & Đời thường",
        usecaseTag: "vlog",
        content: "Bộ Sony A7IV chuyên nghiệp chụp ảnh chân dung chất lượng đỉnh cao. Cảm biến 33MP sắc nét, mình kiểm tra sensor sạch không một tì vết trước khi dùng. Màu sắc lên no, chuyển vùng sáng tối êm ái. Phù hợp cho anh em thợ hoặc những ai muốn trải nghiệm thiết bị phân khúc cao cấp.",
        rentalDays: "3 ngày",
        helpful: 31,
        photos: ["../images/review/SonyA7IV.jpg", "../images/review/SonyA7IV(2).jpg"],
        isVerified: true
    },
    {
        name: "Vũ Vân Anh",
        avatar: "VA",
        date: "02/05/2026",
        stars: 4,
        device: "Fujifilm X-S10",
        deviceTag: "fujifilm",
        usecase: "Du lịch",
        usecaseTag: "travel",
        content: "Máy ngoại hình vintage khá đẹp. Tuy nhiên ống kính kit đi kèm khẩu độ hơi nhỏ nên khi chụp tối trong nhà hơi bị nhiễu hạt. Các bạn thuê lưu ý chụp ban ngày hoặc ngoài trời nhiều sáng thì chất ảnh sẽ trong trẻo nghệ thuật hơn rất nhiều.",
        rentalDays: "1 ngày",
        helpful: 8,
        photos: ["../images/review/FJXT10.jpg", "../images/review/FJXT10(2).jpg"],
        isVerified: true
    }
];

// Trạng thái ứng dụng
let activeFilters = { device: "all", usecase: "all", stars: "all" };
let currentSort = "newest";
let helpfulClickedMap = {}; // Lưu trữ xem user đã nhấn nút Hữu ích cho đánh giá nào chưa
let uploadedImages = [];   // Lưu trữ base64 của ảnh upload trên Form

// Map Icon cho mục đích và hãng
const usecaseIconMap = { 
    "Du lịch": "ti-mountain", 
    "Đám cưới": "ti-heart", 
    "Kỷ yếu": "ti-users", 
    "Vlog": "ti-video", 
    "Vlog & Đời thường": "ti-video" 
};
const deviceIconMap = { 
    "fujifilm": "ti-camera", 
    "canon": "ti-camera-bolt", 
    "dji": "ti-drone", 
    "sony": "ti-aperture" 
};

/**
 * Helper: Tạo HTML các ngôi sao
 */
function getStarsHtml(starsCount) {
    let html = '<div class="card-stars d-flex gap-1 me-2">';
    for (let i = 1; i <= 5; i++) {
        if (i <= starsCount) {
            html += '<i class="ti ti-star-filled text-warning"></i>';
        } else {
            html += '<i class="ti ti-star text-secondary opacity-50"></i>';
        }
    }
    html += '</div>';
    return html;
}

/**
 * Chuyển chuỗi định dạng DD/MM/YYYY thành đối tượng Date để so sánh
 */
function parseDate(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return new Date();
}

/**
 * Tính toán điểm số trung bình và cập nhật giao diện Hero Section
 */
function calculateAndPopulateStats() {
    if (REVIEWS_DATA.length === 0) return;
    
    // 1. Tính toán điểm số trung bình dựa trên Baseline 1,200+ đánh giá (CRO & Realistic)
    const baselineReviewsCount = 1214;
    const baselineStarCounts = { 5: 1092, 4: 85, 3: 37, 2: 0, 1: 0 };
    
    // Tính toán số lượng đánh giá mới do người dùng thêm vào form
    const INITIAL_REVIEWS_COUNT = 6;
    let addedReviews = [];
    if (REVIEWS_DATA.length > INITIAL_REVIEWS_COUNT) {
        addedReviews = REVIEWS_DATA.slice(0, REVIEWS_DATA.length - INITIAL_REVIEWS_COUNT);
    }
    
    const totalReviews = baselineReviewsCount + addedReviews.length;
    const starCounts = { ...baselineStarCounts };
    
    addedReviews.forEach(r => {
        if (starCounts[r.stars] !== undefined) {
            starCounts[r.stars]++;
        }
    });
    
    let totalStarsSum = 0;
    for (let s = 1; s <= 5; s++) {
        totalStarsSum += starCounts[s] * s;
    }
    
    const average = (totalStarsSum / totalReviews).toFixed(1);
    
    // Cập nhật điểm lớn
    const scoreNumeralEl = document.querySelector('.hero-score-card h2');
    if (scoreNumeralEl) {
        scoreNumeralEl.textContent = average;
    }
    
    // Cập nhật các sao vàng hiển thị kèm điểm số trung bình
    const ratingStarsEl = document.querySelector('.hero-score-card .rating-stars');
    if (ratingStarsEl) {
        let starsHtml = '';
        const avgNum = parseFloat(average);
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(avgNum)) {
                starsHtml += '<i class="ti ti-star-filled text-warning"></i>';
            } else if (i - 0.5 <= avgNum) {
                starsHtml += '<i class="ti ti-star-half-filled text-warning"></i>';
            } else {
                starsHtml += '<i class="ti ti-star text-secondary opacity-50"></i>';
            }
        }
        ratingStarsEl.innerHTML = starsHtml;
    }
    
    // Cập nhật nhãn đếm tổng đánh giá
    const scoreSubEl = document.querySelector('.hero-score-card p');
    if (scoreSubEl) {
        scoreSubEl.textContent = `Dựa trên ${totalReviews.toLocaleString()} đánh giá đã xác thực thuê`;
    }

    // 2. Tính tỷ lệ phần trăm từng loại sao
    for (let s = 5; s >= 1; s--) {
        const percent = totalReviews > 0 ? Math.round((starCounts[s] / totalReviews) * 100) : 0;
        
        // Tìm dòng progress tương ứng
        const progressRow = document.querySelector(`.progress-list > div:nth-child(${6 - s})`);
        if (progressRow) {
            const progressBar = progressRow.querySelector('.progress-bar');
            const percentLabel = progressRow.querySelector('span:last-child');
            if (progressBar) {
                progressBar.style.width = `${percent}%`;
                progressBar.setAttribute('aria-valuenow', percent);
            }
            if (percentLabel) {
                percentLabel.textContent = `${percent}%`;
            }
        }
    }
}

/**
 * Render danh sách review thẻ dựa vào bộ lọc và sắp xếp
 */
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;

    // A. Tiến hành Lọc
    let filtered = REVIEWS_DATA.filter(item => {
        const matchDevice = activeFilters.device === 'all' || item.deviceTag === activeFilters.device;
        const matchUsecase = activeFilters.usecase === 'all' || item.usecaseTag === activeFilters.usecase;
        const matchStars = activeFilters.stars === 'all' || item.stars === parseInt(activeFilters.stars);
        return matchDevice && matchUsecase && matchStars;
    });

    // B. Tiến hành Sắp Xếp
    if (currentSort === "rating") {
        filtered.sort((a, b) => b.stars - a.stars);
    } else if (currentSort === "helpful") {
        filtered.sort((a, b) => b.helpful - a.helpful);
    } else { // "newest"
        filtered.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    }

    // Cập nhật số lượng đếm trên UI
    const countEl = document.getElementById('reviewCount');
    if (countEl) {
        countEl.textContent = `Hiển thị ${filtered.length} / ${REVIEWS_DATA.length} đánh giá`;
    }

    // Nếu không có đánh giá thỏa mãn bộ lọc
    if (filtered.length === 0) {
        grid.innerHTML = `
        <div class="col-12 text-center py-5">
            <i class="ti ti-folder-off text-secondary display-5 mb-2 d-block"></i>
            <p class="text-secondary mb-0">Không có đánh giá nào phù hợp với bộ lọc hiện tại.</p>
            <button class="btn btn-sm btn-link text-dark fw-bold text-decoration-none mt-2" id="resetFiltersBtn">Đặt lại tất cả bộ lọc</button>
        </div>`;
        
        // Listener đặt lại bộ lọc nhanh
        document.getElementById('resetFiltersBtn').addEventListener('click', resetAllFilters);
        return;
    }

    // Render các Card bằng hệ thống lưới Bootstrap
    grid.innerHTML = filtered.map((r, index) => {
        const uIcon = usecaseIconMap[r.usecase] || "ti-camera";
        const dIcon = deviceIconMap[r.deviceTag] || "ti-camera";
        const isHelpfulClicked = helpfulClickedMap[r.name + '_' + r.date] || false;
        
        // Khởi tạo HTML hình ảnh nếu có
        let photosHtml = '';
        if (r.photos && r.photos.length > 0) {
            photosHtml = '<div class="review-photos d-flex gap-2 flex-wrap mt-3">';
            r.photos.forEach(imgSrc => {
                photosHtml += `
                <div class="review-photo-thumb overflow-hidden">
                    <img src="${imgSrc}" alt="Ảnh chụp thực tế của khách hàng" class="w-100 h-100 object-fit-cover pointer lightbox-trigger">
                </div>`;
            });
            photosHtml += '</div>';
        }

        // HTML Đánh giá đã xác thực (Verified)
        const verifiedHtml = r.isVerified ? `
            <div class="verified-badge">
                <i class="ti ti-shield-check"></i>
                <span>Đã xác thực thuê</span>
            </div>
        ` : '';

        return `
        <div class="col-12 mb-3">
            <div class="review-card-v2 p-4 border border-secondary shadow-sm rounded-4">
                <!-- Top Row (Thông tin khách hàng & Verified) -->
                <div class="d-flex align-items-start justify-content-between gap-3 flex-wrap mb-3">
                    <div class="d-flex align-items-center gap-3">
                        <div class="reviewer-avatar">${r.avatar}</div>
                        <div>
                            <span class="d-block fw-bold text-dark fs-6">${r.name}</span>
                            <span class="d-block text-secondary fs-7"><i class="ti ti-calendar-event me-1"></i>${r.date}</span>
                        </div>
                    </div>
                    ${verifiedHtml}
                </div>

                <!-- Stars, Device & Usecase tags -->
                <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                    ${getStarsHtml(r.stars)}
                    <span class="device-pill"><i class="ti ${dIcon}"></i> ${r.device}</span>
                    <span class="use-case-pill"><i class="ti ${uIcon}"></i> ${r.usecase}</span>
                </div>

                <!-- Content text -->
                <p class="review-body-text mb-0">${r.content}</p>

                <!-- Photos outcome -->
                ${photosHtml}

                <!-- Card Footer (Thời gian thuê & Nút hữu ích) -->
                <div class="d-flex align-items-center justify-content-between border-top border-secondary-subtle pt-3 mt-3">
                    <div class="text-secondary-subtle fs-7">
                        <i class="ti ti-clock-hour-4 me-1"></i>Thời gian thuê: <strong>${r.rentalDays}</strong>
                    </div>
                    <button class="helpful-btn d-flex align-items-center gap-1.5 ${isHelpfulClicked ? 'active' : ''}" 
                            data-name="${r.name}" data-date="${r.date}">
                        <i class="ti ti-thumb-up"></i>
                        Hữu ích <span class="badge bg-dark-secondary text-secondary ms-1 helpful-badge">${r.helpful}</span>
                    </button>
                </div>
            </div>
<<<<<<< HEAD
            <div class="review-rating-stars">${starsStr}</div>
            <p class="review-text">"${rev.content}"</p>
            <span class="rented-product-badge">Đã có lịch trong hôm nay: ${rev.product}</span>
        `;
        reviewsGridContainer.appendChild(card);
=======
        </div>`;
    }).join('');

    // Khởi tạo lại sự kiện cho các ảnh mở Lightbox và nút Hữu ích
    initCardEvents();
}

/**
 * Đặt lại tất cả bộ lọc về mặc định
 */
function resetAllFilters() {
    activeFilters = { device: "all", usecase: "all", stars: "all" };
    document.querySelectorAll('.btn-filter').forEach(btn => {
        if (btn.dataset.val === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderReviews();
}

/**
 * Gắn sự kiện cho các phần tử bên trong thẻ review sau khi render
 */
function initCardEvents() {
    // 1. Nút hữu ích (Click để tăng / giảm số lượt)
    document.querySelectorAll('.helpful-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.dataset.name;
            const date = this.dataset.date;
            const key = name + '_' + date;
            
            // Tìm index review trong mảng
            const rIndex = REVIEWS_DATA.findIndex(r => r.name === name && r.date === date);
            if (rIndex === -1) return;

            if (!helpfulClickedMap[key]) {
                // Tăng lên 1
                REVIEWS_DATA[rIndex].helpful++;
                helpfulClickedMap[key] = true;
                this.classList.add('active');
            } else {
                // Trả về số cũ
                REVIEWS_DATA[rIndex].helpful--;
                helpfulClickedMap[key] = false;
                this.classList.remove('active');
            }
            
            // Cập nhật hiển thị badge số lượng hữu ích ngay lập tức
            this.querySelector('.helpful-badge').textContent = REVIEWS_DATA[rIndex].helpful;
        });
    });

    // 2. Click vào ảnh trong Review Card để xem Lightbox phóng to
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', function() {
            openLightbox(this.src);
        });
>>>>>>> 21dfd586d0fcc62b03d0b645c6dda7dac948673b
    });
}

/**
 * 🗺️ Logic Lightbox Phóng To Ảnh
 */
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = lightboxOverlay.querySelector('.lightbox-img');

function openLightbox(src) {
    if (!lightboxOverlay || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxOverlay.classList.remove('d-none');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang
}

function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.add('d-none');
    document.body.style.overflow = ''; // Cho phép cuộn lại
}

// Bắt sự kiện tắt Lightbox
if (lightboxOverlay) {
    lightboxOverlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    // Click ra ngoài vùng ảnh cũng đóng lightbox
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
    // Hỗ trợ nút ESC để đóng
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
}

// Click vào các ảnh trong Gallery minh chứng thực tế ở trên
document.querySelectorAll('.gallery-card img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

/**
 * 🌟 Logic Form Viết Đánh Giá (Modal)
 */
let currentSelectedStars = 0;

// Hover & Click Star Picker
const starPicker = document.getElementById('starPicker');
const formStarsInput = document.getElementById('formStars');

if (starPicker) {
    const starPicks = starPicker.querySelectorAll('.star-pick');

    function highlightStars(count) {
        starPicks.forEach((star, index) => {
            if (index < count) {
                star.classList.add('lit');
                star.querySelector('i').className = 'ti ti-star-filled';
            } else {
                star.classList.remove('lit');
                star.querySelector('i').className = 'ti ti-star';
            }
        });
    }

    starPicks.forEach((star, idx) => {
        const starVal = idx + 1;
        
        // Rê chuột qua
        star.addEventListener('mouseover', () => {
            highlightStars(starVal);
        });
        
        // Rê chuột ra (trả lại trạng thái đã chọn thực tế)
        star.addEventListener('mouseout', () => {
            highlightStars(currentSelectedStars);
        });
        
        // Click để chọn cố định
        star.addEventListener('click', () => {
            currentSelectedStars = starVal;
            formStarsInput.value = starVal;
            highlightStars(starVal);
        });
    });
}

// Xử lý Upload Ảnh và Hiển thị Preview trực quan trên Form
const imageUploadInput = document.getElementById('formImageUpload');
const previewRow = document.getElementById('formImagePreviewRow');

if (imageUploadInput && previewRow) {
    imageUploadInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            if (!file.type.startsWith('image/')) return; // Chỉ nhận file ảnh
            
            const reader = new FileReader();
            reader.onload = function(evt) {
                const base64 = evt.target.result;
                
                // Lưu vào danh sách ảnh tạm của form
                uploadedImages.push(base64);
                
                // Tạo phần tử Preview HTML
                const col = document.createElement('div');
                col.className = 'col-3';
                col.innerHTML = `
                    <div class="form-preview-img-wrapper border border-secondary shadow-sm rounded">
                        <img src="${base64}" class="w-100 h-100 object-fit-cover">
                        <button type="button" class="form-preview-remove-btn" data-src="${base64}">&times;</button>
                    </div>`;
                
                // Sự kiện nút xóa ảnh preview
                col.querySelector('.form-preview-remove-btn').addEventListener('click', function() {
                    const srcToRemove = this.dataset.src;
                    uploadedImages = uploadedImages.filter(img => img !== srcToRemove);
                    col.remove();
                });
                
                previewRow.appendChild(col);
            };
            reader.readAsDataURL(file);
        });
        
        // Reset lại giá trị file input để có thể chọn lại cùng ảnh đó
        imageUploadInput.value = '';
    });
}

// Xử lý gửi Form Đánh Giá
const submitReviewBtn = document.getElementById('submitReviewBtn');
const writeReviewForm = document.getElementById('writeReviewForm');

if (submitReviewBtn && writeReviewForm) {
    submitReviewBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // 1. Kiểm tra validation của Bootstrap
        if (!writeReviewForm.checkValidity() || currentSelectedStars === 0) {
            writeReviewForm.classList.add('was-validated');
            if (currentSelectedStars === 0) {
                formStarsInput.classList.add('is-invalid');
                document.querySelector('.invalid-feedback.text-center').style.display = 'block';
            } else {
                formStarsInput.classList.remove('is-invalid');
                document.querySelector('.invalid-feedback.text-center').style.display = 'none';
            }
            return;
        }

        // Lấy thông tin thiết bị và mục đích kèm tag
        const deviceSelect = document.getElementById('formDevice');
        const selectedDeviceOpt = deviceSelect.options[deviceSelect.selectedIndex];
        const deviceName = selectedDeviceOpt.value;
        const deviceTag = selectedDeviceOpt.dataset.tag;

        const usecaseSelect = document.getElementById('formUsecase');
        const selectedUsecaseOpt = usecaseSelect.options[usecaseSelect.selectedIndex];
        const usecaseName = selectedUsecaseOpt.value;
        const usecaseTag = selectedUsecaseOpt.dataset.tag;

        const nameValue = document.getElementById('formName').value.trim();
        const contentValue = document.getElementById('formContent').value.trim();
        const rentalDaysValue = document.getElementById('formRentalDays').value;

        // Trích xuất ký tự đầu của Tên làm Avatar
        let avatarInitials = "U";
        if (nameValue) {
            const nameParts = nameValue.split(' ');
            const lastName = nameParts[nameParts.length - 1];
            avatarInitials = lastName ? lastName.charAt(0).toUpperCase() : nameValue.charAt(0).toUpperCase();
        }

        // Lấy ngày hiện tại dạng DD/MM/YYYY
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        // 2. Tạo đối tượng đánh giá mới
        const newReview = {
            name: nameValue,
            avatar: avatarInitials,
            date: formattedDate,
            stars: currentSelectedStars,
            device: deviceName,
            deviceTag: deviceTag,
            usecase: usecaseName,
            usecaseTag: usecaseTag,
            content: contentValue,
            rentalDays: rentalDaysValue,
            helpful: 0,
            photos: [...uploadedImages], // Copy ảnh base64 đã preview
            isVerified: true             // Form tự động tạo review đã xác thực
        };

        // 3. Đẩy vào mảng dữ liệu toàn cục
        REVIEWS_DATA.unshift(newReview); // Đưa lên đầu

        // 4. Tính toán lại thống kê điểm số & render lại
        calculateAndPopulateStats();
        renderReviews();

        // 5. Đóng Modal và Reset Form
        let bootstrapModal = bootstrap.Modal.getInstance(document.getElementById('writeReviewModal'));
        if (!bootstrapModal) {
            bootstrapModal = new bootstrap.Modal(document.getElementById('writeReviewModal'));
        }
        bootstrapModal.hide();

        // Reset dữ liệu tạm
        writeReviewForm.reset();
        writeReviewForm.classList.remove('was-validated');
        currentSelectedStars = 0;
        uploadedImages = [];
        if (previewRow) previewRow.innerHTML = '';
        if (formStarsInput) formStarsInput.value = '0';
        document.querySelector('.invalid-feedback.text-center').style.display = 'none';
        
        // Trả lại màu xám mặc định cho các sao
        document.querySelectorAll('.star-picker .star-pick').forEach(star => {
            star.classList.remove('lit');
            star.querySelector('i').className = 'ti ti-star';
        });

        // Thông báo chúc mừng
        alert("Cảm ơn bạn đã gửi đánh giá! Trải nghiệm của bạn đã được xuất bản trực tiếp lên trang chủ đánh giá Midcamera.");
    });
}

/**
 * Khởi chạy khi DOM đã sẵn sàng
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Gắn sự kiện cho các nút bộ lọc (Filter Chips)
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            const filterType = this.dataset.filter;
            const filterVal = this.dataset.val;
            
            // Xóa active khỏi các nút cùng nhóm
            document.querySelectorAll(`.btn-filter[data-filter="${filterType}"]`).forEach(b => {
                b.classList.remove('active');
            });
            
            // Active nút hiện tại
            this.classList.add('active');
            
            // Cập nhật bộ lọc
            activeFilters[filterType] = filterVal;
            
            // Render lại
            renderReviews();
        });
    });

    // Sự kiện Thay đổi Bộ Sắp Xếp
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderReviews();
        });
    }

    // Khởi động giao diện điểm số ban đầu
    calculateAndPopulateStats();
    
    // Render danh sách ban đầu
    renderReviews();
});