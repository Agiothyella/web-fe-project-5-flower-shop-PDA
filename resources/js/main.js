`use strict`;

//--------------------------------------------------
// -------------------------------------------------- VARIABLE -----
// ----- HEADER ------
const headerEl = document.querySelector(".header");
const headerNavEl = document.querySelector(".header__nav");
const headerSubnavEl = document.querySelectorAll(".header__subnav");
const headerSubnavContainerEl = document.querySelectorAll(
  ".header__subnav__container"
);
const headerSubnavMainEl = document.querySelectorAll(".header__subnav__main");
const headerNavItemEl = document.querySelectorAll(".header__nav__item");
const headerNavLinkEl = document.querySelectorAll(".header__nav__link");

const searchBar = document.querySelector(".c-search__input");
const searchBtn = document.querySelector(".c-search__button");

// ----- TODAY SECTION -----
const todayEl = document.querySelector(".section--today");

// ----- SALE SECTION -----
const saleImgEl = document.querySelectorAll(".sale__img");
const saleCatalogueEl = document.querySelectorAll(".sale__catalogue");
const saleTitleEl = document.querySelectorAll(".sale__title");
const saleSubtitleEl = document.querySelectorAll(".sale__subtitle");
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
};

const initZPattern = function () {
  renderZPattern(
    saleCatalogueEl,
    "sale__catalogue--left",
    "sale__catalogue--right"
  );
  renderZPattern(saleImgEl, "sale__img--right", "sale__img--left");
  renderZPattern(saleImgEl, "_", "u-flip-img-h");
  renderZPattern(
    saleTitleEl,
    "grid__self__pattern--end-2",
    "grid__self__pattern--start-2"
  );
  renderZPattern(saleTitleEl, "sale__title--right", "sale__title--left");
  renderZPattern(
    saleSubtitleEl,
    "sale__subtitle--left",
    "sale__subtitle--right"
  );
  renderZPattern(saleMoreEl, "sale__more--left", "sale__more--right");
};

const initPage = function () {
  initZPattern();
  initNodeListClases();
};

// ----- RUN FUNCTIONS -----
initPage();

// -
// -
// -------------------------------------- SPECIFIC FUNCTIONALITY --
// ----- VARIABLES ------
const headerHeight = headerEl.getBoundingClientRect().height;
const activeSeasonWidth = activeSeason.getBoundingClientRect().width;

const btnHeight = searchBtn.getBoundingClientRect().height;

const saleImgWidth = saleImgEl[0].getBoundingClientRect().width;

// ----- FUNCTIONALITY ------
// --- TOP HEADER ---
todayEl.style.marginTop = `${headerHeight}px`;

headerSubnavEl.forEach((node) => {
  node.style.top = `${headerHeight}px`;
  node.previousElementSibling.classList.add("nav__have-subnav");

  node.addEventListener("mouseenter", function (e) {
    e.target.previousElementSibling.classList.add("subnav-open");
  });

  node.addEventListener("mouseleave", function (e) {
    e.target.previousElementSibling.classList.remove("subnav-open");
  });
});

headerNavLinkEl.forEach(function (link) {
  if (link.classList.contains("nav__have-subnav")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      removeClassFromNodeList(headerNavLinkEl, "active-subnav");
      e.target.classList.add("active-subnav");
    });

    link.addEventListener("mouseenter", function (e) {
      e.target.classList.add("subnav-open");
    });

    link.addEventListener("mouseleave", function (e) {
      e.target.classList.remove("subnav-open");
    });

    link.addEventListener("focus", function (e) {
      removeClassFromNodeList(headerNavLinkEl, "subnav-open");
      e.target.classList.add("subnav-open");
    });
  }
});

// HACK:
const navHaveSubnav = document.querySelectorAll(".nav__have-subnav");
const lastHaveSubnav =
  navHaveSubnav[navHaveSubnav.length - 1].nextElementSibling;
const lastSubnav = lastHaveSubnav.querySelectorAll(".header__subnav__link");

lastSubnav[lastSubnav.length - 1].addEventListener("blur", (e) =>
  e.target
    .closest(".header__subnav")
    .previousElementSibling.classList.remove("subnav-open")
);

searchBar.style.height = `${btnHeight + 2}px`;

// --- SEASONAL ---
seasonEl.forEach((node) =>
  node.addEventListener("click", function (e) {
    removeClassFromNodeList(seasonEl, "active-season");
    node.classList.add("active-season");
  })
);

seasonFlowersEl.forEach(
  (node) => (node.style.width = `${(55 / 100) * activeSeasonWidth}px`)
);

// --- SALE ---
saleMoreEl.forEach(function (node) {
  if (node.classList.contains("sale__more--left")) {
    node.style.right = `${saleImgWidth + 12}px`;
  } else if (node.classList.contains("sale__more--right")) {
    node.style.left = `${saleImgWidth + 12}px`;
  }
});
