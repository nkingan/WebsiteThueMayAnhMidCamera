// 🧭 MIDCAMERA - MAIN JS (Dùng chung cho toàn bộ website)

// 1. CƠ SỞ DỮ LIỆU TẬP TRUNG (SINGLE SOURCE OF TRUTH)
const PRODUCTS_DATA = [
    {
        id: "canon-r50",
        name: "Canon EOS R50",
        price: 200000,
        deposit: 2000000,
        category: "Mirrorless",
        brand: "Canon",
        image: "images/canon_r50.jpg",
        desc: "Thiết kế cực kỳ nhỏ gọn, lấy nét mắt tự động thông minh, lý tưởng cho những chuyến du lịch và làm vlog hàng ngày.",
        shortDesc: "Thiết kế cực kỳ nhỏ gọn, lấy nét mắt tự động thông minh, lý tưởng cho những chuyến du lịch và làm vlog hàng ngày.",
        longDesc: "Canon EOS R50 là chiếc máy ảnh mirrorless dòng APS-C hướng tới sự nhỏ gọn và tiện lợi tối đa cho người dùng. Với cảm biến 24.2 Megapixel kết hợp cùng bộ xử lý hình ảnh DIGIC X đỉnh cao, máy cho khả năng ghi lại hình ảnh sắc nét ngay cả trong điều kiện thiếu sáng. Hệ thống lấy nét tự động thông minh Dual Pixel CMOS AF II tự động phát hiện và theo dõi mắt, khuôn mặt của người lẫn động vật cực nhạy. Phù hợp hoàn hảo cho các bạn trẻ sáng tạo nội dung, làm vlog, chụp ảnh du lịch hoặc đời thường.",
        status: "available",
        bookedRanges: [
            { start: "2026-06-04", end: "2026-06-08" }
        ],
        gallery: [
            "images/canon_r50.jpg"
        ],
        specs: {
            "Cảm biến": "APS-C CMOS 24.2 MP",
            "Loại cảm biến": "APS-C CMOS 24.2 Megapixel",
            "Bộ xử lý": "DIGIC X",
            "Bộ xử lý hình ảnh": "DIGIC X",
            "Lấy nét": "Dual Pixel CMOS AF II",
            "Hệ thống lấy nét": "Dual Pixel CMOS AF II (Lấy nét mắt AI)",
            "Quay video": "4K 30p (không crop)",
            "Khả năng quay video": "4K UHD 30p (không crop từ 6K), FHD 120p",
            "Độ nhạy sáng ISO": "100 - 25600 (Mở rộng đến 51200)",
            "Màn hình hiển thị": "LCD xoay lật đa góc 3.0 inch cảm ứng",
            "Trọng lượng thân máy": "375g (Đã bao gồm pin và thẻ nhớ)"
        },
        reviews: [
            { author: "Minh Đức", date: "2026-05-25", rating: 5, comment: "Máy siêu mới, lấy nét tự động mắt cực nhanh. Đi du lịch mang theo em này nhỏ gọn hết nấc." },
            { author: "Thu Trang", date: "2026-05-20", rating: 4, comment: "Chất lượng ảnh xuất sắc, nhân viên nhiệt tình, thủ tục nhanh chóng." }
        ]
    },
    {
        id: "fuji-xt100",
        name: "Fujifilm X-T100",
        price: 180000,
        deposit: 1500000,
        category: "Mirrorless",
        brand: "Fujifilm",
        image: "images/fuji_xt100.png",
        desc: "Phong cách retro cổ điển, màn hình lật 3 chiều độc đáo và khả năng giả lập màu film Fujifilm mang lại chất lượng ảnh khác biệt.",
        shortDesc: "Phong cách retro cổ điển, màn hình lật 3 chiều độc đáo và khả năng giả lập màu film Fujifilm mang lại chất lượng ảnh khác biệt.",
        longDesc: "Fujifilm X-T100 kết hợp thiết kế cổ điển sang trọng đặc trưng của dòng máy ảnh hoài cổ Fujifilm cùng cảm biến APS-C 24.2 MP chất lượng cao. Máy sở hữu màn hình xoay lật 3 chiều vô cùng linh hoạt cho phép chụp các góc khó hoặc selfie dễ dàng. Điểm đắt giá nhất chính là 11 chế độ giả lập màu film huyền thoại của Fujifilm tích hợp sẵn, giúp ảnh chụp ra có tone màu nghệ thuật mang đậm chất hoài niệm mà không cần qua hậu kỳ phức tạp.",
        status: "available",
        bookedRanges: [
            { start: "2026-06-10", end: "2026-06-12" }
        ],
        gallery: [
            "images/fuji_xt100.png"
        ],
        specs: {
            "Cảm biến": "APS-C CMOS 24.2 MP",
            "Loại cảm biến": "APS-C CMOS 24.2 Megapixel",
            "Bộ xử lý": "Fujifilm Engine",
            "Màn hình": "Lật cảm ứng 3.0 inch",
            "Màn hình hiển thị": "Lật 3 hướng cảm ứng 3.0 inch",
            "Giả lập màu": "Classic Chrome, Provia, Velvia",
            "Chế độ giả lập màu": "Classic Chrome, Provia, Velvia, Astia...",
            "Kính ngắm": "Kính ngắm điện tử OLED EVF 2.36 triệu điểm",
            "Độ nhạy sáng ISO": "200 - 12800 (Mở rộng 100 - 51200)",
            "Kết nối không dây": "Wi-Fi & Bluetooth tích hợp chuyển ảnh nhanh",
            "Thời lượng pin": "Chụp khoảng 430 khung hình/sạc đầy"
        },
        reviews: [
            { author: "Hoàng Long", date: "2026-05-24", rating: 5, comment: "Giả lập màu film chụp chân dung quá đẹp. Rất hài lòng với dịch vụ bên MIDCAMERA." }
        ]
    },
    {
        id: "fuji-xs10",
        name: "Fujifilm X-S10",
        price: 260000,
        deposit: 3000000,
        category: "Mirrorless",
        brand: "Fujifilm",
        image: "images/fuji_xs10.jpg",
        desc: "Kích thước cơ động, hệ thống điều khiển cơ khí trực quan, mang lại niềm vui chụp ảnh thuần túy của dòng X-S.",
        shortDesc: "Kích thước cơ động, hệ thống điều khiển cơ khí trực quan, mang lại niềm vui chụp ảnh thuần túy của dòng X-S.",
        longDesc: "Fujifilm X-S10 là chiếc máy ảnh không gương lật nhỏ gọn thừa hưởng phong cách thiết kế cơ khí cơ học cơ động của dòng X-S cao cấp. Sở hữu cảm biến X-Trans CMOS II độc quyền đem lại độ chi tiết ảnh vượt trội cùng khả năng tái tạo màu da cực kỳ nịnh mắt. Bố cục các bánh răng điều khiển tốc độ, bù trừ sáng bằng kim loại mang lại trải nghiệm thao tác nhiếp ảnh hoài cổ, đầy cảm xúc.",
        status: "rented",
        bookedRanges: [
            { start: "2026-05-28", end: "2026-06-03" }
        ],
        gallery: [
            "images/fuji_xs10.jpg"
        ],
        specs: {
            "Cảm biến": "X-Trans CMOS II 16.3 MP",
            "Loại cảm biến": "X-Trans CMOS II 16.3 Megapixel",
            "Bộ xử lý": "EXR Processor II",
            "Bộ xử lý hình ảnh": "EXR Processor II",
            "Lấy nét": "77 điểm lấy nét",
            "Hệ thống lấy nét": "77 điểm lấy nét thông minh",
            "Kính ngắm": "OLED EVF 2.36 triệu điểm",
            "Chế độ giả lập màu": "Classic Chrome, PRO Neg, Monochrome...",
            "Bánh răng vật lý": "Điều chỉnh tốc độ màn trập, bù trừ sáng",
            "Tốc độ chụp liên tiếp": "8.0 khung hình / giây",
            "Trọng lượng thân máy": "381g"
        },
        reviews: [
            { author: "Văn Huy", date: "2026-05-15", rating: 4, comment: "Thiết kế đẹp hoài cổ, cảm giác chụp cơ học thích tay. Máy hoạt động rất tốt." }
        ]
    },
    {
        id: "fuji-x100vi",
        name: "Fujifilm X100VI",
        price: 500000,
        deposit: 5000000,
        category: "Compact",
        brand: "Fujifilm",
        image: "images/fuji_x100vi.jpg",
        desc: "Chiếc compact đường phố tối thượng với ống kính f/2 23mm cố định, cảm biến X-Trans IV và kính ngắm lai độc quyền.",
        shortDesc: "Chiếc compact đường phố tối thượng với ống kính f/2 23mm cố định, cảm biến X-Trans IV và kính ngắm lai độc quyền.",
        longDesc: "Fujifilm X100VI đại diện cho thế hệ thứ 5 của dòng máy ảnh compact đường phố huyền thoại X100. Máy được nâng cấp ống kính 23mm F2.0 thế hệ mới cho độ nét rìa ảnh vượt trội. Thiết kế thân máy bằng nhôm tinh luyện kết hợp cảm biến X-Trans CMOS 4 và bộ xử lý X-Processor 4 mạnh mẽ. Kính ngắm lai quang học và điện tử độc quyền cùng các giả lập màu phim mới nhất khiến X100V trở thành chiếc máy ảnh được khao khát nhất bởi các nhiếp ảnh gia đường phố.",
        status: "available",
        bookedRanges: [
            { start: "2026-06-15", end: "2026-06-20" }
        ],
        gallery: [
            "images/fuji_x100vi.jpg"
        ],
        specs: {
            "Cảm biến": "X-Trans CMOS 4 26.1 MP",
            "Loại cảm biến": "X-Trans CMOS 4 26.1 Megapixel",
            "Ống kính": "23mm F2.0 (tương đương 35mm)",
            "Ống kính cố định": "Fujinon 23mm F2.0 (tương đương tiêu cự 35mm)",
            "Bộ xử lý": "X-Processor 4",
            "Bộ xử lý hình ảnh": "X-Processor 4",
            "Giả lập màu": "Classic Neg, Eterna, Acros",
            "Kính ngắm lai OVF/EVF": "Quang học 0.52x & Điện tử OLED 3.69 triệu điểm",
            "Màn hình hiển thị": "LCD lật cảm ứng mỏng tinh tế",
            "Giả lập màu phim": "Classic Neg, Eterna, Acros, Color Chrome Effect",
            "Quay video": "4K UHD 30p"
        },
        reviews: [
            { author: "Khánh Chi", date: "2026-05-22", rating: 5, comment: "Chiếc máy ảnh đường phố hoàn hảo nhất. Thiết kế đẹp xuất sắc, màu giả lập Classic Neg cực kỳ mê mẩn." }
        ]
    },
    {
        id: "dji-pocket3",
        name: "DJI Pocket 3",
        price: 150000,
        deposit: 1000000,
        category: "Action",
        brand: "DJI",
        image: "images/pocket3.jpg",
        desc: "Cảm biến 1 inch mạnh mẽ, gimbal chống rung vật lý 3 trục, màn hình xoay thông minh cho chất lượng video vlogging đỉnh cao.",
        shortDesc: "Cảm biến 1 inch mạnh mẽ, gimbal chống rung vật lý 3 trục, màn hình xoay thông minh cho chất lượng video vlogging đỉnh cao.",
        longDesc: "DJI Osmo Pocket 3 là bước nhảy vọt lớn trong thế giới camera hành trình và làm vlog cá nhân. Sở hữu cảm biến CMOS kích thước lớn tới 1-inch, máy cho khả năng thu sáng vượt trội, kiểm soát nhiễu ảnh xuất sắc ngay cả khi quay đêm. Gimbal chống rung vật lý 3 trục cơ học siêu mượt mà giữ cho video luôn ổn định tuyệt đối trong mọi chuyển động. Thiết kế màn hình xoay 2.0 inch OLED thông minh cho phép chuyển đổi nhanh chóng giữa khung hình ngang và đứng.",
        status: "maintenance",
        bookedRanges: [],
        gallery: [
            "images/pocket3.jpg"
        ],
        specs: {
            "Cảm biến": "CMOS 1.0-inch",
            "Loại cảm biến": "CMOS 1.0-inch chất lượng cao",
            "Chống rung": "Gimbal cơ học 3 trục",
            "Hệ thống chống rung": "Gimbal vật lý cơ học 3 trục độc lập",
            "Quay video": "4K/120fps quay chậm",
            "Quay video tối đa": "4K/120fps (Slow motion), 4K/60fps HDR",
            "Màn hình": "2.0-inch OLED xoay",
            "Màn hình hiển thị": "OLED 2.0-inch cảm ứng xoay thông minh",
            "Profile màu chuyên sâu": "10-bit D-Log M & D-Log HLG",
            "Hệ thống micro": "Thu âm định hướng 3 micro giảm tiếng ồn gió",
            "Trọng lượng thân máy": "179g siêu nhẹ bỏ túi",
            "Trọng lượng máy": "179g siêu nhẹ bỏ túi"
        },
        reviews: [
            { author: "Tuấn Anh", date: "2026-05-27", rating: 5, comment: "Chống rung đỉnh chóp, quay vlog 4K siêu nét. Cảm biến 1 inch quay thiếu sáng đỉnh thật sự." }
        ]
    },
    {
        id: "fuji-instax",
        name: "Fujifilm Instax Mini 12",
        price: 120000,
        deposit: 800000,
        category: "Film",
        brand: "Fujifilm",
        image: "images/instax12.png",
        desc: "Máy ảnh chụp lấy liền dễ thương, lưu giữ khoảnh khắc bằng những tấm ảnh film mang phong cách cổ điển tức thì.",
        shortDesc: "Máy ảnh chụp lấy liền dễ thương, lưu giữ khoảnh khắc bằng những tấm ảnh film mang phong cách cổ điển tức thì.",
        longDesc: "Fujifilm Instax Mini là chiếc máy ảnh chụp lấy liền nhỏ nhắn xinh xắn, giúp lưu trữ trực quan mọi khoảnh khắc vui đùa của nhóm bạn bằng những tấm phim cơ học in ngay lập tức. Thiết kế gọn tay, màu sắc tươi tắn lý tưởng cho các buổi party, dã ngoại hoặc tặng làm quà lưu niệm.",
        status: "available",
        bookedRanges: [],
        gallery: [
            "images/instax12.png"
        ],
        specs: {
            "Loại film": "Fujifilm Instax Mini",
            "Ống kính": "60mm F12.7",
            "Tốc độ màn trập": "1/60 giây cố định",
            "Đèn flash": "Flash tự động đánh liên tục"
        },
        reviews: [
            { author: "Vân Anh", date: "2026-04-28", rating: 3, comment: "Máy xinh chụp vui mắt in ảnh liền. Nhưng lưu ý chụp đủ sáng ban ngày mới đẹp, chụp tối flash hơi yếu." }
        ]
    },
    {
        id: "canon-g7",
        name: "Canon PowerShot G7 X Mark III",
        price: 260000,
        deposit: 3000000,
        category: "Mirrorless",
        brand: "Canon",
        image: "images/canong7.png",
        desc: "Bước tiến mới cho phong cách nhiếp ảnh của bạn.",
        shortDesc: "Bước tiến mới cho phong cách nhiếp ảnh của bạn.",
        longDesc: "PowerShot G7 X Mark III có khả năng quay video 4K mà không crop, cho phép bạn sáng tạo nhiều hơn. G7X III có chức năng độc quyền là truyền phát video trực tiếp lên YouTube thông qua chức năng Live Streaming.",
        status: "available",
        bookedRanges: [
            { start: "2026-06-07", end: "2026-06-09" }
        ],
        gallery: [
            "images/canong7.png"
        ],
        specs: {
            "Chế Độ AF": "One Shot AF, Servo AF, Manual Focus",
            "Số Điểm Hệ Thống AF": "31",
            "Built-in Flash": "YES",
            "Bộ xử lý": "DIGIC 8",
            "Digital Zoom": "4x",
            "Optical Zoom": "4.2x",
            "Bộ Nguồn Tiêu Chuẩn": "Battery Pack NB-13L",
            "White Balance": "Auto (Ambience priority / White Priority), Daylight, Shade, Cloudy, Tungsten Light, White Fluorescent Light, Flash, Custom, Color Temp.",
            "Độ nhạy sáng ISO": "125 - 12,800 (H:25,600)",
            "Màn hình hiển thị": "LCD xoay lật đa góc 3.0 inch cảm ứng với độ phân giải 1,040,000",
            "Trọng lượng thân máy": "304g (Đã bao gồm pin và thẻ nhớ)"
        },
        reviews: [
            { author: "Thành Nhân", date: "2026-05-10", rating: 5, comment: "Máy siêu mới, lấy nét tự động mắt cực nhanh." }
        ]
    },
    {
        id: "dji-pocket4",
        name: "DJI Pocket 4",
        price: 150000,
        deposit: 1000000,
        category: "Action",
        brand: "DJI",
        image: "images/pocket4.png",
        desc: " Osmo Pocket 4 với cụm nút bấm vật lý mới gồm nút Zoom bên trái và nút C (Custom) bên phải, ẩn dưới màn hình cảm ứng 2 inch.",
        shortDesc: " Osmo Pocket 4 với cụm nút bấm vật lý mới gồm nút Zoom bên trái và nút C (Custom) bên phải, ẩn dưới màn hình cảm ứng 2 inch.",
        longDesc: "DJI Osmo Pocket 4 nâng cấp trải nghiệm sử dụng action camera khi trang bị thêm hai nút bấm hoàn toàn mới, kết hợp cảm biến CMOS 1 inch với khẩu độ f/2.0, cho chất lượng hình ảnh lên đến 4K và hiệu ứng bokeh tự nhiên. Dải dynamic range 14 stop dùng chế độ D-Log 10 bit tái hiện màu sắc chân thực trong mọi điều kiện ánh sáng. Khả năng quay 4K/240fps còn được hỗ trợ bởi hệ thống chống rung 3 trục và loạt tính năng thông minh như ActiveTrack 7.0 và tự động lấy nét, tạo nên một công cụ linh hoạt dành cho nhà sáng tạo nội dung.",
        status: "available",
        bookedRanges: [
            { start: "2026-06-10", end: "2026-06-11" }
        ],
        gallery: [
            "images/pocket4.png"
        ],
        specs: {
            "Cảm biến": "1-inch CMOS",
            "Chống rung": "Gimbal cơ học 3 trục",
            "Đầu ra âm thanh": "48 kHz 16-bit; AAC",
            "Tốc độ bit tối đa của video": "180 Mbps",
            "Màn hình hiển thị": "Kích thước: 2.0 inch với độ phân giải: 556×314",
            "Định dạng Video": "MP4 (HEVC)",
            "Định dạng ảnh": "JPEG/JPEG+DNG/DNG",
            "Trọng lượng máy": "190.5g"
        },
        reviews: [
            { author: "Quang Thắng", date: "2026-05-23", rating: 5, comment: "Chống rung đỉnh chóp, quay vlog 4K siêu nét. Cảm biến 1 inch quay thiếu sáng đỉnh thật sự." }
        ]
    },
    {
        id: "fuji-gfx100",
        name: "Fujifilm GFX100RF",
        price: 900000,
        deposit: 5000000,
        category: "Compact",
        brand: "Fujifilm",
        image: "images/fuji_gfx100.jpg",
        desc: "Sở hữu cảm biến Medium Format 102MP & X-Processor 5.",
        shortDesc: "Sở hữu cảm biến Medium Format 102MP và X-Processor 5.",
        longDesc: "Fujifilm GFX100RF là máy ảnh medium format đầu tiên được thiết kế trong thân máy nhỏ gọn, trở thành thiết bị chụp ảnh hàng ngày tuyệt đỉnh cho các nhiếp ảnh gia. Không chỉ có chất lượng độ phân giải cao lên đến 102MP, GFX100RF còn nổi bật với ống kính góc rộng 35mm tích hợp. Điều này đã mang lại cho máy ảnh khả năng chụp đa dạng từ du lịch, đường phố và chân dung. Máy ảnh trở thành lựa chọn hoàn hảo cho người dùng nhờ sự kết hợp giữa chất lượng hình ảnh tinh tế và thiết kế đơn giản.",
        status: "available",
        bookedRanges: [],
        gallery: [
            "images/fuji_gfx100.jpg"
        ],
        specs: {
            "Cảm biến": "Medium Format 43.8 x 32.9mm",
            "Megapixel": "102MP",
            "Ống kính": "GF 35mm f/4 (góc rộng cố định)",
            "Màn hình hiển thị": "3.2 inch, 2.1 triệu điểm ảnh, cảm ứng, lật 3 chiều",
            "Tốc độ chụp liên tục tối đa": "6fps",
            "Độ phân giải video tối đa": "4K/30fps 10-bit",
            "Cấp độ người dùng": "Chuyên nghiệp"
        },
        reviews: [
            { author: "Bảo Lâm", date: "2026-04-10", rating: 5, comment: "Máy phù hợp để chụp khi đi tiệc, ánh sáng và độ phân giải sắc nét." }
        ]
    }
];

