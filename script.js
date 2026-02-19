// MENU TOGGLE
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// BACK TO TOP
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backToTop.style.display='block';
  else backToTop.style.display='none';
});
backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// DOWNLOAD ATS RESUME
const downloadBtn = document.getElementById('downloadResumeBtn');
downloadBtn.addEventListener('click', () => {
  const resumeText = `
PRABHAKAR REDDY CHALAMALA
Azure Data Engineer
Hyderabad, India
Phone: +91-6281646106
Email: reddyprabhakar303@gmail.com

PROFESSIONAL SUMMARY
Azure Data Engineer with 3+ years of experience designing enterprise-scale Lakehouse architectures using Azure Databricks, PySpark, Delta Lake, and ADF. Improved ETL runtime by 20% and reduced compute cost by 15%.

SKILLS
Python, SQL, PySpark, Azure Databricks, Delta Lake, ADLS Gen2, ADF

EXPERIENCE
Infinite Computer Solutions (Oct 2022 – Present)
- Implemented Lakehouse pipelines
- Managed 5,000 partition datasets
- Developed AI-driven Jira automation

EDUCATION
B.Sc Computer Science – 2018
B.Ed Mathematics – 2021

CERTIFICATIONS
Databricks Certified Data Engineer Professional – 2025
  `;
  const blob = new Blob([resumeText], {type:'text/plain'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "Prabhakar_Reddy_ATS_Resume.txt";
  link.click();
});
