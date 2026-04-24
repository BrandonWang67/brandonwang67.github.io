/* ════════════════════════════════════════════════════
   USER CONFIG — edit these values to customize content
════════════════════════════════════════════════════ */
const resumePdf     = "BrandonWang_Resume.pdf";
const headshotImage = "headshot.jpg";

const experienceImages = ["e1.jpg", "e2.jpg", "e3.jpg"];

const experiences = [
  {
    blockEntries: [
      {
        title: "J&J MedTech",
        role: "Electrical Engineering Co-op",
        date: "Incoming August 2026",
        location: "Cincinnati, OH",
        bullets: ["Embedded Devices, Research and Development"]
      }
    ]
  },
  {
    blockEntries: [
      {
        title: "Northrop Grumman",
        role: "Electrical Engineering Intern",
        date: "Incoming May 2026",
        location: "Baltimore, MD",
        bullets: ["Mission Systems, Airborne Multifunction Sensors"]
      }
    ]
  },
  {
    blockEntries: [
      {
        title: "Electroscience Laboratory, WIT",
        role: "Undergraduate Researcher (Circle)",
        date: "Aug. 2025 - Present",
        location: "Columbus, OH",
        bullets: [
          "Leading hardware design for a wearable game controller for kids, in collaboration with Nationwide Children's Hospital",
          "Designing 12MHz transmitter/receiver pair schematic and layout, meeting a 40mm max footprint requirement",
          "Developing low-latency embedded firmware for the nRF52840 SoC to process real-time analog-to-digital inputs",
          "Optimized for passband frequency and signal integrity by simulating and characterizing custom Chebyshev filters"
        ]
      },
      {
        title: "Wearable & Implantable Tech. Lab, Electroscience Laboratory",
        role: "Undergraduate Researcher (MCG Sensors)",
        date: "Jan. 2024 - Jan. 2025",
        location: "Columbus, OH",
        bullets: [
          "Simplified MCG testing setup, reducing complexity by 50% and improving the signal-to-noise ratio (SNR) by 10%",
          "Wrote a signal processing program in MATLAB using EMD algorithm to extract averaged frame from large datasets",
          "Built a LabVIEW GUI to simultaneously collect and synchronize data from both MCG and electrocardiogram systems",
          "Created a new coil array housing to boost testing efficiency and enable color customization when testing with children"
        ]
      }
    ]
  },
  {
    blockEntries: [
      {
        title: "GE Appliances",
        role: "Electrical Engineering Co-op (Dishwashers, NPI)",
        date: "May 2025 - Aug. 2025",
        location: "Louisville, KY",
        bullets: [
          "Drove long-term design improvements and reliability by conducting root cause analysis (RCA) on 3 unique FRACAS",
          "Managed over 100+ dishwashers in field tests, ensuring up-to-date software, continuous operation, and test reliability",
          "Designed a ESP32 shield with VL53L0X IR sensor in Cadence Allegro to transmit distance data with 90% accuracy",
          "Built a Python automation tool to manage weekly OTA software and health checks, eliminating 95% of manual effort",
          "Reworked dishwashers in test labs to integrate a new LCD from an alternate manufacturer, ensuring 100% functionality"
        ]
      },
      {
        title: "GE Appliances",
        role: "Electrical Engineering Co-op (Refrigeration, COQ)",
        date: "Jan. 2025 - May 2025",
        location: "Louisville, KY",
        bullets: [
          "Used accelerated life testing (ALT) methods to evaluate and compare the long-term reliability of multiple LED models",
          "Designed test board panels to efficiently compare 5+ different LED color temperatures and its effect on appearance",
          "Performed ESD and power integrity validation tests using oscilloscopes and DMMs to identify root-cause of failures",
          "Validated reliability of new ultrasonic sensors by testing performance across varying sensitivity parameters",
          "Performed in-depth RCA on refrigerator PCBs to identify manufacturing defects and enhance overall quality control"
        ]
      }
    ]
  }
];

