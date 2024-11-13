document.addEventListener('DOMContentLoaded', function () {
    const marks = document.querySelectorAll('.about-section mark');

    function animateMarks() {
        marks.forEach(mark => {
            const rect = mark.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                mark.classList.add('highlight');
            } else {
                mark.classList.remove('highlight');
            }
        });
    }

    // Run animation on scroll
    window.addEventListener('scroll', animateMarks);

    // Initial check in case some marks are already in view
    animateMarks();
});
