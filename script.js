document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector('.main-content');
    const welcomeScreen = document.querySelector('.welcome-screen');
    
    // Fungsi untuk mendeteksi scroll
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;

        // Jika user scroll lebih dari 50px
        if (scrollValue > 50) {
            // Munculkan konten utama
            mainContent.classList.add('active');
            
            // Berikan efek fade out pada welcome screen agar rapi
            welcomeScreen.style.opacity = '0';
            welcomeScreen.style.transition = '0.8s';
        } else {
            // Sembunyikan kembali jika user balik ke paling atas (opsional)
            mainContent.classList.remove('active');
            welcomeScreen.style.opacity = '1';
        }
    });

    // Efek Tambahan: Animasi ngetik sederhana di console (biar makin kerasa tech-nya)
    console.log("%c System D Studio Lite: Activated ", "background: #00ffff; color: #000; font-weight: bold;");
    console.log("%c Welcome, Creator. ", "color: #00ffff;");
});
