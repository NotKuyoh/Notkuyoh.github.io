document.addEventListener("DOMContentLoaded", function () {
  function highlight() {
    const scroll = window.scrollY; // Get the current scroll position
    const height = window.innerHeight; // Get the height of the viewport

    // Loop through each <mark> element and check if it's in view
    document.querySelectorAll(".about-section mark").forEach(function (mark) {
      const pos = mark.getBoundingClientRect().top + scroll; // Position of the mark relative to the document

      if (scroll + height >= pos && scroll < pos + mark.offsetHeight) {
        mark.classList.add("active"); // Add the 'active' class if the mark is in view
      } else {
        mark.classList.remove("active"); // Remove the 'active' class if the mark is out of view
      }

      // Debugging: Log the position of the mark and scroll position
      console.log(`Position: ${pos}, Scroll: ${scroll}`);
    });
  }

  // Attach the highlight function to the scroll event
  window.addEventListener("scroll", highlight);

  // Initial call to check visibility in case marks are already in view
  highlight();
});
