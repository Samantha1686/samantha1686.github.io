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
const GRAMMY_PROJECT_TITLE = "GRAMMY Awards Social Media Campaign Concept";
const AB_TESTING_PROJECT_TITLE = "A/B Testing - The Recording Academy";
const PROJECT_9_SEO_MEDIA = "images/projects/assets/Project 9 CeraVe SEO Research.pdf";
const PROJECT_9_SEO_LINK = "images/projects/assets/Project 9 Part 2 linkedin_seo_case_study_polished_carousel.pdf";
const PROJECT_9_TITLE = "CeraVe SEO Research and LinkedIn SEO Case Study";
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

  "ab testing the recording academy": AB_TESTING_MEDIA,

  "recording academy ab testing": AB_TESTING_MEDIA,
  "cerave seo research and linkedin seo case study": PROJECT_9_SEO_MEDIA,
  "cerave seo research": PROJECT_9_SEO_MEDIA,
  "linkedin seo case study": PROJECT_9_SEO_MEDIA,
  "sustainability data analysis intel csr metrics": INTEL_CSR_MEDIA,
  "sustainability impact analysis excel dataset": INTEL_EXCEL_MEDIA,
  "sustainability data analysis excel dataset": INTEL_EXCEL_MEDIA,
  "film permits student": FILM_PERMIT_MEDIA,
  "film permit project": FILM_PERMIT_MEDIA
};
const CHARITY_PROJECT_1_TITLE = "Charity: Water Landing Page Design";
const CHARITY_PROJECT_2_TITLE = "Charity: Water Gamified Mobile Concept";
const CHARITY_PROJECT_3_TITLE = "Charity: Water Website Deployment (HTML/CSS)";
const PROJECT_6_TITLE = "Reflecting on AI";
const PROJECT_6_MEDIA = "images/projects/Project 6_ Reflecting on AI.pdf";
const PROJECT_6_FEEDBACK_PDF = "images/projects/Project 6 Feedback GCA.pdf";
const PROJECT_5_TITLE = "Data Storytelling";
const PROJECT_5_MEDIA = "images/projects/Copy of CR Project 5_ Reflecting on AI.pdf";
const PROJECT_5_FEEDBACK_PDF = "images/projects/Project 5 GCA Feedback.pdf";
const FILM_PERMIT_PROJECT_TITLE = "Film Permit Analysis Project";

