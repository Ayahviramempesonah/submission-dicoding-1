

//coba baru
document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen-elemen yang diperlukan
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const captionText = document.getElementById('captionText');
  const closeBtn = document.getElementById('close');

  // Tambahkan event listener ke semua gambar dengan class "clickable"
  const images = document.querySelectorAll('.clickable');
  images.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'flex'; // Tampilkan modal
      modalImg.src = this.src; // Salin sumber gambar
      captionText.textContent = this.alt; // Salin deskripsi gambar
    });
  });

  // Tutup modal ketika tombol close diklik
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Tutup modal jika area di luar gambar diklik
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});



