//======PSUEDO CODE============
// 1 - Kaç ürün sergileneceğini al
// 2 - Ürün sayısı ve container'ın belirlenmiş boyutuna göre
// ürünlerin widthlerini hesapla
// 3 - Her ürüne 1'den başlayarak object property olarak index ver,
// hepsine display: none ver
// 4 - Bu rakamlara göre ilk örn. 4 itemı displayle
// 5 - Sağ oka basınca gösterilen itemları sola kaydırıp
// display: none ver, gösterilen itemların index'lerinin 4
// fazlasına kadar olan itemları göster

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
calcWidthOfItem(4, defaultMargin);
setItemsWidth(itemWidth);

// Recalculate Slider Container Width when window resizes
window.addEventListener("resize", calcSliderWidth);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

leftArrow.addEventListener("click", plusSlides(-1));
rightArrow.addEventListener("click", plusSlides(1));
