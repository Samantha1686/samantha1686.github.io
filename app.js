/* =========
  Data Model
=========== */
const STORAGE_KEY = "ss_portfolio_projects_v1";
const PROFILE_IMAGE_KEY = "ss_portfolio_profile_image_v1";
const OLD_DEFAULT_PROFILE_IMAGE = "images/profile/profile-photo.jpg";
const LEGACY_DEFAULT_PROFILE_IMAGE = "images/profile/Screenshot_20251107_194643_Snapchat(1).jpg";
const PREVIOUS_DEFAULT_PROFILE_IMAGE = "images/profile/Screenshot_20251107_194643_Snapchat.jpg";
const DEFAULT_PROFILE_IMAGE = "images/profile/Screenshot_20260202_200135_Snapchat.jpg";
const FILM_PERMIT_IMAGE = "images/projects/film-permits-student.png";
const FILM_PERMIT_MEDIA = "images/projects/Film_Permits_Student.xlsx";
const AB_TESTING_MEDIA = "images/projects/AB-Testing-The-Recording-Academy%20(1)%20(1).xlsx";
const GRAMMY_MEDIA = "images/projects/Copy of Grammys Social Media Project.pptx1.pdf";
const GRAMMY_PROJECT_TITLE = "Project 7 - GRAMMY Awards Social Media Campaign Concept";
const AB_TESTING_PROJECT_TITLE = "Project 8 - A/B Testing - The Recording Academy";
const INTEL_CSR_MEDIA = "images/projects/Intel's Corporate Responsibilty Report.pdf";
const INTEL_CSR_IMAGES = [
  "images/projects/sustainability-data-analysis-intel-csr-metrics-1.png",
  "images/projects/sustainability-data-analysis-intel-csr-metrics-2.png",
  "images/projects/sustainability-data-analysis-intel-csr-metrics-3.png"
];
const INTEL_EXCEL_MEDIA = "images/projects/Project-Sustainability-Impact-Analysis.xlsx";
const PROJECT_IMAGE_LIBRARY = {
  "grammy awards social media campaign concept": [
    "images/projects/grammy-awards-social-media-campaign-concept.png"
  ],
  "project 7 grammy awards social media campaign concept": [
    "images/projects/grammy-awards-social-media-campaign-concept.png"
  ],
  "sustainability data analysis intel csr metrics": [...INTEL_CSR_IMAGES],
  "intel csr metrics": [...INTEL_CSR_IMAGES],
  "charity water project 1 mockup landing page": [
    "images/projects/charity-water-donation-landing-page-campaign-2.png"
  ],
  "charity water project 2 game concept": [
    "images/projects/charity-water-donation-landing-page-campaign-3.png",
    "images/projects/charity-water-donation-landing-page-campaign-4.png"
  ],
  "charity water project 3 landing page": [
    "images/projects/charity-water-donation-landing-page-campaign.png"
  ],
  "charity water donation landing page campaign": [
    "images/projects/charity-water-donation-landing-page-campaign.png"
  ],
  "film permits student": [
    FILM_PERMIT_IMAGE
  ],
  "film permit project": [
    FILM_PERMIT_IMAGE
  ]
};
const PROJECT_MEDIA_LIBRARY = {
  "grammy awards social media campaign concept": GRAMMY_MEDIA,
  "project 7 grammy awards social media campaign concept": GRAMMY_MEDIA,
  "ab testing the recording academy": AB_TESTING_MEDIA,
  "project 8 a b testing the recording academy": AB_TESTING_MEDIA,
  "recording academy ab testing": AB_TESTING_MEDIA,
  "sustainability data analysis intel csr metrics": INTEL_CSR_MEDIA,
  "sustainability impact analysis excel dataset": INTEL_EXCEL_MEDIA,
  "film permits student": FILM_PERMIT_MEDIA,
  "film permit project": FILM_PERMIT_MEDIA
};
const CHARITY_PROJECT_1_TITLE = "charity: water Project 1 — Mockup Landing Page";
const CHARITY_PROJECT_2_TITLE = "charity: water Project 2 — Game Concept";
const CHARITY_PROJECT_3_TITLE = "charity: water Project 3 — Landing Page";
const FILM_PERMIT_PROJECT_TITLE = "Film Permit Analysis Project";

