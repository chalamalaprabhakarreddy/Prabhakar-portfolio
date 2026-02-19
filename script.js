// ---------------- MENU TOGGLE ----------------
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  const isActive = sidebar.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', isActive);
});

// ---------------- BACK TO TOP ----------------
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------------- RESUME DOWNLOAD ----------------
const downloadBtn = document.getElementById('downloadResumeBtn');

downloadBtn.addEventListener('click', () => {
  // Resume content as ATS-friendly text
  const resumeContent = `
Prabhakar Reddy Chalamala
Azure Data Engineer | Azure Databricks | PySpark | Delta Lake | ADF | Lakehouse Architecture
Hyderabad, India | +91-6281646106 | reddyprabhakar303@gmail.com
LinkedIn: https://linkedin.com/in/prabhakar-reddy-chalamala-34923a232

PROFESSIONAL SUMMARY
Azure Data Engineer with 3+ years of experience designing and optimizing enterprise-scale Lakehouse architectures on Microsoft Azure. Expertise in Azure Databricks, PySpark, Delta Lake, and Azure Data Factory. Improved ETL runtime by 20% and reduced compute cost by 15% through Spark performance tuning and partition optimization. Experienced in healthcare analytics, high-volume partitioned data processing (~5,000 partitions per table), AI-driven automation, and Agile leadership.

CORE TECHNICAL SKILLS
Programming: Python, SQL, PySpark, Spark SQL
Cloud Platforms: Azure Databricks, Delta Lake, ADLS Gen2, Azure Synapse, Unity Catalog
ETL & Orchestration: Azure Data Factory (ADF), Databricks Workflows, AutoSys
Architecture: Medallion (Bronze-Silver-Gold), Incremental Loads, Partition Strategy
Performance Optimization: Repartitioning, Broadcast Joins, Caching, Z-ORDER, OPTIMIZE, VACUUM
Governance: Schema Validation, Audit Logging, Data Lineage, 60-Day Retention Policies
Integration: Jira REST API, OpenAI API
DevOps & Agile: Git, Azure DevOps, Scrum, Sprint Planning, RFC Reviews, Peer Code Reviews

PROFESSIONAL EXPERIENCE
Infinite Computer Solutions – Hyderabad, India
Azure Data Engineer | Oct 2022 – Present
- Designed and implemented scalable Lakehouse pipelines using Azure Databricks, PySpark, and Delta Lake across Bronze, Silver, and Gold layers.
- Optimized Spark workloads improving runtime by 20% and reducing Azure compute costs by 15%.
- Engineered high-volume ingestion framework processing ~5,000 partitioned files per table while maintaining strict downstream dependency stability.
- Migrated legacy SQL post-processing scripts into distributed PySpark workflows preserving partition integrity.
- Implemented 60-day Delta Lake retention policy and executed controlled VACUUM operations for storage governance.
- Built AI-driven Jira automation integrating Jira REST API and OpenAI, reducing ticket analysis effort by ~20% across teams.
- Acted as Scrum Master in absence of dedicated role, led sprint ceremonies, stakeholder updates, and peer reviews before RFC approvals.

PROJECTS
- AI-Driven Jira Ticket Automation Platform: Developed Databricks-based automation integrating Jira REST API and OpenAI API. Reduced manual ticket triage effort by ~20%.
- High-Volume Partitioned Data Processing Framework: Designed Spark ingestion system processing ~5,000 partitioned text files per table with dynamic repartition logic to maintain exact partition counts.
- SQL Post-Processing Modernization: Converted legacy SQL scripts into scalable PySpark workflows preserving 5,000-partition structure.
- Chronic Condition Healthcare Reporting Framework: Developed reusable PySpark framework for chronic condition data validation and Gold-layer Delta dataset generation.

ACHIEVEMENTS
- Performer of the Quarter – 2024 (Infinite Spark Award)
- Performer of the Month – 2024 (Infinite Spot Award)
- Consistent zero-defect, SLA-compliant production deliveries

EDUCATION
- Bachelor of Science (Computer Science) – 2018
- Bachelor of Education (Mathematics) – 2021

CERTIFICATIONS
- Databricks Certified Data Engineer Professional – 2025

Contact: +91-6281646106 | reddyprabhakar303@gmail.com | LinkedIn: https://linkedin.com/in/prabhakar-reddy-chalamala-34923a232
`;

  // Create a blob and trigger download
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Prabhakar_Reddy_Chalamala_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
