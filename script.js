// =========================
// JOP FOUNDATION INTERACTIONS
// =========================

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-link");
const progressBar = document.querySelector(".scroll-progress");
const year = document.querySelector("#year");

// Current year in footer
if (year) {
    year.textContent = new Date().getFullYear();
}

// =========================
// HEADER ON SCROLL
// =========================

function updateHeader() {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// =========================
// SCROLL PROGRESS
// =========================

function updateProgress() {
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// =========================
// MOBILE MENU
// =========================

function closeMenu() {
    menuToggle.classList.remove("open");
    navPanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("open");

    navPanel.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
    document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Close menu if user clicks outside the navigation panel
document.addEventListener("click", (event) => {
    const clickedInsideMenu =
        navPanel.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && navPanel.classList.contains("open")) {
        closeMenu();
    }
});

// =========================
// REVEAL ON SCROLL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);

revealElements.forEach((element) => revealObserver.observe(element));

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${id}`
                );
            });
        });
    },
    {
        threshold: 0.25,
        rootMargin: "-25% 0px -55% 0px"
    }
);

sections.forEach((section) => sectionObserver.observe(section));

// =========================
// IMAGE FALLBACKS
// =========================

document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
        image.style.display = "none";
        image.parentElement.classList.add("image-placeholder");
    });
});
