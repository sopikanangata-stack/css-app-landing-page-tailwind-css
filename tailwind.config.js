<script>
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    // สลับคลาส hidden (ถ้ามีอยู่ให้เอาออก ถ้าไม่มีให้ใส่เข้าไป)
    mobileMenu.classList.toggle('hidden');
  });
</script>