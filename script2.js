document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".arrow")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".arrow");
  }
  if (handle != null) onHandleClick(handle);
});

// Select all items and turn into array
const itemList = document.querySelectorAll(".item");
const itemsArray = Array.from(itemList);

// Calculate the total number of items
const itemCount = itemsArray.length;

function onHandleClick(handle) {
  const slider = handle.closest(".slider-container").querySelector(".slider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (handle.classList.contains("left-arrow")) {
    if (sliderIndex - 1 < 0) {
      return;
    } else {
      slider.style.setProperty("--slider-index", sliderIndex - 1);
    }
  }

  if (handle.classList.contains("right-arrow")) {
    if (sliderIndex + 1 >= itemCount) {
      slider.style.setProperty("--slider-index", 0);
    } else {
      slider.style.setProperty("--slider-index", sliderIndex + 1);
    }
  }
}