function defaultProjects() {
  return [
    {
      id: crypto.randomUUID(),
      title: GRAMMY_PROJECT_TITLE,
      type: "Campaign",
      summary: "Developed a paid media campaign strategy for a GRAMMY merch drop, combining audience persona alignment, multi-platform channel strategy, and performance metric analysis to drive merch sales.",
      bullets: [
        "Built targeting logic and channel strategy across Instagram, TikTok, and Pinterest aligned to audience personas",
        "Analyzed campaign KPIs including CTR, CPC, and CPA to evaluate performance and identify optimization opportunities",
        "Developed recommendations to improve paid media performance based on metric interpretation"
      ],
      skills: [
        "Paid Media Campaign Strategy",
        "Audience Targeting and Persona Alignment",
        "Digital Advertising Platform Selection",
        "KPI Analysis (CTR, CPC, CPA)",
        "Performance Marketing Optimization",
        "Marketing Analytics and Campaign Evaluation"
      ],
      tags: ["Brand", "Campaign", "Paid Media"],
      link: "",
      media: GRAMMY_MEDIA,
      evaluationPdf: "images/projects/Project 7 feedback Grammys.pdf",
      images: [],
      instructorEvaluation: [
        "This project successfully combined strategic marketing thinking with performance analytics.",
        "The campaign demonstrated strong alignment between audience persona, platform selection, and messaging designed to drive merch sales.",
        "Clear targeting logic and channel strategy across Instagram, TikTok, and Pinterest reflected real-world paid media planning.",
        "The project also showed strong analytical ability through accurate interpretation of campaign metrics such as CTR, CPC, and CPA.",
        "Thoughtful optimization recommendations were provided to improve overall campaign performance."
      ],
      feedback: [
        "This project successfully combined strategic marketing thinking with performance analytics.",
        "The campaign demonstrated strong alignment between audience persona, platform selection, and messaging designed to drive merch sales.",
        "Clear targeting logic and channel strategy across Instagram, TikTok, and Pinterest reflected real-world paid media planning.",
        "The project also showed strong analytical ability through accurate interpretation of campaign metrics such as CTR, CPC, and CPA.",
        "Thoughtful optimization recommendations were provided to improve overall campaign performance."
      ],
      createdAt: Date.now()
    },
    abTestingProjectTemplate(),
    project9Template(),
    intelCsrProjectTemplate(),
    intelExcelProjectTemplate(),
    project5Template(),
    project6Template(),
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_1_TITLE,
      type: "Landing Page",
      summary: "Designed a student-focused charity: water landing page that combines brand storytelling, clear mission communication, and a relatable donation call to action.",
      bullets: [
        "Aligned visual identity and tone with charity: water brand style",
        "Wrote audience-specific messaging and a clear donation CTA",
        "Designed page layout and assets in Canva; translated concept into basic web layout"
      ],
      skills: [
        "Brand Messaging",
        "Value Proposition Development",
        "UX-Focused Landing Page Design",
        "Visual Storytelling",
        "Call-to-Action Optimization",
        "Brand Identity Alignment",
        "Marketing Communication Strategy"
      ],
      tags: ["Nonprofit", "Brand", "Landing Page"],
      link: "",
      media: "images/projects/charity-water-project-1-mockup-landing-page.pdf",
      evaluationPdf: "images/projects/Project 1 Feedback GCA.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign-2.png"],
      instructorEvaluation: [
        "The project demonstrated strong brand awareness and user-focused messaging.",
        "The landing page effectively communicated charity: water's mission through a clear value proposition and impactful visual storytelling.",
        "The color palette and typography aligned well with the brand identity, and the 'spare change' messaging created a relatable call to action for college students.",
        "The layout successfully combined visuals and messaging into a realistic landing page concept.",
        "Suggested improvements included refining visual hierarchy, increasing whitespace, and adjusting CTA placement to enhance readability and user experience."
      ],
      feedback: [
        "The project demonstrated strong brand awareness and user-focused messaging.",
        "The landing page effectively communicated charity: water's mission through a clear value proposition and impactful visual storytelling.",
        "The color palette and typography aligned well with the brand identity, and the 'spare change' messaging created a relatable call to action for college students.",
        "The layout successfully combined visuals and messaging into a realistic landing page concept.",
        "Suggested improvements included refining visual hierarchy, increasing whitespace, and adjusting CTA placement to enhance readability and user experience."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_2_TITLE,
      type: "Product Concept",
      summary: "Created the Water Drop Journey concept as a gamified mobile experience that translates charity: water's mission into interactive, mission-driven engagement.",
      bullets: [
        "Defined gameplay mechanics including controls, scoring systems, difficulty progression, and win/lose conditions",
        "Connected gameplay outcomes to brand awareness goals and stakeholder value",
        "Structured the concept as development-ready documentation with clear UX interaction flow"
      ],
      skills: [
        "Product Concept Development",
        "Gamification Strategy",
        "UX Interaction Planning",
        "Stakeholder Communication",
        "Creative Problem Solving",
        "Mission-Driven Brand Storytelling"
      ],
      tags: ["Nonprofit", "Gamification", "Mobile"],
      link: "",
      media: "images/projects/assets/charity-water-project-2-game-concept.pdf",
      evaluationPdf: "images/projects/Project 2 Feedback GCA.pdf",
      images: [
        "images/projects/charity-water-donation-landing-page-campaign-3.png",
        "images/projects/charity-water-donation-landing-page-campaign-4.png"
      ],
      instructorEvaluation: [
        "The Water Drop Journey game concept creatively translates charity: water's mission into an interactive experience that helps players understand the global water challenge.",
        "The project clearly outlined gameplay mechanics, including controls, scoring systems, difficulty progression, and win/lose conditions, making the concept feel realistic and development-ready.",
        "The proposal also effectively connected the game to brand awareness and stakeholder goals.",
        "Future improvements suggested expanding reflection on design details and ensuring official brand assets are used in mockups."
      ],
      feedback: [
        "The Water Drop Journey game concept creatively translates charity: water's mission into an interactive experience that helps players understand the global water challenge.",
        "The project clearly outlined gameplay mechanics, including controls, scoring systems, difficulty progression, and win/lose conditions, making the concept feel realistic and development-ready.",
        "The proposal also effectively connected the game to brand awareness and stakeholder goals.",
        "Future improvements suggested expanding reflection on design details and ensuring official brand assets are used in mockups."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_3_TITLE,
      type: "Web Development",
      summary: "Deployed a live charity: water website using HTML and CSS via GitHub, demonstrating front-end development skills, prompt engineering, and iterative debugging with AI assistance.",
      bullets: [
        "Built and deployed a functional, accessible website using HTML and CSS on GitHub Pages",
        "Used AI as a coding assistant and tutor to iterate on design and resolve technical challenges",
        "Documented learning process and technical reflections in interview-style professional responses"
      ],
      skills: [
        "Front-End Web Development (HTML & CSS)",
        "Website Deployment via GitHub",
        "Prompt Engineering",
        "Iterative Design and Debugging",
        "Technical Problem Solving",
        "Digital Project Documentation"
      ],
      tags: ["Web Development", "GitHub", "HTML/CSS"],
      link: "",
      media: "images/projects/charity-water-project-3-landing-page.pdf",
      evaluationPdf: "images/projects/Project 3 Feedback GCA.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign.png"],
      instructorEvaluation: [
        "This project demonstrated strong technical growth and successful website deployment.",
        "The live GitHub site confirmed the ability to implement HTML and CSS while maintaining a functional and accessible design.",
        "Reflections showed thoughtful learning about prompt precision, iteration, and using AI as both a coding assistant and tutor.",
        "The project also communicated technical skills effectively in interview-style responses and professional reflections.",
        "Feedback suggested including specific examples of technical challenges solved during development to further highlight problem-solving skills."
      ],
      feedback: [
        "This project demonstrated strong technical growth and successful website deployment.",
        "The live GitHub site confirmed the ability to implement HTML and CSS while maintaining a functional and accessible design.",
        "Reflections showed thoughtful learning about prompt precision, iteration, and using AI as both a coding assistant and tutor.",
        "The project also communicated technical skills effectively in interview-style responses and professional reflections.",
        "Feedback suggested including specific examples of technical challenges solved during development to further highlight problem-solving skills."
      ],
      createdAt: Date.now()
    },
    filmPermitProjectTemplate()
  ];
}

