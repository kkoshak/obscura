const slider = $(".feedback-list").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd:false,
});

$(".button--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$(".button--next").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

const portfolio = $(".portfolio-list").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd:false,
});

$(".button--portfolio-prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$(".button--portfolio-next").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});