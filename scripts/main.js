// JavaScript logic for OsaPortfolio
window.addEventListener("DOMContentLoaded", () => {
  // Matrix rain effect
  // Matrix rain canvas logic
  const canvas = document.getElementById("matrix-bg");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const chars =
      "01 23456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%&()*+,-./:;<=>?@[]^_`{|}~";
    const fontSize = 18;
    let columns = Math.floor(width / fontSize);
    let drops = Array.from({ length: columns }).map(() => 1);

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.13)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + "px 'JetBrains Mono', monospace";
      ctx.fillStyle = "#00FF41";
      for (let i = 0; i < drops.length; i++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.96) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    setInterval(draw, 35);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }).map(() => 1);
    });
  }

  // Side nav scroll-link/active logic
  const navLinks = document.querySelectorAll(".side-nav-sub-item a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 64,
          behavior: "smooth",
        });
      }
    });
  });

  // Add click handlers to main section items (like Contact)
  const navItems = document.querySelectorAll(".side-nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // Only handle if clicking the item itself, not sub-items
      if (
        e.target === item ||
        e.target.classList.contains("side-nav-label") ||
        e.target.classList.contains("side-nav-dot")
      ) {
        const section = item.getAttribute("data-section");
        if (section) {
          const target = document.getElementById(section);
          if (target) {
            // Update URL hash
            window.location.hash = section;

            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - 64,
              behavior: "smooth",
            });
          }
        }
      }
    });
  });

  function highlightSectionOnScroll() {
    let sectionMap = [];
    const navItems = document.querySelectorAll(".side-nav-item");
    const subItems = document.querySelectorAll(".side-nav-sub-item");

    // Get all navigation links
    navLinks.forEach((link) => {
      const id = link.getAttribute("href").substring(1);
      const el = document.getElementById(id);
      if (el) {
        sectionMap.push({
          link,
          el,
          subItem: link.closest(".side-nav-sub-item"),
        });
      }
    });

    let scrollY = window.scrollY;
    let activeSubItem = null;

    // Check which section is active and show its subsections
    sectionMap.forEach(({ link, el, subItem }) => {
      const offset = el.offsetTop - 70;
      const height = el.offsetHeight;
      if (scrollY >= offset && scrollY < offset + height) {
        link.classList.add("active");
        if (subItem) subItem.classList.add("active");
        activeSubItem = subItem;
      } else {
        link.classList.remove("active");
        if (subItem) subItem.classList.remove("active");
      }
    });

    // Hide all inactive subsections
    subItems.forEach((subItem) => {
      if (subItem !== activeSubItem) {
        subItem.classList.remove("active");
      }
    });

    // Determine which main section is active based on scroll position
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const isActive =
        scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;

      navItems.forEach((navItem) => {
        if (navItem.getAttribute("data-section") === section.id) {
          if (isActive) {
            navItem.classList.add("active");
          } else {
            navItem.classList.remove("active");
          }
        }
      });
    });
  }
  window.addEventListener("scroll", highlightSectionOnScroll);
  highlightSectionOnScroll();
});