const projects = [
  {
    title: "Circle v2.0 (current project)",
    category: "Embedded Systems / RF Hardware",
    summary: "Enhancing hardware design, firmware capabilities, and user experience based on initial testing and feedback of Circle v1.0",
    tags: ["RF PCB Design", "Sensors", "Firmware"],
    pdf: "",
    image: "circleV2.png"
  },
  {
    title: "Touchy Tetris",
    category: "Embedded Systems / Sensors",
    summary: "MakeOHI/O 2026: An interactive Tetris game controlled via ultrasonic distance sensors and an ESP32 for a touchless gaming experience",
    tags: ["ESP32", "Ultrasonic Sensors", "Game Design"],
    pdf: "MakeOHIO2026.mp4",
    image: "tt.png"
  },
  {
    title: "Circle v1.0",
    category: "Embedded Systems / RF Hardware",
    summary: "Touch-based gaming sensor system with hardware and interaction design focused on accessible play",
    tags: ["RF PCB Design", "Sensors", "Prototyping"],
    pdf: "circle.pdf",
    image: "circleV1.jpg"
  },
  {
    title: "Magnetocardiogram Sensor",
    category: "Research / Biomedical Hardware",
    summary: "A 3D-printed sensor housing a coil array to measure the heart's biomagnetic signals non-invasively",
    tags: ["3D Printing", "Fusion360"],
    pdf: "mcg3.png",
    image: "mcg_sensor.jpg"
  },
  {
    title: "Time of Flight Sensor",
    category: "Sensors",
    summary: "An ESP32 shield using a VL53L0X IR sensor to enable wireless distance tracking for appliance testing",
    tags: ["ESP32", "IR Sensors", "Cadence Allegro"],
    pdf: "",
    image: "tof.jpg"
  },
  {
    title: "MCG Signal Filtering Program",
    category: "Digital Signal Processing",
    summary: "A MATLAB program that uses Empirical Mode Decomposition to average noisy signals into one clear frame",
    tags: ["MATLAB", "Data Analysis", "Signal Processing"],
    pdf: "",
    image: "filter1.png"
  },
  {
    title: "Assistive Device for Push Strollers",
    category: "Mechanical Design",
    summary: "An adaptable stroller attachment designed to ease the physical demands on caregivers",
    tags: ["Fusion360", "Prototyping", "Manufacturing"],
    pdf: "",
    image: "stroller.jpg"
  },
  {
    title: "APPA",
    category: "Robotics / Mechatronics",
    summary: "A 15lb combat robot with a 3.2lb vertical spinner weapon carrying a tip speed of 120mph",
    tags: ["Robotics", "Fusion360", "Manufacturing"],
    pdf: "appa.pdf",
    image: "appa.jpg"
  },
  {
    title: "Chickens vs. Zombies",
    category: "Software",
    summary: "Plants vs. Zombies inspired game programmed in MATLAB, First Year Engineering Project",
    tags: ["MATLAB", "Game Design"],
    pdf: "",
    image: "cvz2.png"
  },
  {
    title: "Birthday Binary Counter",
    category: "Digital Logic Design",
    summary: "Switches counting up in binary using logic gates to display birth date on seven segment display",
    tags: ["Digital Logic", "Breadboarding", "Logic Gates"],
    pdf: "birthday2.jpg",
    image: "birthday1.jpg"
  },
  {
    title: "2 Player Snake Game",
    category: "Embedded Systems / Gaming",
    summary: "Inspired by the game Tron, game controlled using joysticks and Arduino",
    tags: ["Arduino", "Python"],
    pdf: "",
    image: "tron.png"
  }
];


/* ════════════════════════════════════════════════════
   DOM REFS
════════════════════════════════════════════════════ */
const pages            = [...document.querySelectorAll(".page")];
const navButtons       = [...document.querySelectorAll("[data-page]")];
const mobileMenu       = document.getElementById("mobileMenu");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const htmlEl           = document.documentElement;
const themeLabel       = document.getElementById("themeLabel");
const themeIcon        = document.getElementById("themeIcon");
const themeIconMobile  = document.getElementById("themeIconMobile");
const timeline         = document.getElementById("timeline");
const projectsGrid     = document.getElementById("projectsGrid");
const resumeLink       = document.getElementById("resumeLink");
const modal            = document.getElementById("projectModal");
const modalClose       = document.getElementById("modalClose");
const modalTitle       = document.getElementById("modalTitle");
const modalCategory    = document.getElementById("modalCategory");
const modalSummary     = document.getElementById("modalSummary");
const modalFrame       = document.getElementById("modalFrame");
const headshotImageEl       = document.getElementById("headshotImageEl");
const headshotPlaceholderEl = document.getElementById("headshotPlaceholderEl");
const expCarouselContainer  = document.getElementById("expCarouselContainer");
const heroHeading           = document.getElementById("heroHeading");
const cursorDot             = document.getElementById("cursorDot");
const cursorRing            = document.getElementById("cursorRing");
const trailCanvas           = document.getElementById("trailCanvas");


