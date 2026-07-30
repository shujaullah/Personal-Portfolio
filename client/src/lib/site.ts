import resumePdf from "@assets/Resume_Shuja_1750795062850.pdf";

export const SITE = {
  name: "Shujaullah Ahsan",
  firstName: "Shujaullah",
  lastName: "Ahsan",
  shortName: "Shuja.",
  title: "Software Engineer | C++ / Qt / Full-Stack",
  tagline: "Software Engineer based in Boston, MA",
  email: "ahsanshuja1127@gmail.com",
  location: "Boston, MA",
  github: "https://github.com/shujaullah",
  linkedin: "https://www.linkedin.com/in/shujaullah-ahsan/",
  resumeUrl: resumePdf,
  resumeFilename: "Shujaullah_Ahsan_Resume.pdf",
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
