`use strict`;

//--------------------------------------------------
// -------------------------------------------------- VARIABLE -----
// ----- RESPONSIVE -----
const resBreakpoints = [1200, 1000, 800, 600, 450];
const emBreakpoints = [75, 62.5, 50, 37.5, 28.125];

// ----- HEADER ------
const headerEl = document.querySelector(".header");
const headerNavEl = document.querySelector(".header__nav");
const headerNavItemEl = document.querySelectorAll(".header__nav__item");
const headerNavLinkEl = document.querySelectorAll(".header__nav__link");

const headerSubnavEl = document.querySelectorAll(".header__subnav");
const headerSubnavContainerEl = document.querySelectorAll(
  ".header__subnav__container"
);
const headerSubnavMainEl = document.querySelectorAll(".header__subnav__main");
const subnavLinkEl = document.querySelectorAll(".header__subnav__link");

const searchBar = document.querySelector(".c-search__input");
const searchBtn = document.querySelector(".c-search__button");

// ----- TODAY SECTION -----
const todayEl = document.querySelector(".section--today");

// ----- SALE SECTION -----
const saleImgEl = document.querySelectorAll(".sale__img");
const saleCatalogueEl = document.querySelectorAll(".sale__catalogue");
const saleTitleEl = document.querySelectorAll(".sale__title");
const saleMoreEl = document.querySelectorAll(".sale__more");

// ----- SEASON INTERACTIVE -----
const seasonalEl = document.querySelector(".seasonal__season");
const seasonEl = document.querySelectorAll(".season");
const seasonSubtitleEl = document.querySelectorAll(".season__subtitle");
const seasonFlowersEl = document.querySelectorAll(".season__flowers");

const activeSeason = document.querySelector(".active-season");

// ----- REVIEW STAR -----
const reviewShopEl = document.querySelector(".review__rating__star");
const reviewProductsEl = document.querySelectorAll(
  ".review__testimonials__star"
);
const reviewProductEl = document.querySelectorAll(".review__product__review");

// ----- FOOTER -----
const footerMapHeadEl = document.querySelectorAll(".footer__sitemap__header");

console.log(footerMapHeadEl);

// ---------------------------------------------------

// -
// -
// -
// -
// -

//--------------------------------------------------
// -------------------------------------------------- FUNCTIONS -----
const renderZPattern = function (nodeList, class1 = "_", class2 = "_") {
  nodeList.forEach(function (node, i) {
    if (i % 2 === 0) {
      node.classList.add(class1);
    } else {
      node.classList.add(class2);
    }
  });
};

const addClassToNodeList = function (nodeList, classToAdd) {
  nodeList.forEach((node) => node.classList.add(classToAdd));
};

const removeClassFromNodeList = function (nodeList, className) {
  nodeList.forEach((node) => node.classList.remove(className));
};

// ---------------------------------------------------

//-------------------------------------------------
// --------------------------------------------------- INIT PAGE ----
// ----- FUNCTIONS -----

const zPatternSale = function () {
  renderZPattern(
    saleCatalogueEl,
    "sale__catalogue--left",
    "sale__catalogue--right"
  );
  renderZPattern(saleImgEl, "sale__img--right", "sale__img--left");
  renderZPattern(saleImgEl, "_", "u-flip-img-h");
  renderZPattern(saleTitleEl, "sale__title--right", "sale__title--left");
  renderZPattern(saleMoreEl, "sale__more--left", "sale__more--right");
};

const initNodeListClases = function () {
  addClassToNodeList(headerSubnavContainerEl, "flex");
  addClassToNodeList(headerSubnavContainerEl, "flex--normal-h");
  addClassToNodeList(headerSubnavContainerEl, "flex--stretch-start");

  addClassToNodeList(headerSubnavEl, "flex");
  addClassToNodeList(headerSubnavEl, "flex--normal-v");
  addClassToNodeList(headerSubnavEl, "flex--stretch-center");

  addClassToNodeList(headerSubnavMainEl, "flex");
  addClassToNodeList(headerSubnavMainEl, "flex--normal-h");
  addClassToNodeList(headerSubnavMainEl, "flex--stretch-start");

  addClassToNodeList(reviewProductEl, "flex");
  addClassToNodeList(reviewProductEl, "flex--normal-v");
  addClassToNodeList(reviewProductEl, "flex--stretch-stretch");
};

const initZPattern = function () {
  zPatternSale();
};

const initPage = function () {
  // Z-Pattern style (currently only Sale Section):
  // initZPattern();
  initNodeListClases();
};

// -
// -
// -------------------------------------- SPECIFIC FUNCTIONALITY --
// ----- VARIABLES ------
const activeSeasonWidth = activeSeason.getBoundingClientRect().width;

let subnavOpen = 0;

// ----- FUNCTIONALITY ------
// --- TOP HEADER ---
headerSubnavEl.forEach((node) => {
  node.previousElementSibling.classList.add("nav__have-subnav");

  node.addEventListener("mouseenter", function (e) {
    e.target.previousElementSibling.classList.add("subnav-open");
    subnavOpen = 1;
  });

  node.addEventListener("mouseleave", function (e) {
    e.target.previousElementSibling.classList.remove("subnav-open");
    subnavOpen = 0;
  });
});

