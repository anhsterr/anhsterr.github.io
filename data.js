/**
 * Portfolio content.
 * Replace the placeholder values with your real info.
 */

window.portfolioData = {
  name: "Anh Nguyen",
  title: "AI Engineer / Researcher",
  subtitlePill: "AI Researcher",
  intro:
    "I am an AI engineer/researcher with 5+ years of experience in computer vision research. I mainly focus on generative models (image-to-image translation, diffusion models, and flow matching), and I enjoy turning research ideas into reliable engineering: clean data pipelines, reproducible training, and measurable improvements in real deployments. I collaborate across research and production teams, focusing on quality metrics, failure analysis, and faster iteration cycles so models become dependable at scale.",

  highlights: {
    focusK: "Focus",
    focusV: "Deep Learning, Computer Vision",
    locationK: "Location",
    locationV: "Seoul, South Korea",
    statusK: "Status",
    statusV: "Looking for AI engineer roles",
  },

  timeline: [
    {
      date: "2026.2",
      title: "Paper 'SCMIT: Style-Consistent Multi-Domain Image-to-Image Translation' accepted to IEEE Access",
      org: "",
      desc: "(Q1 SCIE, IF 3.6)",
    },
    {
      date: "2025.2",
      title: "Paper 'Content-Aware Preserving Image Generation' accepted to Neurocomputing",
      org: "",
      desc: "(Q1 SCIE, IF 5.5)",
    },
    {
      date: "2023.11",
      title: "Excellent Thesis Award - 'Anomaly Detection using Deep Learning'",
      org: "Korean Institute of Broadcast and Media Engineers Fall Academic Conference",
      desc: "",
    },
    {
      date: "2021.03",
      title: "Joined Visual Computing Lab as a PhD student",
      org: "",
      desc: "",
    },
  ],

  education: [
    {
      degree: "PhD in Electrical and Information Engineering",
      where: "Seoul National University of Science and Technology",
      dates: "2021-2026 (expected)",
      desc: "Thesis: Exploring GAN-based and Diffusion-based Networks for Image-to-Image Translation",
    },
    {
      degree: "B.S. in Information Communications and Technology",
      where: "Tampere University",
      dates: "2017-2021",
      desc: "Thesis: Automatic Text Generation Using Supervised Pre-training and Reinforcement Learning Based Adaptation",
    },
  ],

  publications: [
    {
      year: "2026",
      title: "SCMIT: Style-Consistent Multi-Domain Image-to-Image Translation",
      venue: "IEEE Access (Q1 SCIE, IF 3.6)",
      desc: "One-sentence summary of the contribution and why it matters.",
      links: [
        { label: "PDF", href: "#" },
        { label: "arXiv", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
    {
      year: "2025",
      title: "Content-Aware Preserving Image Generation",
      venue: "Neurocomputing (Q1 SCIE, IF 5.5)",
      desc: "Brief impact statement and how the work advances the field.",
      links: [{ label: "PDF", href: "#" }],
    },
    {
      year: "2026 (Under Review)",
      title: "AfMOE: Annotation and Training-Free Multi-Object Image Editing via Disentangled Attention Swapping",
      venue: "ECCV (A* CV conference)",
      desc: "Short description of results (placeholder).",
      links: [{ label: "PDF", href: "#" }],
    },
  ],

  projects: [
    {
      name: "Context-Based Data Augmentation App using Object Placement",
      description:
        "A framework to evaluate LLMs with reproducible test suites, failure taxonomies, and automatic reporting.",
      tags: ["Object Placement", "Data Augmentation", "Style Transfer"],
      thumbnail: { a: "#7c3aed", b: "#22d3ee", label: "Eval" },
      links: [{ label: "GitHub", href: "#" }],
    },
    {
      name: "Text-Guided Multi-Object Image Editing",
      description:
        "End-to-end system for training-free multi-object image editing using pre-trained FLUX.1 model",
      tags: ["Diffusion Model", "Flow Matching", "Generative AI"],
      thumbnail: { a: "#10b981", b: "#22d3ee", label: "Pipeline" },
      links: [{ label: "Case Study", href: "#" }],
    },
    {
      name: "Industrial Anomaly Detection using Ensembled Machine Learning",
      description:
        "A framework for anomaly detection in industrial settings using ensembled machine learning models.",
      tags: ["Anomaly Detection", "Machine Learning", "Industrial"],
      thumbnail: { a: "#f59e0b", b: "#7c3aed", label: "Robust" },
      links: [{ label: "Github", href: "#" }],
    },
    // {
    //   name: "Multimodal Retrieval Demo",
    //   description:
    //     "Interactive retrieval demo combining embeddings and reranking for text+image queries (placeholder).",
    //   tags: ["Retrieval", "Multimodal", "Reranking"],
    //   thumbnail: { a: "#22d3ee", b: "#10b981", label: "MM" },
    //   links: [{ label: "Demo", href: "#" }],
    // },
    // {
    //   name: "On-Device Model Optimization",
    //   description:
    //     "Quantization and runtime optimization experiments to reduce latency and memory without sacrificing accuracy.",
    //   tags: ["Optimization", "Quantization", "Latency"],
    //   thumbnail: { a: "#60a5fa", b: "#f59e0b", label: "Fast" },
    //   links: [{ label: "Notes", href: "#" }],
    // },
    // {
    //   name: "Benchmark Dashboard",
    //   description:
    //     "A dashboard that tracks experiments across runs, seeds, and datasets with easy comparisons and exports.",
    //   tags: ["Dashboards", "Tracking", "Analysis"],
    //   thumbnail: { a: "#a78bfa", b: "#22d3ee", label: "Dash" },
    //   links: [{ label: "Docs", href: "#" }],
    // },
  ],

  contact: {
    email: "anh.q.ng99@gmail.com",
    hint: "Quick response within 24 hours",
    actions: [
      { label: "Email", href: "mailto:anh.q.ng99@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/anh-nguyen-a48154147/" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=EDmOe_IAAAAJ&hl=en" },
      { label: "GitHub", href: "https://github.com/zachnguyen03" },
    ],
  },
};

