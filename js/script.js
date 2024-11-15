///////////////////////////////////////////////////////////
// Mobile-Nav öffnen und schliessen
///////////////////////////////////////////////////////////

const mainNavMobileBtn = document.querySelector(".main-nav-mobile__btn");
const headerElement = document.querySelector(".header");

mainNavMobileBtn.addEventListener("click", function () {
  headerElement.classList.toggle("main-nav-mobile--open");
});

///////////////////////////////////////////////////////////
// Sticky Navbar
///////////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
  headerElement.classList.toggle("main-nav--sticky", window.scrollY > 0);
});

///////////////////////////////////////////////////////////
// Smooth scrolling für anchor elements inkl. Safari
// Schliessen Mobile-Nav beim klicken eines Links
///////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Zuständig für das Schliessen der Mobile-Nav
    if (headerElement.classList.contains("main-nav-mobile--open")) {
      headerElement.classList.toggle("main-nav-mobile--open");
    }

    // Zuständig für Anchor-Links
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Copyright-Jahr automatisch aktualisieren
///////////////////////////////////////////////////////////
const displayedYear = document.querySelector(".year-of-copy");
const currentYear = new Date().getFullYear();

if (displayedYear.textContent != currentYear) {
  displayedYear.textContent = displayedYear.textContent + " - " + currentYear;
}