// Mảng Phụ kiện tập trung
const ACCESSORIES_DATA = [
    { id: "acc-battery", name: "Bộ Pin sạc dự phòng", price: 30000, image: "images/pin.jpg" },
    { id: "acc-tripod", name: "Chân máy Tripod Benro", price: 40000, image: "images/chanmay.jpg" },
    { id: "acc-sdcard", name: "Thẻ nhớ SanDisk 64GB 170MB/s", price: 20000, image: "images/thenho.jpg" }
];


// 2. HÀM GIẢI QUYẾT ĐƯỜNG DẪN ẢNH TỰ ĐỘNG (ROBUST IMAGE PATH RESOLVER)
function resolveImagePath(path) {
    if (!path) return '';
    const isHomepage = document.body.classList.contains('page-trangchu');
    
    // Chuẩn hóa path: bỏ tiền tố '../' nếu có để xử lý
    let cleanPath = path.replace(/^\.\.\//, '');
    
    if (isHomepage) {
        return cleanPath;
    } else {
        return '../' + cleanPath;
    }
}


// 3. HÀM TỰ ĐỘNG BƠM KHUNG GIAO DIỆN HEADER & FOOTER ĐỘNG (INJECTION LOGIC)
function injectGlobalHeaderAndFooter() {
    const isHomepage = document.body.classList.contains('page-trangchu');
    const prefixPages = isHomepage ? 'pages/' : '';
    const prefixRoot = isHomepage ? '' : '../';
    
    const headerContainer = document.getElementById('global-header');
    const footerContainer = document.getElementById('global-footer');
    
    if (headerContainer) {
        const activeNav = headerContainer.getAttribute('data-active-nav') || '';
        
        headerContainer.innerHTML = `
        <header class="main-header">
            <div class="header-container">
                <div class="logo">
                    <a href="${prefixRoot}index.html">MID<span>CAMERA</span></a>
                </div>

                <nav class="nav-menu">
                    <ul>
                        <li><a href="${prefixRoot}index.html" class="nav-trangchu ${activeNav === 'trangchu' ? 'active' : ''}">Trang chủ</a></li>
                        <li><a href="${prefixPages}products.html" class="nav-mayanh ${activeNav === 'mayanh' ? 'active' : ''}">Thiết bị</a></li>
                        <li><a href="${prefixPages}reviews.html" class="nav-banggia ${activeNav === 'banggia' ? 'active' : ''}">Đánh giá</a></li>
                        <li><a href="${prefixPages}policy.html" class="nav-chinhsach ${activeNav === 'chinhsach' ? 'active' : ''}">Chính sách thuê</a></li>
                        <li><a href="${prefixPages}about.html" class="nav-gioithieu ${activeNav === 'gioithieu' ? 'active' : ''}">Giới thiệu</a></li>
                    </ul>
                </nav>

                <div class="header-actions">
                    <div class="search-box">
                        <input type="text" placeholder="Tìm máy ảnh, ống kính..." id="globalSearchInput">
                        <button type="button" id="globalSearchBtn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    
                    <a href="${prefixPages}cart.html" class="action-icon ${activeNav === 'cart' ? 'active' : ''}" title="Giỏ hàng">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="cart-count" id="headerCartCount">0</span>
                    </a>
                    
                    <a href="${prefixPages}auth.html" class="action-icon ${activeNav === 'account' ? 'active' : ''}" title="Tài khoản" id="headerAccountIcon">
                        <i class="fa-solid fa-user"></i>
                    </a>
                </div>
            </div>
        </header>
        `;
        
        // Khởi tạo listeners tìm kiếm toàn cục
        initGlobalSearch(prefixPages);
    }
    
    if (footerContainer) {
        footerContainer.innerHTML = `
        <footer class="main-footer">
            <div class="footer-container">
                <div class="footer-column brand-info">
                    <h3>MID<span>CAMERA</span></h3>
                    <p>Hệ thống cho thuê máy ảnh, ống kính và thiết bị ngành ảnh cao cấp. Mang đến giải pháp tối ưu cho các nhiếp ảnh gia và studio chuyên nghiệp.</p>
                    
                    <div class="social-icons">
                        <a href="https://www.facebook.com/share/1AJJ4h3nU8/?mibextid=wwXIfr" target="_blank" title="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/midcamera_/?utm_source=ig_web_button_share_sheet" target="_blank" title="Instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@mid_camera37?is_from_webapp=1&sender_device=pc" target="_blank" title="Tiktok">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-column">
                    <h4>Thiết Bị Cho Thuê</h4>
                    <ul>
                        <li><a href="${prefixPages}products.html">Máy ảnh Mirrorless</a></li>
                        <li><a href="${prefixPages}products.html">Compact cao cấp</a></li>
                        <li><a href="${prefixPages}products.html">Gimbal & Phụ kiện</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Chính Sách & Hỗ Trợ</h4>
                    <ul>
                        <li><a href="${prefixPages}policy.html">Thủ tục & Đặt cọc</a></li>
                        <li><a href="${prefixPages}policy.html">Điều khoản dịch vụ</a></li>
                        <li><a href="${prefixPages}policy.html">Chính sách bảo mật</a></li>
                    </ul>
                </div>

                <div class="footer-column contact-info">
                    <h4>Liên Hệ Với Chúng Tôi</h4>
                    <p><i class="fa-solid fa-location-dot"></i> 45 Bạch Liêu, Thành Phố Vinh, Nghệ An</p>
                    <p><i class="fa-solid fa-phone"></i> Hotline: 0987.654.321</p>
                    <p><i class="fa-solid fa-envelope"></i> Email: Midcamera37@gmail.com</p>
                    <p><i class="fa-solid fa-clock"></i> Giờ làm việc: 08:00 - 21:00</p>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-container">
                    <p>&copy; 2026 MidCamera. All rights reserved. Thiết kế bởi Nhóm MidCamera.</p>
                </div>
            </div>
        </footer>
        `;
    }
}


// 4. HÀM KHỞI TẠO TÌM KIẾM TOÀN CỤC (SEARCH CONTROLLER)
function initGlobalSearch(prefixPages) {
    const searchInput = document.getElementById("globalSearchInput");
    const searchBtn = document.getElementById("globalSearchBtn");
    
    if (searchInput) {
        // Hỗ trợ gõ Enter
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                executeSearch();
            }
        });
        
        // Đọc từ URL đổ ngược chữ lại vào ô input nếu đang ở trang kết quả
        const params = new URLSearchParams(window.location.search);
        const searchQ = params.get("search");
        if (searchQ && document.getElementById("productsGrid")) {
            searchInput.value = searchQ;
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener("click", executeSearch);
    }
    
    function executeSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `${prefixPages}products.html?search=${encodeURIComponent(query)}`;
        }
    }
}

// 5. CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG TOÀN CỤC
function updateHeaderCartCount() {
    const cart = localStorage.getItem('mid_cart') ? JSON.parse(localStorage.getItem('mid_cart')) : [];
    const cartCount = document.getElementById('headerCartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// 6. CẬP NHẬT TRẠNG THÁI LIÊN KẾT TÀI KHOẢN TRÊN HEADER
function updateHeaderAccount() {
    const user = localStorage.getItem('mid_user');
    const accountLink = document.getElementById('headerAccountIcon');
    if (!accountLink) return;

    const isHomepage = document.body.classList.contains('page-trangchu');
    const prefix = isHomepage ? 'pages/' : '';

    if (user) {
        accountLink.href = prefix + "account.html";
        accountLink.title = "Trang cá nhân";
    } else {
        accountLink.href = prefix + "auth.html";
        accountLink.title = "Đăng nhập";
    }
}

// Lắng nghe khởi chạy DOM
document.addEventListener('DOMContentLoaded', () => {
    // Tự động sinh Header & Footer trước
    injectGlobalHeaderAndFooter();
    
    // Cập nhật số liệu trạng thái
    updateHeaderCartCount();
    updateHeaderAccount();
});
