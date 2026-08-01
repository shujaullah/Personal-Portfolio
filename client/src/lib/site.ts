import resumePdf from "@assets/Shujaullah-Ahsan-Resume.pdf";

export const SITE = {
  name: "Shujaullah Ahsan",
  firstName: "Shujaullah",
  lastName: "Ahsan",
  shortName: "Shuja.",
  title: "Software Development Engineer",
  tagline: "Building reliable software that people and products depend on — Boston, MA",
  email: "ahsanshuja1127@gmail.com",
  location: "Boston, MA",
  github: "https://github.com/shujaullah",
  linkedin: "https://www.linkedin.com/in/shujaullah-ahsan/",
  resumeUrl: resumePdf,
  resumeFilename: "Shujaullah-Ahsan-Resume.pdf",
  heroSummary:
    "I turn messy real-world problems into clear, production-ready software — from product features and data pipelines to the systems that connect hardware, teams, and users. Currently shipping at Medica while pursuing an MS in Data Science.",
} as const;

export function downloadResume() {
  const link = document.createElement("a");
  link.href = SITE.resumeUrl;
  link.download = SITE.resumeFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function mailtoHire(subject = "Opportunity — Portfolio inquiry") {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