function project9Template() {
  return {
    id: crypto.randomUUID(),
    title: PROJECT_9_TITLE,
    type: "Internship Case Study",
    summary: "Developed an audience-focused CeraVe SEO and content marketing strategy using search intent, long-tail keywords, and AI-aware content structure to improve discoverability and educational value.",
    bullets: [
      "Created persona-driven blog content that addressed target concerns while maintaining CeraVe's practical, educational brand voice",
      "Structured content with clear headers and concise sections to improve readability for users and search engines",
      "Applied search intent analysis, long-tail keyword strategy, and AI-optimized formatting, with recommendations to expand technical keyword metrics"
    ],
    skills: [
      "SEO Keyword Strategy",
      "Persona-Driven Content Marketing",
      "Search Intent Analysis",
      "Blog Writing and Content Structure",
      "Technical SEO Research",
      "AI-Aware Content Optimization"
    ],
    tags: ["SEO", "Internship", "LinkedIn"],
    link: PROJECT_9_SEO_LINK,
    media: PROJECT_9_SEO_MEDIA,
    evaluationPdf: "images/projects/Project 9 feedback GCA.pdf",
    images: [],
    instructorEvaluation: [
      "This project demonstrated strong audience-focused content strategy and clear SEO-oriented writing.",
      "Blog content effectively addressed the target persona's concerns while maintaining a practical, educational tone aligned with CeraVe's brand voice.",
      "Structured formatting with headers and concise sections improved readability for both users and search engines.",
      "The project also showed awareness of modern SEO strategy by focusing on search intent, long-tail keywords, and AI-optimized content structure.",
      "Suggested improvements included expanding keyword research with search volume, keyword difficulty, and clearer intent classification to strengthen the technical SEO analysis."
    ],
    feedback: [
      "This project demonstrated strong audience-focused content strategy and clear SEO-oriented writing.",
      "Blog content effectively addressed the target persona's concerns while maintaining a practical, educational tone aligned with CeraVe's brand voice.",
      "Structured formatting with headers and concise sections improved readability for both users and search engines.",
      "The project also showed awareness of modern SEO strategy by focusing on search intent, long-tail keywords, and AI-optimized content structure.",
      "Suggested improvements included expanding keyword research with search volume, keyword difficulty, and clearer intent classification to strengthen the technical SEO analysis."
    ],
    createdAt: Date.now()
  };
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
    summary: "Designed and evaluated a marketing A/B experiment with statistically grounded hypotheses, sample-size planning, confounding-variable controls, and strategy-focused recommendations.",
    bullets: [
      "Built well-structured hypotheses aligned with A/B testing best practices",
      "Calculated minimum detectable effect (MDE) and required sample size to support valid testing decisions",
      "Identified confounding variables and mitigation strategies, then translated results into growth-oriented recommendations"
    ],
    skills: [
      "A/B Testing Experiment Design",
      "Statistical Reasoning and Hypothesis Testing",
      "Marketing Analytics Calculations",
      "Data Interpretation and Decision Making",
      "Identifying Confounding Variables",
      "Data-Driven Marketing Strategy"
    ],
    tags: ["Analytics", "Excel", "Experimentation"],
    link: "",
    media: AB_TESTING_MEDIA,
    evaluationPdf: "images/projects/Project 8 AB testing Feedback GCA.pdf",
    images: [],
    instructorEvaluation: [
      "This project demonstrated strong analytical thinking and a clear understanding of experimental design in marketing.",
      "The hypotheses were well structured and aligned with A/B testing best practices.",
      "Accurate calculations for minimum detectable effect (MDE) and required sample size showed confidence in marketing analytics.",
      "The analysis also considered realistic confounding variables and mitigation strategies to ensure valid results.",
      "Recommendations were grounded in statistical interpretation and connected to broader strategic growth goals."
    ],
    feedback: [
      "This project demonstrated strong analytical thinking and a clear understanding of experimental design in marketing.",
      "The hypotheses were well structured and aligned with A/B testing best practices.",
      "Accurate calculations for minimum detectable effect (MDE) and required sample size showed confidence in marketing analytics.",
      "The analysis also considered realistic confounding variables and mitigation strategies to ensure valid results.",
      "Recommendations were grounded in statistical interpretation and connected to broader strategic growth goals."
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
    title: "Sustainability Data Analysis (Excel)",
    type: "Analytics",
    summary: "Applied Excel formulas to analyze ~19,700 device records, generating actionable sustainability recommendations around device repurposing, energy savings, and impact reporting.",
    bullets: [
      "Used COUNT, AVERAGE, COUNTIF, and AVERAGEIF to calculate insights on device age, energy savings, and repurposing trends",
      "Translated data findings into strategic recommendations to increase device repurposing and improve sustainability outcomes",
      "Incorporated AI-assisted insights to inform final recommendations and decision-making"
    ],
    skills: [
      "Data Analysis using Excel",
      "Spreadsheet Formulas (COUNT, COUNTIF, AVERAGE, AVERAGEIF)",
      "Data Interpretation and Insight Generation",
      "Business Recommendation Development",
      "Sustainability and Impact Analysis",
      "Data-Driven Decision Making"
    ],
    tags: ["Analytics", "Excel", "Sustainability"],
    link: "",
    media: INTEL_EXCEL_MEDIA,
    evaluationPdf: "images/projects/Project 4 Feedback GCA.pdf",
    images: [],
    instructorEvaluation: [
      "This project showcased strong analytical thinking and effective use of Excel formulas to generate meaningful insights from data.",
      "Accurate use of functions such as COUNT, AVERAGE, COUNTIF, and AVERAGEIF allowed for clear calculations related to device age, energy savings, and repurposing trends.",
      "The analysis successfully translated data into actionable recommendations, including strategies to increase device repurposing and improve sustainability outcomes.",
      "Feedback recommended reviewing one formula range in the summary table to ensure accuracy.",
      "Expanding on how AI insights informed the final strategic recommendations was also suggested as a next step."
    ],
    feedback: [
      "This project showcased strong analytical thinking and effective use of Excel formulas to generate meaningful insights from data.",
      "Accurate use of functions such as COUNT, AVERAGE, COUNTIF, and AVERAGEIF allowed for clear calculations related to device age, energy savings, and repurposing trends.",
      "The analysis successfully translated data into actionable recommendations, including strategies to increase device repurposing and improve sustainability outcomes.",
      "Feedback recommended reviewing one formula range in the summary table to ensure accuracy.",
      "Expanding on how AI insights informed the final strategic recommendations was also suggested as a next step."
    ],
    createdAt: Date.now()
  };
}

