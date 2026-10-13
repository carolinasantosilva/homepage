if (!track || !nextButton || !prevButton) return;

    nextButton.addEventListener("click", () => {
        track.scrollBy({
            left: track.clientWidth,
            behavior: "smooth"
        });
    });

    prevButton.addEventListener("click", () => {
        track.scrollBy({
            left: -track.clientWidth,
            behavior: "smooth"
        });
    });
});