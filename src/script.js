// Ambil tombol menu dan menu mobile
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Fungsi toggle untuk menampilkan atau menyembunyikan menu mobile
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
