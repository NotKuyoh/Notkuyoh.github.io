<script>
document.addEventListener("scroll", function() {
    const mockup = document.querySelector(".iphone-mockup");
    const rect = mockup.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    mockup.classList.toggle("visible", isVisible);
});
</script>
