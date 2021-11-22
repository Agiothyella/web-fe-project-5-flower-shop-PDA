`use strict`;

//--------------------------------------------------
// -------------------------------------------------- VARIABLE -----
// ----- RESPONSIVE -----
const pxBreakpoints = [1200, 1000, 800, 600, 450];
const emBreakpoints = [75, 62.5, 50, 37.5, 28.125];

// ----- GLOBAL -----
const viewportInitH = document.documentElement.clientHeight;
const viewportInitW = document.documentElement.clientWidth;

// ----- HEADER ------
const headerEl = document.querySelector(".header");
const headerNavEl = document.querySelector(".header__nav");
const headerNavListEl = document.querySelector(".header__nav__list");
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

const headerNavSmallEl = document.querySelector(".header__nav-small");

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

// ---------------------------------------------------

//-
//-
//-
//-
//-

// ---------------------------------
// ------------------------------------------ GLOBAL FUNCTIONS ---
// ----- STATIC LAYOUT -----
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

// ----- DYNAMIC ELEMENTS -----
const calculateSize = function () {
  // ----- VARIABLES -----
  const btnHeightRes = searchBtn.getBoundingClientRect().height;
  const headerHeightRes = headerEl.getBoundingClientRect().height;

  const viewportH = document.documentElement.clientHeight;

  // --- FUNCTIONS ---
  // - HEADER -
  todayEl.style.marginTop = `${headerHeightRes}px`;
  searchBar.style.height = `${btnHeightRes + 2}px`;
  headerNavListEl.style.height = null;

  // - MOBILE SUBNAV -
  headerSubnavEl.forEach((node) => {
    node.style.top = `${headerHeightRes}px`;

    const subNavH = node.getBoundingClientRect().height;
    if (subNavH + headerHeightRes >= viewportH) {
      node.style.height = `${viewportH - headerHeightRes}px`;
    } else if (subNavH + headerHeightRes < viewportH) {
      node.style.height = `auto`;
    }
  });
};

// ----- MOBILE ELEMENTS -----
const calculateSizeMobile = function () {
  // ----- VARIABLES -----
  const btnHeightRes = searchBtn.getBoundingClientRect().height;
  const headerHeightRes = headerEl.getBoundingClientRect().height;

  const viewportH = document.documentElement.clientHeight;

  // --- FUNCTIONS ---
  // - HEADER -
  todayEl.style.marginTop = `${headerHeightRes}px`;

  // - MOBILE NAV -
  headerNavListEl.style.height = `${viewportH - headerHeightRes}px`;
  // if (navH + headerHeightRes >= viewportH) {
  //   headerNavListEl.style.height = `${viewportH - headerHeightRes}px`;
  // } else if (navH + headerHeightRes < viewportH) {
  //   headerNavListEl.style.height = `auto`;
  // }

  // - MOBILE SUBNAV -
  headerSubnavEl.forEach((node) => {
    node.style.top = null;
    node.style.height = null;
  });
};

// ----- SEASONAL LAYOUT -----
const seasonWidth = function () {
  const activeSeasonWidth = activeSeason.getBoundingClientRect().width;

  if (window.matchMedia(`(max-width: ${emBreakpoints[4]}em)`).matches) {
    seasonFlowersEl.forEach((node) => (node.style.width = null));
  } else if (window.matchMedia(`(max-width: ${emBreakpoints[2]}em)`).matches) {
    seasonFlowersEl.forEach((node) => (node.style.width = `350px`));
  } else {
    seasonFlowersEl.forEach(
      (node) => (node.style.width = `${(60 / 100) * activeSeasonWidth}px`)
    );
  }
};

// --------------------------------------------------

//-
//-
//-
//-
//-

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
  // Z-Pattern style on Sale section:
  // initZPattern();
  initNodeListClases();
};

// ---------------------------------------------------

// -
// -
// -
// -
// -

// -------------------------------------- SPECIFIC FUNCTIONALITY --
// ----- VARIABLES ------
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
      // calculateSize();
      subnavOpen = 1;
    });

    link.addEventListener("mouseenter", function (e) {
      if (window.matchMedia(`(max-width: ${emBreakpoints[3]}em)`).matches) {
        return null;
      } else {
        e.target.classList.add("subnav-open");
        calculateSize();
        subnavOpen = 1;
      }
    });

    link.addEventListener("mouseleave", function (e) {
      if (window.matchMedia(`(max-width: ${emBreakpoints[3]}em)`).matches) {
        return null;
      } else {
        e.target.classList.remove("subnav-open");
        subnavOpen = 0;
      }
    });

    link.addEventListener("focus", function (e) {
      removeClassFromNodeList(headerNavLinkEl, "subnav-open");
      e.target.classList.add("subnav-open");
      calculateSize();
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

// --- MOBILE NAV BUTTON ---
headerNavSmallEl.addEventListener("click", function (e) {
  headerNavListEl.classList.toggle("mobile__nav-open");
  removeClassFromNodeList(headerNavLinkEl, "active-subnav");
  removeClassFromNodeList(headerNavLinkEl, "subnav-open");

  setTimeout(calculateSizeMobile, 105);
});

// --- SEASONAL ---
seasonEl.forEach((node) =>
  node.addEventListener("click", function (e) {
    removeClassFromNodeList(seasonEl, "active-season");
    node.classList.add("active-season");
  })
);

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

// ------------------------------------------

//-
//-
//-
//-
//-

// ----------------------------------------
// ------------------------------------------ RUN ALL FUNCTIONS -----
// HACK: Mobile size elements not calculated properly onload
if (viewportInitW > pxBreakpoints[3]) {
  calculateSize();
} else {
  calculateSizeMobile();
}

window.addEventListener("resize", function () {
  seasonWidth();

  if (window.matchMedia(`(max-width: ${emBreakpoints[3]}em)`).matches) {
    removeClassFromNodeList(headerNavLinkEl, "active-subnav");
    removeClassFromNodeList(headerNavLinkEl, "subnav-open");

    subnavOpen = 0;

    calculateSizeMobile();
  } else {
    headerNavListEl.classList.remove("mobile__nav-open");
    removeClassFromNodeList(headerNavLinkEl, "subnav-open");

    calculateSize();
  }
});

seasonWidth();
initPage();
