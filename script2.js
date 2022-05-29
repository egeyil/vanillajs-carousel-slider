// Select all items and turn into array
const itemList = document.querySelectorAll(".item");
const itemsArray = Array.from(itemList);

// Calculate the total number of items
const itemCount = itemsArray.length;

// Select Slider Arrows and add event listeners
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

document.querySelectorAll(".arrow").forEach((item) => {
  item.addEventListener("click", onHandleClick);
});

// Select Slider Container
const sliderContainer = document.querySelector(".slider-container");

// Select Slider
const slider = document.querySelector(".slider");

// Default Values
const defaultMargin = 18; // px
const numOfItemsVisible = 4;
let itemWidth = 0;
let sliderContainerWidth = 0;

function calcSliderWidth() {
  sliderWidth = slider.offsetWidth;
}

function calcWidthOfItem(numOfItemsVisible, itemsMargin) {
  itemWidth = sliderContainerWidth / numOfItemsVisible - itemsMargin;
}

function setItemsWidth(itemWidth) {
  itemsArray.map((item) => {
    item.style.width = itemWidth + "px";
  });
}

// Initialize Slider
calcSliderWidth();
calcWidthOfItem(numOfItemsVisible, defaultMargin);
setItemsWidth(itemWidth);

// Recalculate Slider Container Width when window resizes
window.addEventListener("resize", calcSliderWidth);

let visibleItemsIndex = numOfItemsVisible;

function onHandleClick(e) {
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (
    e.target.classList.contains("left-arrow") ||
    e.target.classList.contains("angle-icon-left")
  ) {
    if (sliderIndex - 1 < 0) {
      visibleItemsIndex = numOfItemsVisible;
    } else {
      slider.style.setProperty("--slider-index", sliderIndex - 1);
      visibleItemsIndex -= numOfItemsVisible;
    }
  }

  if (
    e.target.classList.contains("right-arrow") ||
    e.target.classList.contains("angle-icon-right")
  ) {
    if (visibleItemsIndex + 1 >= itemCount) {
      slider.style.setProperty("--slider-index", 0);
      visibleItemsIndex = numOfItemsVisible;
    } else {
      slider.style.setProperty("--slider-index", sliderIndex + 1);
      visibleItemsIndex += numOfItemsVisible;
    }
  }
  console.log(sliderIndex);
}
