// 🔑 MIDCAMERA - AUTH JS

document.addEventListener("DOMContentLoaded", () => {
    // Khởi tạo tab chuyển đổi
    const tabItems = document.querySelectorAll(".auth-tab-item");
    tabItems.forEach(tab => {
        tab.addEventListener("click", () => {
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const target = tab.getAttribute("data-target");
            document.querySelectorAll(".auth-form-content").forEach(form => form.classList.remove("active"));
            const activeForm = document.getElementById(`form${target.charAt(0).toUpperCase() + target.slice(1)}`);
            if (activeForm) activeForm.classList.add("active");
        });
    });

    // Lắng nghe quên mật khẩu
    const forgotLink = document.querySelector(".forgot-password-link");
    if (forgotLink) {
        forgotLink.addEventListener("click", () => {
            alert("Hệ thống khôi phục mật khẩu tự động đã gửi mã xác thực về Số điện thoại của bạn. Vui lòng kiểm tra tin nhắn SMS.");
        });
    }

    // Lắng nghe các form submit
    const formLogin = document.getElementById("formLogin");
    const formRegister = document.getElementById("formRegister");

    if (formLogin) {
        formLogin.addEventListener("submit", handleLogin);
    }
    if (formRegister) {
        formRegister.addEventListener("submit", handleRegister);
    }
});

// Đo độ mạnh mật khẩu động
function checkPasswordStrength(password) {
    const fill = document.getElementById("strengthBarFill");
    const text = document.getElementById("strengthBarText");

    if (!fill || !text) return;

    if (password.length === 0) {
        fill.className = "password-strength-fill";
        text.textContent = "Độ bảo mật mật khẩu";
        return;
    }

    if (password.length < 6) {
        fill.className = "password-strength-fill weak";
        text.textContent = "Độ bảo mật: Yếu (Mật khẩu quá ngắn)";
    } else if (password.length >= 6 && password.length < 10) {
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/g.test(password);
        if (hasSpecial) {
            fill.className = "password-strength-fill medium";
            text.textContent = "Độ bảo mật: Trung bình (Khá tốt)";
        } else {
            fill.className = "password-strength-fill weak";
            text.textContent = "Độ bảo mật: Yếu (Hãy thêm ký tự đặc biệt)";
        }
    } else {
        fill.className = "password-strength-fill strong";
        text.textContent = "Độ bảo mật: Mạnh (Cực kỳ an toàn)";
    }
}

// Xử lý sự kiện đăng nhập giả lập
function handleLogin(e) {
    e.preventDefault();
    const loginIdInput = document.getElementById("loginId");
    const loginId = loginIdInput ? loginIdInput.value : "";
    
    // Lưu thông tin user giả lập vào localStorage
    const userSession = {
        name: "Nguyễn Khánh Vân",
        email: loginId.includes("@") ? loginId : "Midcamera37@gmail.com",
        phone: !loginId.includes("@") ? loginId : "0987.654.321",
        role: "Marketing",
        created: "17/12/2025"
    };

    localStorage.setItem("mid_user", JSON.stringify(userSession));
    
    alert(`Chào mừng quay trở lại, ${userSession.name}! Đăng nhập thành công.`);
    
    // Kiểm tra có redirect sau khi đăng nhập không (ví dụ đi tiếp tới giỏ hàng)
    const redirectUrl = localStorage.getItem("mid_redirect_after_login");
    if (redirectUrl) {
        localStorage.removeItem("mid_redirect_after_login");
        window.location.href = redirectUrl;
    } else {
        window.location.href = "../index.html";
    }
}

// Xử lý sự kiện đăng ký giả lập
function handleRegister(e) {
    e.preventDefault();
    const nameInput = document.getElementById("regName");
    const phoneInput = document.getElementById("regPhone");
    const emailInput = document.getElementById("regEmail");
    const passwordInput = document.getElementById("regPassword");
    const confirmPassInput = document.getElementById("regConfirmPassword");

    const name = nameInput ? nameInput.value : "";
    const phone = phoneInput ? phoneInput.value : "";
    const email = emailInput ? emailInput.value : "";
    const password = passwordInput ? passwordInput.value : "";
    const confirmPass = confirmPassInput ? confirmPassInput.value : "";

    if (password !== confirmPass) {
        alert("Mật khẩu nhập lại không trùng khớp!");
        return;
    }

    alert(`Chúc mừng ${name} đã đăng ký tài khoản MIDCAMERA thành công! Hãy tiến hành đăng nhập.`);
    
    // Tự động điền SĐT đăng ký sang form đăng nhập
    const loginIdInput = document.getElementById("loginId");
    if (loginIdInput) loginIdInput.value = phone;
    
    // Switch tab sang đăng nhập
    document.querySelectorAll(".auth-tab-item").forEach(t => {
        t.classList.remove("active");
        if (t.getAttribute("data-target") === "login") t.classList.add("active");
    });
    document.querySelectorAll(".auth-form-content").forEach(form => form.classList.remove("active"));
    const formLogin = document.getElementById("formLogin");
    if (formLogin) formLogin.classList.add("active");
    
    // Reset form đăng ký
    const formRegister = document.getElementById("formRegister");
    if (formRegister) formRegister.reset();
    checkPasswordStrength("");
}

// Đăng nhập social giả lập
function handleSocialLogin(platform) {
    const userSession = {
        name: `Khách hàng ${platform}`,
        email: `oauth.${platform.toLowerCase()}@midcamera.com`,
        phone: "0987.654.321",
        role: "Thành viên",
        created: "26/05/2026"
    };
    localStorage.setItem("mid_user", JSON.stringify(userSession));
    alert(`Kết nối tài khoản ${platform} thành công! Đăng nhập hoàn tất.`);
    window.location.href = "../index.html";
}