function defaultProjects() {
  return [
    {
      id: crypto.randomUUID(),
      title: GRAMMY_PROJECT_TITLE,
      type: "Campaign",
      summary: "Developed a brand-focused social campaign concept promoting a limited-edition merchandise drop.",
      bullets: [
        "Created campaign theme and messaging to connect award-night culture with fan fashion",
        "Designed visual concepts and social copy in Canva",
        "Identified target audience segments and engagement-focused content ideas"
      ],
      skills: ["Brand Storytelling", "Social Media Marketing", "Campaign Strategy", "Canva"],
      tags: ["Brand", "Campaign", "Social Media"],
      link: "",
      media: GRAMMY_MEDIA,
      feedback: [
        "Strong concept and cohesive theme—tighten the CTA to make the next action clearer.",
        "Add 1–2 example posts or mock ads as proof of execution."
      ],
      createdAt: Date.now()
    },
    abTestingProjectTemplate(),
    intelCsrProjectTemplate(),
    intelExcelProjectTemplate(),
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_1_TITLE,
      type: "Landing Page",
      summary: "Created a charity: water mockup landing page concept tailored for student-focused nonprofit storytelling.",
      bullets: [
        "Aligned visual identity and tone with charity: water brand style",
        "Wrote audience-specific messaging and a clear donation CTA",
        "Designed page layout and assets in Canva; translated concept into basic web layout"
      ],
      skills: ["Landing Page Strategy", "Brand Alignment", "Content Creation", "Basic HTML/CSS"],
      tags: ["Nonprofit", "Brand", "Landing Page"],
      link: "",
      media: "images/projects/charity-water-project-1-mockup-landing-page.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign-2.png"],
      feedback: [
        "Great mission alignment—add a short “why donate now” section for urgency.",
        "Consider 1 small credibility element (impact metric, trust badge, or quote)."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_2_TITLE,
      type: "Campaign Concept",
      summary: "Developed a gamified campaign concept to increase engagement and support for charity: water.",
      bullets: [
        "Designed concept direction and key interaction flow for a mission-focused game idea",
        "Mapped messaging moments to donation and awareness goals",
        "Organized concept output into presentation-ready format"
      ],
      skills: ["Campaign Strategy", "Concept Development", "Storytelling"],
      tags: ["Nonprofit", "Campaign", "Creative"],
      link: "",
      media: "images/projects/assets/charity-water-project-2-game-concept.pdf",
      images: [
        "images/projects/charity-water-donation-landing-page-campaign-3.png",
        "images/projects/charity-water-donation-landing-page-campaign-4.png"
      ],
      feedback: [
        "Strong concept direction—add one slide that shows expected user journey from awareness to action."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_3_TITLE,
      type: "Landing Page",
      summary: "Built a second landing page direction with a refined structure and message hierarchy.",
      bullets: [
        "Refined section flow, headline structure, and CTA placement",
        "Adjusted copy blocks for clarity and stronger narrative momentum",
        "Prepared final export for portfolio presentation"
      ],
      skills: ["Landing Page Strategy", "Content Design", "Brand Messaging"],
      tags: ["Nonprofit", "Landing Page", "UX Copy"],
      link: "",
      media: "images/projects/charity-water-project-3-landing-page.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign.png"],
      feedback: [
        "Good structure—consider a compact trust signal section near the primary CTA."
      ],
      createdAt: Date.now()
    },
    filmPermitProjectTemplate()
  ];
}

function filmPermitProjectTemplate() {
  return {
    id: crypto.randomUUID(),
    title: FILM_PERMIT_PROJECT_TITLE,
    type: "Analytics",
    summary: "Analyzed student film permit data to identify trends and reporting insights.",
    bullets: [
      "Reviewed permit records and organized key fields for analysis",
      "Summarized notable patterns and outliers for decision support",
      "Prepared the dataset for stakeholder-friendly review"
    ],
    skills: ["Excel", "Data Analysis", "Reporting"],
    tags: ["Analytics", "Excel", "Research"],
    link: "",
    media: FILM_PERMIT_MEDIA,
    images: [FILM_PERMIT_IMAGE],
    feedback: [
      "Clear analysis direction—consider adding one chart snapshot to highlight the top insight."
    ],
    createdAt: Date.now()
  };
}

function abTestingProjectTemplate() {
  return {
    id: crypto.randomUUID(),
    title: AB_TESTING_PROJECT_TITLE,
    type: "Analytics",
    summary: "Analyzed A/B test results to evaluate messaging and engagement performance for The Recording Academy.",
    bullets: [
      "Compared variant performance to identify stronger content and CTA direction",
      "Reviewed core metrics in Excel to determine winner and uplift",
      "Summarized recommendations for campaign optimization"
    ],
    skills: ["Excel", "A/B Testing", "Data Analysis", "Reporting"],
    tags: ["Analytics", "Excel", "Experimentation"],
    link: "",
    media: AB_TESTING_MEDIA,
    images: [],
    feedback: [
      "Add one concise chart or table snapshot in the project notes to highlight the winning variant."
    ],
    createdAt: Date.now()
  };
}

function intelCsrProjectTemplate() {
  return {
    id: crypto.randomUUID(),
    title: "Sustainability Data Analysis – Intel CSR Metrics",
    type: "Analytics",
    summary: "Synthesized corporate responsibility metrics into a stakeholder-friendly insight report.",
    bullets: [
      "Analyzed environmental metrics including emissions reduction, renewable electricity, and circularity",
      "Translated quantitative findings into clear, visual storytelling",
      "Summarized takeaways for non-technical audiences"
    ],
    skills: ["Data Interpretation", "Storytelling with Data", "Insight Writing"],
    tags: ["Analytics", "Reporting"],
    link: "",
    media: INTEL_CSR_MEDIA,
    images: [...INTEL_CSR_IMAGES],
    feedback: [
      "Nice narrative structure—add a quick ‘method’ note (what you reviewed and how you summarized)."
    ],
    createdAt: Date.now()
  };
}

function intelExcelProjectTemplate() {
  return {
    id: crypto.randomUUID(),
    title: "Sustainability Impact Analysis (Excel Dataset)",
    type: "Analytics",
    summary: "Analyzed a large dataset to evaluate sustainability impact across devices and regions.",
    bullets: [
      "Analyzed ~19,700 records across variables like energy savings, CO₂ saved, and recycling rate",
      "Used Excel functions (COUNT, AVERAGE) to summarize trends and compare segments",
      "Outlined insights for impact reporting"
    ],
    skills: ["Excel", "Data Analysis", "Reporting"],
    tags: ["Analytics", "Excel"],
    link: "",
    media: INTEL_EXCEL_MEDIA,
    images: [],
    feedback: [
      "If possible, add 1 chart (even a simple bar chart) to make insights instantly readable."
    ],
    createdAt: Date.now()
  };
}

