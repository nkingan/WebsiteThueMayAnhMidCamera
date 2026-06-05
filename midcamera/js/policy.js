// 🛡️ MIDCAMERA - POLICY ACCORDION JS

document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            
            // Đóng các accordion khác nếu đang mở (Tạo hiệu ứng chuẩn)
            const allItems = document.querySelectorAll(".accordion-item");
            allItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });

            // Bật/Tắt trạng thái hoạt động của accordion hiện tại
            item.classList.toggle("active");
        });
    });
});