// --- TOP NAV ---
headerNavLinkEl.forEach(function (link) {
  if (link.classList.contains("nav__have-subnav")) {
    // --------------------------------------
    link.addEventListener("click", function (e) {
      if (subnavOpen === 1 && e.target.classList.contains("active-subnav")) {
        e.preventDefault();
        removeClassFromNodeList(headerNavLinkEl, "active-subnav");
        removeClassFromNodeList(headerNavLinkEl, "subnav-open");
        subnavOpen = 0;

        return subnavOpen;
      }

      e.preventDefault();
      removeClassFromNodeList(headerNavLinkEl, "active-subnav");
      removeClassFromNodeList(headerNavLinkEl, "subnav-open");
      e.target.classList.add("active-subnav");
      e.target.classList.add("subnav-open");
      subnavOpen = 1;
    });

    link.addEventListener("mouseenter", function (e) {
      e.target.classList.add("subnav-open");
      subnavOpen = 1;
    });

    link.addEventListener("mouseleave", function (e) {
      e.target.classList.remove("subnav-open");
      subnavOpen = 0;
    });

    link.addEventListener("focus", function (e) {
      removeClassFromNodeList(headerNavLinkEl, "subnav-open");
      e.target.classList.add("subnav-open");
      subnavOpen = 1;
    });

    link.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
  }
});

// --- SUBNAV ---
subnavLinkEl.forEach((el) => {
  el.addEventListener("click", function (e) {
    removeClassFromNodeList(headerNavLinkEl, "active-subnav");
    removeClassFromNodeList(headerNavLinkEl, "subnav-open");
  });
});

// CONTROL SUBNAV - HACK:
document.addEventListener("click", function (e) {
  if (
    e.target.closest(".header__subnav") === null &&
    !e.target.classList.contains("nav__have-subnav") &&
    subnavOpen > 0
  ) {
    removeClassFromNodeList(headerNavLinkEl, "subnav-open");
    subnavOpen = 0;
  }
});

// HIDE SUBNAV WHEN TABBING TO END - HACK:
subnavLinkEl[subnavLinkEl.length - 1].addEventListener("blur", (e) =>
  e.target
    .closest(".header__subnav")
    .previousElementSibling.classList.remove("subnav-open")
);

// --- SEASONAL ---
seasonEl.forEach((node) =>
  node.addEventListener("click", function (e) {
    removeClassFromNodeList(seasonEl, "active-season");
    node.classList.add("active-season");
  })
);
if (window.matchMedia(`(max-width: ${emBreakpoints[4]}em)`).matches) {
  seasonFlowersEl.forEach((node) => (node.style.width = null));
} else if (window.matchMedia(`(max-width: ${emBreakpoints[2]}em)`).matches) {
  seasonFlowersEl.forEach((node) => (node.style.width = `350px`));
} else {
  seasonFlowersEl.forEach(
    (node) => (node.style.width = `${(60 / 100) * activeSeasonWidth}px`)
  );
}

// --- FOOTER ACCORDION ---
if (window.matchMedia(`(max-width: ${emBreakpoints[2]}em)`).matches) {
  footerMapHeadEl.forEach((node) => {
    node.classList.add("accordion");

    node.addEventListener("click", function (e) {
      this.classList.toggle("accordion-active");

      const accItem = node.nextElementSibling;
      if (accItem.style.maxHeight) {
        accItem.style.maxHeight = null;
      } else {
        accItem.style.maxHeight = accItem.scrollHeight + "px";
      }
    });
  });
}

// else {
//   footerMapHeadEl.forEach((node) => {
//     node.classList.remove("accordion");
//   });
// }

// ------------------------------------------ GLOBAL FUNCTIONS ---

// ----- DYNAMIC ELEMENTS -----
const calculateSize = function () {
  // ----- VARIABLES -----
  const headerHeight = headerEl.getBoundingClientRect().height;
  const btnHeight = searchBtn.getBoundingClientRect().height;

  const viewportH = document.documentElement.clientHeight;

  // --- FUNCTIONS ---
  // - HEADER -
  todayEl.style.marginTop = `${headerHeight}px`;
  headerSubnavEl.forEach((node) => {
    node.style.top = `${headerHeight}px`;
  });

  searchBar.style.height = `${btnHeight + 2}px`;

  // - MOBILE SUBNAV -
  headerSubnavEl.forEach((node) => {
    const subNavH = node.getBoundingClientRect().height;
    if (subNavH + headerHeight >= viewportH) {
      node.style.height = `${viewportH - headerHeight}px`;
    } else if (subNavH + headerHeight < viewportH) {
      node.style.height = `auto`;
    }
  });
};

// ------------------------------------------ RUN ALL FUNCTIONS -----
// HACK: Mobile size elements not calculated properly onload
if (window.matchMedia(`(max-width: ${emBreakpoints[3]}em)`).matches) {
  calculateSize();
}

window.addEventListener("resize", function () {
  setTimeout(function () {
    calculateSize();
  }, 50);
});

initPage();