function charityProjectTemplates() {
  return [
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_1_TITLE,
      type: "Landing Page",
      summary: "Created a charity: water mockup landing page concept tailored for student-focused nonprofit storytelling.",
      bullets: [
        "Aligned visual identity and tone with charity: water brand style",
        "Wrote audience-specific messaging and a clear donation CTA",
        "Designed page layout and assets in Canva; translated concept into basic web layout"
      ],
      skills: ["Landing Page Strategy", "Brand Alignment", "Content Creation", "Basic HTML/CSS"],
      tags: ["Nonprofit", "Brand", "Landing Page"],
      link: "",
      media: "images/projects/charity-water-project-1-mockup-landing-page.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign-2.png"],
      feedback: [
        "Great mission alignment—add a short “why donate now” section for urgency.",
        "Consider 1 small credibility element (impact metric, trust badge, or quote)."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_2_TITLE,
      type: "Campaign Concept",
      summary: "Developed a gamified campaign concept to increase engagement and support for charity: water.",
      bullets: [
        "Designed concept direction and key interaction flow for a mission-focused game idea",
        "Mapped messaging moments to donation and awareness goals",
        "Organized concept output into presentation-ready format"
      ],
      skills: ["Campaign Strategy", "Concept Development", "Storytelling"],
      tags: ["Nonprofit", "Campaign", "Creative"],
      link: "",
      media: "images/projects/assets/charity-water-project-2-game-concept.pdf",
      images: [
        "images/projects/charity-water-donation-landing-page-campaign-3.png",
        "images/projects/charity-water-donation-landing-page-campaign-4.png"
      ],
      feedback: [
        "Strong concept direction—add one slide that shows expected user journey from awareness to action."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_3_TITLE,
      type: "Landing Page",
      summary: "Built a second landing page direction with a refined structure and message hierarchy.",
      bullets: [
        "Refined section flow, headline structure, and CTA placement",
        "Adjusted copy blocks for clarity and stronger narrative momentum",
        "Prepared final export for portfolio presentation"
      ],
      skills: ["Landing Page Strategy", "Content Design", "Brand Messaging"],
      tags: ["Nonprofit", "Landing Page", "UX Copy"],
      link: "",
      media: "images/projects/charity-water-project-3-landing-page.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign.png"],
      feedback: [
        "Good structure—consider a compact trust signal section near the primary CTA."
      ],
      createdAt: Date.now()
    }
  ];
}

function migrateProjects(rawProjects) {
  if (!Array.isArray(rawProjects)) return defaultProjects();

  const templates = charityProjectTemplates();
  const filmPermitTemplate = filmPermitProjectTemplate();
  const abTestingTemplate = abTestingProjectTemplate();
  const intelCsrTemplate = intelCsrProjectTemplate();
  const intelExcelTemplate = intelExcelProjectTemplate();
  const oldTitle = "charity: water Donation Landing Page Campaign";
  const normalizedExisting = new Set(rawProjects.map(item => normalizeProjectKey(item?.title)));
  const hasLegacy = normalizedExisting.has(normalizeProjectKey(oldTitle));
  const hasAnyCharitySplit = templates.some(item => normalizedExisting.has(normalizeProjectKey(item.title)));
  const hasFilmPermit = rawProjects.some(item => isFilmPermitProjectKey(normalizeProjectKey(item?.title)));
  const hasCsrProject = rawProjects.some(item => {
    const key = normalizeProjectKey(item?.title);
    return key.includes("intel csr metrics") || key.includes("sustainability data analysis");
  });
  const hasExcelProject = rawProjects.some(item => {
    const key = normalizeProjectKey(item?.title);
    return key.includes("sustainability impact analysis") || key.includes("excel dataset");
  });
  const hasAbTestingProject = rawProjects.some(item => {
    const key = normalizeProjectKey(item?.title);
    return key.includes("ab testing") || key.includes("recording academy");
  });

  let next = rawProjects.filter(item => normalizeProjectKey(item?.title) !== normalizeProjectKey(oldTitle));
  let changed = next.length !== rawProjects.length;
  const nextTitles = new Set(next.map(item => normalizeProjectKey(item?.title)));

  for (const template of templates) {
    const key = normalizeProjectKey(template.title);
    if (!nextTitles.has(key)) {
      next.push(template);
      nextTitles.add(key);
      changed = true;
      continue;
    }

    const index = next.findIndex(item => normalizeProjectKey(item?.title) === key);
    if (index >= 0) {
      const sameMedia = String(next[index].media || "") === template.media;
      const sameImages = JSON.stringify(next[index].images || []) === JSON.stringify(template.images || []);
      next[index] = {
        ...next[index],
        media: template.media,
        images: [...(template.images || [])]
      };
      if (!sameMedia || !sameImages) changed = true;
    }
  }

  const stillHasFilmPermit = next.some(item => isFilmPermitProjectKey(normalizeProjectKey(item?.title)));
  if (!stillHasFilmPermit) {
    next.push(filmPermitTemplate);
    changed = true;
  }

  if (!hasCsrProject) {
    next.push(intelCsrTemplate);
    changed = true;
  }

  if (!hasExcelProject) {
    next.push(intelExcelTemplate);
    changed = true;
  }

  if (!hasAbTestingProject) {
    next.push(abTestingTemplate);
    changed = true;
  }

  next = next.map(project => {
    const key = normalizeProjectKey(project?.title);
    const isGrammy = key.includes("grammy") && key.includes("social media");
    const isCsr = key.includes("intel csr metrics") || key.includes("sustainability data analysis");
    const isExcel = key.includes("sustainability impact analysis") || key.includes("excel dataset");
    const isAbTesting = key.includes("ab testing") || key.includes("recording academy");
    if (isGrammy) {
      const currentMedia = String(project.media || "").trim();
      const nextMedia = currentMedia || GRAMMY_MEDIA;
      const sameMedia = currentMedia === nextMedia;
      const sameTitle = String(project.title || "") === GRAMMY_PROJECT_TITLE;
      if (!sameMedia || !sameTitle) changed = true;
      return {
        ...project,
        title: GRAMMY_PROJECT_TITLE,
        media: nextMedia
      };
    }

    if (isCsr) {
      const currentMedia = String(project.media || "").trim();
      const nextMedia = INTEL_CSR_MEDIA;
      const sameMedia = currentMedia === nextMedia;
      const sameImages = JSON.stringify(project.images || []) === JSON.stringify(INTEL_CSR_IMAGES);
      if (!sameMedia || !sameImages) changed = true;
      return {
        ...project,
        link: "",
        media: nextMedia,
        images: [...INTEL_CSR_IMAGES]
      };
    }

    if (isExcel) {
      const currentMedia = String(project.media || "").trim();
      const nextMedia = INTEL_EXCEL_MEDIA;
      const sameMedia = currentMedia === nextMedia;
      const sameImages = JSON.stringify(project.images || []) === JSON.stringify([]);
      if (!sameMedia || !sameImages) changed = true;
      return {
        ...project,
        media: nextMedia,
        images: []
      };
    }

    if (isAbTesting) {
      const currentMedia = String(project.media || "").trim();
      const nextMedia = AB_TESTING_MEDIA;
      const sameMedia = currentMedia === nextMedia;
      const sameImages = JSON.stringify(project.images || []) === JSON.stringify([]);
      const sameTitle = String(project.title || "") === AB_TESTING_PROJECT_TITLE;
      if (!sameMedia || !sameImages || !sameTitle) changed = true;
      return {
        ...project,
        title: AB_TESTING_PROJECT_TITLE,
        media: nextMedia,
        images: []
      };
    }

    if (isFilmPermitProjectKey(key)) {
      const currentMedia = String(project.media || "").trim();
      const nextMedia = currentMedia || FILM_PERMIT_MEDIA;
      const nextImages = (project.images || []).length ? project.images : [FILM_PERMIT_IMAGE];
      const sameMedia = currentMedia === nextMedia;
      const sameImages = JSON.stringify(project.images || []) === JSON.stringify(nextImages);
      if (!sameMedia || !sameImages) changed = true;
      return {
        ...project,
        media: nextMedia,
        images: [...nextImages]
      };
    }

    return project;
  });

  const ordered = sortProjectsByPreferredOrder(next);
  const orderChanged = ordered.length !== next.length || ordered.some((project, index) => project !== next[index]);
  if (orderChanged) changed = true;
  return changed ? ordered : rawProjects;
}

