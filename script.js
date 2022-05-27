// Select Slider Container
const sliderContainer = document.querySelector(".slider-container");

// Select Slider Arrows
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Select all items and turn into array
const itemList = document.querySelectorAll(".item");
const itemsArray = Array.from(itemList);

// Default Values
let itemWidth = 0;
let defaultMargin = 18; // px
let sliderContainerWidth = 0;

function calcSliderWidth() {
  sliderContainerWidth = sliderContainer.offsetWidth;
}

function calcWidthOfItem(numberOfItemsVisible, margin) {
  itemWidth = sliderContainerWidth / numberOfItemsVisible - margin;
}

function setItemsWidth(itemWidth) {
  itemsArray.map((item) => {
    item.style.width = itemWidth + "px";
  });
}

// Initialize Slider
calcSliderWidth();
calcWidthOfItem(4, defaultMargin);
setItemsWidth(itemWidth);

// Recalculate Slider Container Width when window resizes
window.addEventListener("resize", calcSliderWidth);
