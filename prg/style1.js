TweenMax.staggerFrom(
    ".btn",
    2,
    { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true },
    0.2
);
  
  $(".btn").click(function () {
    TweenMax.staggerTo(
      ".btn",
      0.5,
      { opacity: 0, y: -100, ease: Back.easeIn },
      0.1
    );
});
  