/* ════════════════════════════════════════════════════
   CUSTOM CURSOR — sharp dot + lagged ring (always visible)
   Ring lingers behind at 8% lerp; revealed on first move
════════════════════════════════════════════════════ */
(function initCursor() {
  if (!cursorDot || !cursorRing) return;
  if (window.matchMedia("(hover: none)").matches) return;

  let mouseX = -300, mouseY = -300;
  let ringX  = -300, ringY  = -300;
  let revealed = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top  = mouseY + "px";

    if (!revealed) {
      revealed = true;
      cursorDot.style.opacity  = "1";
      cursorRing.style.opacity = "0.55"; /* always-visible ring */
    }
  });

  function animateRing() {
    /* lerp at 8% — slightly behind, but clearly tracking */
    ringX += (mouseX - ringX) * 0.08;
    ringY += (mouseY - ringY) * 0.08;
    cursorRing.style.left = ringX + "px";
    cursorRing.style.top  = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, [role='button'], label, input, select, textarea")) {
      document.body.classList.add("cursor-on-interactive");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, [role='button'], label, input, select, textarea")) {
      document.body.classList.remove("cursor-on-interactive");
    }
  });
})();


/* ════════════════════════════════════════════════════
   CURSOR TRAIL — connected comet tail
   Line segments drawn newest→oldest, tapered + fading
   LIFE: 1400ms so the tail lingers like a shooting star
════════════════════════════════════════════════════ */
(function initTrail() {
  if (!trailCanvas) return;
  if (window.matchMedia("(hover: none)").matches) return;

  const ctx   = trailCanvas.getContext("2d");
  const LIFE  = 500; /* ms — short, snappy tail */
  const trail = [];

  function resize() {
    trailCanvas.width  = window.innerWidth;
    trailCanvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  document.addEventListener("mousemove", (e) => {
    trail.push({ x: e.clientX, y: e.clientY, born: performance.now() });
  });

  function drawTrail() {
    ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    const now = performance.now();

    /* Prune dead points from the front */
    while (trail.length && now - trail[0].born > LIFE) trail.shift();

    /* Draw each segment as a tapered, fading line */
    for (let i = trail.length - 1; i >= 1; i--) {
      const p1  = trail[i];     /* newer */
      const p2  = trail[i - 1]; /* older */
      const age = now - p1.born;
      if (age > LIFE) continue;

      const t = 1 - age / LIFE; /* 1=fresh, 0=dead */

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(140, 175, 200, ${t * 0.30})`;
      ctx.lineWidth   = Math.max(t * 7, 0.5);
      ctx.lineCap     = "round";
      ctx.stroke();

      /* Outer glow on each segment for depth */
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(140, 175, 200, ${t * 0.06})`;
      ctx.lineWidth   = t * 18;
      ctx.stroke();
    }

    /* Bright head dot at the newest point */
    if (trail.length) {
      const head = trail[trail.length - 1];
      const age  = now - head.born;
      if (age < LIFE) {
        const t = 1 - age / LIFE;
        ctx.beginPath();
        ctx.arc(head.x, head.y, t * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 190, 210, ${t * 0.50})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(drawTrail);
  }
  drawTrail();
})();


/* ════════════════════════════════════════════════════
   BACKGROUND PARTICLES — interactive, cursor-repulsion
   Particles drift naturally; cursor movement pushes them
   in the opposite direction (like displacing water)
════════════════════════════════════════════════════ */
(function initBgParticles() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx   = canvas.getContext("2d");
  const COUNT = window.innerWidth < 768 ? 120 : 260;
  const REPEL_RADIUS = 160;

  let W, H;
  let mouseX = -999, mouseY = -999;
  let cursorVx = 0,  cursorVy = 0;
  let prevMX   = -999, prevMY = -999;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  /* Track cursor velocity for repulsion direction */
  document.addEventListener("mousemove", (e) => {
    cursorVx = e.clientX - prevMX;
    cursorVy = e.clientY - prevMY;
    prevMX   = mouseX;
    prevMY   = mouseY;
    mouseX   = e.clientX;
    mouseY   = e.clientY;
  });

  /* Decay velocity so particles settle when cursor stops */
  setInterval(() => { cursorVx *= 0.80; cursorVy *= 0.80; }, 40);

  function makeParticle() {
    const isSquare = Math.random() > 0.62;
    return {
      x:      Math.random() * window.innerWidth,
      y:      Math.random() * window.innerHeight,
      size:   Math.random() * (isSquare ? 7 : 5) + 1.5,
      square: isSquare,
      bvx:    (Math.random() - 0.5) * 0.20,          /* base drift */
      bvy:    (Math.random() - 0.5) * 0.14 - 0.03,   /* slight upward */
      vx: 0, vy: 0,                                  /* extra velocity */
      opacity: Math.random() * 0.45 + 0.15,
      phase:   Math.random() * Math.PI * 2,
      phSpd:   Math.random() * 0.006 + 0.002,
    };
  }

  const particles = Array.from({ length: COUNT }, makeParticle);

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const dark = document.documentElement.classList.contains("dark");

    for (const p of particles) {
      /* Cursor repulsion: push opposite to cursor movement */
      const dx   = p.x - mouseX;
      const dy   = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPEL_RADIUS && dist > 0) {
        const str = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * 0.05;
        p.vx -= cursorVx * str;
        p.vy -= cursorVy * str;
      }

      /* Friction — returns to natural drift */
      p.vx *= 0.95;
      p.vy *= 0.95;

      p.x += p.bvx + p.vx;
      p.y += p.bvy + p.vy;
      p.phase += p.phSpd;

      /* Wrap edges */
      if (p.x < -6)  p.x = W + 6;
      if (p.x > W+6) p.x = -6;
      if (p.y < -6)  p.y = H + 6;
      if (p.y > H+6) p.y = -6;

      const alpha = p.opacity * (0.70 + 0.30 * Math.sin(p.phase));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = dark
        ? `rgba(120, 190, 255, 1)`
        : `rgba(80,  155, 215, 1)`;

      if (p.square) {
        const half = p.size / 2;
        ctx.fillRect(p.x - half, p.y - half, p.size, p.size);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  draw();
})();


/* ════════════════════════════════════════════════════
   PARALLAX — subtle background grid drift on scroll
════════════════════════════════════════════════════ */
(function initParallax() {
  const showcase = document.getElementById("homeShowcase");
  if (!showcase) return;
  if (window.matchMedia("(max-width: 860px)").matches) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        showcase.style.setProperty("--parallax-y", `${window.scrollY * 0.18}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();


/* ════════════════════════════════════════════════════
   THEME — dark / light with smooth transition
════════════════════════════════════════════════════ */
function setTheme(mode) {
  htmlEl.classList.toggle("dark", mode === "dark");
  localStorage.setItem("portfolio-theme", mode);

  const dark = mode === "dark";
  if (themeLabel) themeLabel.textContent = dark ? "Light mode" : "Dark mode";
  themeIcon.setAttribute("icon",       dark ? "lucide:sun"  : "lucide:moon");
  themeIconMobile.setAttribute("icon", dark ? "lucide:sun"  : "lucide:moon");
}

const savedTheme = localStorage.getItem("portfolio-theme") || "light";
setTheme(savedTheme);

document.getElementById("themeToggle").addEventListener("click", () => {
  setTheme(htmlEl.classList.contains("dark") ? "light" : "dark");
});
document.getElementById("themeToggleMobile").addEventListener("click", () => {
  setTheme(htmlEl.classList.contains("dark") ? "light" : "dark");
});


/* ════════════════════════════════════════════════════
   PAGE NAVIGATION — SPA section switching
════════════════════════════════════════════════════ */
function showPage(pageId) {
  pages.forEach((page) => {
    const isTarget = page.id === pageId;
    page.classList.toggle("hidden", !isTarget);

    if (isTarget) {
      page.classList.remove("page-enter");
      void page.offsetWidth;
      page.classList.add("page-enter");
      setTimeout(() => page.classList.remove("page-enter"), 750);
      setTimeout(observeReveal, 80);
    }
  });

  navButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.page === pageId)
  );

  history.replaceState(null, "", "#" + pageId);
  mobileMenu.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => showPage(btn.dataset.page));
});

document.querySelector("[data-page-link='home']").addEventListener("click", (e) => {
  e.preventDefault();
  showPage("home");
});

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


/* ════════════════════════════════════════════════════
   HEADSHOT
════════════════════════════════════════════════════ */
function setupHeadshot() {
  if (headshotImage && headshotImage.trim() !== "") {
    headshotImageEl.src = headshotImage;
    headshotImageEl.classList.remove("hidden");
    headshotPlaceholderEl.classList.add("hidden");
  }
}


/* ════════════════════════════════════════════════════
   RESUME — set PDF link href
════════════════════════════════════════════════════ */
function setupResume() {
  if (resumeLink && resumePdf) resumeLink.href = resumePdf;
}


/* ════════════════════════════════════════════════════
   EXPERIENCE — timeline + image strip
════════════════════════════════════════════════════ */
function renderExperience() {
  timeline.innerHTML = experiences.map((block, blockIdx) => {
    const firstEntry = block.blockEntries[0];
    return `
      <article class="timeline-item reveal" style="--reveal-delay:${blockIdx * 0.14}s">
        <div class="timeline-card">
          <div class="timeline-header">
            <h3>${firstEntry.title}</h3>
            <div class="timeline-location">${firstEntry.location}</div>
          </div>
          ${block.blockEntries.map((exp) => `
            <div class="experience-entry">
              <div class="timeline-subheader">
                <div class="timeline-role">${exp.role}</div>
                <div class="timeline-date">${exp.date}</div>
              </div>
              <ul class="timeline-list">
                ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  if (experienceImages.length) {
    expCarouselContainer.innerHTML = experienceImages.map((src) =>
      `<img src="${src}" class="exp-carousel-img reveal" alt="Experience photo">`
    ).join("");
  }
}


/* ════════════════════════════════════════════════════
   MODAL — project PDF / video viewer
════════════════════════════════════════════════════ */
function openModal(project) {
  if (!project.pdf) return;
  modalTitle.textContent    = project.title;
  modalCategory.textContent = project.category;
  modalSummary.textContent  = project.summary;
  modalFrame.src            = project.pdf;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.src = "";
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });


/* ════════════════════════════════════════════════════
   PROJECTS — magazine grid with image-cover cards
════════════════════════════════════════════════════ */
function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = "";

  projects.forEach((project, index) => {
    const hasPdf = project.pdf && project.pdf.trim() !== "";
    const card   = document.createElement("article");
    card.className = "pm-card reveal";
    card.style.setProperty("--reveal-delay", `${(index % 4) * 0.08}s`);

    const imgSrc = project.image || "";

    card.innerHTML = `
      <div class="pm-img-wrap">
        ${imgSrc
          ? `<img src="${imgSrc}" alt="${project.title}" class="pm-img" loading="lazy">`
          : `<div class="pm-img-placeholder"></div>`
        }
      </div>
      <div class="pm-overlay">
        <div class="pm-content-base">
          <div class="pm-category">${project.category}</div>
          <h3 class="pm-title">${project.title}</h3>
        </div>
        <div class="pm-content-hover">
          <p class="pm-summary">${project.summary}</p>
          <div class="pm-tags">
            ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
        ${hasPdf ? `
        <button class="pm-view-btn" aria-label="View ${project.title}">
          <iconify-icon icon="lucide:arrow-up-right" width="16" height="16"></iconify-icon>
          View
        </button>` : ""}
      </div>
    `;

    if (hasPdf) {
      card.addEventListener("click", () => openModal(project));
      card.style.cursor = "pointer";
    }

    projectsGrid.appendChild(card);
  });
}


/* ════════════════════════════════════════════════════
   SCROLL REVEAL — bloom effect with blur resolve
════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.06, rootMargin: "0px 0px -28px 0px" }
);

function observeReveal() {
  document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
    revealObserver.observe(el);
  });
}


/* ════════════════════════════════════════════════════
   TYPEWRITER — slow, deliberate character reveal
════════════════════════════════════════════════════ */
function typewriter(el, speed = 42) {
  const text = el.textContent.trim();
  el.textContent = "";

  const cursor = document.createElement("span");
  cursor.className = "typer-cursor";
  el.appendChild(cursor);

  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      cursor.insertAdjacentText("beforebegin", text[i]);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


/* ════════════════════════════════════════════════════
   INIT — boot sequence
════════════════════════════════════════════════════ */
setupHeadshot();
setupResume();
renderExperience();
renderProjects();

requestAnimationFrame(() => observeReveal());

setTimeout(() => {
  if (heroHeading) typewriter(heroHeading, 42);
}, 900);

const hash = location.hash.replace("#", "");
if (hash && pages.some((p) => p.id === hash)) {
  showPage(hash);
}