/* =========
  Storage
=========== */
function loadProjects() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProjects();
  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return defaultProjects();
    const migrated = migrateProjects(data);
    if (migrated !== data) {
      saveProjects(migrated);
    }
    return migrated;
  } catch {
    return defaultProjects();
  }
}

function saveProjects(nextProjects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProjects));
}

function loadProfileImage() {
  const stored = String(localStorage.getItem(PROFILE_IMAGE_KEY) || "").trim();
  if (
    !stored ||
    stored === OLD_DEFAULT_PROFILE_IMAGE ||
    stored === LEGACY_DEFAULT_PROFILE_IMAGE ||
    stored === PREVIOUS_DEFAULT_PROFILE_IMAGE
  ) {
    return DEFAULT_PROFILE_IMAGE;
  }
  return stored;
}

function saveProfileImage(url) {
  localStorage.setItem(PROFILE_IMAGE_KEY, url);
}

/* =========
  Helpers
=========== */
function uniq(arr) {
  return [...new Set(arr)];
}

function esc(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function byNewest(a, b) {
  return (b.createdAt || 0) - (a.createdAt || 0);
}

function canonicalProjectKey(project) {
  const key = normalizeProjectKey(project?.title);

  if (key.includes("grammy") && key.includes("social media")) return "grammy";
  if (key.includes("ab testing") || key.includes("recording academy")) return "ab-testing";
  if (key.includes("intel csr metrics") || key.includes("sustainability data analysis")) return "intel-csr";
  if (key.includes("sustainability impact analysis") || key.includes("excel dataset")) return "intel-excel";
  if (key.includes("charity water project 1") || key.includes("mockup landing page")) return "charity-1";
  if (key.includes("charity water project 2") || key.includes("game concept")) return "charity-2";
  if (key.includes("charity water project 3")) return "charity-3";
  if (key.includes("charity water") && key.includes("landing page")) return "charity-3";
  if (isFilmPermitProjectKey(key)) return "film-permit";

  return "other";
}

function getProjectNumber(project) {
  const title = String(project?.title || "");
  const match = title.match(/\bproject\s*(\d+)\b/i);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : null;
}

function projectSortRank(project) {
  const key = canonicalProjectKey(project);
  const order = {
    "ab-testing": 0,
    "grammy": 1,
    "intel-csr": 2,
    "intel-excel": 3,
    "charity-1": 4,
    "charity-2": 5,
    "charity-3": 6,
    "film-permit": 7,
    "other": 100
  };
  return order[key] ?? 100;
}

function sortProjectsByPreferredOrder(list) {
  const indexed = list.map((project, index) => ({ project, index }));
  indexed.sort((a, b) => {
    const aNumber = getProjectNumber(a.project);
    const bNumber = getProjectNumber(b.project);
    const hasANumber = aNumber !== null;
    const hasBNumber = bNumber !== null;

    // Keep numbered projects in descending order so lower numbers settle later in the grid.
    if (hasANumber && hasBNumber && aNumber !== bNumber) return bNumber - aNumber;
    if (hasANumber !== hasBNumber) return hasANumber ? -1 : 1;

    const rankDiff = projectSortRank(a.project) - projectSortRank(b.project);
    if (rankDiff !== 0) return rankDiff;
    return a.index - b.index;
  });
  return indexed.map(item => item.project);
}

function sortProjectsNewestFirst(list) {
  return [...list].sort((a, b) => {
    const byDate = byNewest(a, b);
    if (byDate !== 0) return byDate;

    // If timestamps are identical/missing, keep newest additions first.
    return projects.indexOf(b) - projects.indexOf(a);
  });
}

function splitLines(raw) {
  return String(raw)
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);
}

