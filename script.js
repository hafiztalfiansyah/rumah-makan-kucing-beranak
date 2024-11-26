// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// Fungsi untuk menampilkan atau menyembunyikan menu navbar
hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

// Pencarian Toggle
const searchIcon = document.getElementById('search');
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Cari...';
searchInput.id = 'search-input';

// Menampilkan input pencarian ketika ikon search diklik
searchIcon.addEventListener('click', () => {
    if (!document.getElementById('search-input')) {
        searchIcon.appendChild(searchInput);  // Menambahkan input ke dalam icon pencarian
        searchInput.focus();
    } else {
        searchInput.remove();  // Menghapus input pencarian jika sudah ada
    }
});

// Shopping Cart Toggle (Contoh)
const shoppingCartIcon = document.getElementById('shopping-cart');
shoppingCartIcon.addEventListener('click', () => {
    alert("Fitur keranjang belanja belum diimplementasikan.");
});