function project5Template() {
  return {
    id: crypto.randomUUID(),
    title: PROJECT_5_TITLE,
    type: "Data Storytelling",
    summary: "Demonstrated strategic use of AI as a teammate, tool, and tutor—comparing outputs, refining prompts, and integrating AI-supported insights while maintaining ownership of decision-making.",
    bullets: [
      "Compared AI-generated outputs and improved prompts with greater specificity to evaluate response quality",
      "Analyzed opportunities and risks of AI in the evolving job market with balanced, forward-thinking reflection",
      "Integrated AI responsibly into professional workflows while maintaining strategic ownership"
    ],
    skills: [
      "AI Prompt Engineering",
      "Evaluating AI Output Quality",
      "Strategic Use of AI Tools in Professional Workflows",
      "Research Synthesis and Trend Analysis",
      "Ethical and Responsible AI Use",
      "Communication of AI-Supported Insights"
    ],
    tags: ["AI", "Strategy", "Data Storytelling"],
    link: "",
    media: PROJECT_5_MEDIA,
    evaluationPdf: PROJECT_5_FEEDBACK_PDF,
    images: [],
    instructorEvaluation: [
      "Samantha demonstrated strong strategic thinking and a thoughtful understanding of how AI can function as a teammate, tool, and tutor in professional work.",
      "Her reflections were balanced and forward-thinking, acknowledging both the opportunities and risks of AI in the evolving job market.",
      "She effectively compared AI outputs, improved prompts with greater specificity, and showed clear reasoning when evaluating response quality.",
      "Overall, her work demonstrated the ability to integrate AI responsibly while maintaining ownership of the strategy and decision-making."
    ],
    feedback: [
      "Samantha demonstrated strong strategic thinking and a thoughtful understanding of how AI can function as a teammate, tool, and tutor in professional work.",
      "Her reflections were balanced and forward-thinking, acknowledging both the opportunities and risks of AI in the evolving job market.",
      "She effectively compared AI outputs, improved prompts with greater specificity, and showed clear reasoning when evaluating response quality.",
      "Overall, her work demonstrated the ability to integrate AI responsibly while maintaining ownership of the strategy and decision-making."
    ],
    createdAt: Date.now()
  };
}