function splitCsv(raw) {
  return String(raw)
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
}

function exportFilename() {
  const date = new Date().toISOString().slice(0, 10);
  return `portfolio-projects-${date}.json`;
}

function normalizeProjectKey(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("&", " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function isFilmPermitProjectKey(key) {
  return key.includes("film permit") || key.includes("film permits");
}

function getProjectImages(project) {
  const directImages = Array.isArray(project.images)
    ? project.images.map(item => String(item || "").trim()).filter(Boolean)
    : [];

  if (directImages.length) return directImages;

  const directImage = String(project.image || "").trim();
  if (directImage) return [directImage];

  const key = normalizeProjectKey(project.title);
  return PROJECT_IMAGE_LIBRARY[key] || [];
}

/* =========
  State
=========== */
let projects = sortProjectsByPreferredOrder(loadProjects());
let profileImage = loadProfileImage();
let excelPreviewState = null;

/* =========
  Elements
=========== */
const yearEl = document.getElementById("year");
const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const searchInput = document.getElementById("searchInput");
const tagFilter = document.getElementById("tagFilter");

const statProjects = document.getElementById("statProjects");
const statSkills = document.getElementById("statSkills");
const skillsChips = document.getElementById("skillsChips");

const adminToggle = document.getElementById("adminToggle");
const adminPanel = document.getElementById("adminPanel");

const projectForm = document.getElementById("projectForm");
const adminList = document.getElementById("adminList");
const clearBtn = document.getElementById("clearBtn");
const exportBtn = document.getElementById("exportBtn");
const importInput = document.getElementById("importInput");
const resetBtn = document.getElementById("resetBtn");
const profileAvatarImage = document.getElementById("profileAvatarImage");
const profileAvatarInitials = document.getElementById("profileAvatarInitials");
const brandAvatarImage = document.getElementById("brandAvatarImage");
const brandAvatarInitials = document.getElementById("brandAvatarInitials");
const profileImageInput = document.getElementById("profileImageInput");
const saveProfileImageBtn = document.getElementById("saveProfileImageBtn");
const useDefaultProfileImageBtn = document.getElementById("useDefaultProfileImageBtn");

/* Form fields */
const fieldId = document.getElementById("projectId");
const fieldTitle = document.getElementById("title");
const fieldType = document.getElementById("type");
const fieldSummary = document.getElementById("summary");
const fieldBullets = document.getElementById("bullets");
const fieldSkills = document.getElementById("skills");
const fieldTags = document.getElementById("tags");
const fieldLink = document.getElementById("link");
const fieldMedia = document.getElementById("media");
const fieldFeedback = document.getElementById("feedback");
const fieldImages = document.getElementById("images");

/* =========
  Render
=========== */
function getAllTags(ps) {
  const tags = ps.flatMap(p => p.tags || []);
  return uniq(tags.map(t => t.trim()).filter(Boolean)).sort((a, b) => a.localeCompare(b));
}

function getAllSkills(ps) {
  const sk = ps.flatMap(p => p.skills || []);
  return uniq(sk.map(s => s.trim()).filter(Boolean)).sort((a, b) => a.localeCompare(b));
}

function setStats() {
  statProjects.textContent = String(projects.length);
  statSkills.textContent = String(getAllSkills(projects).length);
  yearEl.textContent = String(new Date().getFullYear());
}

function renderSkillChips() {
  const top = getAllSkills(projects).slice(0, 12);
  skillsChips.innerHTML = top.map(s => `<span class="chip">${esc(s)}</span>`).join("");
}

function renderTagFilter() {
  const tags = getAllTags(projects);
  const selected = tagFilter.value;
  tagFilter.innerHTML = `<option value="">All tags</option>` + tags.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join("");
  tagFilter.value = tags.includes(selected) ? selected : "";
}

function matchesQuery(project, q) {
  if (!q) return true;
  const hay = [
    project.title, project.type, project.summary,
    ...(project.bullets || []),
    ...(project.skills || []),
    ...(project.tags || []),
    ...(project.feedback || [])
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function matchesTag(project, tag) {
  if (!tag) return true;
  return (project.tags || []).some(t => t.toLowerCase() === tag.toLowerCase());
}

function getPrimaryProjectUrl(project) {
  const directLink = String(project.link || "").trim();
  if (directLink) return directLink;
  const mediaLink = String(project.media || "").trim();
  if (mediaLink) return mediaLink;
  const key = normalizeProjectKey(project.title);
  return PROJECT_MEDIA_LIBRARY[key] || "";
}

function isExcelFile(url) {
  return /\.xlsx?(\?.*)?$/i.test(String(url || "").trim());
}

async function openExcelPreview(project) {
  const mediaUrl = String(project?.media || "").trim();
  if (!mediaUrl || !isExcelFile(mediaUrl)) return;

  try {
    const response = await fetch(mediaUrl);
    if (!response.ok) throw new Error("Failed to load Excel file");

    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];
    excelPreviewState = {
      workbook,
      mediaUrl,
      projectTitle: String(project.title || "Excel Project")
    };

    renderExcelPreviewSheet(firstSheetName);

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "open");
    }
  } catch {
    window.open(mediaUrl, "_blank", "noopener,noreferrer");
  }
}

