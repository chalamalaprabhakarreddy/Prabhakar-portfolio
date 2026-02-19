// ---------------- MENU TOGGLE ----------------
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// ---------------- BACK TO TOP ----------------
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});

// ---------------- PDF RESUME DOWNLOAD ----------------
const downloadBtn = document.getElementById('downloadResumeBtn');

downloadBtn.addEventListener('click', () => {
  const element = document.getElementById('resume');

  const opt = {
    margin: 0.5,
    filename: 'Prabhakar_Reddy_Chalamala_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});