function project6Template() {
  return {
    id: crypto.randomUUID(),
    title: PROJECT_6_TITLE,
    type: "Reflection",
    summary: "Analyzed AI as a teammate, tool, and tutor in professional workflows, evaluating prompt refinement, output quality, emerging AI trends, and responsible human oversight.",
    bullets: [
      "Compared AI responses to demonstrate understanding of prompt refinement and output quality evaluation",
      "Researched emerging AI trends including agentic systems and budget optimization strategies",
      "Balanced opportunities AI creates with the importance of ethical oversight and human decision-making"
    ],
    skills: [
      "AI Prompt Engineering",
      "Evaluating AI Output Quality",
      "Strategic Thinking about AI Adoption",
      "Research Synthesis and Trend Analysis",
      "Ethical and Responsible AI Usage",
      "Professional Communication of AI Insights"
    ],
    tags: ["AI", "Strategy", "Reflection"],
    link: "",
    media: PROJECT_6_MEDIA,
    evaluationPdf: PROJECT_6_FEEDBACK_PDF,
    images: [],
    instructorEvaluation: [
      "This project demonstrated thoughtful analysis of how AI can function as a teammate, tool, and tutor in professional workflows.",
      "The reflection balanced the opportunities AI creates with the importance of responsible oversight and human decision-making.",
      "Strong comparisons between AI responses showed an understanding of prompt refinement and evaluation of output quality.",
      "The project also highlighted forward-thinking research into emerging AI trends such as agentic systems and budget optimization.",
      "Clear steps for staying current as AI continues to evolve in the workplace were outlined effectively."
    ],
    feedback: [
      "This project demonstrated thoughtful analysis of how AI can function as a teammate, tool, and tutor in professional workflows.",
      "The reflection balanced the opportunities AI creates with the importance of responsible oversight and human decision-making.",
      "Strong comparisons between AI responses showed an understanding of prompt refinement and evaluation of output quality.",
      "The project also highlighted forward-thinking research into emerging AI trends such as agentic systems and budget optimization.",
      "Clear steps for staying current as AI continues to evolve in the workplace were outlined effectively."
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
      type: "Product Concept",
      summary: "Created the Water Drop Journey concept as a gamified mobile experience that translates charity: water's mission into interactive, mission-driven engagement.",
      bullets: [
        "Defined gameplay mechanics including controls, scoring systems, difficulty progression, and win/lose conditions",
        "Connected gameplay outcomes to brand awareness goals and stakeholder value",
        "Structured the concept as development-ready documentation with clear UX interaction flow"
      ],
      skills: [
        "Product Concept Development",
        "Gamification Strategy",
        "UX Interaction Planning",
        "Stakeholder Communication",
        "Creative Problem Solving",
        "Mission-Driven Brand Storytelling"
      ],
      tags: ["Nonprofit", "Gamification", "Mobile"],
      link: "",
      media: "images/projects/assets/charity-water-project-2-game-concept.pdf",
      evaluationPdf: "images/projects/Project 2 Feedback GCA.pdf",
      images: [
        "images/projects/charity-water-donation-landing-page-campaign-3.png",
        "images/projects/charity-water-donation-landing-page-campaign-4.png"
      ],
      instructorEvaluation: [
        "The Water Drop Journey game concept creatively translates charity: water's mission into an interactive experience that helps players understand the global water challenge.",
        "The project clearly outlined gameplay mechanics, including controls, scoring systems, difficulty progression, and win/lose conditions, making the concept feel realistic and development-ready.",
        "The proposal also effectively connected the game to brand awareness and stakeholder goals.",
        "Future improvements suggested expanding reflection on design details and ensuring official brand assets are used in mockups."
      ],
      feedback: [
        "The Water Drop Journey game concept creatively translates charity: water's mission into an interactive experience that helps players understand the global water challenge.",
        "The project clearly outlined gameplay mechanics, including controls, scoring systems, difficulty progression, and win/lose conditions, making the concept feel realistic and development-ready.",
        "The proposal also effectively connected the game to brand awareness and stakeholder goals.",
        "Future improvements suggested expanding reflection on design details and ensuring official brand assets are used in mockups."
      ],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: CHARITY_PROJECT_3_TITLE,
      type: "Web Development",
      summary: "Deployed a live charity: water website using HTML and CSS via GitHub, demonstrating front-end development skills, prompt engineering, and iterative debugging with AI assistance.",
      bullets: [
        "Built and deployed a functional, accessible website using HTML and CSS on GitHub Pages",
        "Used AI as a coding assistant and tutor to iterate on design and resolve technical challenges",
        "Documented learning process and technical reflections in interview-style professional responses"
      ],
      skills: [
        "Front-End Web Development (HTML & CSS)",
        "Website Deployment via GitHub",
        "Prompt Engineering",
        "Iterative Design and Debugging",
        "Technical Problem Solving",
        "Digital Project Documentation"
      ],
      tags: ["Web Development", "GitHub", "HTML/CSS"],
      link: "",
      media: "images/projects/charity-water-project-3-landing-page.pdf",
      evaluationPdf: "images/projects/Project 3 Feedback GCA.pdf",
      images: ["images/projects/charity-water-donation-landing-page-campaign.png"],
      instructorEvaluation: [
        "This project demonstrated strong technical growth and successful website deployment.",
        "The live GitHub site confirmed the ability to implement HTML and CSS while maintaining a functional and accessible design.",
        "Reflections showed thoughtful learning about prompt precision, iteration, and using AI as both a coding assistant and tutor.",
        "The project also communicated technical skills effectively in interview-style responses and professional reflections.",
        "Feedback suggested including specific examples of technical challenges solved during development to further highlight problem-solving skills."
      ],
      feedback: [
        "This project demonstrated strong technical growth and successful website deployment.",
        "The live GitHub site confirmed the ability to implement HTML and CSS while maintaining a functional and accessible design.",
        "Reflections showed thoughtful learning about prompt precision, iteration, and using AI as both a coding assistant and tutor.",
        "The project also communicated technical skills effectively in interview-style responses and professional reflections.",
        "Feedback suggested including specific examples of technical challenges solved during development to further highlight problem-solving skills."
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
  const project9 = project9Template();
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
    return key.includes("sustainability impact analysis") || key.includes("excel dataset") || (key.includes("project 4") && key.includes("sustainability"));
  });
  const hasAbTestingProject = rawProjects.some(item => {
    const key = normalizeProjectKey(item?.title);
    return key.includes("ab testing") || key.includes("recording academy");
  });
  const hasProject9 = rawProjects.some(item => {
    const key = normalizeProjectKey(item?.title);
    return key.includes("project 9") || key.includes("cerave seo") || key.includes("linkedin seo case study");
  });
  const hasProject5 = rawProjects.some(item => {
    const key = normalizeProjectKey(item?.title);
    return key.includes("project 5") && (key.includes("data storytelling") || key.includes("reflecting") || key.includes("ai strategy"));
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

  if (!hasProject9) {
    next.push(project9);
    changed = true;
  }

  const project5 = project5Template();
  if (!hasProject5) {
    next.push(project5);
    changed = true;
  }

  next = next.map(project => {
    const key = normalizeProjectKey(project?.title);
    const isGrammy = key.includes("grammy") && key.includes("social media");
    const isCsr = key.includes("intel csr metrics") || key.includes("sustainability data analysis");
    const isExcel = key.includes("sustainability impact analysis") || key.includes("excel dataset") || (key.includes("project 4") && key.includes("sustainability"));
    const isAbTesting = key.includes("ab testing") || key.includes("recording academy");
    const isProject9 = key.includes("project 9") || key.includes("cerave seo") || key.includes("linkedin seo case study");
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

    if (isProject9) {
      const currentMedia = String(project.media || "").trim();
      const currentLink = String(project.link || "").trim();
      const nextMedia = PROJECT_9_SEO_MEDIA;
      const nextLink = PROJECT_9_SEO_LINK;
      const sameMedia = currentMedia === nextMedia;
      const sameLink = currentLink === nextLink;
      const sameImages = JSON.stringify(project.images || []) === JSON.stringify([]);
      const sameTitle = String(project.title || "") === PROJECT_9_TITLE;
      if (!sameMedia || !sameLink || !sameImages || !sameTitle) changed = true;
      return {
        ...project,
        title: PROJECT_9_TITLE,
        link: nextLink,
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
    if (data.length === 0) {
      const defaults = defaultProjects();
      saveProjects(defaults);
      return defaults;
    }
    const migrated = migrateProjects(data);
    if (!Array.isArray(migrated) || migrated.length === 0) {
      const defaults = defaultProjects();
      saveProjects(defaults);
      return defaults;
    }
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

function canonicalProjectKey(project) {
  const key = normalizeProjectKey(project?.title);

  if (key.includes("grammy") && key.includes("social media")) return "grammy";
  if (key.includes("ab testing") || key.includes("recording academy")) return "ab-testing";
  if (key.includes("project 9") || key.includes("cerave seo") || key.includes("linkedin seo case study")) return "project-9-seo";
  if (key.includes("project 6") && key.includes("reflect")) return "project-6-reflect";
  if (key.includes("project 6 reflecting on ai")) return "project-6-reflect";
  if (key.includes("project 5") && (key.includes("data storytelling") || key.includes("reflect") || key.includes("ai strategy"))) return "project-5-storytelling";
  if (key.includes("intel csr metrics") || key.includes("sustainability data analysis")) return "intel-csr";
  if (key.includes("sustainability impact analysis") || key.includes("excel dataset") || (key.includes("project 4") && key.includes("sustainability"))) return "intel-excel";
  if ((key.includes("charity water") || key.includes("charity")) && key.includes("project 1")) return "charity-1";
  if ((key.includes("charity water") || key.includes("charity")) && key.includes("project 2")) return "charity-2";
  if ((key.includes("charity water") || key.includes("charity")) && key.includes("project 3")) return "charity-3";
  if (key.includes("charity water project 1") || key.includes("mockup landing page")) return "charity-1";
  if (key.includes("charity water project 2") || key.includes("game concept")) return "charity-2";
  if (key.includes("charity water project 3")) return "charity-3";
  if (key.includes("charity water") && key.includes("landing page")) return "charity-3";
  if (isFilmPermitProjectKey(key)) return "film-permit";

  return "other";
}

function getProjectNumber(project) {
  const key = canonicalProjectKey(project);
  const explicitNumberByKey = {
    // User-defined project numbering.
    "charity-1": 1,
    "charity-2": 2,
    "charity-3": 3,
    "intel-excel": 4,
    "intel-csr": 5,
    "film-permit": 6,
    "grammy": 7,
    "ab-testing": 8,
    "project-9-seo": 9
  };

  if (Object.prototype.hasOwnProperty.call(explicitNumberByKey, key)) {
    return explicitNumberByKey[key];
  }

  const title = String(project?.title || "");
  const match = title.match(/\bproject\s*(\d+)\b/i);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : null;
}

function projectSortRank(project) {
  const key = canonicalProjectKey(project);
  const order = {
    "project-9-seo": 0,
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

function getProjectInstructorEvaluation(project) {
  const direct = Array.isArray(project?.instructorEvaluation)
    ? project.instructorEvaluation.map(item => String(item || "").trim()).filter(Boolean)
    : [];

  if (direct.length) return direct;

  return Array.isArray(project?.feedback)
    ? project.feedback.map(item => String(item || "").trim()).filter(Boolean)
    : [];
}

function normalizeProjectAssetUrl(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";

  const lower = trimmed.toLowerCase();
  if (
    lower.startsWith("http://") ||
    lower.startsWith("https://") ||
    lower.startsWith("data:") ||
    lower.startsWith("blob:") ||
    lower.startsWith("/")
  ) {
    return trimmed;
  }

  // Convert filename-only values into repository-relative asset paths.
  if (!trimmed.includes("/")) return `images/projects/${trimmed}`;
  return trimmed;
}

function getProjectEvaluationPdf(project) {
  const direct = normalizeProjectAssetUrl(project?.evaluationPdf);
  const isEmptyPdfDataUrl = direct.startsWith("data:application/pdf") && direct.length < 80;
  if (direct && !isEmptyPdfDataUrl) return direct;

  const fallbackByKey = {
    "charity-1": "images/projects/Project 1 Feedback GCA.pdf",
    "charity-2": "images/projects/Project 2 Feedback GCA.pdf",
    "charity-3": "images/projects/Project 3 Feedback GCA.pdf",
    "intel-excel": "images/projects/Project 4 Feedback GCA.pdf",
    "project-5-storytelling": "images/projects/Project 5 GCA Feedback.pdf",
    "project-6-reflect": "images/projects/Project 6 Feedback GCA.pdf",
    "grammy": "images/projects/Project 7 feedback Grammys.pdf",
    "ab-testing": "images/projects/Project 8 AB testing Feedback GCA.pdf",
    "project-9-seo": "images/projects/Project 9 feedback GCA.pdf"
  };

  return fallbackByKey[canonicalProjectKey(project)] || "";
}

/* =========
  State
=========== */
let projects = sortProjectsByPreferredOrder(loadProjects());
let profileImage = loadProfileImage();
let excelPreviewState = null;
let evaluationPdfUploadDataUrl = "";

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
const fieldInstructorEvaluation = document.getElementById("instructorEvaluation");
const fieldEvaluationPdf = document.getElementById("evaluationPdf");
const fieldEvaluationPdfUpload = document.getElementById("evaluationPdfUpload");
const extractEvaluationPdfBtn = document.getElementById("extractEvaluationPdfBtn");
const evaluationPdfStatus = document.getElementById("evaluationPdfStatus");
const fieldFeedback = document.getElementById("feedback");
const fieldImages = document.getElementById("images");
const projectToc = document.getElementById("projectToc");
const projectSections = document.getElementById("projectSections");

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
  skillsChips.innerHTML = top.map(s => `<span class="chip chip-static">${esc(s)}</span>`).join("");
}

function renderTagFilter() {
  const tags = getAllTags(projects);
  const selected = tagFilter.value;
  tagFilter.innerHTML = `<option value="">All tags</option>` + tags.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join("");
  tagFilter.value = tags.includes(selected) ? selected : "";
}

function matchesQuery(project, q) {
  if (!q) return true;
  const instructorEvaluation = getProjectInstructorEvaluation(project);
  const hay = [
    project.title, project.type, project.summary,
    ...(project.bullets || []),
    ...(project.skills || []),
    ...(project.tags || []),
    ...instructorEvaluation
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function isPdfFile(url) {
  const value = String(url || "").trim();
  if (!value) return false;
  if (value.startsWith("data:application/pdf")) return true;
  return /\.pdf(\?.*)?$/i.test(value);
}

function setEvaluationPdfStatus(message, isError = false) {
  if (!evaluationPdfStatus) return;
  evaluationPdfStatus.textContent = message;
  evaluationPdfStatus.style.color = isError ? "#ffd1d1" : "";
}

function normalizeExtractedPdfText(text) {
  return String(text || "")
    .split("\n")
    .map(line => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

async function resolvePdfSource(pdfPath) {
  const trimmedPath = normalizeProjectAssetUrl(pdfPath);
  if (trimmedPath.startsWith("data:application/pdf")) {
    const response = await fetch(trimmedPath);
    if (!response.ok) throw new Error("Unable to read uploaded PDF data.");
    return response.arrayBuffer();
  }

  const response = await fetch(trimmedPath);
  if (!response.ok) throw new Error("Unable to load PDF from path or URL.");
  return response.arrayBuffer();
}

async function extractTextFromPdf(pdfPath) {
  if (!window.pdfjsLib) throw new Error("PDF extraction library is unavailable.");
  const buffer = await resolvePdfSource(pdfPath);
  const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
  const lines = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str || "").join(" ");
    lines.push(pageText);
  }

  return normalizeExtractedPdfText(lines.join("\n"));
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

function renderTocAndSections(filtered) {
  if (!projectToc || !projectSections) return;

  if (filtered.length === 0) {
    projectToc.innerHTML = "";
    projectSections.innerHTML = "";
    return;
  }

  // TOC quick-links
  projectToc.innerHTML = filtered.map(p =>
    `<a class="project-toc-link" href="#section-${esc(p.id)}">${esc(String(p.title || "").replace(/^Project\s+\d+\s*[-:]\s*/i, ""))}</a>`
  ).join("");

  // Full on-page sections
  projectSections.innerHTML = filtered.map(p => {
    const images = getProjectImages(p);
    const evaluation = getProjectInstructorEvaluation(p);
    const evaluationPdf = getProjectEvaluationPdf(p);
    const bullets = (p.bullets || []).filter(Boolean);
    const primaryUrl = getPrimaryProjectUrl(p);
    const mediaUrl = String(p.media || "").trim();

    const mediaBlock = images.length
      ? `<div class="project-section-media">${images.map((src, i) =>
          `<img src="${esc(src)}" alt="${esc(p.title)} preview ${i + 1}" loading="lazy" />`
        ).join("")}</div>`
      : "";

    const bulletsBlock = bullets.length
      ? `<h4 class="modal-section-title">What I did</h4><ul class="list">${bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>`
      : "";

    const skillsBlock = (p.skills || []).length
      ? `<div class="chip-row" style="margin:8px 0 0;">${(p.skills || []).map(s => `<span class="chip chip-static">${esc(s)}</span>`).join("")}</div>`
      : "";

    const linksBlock = [
      primaryUrl ? `<a class="link" href="${esc(primaryUrl)}" target="_blank" rel="noreferrer">View Project</a>` : "",
      mediaUrl && mediaUrl !== primaryUrl ? `<a class="link" href="${esc(mediaUrl)}" target="_blank" rel="noreferrer">Project Media</a>` : "",
      evaluationPdf ? `<a class="link" href="${esc(evaluationPdf)}" target="_blank" rel="noreferrer">Instructor Evaluation PDF</a>` : ""
    ].filter(Boolean).join("");

    const evaluationBlock = evaluation.length
      ? `<h4 class="modal-section-title">Instructor Evaluation</h4><ul class="list">${evaluation.map(f => `<li>${esc(f)}</li>`).join("")}</ul>`
      : "";

    return `
      <section id="section-${esc(p.id)}" class="card project-section">
        <span class="badge badge-static">${esc(p.type || "Project")}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${mediaBlock}
        ${skillsBlock}
        ${bulletsBlock}
        ${evaluationBlock}
        ${linksBlock ? `<div class="links" style="margin-top:10px;">${linksBlock}</div>` : ""}
      </section>
    `;
  }).join("");
}

function renderProjects() {
  const filtered = currentFilteredProjects();

  if (filtered.length === 0) {
    projectGrid.innerHTML = `<div class="card card-project"><p class="muted">No projects match your search.</p></div>`;
    renderTocAndSections([]);
    return;
  }

  renderTocAndSections(filtered);

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
    const chips = (p.tags || []).slice(0, 3).map(t => `<span class="badge badge-static">${esc(t)}</span>`).join("");
    const skills = (p.skills || []).slice(0, 3).map(s => `<span class="chip chip-static">${esc(s)}</span>`).join("");

    return `
      <article class="card card-project" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="Open project ${esc(p.title)}">
        <div class="kicker">
          <span class="badge badge-static">${esc(p.type || "Project")}</span>
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

  // clicking a card scrolls to its on-page section instead of opening modal
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
  const instructorEvaluation = getProjectInstructorEvaluation(project);
  const evaluationPdf = getProjectEvaluationPdf(project);

  const linkBlock = project.link
    ? `<p><strong>Project link:</strong> <a href="${esc(project.link)}" target="_blank" rel="noreferrer">${esc(project.link)}</a></p>`
    : "";

  const mediaBlock = project.media
    ? `<p><strong>Media (slides/PDF/Excel):</strong> <a href="${esc(project.media)}" target="_blank" rel="noreferrer">${esc(project.media)}</a></p>`
    : "";

  const evaluationPdfBlock = evaluationPdf
    ? `<p><strong>Instructor Evaluation PDF:</strong> <a href="${esc(evaluationPdf)}" target="_blank" rel="noreferrer">${esc(evaluationPdf)}</a></p>`
    : "";

  modalContent.innerHTML = `
    <div>
      ${images.length
        ? `<div class="project-modal-media">${images
            .map((src, index) => `<img class="project-modal-image" src="${esc(src)}" alt="${esc(project.title)} preview ${index + 1}" loading="lazy" />`)
            .join("")}</div>`
        : ""}
      <span class="badge badge-static">${esc(project.type || "Project")}</span>
      <h3 class="modal-title">${esc(project.title)}</h3>
      <p class="modal-copy">${esc(project.summary)}</p>

      <div class="chip-row" style="margin:10px 0 0;">
        ${(project.skills || []).slice(0, 10).map(s => `<span class="chip chip-static">${esc(s)}</span>`).join("")}
      </div>

      <hr class="sep"/>

      ${bullets.length
        ? `<h4 class="modal-section-title">What I did</h4><ul class="list modal-list">${bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>`
        : ""}

      ${instructorEvaluation.length
        ? `<h4 class="modal-section-title">Instructor Evaluation</h4><ul class="list modal-list">${instructorEvaluation.map(f => `<li>${esc(f)}</li>`).join("")}</ul>`
        : ""}

      ${linkBlock}
      ${mediaBlock}
      ${evaluationPdfBlock}
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
  if (fieldInstructorEvaluation) fieldInstructorEvaluation.value = "";
  if (fieldEvaluationPdf) fieldEvaluationPdf.value = "";
  if (fieldFeedback) fieldFeedback.value = "";
  fieldImages.value = "";
  evaluationPdfUploadDataUrl = "";
  setEvaluationPdfStatus("Upload a PDF for extraction or paste a saved PDF path.");
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
  const instructorEvaluation = getProjectInstructorEvaluation(project);
  if (fieldInstructorEvaluation) fieldInstructorEvaluation.value = instructorEvaluation.join("\n");
  if (fieldEvaluationPdf) fieldEvaluationPdf.value = getProjectEvaluationPdf(project);
  if (fieldFeedback) fieldFeedback.value = instructorEvaluation.join("\n");
  fieldImages.value = getProjectImages(project).join("\n");
  evaluationPdfUploadDataUrl = "";
  setEvaluationPdfStatus("Upload a PDF for extraction or paste a saved PDF path.");
}

function projectFromForm() {
  const evaluationLines = splitLines(fieldInstructorEvaluation?.value || fieldFeedback?.value || "");
  const typedEvaluationPdf = normalizeProjectAssetUrl(fieldEvaluationPdf?.value);
  const evaluationPdf = String(typedEvaluationPdf || evaluationPdfUploadDataUrl || "").trim();
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
    instructorEvaluation: evaluationLines,
    feedback: evaluationLines,
    evaluationPdf,
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
        instructorEvaluation: Array.isArray(item.instructorEvaluation)
          ? item.instructorEvaluation.map(String).map(v => v.trim()).filter(Boolean)
          : Array.isArray(item.feedback)
            ? item.feedback.map(String).map(v => v.trim()).filter(Boolean)
            : [],
        feedback: Array.isArray(item.feedback)
          ? item.feedback.map(String).map(v => v.trim()).filter(Boolean)
          : Array.isArray(item.instructorEvaluation)
            ? item.instructorEvaluation.map(String).map(v => v.trim()).filter(Boolean)
            : [],
        evaluationPdf: String(item.evaluationPdf || "").trim(),
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

if (fieldEvaluationPdfUpload) {
  fieldEvaluationPdfUpload.addEventListener("change", e => {
    const file = e.target.files?.[0];
    if (!file) {
      evaluationPdfUploadDataUrl = "";
      setEvaluationPdfStatus("Upload a PDF for extraction or paste a saved PDF path.");
      return;
    }

    if (!/\.pdf$/i.test(file.name) && file.type !== "application/pdf") {
      evaluationPdfUploadDataUrl = "";
      setEvaluationPdfStatus("Please upload a PDF file.", true);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      evaluationPdfUploadDataUrl = typeof reader.result === "string" ? reader.result : "";
      if (fieldEvaluationPdf) fieldEvaluationPdf.value = file.name;
      setEvaluationPdfStatus("PDF uploaded. Click Extract PDF Text to import comments.");
    };
    reader.onerror = () => {
      evaluationPdfUploadDataUrl = "";
      setEvaluationPdfStatus("Could not read that PDF. Try again.", true);
    };
    reader.readAsDataURL(file);
  });
}

if (extractEvaluationPdfBtn) {
  extractEvaluationPdfBtn.addEventListener("click", async () => {
    const pdfPath = String(fieldEvaluationPdf?.value || evaluationPdfUploadDataUrl || "").trim();
    if (!pdfPath) {
      setEvaluationPdfStatus("Add an evaluation PDF path or upload a PDF first.", true);
      return;
    }

    if (!isPdfFile(pdfPath) && !evaluationPdfUploadDataUrl) {
      setEvaluationPdfStatus("The evaluation PDF field must point to a .pdf file or PDF data URL.", true);
      return;
    }

    try {
      setEvaluationPdfStatus("Extracting text from PDF...");
      const source = evaluationPdfUploadDataUrl || pdfPath;
      const extractedText = await extractTextFromPdf(source);
      if (!extractedText) {
        setEvaluationPdfStatus("No text found in this PDF. It may be scanned images only.", true);
        return;
      }

      if (fieldInstructorEvaluation) {
        fieldInstructorEvaluation.value = extractedText;
      } else if (fieldFeedback) {
        fieldFeedback.value = extractedText;
      }
      setEvaluationPdfStatus("Text extracted. Review and edit before saving.");
    } catch {
      setEvaluationPdfStatus("Could not extract text from this PDF. Try a different file or paste text manually.", true);
    }
  });
}

/* =========
  Init
=========== */
syncProfileImageInput();
renderProfileImage();
refreshAll();

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
        instructorEvaluation: Array.isArray(item.instructorEvaluation)
          ? item.instructorEvaluation.map(String).map(v => v.trim()).filter(Boolean)
          : Array.isArray(item.feedback)
            ? item.feedback.map(String).map(v => v.trim()).filter(Boolean)
            : [],
        feedback: Array.isArray(item.feedback)
          ? item.feedback.map(String).map(v => v.trim()).filter(Boolean)
          : Array.isArray(item.instructorEvaluation)
            ? item.instructorEvaluation.map(String).map(v => v.trim()).filter(Boolean)
            : [],
        evaluationPdf: String(item.evaluationPdf || "").trim(),
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