function renderExcelPreviewSheet(sheetName) {
  if (!excelPreviewState) return;

  const { workbook, mediaUrl, projectTitle } = excelPreviewState;
  const safeSheetName = workbook.SheetNames.includes(sheetName) ? sheetName : workbook.SheetNames[0];
  const sheet = workbook.Sheets[safeSheetName];
  const tableHtml = XLSX.utils.sheet_to_html(sheet, { id: "excelPreviewTable" });
  const options = workbook.SheetNames
    .map(name => `<option value="${esc(name)}" ${name === safeSheetName ? "selected" : ""}>${esc(name)}</option>`)
    .join("");

  modalContent.innerHTML = `
    <div>
      <span class="badge">Excel Preview</span>
      <h3 class="modal-title">${esc(projectTitle)}</h3>
      <div class="excel-preview-toolbar">
        <label class="muted" for="excelSheetSelect">Sheet</label>
        <select id="excelSheetSelect" class="input">${options}</select>
      </div>
      <p class="modal-copy">Previewing worksheet: ${esc(safeSheetName)}. Use the link below to open/download the full workbook.</p>
      <p><a class="link" href="${esc(mediaUrl)}" target="_blank" rel="noreferrer">Open Full Excel File</a></p>
      <div class="excel-preview-wrap">${tableHtml}</div>
    </div>
  `;
}

function currentFilteredProjects() {
  const q = searchInput.value.trim();
  const tag = tagFilter.value;
  return projects
    .filter(p => matchesQuery(p, q))
    .filter(p => matchesTag(p, tag));
}

function renderProjects() {
  const filtered = currentFilteredProjects();

  if (filtered.length === 0) {
    projectGrid.innerHTML = `<div class="card card-project"><p class="muted">No projects match your search.</p></div>`;
    return;
  }

  projectGrid.innerHTML = filtered.map(p => {
    const images = getProjectImages(p);
    const primaryUrl = getPrimaryProjectUrl(p);
    const mediaUrl = String(p.media || "").trim();
    const excelAction = isExcelFile(mediaUrl)
      ? `<button class="link" type="button" data-open-excel="${esc(p.id)}">Open Excel</button>`
      : "";
    const cardActions = `
      <button class="link" type="button" data-open-details="${esc(p.id)}">Open Details</button>
      ${primaryUrl
        ? `<a class="link" href="${esc(primaryUrl)}" target="_blank" rel="noreferrer" data-ignore-open="true">View Project</a>`
        : ""}
      ${excelAction}
    `;
    const coverImage = images[0]
      ? `<img class="project-cover" src="${esc(images[0])}" alt="${esc(p.title)} preview" loading="lazy" />`
      : "";
    const chips = (p.tags || []).slice(0, 3).map(t => `<span class="badge">${esc(t)}</span>`).join("");
    const skills = (p.skills || []).slice(0, 3).map(s => `<span class="chip">${esc(s)}</span>`).join("");

    return `
      <article class="card card-project" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="Open project ${esc(p.title)}">
        <div class="kicker">
          <span class="badge">${esc(p.type || "Project")}</span>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">${chips}</div>
        </div>
        ${coverImage}
        <h3 class="project-title">${esc(p.title)}</h3>
        <p class="project-summary">${esc(p.summary)}</p>
        <div class="links" style="margin:0 0 12px;">${cardActions}</div>
        <div class="chip-row">${skills}</div>
      </article>
    `;
  }).join("");
}

function renderAdminList() {
  if (!adminList) return;
  adminList.innerHTML = projects
    .map(p => {
      const firstImage = getProjectImages(p)[0] || "";
      const imagePreview = firstImage
        ? `<div class="mini admin-image-preview">Preview: ${esc(firstImage)}</div>`
        : `<div class="mini admin-image-preview">Preview: No image set</div>`;

      return `
      <div class="admin-item">
        <div>
          <strong>${esc(p.title)}</strong>
          <div class="mini">${esc(p.type)} • ${(p.tags || []).slice(0, 3).map(esc).join(", ")}</div>
          ${imagePreview}
        </div>
        <div class="row">
          <button class="btn btn-ghost" type="button" data-edit="${esc(p.id)}">Edit</button>
          <button class="btn btn-danger" type="button" data-del="${esc(p.id)}">Delete</button>
        </div>
      </div>
    `;
    }).join("");
}

