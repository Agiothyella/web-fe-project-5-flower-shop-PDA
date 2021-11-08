`use strict`;

//--------------------------------------------------
// -------------------------------------------------- VARIABLE -----
// ----- HEADER ------
const headerEl = document.querySelector(".header");
const headerNavEl = document.querySelector(".header__nav");
const headerSubnavEl = document.querySelectorAll(".header__subnav");

// ----- TODAY SECTION -----
const todayEl = document.querySelector(".section--today");

// ----- SALE SECTION -----
const saleImgEl = document.querySelectorAll(".sale__img");
const saleCatalogueEl = document.querySelectorAll(".sale__catalogue");
const saleTitleEl = document.querySelectorAll(".sale__title");
const saleSubtitleEl = document.querySelectorAll(".sale__subtitle");
const saleMoreEl = document.querySelectorAll(".sale__more");

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
// ----- SALE SECTION -----
const renderZPattern = function (nodeList, class1 = "_", class2 = "_") {
  nodeList.forEach(function (node, i) {
    if (i % 2 === 0) {
      node.classList.add(class1);
    } else {
      node.classList.add(class2);
    }
  });
};

const addClassToPrevSibling = function (nodeList, classToAdd) {
  nodeList.forEach((node) =>
    node.previousElementSibling.classList.add(classToAdd)
  );
};

const setRelativePositionToHeader = function () {
  const headerHeight = headerEl.getBoundingClientRect().height;

  todayEl.style.marginTop = `${headerHeight}px`;

  headerSubnavEl.forEach((el) => {
    el.style.top = `${headerHeight}px`;
  });
};
// ---------------------------------------------------

// -
// -
// -
// -
// -

//-------------------------------------------------
// --------------------------------------------------- INIT PAGE ----
// ----- FUNCTIONS -----
const initPage = function () {
  setRelativePositionToHeader();
  addClassToPrevSibling(headerSubnavEl, "nav__have-subnav");

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

// ----- RUN FUNCTIONS -----
initPage();
