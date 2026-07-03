"use strict";

/* ===========================
   AUTH APP - BASIC SETUP
=========================== */

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");

/* ===========================
   SWITCH LOGIN / REGISTER
=========================== */

loginTab.addEventListener("click", () => {

loginTab.classList.add("active");
registerTab.classList.remove("active");

loginPage.classList.add("active");
registerPage.classList.remove("active");

});

registerTab.addEventListener("click", () => {

registerTab.classList.add("active");
loginTab.classList.remove("active");

registerPage.classList.add("active");
loginPage.classList.remove("active");

});

/* ===========================
   ROLE SELECTION (BUYER / SELLER)
=========================== */

const roleButtons = document.querySelectorAll(".role-btn");
const selectedRole = document.getElementById("selectedRole");

roleButtons.forEach(btn => {

btn.addEventListener("click", () => {

roleButtons.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

selectedRole.value = btn.dataset.role;

});

});

/* ===========================
   PASSWORD TOGGLE (LOGIN)
=========================== */

const toggleLoginPassword = document.getElementById("toggleLoginPassword");
const loginPassword = document.getElementById("loginPassword");

toggleLoginPassword.addEventListener("click", () => {

if (loginPassword.type === "password") {

loginPassword.type = "text";

toggleLoginPassword.classList.remove("fa-eye");
toggleLoginPassword.classList.add("fa-eye-slash");

} else {

loginPassword.type = "password";

toggleLoginPassword.classList.add("fa-eye");
toggleLoginPassword.classList.remove("fa-eye-slash");

}

});

/* ===========================
   PASSWORD TOGGLE (REGISTER)
=========================== */

const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");
const registerPassword = document.getElementById("password");

toggleRegisterPassword.addEventListener("click", () => {

if (registerPassword.type === "password") {

registerPassword.type = "text";

toggleRegisterPassword.classList.remove("fa-eye");
toggleRegisterPassword.classList.add("fa-eye-slash");

} else {

registerPassword.type = "password";

toggleRegisterPassword.classList.add("fa-eye");
toggleRegisterPassword.classList.remove("fa-eye-slash");

}

});

/* ===========================
   CONFIRM PASSWORD TOGGLE
=========================== */

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", () => {

if (confirmPassword.type === "password") {

confirmPassword.type = "text";

toggleConfirmPassword.classList.remove("fa-eye");
toggleConfirmPassword.classList.add("fa-eye-slash");

} else {

confirmPassword.type = "password";

toggleConfirmPassword.classList.add("fa-eye");
toggleConfirmPassword.classList.remove("fa-eye-slash");

}

});

  "use strict";

/* ===========================
   LOADING + TOAST ELEMENTS
=========================== */

const loadingOverlay = document.getElementById("loadingOverlay");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

/* ===========================
   SHOW TOAST FUNCTION
=========================== */

function showToast(message, color = "#16a34a") {

toastMessage.textContent = message;
toast.style.background = color;
toast.style.display = "block";

setTimeout(() => {

toast.style.display = "none";

}, 2500);

}

/* ===========================
   SHOW LOADING
=========================== */

function showLoading() {

loadingOverlay.style.display = "flex";

}

/* ===========================
   HIDE LOADING
=========================== */

function hideLoading() {

loadingOverlay.style.display = "none";

}

/* ===========================
   LOGIN FUNCTION
=========================== */

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

const user = document.getElementById("loginUser").value.trim();
const pass = document.getElementById("loginPassword").value.trim();

if (!user || !pass) {

showToast("Please fill all login fields", "#ef4444");
return;

}

showLoading();

setTimeout(() => {

hideLoading();

showToast("Login successful ✔");

setTimeout(() => {

window.location.href = "../dashboard/dashboard.html";

}, 1200);

}, 1500);

});

/* ===========================
   REGISTER FUNCTION
=========================== */

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", () => {

const name = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const pass = document.getElementById("password").value.trim();
const confirm = document.getElementById("confirmPassword").value.trim();
const role = document.getElementById("selectedRole").value;
const agree = document.getElementById("agreeTerms").checked;

if (!name || !email || !phone || !pass || !confirm) {

showToast("Please fill all fields", "#ef4444");
return;

}

if (pass !== confirm) {

showToast("Passwords do not match", "#ef4444");
return;

}

if (!agree) {

showToast("You must accept terms", "#ef4444");
return;

}

showLoading();

setTimeout(() => {

hideLoading();

showToast("Account created successfully ✔");

setTimeout(() => {

loginTab.click(); // go to login

}, 1200);

}, 1500);

});

"use strict";

/* ===========================
   GUEST MODE
=========================== */

const guestBtn = document.querySelector(".guest-btn");

if (guestBtn) {

guestBtn.addEventListener("click", () => {

showToast("Continuing as Guest...");

setTimeout(() => {

window.location.href = "../dashboard/dashboard.html";

}, 1200);

});

}

/* ===========================
   LANGUAGE SWITCH (SIMPLE UI)
=========================== */

const kinyaBtn = document.getElementById("kinyaBtn");
const englishBtn = document.getElementById("englishBtn");

if (kinyaBtn && englishBtn) {

kinyaBtn.addEventListener("click", () => {

localStorage.setItem("lang", "kinya");

showToast("Ururimi rwahindutse: Kinyarwanda");

});

englishBtn.addEventListener("click", () => {

localStorage.setItem("lang", "en");

showToast("Language changed: English");

});

}

/* ===========================
   REMEMBER ME (LOGIN)
=========================== */

const rememberCheckbox = document.querySelector("input[type='checkbox']");

if (rememberCheckbox) {

rememberCheckbox.addEventListener("change", () => {

if (rememberCheckbox.checked) {

localStorage.setItem("remember", "true");

} else {

localStorage.removeItem("remember");

}

});

}

/* ===========================
   ENTER KEY SUPPORT
=========================== */

document.addEventListener("keydown", (e) => {

if (e.key === "Enter") {

const loginVisible = document.getElementById("loginPage").classList.contains("active");

if (loginVisible) {

loginBtn.click();

} else {

registerBtn.click();

}

}

});

/* ===========================
   AUTO CHECK REMEMBER STATE
=========================== */

window.addEventListener("load", () => {

if (localStorage.getItem("remember") === "true") {

const remember = document.querySelector("input[type='checkbox']");

if (remember) {

remember.checked = true;

}

}

});

/* ===========================
   SMALL UX POLISH
=========================== */

function clearInputs() {

document.querySelectorAll("input").forEach(i => {

if (i.type !== "checkbox") i.value = "";

});

}

/* ===========================
   PATCH LOGIN SUCCESS CLEANUP
=========================== */

const originalLogin = loginBtn.onclick;

loginBtn.addEventListener("click", () => {

setTimeout(() => {

clearInputs();

}, 2000);

});
