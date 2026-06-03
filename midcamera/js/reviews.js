// 💬 MIDCAMERA - REVIEWS JS

const REVIEWS_DATA = [
    {
        name: "Minh Hoàng",
        avatar: "M",
        date: "24/05/2026",
        stars: 5,
        product: "Fujifilm X100V",
        content: "Dịch vụ tuyệt vời! Mình thuê Fujifilm X100V đi du lịch Đà Lạt, máy siêu mới, hoạt động hoàn hảo. Setup màu sẵn cực đẹp. Sẽ ủng hộ dài lâu."
    },
    {
        name: "Khánh Chi",
        avatar: "K",
        date: "20/05/2026",
        stars: 5,
        product: "Canon EOS R50",
        content: "Thủ tục thuê siêu nhanh gọn, các bạn nhân viên tư vấn rất nhiệt tình cho người mới dùng máy ảnh như mình. Canon R50 chụp siêu nét dễ xài."
    },
    {
        name: "Quốc Huy",
        avatar: "H",
        date: "18/05/2026",
        stars: 4,
        product: "Fujifilm X-T100",
        content: "Máy rất tốt chụp màu đẹp giả lập tuyệt vời. Mình trừ 1 sao vì máy giao trễ 15 phút do kẹt xe giờ cao điểm ở Bạch Liêu. Nhưng bù lại các bạn kỹ thuật bàn giao setup nhiệt tình bù đắp."
    },
    {
        name: "Ngọc Anh",
        avatar: "A",
        date: "12/05/2026",
        stars: 5,
        product: "DJI Pocket 3",
        content: "Osmo Pocket 3 quay vlog siêu mượt, chống rung đỉnh chóp luôn! Mang đi biển chụp hình quay phim cưng xỉu. Tiền cọc cọc bằng CCCD rất nhanh gọn không rườm rà."
    },
    {
        name: "Duy Nam",
        avatar: "N",
        date: "05/05/2026",
        stars: 5,
        product: "Fujifilm X-T10",
        content: "Chiếc máy cơ học hoài cổ cực đỉnh. Mình thuê chụp bộ ảnh vintage cho khách và họ cực kỳ ưng ý. Sẽ quay lại thuê thêm ống kính và phụ kiện đèn flash."
    },
    {
        name: "Vân Anh",
        avatar: "V",
        date: "28/04/2026",
        stars: 3,
        product: "Fujifilm Instax",
        content: "Máy ảnh xinh xắn dễ thương chụp ra ảnh liền rất vui mắt. Tuy nhiên do ống kính khẩu độ nhỏ nên chụp tối hơi nhiễu, các bạn lưu ý chụp ban ngày nhiều sáng sẽ cực đẹp."
    }
];

let selectedStars = "all";
let reviewsGridContainer;

document.addEventListener("DOMContentLoaded", () => {
    reviewsGridContainer = document.getElementById("reviewsGridContainer");
    renderReviews();

    // Lọc tabs
    const tabItems = document.querySelectorAll(".reviews-tab-item");
    tabItems.forEach(tab => {
        tab.addEventListener("click", () => {
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            selectedStars = tab.getAttribute("data-stars");
            renderReviews();
        });
    });
});

// Hàm render card đánh giá
function renderReviews() {
    if (!reviewsGridContainer) return;
    reviewsGridContainer.innerHTML = "";

    const filteredReviews = REVIEWS_DATA.filter(rev => {
        return (selectedStars === "all" || rev.stars === parseInt(selectedStars));
    });

    if (filteredReviews.length === 0) {
        reviewsGridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px 0; color: #666; font-family: 'Inter';">Chưa có đánh giá nào cho mức lọc sao này.</p>`;
        return;
    }

    filteredReviews.forEach(rev => {
        const card = document.createElement("div");
        card.className = "review-card";

        let starsStr = "";
        for (let i = 0; i < 5; i++) {
            starsStr += i < rev.stars ? "★" : "☆";
        }

        card.innerHTML = `
            <div class="review-card-header">
                <div class="review-avatar">${rev.avatar}</div>
                <div class="review-user-info">
                    <h4>${rev.name}</h4>
                    <span class="review-date">${rev.date}</span>
                </div>
            </div>
            <div class="review-rating-stars">${starsStr}</div>
            <p class="review-text">"${rev.content}"</p>
            <span class="rented-product-badge">Đã có lịch trong hôm nay: ${rev.product}</span>
        `;
        reviewsGridContainer.appendChild(card);
    });
}
