console.log("JS login aktif");
// ====== SPA NAVIGATION ======
function showPage(pageId) {
    // sembunyikan semua page
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // tampilkan page yang dipilih
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add("active");
    }
}

// ====== ACTIVE MENU BUTTON ======
function setActiveMenu(button) {
    const buttons = document.querySelectorAll(".sidebar button");
    buttons.forEach(btn => {
        btn.classList.remove("active-menu");
    });

    button.classList.add("active-menu");
}
// ====== CLEANLINESS FORM ======
const cleanForm = document.getElementById("cleanForm");
const cleanList = document.getElementById("cleanList");

if (cleanForm && cleanList) {
    cleanForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const location = document.getElementById("location").value;
        const condition = document.getElementById("condition").value;

        const item = document.createElement("div");
        item.classList.add("clean-item");

        item.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Condition:</strong> ${condition}</p>
            <hr>
        `;

        cleanList.appendChild(item);
        cleanForm.reset();
    });
}
const guestForm = document.getElementById("guestForm");
const guestList = document.getElementById("guestList");

if (guestForm && guestList) {
    guestForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("guestName").value;
        const message = document.getElementById("guestMessage").value;

        const initial = name.charAt(0).toUpperCase();

        const item = document.createElement("div");
        item.classList.add("guest-item");

        item.innerHTML = `
            <div class="guest-avatar">${initial}</div>
            <div class="guest-content">
                <div class="guest-name">${name}</div>
                <div class="guest-message">${message}</div>
            </div>
        `;

        guestList.prepend(item);
        guestForm.reset();
    });
}
window.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username");
            const password = document.getElementById("password");

            if (!username || !password) return;

            if (username.value === "eko" && password.value === "12345") {
                window.location.href = "webisi.html";
            } else {
                alert("Username atau password salah!");
            }
        });
    }

});
function logout() {
    window.location.href = "index.html"; // ganti sesuai file login kamu
}
// Text yang akan ditampilkan
const text = "My Dashboard";

// Index huruf
let index = 0;

// Status hapus / mengetik
let isDeleting = false;

// Function typing
function typeEffect(){

  // Mengambil element HTML
  const typing = document.getElementById("typing");

  // Jika sedang mengetik
  if(!isDeleting){

    // Menampilkan text bertahap
    typing.innerHTML = text.substring(0, index + 1);

    index++;

    // Jika text selesai
    if(index === text.length){

      isDeleting = true;

      setTimeout(typeEffect, 1000);

      return;
    }

  }else{

    // Menghapus text perlahan
    typing.innerHTML = text.substring(0, index - 1);

    index--;

    // Jika text habis
    if(index === 0){

      isDeleting = false;
    }
  }

  // Kecepatan animasi
  setTimeout(typeEffect, isDeleting ? 80 : 150);
}

// Menjalankan function
window.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

const btn = document.getElementById("darkModeBtn");

if (btn) {

    btn.addEventListener("click", function () {

        // menambah / menghapus class dark di body
        document.body.classList.toggle("dark");

        // ambil icon di dalam tombol
        const icon = btn.querySelector("i");

        // ambil tulisan span
        const text = btn.querySelector("span");

        // cek apakah dark mode aktif
        if (document.body.classList.contains("dark")) {

            // ganti icon jadi matahari
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            // ganti tulisan
            text.textContent = "Light Mode";

        } else {

            // ganti icon jadi bulan
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            // ganti tulisan
            text.textContent = "Dark Mode";
        }

    });

}