/* =========
  Modal
=========== */
function openModal(project) {
  const images = getProjectImages(project);
  const bullets = (project.bullets || []).filter(Boolean);
  const feedback = (project.feedback || []).filter(Boolean);

  const linkBlock = project.link
    ? `<p><strong>Project link:</strong> <a href="${esc(project.link)}" target="_blank" rel="noreferrer">${esc(project.link)}</a></p>`
    : "";

  const mediaBlock = project.media
    ? `<p><strong>Media (slides/PDF/Excel):</strong> <a href="${esc(project.media)}" target="_blank" rel="noreferrer">${esc(project.media)}</a></p>`
    : "";

  modalContent.innerHTML = `
    <div>
      ${images.length
        ? `<div class="project-modal-media">${images
            .map((src, index) => `<img class="project-modal-image" src="${esc(src)}" alt="${esc(project.title)} preview ${index + 1}" loading="lazy" />`)
            .join("")}</div>`
        : ""}
      <span class="badge">${esc(project.type || "Project")}</span>
      <h3 class="modal-title">${esc(project.title)}</h3>
      <p class="modal-copy">${esc(project.summary)}</p>

      <div class="chip-row" style="margin:10px 0 0;">
        ${(project.skills || []).slice(0, 10).map(s => `<span class="chip">${esc(s)}</span>`).join("")}
      </div>

      <hr class="sep"/>

      ${bullets.length
        ? `<h4 class="modal-section-title">What I did</h4><ul class="list modal-list">${bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>`
        : ""}

      ${feedback.length
        ? `<h4 class="modal-section-title">Feedback</h4><ul class="list modal-list">${feedback.map(f => `<li>${esc(f)}</li>`).join("")}</ul>`
        : ""}

      ${linkBlock}
      ${mediaBlock}
    </div>
  `;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "open");
  }
}

function closeModal() {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

/* =========
  Form / Admin
=========== */
function clearForm() {
  if (!fieldId) return;
  fieldId.value = "";
  fieldTitle.value = "";
  fieldType.value = "";
  fieldSummary.value = "";
  fieldBullets.value = "";
  fieldSkills.value = "";
  fieldTags.value = "";
  fieldLink.value = "";
  fieldMedia.value = "";
  fieldFeedback.value = "";
  fieldImages.value = "";
}

function fillForm(project) {
  if (!fieldId) return;
  fieldId.value = project.id;
  fieldTitle.value = project.title || "";
  fieldType.value = project.type || "";
  fieldSummary.value = project.summary || "";
  fieldBullets.value = (project.bullets || []).join("\n");
  fieldSkills.value = (project.skills || []).join(", ");
  fieldTags.value = (project.tags || []).join(", ");
  fieldLink.value = project.link || "";
  fieldMedia.value = project.media || "";
  fieldFeedback.value = (project.feedback || []).join("\n");
  fieldImages.value = getProjectImages(project).join("\n");
}

function projectFromForm() {
  return {
    id: fieldId.value || crypto.randomUUID(),
    title: fieldTitle.value.trim(),
    type: fieldType.value.trim(),
    summary: fieldSummary.value.trim(),
    bullets: splitLines(fieldBullets.value),
    skills: splitCsv(fieldSkills.value),
    tags: splitCsv(fieldTags.value),
    link: fieldLink.value.trim(),
    media: fieldMedia.value.trim(),
    feedback: splitLines(fieldFeedback.value),
    images: splitLines(fieldImages.value),
    createdAt: Date.now()
  };
}

function upsertProject(nextProject) {
  const index = projects.findIndex(p => p.id === nextProject.id);
  if (index >= 0) {
    const createdAt = projects[index].createdAt || nextProject.createdAt;
    projects[index] = { ...projects[index], ...nextProject, createdAt };
  } else {
    projects.push(nextProject);
  }
  projects = sortProjectsByPreferredOrder(projects);
  saveProjects(projects);
}

function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
  saveProjects(projects);
}

function refreshAll() {
  projects = sortProjectsByPreferredOrder(projects);
  setStats();
  renderSkillChips();
  renderTagFilter();
  renderProjects();
  renderAdminList();
}

function applyProfileAvatarRuntimeStyles() {
  profileAvatarImage.style.setProperty("object-fit", "contain", "important");
  profileAvatarImage.style.setProperty("object-position", "center top", "important");
  profileAvatarImage.style.setProperty("background", "rgba(73,30,122,.85)", "important");
}

function renderProfileImage() {
  const hasImage = Boolean(profileImage);
  if (hasImage) {
    profileAvatarImage.src = profileImage;
    applyProfileAvatarRuntimeStyles();
    profileAvatarImage.hidden = false;
    profileAvatarInitials.hidden = true;
  } else {
    profileAvatarImage.removeAttribute("src");
    profileAvatarImage.hidden = true;
    profileAvatarInitials.hidden = false;
  }

  brandAvatarImage.removeAttribute("src");
  brandAvatarImage.hidden = true;
  brandAvatarInitials.hidden = false;
}

function syncProfileImageInput() {
  if (!profileImageInput) return;
  profileImageInput.value = profileImage;
  profileImageInput.placeholder = DEFAULT_PROFILE_IMAGE;
}

function toggleAdmin() {
  if (!adminPanel || !adminToggle) return;
  const isHidden = adminPanel.hasAttribute("hidden");
  if (isHidden) {
    adminPanel.removeAttribute("hidden");
    adminToggle.setAttribute("aria-expanded", "true");
  } else {
    adminPanel.setAttribute("hidden", "hidden");
    adminToggle.setAttribute("aria-expanded", "false");
  }
}

