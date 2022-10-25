/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

//Selecting all elements with the tag 'section'.
var sections = [];
const allSections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function createNavbar() {
  allSections.forEach((section) => {
    sections.push(section.dataset.nav);
    const liElem = document.createElement("li");
    liElem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
    navbarList.append(liElem);
  });
}

function onViewport(element) {
  if (
    element.getBoundingClientRect().top <= 150 &&
    element.getBoundingClientRect().bottom >= 150
  ) {
    // console.log(`${element.dataset.nav} on viewport`);
    return true;
  } else {
    // console.log(`${element.dataset.nav} not on viewport`);
    return false;
  }
}

function addActiveClass(element) {
  element.classList.add("your-active-class");
}

function removeActiveClass(element) {
  element.classList.remove("your-active-class");
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// creating the nav
createNavbar();

// Add class 'active' to section when near top of viewport
function makeSectionActive() {
  allSections.forEach((section) => {
    if (onViewport(section)) {
      console.log(`${section.dataset.nav} is on view point`);
      addActiveClass(section);
      navbarList.querySelectorAll("li").forEach((li) => {
        if (li.textContent === section.dataset.nav) {
          li.querySelector("a").style.color = "#fff";
          li.style.backgroundColor = "#333";
          li.style.transition = "ease 0.3s all";
        }
      });
    } else if (!onViewport(section)) {
      console.log(`${section.dataset.nav} is not on view point`);
      removeActiveClass(section);
      navbarList.querySelectorAll("li").forEach((li) => {
        if (li.textContent === section.dataset.nav) {
          li.querySelector("a").style.color = "#000";
          li.style.backgroundColor = "#fff";
          // li.style.transition = "ease 0.3s all";
        }
      });
    }
  });
}

//Adding Scroll Event Listener to run makeSectionActive function on scrolling.
document.addEventListener("scroll", (e) => {
  e.preventDefault();
  makeSectionActive();
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Set sections as active
