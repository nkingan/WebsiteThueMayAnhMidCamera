// 🎥 MIDCAMERA - HOMEPAGE JS

document.addEventListener('DOMContentLoaded', () => {
    // Xử lý Lọc Nhanh Trang Chủ
    const btnQuickSearch = document.getElementById('btnQuickSearch');
    if (btnQuickSearch) {
        btnQuickSearch.addEventListener('click', () => {
            const brand = document.getElementById('filterBrand').value;
            const type = document.getElementById('filterType').value;
            const price = document.getElementById('filterPrice').value;
            
            let url = 'pages/products.html?';
            const params = [];
            if (brand) params.push(`brand=${brand}`);
            if (type) params.push(`type=${type}`);
            if (price) params.push(`price=${price}`);
            
            window.location.href = url + params.join('&');
        });
    }
});
// ==========================================================================
// SCRIPT ĐIỀU KHIỂN MŨI TÊN TRƯỢT ĐÁNH GIÁ (MIDCAMERA)
// ==========================================================================

const track = document.getElementById("reviews-track");
const prevBtn = document.getElementById("slide-arrow-prev");
const nextBtn = document.getElementById("slide-arrow-next");

// Thêm câu lệnh if này để chắc chắn các nút tồn tại trên trang mới chạy, tránh bị lỗi file JS
if (track && prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
        // Trượt sang phải bằng chiều rộng của 1 thẻ đánh giá + khoảng cách gap (20px)
        const slideWidth = track.querySelector('.review-card').clientWidth + 20; 
        track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener("click", () => {
        // Trượt sang trái
        const slideWidth = track.querySelector('.review-card').clientWidth + 20;
        track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });
}
