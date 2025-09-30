// Menu toggle logic
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  const isActive = sidebar.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', isActive);
  // Hide intro content behind menu when sidebar active on mobile
  document.getElementById('intro').style.visibility = isActive ? 'hidden' : 'visible';
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// PDF generation with html2pdf.js
const generatePdfBtn = document.getElementById('generatePdfBtn');

generatePdfBtn.addEventListener('click', () => {
  const element = document.getElementById('content-wrapper');
  const opt = {
    margin: 0.5,
    filename: 'Prabhakar_Reddy_Chalamala_Portfolio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});

// Resume Download (optional alternative)
// If you want to generate PDF dynamically from content, you can reuse above function.
// For now, simulate download of the same generated PDF on clicking Download Resume button.
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
downloadResumeBtn.addEventListener('click', () => {
  generatePdfBtn.click(); // Trigger PDF generation
});
