// Mobile menu toggle
const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

btn?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
});

// Active link highlight (works on GitHub Pages paths too)
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const target = href.split("/").pop();
    if (target && target === current) a.classList.add("active");
});

// Mobile-friendly dropdown: first tap opens submenu, second tap goes to Projects page
const dropdown = document.querySelector(".nav-dropdown");
const projectsLink = dropdown?.querySelector(".nav-link");
if (dropdown && projectsLink) {
    projectsLink.addEventListener("click", (e) => {
        const isMobile = window.matchMedia("(max-width: 860px)").matches;
        if (!isMobile) return;

        if (!dropdown.classList.contains("open")) {
            e.preventDefault();
            dropdown.classList.add("open");
        } else {
            dropdown.classList.remove("open");
        }
    });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());
