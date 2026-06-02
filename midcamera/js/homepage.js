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