/* =========
  Events
=========== */
projectGrid.addEventListener("click", e => {
  const excelButton = e.target.closest("[data-open-excel]");
  if (excelButton) {
    const project = projects.find(p => p.id === excelButton.dataset.openExcel);
    if (project) {
      openExcelPreview(project);
    }
    return;
  }

  const detailsButton = e.target.closest("[data-open-details]");
  if (detailsButton) {
    const project = projects.find(p => p.id === detailsButton.dataset.openDetails);
    if (project) openModal(project);
    return;
  }

  if (e.target.closest("a, button, [data-ignore-open='true']")) return;
  const card = e.target.closest("[data-id]");
  if (!card) return;
  const project = projects.find(p => p.id === card.dataset.id);
  if (project) openModal(project);
});

projectGrid.addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  if (e.target.closest("a, button, input, textarea, select")) return;
  const card = e.target.closest("[data-id]");
  if (!card) return;
  e.preventDefault();
  const project = projects.find(p => p.id === card.dataset.id);
  if (project) openModal(project);
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

modalContent.addEventListener("change", e => {
  const select = e.target.closest("#excelSheetSelect");
  if (!select) return;
  renderExcelPreviewSheet(select.value);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.hasAttribute("open")) closeModal();
});

searchInput.addEventListener("input", renderProjects);
tagFilter.addEventListener("change", renderProjects);

if (adminToggle) {
  adminToggle.addEventListener("click", toggleAdmin);
}

if (projectForm) {
  projectForm.addEventListener("submit", e => {
    e.preventDefault();

    const nextProject = projectFromForm();
    if (!nextProject.title || !nextProject.type || !nextProject.summary) return;

    upsertProject(nextProject);
    clearForm();
    refreshAll();
  });
}

if (clearBtn) {
  clearBtn.addEventListener("click", clearForm);
}

if (adminList) {
  adminList.addEventListener("click", e => {
    const delButton = e.target.closest("[data-del]");
    if (delButton) {
      const id = delButton.dataset.del;
      const project = projects.find(p => p.id === id);
      if (!project) return;
      const shouldDelete = window.confirm(`Delete “${project.title}”?`);
      if (!shouldDelete) return;
      deleteProject(id);
      refreshAll();
      return;
    }

    const editButton = e.target.closest("[data-edit]");
    if (editButton) {
      const id = editButton.dataset.edit;
      const project = projects.find(p => p.id === id);
      if (!project) return;
      fillForm(project);
      if (adminPanel && adminPanel.hasAttribute("hidden")) {
        adminPanel.removeAttribute("hidden");
        if (adminToggle) {
          adminToggle.setAttribute("aria-expanded", "true");
        }
      }
    }
  });
}

if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    const data = JSON.stringify(projects, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = exportFilename();
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

if (importInput) {
  importInput.addEventListener("change", async e => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) throw new Error("Invalid JSON");

    const normalized = parsed
      .filter(item => item && typeof item === "object")
      .map(item => ({
        id: item.id || crypto.randomUUID(),
        title: String(item.title || "").trim(),
        type: String(item.type || "").trim(),
        summary: String(item.summary || "").trim(),
        bullets: Array.isArray(item.bullets) ? item.bullets.map(String).map(v => v.trim()).filter(Boolean) : [],
        skills: Array.isArray(item.skills) ? item.skills.map(String).map(v => v.trim()).filter(Boolean) : [],
        tags: Array.isArray(item.tags) ? item.tags.map(String).map(v => v.trim()).filter(Boolean) : [],
        link: String(item.link || "").trim(),
        media: String(item.media || "").trim(),
        feedback: Array.isArray(item.feedback) ? item.feedback.map(String).map(v => v.trim()).filter(Boolean) : [],
        images: Array.isArray(item.images)
          ? item.images.map(String).map(v => v.trim()).filter(Boolean)
          : String(item.image || "").trim()
            ? [String(item.image).trim()]
            : [],
        createdAt: Number(item.createdAt) || Date.now()
      }))
      .filter(item => item.title && item.type && item.summary);

    if (!normalized.length) throw new Error("No valid projects found");

    projects = sortProjectsByPreferredOrder(normalized);
    saveProjects(projects);
    refreshAll();
  } catch {
    window.alert("Import failed. Please use a valid exported JSON file.");
  } finally {
    importInput.value = "";
  }
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
  const shouldReset = window.confirm("Reset all projects to defaults? This clears your local edits.");
  if (!shouldReset) return;
  projects = sortProjectsByPreferredOrder(defaultProjects());
  saveProjects(projects);
  clearForm();
  refreshAll();
  });
}

profileAvatarImage.addEventListener("error", () => {
  if (profileImage !== DEFAULT_PROFILE_IMAGE) {
    profileImage = DEFAULT_PROFILE_IMAGE;
    saveProfileImage(profileImage);
    renderProfileImage();
    syncProfileImageInput();
    return;
  }
  profileAvatarImage.hidden = true;
  profileAvatarInitials.hidden = false;
});

brandAvatarImage.addEventListener("error", () => {
  brandAvatarImage.hidden = true;
  brandAvatarInitials.hidden = false;
});

if (saveProfileImageBtn && profileImageInput) {
  saveProfileImageBtn.addEventListener("click", () => {
    const nextImage = profileImageInput.value.trim();
    profileImage = nextImage;
    saveProfileImage(profileImage);
    renderProfileImage();
    syncProfileImageInput();
  });
}

if (useDefaultProfileImageBtn) {
  useDefaultProfileImageBtn.addEventListener("click", () => {
    profileImage = DEFAULT_PROFILE_IMAGE;
    saveProfileImage(profileImage);
    renderProfileImage();
    syncProfileImageInput();
  });
}

/* =========
  Init
=========== */
syncProfileImageInput();
renderProfileImage();
refreshAll();
