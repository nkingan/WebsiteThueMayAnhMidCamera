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

// Lấy danh sách user đã đăng ký từ localStorage
function getStoredUsers() {
    const rawUsers = localStorage.getItem("mid_users");
    return rawUsers ? JSON.parse(rawUsers) : [];
}

function setStoredUsers(users) {
    localStorage.setItem("mid_users", JSON.stringify(users));
}

function findUserByLoginId(loginId) {
    const users = getStoredUsers();
    return users.find(user => user.email === loginId || user.phone === loginId);
}

function getPublicSession(user) {
    return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role || "Thành viên",
        created: user.created || new Date().toLocaleDateString("vi-VN")
    };
}

// Xử lý sự kiện đăng nhập
function handleLogin(e) {
    e.preventDefault();
    const loginIdInput = document.getElementById("loginId");
    const loginPasswordInput = document.getElementById("loginPassword");
    const loginId = loginIdInput ? loginIdInput.value.trim() : "";
    const loginPassword = loginPasswordInput ? loginPasswordInput.value : "";

    if (!loginId || !loginPassword) {
        alert("Vui lòng nhập đầy đủ email/số điện thoại và mật khẩu.");
        return;
    }

    const user = findUserByLoginId(loginId);
    if (!user) {
        alert("Tài khoản chưa tồn tại. Vui lòng đăng ký trước hoặc kiểm tra lại email/số điện thoại.");
        return;
    }

    if (user.password !== loginPassword) {
        alert("Mật khẩu không đúng. Vui lòng thử lại.");
        return;
    }

    localStorage.setItem("mid_user", JSON.stringify(getPublicSession(user)));
    alert(`Chào mừng quay trở lại, ${user.name}! Đăng nhập thành công.`);

    const redirectUrl = localStorage.getItem("mid_redirect_after_login");
    if (redirectUrl) {
        localStorage.removeItem("mid_redirect_after_login");
        window.location.href = redirectUrl;
    } else {
        window.location.href = "../index.html";
    }
}

// Xử lý sự kiện đăng ký
function handleRegister(e) {
    e.preventDefault();
    const nameInput = document.getElementById("regName");
    const phoneInput = document.getElementById("regPhone");
    const emailInput = document.getElementById("regEmail");
    const passwordInput = document.getElementById("regPassword");
    const confirmPassInput = document.getElementById("regConfirmPassword");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value : "";
    const confirmPass = confirmPassInput ? confirmPassInput.value : "";

    if (!name || !phone || !email || !password || !confirmPass) {
        alert("Vui lòng điền đầy đủ thông tin đăng ký.");
        return;
    }

    if (password !== confirmPass) {
        alert("Mật khẩu nhập lại không trùng khớp!");
        return;
    }

    const users = getStoredUsers();
    if (users.some(user => user.email === email)) {
        alert("Email này đã được đăng ký. Vui lòng sử dụng email khác.");
        return;
    }
    if (users.some(user => user.phone === phone)) {
        alert("Số điện thoại này đã được đăng ký. Vui lòng sử dụng số khác.");
        return;
    }

    const newUser = {
        name,
        phone,
        email,
        password,
        role: "Thành viên",
        created: new Date().toLocaleDateString("vi-VN")
    };

    users.push(newUser);
    setStoredUsers(users);

    alert(`Chúc mừng ${name} đã đăng ký tài khoản MIDCAMERA thành công! Hãy tiến hành đăng nhập.`);

    const loginIdInput = document.getElementById("loginId");
    if (loginIdInput) loginIdInput.value = email;

    document.querySelectorAll(".auth-tab-item").forEach(t => {
        t.classList.remove("active");
        if (t.getAttribute("data-target") === "login") t.classList.add("active");
    });
    document.querySelectorAll(".auth-form-content").forEach(form => form.classList.remove("active"));
    const formLogin = document.getElementById("formLogin");
    if (formLogin) formLogin.classList.add("active");

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
    
    const redirectUrl = localStorage.getItem("mid_redirect_after_login");
    if (redirectUrl) {
        localStorage.removeItem("mid_redirect_after_login");
        window.location.href = redirectUrl;
    } else {
        window.location.href = "../index.html";
    }
}
